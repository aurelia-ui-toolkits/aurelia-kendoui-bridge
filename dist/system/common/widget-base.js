'use strict';

System.register(['./util', './options-builder', './template-compiler', './template-gatherer', '../config-builder', 'aurelia-dependency-injection', 'aurelia-templating-resources', 'aurelia-task-queue', 'aurelia-logging'], function (_export, _context) {
  "use strict";

  var Util, OptionsBuilder, TemplateCompiler, TemplateGatherer, KendoConfigBuilder, inject, transient, RepeatStrategyLocator, ArrayRepeatStrategy, TaskQueue, LogManager, _dec, _dec2, _class, logger, WidgetBase;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_util) {
      Util = _util.Util;
    }, function (_optionsBuilder) {
      OptionsBuilder = _optionsBuilder.OptionsBuilder;
    }, function (_templateCompiler) {
      TemplateCompiler = _templateCompiler.TemplateCompiler;
    }, function (_templateGatherer) {
      TemplateGatherer = _templateGatherer.TemplateGatherer;
    }, function (_configBuilder) {
      KendoConfigBuilder = _configBuilder.KendoConfigBuilder;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
      transient = _aureliaDependencyInjection.transient;
    }, function (_aureliaTemplatingResources) {
      RepeatStrategyLocator = _aureliaTemplatingResources.RepeatStrategyLocator;
      ArrayRepeatStrategy = _aureliaTemplatingResources.ArrayRepeatStrategy;
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }],
    execute: function () {
      logger = LogManager.getLogger('aurelia-kendoui-bridge');

      _export('WidgetBase', WidgetBase = (_dec = transient(), _dec2 = inject(TaskQueue, TemplateCompiler, OptionsBuilder, Util, TemplateGatherer, KendoConfigBuilder, RepeatStrategyLocator), _dec(_class = _dec2(_class = function () {
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
            throw new Error('The kendo control \'' + controlName + '\' is not available. Did you load this control?');
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

        WidgetBase.prototype.useViewResources = function useViewResources(resources) {
          if (!resources) {
            throw new Error('resources is not set');
          }

          this.viewResources = resources;

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

        WidgetBase.prototype.createWidget = function createWidget(options) {
          var _this = this;

          if (!options) {
            throw new Error('the createWidget() function needs to be called with an object');
          }

          if (!options.element) {
            throw new Error('element is not set');
          }

          if (this.viewModel && this.viewModel.kWidget) {
            this.destroy(this.viewModel.kWidget);
          }

          var allOptions = this._getOptions(options.rootElement || options.element);

          if (options.beforeInitialize) {
            options.beforeInitialize(allOptions);
          }

          Object.assign(allOptions, {
            $angular: [{ _$parent: options.parentCtx, _$resources: this.viewResources }]
          });

          if (this.configBuilder.debugMode) {
            logger.debug('initializing ' + this.controlName + ' with the following config', allOptions);
          }

          var widget = this._createWidget(options.element, allOptions, this.controlName);

          widget.$angular = [{
            _$parent: options.parentCtx,
            _$resources: this.viewResources
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

          if (options.afterInitialize) {
            options.afterInitialize();
          }

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
          var allowedEvents = this.kendoEvents;
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
          var binding = this.bindingsToKendo.find(function (i) {
            return i.propertyName === property;
          });
          if (!binding) return;

          if (typeof newValue === 'undefined') {
            widget[binding.functionName](null);
          } else {
            if (widget && widget[binding.functionName]() !== newValue) {
              widget[binding.functionName](newValue);
            }
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
            }, new ArrayRepeatStrategy());
          }
        };

        WidgetBase.prototype.destroy = function destroy(widget) {
          if (widget) {
            kendo.destroy(widget.element);
            widget = null;

            if (this.viewModel.kWidget) {
              this.viewModel.kWidget = null;
            }
          }
        };

        return WidgetBase;
      }()) || _class) || _class));

      _export('WidgetBase', WidgetBase);
    }
  };
});