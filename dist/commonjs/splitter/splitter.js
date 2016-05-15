'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

require('kendo.splitter.min');

var Splitter = (function () {
  function Splitter(element, widgetBase) {
    _classCallCheck(this, _Splitter);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoSplitter').linkViewModel(this);
  }

  Splitter.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Splitter.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
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
  Splitter = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Splitter) || Splitter;
  Splitter = _commonDecorators.generateBindables('kendoSplitter')(Splitter) || Splitter;
  Splitter = _aureliaTemplating.customAttribute(_commonConstants.constants.attributePrefix + 'splitter')(Splitter) || Splitter;
  return Splitter;
})();

exports.Splitter = Splitter;