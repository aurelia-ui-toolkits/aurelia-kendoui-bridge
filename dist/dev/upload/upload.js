'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customElement, ViewResources, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, Upload;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      ViewResources = _aureliaTemplating.ViewResources;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }],
    execute: function () {
      _export('Upload', Upload = (_dec = customElement(constants.elementPrefix + 'upload'), _dec2 = generateBindables('kendoUpload'), _dec3 = inject(Element, WidgetBase, ViewResources), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Upload(element, widgetBase, viewResources) {
          _classCallCheck(this, Upload);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoUpload').linkViewModel(this).useViewResources(viewResources);
        }

        Upload.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Upload.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Upload.prototype.recreate = function recreate() {
          var target = void 0;
          var inputs = this.element.querySelectorAll('input');
          if (inputs.length > 0) {
            target = inputs[0];
          } else {
            target = document.createElement('input');
            this.element.appendChild(target);
          }

          var templates = this.widgetBase.util.getChildrenVMs(this.element, constants.elementPrefix + 'template');
          this.widgetBase.useTemplates(this, 'kendoUpload', templates);

          this.kWidget = this.widgetBase.createWidget({
            rootElement: this.element,
            element: target,
            parentCtx: this.$parent
          });
        };

        Upload.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return Upload;
      }()) || _class) || _class) || _class));

      _export('Upload', Upload);
    }
  };
});
//# sourceMappingURL=../dist/dev/upload/upload.js.map
