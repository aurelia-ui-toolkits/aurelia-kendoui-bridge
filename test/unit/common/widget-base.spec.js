import 'kendo-ui/js/kendo.button.min';
import {Container} from 'aurelia-dependency-injection';
import {TemplatingEngine} from 'aurelia-templating';
import {TemplateCompiler} from 'src/common/template-compiler';
import {initialize} from 'aurelia-pal-browser';
import {TaskQueue} from 'aurelia-task-queue';
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


  it('sets viewResources on the widget', () => {
    sut._getOptions = jasmine.createSpy().and.returnValue({});
    sut.controlName = 'kendoButton';
    let parentCtx = { a: 'b'};
    let viewResources = {
      'a': 'b'
    };
    sut.useViewResources(viewResources);
    let widget = sut.createWidget({
      element: DOM.createElement('div'),
      parentCtx: parentCtx
    });

    expect(widget._$resources).toBe(viewResources);
    expect(widget.options._$resources[0].a).toBe('b');
  });

  it('createWidget looks at the rootElement for event attributes when a rootElement is supplied', () => {
    sut.getOptionsFromBindables = jasmine.createSpy().and.returnValue({});
    let events = ['test1', 'test2'];

    sut.kendoEvents = events;
    sut.controlName = 'kendoButton';
    sut.viewModel = { options: {} };

    let attrs = events.map(e => 'k-on-' + e);

    let rootElement = DOM.createElement('div');
    rootElement.setAttribute(attrs[0], 'test');
    rootElement.setAttribute(attrs[1], 'test2');

    let widget = sut.createWidget({
      element: DOM.createElement('div'),
      parentCtx: {},
      rootElement: rootElement
    });

    expect(widget.options[events[0]]).toEqual(jasmine.any(Function));
    expect(widget.options[events[1]]).toEqual(jasmine.any(Function));
  });


  it('handles value binding and sets initial value', () => {
    sut._getOptions = jasmine.createSpy().and.returnValue({});
    let widgetFake = {
      first: jasmine.createSpy(),
      value: jasmine.createSpy().and.returnValue('initialValue')
    };
    sut._createWidget = () => widgetFake;
    sut.controlName = 'kendoDropDownList';
    sut.viewModel = {};
    sut.useValueBinding();

    let widget = sut.createWidget({
      element: DOM.createElement('div'),
      parentCtx: {}
    });

    // check if initial kValue is set
    // verify that the change event is registered to
    expect(widgetFake.value).toHaveBeenCalled();
    let args = widgetFake.first.calls.argsFor(0);
    expect(args[0]).toBe('change');
    expect(widgetFake.first).toHaveBeenCalled();
    expect(sut.viewModel.kValue).toBe('initialValue');


    // raise 'change' event, check if kValue changed
    widgetFake.value = jasmine.createSpy().and.returnValue('changedValue');
    args[1]({ sender: widget });
    expect(sut.viewModel.kValue).toBe('changedValue');
  });


  it('uses valueBindingProperty', () => {
    sut.controlName = 'kendoMobileSwitch';
    sut.viewModel = {};
    sut.useValueBinding('checked', 'check');
    let widgetFake = {
      first: jasmine.createSpy(),
      check: jasmine.createSpy()
    };
    sut._createWidget = () => widgetFake;

    let widget = sut.createWidget({
      element: DOM.createElement('div'),
      parentCtx: {}
    });

    sut.handlePropertyChanged(widget, 'kChecked', 2, 1);
    sut.handlePropertyChanged(widget, 'kValue', 4, 3);

    expect(widget.check).toHaveBeenCalledWith(2);
    expect(widget.check).not.toHaveBeenCalledWith(4);
  });
});
