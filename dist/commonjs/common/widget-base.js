'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _options = require('./options');

var _events = require('./events');

var _util = require('./util');

var _templateCompiler = require('./template-compiler');

var _controlProperties = require('./control-properties');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTaskQueue = require('aurelia-task-queue');

var WidgetBase = (function () {
  function WidgetBase(taskQueue, templateCompiler, controlProperties) {
    _classCallCheck(this, _WidgetBase);

    this.taskQueue = taskQueue;
    this.controlProperties = controlProperties;
    templateCompiler.initialize();
  }

  WidgetBase.prototype.control = function control(controlName) {
    if (!controlName || !jQuery.fn[controlName]) {
      throw new Error('The name of control ' + controlName + ' is invalid or not set');
    }

    this.controlName = controlName;

    var ctor = jQuery.fn[this.controlName];
    this.kendoOptions = ctor.widget.prototype.options;
    this.kendoEvents = ctor.widget.prototype.events;

    return this;
  };

  WidgetBase.prototype.linkViewModel = function linkViewModel(viewModel) {
    if (!viewModel) {
      throw new Error('viewModel is not set');
    }

    this.viewModel = viewModel;

    return this;
  };

  WidgetBase.prototype.useViewResources = function useViewResources(resources) {
    if (!resources) {
      throw new Error('resources is not set');
    }

    this.viewResources = resources;

    return this;
  };

  WidgetBase.prototype.useValueBinding = function useValueBinding() {
    this.withValueBinding = true;

    return this;
  };

  WidgetBase.prototype.createWidget = function createWidget(options) {
    var _this = this;

    if (!options) {
      throw new Error('the createWidget() function needs to be called with an object');
    }

    if (!options.element) {
      throw new Error('element is not set');
    }

    if (!options.parentCtx) {
      throw new Error('parentCtx is not set');
    }

    var allOptions = this._getOptions(options.rootElement || options.element);

    if (options.beforeInitialize) {
      options.beforeInitialize(allOptions);
    }

    Object.assign(allOptions, {
      _$parent: [options.parentCtx],
      _$resources: [this.viewResources]
    });

    var widget = this._createWidget(options.element, allOptions, this.controlName);

    widget._$parent = options.parentCtx;
    widget._$resources = this.viewResources;

    if (this.withValueBinding) {
      widget.first('change', function (args) {
        return _this._handleChange(args.sender);
      });

      this._handleChange(widget);
    }

    if (options.afterInitialize) {
      options.afterInitialize();
    }

    return widget;
  };

  WidgetBase.prototype._createWidget = function _createWidget(element, options, controlName) {
    return jQuery(element)[controlName](options).data(controlName);
  };

  WidgetBase.prototype._getOptions = function _getOptions(element) {
    var options = this.getOptionsFromBindables();
    var eventOptions = this.getEventOptions(element);

    return _options.pruneOptions(Object.assign({}, this.viewModel.options, options, eventOptions));
  };

  WidgetBase.prototype.getOptionsFromBindables = function getOptionsFromBindables() {
    var options = {};

    for (var _iterator = this.controlProperties.getProperties(this.controlName), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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

      if (prop !== 'widget') {
        options[prop] = this.viewModel[_util.getBindablePropertyName(prop)];
      }
    }

    return options;
  };

  WidgetBase.prototype.getEventOptions = function getEventOptions(element) {
    var _this2 = this;

    var options = {};
    var allowedEvents = this.kendoEvents;

    var events = _util.getEventsFromAttributes(element);

    events.forEach(function (event) {
      if (!allowedEvents.includes(event)) {
        throw new Error(event + ' is not an event on the ' + _this2.controlName + ' control');
      }

      options[event] = function (e) {
        _this2.taskQueue.queueMicroTask(function () {
          _events.fireKendoEvent(element, _util._hyphenate(event), e);
        });
      };
    });

    return options;
  };

  WidgetBase.prototype._handleChange = function _handleChange(widget) {
    this.viewModel.kValue = widget.value();
  };

  WidgetBase.prototype.handlePropertyChanged = function handlePropertyChanged(widget, property, newValue, oldValue) {
    if (property === 'kValue' && this.withValueBinding) {
      widget.value(newValue);
    }
  };

  WidgetBase.prototype.destroy = function destroy(widget) {
    widget.destroy();
  };

  var _WidgetBase = WidgetBase;
  WidgetBase = _aureliaDependencyInjection.inject(_aureliaTaskQueue.TaskQueue, _templateCompiler.TemplateCompiler, _controlProperties.ControlProperties)(WidgetBase) || WidgetBase;
  WidgetBase = _aureliaDependencyInjection.transient()(WidgetBase) || WidgetBase;
  return WidgetBase;
})();

exports.WidgetBase = WidgetBase;