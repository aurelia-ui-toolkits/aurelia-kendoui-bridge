import {inject} from 'aurelia-dependency-injection';
import {TemplatingEngine, ViewResources} from 'aurelia-templating';
import {createOverrideContext} from 'aurelia-binding';
import {Util} from './util';

/**
* An adaptor which uses Aurelia's enhance capability to
* compile any template Kendo wants to have compiled
*/
@inject(TemplatingEngine, Util)
export class TemplateCompiler {
  /**
  * We don't need to initialize the TemplateCompiler every time a Kendo controls
  * is initialized
  */
  isInitialized = false;

  constructor(templatingEngine, util) {
    this.templatingEngine = templatingEngine;
    this.util = util;
  }

  /**
  * Initialize the template compiler and
  * patch the angular property to retrieve compilation requests
  * from Kendo controls
  * @param $parent The overrideContext to use when a template gets compiled
  */
  initialize() {
    if (this.isInitialized) return;

    if (!window.kendo) return;

    // all controls derive from kendo.ui.Widget
    // override the angular property on these objects, and point it towards handleTemplateEvents
    let _this = this;
    kendo.ui.Widget.prototype.angular = function(_event, _args) {
      _this.handleTemplateEvents(this, _event, _args);
    };
    kendo.mobile.ui.Widget.prototype.angular = function(_event, _args) {
      _this.handleTemplateEvents(this, _event, _args);
    };

    this.isInitialized = true;
  }

  /**
  * Gets called by Kendo, and filters out compile and cleanup events,
  * then calls the compile or cleanup function with the needed arguments
  * @param _event Events like 'compile' or 'cleanup'
  * @param _args optional array of dataitems
  */
  handleTemplateEvents(widget, _event: string, _args?) {
    if (_event !== 'compile' && _event !== 'cleanup') return;

    // pull the parent context of the widget, or of the options
    // in some cases, templates are compiled when a Kendo control's constructor is called
    // in these cases we get the parent context of the options instead of the
    // widget
    let $parent;
    let container;
    let $angular = widget.$angular || widget.options.$angular;

    if ($angular) {
      $parent = $angular[0]._$parent;
      container = $angular[0]._$container;
    }

    if (!$parent) return;

    let args = _args();
    let elements = args.elements; // extract elements from the args
    let data = args.data; // extract the dataitems from the args
    let scopeFrom = args.scopeFrom;

    switch (_event) {
    case 'compile':
      // we need to pass elements and data to compile
      // so that Aurelia can enhance this elements with the correct
      // binding context
      this.compile($parent, elements, data, scopeFrom, container);
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

  /**
  * loops through each element, and find the matching dataitem
  * and calls enhanceView(element, dataItem) for each element there is
  * @param elements an array of Elements or a kendo.jQuery selector
  * @param data optionally an array of dataitems
  */
  compile($parent, elements, data, scopeFrom, container) {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let ctx = undefined;

      if (data && data[i]) {
        let _data = data[i];
        let dataItem = _data.dataItem || _data.aggregate || _data;

        if (!this.util.isObject(dataItem)) {
          ctx = {
            dataItem: dataItem
          };
        } else {
          ctx = dataItem;
        }
      } else if (scopeFrom) {
        ctx = scopeFrom;
      }

      if (element instanceof kendo.jQuery) {
        element.each((index, elem) => this.enhanceView($parent, elem, ctx, container));
      } else {
        this.enhanceView($parent, element, ctx, container);
      }
    }
  }

  /**
  * uses the enhance function of Aurelia's TemplatingEngine
  * to "compile" existing DOM elements
  * @param element The Element to compile
  * @param ctx The dataitem (context) to compile the Element with
  */
  enhanceView($parent, element, ctx, container) {
    let view = kendo.jQuery(element).data('viewInstance');

    kendo.jQuery(element).data('$$kendoScope', ctx);

    // check necessary due to https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge/issues/308
    if (element.querySelectorAll('.au-target').length === 0) {
      if (container) {
        let childContainer = container.createChild();
        let resources = container.get(ViewResources);

        view = this.templatingEngine.enhance({
          bindingContext: ctx,
          overrideContext: createOverrideContext(ctx, $parent),
          container: childContainer,
          element: element,
          resources: resources
        });
      } else {
        view = this.templatingEngine.enhance({
          bindingContext: ctx,
          overrideContext: createOverrideContext(ctx, $parent),
          element: element
        });
      }

      // when we do cleanup, we need to get the view instance
      // so we can call detached/unbind
      // so we store this view instance in the DOM element using kendo.jQuery.data
      kendo.jQuery(element).data('viewInstance', view);
    } else {
      view.bind(ctx, createOverrideContext(ctx, $parent));
    }

    view.attached(); // attach it to the DOM
  }

  /**
  * loops through each element kendo asks us to clean up
  * calls cleanupView() for each element
  * @param element An array of elements
  */
  cleanup(elements) {
    if (!elements) return;

    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      this.cleanupView(element);
    }
  }

  /**
  * cleans up the view kendo has asked us to clean up
  */
  cleanupView(element) {
    // extract Aurelia's View instance from the element
    // we stored this in the enhanceView function
    let view = kendo.jQuery(element).data('viewInstance');
    if (!view) return;

    // unbind and detach the view
    view.detached();
    view.unbind();
  }
}
