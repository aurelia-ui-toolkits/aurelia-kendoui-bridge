'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

var _commonConstants = require('../common/constants');

require('kendo.dataviz.diagram.min');

var Diagram = (function () {
  function Diagram(element, widgetBase) {
    _classCallCheck(this, _Diagram);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDiagram').linkViewModel(this);
  }

  Diagram.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Diagram.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Diagram.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Diagram.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Diagram = Diagram;
  Diagram = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase)(Diagram) || Diagram;
  Diagram = _commonDecorators.generateBindables('kendoDiagram')(Diagram) || Diagram;
  Diagram = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'diagram')(Diagram) || Diagram;
  return Diagram;
})();

exports.Diagram = Diagram;