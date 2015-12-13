import {inject} from 'aurelia-framework';
import {TemplatingEngine} from 'aurelia-templating';

@inject(TemplatingEngine)
export class TemplateCompiler {

  constructor(templatingEngine) {
    this.templatingEngine = templatingEngine;
  }

  initialize($parent) {
    // store the parent view-model so we can pass this as the
    // overrideContext when we call bind() on all compiled Views
    this.$parent = $parent;

    // all controls derive from kendo.ui.Widget
    // override the angular property on these objects, and point it towards handleTemplateEvents
    kendo.ui.Widget.prototype.angular = (_event, _args) => this.handleTemplateEvents(_event, _args);
    kendo.mobile.ui.Widget.prototype.angular = (_event, _args) => this.handleTemplateEvents(_event, _args);
  }

  // this function filters out compile and cleanup events
  // and calls the compile or cleanup function with the needed arguments
  handleTemplateEvents(_event, _args) {
    if (_event !== 'compile' && _event !== 'cleanup') return;

    let args = _args();
    let elements = args.elements; // extract elements from the args
    let data = args.data; // extract the dataitems from the args

    switch (_event) {
    case 'compile':
      // we need to pass elements and data to compile
      // so that Aurelia can enhance this elements with the correct
      // binding context
      this.compile(elements, data);
      break;

    case 'cleanup':
      // we don't care about dataitems when we do the cleanup
      // so we just pass in the DOM elements
      this.cleanup(elements);
      break;

    default:
      break;
    }
  }

  // loops through each element, and find the matching dataitem
  // and calls enhanceView(element, dataItem) for each element there is
  compile(elements, data) {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let ctx;

      if (data && data[i]) {
        let _data = data[i];
        ctx = _data.dataItem;
      }

      if (element instanceof jQuery) {
        element.each((index, elem) => this.enhanceView(elem, ctx));
      } else {
        this.enhanceView(element, ctx);
      }
    }
  }

  // uses the ehance function of Aurelia's TemplatingEngine
  // to "compile" the existing DOM element
  enhanceView(element, ctx) {
    let view = this.templatingEngine.enhance(element);
    view.bind(ctx, this.$parent); // call the bind() function on the view with the dataItem we got from Kendo
    view.attached(); // attach it to the DOM

    // when we do cleanup, we need to get the view instance
    // so we can call detached/unbind
    // so we store this view instance in the DOM element using JQuery.data
    $(element).data('viewInstance', view);
  }

  // loops through each element kendo asks us to clean up
  // calls cleanupView() for each element
  cleanup(elements) {
    if (!elements) return;

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      this.cleanupView(element);
    }
  }

  // cleans up the view kendo has asked us to clean up
  cleanupView(element) {
    // extract Aurelia's View instance from the element
    // we stored this in the enhanceView function
    let view = $(element).data('viewInstance');
    if (!view) return;

    // unbind and detach the view
    view.detached();
    view.unbind();
  }
}
