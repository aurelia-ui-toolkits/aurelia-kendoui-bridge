import '../setup';
import {Container} from 'aurelia-dependency-injection';
import {TemplatingEngine} from 'aurelia-templating';
import {initialize} from 'aurelia-pal-browser';
import {DOM} from 'aurelia-pal';
import {TemplateCompiler} from 'src/common/template-compiler';

describe('TemplateCompiler', () => {
  let container;
  let sut;
  let templatingEngine;

  beforeEach(() => {
    initialize();
    container = new Container();
    templatingEngine = container.get(TemplatingEngine);
    sut = templatingEngine.createViewModelForUnitTest(TemplateCompiler);
  });

  it('sets angular property on Kendo prototype', () => {
    let event1 = 'compile';
    let args1 = {};
    let event2 = 'cleanup';
    let args2 = {};
    let widget1 = {};
    let widget2 = {};
    let spy = spyOn(sut, 'handleTemplateEvents');

    sut.initialize();

    kendo.ui.Widget.prototype.angular.call(widget1, event1, args1);
    kendo.mobile.ui.Widget.prototype.angular.call(widget2, event2, args2);

    expect(spy).toHaveBeenCalledWith(widget1, event1, args1);
    expect(spy).toHaveBeenCalledWith(widget2, event2, args2);
  });

  it('handles compile and cleanup angular calls. pulls off the parent context of the widget', () => {
    let realArgs = {
      data: {},
      elements: [{}, {}]
    };
    let args = () => realArgs;
    let $parent = {};
    let viewResources = {};
    let widget = { $angular: [{ _$parent: $parent, _$resources: viewResources }] };

    let compileSpy = spyOn(sut, 'compile');
    let cleanupSpy = spyOn(sut, 'cleanup');

    sut.handleTemplateEvents(widget, 'compile', args);
    sut.handleTemplateEvents(widget, 'cleanup', args);

    expect(compileSpy).toHaveBeenCalledWith($parent, realArgs.elements, realArgs.data, viewResources);
    expect(cleanupSpy).toHaveBeenCalledWith(realArgs.elements);
  });


  it('pulls off the parent context of the options if it is not on the widget itself', () => {
    // NOTE: the parent context is stored in a single-item array on the optiosn object
    // due to it otherwise causing a stackoverflow exception
    // Angular uses the same approach

    let realArgs = {
      data: {},
      elements: [{}, {}]
    };
    let args = () => realArgs;
    let $parent = {};
    let viewResources = {};
    let widget = { options: { $angular: [{ _$parent: $parent, _$resources: viewResources }] }};

    let compileSpy = spyOn(sut, 'compile');

    sut.handleTemplateEvents(widget, 'compile', args);

    expect(compileSpy).toHaveBeenCalledWith($parent, realArgs.elements, realArgs.data, viewResources);
  });

  it('enhances every element', () => {
    let elements = [];
    let data = [];
    let $parent = {};
    let viewResources = {};
    let spy = spyOn(sut, 'enhanceView');
    for (let i = 10; i < 20; i++) {
      elements.push(DOM.createElement('div'));
      data.push({dataItem: { id: 1 }});
    }

    sut.compile($parent, elements, data, viewResources);

    for (let i = 0; i < elements.length; i++) {
      expect(spy).toHaveBeenCalledWith($parent, elements[i], data[i].dataItem, viewResources);
    }
  });

  it('enhances with narrow scope context', () => {
    let elements = [];
    let data = [];
    let $parent = {};
    let viewResources = {};
    let spy = spyOn(sut, 'enhanceView');

    elements.push(DOM.createElement('div'));
    data.push({dataItem: {id: 15}});

    elements.push(DOM.createElement('div'));
    data.push({aggregate: {id: 30}});

    elements.push(DOM.createElement('div'));
    data.push({something: 45});

    // sometimes Kendo calls the callback with an undefined dataItem
    elements.push(DOM.createElement('div'));
    data.push(undefined);

    sut.compile($parent, elements, data, viewResources);


    expect(spy.calls.argsFor(0)[2].id).toBe(15);
    expect(spy.calls.argsFor(1)[2].id).toBe(30);
    expect(spy.calls.argsFor(2)[2].something).toBe(45);
    expect(spy.calls.argsFor(3)[2]).toBe(undefined);
  });

  it('strings/integers as ctx should be put in an object', () => {
    let elements = [];
    let data = [];
    let $parent = {};
    let viewResources = {};
    let spy = spyOn(sut, 'enhanceView');

    elements.push(DOM.createElement('div'));
    data.push({dataItem: 15});

    elements.push(DOM.createElement('div'));
    data.push({aggregate: 30});

    sut.compile($parent, elements, data, viewResources);

    expect(spy.calls.argsFor(0)[2].dataItem).toBe(15);
    expect(spy.calls.argsFor(1)[2].dataItem).toBe(30);
  });

  it('supports jQuery selector', () => {
    let spy = spyOn(sut, 'enhanceView');
    let div1 = kendo.jQuery('div');
    let div2 = kendo.jQuery('div');
    let $parent = {};
    let viewResources = {};
    let selector = kendo.jQuery([div1, div2]);
    let data = [{
      dataItem: {
        id: 1
      }
    }];

    sut.compile($parent, [selector], data, viewResources);

    // kendo can pass in a jQuery selector, with a single dataitem
    // but we have to compile each element in the jQuery selector with the single
    // dataitem that kendo passed in
    expect(spy).toHaveBeenCalledWith($parent, div1, data[0].dataItem, viewResources);
    expect(spy).toHaveBeenCalledWith($parent, div2, data[0].dataItem, viewResources);
  });

  it('enhances elements and calls lifecycle events', () => {
    let ctx = {};
    let $parent = {};
    let element = DOM.createElement('div');
    sut.templatingEngine = {
      enhance: () => {}
    };
    let fakeView = {
      bind: () => {},
      attached: () => {}
    };
    let enhanceSpy = spyOn(sut.templatingEngine, 'enhance').and.returnValue(fakeView);
    let attachedSpy = spyOn(fakeView, 'attached');

    sut.enhanceView($parent, element, ctx);

    expect(enhanceSpy).toHaveBeenCalled();
    expect(attachedSpy).toHaveBeenCalled();
  });

  it('stores viewInstance on the element', () => {
    let ctx = {};
    let $parent = {};
    let element = DOM.createElement('div');
    sut.templatingEngine = {
      enhance: () => {}
    };
    let fakeView = {
      bind: () => {},
      attached: () => {}
    };
    spyOn(sut.templatingEngine, 'enhance').and.returnValue(fakeView);

    sut.enhanceView($parent, element, ctx);

    expect($(element).data('viewInstance')).toBe(fakeView);
  });

  it('cleans up all elements', () => {
    let elements = [];
    for (let i = 0; i < 10; i++) {
      elements.push(DOM.createElement('div'));
    }
    let spy = spyOn(sut, 'cleanupView');

    sut.cleanup(elements);

    elements.forEach(element => {
      expect(spy).toHaveBeenCalledWith(element);
    });
  });

  it('handles cleanup event without elements', () => {
    let elements = null;
    let spy = spyOn(sut, 'cleanupView');
    sut.cleanup(elements);

    expect(spy).not.toHaveBeenCalled();
  });

  it('calls detached and unbind', () => {
    let element = DOM.createElement('div');
    let viewFake = {
      detached: () => {},
      unbind: () => {}
    };
    $(element).data('viewInstance', viewFake);

    let detachedSpy = spyOn(viewFake, 'detached');
    let unbindSpy = spyOn(viewFake, 'unbind');

    sut.cleanupView(element);

    expect(detachedSpy).toHaveBeenCalled();
    expect(unbindSpy).toHaveBeenCalled();
  });

  it('only initializes once', () => {
    sut.initialize();
    kendo.ui.Widget.prototype.angular = 'test';
    sut.initialize();

    expect(kendo.ui.Widget.prototype.angular).toBe('test');
  });

  it('enhances view with viewResources if available', () => {
    let $parent = {};
    let viewResources = {};
    let ctx = {};
    let element = DOM.createElement('div');
    let enhanceSpy = jasmine.createSpy().and.returnValue({
      bind: () => {},
      attached: () => {}
    });
    sut.templatingEngine = {
      enhance: enhanceSpy
    };

    sut.enhanceView($parent, element, ctx, viewResources);

    expect(enhanceSpy).toHaveBeenCalled();
    expect(enhanceSpy.calls.argsFor(0)[0].element).toBe(element);
    expect(enhanceSpy.calls.argsFor(0)[0].resources).toBe(viewResources);
    expect(enhanceSpy.calls.argsFor(0)[0].bindingContext).toBe(ctx);
  });

  it('enhances view without viewResources if not available', () => {
    let $parent = {};
    let ctx = {};
    let element = DOM.createElement('div');
    let enhanceSpy = jasmine.createSpy().and.returnValue({
      bind: () => {},
      attached: () => {}
    });
    sut.templatingEngine = {
      enhance: enhanceSpy
    };

    sut.enhanceView($parent, element, ctx);

    expect(enhanceSpy).toHaveBeenCalled();
    expect(enhanceSpy.calls.argsFor(0)[0].element).toBe(element);
  });

  it('enhances only fragments without au-targets', () => {
    let $parent = {};
    let element = DOM.createElement('div');
    let div = DOM.createElement('div');
    div.classList.add('au-target');
    element.appendChild(div);

    let bindSpy = jasmine.createSpy();
    let view = {
      bind: bindSpy,
      attached: () => {}
    };

    $(element).data('viewInstance', view);
    sut.templatingEngine = {
      enhance: jasmine.createSpy()
    };

    sut.enhanceView($parent, element, {});

    expect(view.bind).toHaveBeenCalled(); // https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/issues/543
    expect(sut.templatingEngine.enhance).not.toHaveBeenCalled();
  });
});
