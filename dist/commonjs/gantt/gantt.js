'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Gantt = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

var _optionsBuilder = require('../common/options-builder');

var _pdf = require('../pdf/pdf');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gantt = exports.Gantt = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'gantt'), _dec2 = (0, _decorators.generateBindables)('kendoGantt'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaDependencyInjection.Container, _optionsBuilder.OptionsBuilder), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function Gantt(element, widgetBase, container, optionsBuilder) {
    var _this = this;

    _classCallCheck(this, Gantt);

    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase.control('kendoGantt').useRootElement(this.element).beforeInitialize(function (options) {
      return _this._beforeInitialize(options);
    }).linkViewModel(this).useContainer(container);
  }

  Gantt.prototype.bind = function bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  };

  Gantt.prototype.attached = function attached() {
    if (isInitFromDiv(this.element)) {
      this.widgetBase.useElement(this.element.querySelectorAll('div')[0]);
    } else {
      var target = document.createElement('div');
      this.element.appendChild(target);
      this.widgetBase.useElement(target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  };

  Gantt.prototype.recreate = function recreate() {
    var templates = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'template');
    this.widgetBase.useTemplates(this, 'kendoGantt', templates);

    this.kWidget = this.widgetBase.recreate();
  };

  Gantt.prototype._beforeInitialize = function _beforeInitialize(options) {
    var _this2 = this;

    var columns = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'gantt-col');

    if (columns && columns.length > 0) {
      options.columns = [];

      columns.forEach(function (column) {
        options.columns.push(_this2.optionsBuilder.getOptions(column, 'GanttColumn'));
      });
    }
  };

  Gantt.prototype.destroy = function destroy() {
    this.widgetBase.destroy(this.kWidget);
  };

  Gantt.prototype.detached = function detached() {
    this.destroy();
  };

  return Gantt;
}()) || _class) || _class) || _class);


function isInitFromDiv(element) {
  return element.querySelectorAll('div').length > 0;
}