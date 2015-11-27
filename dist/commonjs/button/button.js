'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _commonOptions = require('../common/options');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('kendo-ui');

var AuKendoButton = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(AuKendoButton, [{
        key: 'enable',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return true;
        },
        enumerable: true
    }, {
        key: 'icon',
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: 'imageUrl',
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: 'spriteCssClass',
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: 'options',
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }], null, _instanceInitializers);

    function AuKendoButton(element) {
        _classCallCheck(this, _AuKendoButton);

        _defineDecoratedPropertyDescriptor(this, 'enable', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'imageUrl', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'spriteCssClass', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

        this.element = element;
        this.options = {};
    }

    _createDecoratedClass(AuKendoButton, [{
        key: 'attached',
        value: function attached() {
            this._component = (0, _jquery2['default'])(this.element).kendoButton(this.getOptions()).data('kendoButton');
        }
    }, {
        key: 'detached',
        value: function detached() {
            if (this._component) this._component.destroy();
        }
    }, {
        key: 'getOptions',
        value: function getOptions() {

            var options = (0, _commonOptions.pruneOptions)({
                icon: this.icon,
                enable: this.enable,
                imageUrl: this.imageUrl,
                spriteCssClass: this.spriteCssClass
            });

            return Object.assign({}, this.options, options);
        }
    }, {
        key: 'enableChanged',
        value: function enableChanged(newValue) {
            if (this._component) this._component.enable(newValue);
        }
    }], null, _instanceInitializers);

    var _AuKendoButton = AuKendoButton;
    AuKendoButton = (0, _aureliaFramework.inject)(Element)(AuKendoButton) || AuKendoButton;
    AuKendoButton = (0, _aureliaFramework.customAttribute)('au-kendo-button')(AuKendoButton) || AuKendoButton;
    return AuKendoButton;
})();

exports.AuKendoButton = AuKendoButton;