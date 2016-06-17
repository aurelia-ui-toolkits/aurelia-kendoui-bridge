'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../common/options-builder', '../pdf/pdf', 'kendo.data.signalr.min', 'kendo.filtercell.min', 'kendo.treelist.min'], function (_export, _context) {
  "use strict";

  var inject, customElement, children, ViewResources, WidgetBase, generateBindables, constants, OptionsBuilder, delayed, PDF, _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, TreeList;

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
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      children = _aureliaTemplating.children;
      ViewResources = _aureliaTemplating.ViewResources;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
      delayed = _commonDecorators.delayed;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_commonOptionsBuilder) {
      OptionsBuilder = _commonOptionsBuilder.OptionsBuilder;
    }, function (_pdfPdf) {
      PDF = _pdfPdf.PDF;
    }, function (_kendoDataSignalrMin) {}, function (_kendoFiltercellMin) {}, function (_kendoTreelistMin) {}],
    execute: function () {
      _export('TreeList', TreeList = (_dec = customElement(constants.elementPrefix + 'tree-list'), _dec2 = generateBindables('kendoTreeList'), _dec3 = inject(Element, WidgetBase, ViewResources, OptionsBuilder), _dec4 = children(constants.elementPrefix + 'tree-col'), _dec5 = delayed(), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
        function TreeList(element, widgetBase, viewResources, optionsBuilder) {
          _classCallCheck(this, TreeList);

          _initDefineProp(this, 'columns', _descriptor, this);

          this.element = element;
          this.optionsBuilder = optionsBuilder;
          this.widgetBase = widgetBase.control('kendoTreeList').linkViewModel(this).useViewResources(viewResources);
        }

        TreeList.prototype.bind = function bind(ctx) {
          this.$parent = ctx;
        };

        TreeList.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        TreeList.prototype.recreate = function recreate() {
          var _this = this;

          var element = this.element;

          this.kWidget = this.widgetBase.createWidget({
            element: element,
            parentCtx: this.$parent,
            beforeInitialize: function beforeInitialize(o) {
              return _this._beforeInitialize(o);
            }
          });
        };

        TreeList.prototype._beforeInitialize = function _beforeInitialize(options) {
          var _this2 = this;

          if (this.columns && this.columns.length > 0) {
            options.columns = [];

            this.columns.forEach(function (column) {
              options.columns.push(_this2.optionsBuilder.getOptions(column, 'TreeListColumn'));
            });
          }
        };

        TreeList.prototype.detached = function detached() {
          this.widgetBase.destroy(this.kWidget);
        };

        return TreeList;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'columns', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class2.prototype, 'attached', [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'attached'), _class2.prototype)), _class2)) || _class) || _class) || _class));

      _export('TreeList', TreeList);
    }
  };
});