System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.splitter.min'], function (_export) {
  'use strict';

  var inject, customAttribute, WidgetBase, generateBindables, constants, Splitter;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
    }, function (_kendoSplitterMin) {}],
    execute: function () {
      Splitter = (function () {
        function Splitter(element, widgetBase) {
          _classCallCheck(this, _Splitter);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoSplitter').linkViewModel(this);
        }

        Splitter.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        Splitter.prototype.attached = function attached() {
          this.recreate();
        };

        Splitter.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.createWidget({
            element: this.element,
            parentCtx: this.$parent
          });
        };

        Splitter.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        var _Splitter = Splitter;
        Splitter = inject(Element, WidgetBase)(Splitter) || Splitter;
        Splitter = generateBindables('kendoSplitter')(Splitter) || Splitter;
        Splitter = customAttribute(constants.attributePrefix + 'splitter')(Splitter) || Splitter;
        return Splitter;
      })();

      _export('Splitter', Splitter);
    }
  };
});