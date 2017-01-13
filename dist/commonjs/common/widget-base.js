'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetBase = undefined;

var _dec, _dec2, _class;

var _util = require('./util');

var _optionsBuilder = require('./options-builder');

var _templateCompiler = require('./template-compiler');

var _templateGatherer = require('./template-gatherer');

var _configBuilder = require('../config-builder');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplatingResources = require('aurelia-templating-resources');

var _aureliaTaskQueue = require('aurelia-task-queue');

var _aureliaLogging = require('aurelia-logging');

var LogManager = _interopRequireWildcard(_aureliaLogging);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = LogManager.getLogger('aurelia-kendoui-bridge');

var WidgetBase = exports.WidgetBase = (_dec = (0, _aureliaDependencyInjection.transient)(), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTaskQueue.TaskQueue, _templateCompiler.TemplateCompiler, _optionsBuilder.OptionsBuilder, _util.Util, _templateGatherer.TemplateGatherer, _configBuilder.KendoConfigBuilder, _aureliaTemplatingResources.RepeatStrategyLocator), _dec(_class = _dec2(_class = function () {
  function WidgetBase(taskQueue, templateCompiler, optionsBuilder, util, templateGatherer, configBuilder, repeatStratLocator) {
    _classCallCheck(this, WidgetBase);

    this.bindingsToKendo = [];

    this.taskQueue = taskQueue;
    this.optionsBuilder = optionsBuilder;
    this.util = util;
    this.configBuilder = configBuilder;
    this.repeatStratLocator = repeatStratLocator;
    this.templateGatherer = templateGatherer;
    templateCompiler.initialize();
    this.registerRepeatStrategy();
  }

  WidgetBase.prototype.control = function control(controlName) {
    if (!controlName || !window.kendo || !kendo.jQuery.fn[controlName]) {
      throw new Error('The kendo control \'' + controlName + '\' is not available. Did you load Kendo (in addition to the bridge)?');
    }

    this.controlName = controlName;

    var ctor = kendo.jQuery.fn[this.controlName];
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

  WidgetBase.prototype.useContainer = function useContainer(container) {
    if (!container) {
      throw new Error('container is not set');
    }

    this.container = container;

    return this;
  };

  WidgetBase.prototype.useElement = function useElement(element) {
    this.element = element;

    if (!this.rootElement) {
      this.rootElement = element;
    }

    return this;
  };

  WidgetBase.prototype.useRootElement = function useRootElement(rootElement) {
    this.rootElement = rootElement;

    return this;
  };

  WidgetBase.prototype.beforeInitialize = function beforeInitialize(cb) {
    this._beforeInitialize = cb;

    return this;
  };

  WidgetBase.prototype.afterInitialize = function afterInitialize(cb) {
    this._afterInitialize = cb;

    return this;
  };

  WidgetBase.prototype.useParentCtx = function useParentCtx(overrideContext) {
    var oc = overrideContext;

    while (oc.parentOverrideContext) {
      oc = oc.parentOverrideContext;
    }

    this.parentCtx = oc.bindingContext ? oc.bindingContext : oc;

    return this;
  };

  WidgetBase.prototype.useValueBinding = function useValueBinding() {
    var valueBindingProperty = arguments.length <= 0 || arguments[0] === undefined ? 'kValue' : arguments[0];
    var valueFunction = arguments.length <= 1 || arguments[1] === undefined ? 'value' : arguments[1];

    this.valueBindingProperty = valueBindingProperty;
    this.valueFunction = valueFunction;
    this.withValueBinding = true;

    this.bindToKendo(valueBindingProperty, valueFunction);

    return this;
  };

  WidgetBase.prototype.bindToKendo = function bindToKendo(propertyName, functionName) {
    this.bindingsToKendo.push({
      propertyName: propertyName,
      functionName: functionName
    });

    return this;
  };

  WidgetBase.prototype.recreate = function recreate() {
    var _this = this;

    if (!this.element) {
      throw new Error('element is not set. Call .useElement(<target element>)');
    }

    if (this.viewModel && this.viewModel.kWidget) {
      this.destroy(this.viewModel.kWidget);
    }

    var allOptions = this._getOptions(this.rootElement);

    if (this._beforeInitialize) {
      this._beforeInitialize(allOptions);
    }

    Object.assign(allOptions, {
      $angular: [{ _$parent: this.parentCtx, _$container: this.container }]
    });

    logger.debug('initializing ' + this.controlName + ' with the following config', allOptions);

    var widget = this._createWidget(this.element, allOptions, this.controlName);

    widget.$angular = [{
      _$parent: this.parentCtx,
      _$container: this.container
    }];

    if (this.withValueBinding) {
      widget.first('change', function (args) {
        return _this._handleValueChange(args.sender);
      });
      widget.first('dataBound', function (args) {
        return _this._handleValueChange(args.sender);
      });
    }

    this.bindingsToKendo.forEach(function (binding) {
      var value = _this.viewModel[binding.propertyName];

      if (typeof value !== 'undefined' && value !== null && value !== '') {
        widget[binding.functionName](value);
      }
    });

    if (this._afterInitialize) {
      this._afterInitialize();
    }

    this.util.fireKendoEvent(this.rootElement, 'ready', widget);

    return widget;
  };

  WidgetBase.prototype._createWidget = function _createWidget(element, options, controlName) {
    return kendo.jQuery(element)[controlName](options).data(controlName);
  };

  WidgetBase.prototype._getOptions = function _getOptions(element) {
    var options = this.optionsBuilder.getOptions(this.viewModel, this.controlName);
    var eventOptions = this.getEventOptions(element);

    return this.util.pruneOptions(Object.assign({}, this.viewModel.kOptions || {}, options, eventOptions));
  };

  WidgetBase.prototype.getEventOptions = function getEventOptions(element) {
    var _this2 = this;

    var options = {};
    var allowedEvents = this.kendoEvents.concat(['ready']);
    var delayedExecution = ['change'];

    var events = this.util.getEventsFromAttributes(element);

    events.forEach(function (event) {
      if (!allowedEvents.includes(event)) {
        throw new Error(event + ' is not an event on the ' + _this2.controlName + ' control');
      }

      if (delayedExecution.includes(event)) {
        options[event] = function (e) {
          _this2.taskQueue.queueMicroTask(function () {
            return _this2.util.fireKendoEvent(element, _this2.util._hyphenate(event), e);
          });
        };
      } else {
        options[event] = function (e) {
          return _this2.util.fireKendoEvent(element, _this2.util._hyphenate(event), e);
        };
      }
    });

    return options;
  };

  WidgetBase.prototype._handleValueChange = function _handleValueChange(widget) {
    this.viewModel[this.valueBindingProperty] = this.getValue(widget);
  };

  WidgetBase.prototype.getValue = function getValue(widget) {
    return widget[this.valueFunction]();
  };

  WidgetBase.prototype.handlePropertyChanged = function handlePropertyChanged(widget, property, newValue, oldValue) {
    if (!widget) return;

    var binding = this.bindingsToKendo.find(function (i) {
      return i.propertyName === property;
    });
    if (!binding) return;

    if (typeof newValue === 'undefined') {
      widget[binding.functionName](null);
    } else if (widget[binding.functionName]() !== newValue) {
      widget[binding.functionName](newValue);
    }
  };

  WidgetBase.prototype.useTemplates = function useTemplates(target, controlName, templates) {
    return this.templateGatherer.useTemplates(target, controlName, templates);
  };

  WidgetBase.prototype.registerRepeatStrategy = function registerRepeatStrategy() {
    if (this.configBuilder.registerRepeatStrategy) {
      if (!window.kendo) {
        logger.warn('Could not add RepeatStrategy for kendo.data.ObservableArray as kendo.data.ObservableArray has not been loaded');
        return;
      }
      this.repeatStratLocator.addStrategy(function (items) {
        return items instanceof kendo.data.ObservableArray;
      }, new _aureliaTemplatingResources.ArrayRepeatStrategy());
    }
  };

  WidgetBase.prototype.destroy = function destroy(widget) {
    if (widget && widget.element.length > 0) {
      if (widget.wrapper && widget.wrapper !== widget.element) {
        widget.element.insertBefore(widget.wrapper);
        widget.wrapper.remove();
      }

      var classList = widget.element[0].classList;
      for (var i = 0; i < classList.length; i++) {
        var item = classList.item(i);
        if (item.startsWith('k-')) {
          classList.remove(item);
        }
      }

      widget.element.show().empty();
      kendo.destroy(widget.element);

      widget = null;

      if (this.viewModel.kWidget) {
        this.viewModel.kWidget = null;
      }
    }
  };

  return WidgetBase;
}()) || _class) || _class);