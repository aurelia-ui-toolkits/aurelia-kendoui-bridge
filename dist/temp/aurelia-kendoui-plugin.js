'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

exports.configure = configure;
exports.fireEvent = fireEvent;
exports.fireKendoEvent = fireKendoEvent;
exports.pruneOptions = pruneOptions;

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaLogging = require('aurelia-logging');

var LogManager = _interopRequireWildcard(_aureliaLogging);

require('jquery');

require('kendo-ui/js/kendo.autocomplete.min');

require('kendo-ui/js/kendo.button.min');

require('kendo-ui/js/kendo.grid.min');

require('kendo-ui/js/kendo.menu.min');

require('kendo-ui/js/kendo.tabstrip.min');

var _aureliaFramework = require('aurelia-framework');

var _aureliaTemplating = require('aurelia-templating');

var logger = LogManager.getLogger('aurelia-kendoui-plugin');

function configure(aurelia, configCallback) {
  var builder = new KendoConfigBuilder();

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(builder);
  }

  if (builder.resources.length === 0) {
    logger.warn('Nothing specified for kendo configuration - using defaults for Kendo Core');
    builder.core();
  }

  var resources = builder.resources;

  aurelia.globalResources(resources);
}

var KendoConfigBuilder = (function () {
  function KendoConfigBuilder() {
    _classCallCheck(this, KendoConfigBuilder);

    this.resources = [];
  }

  KendoConfigBuilder.prototype.core = function core() {
    this.kendoButton().kendoTabStrip().kendoMenu();
    return this;
  };

  KendoConfigBuilder.prototype.pro = function pro() {
    this.core().kendoGrid().kendoAutoComplete();
    return this;
  };

  KendoConfigBuilder.prototype.kendoAutoComplete = function kendoAutoComplete() {
    this.resources.push('autocomplete/autocomplete');
    return this;
  };

  KendoConfigBuilder.prototype.kendoButton = function kendoButton() {
    this.resources.push('button/button');
    return this;
  };

  KendoConfigBuilder.prototype.kendoMenu = function kendoMenu() {
    this.resources.push('menu/menu');
    return this;
  };

  KendoConfigBuilder.prototype.kendoCombobox = function kendoCombobox() {
    this.resources.push('combobox/combobox');
    return this;
  };

  KendoConfigBuilder.prototype.kendoDropDownList = function kendoDropDownList() {
    this.resources.push('dropdownlist/dropdownlist');
    return this;
  };

  KendoConfigBuilder.prototype.kendoGrid = function kendoGrid() {
    this.resources.push('grid/grid');
    this.resources.push('grid/au-col');
    return this;
  };

  KendoConfigBuilder.prototype.kendoScheduler = function kendoScheduler() {
    this.resources.push('scheduler/scheduler');
    return this;
  };

  KendoConfigBuilder.prototype.kendoTabStrip = function kendoTabStrip() {
    this.resources.push('tabstrip/tabstrip');
    return this;
  };

  KendoConfigBuilder.prototype.kendoToolbar = function kendoToolbar() {
    this.resources.push('toolbar/toolbar');
    return this;
  };

  return KendoConfigBuilder;
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
      return 'startswith';
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
    initializer: function initializer() {
      return false;
    },
    enumerable: true
  }, {
    key: 'ignoreCase',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return true;
    },
    enumerable: true
  }, {
    key: 'minLength',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return 1;
    },
    enumerable: true
  }, {
    key: 'placeholder',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return '';
    },
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
      return null;
    },
    enumerable: true
  }, {
    key: 'suggest',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return false;
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

  function AuKendoAutoComplete(element, templateCompiler) {
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
    this.templateCompiler = templateCompiler;
  }

  AuKendoAutoComplete.prototype.bind = function bind(ctx) {
    this.templateCompiler.initialize(ctx);

    this._initialize();
  };

  AuKendoAutoComplete.prototype.recreate = function recreate() {
    this._initialize();
  };

  AuKendoAutoComplete.prototype._initialize = function _initialize() {
    var _this = this;

    this.widget = $(this.element).kendoAutoComplete(this.getOptions()).data('kendoAutoComplete');

    this.widget.bind('change', function (event) {
      _this.value = event.sender.value();

      fireEvent(_this.element, 'input');
    });

    this.widget.bind('select', function (event) {
      _this.value = event.sender.value();

      fireEvent(_this.element, 'input');
    });
  };

  AuKendoAutoComplete.prototype.getOptions = function getOptions() {
    var _this2 = this;

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
      template: this.template,
      headerTemplate: this.headerTemplate,
      suggest: this.suggest,
      change: function change(e) {
        return fireKendoEvent(_this2.element, 'change', e);
      },
      close: function close(e) {
        return fireKendoEvent(_this2.element, 'close', e);
      },
      dataBound: function dataBound(e) {
        return fireKendoEvent(_this2.element, 'data-bound', e);
      },
      filtering: function filtering(e) {
        return fireKendoEvent(_this2.element, 'filtering', e);
      },
      open: function open(e) {
        return fireKendoEvent(_this2.element, 'open', e);
      },
      select: function select(e) {
        return fireKendoEvent(_this2.element, 'select', e);
      }
    });

    return Object.assign({}, this.options, options);
  };

  AuKendoAutoComplete.prototype.enableChanged = function enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  AuKendoAutoComplete.prototype.detached = function detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  };

  var _AuKendoAutoComplete = AuKendoAutoComplete;
  AuKendoAutoComplete = _aureliaFramework.inject(Element, TemplateCompiler)(AuKendoAutoComplete) || AuKendoAutoComplete;
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

  AuKendoButton.prototype.bind = function bind() {
    this._initialize();
  };

  AuKendoButton.prototype.recreate = function recreate() {
    this._initialize();
  };

  AuKendoButton.prototype._initialize = function _initialize() {
    this.widget = $(this.element).kendoButton(this.getOptions()).data('kendoButton');
  };

  AuKendoButton.prototype.getOptions = function getOptions() {
    var _this3 = this;

    var options = pruneOptions({
      icon: this.icon,
      enable: this.enable,
      imageUrl: this.imageUrl,
      spriteCssClass: this.spriteCssClass,
      click: function click(e) {
        return fireKendoEvent(_this3.element, 'click', e);
      }
    });

    return Object.assign({}, this.options, options);
  };

  AuKendoButton.prototype.enableChanged = function enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  AuKendoButton.prototype.detached = function detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  };

  var _AuKendoButton = AuKendoButton;
  AuKendoButton = _aureliaFramework.inject(Element)(AuKendoButton) || AuKendoButton;
  AuKendoButton = _aureliaFramework.customAttribute('au-kendo-button')(AuKendoButton) || AuKendoButton;
  return AuKendoButton;
})();

