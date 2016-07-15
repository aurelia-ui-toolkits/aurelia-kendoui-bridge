import '../setup';
import 'kendo-ui/js/kendo.button.min';
import 'kendo-ui/js/kendo.dropdownlist.min';
import 'kendo-ui/js/kendo.mobile.switch.min';
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
    let vm = {
      kWidget: $(DOM.createElement('div')).kendoButton()
    };
    sut.linkViewModel(vm);
    let destroySpy = spyOn(kendo, 'destroy');
    sut.destroy(vm.kWidget);

    expect(destroySpy).toHaveBeenCalled();
    expect(vm.kWidget).toBe(null);

    destroySpy.calls.reset();
    sut.destroy(null);

    expect(destroySpy).not.toHaveBeenCalled();
  });

  it('getEventOptions registers on events', () => {
    sut.control('kendoButton');
    let element = DOM.createElement('div');
    element.setAttributeNode(document.createAttribute('k-on-click'));

    let returnedOptions = sut.getEventOptions(element);

    expect(returnedOptions.click).not.toBeUndefined();
    expect(returnedOptions.finished).toBeUndefined();
  });

  it('getEventOptions throws when kendo event does not exist', () => {
    let element = DOM.createElement('div');
    sut.control('kendoButton');
    element.setAttributeNode(document.createAttribute('k-on-done'));
    element.setAttributeNode(document.createAttribute('k-on-click'));

    expect(function() {
      sut.getEventOptions(element);
    }).toThrow(new Error('done is not an event on the kendoButton control'));
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
  });

  it('createWidget calls hooks', () => {
    sut.control('kendoButton')
    .linkViewModel({});

    let beforeSpy = jasmine.createSpy();
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
    sut.control('kendoButton')
    .linkViewModel({});

    let widget = sut.createWidget({
      element: DOM.createElement('div'),
      parentCtx: { a: 'b'}
    });

    expect(widget.$angular[0]._$parent.a).toBe('b');
    expect(widget.options.$angular[0]._$parent.a).toBe('b');
  });


  it('sets viewResources on the widget', () => {
    let viewResources = {
      'a': 'b'
    };

    sut.control('kendoButton')
    .linkViewModel({})
    .useViewResources(viewResources);

    let widget = sut.createWidget({
      element: DOM.createElement('div'),
      parentCtx: { a: 'b'}
    });

    expect(widget.$angular[0]._$resources).toBe(viewResources);
    expect(widget.options.$angular[0]._$resources.a).toBe('b');
  });

  it('createWidget looks at the rootElement for event attributes when a rootElement is supplied', () => {
    // sut.getOptionsFromBindables = jasmine.createSpy().and.returnValue({});
    sut.control('kendoButton')
    .linkViewModel({ options: {} });

    let rootElement = DOM.createElement('div');
    rootElement.setAttribute('k-on-click', 'click');

    let widget = sut.createWidget({
      element: DOM.createElement('div'),
      parentCtx: {},
      rootElement: rootElement
    });

    expect(widget.options.click).toEqual(jasmine.any(Function));
  });


  it('registers to change and dataBound events for value binding', () => {
    let widgetFake = new WidgetFake();
    spyOn(sut, '_createWidget').and.returnValue(widgetFake);

    sut.control('kendoDropDownList')
    .linkViewModel({})
    .useValueBinding();

    sut.createWidget({
      element: DOM.createElement('div'),
      parentCtx: {}
    });

    // check if initial kValue is set
    // verify that the change event is registered to
    let args = widgetFake.first.calls.argsFor(0);
    expect(args[0]).toBe('change');
    expect(widgetFake.first).toHaveBeenCalled();

    // for remote databinding listen to the dataBound event
    expect(widgetFake.first.calls.argsFor(1)[0]).toBe('dataBound');
  });

  it('uses Kendo API functions to set wrapper viewmodel properties', () => {
    let widgetFake = new WidgetFake();
    let vm = {
      kValue: 'foo'
    };
    spyOn(sut, '_createWidget').and.returnValue(widgetFake);

    sut.control('kendoDropDownList')
    .linkViewModel(vm)
    .bindToKendo('kValue', 'value');

    sut.createWidget({
      element: DOM.createElement('div'),
      parentCtx: {}
    });

    expect(widgetFake.value).toHaveBeenCalledWith('foo');

    // ignore empty strings because it messes up the dropdownlist initial value
    // https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/issues/470

    vm = {
      kValue: ''
    };

    widgetFake.value.calls.reset();

    sut.control('kendoDropDownList')
    .linkViewModel(vm);

    sut.createWidget({
      element: DOM.createElement('div'),
      parentCtx: {}
    });

    expect(widgetFake.value).not.toHaveBeenCalled();
  });


  it('supports property binding to Kendo API functions', () => {
    sut.control('kendoMobileSwitch')
    .linkViewModel({})
    .bindToKendo('kValue', 'value')
    .bindToKendo('kChecked', 'check')
    .bindToKendo('kReadOnly', 'readonly');

    let widgetFake = new WidgetFake();
    spyOn(sut, '_createWidget').and.returnValue(widgetFake);

    let widget = sut.createWidget({
      element: DOM.createElement('div'),
      parentCtx: {}
    });

    sut.handlePropertyChanged(widget, 'kChecked', 2, 1);
    sut.handlePropertyChanged(widget, 'kValue', 4, 3);
    sut.handlePropertyChanged(widget, 'kReadOnly', true, false);

    expect(widget.check).toHaveBeenCalledWith(2);
    expect(widget.value).toHaveBeenCalledWith(4);
    expect(widget.readonly).toHaveBeenCalledWith(true);
  });


  it('_handleValueChange takes valueBindingProperty and valueFunction into account', () => {
    let widget = new WidgetFake();
    widget.check.and.returnValue('foo');

    sut.linkViewModel({})
    .useValueBinding('kChecked', 'check');

    sut._handleValueChange(widget);

    expect(widget.check).toHaveBeenCalled();
    expect(sut.viewModel.kChecked).toBe('foo');
  });
});

export class WidgetFake {
  first = jasmine.createSpy();
  value = jasmine.createSpy();
  check = jasmine.createSpy();
  readonly = jasmine.createSpy();
  destroy = jasmine.createSpy();
}
