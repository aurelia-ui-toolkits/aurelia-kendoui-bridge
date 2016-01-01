import {Container} from 'aurelia-dependency-injection';
import {TemplatingEngine} from 'aurelia-templating';
import {initialize} from 'aurelia-pal-browser';
import {DOM} from 'aurelia-pal';
import {TemplateCompiler} from 'src/common/template-compiler';
import 'jquery';
import 'kendo-ui/js/kendo.grid.min';

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

  it('handles compile and cleanup angular calls. pulls off the parent context of the options', () => {
    let realArgs = {
      data: {},
      elements: [{}, {}]
    };
    let args = () => realArgs;
    let $parent = {};
    let widget = { options: { _$parent: $parent }};

    let compileSpy = spyOn(sut, 'compile');
    let cleanupSpy = spyOn(sut, 'cleanup');

    sut.handleTemplateEvents(widget, 'compile', args);
    sut.handleTemplateEvents(widget, 'cleanup', args);

    expect(compileSpy).toHaveBeenCalledWith($parent, realArgs.elements, realArgs.data);
    expect(cleanupSpy).toHaveBeenCalledWith(realArgs.elements);
  });

  it('enhances every element', () => {
    let elements = [];
    let data = [];
    let $parent = {};
    let spy = spyOn(sut, 'enhanceView');
    for (let i = 0; i < 10; i++) {
      elements.push(DOM.createElement('div'));
      data.push({dataItem: i});
    }

    sut.compile($parent, elements, data);

    for (let i = 0; i < elements.length; i++) {
      expect(spy).toHaveBeenCalledWith($parent, elements[i], data[i].dataItem);
    }
  });

  it('supports jQuery selector', () => {
    let spy = spyOn(sut, 'enhanceView');
    let div1 = $('div');
    let div2 = $('div');
    let $parent = {};
    let selector = jQuery([div1, div2]);
    let data = [{
      dataItem: 1
    }];

    sut.compile($parent, [selector], data);

    // kendo can pass in a jQuery selector, with a single dataitem
    // but we have to compile each element in the jQuery selector with the single
    // dataitem that kendo passed in
    expect(spy).toHaveBeenCalledWith($parent, div1, data[0].dataItem);
    expect(spy).toHaveBeenCalledWith($parent, div2, data[0].dataItem);
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
    let bindSpy = spyOn(fakeView, 'bind');
    let attachedSpy = spyOn(fakeView, 'attached');

    sut.enhanceView($parent, element, ctx);

    expect(enhanceSpy).toHaveBeenCalledWith(element);
    expect(bindSpy).toHaveBeenCalledWith(ctx, $parent);
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
});
