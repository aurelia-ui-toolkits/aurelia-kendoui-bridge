define(['exports', 'aurelia-framework', '../common/events', '../common/options', 'jquery', 'kendo-ui/src/js/kendo.autocomplete'], function (exports, _aureliaFramework, _commonEvents, _commonOptions, _jquery, _kendoUiSrcJsKendoAutocomplete) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    var _$ = _interopRequireDefault(_jquery);

    var AuKendoAutoComplete = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(AuKendoAutoComplete, [{
            key: 'options',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return {};
            },
            enumerable: true
        }, {
            key: 'animation',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'dataSource',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'dataTextField',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return null;
            },
            enumerable: true
        }, {
            key: 'delay',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return 200;
            },
            enumerable: true
        }, {
            key: 'enable',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return true;
            },
            enumerable: true
        }, {
            key: 'filter',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return "startswith";
            },
            enumerable: true
        }, {
            key: 'fixedGroupTemplate',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'groupTemplate',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'height',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'highlightFirst',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'ignoreCase',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'minLength',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'placeholder',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'popup',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'separator',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return "";
            },
            enumerable: true
        }, {
            key: 'suggest',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return true;
            },
            enumerable: true
        }, {
            key: 'headerTemplate',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'template',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'valuePrimitive',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'virtual',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'value',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }], null, _instanceInitializers);

        function AuKendoAutoComplete(element) {
            _classCallCheck(this, _AuKendoAutoComplete);

            _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'animation', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'dataSource', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'dataTextField', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'delay', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'enable', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'filter', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'fixedGroupTemplate', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'groupTemplate', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'height', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'highlightFirst', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'ignoreCase', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'minLength', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'placeholder', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'popup', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'separator', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'suggest', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'headerTemplate', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'valuePrimitive', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'virtual', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

            this.element = element;
        }

        _createDecoratedClass(AuKendoAutoComplete, [{
            key: 'attached',
            value: function attached() {
                var _this = this;

                this._component = (0, _$['default'])(this.element).kendoAutoComplete(this.getOptions()).data("kendoAutoComplete");

                this._component.bind('change', function (event) {
                    _this.value = event.sender.value();

                    (0, _commonEvents.fireEvent)(_this.element, 'input');
                });

                this._component.bind('select', function (event) {
                    _this.value = event.sender.value();

                    (0, _commonEvents.fireEvent)(_this.element, 'input');
                });
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
                    dataSource: this.dataSource,
                    dataTextField: this.dataTextField,
                    delay: this.delay,
                    enable: this.enable,
                    filter: this.filter,
                    fixedGroupTemplate: this.fixedGroupTemplate,
                    groupTemplate: this.groupTemplate,
                    height: this.height,
                    highlightFirst: this.highlightFirst,
                    ignoreCase: this.ignoreCase,
                    minLength: this.minLength,
                    placeholder: this.placeholder,
                    popup: this.popup,
                    separator: this.separator,
                    suggest: this.suggest,
                    headerTemplate: this.headerTemplate,
                    template: this.template,
                    valuePrimitive: this.valuePrimitive,
                    virtual: this.virtual
                });

                return Object.assign({}, this.options, options);
            }
        }, {
            key: 'enableChanged',
            value: function enableChanged(newValue) {
                if (this._component) this._component.enable(newValue);
            }
        }], null, _instanceInitializers);

        var _AuKendoAutoComplete = AuKendoAutoComplete;
        AuKendoAutoComplete = (0, _aureliaFramework.inject)(Element)(AuKendoAutoComplete) || AuKendoAutoComplete;
        AuKendoAutoComplete = (0, _aureliaFramework.customAttribute)('au-kendo-autocomplete')(AuKendoAutoComplete) || AuKendoAutoComplete;
        return AuKendoAutoComplete;
    })();

    exports.AuKendoAutoComplete = AuKendoAutoComplete;
});