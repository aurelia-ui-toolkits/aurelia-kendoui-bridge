'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotGrid = undefined;

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

var _pdf = require('../pdf/pdf');

require('kendo.pivotgrid.min');

require('kendo.pivot.fieldmenu.min');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var PivotGrid = exports.PivotGrid = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'pivot-grid'), _dec2 = (0, _decorators.generateBindables)('kendoPivotGrid'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaTemplating.ViewResources), _dec4 = (0, _aureliaTemplating.children)(_constants.constants.elementPrefix + 'template'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
  function PivotGrid(element, widgetBase, viewResources) {
    _classCallCheck(this, PivotGrid);

    _initDefineProp(this, 'templates', _descriptor, this);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoPivotGrid').linkViewModel(this).useViewResources(viewResources);
  }

  PivotGrid.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  PivotGrid.prototype.attached = function attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  };

  PivotGrid.prototype.recreate = function recreate() {
    this.widgetBase.useTemplates(this, 'kendoPivotGrid', this.templates);

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  PivotGrid.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  return PivotGrid;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'templates', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class2)) || _class) || _class) || _class);