define(['exports', 'aurelia-framework', 'aurelia-templating'], function (exports, _aureliaFramework, _aureliaTemplating) {
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

      var $parent = widget._$parent || widget.options._$parent;

      if (!$parent) return;

      var args = _args();
      var elements = args.elements;
      var data = args.data;

      switch (_event) {
        case 'compile':
          this.compile($parent, elements, data);
          break;

        case 'cleanup':
          this.cleanup(elements);
          break;

        default:
          break;
      }
    };

    TemplateCompiler.prototype.compile = function compile($parent, elements, data) {
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
            return _this2.enhanceView($parent, elem, ctx);
          });
        } else {
          _this2.enhanceView($parent, element, ctx);
        }
      };

      for (var i = 0; i < elements.length; i++) {
        _loop(i);
      }
    };

    TemplateCompiler.prototype.enhanceView = function enhanceView($parent, element, ctx) {
      var view = this.templatingEngine.enhance(element);

      view.bind(ctx, $parent);
      view.attached();
      $(element).data('viewInstance', view);
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
    TemplateCompiler = _aureliaFramework.inject(_aureliaTemplating.TemplatingEngine)(TemplateCompiler) || TemplateCompiler;
    return TemplateCompiler;
  })();

  exports.TemplateCompiler = TemplateCompiler;
});