exports.AuKendoButton = AuKendoButton;

function fireEvent(element, name) {
  var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var event = new CustomEvent(name, { 'detail': data });
  element.dispatchEvent(event);
}

function fireKendoEvent(element, name) {
  var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  fireEvent(element, 'kendo-' + name, data);
  return true;
}

var _events = require('./events');

_defaults(exports, _interopExportWildcard(_events, _defaults));

var _options = require('./options');

_defaults(exports, _interopExportWildcard(_options, _defaults));

var _templateCompiler = require('./template-compiler');

_defaults(exports, _interopExportWildcard(_templateCompiler, _defaults));

function pruneOptions(options) {

  var returnOptions = {};

  for (var prop in options) {
    if (options.hasOwnProperty(prop) && options[prop] !== null) {
      returnOptions[prop] = options[prop];
    }
  }

  return returnOptions;
}

var TemplateCompiler = (function () {
  function TemplateCompiler(templatingEngine) {
    _classCallCheck(this, _TemplateCompiler);

    this.templatingEngine = templatingEngine;
  }

  TemplateCompiler.prototype.initialize = function initialize($parent) {
    var _this4 = this;

    this.$parent = $parent;

    kendo.ui.Widget.prototype.angular = function (_event, _args) {
      return _this4.handleTemplateEvents(_event, _args);
    };
    kendo.mobile.ui.Widget.prototype.angular = function (_event, _args) {
      return _this4.handleTemplateEvents(_event, _args);
    };
  };

  TemplateCompiler.prototype.handleTemplateEvents = function handleTemplateEvents(_event, _args) {
    if (_event !== 'compile' && _event !== 'cleanup') return;

    var args = _args();
    var elements = args.elements;
    var data = args.data;

    switch (_event) {
      case 'compile':
        this.compile(elements, data);
        break;

      case 'cleanup':
        this.cleanup(elements);
        break;

      default:
        break;
    }
  };

  TemplateCompiler.prototype.compile = function compile(elements, data) {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var ctx = undefined;

      if (data && data[i]) {
        var _data = data[i];
        ctx = _data.dataItem;
      }

      this.enhanceView(element, ctx);
    }
  };

  TemplateCompiler.prototype.enhanceView = function enhanceView(element, ctx) {
    var view = this.templatingEngine.enhance(element);
    view.bind(ctx, this.$parent);
    view.attached();
    $(element).data('viewInstance', view);
  };

  TemplateCompiler.prototype.cleanup = function cleanup(elements) {
    if (!elements) return;

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      this.cleanupView(element);
    }
  };

  TemplateCompiler.prototype.cleanupView = function cleanupView(element) {
    var view = $(element).data('viewInstance');
    if (!view) return;

    view.detached();
    view.unbind();
  };

  var _TemplateCompiler = TemplateCompiler;
  TemplateCompiler = _aureliaFramework.inject(_aureliaTemplating.TemplatingEngine)(TemplateCompiler) || TemplateCompiler;
  return TemplateCompiler;
})();

