System.register(['aurelia-framework', 'aurelia-templating'], function (_export) {
  'use strict';

  var inject, TemplatingEngine, TemplateCompiler;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaTemplating) {
      TemplatingEngine = _aureliaTemplating.TemplatingEngine;
    }],
    execute: function () {
      TemplateCompiler = (function () {
        function TemplateCompiler(templatingEngine) {
          _classCallCheck(this, _TemplateCompiler);

          this.templatingEngine = templatingEngine;
        }

        TemplateCompiler.prototype.initialize = function initialize($parent) {
          var _this = this;

          this.$parent = $parent;

          kendo.ui.Widget.prototype.angular = function (_event, _args) {
            return _this.handleTemplateEvents(_event, _args);
          };
          kendo.mobile.ui.Widget.prototype.angular = function (_event, _args) {
            return _this.handleTemplateEvents(_event, _args);
          };
        };

        TemplateCompiler.prototype.handleTemplateEvents = function handleTemplateEvents(_event, _args) {
          if (_event !== 'compile' && _event !== 'cleanup') return;

          var args = _args();
          var elements = args.elements;
          var data = args.data;

          switch (_event) {
            case 'compile':
              this.compile(elements, data);
              break;

            case 'cleanup':
              this.cleanup(elements);
              break;

            default:
              break;
          }
        };

        TemplateCompiler.prototype.compile = function compile(elements, data) {
          for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var ctx = undefined;

            if (data && data[i]) {
              var _data = data[i];
              ctx = _data.dataItem;
            }

            this.enhanceView(element, ctx);
          }
        };

        TemplateCompiler.prototype.enhanceView = function enhanceView(element, ctx) {
          var view = this.templatingEngine.enhance(element);
          view.bind(ctx, this.$parent);
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
        TemplateCompiler = inject(TemplatingEngine)(TemplateCompiler) || TemplateCompiler;
        return TemplateCompiler;
      })();

      _export('TemplateCompiler', TemplateCompiler);
    }
  };
});