define(['exports', 'aurelia-framework', '../common/options', 'jquery', 'kendo-ui/src/js/kendo.tabstrip'], function (exports, _aureliaFramework, _commonOptions, _jquery, _kendoUiSrcJsKendoTabstrip) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    var _$ = _interopRequireDefault(_jquery);

    var TabStrip = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(TabStrip, [{
            key: 'animation',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'collapsible',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'contentUrls',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'dataContentField',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'dataContentUrlField',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'dataSpriteCssClass',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'dataTextField',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'dataUrlField',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'navigatable',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'scrollable',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'tabPosition',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'value',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'enable',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'options',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }], null, _instanceInitializers);

        function TabStrip(element) {
            _classCallCheck(this, _TabStrip);

            _defineDecoratedPropertyDescriptor(this, 'animation', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'collapsible', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'contentUrls', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'dataContentField', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'dataContentUrlField', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'dataSpriteCssClass', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'dataTextField', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'dataUrlField', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'navigatable', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'scrollable', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'tabPosition', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'enable', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

            this.element = element;
            this.options = {};
        }

        _createDecoratedClass(TabStrip, [{
            key: 'attached',
            value: function attached() {
                this._component = (0, _$['default'])(this.element).kendoTabStrip(this.getOptions()).data('kendoTabStrip');
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
                    animation: this.animation,
                    collapsible: this.collapsible,
                    contentUrls: this.contentUrls,
                    dataContentField: this.dataContentField,
                    dataContentUrlField: this.dataContentUrlField,
                    dataSpriteCssClass: this.dataSpriteCssClass,
                    dataTextField: this.dataTextField,
                    dataUrlField: this.dataUrlField,
                    navigatable: this.navigatable,
                    scrollable: this.scrollable,
                    tabPosition: this.tabPosition,
                    value: this.value
                });

                return Object.assign({}, this.options, options);
            }
        }, {
            key: 'enableChanged',
            value: function enableChanged(newValue) {
                if (this._component) this._component.enable(newValue);
            }
        }], null, _instanceInitializers);

        var _TabStrip = TabStrip;
        TabStrip = (0, _aureliaFramework.inject)(Element)(TabStrip) || TabStrip;
        TabStrip = (0, _aureliaFramework.customAttribute)('au-kendo-tabstrip')(TabStrip) || TabStrip;
        return TabStrip;
    })();

    exports.TabStrip = TabStrip;
});