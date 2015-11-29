'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

exports.configure = configure;
exports.fireEvent = fireEvent;
exports.pruneOptions = pruneOptions;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('kendo-ui/js/kendo.autocomplete.min');

var _jquery = require('jquery');

var $ = _interopRequireWildcard(_jquery);

require('kendo-ui/js/kendo.button.min');

require('kendo-ui/js/kendo.grid.min');

require('kendo-ui/js/kendo.tabstrip.min');

var _aureliaFramework = require('aurelia-framework');

var _aureliaLogging = require('aurelia-logging');

function configure(aurelia, configCallback) {

    var builder = new kendoConfigBuilder();

    if (configCallback !== undefined && typeof configCallback === 'function') {
        configCallback(builder);
    }

    if (builder.resources.length === 0) {
        console.warn("Nothing specified for kendo configuration - using defaults for Kendo Core");
        builder.core();
    }

    var resources = builder.resources;

    resources = resources.map(function (r) {
        return r + "/" + r;
    });

    aurelia.globalResources(resources);
}

var kendoConfigBuilder = (function () {
    function kendoConfigBuilder() {
        _classCallCheck(this, kendoConfigBuilder);

        this.resources = [];
    }

    kendoConfigBuilder.prototype.core = function core() {
        this.kendoButton().kendoTabStrip();
        return this;
    };

    kendoConfigBuilder.prototype.pro = function pro() {
        this.core().kendoAutoComplete();
        return this;
    };

    kendoConfigBuilder.prototype.kendoButton = function kendoButton() {
        this.resources.push("button");
        return this;
    };

    kendoConfigBuilder.prototype.kendoTabStrip = function kendoTabStrip() {
        this.resources.push("tabstrip");
        return this;
    };

    kendoConfigBuilder.prototype.kendoAutoComplete = function kendoAutoComplete() {
        this.resources.push("autocomplete");
        return this;
    };

    return kendoConfigBuilder;
})();

var AuKendoAutoComplete = (function () {
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

    AuKendoAutoComplete.prototype.attached = function attached() {
        var _this = this;

        this._component = $(this.element).kendoAutoComplete(this.getOptions()).data("kendoAutoComplete");

        this._component.bind('change', function (event) {
            _this.value = event.sender.value();

            fireEvent(_this.element, 'input');
        });

        this._component.bind('select', function (event) {
            _this.value = event.sender.value();

            fireEvent(_this.element, 'input');
        });
    };

    AuKendoAutoComplete.prototype.detached = function detached() {
        if (this._component) this._component.destroy();
    };

    AuKendoAutoComplete.prototype.getOptions = function getOptions() {
        var options = pruneOptions({
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
    };

    AuKendoAutoComplete.prototype.enableChanged = function enableChanged(newValue) {
        if (this._component) this._component.enable(newValue);
    };

    var _AuKendoAutoComplete = AuKendoAutoComplete;
    AuKendoAutoComplete = _aureliaFramework.inject(Element)(AuKendoAutoComplete) || AuKendoAutoComplete;
    AuKendoAutoComplete = _aureliaFramework.customAttribute('au-kendo-autocomplete')(AuKendoAutoComplete) || AuKendoAutoComplete;
    return AuKendoAutoComplete;
})();

exports.AuKendoAutoComplete = AuKendoAutoComplete;

var AuKendoButton = (function () {
    var _instanceInitializers2 = {};

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
    }], null, _instanceInitializers2);

    function AuKendoButton(element) {
        _classCallCheck(this, _AuKendoButton);

        _defineDecoratedPropertyDescriptor(this, 'enable', _instanceInitializers2);

        _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers2);

        _defineDecoratedPropertyDescriptor(this, 'imageUrl', _instanceInitializers2);

        _defineDecoratedPropertyDescriptor(this, 'spriteCssClass', _instanceInitializers2);

        _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers2);

        this.element = element;
        this.options = {};
    }

    AuKendoButton.prototype.attached = function attached() {
        this._component = $(this.element).kendoButton(this.getOptions()).data('kendoButton');
    };

    AuKendoButton.prototype.detached = function detached() {
        if (this._component) this._component.destroy();
    };

    AuKendoButton.prototype.getOptions = function getOptions() {

        var options = pruneOptions({
            icon: this.icon,
            enable: this.enable,
            imageUrl: this.imageUrl,
            spriteCssClass: this.spriteCssClass
        });

        return Object.assign({}, this.options, options);
    };

    AuKendoButton.prototype.enableChanged = function enableChanged(newValue) {
        if (this._component) this._component.enable(newValue);
    };

    var _AuKendoButton = AuKendoButton;
    AuKendoButton = _aureliaFramework.inject(Element)(AuKendoButton) || AuKendoButton;
    AuKendoButton = _aureliaFramework.customAttribute('au-kendo-button')(AuKendoButton) || AuKendoButton;
    return AuKendoButton;
})();

