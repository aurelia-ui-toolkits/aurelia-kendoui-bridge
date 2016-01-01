import {Container} from 'aurelia-dependency-injection';
import {TemplateCompiler} from 'src/common/template-compiler';
import {initialize} from 'aurelia-pal-browser';
import {TaskQueue} from 'aurelia-framework';
import {DOM} from 'aurelia-pal';
import {WidgetBase} from 'src/common/widget-base';

describe('WidgetBase', () => {
  let sut;
  let container;

  beforeEach(() => {
    initialize();
    container = new Container();
    Container.instance = container;
    container.registerInstance(TemplateCompiler, {
      initialize: () => {}
    });
    container.registerInstance(TaskQueue, {});

    jQuery.fn.myControl = {
      widget: {
        prototype: {
          options: {}
        }
      }
    };
  });

  it('initializes the templatecontroller in the constructor', () => {
    let initSpy = jasmine.createSpy();
    container.unregister(TemplateCompiler);
    container.registerInstance(TemplateCompiler, {
      initialize: initSpy
    });

    sut = new WidgetBase('myControl', DOM.createElement('div'));

    expect(initSpy).toHaveBeenCalled();
  });

  it('stores controlName, element and target', () => {
    let controlName = 'myControl';
    let element = DOM.createElement('div');
    sut = new WidgetBase(controlName, element);

    expect(sut.element).toBe(element);
    expect(sut.target).toBe(element);
    expect(sut.controlName).toBe(controlName);
  });

  it('initializes the templatecontroller in the constructor', () => {
    jQuery.fn.myControl = {
      widget: {
        prototype: {
          options: {
            'myProp': 'value'
          }
        }
      }
    };

    sut = new WidgetBase('myControl', DOM.createElement('div'));

    expect(sut.kMyProp).toBe('value');
  });

  it('stores $parent context on bind', () => {
    let parent = {};

    sut = new WidgetBase('myControl', DOM.createElement('div'));
    sut.bind(parent);

    expect(sut.$parent).toBe(parent);
  });

  it('throws error on initialization without parent context', () => {
    sut = new WidgetBase('myControl', DOM.createElement('div'));
    sut.$parent = undefined;
    expect(function() {
      sut._initialize();
    }).toThrow(new Error('$parent is not set. Did you call bind(ctx) on the widget base?'));
  });


  it('calls hooks on initialization', () => {
    let beforeInitSpy = jasmine.createSpy();
    let initializedSpy = jasmine.createSpy();

    let target = DOM.createElement('div');
    sut = new WidgetBase('myControl', target);
    sut.bind({});

    jQuery.fn.myControl = jasmine.createSpy().and.returnValue({data: jasmine.createSpy().and.returnValue({})});
    sut._getOptions = jasmine.createSpy().and.returnValue({});
    sut._beforeInitialize = beforeInitSpy;
    sut._initialized = initializedSpy;

    sut._initialize();

    expect(beforeInitSpy).toHaveBeenCalled();
    expect(initializedSpy).toHaveBeenCalled();
  });


  it('sets _$parent on widget', () => {
    let target = DOM.createElement('div');
    let $parent = {};
    sut = new WidgetBase('myControl', target);
    sut.bind($parent);

    jQuery.fn.myControl = jasmine.createSpy().and.returnValue({data: jasmine.createSpy().and.returnValue({})});
    let options = {};
    sut._getOptions = jasmine.createSpy().and.returnValue(options);

    sut._initialize();

    expect(sut.widget._$parent).toBe($parent);
  });

  it('destroys the Kendo widget on detached', () => {
    let destroySpy = jasmine.createSpy();

    sut = new WidgetBase('myControl', DOM.createElement('div'));
    sut.widget = {
      destroy: destroySpy
    };
    sut.detached();

    expect(destroySpy).toHaveBeenCalled();
  });

  it('getEventOptions registers on events', () => {
    let element = DOM.createElement('div');
    let events = ['ready', 'done', 'finished'];
    element.setAttributeNode(document.createAttribute('k-on-ready'));
    element.setAttributeNode(document.createAttribute('k-on-done'));
    sut = new WidgetBase('myControl', element);
    sut.bind({});
    let ctor = {
      widget: {
        prototype: {
          events: events
        }
      }
    };

    let returnedOptions = sut.getEventOptions(ctor);

    expect(returnedOptions.ready).not.toBeUndefined();
    expect(returnedOptions.done).not.toBeUndefined();
    expect(returnedOptions.finished).toBeUndefined();
  });

  it('getEventOptions throws when kendo event does not exist', () => {
    let element = DOM.createElement('div');
    let events = ['ready'];
    element.setAttributeNode(document.createAttribute('k-on-done'));
    sut = new WidgetBase('myControl', element);
    sut.bind({});
    let ctor = {
      widget: {
        prototype: {
          events: events
        }
      }
    };

    expect(function() {
      sut.getEventOptions(ctor);
    }).toThrow(new Error('done is not an event on the myControl control'));
  });
});
