'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _options = require('./options');

var _events = require('./events');

var _util = require('./util');

var _aureliaFramework = require('aurelia-framework');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var WidgetBase = (function () {
  function WidgetBase(controlName, element) {
    _classCallCheck(this, WidgetBase);

    var container = _aureliaDependencyInjection.Container.instance;
    this.taskQueue = container.get(_aureliaFramework.TaskQueue);

    this.element = element;

    this.target = this.element;

    this.controlName = controlName;

    this.setDefaultBindableValues();
  }

  WidgetBase.prototype._initialize = function _initialize() {
    var target = jQuery(this.target);

    var ctor = target[this.controlName];

    var options = this._getOptions(ctor);

    this._beforeInitialize(options);

    this.widget = ctor.call(target, options).data(this.controlName);

    this._initialized();
  };

  WidgetBase.prototype._beforeInitialize = function _beforeInitialize(options) {};

  WidgetBase.prototype._initialized = function _initialized() {};

  WidgetBase.prototype._getOptions = function _getOptions(ctor) {
    var options = this.getOptionsFromBindables();
    var eventOptions = this.getEventOptions(ctor);

    return Object.assign({}, this.options, _options.pruneOptions(options), eventOptions);
  };

  WidgetBase.prototype.getOptionsFromBindables = function getOptionsFromBindables() {
    var props = jQuery.fn[this.controlName].widget.prototype.options;
    var options = {};

    for (var _iterator = Object.keys(props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var prop = _ref;

      options[prop] = this[_util.getBindablePropertyName(prop)];
    }

    if (this.kDataSource) {
      options.dataSource = this.kDataSource;
    }

    return options;
  };

  WidgetBase.prototype.setDefaultBindableValues = function setDefaultBindableValues() {
    var props = jQuery.fn[this.controlName].widget.prototype.options;

    for (var _iterator2 = Object.keys(props), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var prop = _ref2;

      this[_util.getBindablePropertyName(prop)] = props[prop];
    }
  };

  WidgetBase.prototype.getEventOptions = function getEventOptions(ctor) {
    var _this = this;

    var options = {};
    var allowedEvents = ctor.widget.prototype.events;

    var events = _util.getEventsFromAttributes(this.element);

    events.forEach(function (event) {
      if (!allowedEvents.includes(event)) {
        throw new Error(event + ' is not an event on the ' + _this.controlName + ' control');
      }

      options[event] = function (e) {
        _this.taskQueue.queueMicroTask(function () {
          _events.fireKendoEvent(_this.target, _util._hyphenate(event), e);
        });
      };
    });

    return options;
  };

  WidgetBase.prototype.detached = function detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  };

  return WidgetBase;
})();

exports.WidgetBase = WidgetBase;