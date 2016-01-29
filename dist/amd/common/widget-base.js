define(['exports', './options', './events', './util', './template-compiler', 'aurelia-dependency-injection', 'aurelia-task-queue'], function (exports, _options, _events, _util, _templateCompiler, _aureliaDependencyInjection, _aureliaTaskQueue) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var WidgetBase = (function () {
    function WidgetBase(taskQueue, templateCompiler) {
      _classCallCheck(this, _WidgetBase);

      this.taskQueue = taskQueue;
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

    WidgetBase.prototype.createWidget = function createWidget(options) {
      if (!options) {
        throw new Error('the createWidget() function needs to be called with an object');
      }

      if (!options.element) {
        throw new Error('element is not set');
      }

      if (!options.parentCtx) {
        throw new Error('parentCtx is not set');
      }

      var allOptions = this._getOptions(options.element);

      if (options.beforeInitialize) {
        options.beforeInitialize(allOptions);
      }

      Object.assign(allOptions, { _$parent: [options.parentCtx] });

      var widget = jQuery(options.element)[this.controlName](allOptions).data(this.controlName);

      widget._$parent = options.parentCtx;

      if (options.afterInitialize) {
        options.afterInitialize();
      }

      return widget;
    };

    WidgetBase.prototype._getOptions = function _getOptions(element) {
      var options = this.getOptionsFromBindables();
      var eventOptions = this.getEventOptions(element);

      return Object.assign({}, this.viewModel.options, _options.pruneOptions(options), eventOptions);
    };

    WidgetBase.prototype.getOptionsFromBindables = function getOptionsFromBindables() {
      var props = this.kendoOptions;
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

        options[prop] = this.viewModel[_util.getBindablePropertyName(prop)];
      }

      if (this.viewModel.kDataSource) {
        options.dataSource = this.viewModel.kDataSource;
      }

      return options;
    };

    WidgetBase.prototype.setDefaultBindableValues = function setDefaultBindableValues() {
      if (!this.viewModel) {
        throw new Error('viewModel is not set');
      }

      var props = this.kendoOptions;

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

        this.viewModel[_util.getBindablePropertyName(prop)] = props[prop];
      }

      return this;
    };

    WidgetBase.prototype.getEventOptions = function getEventOptions(element) {
      var _this = this;

      var options = {};
      var allowedEvents = this.kendoEvents;

      var events = _util.getEventsFromAttributes(element);

      events.forEach(function (event) {
        if (!allowedEvents.includes(event)) {
          throw new Error(event + ' is not an event on the ' + _this.controlName + ' control');
        }

        options[event] = function (e) {
          _this.taskQueue.queueMicroTask(function () {
            _events.fireKendoEvent(element, _util._hyphenate(event), e);
          });
        };
      });

      return options;
    };

    WidgetBase.prototype.destroy = function destroy(widget) {
      widget.destroy();
    };

    var _WidgetBase = WidgetBase;
    WidgetBase = _aureliaDependencyInjection.inject(_aureliaTaskQueue.TaskQueue, _templateCompiler.TemplateCompiler)(WidgetBase) || WidgetBase;
    WidgetBase = _aureliaDependencyInjection.transient()(WidgetBase) || WidgetBase;
    return WidgetBase;
  })();

  exports.WidgetBase = WidgetBase;
});