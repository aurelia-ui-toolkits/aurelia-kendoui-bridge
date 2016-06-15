'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/constants', '../common/decorators', '../common/template-gatherer', '../common/options-builder'], function (_export, _context) {
  "use strict";

  var children, customElement, inject, constants, generateBindables, TemplateGatherer, OptionsBuilder, _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, Col;

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

  return {
    setters: [function (_aureliaTemplating) {
      children = _aureliaTemplating.children;
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonTemplateGatherer) {
      TemplateGatherer = _commonTemplateGatherer.TemplateGatherer;
    }, function (_commonOptionsBuilder) {
      OptionsBuilder = _commonOptionsBuilder.OptionsBuilder;
    }],
    execute: function () {
      _export('Col', Col = (_dec = customElement(constants.elementPrefix + 'col'), _dec2 = generateBindables('GridColumn'), _dec3 = inject(TemplateGatherer, OptionsBuilder), _dec4 = children(constants.elementPrefix + 'template'), _dec5 = children(constants.elementPrefix + 'col'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
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
      })), _class2)) || _class) || _class) || _class));

      _export('Col', Col);
    }
  };
});