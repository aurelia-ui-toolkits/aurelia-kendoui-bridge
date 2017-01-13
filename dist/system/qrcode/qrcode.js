'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, QRCode;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }],
    execute: function () {
      _export('QRCode', QRCode = (_dec = customAttribute(constants.attributePrefix + 'qrcode'), _dec2 = generateBindables('kendoQRCode'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function QRCode(element, widgetBase) {
          _classCallCheck(this, QRCode);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoQRCode').useElement(this.element).linkViewModel(this);
        }

        QRCode.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        QRCode.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        QRCode.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
        };

        QRCode.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        QRCode.prototype.detached = function detached() {
          this.destroy();
        };

        return QRCode;
      }()) || _class) || _class) || _class));

      _export('QRCode', QRCode);
    }
  };
});