exports.AuKendoButton = AuKendoButton;

function createEvent(name) {
    var event = document.createEvent('Event');
    event.initEvent(name, true, true);
    return event;
}

function fireEvent(element, name) {
    var event = createEvent(name);
    element.dispatchEvent(event);
}

function pruneOptions(options) {

    var returnOptions = {};

    for (var prop in options) {
        if (options.hasOwnProperty(prop) && options[prop] !== null) {
            returnOptions[prop] = options[prop];
        }
    }

    return returnOptions;
}

var Grid = (function () {
    function Grid() {
        _classCallCheck(this, _Grid);

        var logger = _aureliaLogging.getLogger('aurelia-kendoui');

        if (!Kendo.ui.Grid) {
            logger.error('Kendo.ui.Grid is not defined. Ensure that the professional version of Kendo UI is installed.');

            return;
        }

        this.logger = logger;
    }

    Grid.prototype.attached = function attached() {
        this._component = $(this.host).kendoGrid(this.getOptions()).data("kendoGrid");
    };

    Grid.prototype.detached = function detached() {
        if (this._component) this._component.destroy();
    };

    Grid.prototype.getOptions = function getOptions() {
        var options = pruneOptions({
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
    };

    Grid.prototype.enableChanged = function enableChanged(newValue) {
        if (this._component) this._component.enable(newValue);
    };

    var _Grid = Grid;
    Grid = _aureliaFramework.inject(Element)(Grid) || Grid;
    Grid = _aureliaFramework.customElement("au-kendo-grid")(Grid) || Grid;
    return Grid;
})();

exports.Grid = Grid;

var TabStrip = (function () {
    var _instanceInitializers3 = {};

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
    }], null, _instanceInitializers3);

    function TabStrip(element) {
        _classCallCheck(this, _TabStrip);

        _defineDecoratedPropertyDescriptor(this, 'animation', _instanceInitializers3);

        _defineDecoratedPropertyDescriptor(this, 'collapsible', _instanceInitializers3);

        _defineDecoratedPropertyDescriptor(this, 'contentUrls', _instanceInitializers3);

        _defineDecoratedPropertyDescriptor(this, 'dataContentField', _instanceInitializers3);

        _defineDecoratedPropertyDescriptor(this, 'dataContentUrlField', _instanceInitializers3);

        _defineDecoratedPropertyDescriptor(this, 'dataSpriteCssClass', _instanceInitializers3);

        _defineDecoratedPropertyDescriptor(this, 'dataTextField', _instanceInitializers3);

        _defineDecoratedPropertyDescriptor(this, 'dataUrlField', _instanceInitializers3);

        _defineDecoratedPropertyDescriptor(this, 'navigatable', _instanceInitializers3);

        _defineDecoratedPropertyDescriptor(this, 'scrollable', _instanceInitializers3);

        _defineDecoratedPropertyDescriptor(this, 'tabPosition', _instanceInitializers3);

        _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers3);

        _defineDecoratedPropertyDescriptor(this, 'enable', _instanceInitializers3);

        _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers3);

        this.element = element;
        this.options = {};
    }

    TabStrip.prototype.attached = function attached() {
        this._component = $(this.element).kendoTabStrip(this.getOptions()).data('kendoTabStrip');
    };

    TabStrip.prototype.detached = function detached() {
        if (this._component) this._component.destroy();
    };

    TabStrip.prototype.getOptions = function getOptions() {
        var options = pruneOptions({
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
    };

    TabStrip.prototype.enableChanged = function enableChanged(newValue) {
        if (this._component) this._component.enable(newValue);
    };

    var _TabStrip = TabStrip;
    TabStrip = _aureliaFramework.inject(Element)(TabStrip) || TabStrip;
    TabStrip = _aureliaFramework.customAttribute('au-kendo-tabstrip')(TabStrip) || TabStrip;
    return TabStrip;
})();

exports.TabStrip = TabStrip;