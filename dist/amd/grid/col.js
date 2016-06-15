define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/constants', '../common/decorators', '../common/template-gatherer', '../common/options-builder'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _constants, _decorators, _templateGatherer, _optionsBuilder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Col = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2;

  var Col = exports.Col = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'col'), _dec2 = (0, _decorators.generateBindables)('GridColumn'), _dec3 = (0, _aureliaDependencyInjection.inject)(_templateGatherer.TemplateGatherer, _optionsBuilder.OptionsBuilder), _dec4 = (0, _aureliaTemplating.children)(_constants.constants.elementPrefix + 'template'), _dec5 = (0, _aureliaTemplating.children)(_constants.constants.elementPrefix + 'col'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
    function Col(templateGatherer, optionsBuilder) {
      _classCallCheck(this, Col);

      _initDefineProp(this, 'templates', _descriptor, this);

      _initDefineProp(this, 'columns', _descriptor2, this);

      this.templateGatherer = templateGatherer;
      this.optionsBuilder = optionsBuilder;
    }

    Col.prototype.beforeOptionsBuild = function beforeOptionsBuild() {
      this.templateGatherer.useTemplates(this, 'GridColumn', this.templates);
    };

    Col.prototype.afterOptionsBuild = function afterOptionsBuild(options) {
      var _this = this;

      if (this.columns && this.columns.length > 0) {
        options.columns = [];

        this.columns.forEach(function (col) {
          options.columns.push(_this.optionsBuilder.getOptions(col, 'GridColumn'));
        });
      }
    };

    return Col;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'templates', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'columns', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  })), _class2)) || _class) || _class) || _class);
});