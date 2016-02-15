define(['exports', 'aurelia-dependency-injection', 'aurelia-templating'], function (exports, _aureliaDependencyInjection, _aureliaTemplating) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var TemplateCompiler = (function () {
    function TemplateCompiler(templatingEngine) {
      _classCallCheck(this, _TemplateCompiler);

      this.isInitialized = false;

      this.templatingEngine = templatingEngine;
    }

    TemplateCompiler.prototype.initialize = function initialize() {
      if (this.isInitialized) return;

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

      var $parent = widget._$parent || (widget.options._$parent ? widget.options._$parent[0] : undefined);
      var viewResources = widget._$resources || (widget.options._$resources ? widget.options._$resources[0] : undefined);

      if (!$parent) return;

      var args = _args();
      var elements = args.elements;
      var data = args.data;

      switch (_event) {
        case 'compile':
          this.compile($parent, elements, data, viewResources);
          break;

        case 'cleanup':
          this.cleanup(elements);
          break;

        default:
          break;
      }
    };

    TemplateCompiler.prototype.compile = function compile($parent, elements, data, viewResources) {
      var _this2 = this;

      var _loop = function (i) {
        var element = elements[i];
        var ctx = undefined;

        if (data && data[i]) {
          var _data = data[i];
          ctx = _data.dataItem;
        }

        if (element instanceof jQuery) {
          element.each(function (index, elem) {
            return _this2.enhanceView($parent, elem, ctx, viewResources);
          });
        } else {
          _this2.enhanceView($parent, element, ctx, viewResources);
        }
      };

      for (var i = 0; i < elements.length; i++) {
        _loop(i);
      }
    };

    TemplateCompiler.prototype.enhanceView = function enhanceView($parent, element, ctx, viewResources) {
      var view = $(element).data('viewInstance');

      if (element.querySelectorAll('.au-target').length === 0) {
        if (viewResources) {
          view = this.templatingEngine.enhance({
            element: element,
            resources: viewResources
          });
        } else {
          view = this.templatingEngine.enhance(element);
        }

        $(element).data('viewInstance', view);
      }

      view.bind(ctx, $parent);
      view.attached();
    };

    TemplateCompiler.prototype.cleanup = function cleanup(elements) {
      if (!elements) return;

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        this.cleanupView(element);
      }
    };

    TemplateCompiler.prototype.cleanupView = function cleanupView(element) {
      var view = $(element).data('viewInstance');
      if (!view) return;

      view.detached();
      view.unbind();
    };

    var _TemplateCompiler = TemplateCompiler;
    TemplateCompiler = _aureliaDependencyInjection.inject(_aureliaTemplating.TemplatingEngine)(TemplateCompiler) || TemplateCompiler;
    return TemplateCompiler;
  })();

  exports.TemplateCompiler = TemplateCompiler;
});