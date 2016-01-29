import 'kendo-ui/js/kendo.button.min';
import {Container} from 'aurelia-dependency-injection';
import {TemplatingEngine} from 'aurelia-templating';
import {TemplateCompiler} from 'src/common/template-compiler';
import {initialize} from 'aurelia-pal-browser';
import {TaskQueue} from 'aurelia-framework';
import {DOM} from 'aurelia-pal';
import {WidgetBase} from 'src/common/widget-base';

describe('WidgetBase', () => {
  let sut;
  let templateCompilerFake;
  let container;
  let templatingEngine;

  beforeEach(() => {
    initialize();

    // noop angular callback
    kendo.ui.Widget.prototype.angular = () => {};

    templateCompilerFake = {
      initialize: jasmine.createSpy()
    };

    container = new Container();
    container.registerInstance(TemplateCompiler, templateCompilerFake);
    container.registerInstance(TaskQueue, {});

    templatingEngine = container.get(TemplatingEngine);
    sut = templatingEngine.createViewModelForUnitTest(WidgetBase);

    jQuery.fn.myControl = {
      widget: {
        prototype: {
          options: {}
        }
      }
    };
  });

  it('initializes the templatecontroller in the constructor', () => {
    expect(templateCompilerFake.initialize).toHaveBeenCalled();
  });

  it('stores kendoOptions and kendoEvents when control is configured', () => {
    let controlName = 'kendoButton';
    let a = sut.control(controlName);

    expect(a).toBe(sut);
    expect(a.controlName).toBe('kendoButton');
    expect(a.kendoOptions).toBe(jQuery.fn[controlName].widget.prototype.options);
    expect(a.kendoEvents).toBe(jQuery.fn[controlName].widget.prototype.events);
  });

  it('throws error when Kendo control does not exist', () => {
    let controlName = 'kendoNonExisting';
    expect(() => sut.control(controlName)).toThrow(new Error('The name of control kendoNonExisting is invalid or not set'));
  });

  it('stores viewmodel', () => {
    let vm = {};
    sut.viewModel = { some: 'prop' };
    sut.linkViewModel(vm);

    expect(sut.viewModel).toBe(vm);
  });

  it('throws error linkViewModel is called without viewModel', () => {
    expect(function() {
      sut.linkViewModel(undefined);
    }).toThrow(new Error('viewModel is not set'));
  });

  it('destroys the Kendo widget', () => {
    let destroySpy = jasmine.createSpy();
    let widget = {
      destroy: destroySpy
    };
    sut.destroy(widget);

    expect(destroySpy).toHaveBeenCalled();
  });

  it('getEventOptions registers on events', () => {
    let element = DOM.createElement('div');
    sut.kendoEvents = ['ready', 'done', 'finished'];
    element.setAttributeNode(document.createAttribute('k-on-ready'));
    element.setAttributeNode(document.createAttribute('k-on-done'));

    let returnedOptions = sut.getEventOptions(element);

    expect(returnedOptions.ready).not.toBeUndefined();
    expect(returnedOptions.done).not.toBeUndefined();
    expect(returnedOptions.finished).toBeUndefined();
  });

  it('getEventOptions throws when kendo event does not exist', () => {
    let element = DOM.createElement('div');
    sut.kendoEvents = ['ready'];
    sut.controlName = 'myControl';
    element.setAttributeNode(document.createAttribute('k-on-done'));

    expect(function() {
      sut.getEventOptions(element);
    }).toThrow(new Error('done is not an event on the myControl control'));
  });

  it('setDefaultBindableValues sets default bindable values correctly', () => {
    sut.viewModel = {};

    sut.kendoOptions = {
      prop: 'b'
    };

    sut.setDefaultBindableValues();

    expect(sut.viewModel.kProp).toBe('b');
  });

  it('setDefaultBindableValues throws error when viewModel is not set', () => {
    sut.viewModel = undefined;

    expect(function() {
      sut.setDefaultBindableValues();
    }).toThrow(new Error('viewModel is not set'));
  });

  it('createWidget throws error when option is missing', () => {
    expect(function() {
      sut.createWidget();
    }).toThrow(new Error('the createWidget() function needs to be called with an object'));

    expect(function() {
      sut.createWidget({
        parentCtx: {}
      });
    }).toThrow(new Error('element is not set'));

    expect(function() {
      sut.createWidget({
        element: DOM.createElement('div')
      });
    }).toThrow(new Error('parentCtx is not set'));
  });

  it('createWidget calls hooks', () => {
    let beforeSpy = jasmine.createSpy();
    sut._getOptions = jasmine.createSpy().and.returnValue({});
    sut.controlName = 'kendoButton';
    sut.createWidget({
      element: DOM.createElement('div'),
      parentCtx: {},
      beforeInitialize: beforeSpy
    });

    expect(beforeSpy).toHaveBeenCalled();

    let afterSpy = jasmine.createSpy();
    sut.createWidget({
      element: DOM.createElement('div'),
      parentCtx: {},
      afterInitialize: afterSpy
    });

    expect(afterSpy).toHaveBeenCalled();
  });

  it('createWidget sets parent context on options and widget', () => {
    sut._getOptions = jasmine.createSpy().and.returnValue({});
    sut.controlName = 'kendoButton';
    let parentCtx = { a: 'b'};
    let widget = sut.createWidget({
      element: DOM.createElement('div'),
      parentCtx: parentCtx
    });

    expect(widget._$parent.a).toBe('b');
    expect(widget.options._$parent[0].a).toBe('b');
  });

  it('getOptionsFromBindables harvests properties from viewModel', () => {
    sut.kendoOptions = {
      option1: null,
      test: null
    };
    let datasource = {};

    sut.viewModel = {
      kOption1: 'a',
      kTest: 'b',
      kDataSource: datasource
    };

    let options = sut.getOptionsFromBindables();

    expect(options.option1).toBe('a');
    expect(options.test).toBe('b');
    expect(options.dataSource).toBe(datasource);
  });

  it('createWidget looks at the rootElement for event attributes when a rootElement is supplied', () => {
    sut.getOptionsFromBindables = jasmine.createSpy().and.returnValue({});
    let events = ["test1", "test2"];

    sut.kendoEvents = events;
    sut.controlName = 'kendoButton';
    sut.viewModel = { options: {} };

    let attrs = events.map(e => "k-on-" + e);

    var rootElement = DOM.createElement('div');
    rootElement.setAttribute(attrs[0], "test");
    rootElement.setAttribute(attrs[1], "test2");

    let widget = sut.createWidget({
      element: DOM.createElement('div'),
      parentCtx: {},
      rootElement: rootElement  
    });

    expect(widget.options[events[0]]).toEqual(jasmine.any(Function));
    expect(widget.options[events[1]]).toEqual(jasmine.any(Function));
  });

});
