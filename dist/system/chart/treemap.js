System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../pdf/pdf'], function (_export, _context) {
  "use strict";

  var inject, customElement, WidgetBase, generateBindables, constants, PDF, _dec, _dec2, _dec3, _class, TreeMap;

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
    }, function (_pdfPdf) {
      PDF = _pdfPdf.PDF;
    }],
    execute: function () {
      _export('TreeMap', TreeMap = (_dec = customElement(constants.elementPrefix + 'treemap'), _dec2 = generateBindables('kendoTreeMap'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function TreeMap(element, widgetBase) {
          _classCallCheck(this, TreeMap);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoTreeMap').useElement(this.element).linkViewModel(this);
        }

        TreeMap.prototype.subscribe = function subscribe(event, callback) {
          return this.widgetBase.subscribe(event, callback);
        };

        TreeMap.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        TreeMap.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        TreeMap.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
        };

        TreeMap.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        TreeMap.prototype.detached = function detached() {
          this.destroy();
        };

        return TreeMap;
      }()) || _class) || _class) || _class));

      _export('TreeMap', TreeMap);
    }
  };
});