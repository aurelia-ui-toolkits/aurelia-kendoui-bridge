define(['exports', 'aurelia-framework', '../common/index', 'jquery', 'kendo-ui/js/kendo.scheduler.min'], function (exports, _aureliaFramework, _commonIndex, _jquery, _kendoUiJsKendoSchedulerMin) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var AuScheduler = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(AuScheduler, [{
      key: 'options',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function AuScheduler(element) {
      _classCallCheck(this, _AuScheduler);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

      this.element = element;
      this.options = {};
    }

    AuScheduler.prototype.bind = function bind() {};

    AuScheduler.prototype.detached = function detached() {
      if (this._component) {
        this._component.destroy();
      }
    };

    AuScheduler.prototype.getOptions = function getOptions() {
      var options = _commonIndex.pruneOptions({});

      return Object.assign({}, this.options, options);
    };

    AuScheduler.prototype.enableChanged = function enableChanged(newValue) {
      if (this._component) {
        this._component.enable(newValue);
      }
    };

    var _AuScheduler = AuScheduler;
    AuScheduler = _aureliaFramework.inject(Element)(AuScheduler) || AuScheduler;
    return AuScheduler;
  })();

  exports.AuScheduler = AuScheduler;
});