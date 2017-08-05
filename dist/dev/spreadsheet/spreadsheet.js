System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customElement, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, Spreadsheet;

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
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }],
    execute: function () {
      _export('Spreadsheet', Spreadsheet = (_dec = customElement(constants.elementPrefix + 'spreadsheet'), _dec2 = generateBindables('kendoSpreadsheet'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Spreadsheet(element, widgetBase) {
          _classCallCheck(this, Spreadsheet);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoSpreadsheet').useElement(this.element).linkViewModel(this);
        }

        Spreadsheet.prototype.subscribe = function subscribe(event, callback) {
          return this.widgetBase.subscribe(event, callback);
        };

        Spreadsheet.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        Spreadsheet.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Spreadsheet.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
        };

        Spreadsheet.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        Spreadsheet.prototype.detached = function detached() {
          this.destroy();
        };

        return Spreadsheet;
      }()) || _class) || _class) || _class));

      _export('Spreadsheet', Spreadsheet);
    }
  };
});
//# sourceMappingURL=../dist/dev/spreadsheet/spreadsheet.js.map
