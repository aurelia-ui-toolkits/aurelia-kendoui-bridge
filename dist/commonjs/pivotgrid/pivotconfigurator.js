'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

require('kendo.pivot.configurator.min');

var PivotConfigurator = (function () {
  function PivotConfigurator(element, widgetBase, viewResources) {
    _classCallCheck(this, _PivotConfigurator);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoPivotConfigurator').linkViewModel(this);
  }

  PivotConfigurator.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  PivotConfigurator.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  PivotConfigurator.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  PivotConfigurator.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _PivotConfigurator = PivotConfigurator;
  PivotConfigurator = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(PivotConfigurator) || PivotConfigurator;
  PivotConfigurator = _commonDecorators.generateBindables('kendoPivotConfigurator')(PivotConfigurator) || PivotConfigurator;
  PivotConfigurator = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'pivot-configurator')(PivotConfigurator) || PivotConfigurator;
  return PivotConfigurator;
})();

exports.PivotConfigurator = PivotConfigurator;