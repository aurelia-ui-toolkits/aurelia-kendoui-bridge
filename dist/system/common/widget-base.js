System.register(['./util', './options-builder', './template-compiler', './template-gatherer', '../config-builder', 'aurelia-dependency-injection', 'aurelia-task-queue', 'aurelia-logging'], function (_export) {
  'use strict';

  var Util, OptionsBuilder, TemplateCompiler, TemplateGatherer, KendoConfigBuilder, inject, transient, TaskQueue, LogManager, logger, WidgetBase;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }, function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }],
    execute: function () {
      logger = LogManager.getLogger('aurelia-kendoui-bridge');

      WidgetBase = (function () {
        function WidgetBase(taskQueue, templateCompiler, optionsBuilder, util, templateGatherer, configBuilder) {
          _classCallCheck(this, _WidgetBase);

          this.taskQueue = taskQueue;
          this.optionsBuilder = optionsBuilder;
          this.util = util;
          this.configBuilder = configBuilder;
          this.templateGatherer = templateGatherer;
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
          var valueBindingProperty = arguments.length <= 0 || arguments[0] === undefined ? 'value' : arguments[0];
          var valueFunction = arguments.length <= 1 || arguments[1] === undefined ? 'value' : arguments[1];

          this.valueBindingProperty = valueBindingProperty;
          this.valueFunction = valueFunction;
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

          var allOptions = this._getOptions(options.rootElement || options.element);

          if (options.beforeInitialize) {
            options.beforeInitialize(allOptions);
          }

          Object.assign(allOptions, {
            _$parent: [options.parentCtx],
            _$resources: [this.viewResources]
          });

          if (this.configBuilder.debugMode) {
            logger.debug('initializing ' + this.controlName + ' with the following config', allOptions);
          }

          var widget = this._createWidget(options.element, allOptions, this.controlName);

          widget._$parent = options.parentCtx;
          widget._$resources = this.viewResources;

          if (this.withValueBinding) {
            widget.first('change', function (args) {
              return _this._handleChange(args.sender);
            });
            widget.first('dataBound', function (args) {
              return _this._handleChange(args.sender);
            });

            if (this.getValue(widget) !== '') {
              this._handleChange(widget);
            }
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
          var options = this.optionsBuilder.getOptions(this.viewModel, this.controlName);
          var eventOptions = this.getEventOptions(element);

          return this.util.pruneOptions(Object.assign({}, this.viewModel.kOptions, options, eventOptions));
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

        WidgetBase.prototype._handleChange = function _handleChange(widget) {
          var propName = this.util.getBindablePropertyName(this.valueBindingProperty);
          this.viewModel[propName] = this.getValue(widget);
        };

        WidgetBase.prototype.getValue = function getValue(widget) {
          return widget[this.valueFunction]();
        };

        WidgetBase.prototype.handlePropertyChanged = function handlePropertyChanged(widget, property, newValue, oldValue) {
          if (property === this.util.getBindablePropertyName(this.valueBindingProperty) && this.withValueBinding) {
            widget[this.valueFunction](newValue);
          }
        };

        WidgetBase.prototype.useTemplates = function useTemplates(target, controlName, templates) {
          return this.templateGatherer.useTemplates(target, controlName, templates);
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

        var _WidgetBase = WidgetBase;
        WidgetBase = inject(TaskQueue, TemplateCompiler, OptionsBuilder, Util, TemplateGatherer, KendoConfigBuilder)(WidgetBase) || WidgetBase;
        WidgetBase = transient()(WidgetBase) || WidgetBase;
        return WidgetBase;
      })();

      _export('WidgetBase', WidgetBase);
    }
  };
});