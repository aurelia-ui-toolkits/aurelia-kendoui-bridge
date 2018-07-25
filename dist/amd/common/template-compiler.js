define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-binding', './util'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaBinding, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TemplateCompiler = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var TemplateCompiler = exports.TemplateCompiler = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.TemplatingEngine, _util.Util), _dec(_class = function () {
    function TemplateCompiler(templatingEngine, util) {
      _classCallCheck(this, TemplateCompiler);

      this.isInitialized = false;

      this.templatingEngine = templatingEngine;
      this.util = util;
    }

    TemplateCompiler.prototype.initialize = function initialize() {
      if (this.isInitialized) return;

      if (!window.kendo) return;

      var _this = this;
      kendo.ui.Widget.prototype.angular = function (_event, _args) {
        _this.handleTemplateEvents(this, _event, _args);
      };
      kendo.mobile.ui.Widget.prototype.angular = function (_event, _args) {
        _this.handleTemplateEvents(this, _event, _args);
      };

      this.isInitialized = true;
    };

    TemplateCompiler.prototype.handleTemplateEvents = function handleTemplateEvents(widget, _event, _args) {
      if (_event !== 'compile' && _event !== 'cleanup') return;

      var $parent = void 0;
      var container = void 0;
      var $angular = widget.$angular || widget.options.$angular;

      if ($angular) {
        $parent = $angular[0]._$parent;
        container = $angular[0]._$container;
      }

      if (!$parent) return;

      var args = _args();
      var elements = args.elements;
      var data = args.data;
      var scopeFrom = args.scopeFrom;

      switch (_event) {
        case 'compile':
          this.compile($parent, elements, data, scopeFrom, container);
          break;

        case 'cleanup':
          this.cleanup(elements);
          break;

        default:
          break;
      }
    };

    TemplateCompiler.prototype.compile = function compile($parent, elements, data, scopeFrom, container) {
      var _this2 = this;

      var _loop = function _loop(i) {
        var element = elements[i];
        var ctx = undefined;

        if (data && data[i]) {
          var _data = data[i];
          var dataItem = _data.dataItem || _data.aggregate || _data;

          if (!_this2.util.isObject(dataItem)) {
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
          element.each(function (index, elem) {
            return _this2.enhanceView($parent, elem, ctx, container);
          });
        } else {
          _this2.enhanceView($parent, element, ctx, container);
        }
      };

      for (var i = 0; i < elements.length; i++) {
        _loop(i);
      }
    };

    TemplateCompiler.prototype.enhanceView = function enhanceView($parent, element, ctx, container) {
      var view = kendo.jQuery(element).data('viewInstance');

      kendo.jQuery(element).data('$$kendoScope', ctx);

      if (element.querySelectorAll('.au-target').length === 0) {
        if (container) {
          var childContainer = container.createChild();
          var resources = container.get(_aureliaTemplating.ViewResources);

          view = this.templatingEngine.enhance({
            bindingContext: ctx,
            overrideContext: (0, _aureliaBinding.createOverrideContext)(ctx, $parent),
            container: childContainer,
            element: element,
            resources: resources
          });
        } else {
          view = this.templatingEngine.enhance({
            bindingContext: ctx,
            overrideContext: (0, _aureliaBinding.createOverrideContext)(ctx, $parent),
            element: element
          });
        }

        kendo.jQuery(element).data('viewInstance', view);
      } else {
        view.bind(ctx, (0, _aureliaBinding.createOverrideContext)(ctx, $parent));
      }

      view.attached();
    };

    TemplateCompiler.prototype.cleanup = function cleanup(elements) {
      if (!elements) return;

      for (var i = 0; i < elements.length; i++) {
        var _element = elements[i];
        this.cleanupView(_element);
      }
    };

    TemplateCompiler.prototype.cleanupView = function cleanupView(element) {
      var view = kendo.jQuery(element).data('viewInstance');
      if (!view) return;

      view.detached();
      view.unbind();
    };

    return TemplateCompiler;
  }()) || _class);
});