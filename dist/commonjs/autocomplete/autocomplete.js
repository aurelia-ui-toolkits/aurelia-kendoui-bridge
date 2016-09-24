'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoComplete = undefined;

var _dec, _dec2, _dec3, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _widgetBase = require('../common/widget-base');

var _decorators = require('../common/decorators');

var _constants = require('../common/constants');

require('kendo.autocomplete.min');

require('kendo.virtuallist.min');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AutoComplete = exports.AutoComplete = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'autocomplete'), _dec2 = (0, _decorators.generateBindables)('kendoAutoComplete'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaTemplating.ViewResources), _dec(_class = _dec2(_class = _dec3(_class = function () {
  function AutoComplete(element, widgetBase, viewResources) {
    _classCallCheck(this, AutoComplete);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoAutoComplete').linkViewModel(this).useViewResources(viewResources).useValueBinding().bindToKendo('kEnabled', 'enable').bindToKendo('kReadOnly', 'readonly');
  }

  AutoComplete.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  AutoComplete.prototype.attached = function attached() {
    var inputs = this.element.querySelectorAll('input');
    if (inputs.length > 0) {
      this.target = inputs[0];
    } else {
      this.target = document.createElement('input');
      this.element.appendChild(this.target);
    }

    if (!this.kNoInit) {
      this.recreate();
    }
  };

  AutoComplete.prototype.recreate = function recreate() {
    var templates = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'template');
    this.widgetBase.useTemplates(this, 'kendoAutoComplete', templates);

    this.kWidget = this.widgetBase.createWidget({
      rootElement: this.element,
      element: this.target,
      parentCtx: this.$parent
    });
  };

  AutoComplete.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
  };

  AutoComplete.prototype.unbind = function unbind() {
    this.widgetBase.destroy(this.kWidget);
  };

  return AutoComplete;
}()) || _class) || _class) || _class);