exports.TemplateCompiler = TemplateCompiler;

var AuCol = (function () {
  var _instanceInitializers3 = {};

  _createDecoratedClass(AuCol, [{
    key: 'title',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'field',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'format',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'command',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'width',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'lockable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'locked',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers3);

  function AuCol(targetInstruction) {
    _classCallCheck(this, _AuCol);

    _defineDecoratedPropertyDescriptor(this, 'title', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'field', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'format', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'command', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'width', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'lockable', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'locked', _instanceInitializers3);

    this.template = targetInstruction.elementInstruction.template;
  }

  var _AuCol = AuCol;
  AuCol = _aureliaFramework.inject(_aureliaFramework.TargetInstruction)(AuCol) || AuCol;
  AuCol = _aureliaFramework.processContent(function (compiler, resources, element, instruction) {
    var html = element.innerHTML;
    if (html !== '') {
      instruction.template = html;
    }

    return true;
  })(AuCol) || AuCol;
  AuCol = _aureliaFramework.noView(AuCol) || AuCol;
  return AuCol;
})();

exports.AuCol = AuCol;

var Grid = (function () {
  var _instanceInitializers4 = {};

  _createDecoratedClass(Grid, [{
    key: 'columns',
    decorators: [_aureliaFramework.children('au-col')],
    initializer: null,
    enumerable: true
  }, {
    key: 'autoBind',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return true;
    },
    enumerable: true
  }, {
    key: 'columnMenu',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'dataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'editable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'filterable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'group',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'groupable',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return true;
    },
    enumerable: true
  }, {
    key: 'height',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'navigatable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'page',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return 1;
    },
    enumerable: true
  }, {
    key: 'pageable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'sortable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'pageSize',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return 10;
    },
    enumerable: true
  }, {
    key: 'scrollable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'selectable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'selectedItem',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'selectedItems',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'sort',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'reorderable',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return true;
    },
    enumerable: true
  }, {
    key: 'resizable',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return true;
    },
    enumerable: true
  }, {
    key: 'toolbar',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers4);

  function Grid(element, templateCompiler) {
    _classCallCheck(this, _Grid);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'autoBind', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'columnMenu', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'dataSource', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'editable', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'filterable', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'group', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'groupable', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'height', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'navigatable', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'page', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'pageable', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'sortable', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'pageSize', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'scrollable', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'selectable', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'selectedItem', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'selectedItems', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'sort', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'reorderable', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'resizable', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'toolbar', _instanceInitializers4);

    this.element = element;
    this.templateCompiler = templateCompiler;
  }

  Grid.prototype.bind = function bind(ctx) {
    this.templateCompiler.initialize(ctx);
  };

  Grid.prototype.attached = function attached() {
    this._initialize();
  };

  Grid.prototype.recreate = function recreate() {
    this._initialize();
  };

  Grid.prototype._initialize = function _initialize() {
    var target = isInitFromTable(this.element) ? this.element.children[0] : this.element;

    this.widget = $(target).kendoGrid(this.getOptions()).data('kendoGrid');
  };

  Grid.prototype.getOptions = function getOptions() {
    var _this5 = this;

    var options = pruneOptions({
      animation: this.animation,
      columns: this.columns,
      columnMenu: this.columnMenu,
      dataSource: this.dataSource,
      dataTextField: this.dataTextField,
      delay: this.delay,
      enable: this.enable,
      editable: this.editable,
      filter: this.filter,
      filterable: this.filterable,
      fixedGroupTemplate: this.fixedGroupTemplate,
      groupTemplate: this.groupTemplate,
      groupable: this.groupable,
      headerTemplate: this.headerTemplate,
      height: this.height,
      highlightFirst: this.highlightFirst,
      ignoreCase: this.ignoreCase,
      minLength: this.minLength,
      navigatable: this.navigatable,
      pageable: this.pageable,
      placeholder: this.placeholder,
      popup: this.popup,
      reorderable: this.reorderable,
      resizable: this.resizable,
      separator: this.separator,
      scrollable: this.scrollable,
      sortable: this.sortable,
      suggest: this.suggest,
      template: this.template,
      toolbar: this.toolbar,
      valuePrimitive: this.valuePrimitive,
      virtual: this.virtual,

      cancel: function cancel(e) {
        return fireKendoEvent(_this5.element, 'cancel', e);
      },
      change: function change(e) {
        return fireKendoEvent(_this5.element, 'change', e);
      },
      columnHide: function columnHide(e) {
        return fireKendoEvent(_this5.element, 'column-hide', e);
      },
      columnLock: function columnLock(e) {
        return fireKendoEvent(_this5.element, 'column-lock', e);
      },
      columnUnlock: function columnUnlock(e) {
        return fireKendoEvent(_this5.element, 'column-unlock', e);
      },
      columnMenuInit: function columnMenuInit(e) {
        return fireKendoEvent(_this5.element, 'column-menu-init', e);
      },
      columnReorder: function columnReorder(e) {
        return fireKendoEvent(_this5.element, 'column-reorder', e);
      },
      columnResize: function columnResize(e) {
        return fireKendoEvent(_this5.element, 'column-resize', e);
      },
      columnShow: function columnShow(e) {
        return fireKendoEvent(_this5.element, 'column-show', e);
      },
      dataBinding: function dataBinding(e) {
        return fireKendoEvent(_this5.element, 'data-binding', e);
      },
      dataBound: function dataBound(e) {
        return fireKendoEvent(_this5.element, 'data-bound', e);
      },
      detailCollapse: function detailCollapse(e) {
        return fireKendoEvent(_this5.element, 'detail-collapse', e);
      },

      detailExpand: function detailExpand(e) {
        return fireKendoEvent(_this5.element, 'detail-expand', e);
      },
      edit: function edit(e) {
        return fireKendoEvent(_this5.element, 'edit', e);
      },
      excelExport: function excelExport(e) {
        return fireKendoEvent(_this5.element, 'excel-export', e);
      },
      filterMenuInit: function filterMenuInit(e) {
        return fireKendoEvent(_this5.element, 'filter-menu-init', e);
      },
      navigate: function navigate(e) {
        return fireKendoEvent(_this5.element, 'navigate', e);
      },
      pdfExport: function pdfExport(e) {
        return fireKendoEvent(_this5.element, 'pdf-export', e);
      },
      remove: function remove(e) {
        return fireKendoEvent(_this5.element, 'remove', e);
      },
      save: function save(e) {
        return fireKendoEvent(_this5.element, 'save', e);
      },
      saveChanges: function saveChanges(e) {
        return fireKendoEvent(_this5.element, 'save-changes', e);
      }
    });

    return Object.assign({}, this.options, options);
  };

  Grid.prototype.enableChanged = function enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  Grid.prototype.detached = function detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  };

  var _Grid = Grid;
  Grid = _aureliaFramework.inject(Element, TemplateCompiler)(Grid) || Grid;
  Grid = _aureliaFramework.customElement('au-kendo-grid')(Grid) || Grid;
  return Grid;
})();

