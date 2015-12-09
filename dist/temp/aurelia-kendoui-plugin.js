'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

exports.configure = configure;
exports.fireEvent = fireEvent;
exports.pruneOptions = pruneOptions;

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

require('kendo-ui/js/kendo.scheduler.min');

require('kendo-ui/js/kendo.tabstrip.min');

require('kendo-ui/js/kendo.toolbar.min');

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

  resources = resources.map(function (r) {
    return r + '/' + r;
  });

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
    this.resources.push('autocomplete');
    return this;
  };

  KendoConfigBuilder.prototype.kendoButton = function kendoButton() {
    this.resources.push('button');
    return this;
  };

  KendoConfigBuilder.prototype.kendoMenu = function kendoMenu() {
    this.resources.push('menu');
    return this;
  };

  KendoConfigBuilder.prototype.kendoCombobox = function kendoCombobox() {
    this.resources.push('combobox');
    return this;
  };

  KendoConfigBuilder.prototype.kendoDropDownList = function kendoDropDownList() {
    this.resources.push('dropdownlist');
    return this;
  };

  KendoConfigBuilder.prototype.kendoGrid = function kendoGrid() {
    this.resources.push('grid');
    return this;
  };

  KendoConfigBuilder.prototype.kendoScheduler = function kendoScheduler() {
    this.resources.push('scheduler');
    return this;
  };

  KendoConfigBuilder.prototype.kendoTabStrip = function kendoTabStrip() {
    this.resources.push('tabstrip');
    return this;
  };

  KendoConfigBuilder.prototype.kendoToolbar = function kendoToolbar() {
    this.resources.push('toolbar');
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
      return '';
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

  AuKendoAutoComplete.prototype.bind = function bind() {
    var _this = this;

    this._component = $(this.element).kendoAutoComplete(this.getOptions()).data('kendoAutoComplete');

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
    if (this._component) {
      this._component.destroy();
    }
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
    if (this._component) {
      this._component.enable(newValue);
    }
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

  AuKendoButton.prototype.bind = function bind() {
    this._component = $(this.element).kendoButton(this.getOptions()).data('kendoButton');
  };

  AuKendoButton.prototype.detached = function detached() {
    if (this._component) {
      this._component.destroy();
    }
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
    if (this._component) {
      this._component.enable(newValue);
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
    var _this2 = this;

    this.$parent = $parent;

    kendo.ui.Widget.prototype.angular = function (_event, _args) {
      return _this2.handleTemplateEvents(_event, _args);
    };
    kendo.mobile.ui.Widget.prototype.angular = function (_event, _args) {
      return _this2.handleTemplateEvents(_event, _args);
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

var Grid = (function () {
  var _instanceInitializers3 = {};

  _createDecoratedClass(Grid, [{
    key: 'selectable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'filterable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
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
    key: 'page',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return 1;
    },
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
    key: 'autoBind',
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
    key: 'reorderable',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return true;
    },
    enumerable: true
  }, {
    key: 'editable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'sort',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'group',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'dataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'scrollable',
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
  }], null, _instanceInitializers3);

  function Grid(element, templateCompiler, targetInstruction) {
    _classCallCheck(this, _Grid);

    this.columns = null;

    _defineDecoratedPropertyDescriptor(this, 'selectable', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'filterable', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'pageable', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'sortable', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'pageSize', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'page', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'selectedItem', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'selectedItems', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'autoBind', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'resizable', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'reorderable', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'editable', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'sort', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'group', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'dataSource', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'scrollable', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'groupable', _instanceInitializers3);

    this.element = element;
    this.templateCompiler = templateCompiler;
    this.columns = targetInstruction.behaviorInstructions[0].kendoGridColumns;
  }

  Grid.prototype.bind = function bind(ctx) {
    this.templateCompiler.initialize(ctx);

    var target = isInitFromTable(this.element) ? this.element.children[0] : this.element;

    this._component = $(target).kendoGrid(this.getOptions()).data('kendoGrid');
  };

  Grid.prototype.detached = function detached() {
    if (this._component) {
      this._component.destroy();
    }
  };

  Grid.prototype.getOptions = function getOptions() {
    var options = pruneOptions({
      animation: this.animation,
      dataSource: this.dataSource,
      dataTextField: this.dataTextField,
      columns: this.columns,
      delay: this.delay,
      enable: this.enable,
      filter: this.filter,
      filterable: this.filterable,
      fixedGroupTemplate: this.fixedGroupTemplate,
      groupTemplate: this.groupTemplate,
      height: this.height,
      pageable: this.pageable,
      scrollable: this.scrollable,
      highlightFirst: this.highlightFirst,
      ignoreCase: this.ignoreCase,
      minLength: this.minLength,
      placeholder: this.placeholder,
      popup: this.popup,
      separator: this.separator,
      suggest: this.suggest,
      sortable: this.sortable,
      groupable: this.groupable,
      headerTemplate: this.headerTemplate,
      template: this.template,
      valuePrimitive: this.valuePrimitive,
      virtual: this.virtual
    });

    return Object.assign({}, this.options, options);
  };

  Grid.prototype.enableChanged = function enableChanged(newValue) {
    if (this._component) {
      this._component.enable(newValue);
    }
  };

  var _Grid = Grid;
  Grid = _aureliaFramework.inject(Element, TemplateCompiler, _aureliaFramework.TargetInstruction)(Grid) || Grid;
  Grid = _aureliaFramework.processContent(function (compiler, resources, element, instruction) {
    var initFromTable = isInitFromTable(element);
    if (!initFromTable) {
      parseUserTemplate(element, resources, instruction);
    }
    return initFromTable;
  })(Grid) || Grid;
  Grid = _aureliaFramework.customElement('au-kendo-grid')(Grid) || Grid;
  return Grid;
})();

exports.Grid = Grid;

function parseUserTemplate(element, resources, instruction) {
  var columns = Array.prototype.slice.call(element.querySelectorAll('au-col'));
  var colSpecs = columns.map(function (column) {
    var obj = {};

    for (var i = column.attributes.length - 1; i >= 0; i--) {
      var attr = column.attributes.item(i);
      obj[attr.name] = attr.value;
    }

    parseCellTemplate(column, obj);

    return obj;
  });

  element.innerHTML = '';

  instruction.kendoGridColumns = colSpecs;
}

function parseCellTemplate(element, spec) {
  if (element.childNodes.length > 0) {
    spec.template = element.innerHTML;
  }
}

function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}

var Menu = (function () {
  var _instanceInitializers4 = {};

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
  }], null, _instanceInitializers4);

  function Menu(element) {
    _classCallCheck(this, _Menu);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'dataSource', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'closeOnClick', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'animation', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'direction', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'hoverDelay', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'orientation', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'popupCollision', _instanceInitializers4);

    this.element = element;
    this.options = {};
  }

  Menu.prototype.bind = function bind() {
    var target = undefined;
    var ul = $(this.element).find('ul');
    if (ul.has()) {
      target = $(this.element).find('ul').first();
    } else {
      target = $(this.element).appendChild('<ul></ul>');
    }

    this._component = target.kendoMenu(this.getOptions()).data('kendoMenu');
  };

  Menu.prototype.detached = function detached() {
    if (this._component) {
      this._component.destroy();
    }
  };

  Menu.prototype.getOptions = function getOptions() {
    var _this3 = this;

    var options = pruneOptions({
      dataSource: this.dataSource,
      closeOnClick: this.closeOnClick,
      animation: this.animation,
      direction: this.direction,
      hoverDelay: this.hoverDelay,
      orientation: this.orientation,
      popupCollision: this.popupCollision,
      close: function close(e) {
        return fireEvent(_this3.element, 'close', e);
      },
      open: function open(e) {
        return fireEvent(_this3.element, 'open', e);
      },
      activate: function activate(e) {
        return fireEvent(_this3.element, 'activate', e);
      },
      deactivate: function deactivate(e) {
        return fireEvent(_this3.element, 'deactivate', e);
      },
      select: function select(e) {
        return fireEvent(_this3.element, 'select', e);
      }
    });

    return Object.assign({}, this.options, options);
  };

  var _Menu = Menu;
  Menu = _aureliaFramework.inject(Element)(Menu) || Menu;
  Menu = _aureliaFramework.customElement('au-kendo-menu')(Menu) || Menu;
  return Menu;
})();

