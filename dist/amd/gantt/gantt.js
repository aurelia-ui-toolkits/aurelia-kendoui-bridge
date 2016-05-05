define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../common/options-builder', '../pdf/pdf', 'kendo.gantt.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _commonWidgetBase, _commonDecorators, _commonConstants, _commonOptionsBuilder, _pdfPdf, _kendoGanttMin) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var Gantt = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(Gantt, [{
      key: 'columns',
      decorators: [_aureliaTemplating.children(_commonConstants.constants.elementPrefix + 'gantt-col')],
      initializer: null,
      enumerable: true
    }, {
      key: 'templates',
      decorators: [_aureliaTemplating.children(_commonConstants.constants.elementPrefix + 'template')],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function Gantt(element, widgetBase, viewResources, optionsBuilder) {
      _classCallCheck(this, _Gantt);

      _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'templates', _instanceInitializers);

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

      this.recreate();
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

    var _Gantt = Gantt;
    Gantt = _aureliaDependencyInjection.inject(Element, _commonWidgetBase.WidgetBase, _aureliaTemplating.ViewResources, _commonOptionsBuilder.OptionsBuilder)(Gantt) || Gantt;
    Gantt = _commonDecorators.generateBindables('kendoGantt')(Gantt) || Gantt;
    Gantt = _aureliaTemplating.customElement(_commonConstants.constants.elementPrefix + 'gantt')(Gantt) || Gantt;
    return Gantt;
  })();

  exports.Gantt = Gantt;

  function isInitFromDiv(element) {
    return element.querySelectorAll('div').length > 0;
  }
});