exports.Grid = Grid;

function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}

var Menu = (function () {
  var _instanceInitializers5 = {};

  _createDecoratedClass(Menu, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'dataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'closeOnClick',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'animation',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'direction',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'hoverDelay',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'orientation',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'popupCollision',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers5);

  function Menu(element) {
    _classCallCheck(this, _Menu);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers5);

    _defineDecoratedPropertyDescriptor(this, 'dataSource', _instanceInitializers5);

    _defineDecoratedPropertyDescriptor(this, 'closeOnClick', _instanceInitializers5);

    _defineDecoratedPropertyDescriptor(this, 'animation', _instanceInitializers5);

    _defineDecoratedPropertyDescriptor(this, 'direction', _instanceInitializers5);

    _defineDecoratedPropertyDescriptor(this, 'hoverDelay', _instanceInitializers5);

    _defineDecoratedPropertyDescriptor(this, 'orientation', _instanceInitializers5);

    _defineDecoratedPropertyDescriptor(this, 'popupCollision', _instanceInitializers5);

    this.element = element;
    this.options = {};
  }

  Menu.prototype.bind = function bind() {
    this._initialize();
  };

  Menu.prototype.recreate = function recreate() {
    this._initialize();
  };

  Menu.prototype._initialize = function _initialize() {
    var target = undefined;
    var ul = $(this.element).find('ul');
    if (ul.has()) {
      target = $(this.element).find('ul').first();
    } else {
      target = $(this.element).appendChild('<ul></ul>');
    }

    this.widget = target.kendoMenu(this.getOptions()).data('kendoMenu');
  };

  Menu.prototype.getOptions = function getOptions() {
    var _this6 = this;

    var options = pruneOptions({
      dataSource: this.dataSource,
      closeOnClick: this.closeOnClick,
      animation: this.animation,
      direction: this.direction,
      hoverDelay: this.hoverDelay,
      orientation: this.orientation,
      popupCollision: this.popupCollision,
      close: function close(e) {
        return fireKendoEvent(_this6.element, 'close', e);
      },
      open: function open(e) {
        return fireKendoEvent(_this6.element, 'open', e);
      },
      activate: function activate(e) {
        return fireKendoEvent(_this6.element, 'activate', e);
      },
      deactivate: function deactivate(e) {
        return fireKendoEvent(_this6.element, 'deactivate', e);
      },
      select: function select(e) {
        return fireKendoEvent(_this6.element, 'select', e);
      }
    });

    return Object.assign({}, this.options, options);
  };

  Menu.prototype.detached = function detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  };

  var _Menu = Menu;
  Menu = _aureliaFramework.inject(Element)(Menu) || Menu;
  Menu = _aureliaFramework.customElement('au-kendo-menu')(Menu) || Menu;
  return Menu;
})();

