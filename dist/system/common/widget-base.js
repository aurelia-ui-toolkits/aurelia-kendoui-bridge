System.register(['./options', './events', './util', 'aurelia-framework', 'aurelia-dependency-injection'], function (_export) {
  'use strict';

  var pruneOptions, fireKendoEvent, getEventsFromAttributes, _hyphenate, getBindablePropertyName, TaskQueue, Container, WidgetBase;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_options) {
      pruneOptions = _options.pruneOptions;
    }, function (_events) {
      fireKendoEvent = _events.fireKendoEvent;
    }, function (_util) {
      getEventsFromAttributes = _util.getEventsFromAttributes;
      _hyphenate = _util._hyphenate;
      getBindablePropertyName = _util.getBindablePropertyName;
    }, function (_aureliaFramework) {
      TaskQueue = _aureliaFramework.TaskQueue;
    }, function (_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }],
    execute: function () {
      WidgetBase = (function () {
        function WidgetBase(controlName, element) {
          _classCallCheck(this, WidgetBase);

          var container = Container.instance;
          this.taskQueue = container.get(TaskQueue);

          this.element = element;

          this.target = this.element;

          this.controlName = controlName;

          this.setDefaultBindableValues();
        }

        WidgetBase.prototype._initialize = function _initialize() {
          var target = jQuery(this.target);

          var ctor = target[this.controlName];

          var options = this._getOptions(ctor);

          this.widget = ctor.call(target, options).data(this.controlName);

          this._initialized();
        };

        WidgetBase.prototype._initialized = function _initialized() {};

        WidgetBase.prototype._getOptions = function _getOptions(ctor) {
          var options = this.getOptionsFromBindables();
          var eventOptions = this.getEventOptions(ctor);

          return Object.assign({}, this.options, pruneOptions(options), eventOptions);
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

            options[prop] = this[getBindablePropertyName(prop)];
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

            this[getBindablePropertyName(prop)] = props[prop];
          }
        };

        WidgetBase.prototype.getEventOptions = function getEventOptions(ctor) {
          var _this = this;

          var options = {};
          var allowedEvents = ctor.widget.prototype.events;

          var events = getEventsFromAttributes(this.element);

          events.forEach(function (event) {
            if (!allowedEvents.includes(event)) {
              throw new Error(event + ' is not an event on the ' + _this.controlName + ' control');
            }

            options[event] = function (e) {
              _this.taskQueue.queueMicroTask(function () {
                fireKendoEvent(_this.target, _hyphenate(event), e);
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

      _export('WidgetBase', WidgetBase);
    }
  };
});