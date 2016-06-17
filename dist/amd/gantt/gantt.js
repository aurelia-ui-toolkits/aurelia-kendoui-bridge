define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../common/options-builder', '../pdf/pdf', 'kendo.gantt.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants, _optionsBuilder, _pdf) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Gantt = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2;

  var Gantt = exports.Gantt = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'gantt'), _dec2 = (0, _decorators.generateBindables)('kendoGantt'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaTemplating.ViewResources, _optionsBuilder.OptionsBuilder), _dec4 = (0, _aureliaTemplating.children)(_constants.constants.elementPrefix + 'gantt-col'), _dec5 = (0, _aureliaTemplating.children)(_constants.constants.elementPrefix + 'template'), _dec6 = (0, _decorators.delayed)(), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
    function Gantt(element, widgetBase, viewResources, optionsBuilder) {
      _classCallCheck(this, Gantt);

      _initDefineProp(this, 'columns', _descriptor, this);

      _initDefineProp(this, 'templates', _descriptor2, this);

      this.element = element;
      this.optionsBuilder = optionsBuilder;
      this.widgetBase = widgetBase.control('kendoGantt').linkViewModel(this).useViewResources(viewResources);
    }

    Gantt.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Gantt.prototype.attached = function attached() {
      if (isInitFromDiv(this.element)) {
        this.target = this.element.querySelectorAll('div')[0];
      } else {
        this.target = document.createElement('div');
        this.element.appendChild(this.target);
      }

      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Gantt.prototype.recreate = function recreate() {
      var _this = this;

      this.widgetBase.useTemplates(this, 'kendoGantt', this.templates);

      this.kWidget = this.widgetBase.createWidget({
        element: this.target,
        rootElement: this.element,
        parentCtx: this.$parent,
        beforeInitialize: function beforeInitialize(o) {
          return _this._beforeInitialize(o);
        }
      });
    };

    Gantt.prototype._beforeInitialize = function _beforeInitialize(options) {
      var _this2 = this;

      if (this.columns && this.columns.length > 0) {
        options.columns = [];

        this.columns.forEach(function (column) {
          options.columns.push(_this2.optionsBuilder.getOptions(column, 'GanttColumn'));
        });
      }
    };

    Gantt.prototype.detached = function detached() {
      this.widgetBase.destroy(this.kWidget);
    };

    return Gantt;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'columns', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'templates', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  }), _applyDecoratedDescriptor(_class2.prototype, 'attached', [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'attached'), _class2.prototype)), _class2)) || _class) || _class) || _class);


  function isInitFromDiv(element) {
    return element.querySelectorAll('div').length > 0;
  }
});