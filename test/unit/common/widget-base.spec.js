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
    let destroySpy = jasmine.createSpy();
    let widget = {
      destroy: destroySpy,
      element: DOM.createElement('div')
    };
    sut.destroy(widget);

    expect(destroySpy).toHaveBeenCalled();


    destroySpy = jasmine.createSpy();
    widget = {
      destroy: destroySpy,
      wrapper: DOM.createElement('div')
    };
    sut.destroy(widget);

    expect(destroySpy).toHaveBeenCalled();


    destroySpy = jasmine.createSpy();
    widget = {
      destroy: destroySpy,
      wrapper: null
    };
    sut.destroy(widget);

    expect(destroySpy).not.toHaveBeenCalled();


    destroySpy = jasmine.createSpy();
    widget = {
      destroy: destroySpy,
      element: null
    };
    sut.destroy(widget);

    expect(destroySpy).not.toHaveBeenCalled();
  });

  it('does not destroy widget when element property is null/undefined', () => {
    let destroySpy = jasmine.createSpy();
    let widget = {
      destroy: destroySpy,
      element: null
    };
    sut.destroy(widget);

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

    expect(widget._$parent.a).toBe('b');
    expect(widget.options._$parent[0].a).toBe('b');
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

    expect(widget._$resources).toBe(viewResources);
    expect(widget.options._$resources[0].a).toBe('b');
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


  it('handles value binding and sets initial value', () => {
    let widgetFake = new WidgetFake();
    widgetFake.value.and.returnValue('initialValue');
    spyOn(sut, '_createWidget').and.returnValue(widgetFake);

    sut.control('kendoDropDownList')
    .linkViewModel({})
    .useValueBinding();

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
    sut.control('kendoMobileSwitch')
    .linkViewModel({})
    .useValueBinding('checked', 'check');

    let widgetFake = new WidgetFake();
    spyOn(sut, '_createWidget').and.returnValue(widgetFake);

    let widget = sut.createWidget({
      element: DOM.createElement('div'),
      parentCtx: {}
    });

    sut.handlePropertyChanged(widget, 'kChecked', 2, 1);
    sut.handlePropertyChanged(widget, 'kValue', 4, 3);

    expect(widget.check).toHaveBeenCalledWith(2);
    expect(widget.check).not.toHaveBeenCalledWith(4);
  });


  it('_handleChange takes valueBindingProperty into account', () => {
    let widget = new WidgetFake();
    widget.check.and.returnValue('foo');

    sut.linkViewModel({})
    .useValueBinding('checked', 'check');

    sut._handleChange(widget);

    expect(widget.check).toHaveBeenCalled();
    expect(sut.viewModel.kChecked).toBe('foo');
  });
});

export class WidgetFake {
  first = jasmine.createSpy();
  value = jasmine.createSpy();
  check = jasmine.createSpy();
  destroy = jasmine.createSpy();
}
