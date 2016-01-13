define(['exports', 'aurelia-framework', '../common/widget-base', '../common/decorators', '../pdf/pdf', 'kendo-ui/js/kendo.dataviz.treemap.min'], function (exports, _aureliaFramework, _commonWidgetBase, _commonDecorators, _pdfPdf, _kendoUiJsKendoDatavizTreemapMin) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var TreeMap = (function (_WidgetBase) {
    var _instanceInitializers = {};

    _inherits(TreeMap, _WidgetBase);

    _createDecoratedClass(TreeMap, [{
      key: 'kDataSource',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'options',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return {};
      },
      enumerable: true
    }], null, _instanceInitializers);

    function TreeMap(element) {
      _classCallCheck(this, _TreeMap);

      _WidgetBase.call(this, 'kendoTreeMap', element);

      _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);
    }

    TreeMap.prototype.attached = function attached() {
      this._initialize();
    };

    TreeMap.prototype.destroy = function destroy() {
      if (this.widget) {
        return this.widget.destroy();
      }
    };

    TreeMap.prototype.setDataSource = function setDataSource(dataSource) {
      if (this.widget) {
        return this.widget.setDataSource(dataSource);
      }
    };

    TreeMap.prototype.setOptions = function setOptions(value) {
      if (this.widget) {
        return this.widget.setOptions(value);
      }
    };

    TreeMap.prototype.findByUid = function findByUid(text) {
      if (this.widget) {
        return this.widget.findByUid(text);
      }
    };

    TreeMap.prototype.dataItem = function dataItem(tile) {
      if (this.widget) {
        return this.widget.dataItem(tile);
      }
    };

    TreeMap.prototype.resize = function resize() {
      if (this.widget) {
        return this.widget.resize();
      }
    };

    var _TreeMap = TreeMap;
    TreeMap = _aureliaFramework.inject(Element)(TreeMap) || TreeMap;
    TreeMap = _commonDecorators.generateBindables('kendoTreeMap')(TreeMap) || TreeMap;
    TreeMap = _aureliaFramework.customElement('k-treemap')(TreeMap) || TreeMap;
    return TreeMap;
  })(_commonWidgetBase.WidgetBase);

  exports.TreeMap = TreeMap;
});