exports.Menu = Menu;

var TabStrip = (function () {
  var _instanceInitializers6 = {};

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
  }], null, _instanceInitializers6);

  function TabStrip(element) {
    _classCallCheck(this, _TabStrip);

    _defineDecoratedPropertyDescriptor(this, 'animation', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'collapsible', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'contentUrls', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'dataContentField', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'dataContentUrlField', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'dataSpriteCssClass', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'dataTextField', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'dataUrlField', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'navigatable', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'scrollable', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'tabPosition', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'enable', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers6);

    this.element = element;
    this.options = {};
  }

  TabStrip.prototype.bind = function bind() {
    this._initialize();
  };

  TabStrip.prototype.recreate = function recreate() {
    this._initialize();
  };

  TabStrip.prototype._initialize = function _initialize() {
    this.widget = $(this.element).kendoTabStrip(this.getOptions()).data('kendoTabStrip');
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
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  TabStrip.prototype.detached = function detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  };

  var _TabStrip = TabStrip;
  TabStrip = _aureliaFramework.inject(Element)(TabStrip) || TabStrip;
  TabStrip = _aureliaFramework.customAttribute('au-kendo-tabstrip')(TabStrip) || TabStrip;
  return TabStrip;
})();

exports.TabStrip = TabStrip;

var AuScheduler = function AuScheduler() {
  _classCallCheck(this, AuScheduler);
};

exports.AuScheduler = AuScheduler;

var AuToolbar = function AuToolbar() {
  _classCallCheck(this, AuToolbar);
};

exports.AuToolbar = AuToolbar;