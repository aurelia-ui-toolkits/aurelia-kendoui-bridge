System.register(['aurelia-framework', '../common/options', 'jquery', 'kendo-ui/js/kendo.scheduler.min'], function (_export) {
  'use strict';

  var customAttribute, bindable, inject, pruneOptions, AuScheduler;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_commonOptions) {
      pruneOptions = _commonOptions.pruneOptions;
    }, function (_jquery) {}, function (_kendoUiJsKendoSchedulerMin) {}],
    execute: function () {
      AuScheduler = (function () {
        var _instanceInitializers = {};

        _createDecoratedClass(AuScheduler, [{
          key: 'options',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function AuScheduler(element) {
          _classCallCheck(this, _AuScheduler);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

          this.element = element;
          this.options = {};
        }

        AuScheduler.prototype.attached = function attached() {};

        AuScheduler.prototype.detached = function detached() {
          if (this._component) {
            this._component.destroy();
          }
        };

        AuScheduler.prototype.getOptions = function getOptions() {
          var options = pruneOptions({});

          return Object.assign({}, this.options, options);
        };

        AuScheduler.prototype.enableChanged = function enableChanged(newValue) {
          if (this._component) {
            this._component.enable(newValue);
          }
        };

        var _AuScheduler = AuScheduler;
        AuScheduler = inject(Element)(AuScheduler) || AuScheduler;
        return AuScheduler;
      })();

      _export('AuScheduler', AuScheduler);
    }
  };
});