exports.Menu = Menu;

var AuScheduler = (function () {
  var _instanceInitializers5 = {};

  _createDecoratedClass(AuScheduler, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers5);

  function AuScheduler(element) {
    _classCallCheck(this, _AuScheduler);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers5);

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
    var options = pruneOptions({});

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
    this._component = $(this.element).kendoTabStrip(this.getOptions()).data('kendoTabStrip');
  };

  TabStrip.prototype.detached = function detached() {
    if (this._component) {
      this._component.destroy();
    }
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
    if (this._component) {
      this._component.enable(newValue);
    }
  };

  var _TabStrip = TabStrip;
  TabStrip = _aureliaFramework.inject(Element)(TabStrip) || TabStrip;
  TabStrip = _aureliaFramework.customAttribute('au-kendo-tabstrip')(TabStrip) || TabStrip;
  return TabStrip;
})();

exports.TabStrip = TabStrip;

var AuToolbar = (function () {
  var _instanceInitializers7 = {};

  _createDecoratedClass(AuToolbar, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers7);

  function AuToolbar(element) {
    _classCallCheck(this, _AuToolbar);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers7);

    this.element = element;
    this.options = {};
  }

  AuToolbar.prototype.bind = function bind() {};

  AuToolbar.prototype.detached = function detached() {
    if (this._component) {
      this._component.destroy();
    }
  };

  AuToolbar.prototype.getOptions = function getOptions() {
    var options = pruneOptions({});

    return Object.assign({}, this.options, options);
  };

  AuToolbar.prototype.enableChanged = function enableChanged(newValue) {
    if (this._component) {
      this._component.enable(newValue);
    }
  };

  var _AuToolbar = AuToolbar;
  AuToolbar = _aureliaFramework.inject(Element)(AuToolbar) || AuToolbar;
  return AuToolbar;
})();

exports.AuToolbar = AuToolbar;