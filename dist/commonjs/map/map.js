'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

require('kendo.dataviz.map.min');

var Map = (function () {
  function Map(element, widgetBase) {
    _classCallCheck(this, _Map);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMap').linkViewModel(this);
  }

  Map.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Map.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Map.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Map.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  Map.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Map = Map;
  Map = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Map) || Map;
  Map = _commonDecorators.generateBindables('kendoMap')(Map) || Map;
  Map = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'map')(Map) || Map;
  return Map;
})();

exports.Map = Map;