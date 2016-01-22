'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

exports.configure = configure;
exports.generateBindables = generateBindables;
exports.fireEvent = fireEvent;
exports.fireKendoEvent = fireKendoEvent;
exports.pruneOptions = pruneOptions;
exports.addHyphenAndLower = addHyphenAndLower;
exports._hyphenate = _hyphenate;
exports._unhyphenate = _unhyphenate;
exports.getBindablePropertyName = getBindablePropertyName;
exports.getEventsFromAttributes = getEventsFromAttributes;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaLogging = require('aurelia-logging');

var LogManager = _interopRequireWildcard(_aureliaLogging);

require('jquery');

require('kendo-ui/js/kendo.autocomplete.min');

require('kendo-ui/js/kendo.virtuallist.min');

require('kendo-ui/js/kendo.button.min');

require('kendo-ui/js/kendo.dataviz.chart.min');

require('kendo-ui/js/kendo.dataviz.chart.polar.min');

require('kendo-ui/js/kendo.dataviz.chart.funnel.min');

require('kendo-ui/js/kendo.dataviz.sparkline.min');

require('kendo-ui/js/kendo.dataviz.stock.min');

require('kendo-ui/js/kendo.dataviz.treemap.min');

require('kendo-ui/js/kendo.colorpicker.min');

require('kendo-ui/js/kendo.datepicker.min');

require('kendo-ui/js/kendo.dropdownlist.min');

require('kendo-ui/js/kendo.data.signalr.min');

require('kendo-ui/js/kendo.filtercell.min');

require('kendo-ui/js/kendo.grid.min');

require('kendo-ui/js/kendo.menu.min');

require('kendo-ui/js/kendo.numerictextbox.min');

require('kendo-ui/js/kendo.pdf.min');

require('kendo-ui/js/jszip.min');

require('kendo-ui/js/kendo.progressbar.min');

require('kendo-ui/js/kendo.slider.min');

require('kendo-ui/js/kendo.tabstrip.min');

require('kendo-ui/js/kendo.treeview.min');

var _aureliaFramework = require('aurelia-framework');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaMetadata = require('aurelia-metadata');

var _aureliaBinding = require('aurelia-binding');

var KendoConfigBuilder = (function () {
  function KendoConfigBuilder() {
    _classCallCheck(this, KendoConfigBuilder);

    this.resources = [];
    this.useGlobalResources = true;
  }

  KendoConfigBuilder.prototype.core = function core() {
    this.kendoButton().kendoTabStrip().kendoProgressBar().kendoSlider().kendoColorPicker().kendoDropDownList().kendoDatePicker().kendoNumericTextBox();
    return this;
  };

  KendoConfigBuilder.prototype.pro = function pro() {
    this.core().kendoGrid().kendoAutoComplete().kendoChart().kendoTreeView();
    return this;
  };

  KendoConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
    this.useGlobalResources = false;
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

  KendoConfigBuilder.prototype.kendoChart = function kendoChart() {
    this.resources.push('chart/chart');
    this.resources.push('chart/sparkline');
    this.resources.push('chart/stock');
    this.resources.push('chart/treemap');
    return this;
  };

  KendoConfigBuilder.prototype.kendoProgressBar = function kendoProgressBar() {
    this.resources.push('progressbar/progressbar');
    return this;
  };

  KendoConfigBuilder.prototype.kendoSlider = function kendoSlider() {
    this.resources.push('slider/slider');
    return this;
  };

  KendoConfigBuilder.prototype.kendoColorPicker = function kendoColorPicker() {
    this.resources.push('colorpicker/colorpicker');
    return this;
  };

  KendoConfigBuilder.prototype.kendoTreeView = function kendoTreeView() {
    this.resources.push('treeview/treeview');
    return this;
  };

  KendoConfigBuilder.prototype.kendoDatePicker = function kendoDatePicker() {
    this.resources.push('datepicker/datepicker');
    return this;
  };

  KendoConfigBuilder.prototype.kendoNumericTextBox = function kendoNumericTextBox() {
    this.resources.push('numerictextbox/numerictextbox');
    return this;
  };

  return KendoConfigBuilder;
})();

exports.KendoConfigBuilder = KendoConfigBuilder;

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

  if (builder.useGlobalResources) {
    aurelia.globalResources(resources);
  }
}

var AutoComplete = (function () {
  var _instanceInitializers = {};

  _createDecoratedClass(AutoComplete, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers);

  function AutoComplete(element, widgetBase) {
    _classCallCheck(this, _AutoComplete);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoAutoComplete').linkViewModel(this).setDefaultBindableValues();
  }

  AutoComplete.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  AutoComplete.prototype.recreate = function recreate() {
    var _this2 = this;

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });

    this.kWidget.bind('change', function (event) {
      _this2.kValue = event.sender.value();

      fireEvent(_this2.element, 'input');
    });

    this.kWidget.bind('select', function (event) {
      _this2.kValue = event.sender.value();

      fireEvent(_this2.element, 'input');
    });
  };

  AutoComplete.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _AutoComplete = AutoComplete;
  AutoComplete = _aureliaFramework.inject(Element, WidgetBase)(AutoComplete) || AutoComplete;
  AutoComplete = generateBindables('kendoAutoComplete')(AutoComplete) || AutoComplete;
  AutoComplete = _aureliaFramework.customAttribute('k-autocomplete')(AutoComplete) || AutoComplete;
  return AutoComplete;
})();

exports.AutoComplete = AutoComplete;

var Button = (function () {
  var _instanceInitializers2 = {};

  _createDecoratedClass(Button, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers2);

  function Button(element, widgetBase) {
    _classCallCheck(this, _Button);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers2);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoButton').linkViewModel(this).setDefaultBindableValues();
  }

  Button.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  Button.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Button.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Button = Button;
  Button = _aureliaFramework.inject(Element, WidgetBase)(Button) || Button;
  Button = generateBindables('kendoButton')(Button) || Button;
  Button = _aureliaFramework.customAttribute('k-button')(Button) || Button;
  return Button;
})();

exports.Button = Button;

var Chart = (function () {
  var _instanceInitializers3 = {};

  _createDecoratedClass(Chart, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers3);

  function Chart(element, widgetBase) {
    _classCallCheck(this, _Chart);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers3);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoChart').linkViewModel(this).setDefaultBindableValues();
  }

  Chart.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Chart.prototype.attached = function attached() {
    this.recreate();
  };

  Chart.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Chart.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Chart = Chart;
  Chart = _aureliaFramework.inject(Element, WidgetBase)(Chart) || Chart;
  Chart = generateBindables('kendoChart')(Chart) || Chart;
  Chart = _aureliaFramework.customElement('k-chart')(Chart) || Chart;
  return Chart;
})();

exports.Chart = Chart;

var Sparkline = (function () {
  var _instanceInitializers4 = {};

  _createDecoratedClass(Sparkline, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers4);

  function Sparkline(element, widgetBase) {
    _classCallCheck(this, _Sparkline);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers4);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoSparkline').linkViewModel(this).setDefaultBindableValues();
  }

  Sparkline.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Sparkline.prototype.attached = function attached() {
    this.recreate();
  };

  Sparkline.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Sparkline.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Sparkline = Sparkline;
  Sparkline = _aureliaFramework.inject(Element, WidgetBase)(Sparkline) || Sparkline;
  Sparkline = generateBindables('kendoSparkline')(Sparkline) || Sparkline;
  Sparkline = _aureliaFramework.customElement('k-sparkline')(Sparkline) || Sparkline;
  return Sparkline;
})();

exports.Sparkline = Sparkline;

var Stock = (function () {
  var _instanceInitializers5 = {};

  _createDecoratedClass(Stock, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers5);

  function Stock(element, widgetBase) {
    _classCallCheck(this, _Stock);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers5);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoStockChart').linkViewModel(this).setDefaultBindableValues();
  }

  Stock.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Stock.prototype.attached = function attached() {
    this.recreate();
  };

  Stock.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  Stock.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Stock = Stock;
  Stock = _aureliaFramework.inject(Element, WidgetBase)(Stock) || Stock;
  Stock = generateBindables('kendoStockChart')(Stock) || Stock;
  Stock = _aureliaFramework.customElement('k-stock')(Stock) || Stock;
  return Stock;
})();

exports.Stock = Stock;

var TreeMap = (function () {
  var _instanceInitializers6 = {};

  _createDecoratedClass(TreeMap, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers6);

  function TreeMap(element, widgetBase) {
    _classCallCheck(this, _TreeMap);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers6);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoTreeMap').linkViewModel(this).setDefaultBindableValues();
  }

  TreeMap.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  TreeMap.prototype.attached = function attached() {
    this.recreate();
  };

  TreeMap.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  TreeMap.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _TreeMap = TreeMap;
  TreeMap = _aureliaFramework.inject(Element, WidgetBase)(TreeMap) || TreeMap;
  TreeMap = generateBindables('kendoTreeMap')(TreeMap) || TreeMap;
  TreeMap = _aureliaFramework.customElement('k-treemap')(TreeMap) || TreeMap;
  return TreeMap;
})();

exports.TreeMap = TreeMap;

var ColorPicker = (function () {
  var _instanceInitializers7 = {};

  _createDecoratedClass(ColorPicker, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers7);

  function ColorPicker(element, widgetBase) {
    _classCallCheck(this, _ColorPicker);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers7);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoColorPicker').linkViewModel(this).setDefaultBindableValues();
  }

  ColorPicker.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  ColorPicker.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  ColorPicker.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _ColorPicker = ColorPicker;
  ColorPicker = _aureliaFramework.inject(Element, WidgetBase)(ColorPicker) || ColorPicker;
  ColorPicker = generateBindables('kendoColorPicker')(ColorPicker) || ColorPicker;
  ColorPicker = _aureliaFramework.customAttribute('k-color-picker')(ColorPicker) || ColorPicker;
  return ColorPicker;
})();

exports.ColorPicker = ColorPicker;
var constants = {
  eventPrefix: 'k-on-',
  bindablePrefix: 'k-'
};

exports.constants = constants;

function generateBindables(controlName) {
  return function (target, key, descriptor) {
    var options = jQuery.fn[controlName].widget.prototype.options;

    var behaviorResource = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, _aureliaTemplating.HtmlBehaviorResource, target);
    var optionKeys = Object.keys(options);
    optionKeys.push('dataSource');
    optionKeys.push('widget');

    for (var _iterator = optionKeys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var option = _ref;

      var nameOrConfigOrTarget = {
        name: getBindablePropertyName(option)
      };

      if (option === 'widget') {
        nameOrConfigOrTarget.defaultBindingMode = _aureliaBinding.bindingMode.twoWay;
      }

      var prop = new _aureliaTemplating.BindableProperty(nameOrConfigOrTarget);
      prop.registerWith(target, behaviorResource, descriptor);
    }
  };
}

function fireEvent(element, name) {
  var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var event = new CustomEvent(name, {
    detail: data,
    bubbles: true
  });
  element.dispatchEvent(event);

  return event;
}

function fireKendoEvent(element, name) {
  var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return fireEvent(element, '' + constants.eventPrefix + name, data);
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

    this.isInitialized = false;

    this.templatingEngine = templatingEngine;
  }

  TemplateCompiler.prototype.initialize = function initialize() {
    if (this.isInitialized) return;

    var _this = this;
    kendo.ui.Widget.prototype.angular = function (_event, _args) {
      _this.handleTemplateEvents(this, _event, _args);
    };
    kendo.mobile.ui.Widget.prototype.angular = function (_event, _args) {
      _this.handleTemplateEvents(this, _event, _args);
    };

    this.isInitialized = true;
  };

  TemplateCompiler.prototype.handleTemplateEvents = function handleTemplateEvents(widget, _event, _args) {
    if (_event !== 'compile' && _event !== 'cleanup') return;

    var $parent = widget._$parent || (widget.options._$parent ? widget.options._$parent[0] : undefined);

    if (!$parent) return;

    var args = _args();
    var elements = args.elements;
    var data = args.data;

    switch (_event) {
      case 'compile':
        this.compile($parent, elements, data);
        break;

      case 'cleanup':
        this.cleanup(elements);
        break;

      default:
        break;
    }
  };

  TemplateCompiler.prototype.compile = function compile($parent, elements, data) {
    var _this3 = this;

    var _loop = function (i) {
      var element = elements[i];
      var ctx = undefined;

      if (data && data[i]) {
        var _data = data[i];
        ctx = _data.dataItem;
      }

      if (element instanceof jQuery) {
        element.each(function (index, elem) {
          return _this3.enhanceView($parent, elem, ctx);
        });
      } else {
        _this3.enhanceView($parent, element, ctx);
      }
    };

    for (var i = 0; i < elements.length; i++) {
      _loop(i);
    }
  };

  TemplateCompiler.prototype.enhanceView = function enhanceView($parent, element, ctx) {
    var view = this.templatingEngine.enhance(element);

    view.bind(ctx, $parent);
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

var capitalMatcher = /([A-Z])/g;

function addHyphenAndLower(char) {
  return '-' + char.toLowerCase();
}

function _hyphenate(name) {
  return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
}

function _unhyphenate(name) {
  return name.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}

function getBindablePropertyName(propertyName) {
  var name = '' + constants.bindablePrefix + propertyName;

  return _unhyphenate(name);
}

function getEventsFromAttributes(element) {
  var attributes = Array.prototype.slice.call(element.attributes);
  var events = [];

  for (var _iterator2 = attributes, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray2) {
      if (_i2 >= _iterator2.length) break;
      _ref2 = _iterator2[_i2++];
    } else {
      _i2 = _iterator2.next();
      if (_i2.done) break;
      _ref2 = _i2.value;
    }

    var attribute = _ref2;

    var attributeName = attribute.name;
    if (!attributeName.startsWith(constants.eventPrefix)) continue;

    var hyphenatedEvent = attributeName.split(constants.eventPrefix)[1];

    var withoutTriggerDelegate = hyphenatedEvent.split('.')[0];

    var camelCased = _unhyphenate(withoutTriggerDelegate);

    events.push(camelCased);
  }

  return events;
}

var WidgetBase = (function () {
  function WidgetBase(taskQueue, templateCompiler) {
    _classCallCheck(this, _WidgetBase);

    this.taskQueue = taskQueue;
    templateCompiler.initialize();
  }

  WidgetBase.prototype.control = function control(controlName) {
    if (!controlName || !jQuery.fn[controlName]) {
      throw new Error('The name of control ' + controlName + ' is invalid or not set');
    }

    this.controlName = controlName;

    var ctor = jQuery.fn[this.controlName];
    this.kendoOptions = ctor.widget.prototype.options;
    this.kendoEvents = ctor.widget.prototype.events;

    return this;
  };

  WidgetBase.prototype.linkViewModel = function linkViewModel(viewModel) {
    if (!viewModel) {
      throw new Error('viewModel is not set');
    }

    this.viewModel = viewModel;

    return this;
  };

  WidgetBase.prototype.createWidget = function createWidget(options) {
    if (!options) {
      throw new Error('the createWidget() function needs to be called with an object');
    }

    if (!options.element) {
      throw new Error('element is not set');
    }

    if (!options.parentCtx) {
      throw new Error('parentCtx is not set');
    }

    var allOptions = this._getOptions(options.element);

    if (options.beforeInitialize) {
      options.beforeInitialize(allOptions);
    }

    Object.assign(allOptions, { _$parent: [options.parentCtx] });

    var widget = jQuery(options.element)[this.controlName](allOptions).data(this.controlName);

    widget._$parent = options.parentCtx;

    if (options.afterInitialize) {
      options.afterInitialize();
    }

    return widget;
  };

  WidgetBase.prototype._getOptions = function _getOptions(element) {
    var options = this.getOptionsFromBindables();
    var eventOptions = this.getEventOptions(element);

    return Object.assign({}, this.viewModel.options, pruneOptions(options), eventOptions);
  };

  WidgetBase.prototype.getOptionsFromBindables = function getOptionsFromBindables() {
    var props = this.kendoOptions;
    var options = {};

    for (var _iterator3 = Object.keys(props), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref3 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref3 = _i3.value;
      }

      var prop = _ref3;

      options[prop] = this.viewModel[getBindablePropertyName(prop)];
    }

    if (this.viewModel.kDataSource) {
      options.dataSource = this.viewModel.kDataSource;
    }

    return options;
  };

  WidgetBase.prototype.setDefaultBindableValues = function setDefaultBindableValues() {
    if (!this.viewModel) {
      throw new Error('viewModel is not set');
    }

    var props = this.kendoOptions;

    for (var _iterator4 = Object.keys(props), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray4) {
        if (_i4 >= _iterator4.length) break;
        _ref4 = _iterator4[_i4++];
      } else {
        _i4 = _iterator4.next();
        if (_i4.done) break;
        _ref4 = _i4.value;
      }

      var prop = _ref4;

      this.viewModel[getBindablePropertyName(prop)] = props[prop];
    }

    return this;
  };

  WidgetBase.prototype.getEventOptions = function getEventOptions(element) {
    var _this4 = this;

    var options = {};
    var allowedEvents = this.kendoEvents;

    var events = getEventsFromAttributes(element);

    events.forEach(function (event) {
      if (!allowedEvents.includes(event)) {
        throw new Error(event + ' is not an event on the ' + _this4.controlName + ' control');
      }

      options[event] = function (e) {
        _this4.taskQueue.queueMicroTask(function () {
          fireKendoEvent(element, _hyphenate(event), e);
        });
      };
    });

    return options;
  };

  WidgetBase.prototype.destroy = function destroy(widget) {
    widget.destroy();
  };

  var _WidgetBase = WidgetBase;
  WidgetBase = _aureliaFramework.inject(_aureliaFramework.TaskQueue, TemplateCompiler)(WidgetBase) || WidgetBase;
  WidgetBase = _aureliaFramework.transient()(WidgetBase) || WidgetBase;
  return WidgetBase;
})();

exports.WidgetBase = WidgetBase;

var DatePicker = (function () {
  var _instanceInitializers8 = {};

  _createDecoratedClass(DatePicker, [{
    key: 'kValue',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'kDisableDates',
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
  }], null, _instanceInitializers8);

  function DatePicker(element, widgetBase) {
    _classCallCheck(this, _DatePicker);

    _defineDecoratedPropertyDescriptor(this, 'kValue', _instanceInitializers8);

    _defineDecoratedPropertyDescriptor(this, 'kDisableDates', _instanceInitializers8);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers8);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDatePicker').linkViewModel(this).setDefaultBindableValues();
  }

  DatePicker.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  DatePicker.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  DatePicker.prototype._beforeInitialize = function _beforeInitialize(options) {
    return Object.assign({}, options, { disableDates: this.kDisableDates });
  };

  DatePicker.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _DatePicker = DatePicker;
  DatePicker = _aureliaFramework.inject(Element, WidgetBase)(DatePicker) || DatePicker;
  DatePicker = generateBindables('kendoDatePicker')(DatePicker) || DatePicker;
  DatePicker = _aureliaFramework.customAttribute('k-datepicker')(DatePicker) || DatePicker;
  return DatePicker;
})();

exports.DatePicker = DatePicker;

var DropDownList = (function () {
  var _instanceInitializers9 = {};

  _createDecoratedClass(DropDownList, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }, {
    key: 'kValue',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers9);

  function DropDownList(element, widgetBase) {
    _classCallCheck(this, _DropDownList);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers9);

    _defineDecoratedPropertyDescriptor(this, 'kValue', _instanceInitializers9);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoDropDownList').linkViewModel(this).setDefaultBindableValues();
  }

  DropDownList.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  DropDownList.prototype.recreate = function recreate() {
    var _this5 = this;

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });

    this.kWidget.bind('change', function (event) {
      _this5.kValue = event.sender.value();
      _this5.kText = event.sender.text();

      fireEvent(_this5.element, 'input');
    });

    this.kWidget.bind('select', function (event) {
      _this5.kValue = event.sender.value();
      _this5.kText = event.sender.text();

      fireEvent(_this5.element, 'input');
    });

    this.kWidget.trigger('change');
  };

  DropDownList.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _DropDownList = DropDownList;
  DropDownList = _aureliaFramework.inject(Element, WidgetBase)(DropDownList) || DropDownList;
  DropDownList = generateBindables('kendoDropDownList')(DropDownList) || DropDownList;
  DropDownList = _aureliaFramework.customAttribute('k-drop-down-list')(DropDownList) || DropDownList;
  return DropDownList;
})();

exports.DropDownList = DropDownList;

var AuCol = (function () {
  var _instanceInitializers10 = {};

  _createDecoratedClass(AuCol, [{
    key: 'aggregates',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'attributes',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'columns',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'command',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'editor',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'encoded',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'field',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'filterable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'footerTemplate',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'format',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return '';
    },
    enumerable: true
  }, {
    key: 'groupable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'groupFooterTemplate',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'groupHeaderTemplate',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'headerAttributes',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'headerTemplate',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'hidden',
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
  }, {
    key: 'menu',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'minScreenWidth',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'sortable',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'title',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'values',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'width',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'template',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers10);

  function AuCol(targetInstruction) {
    _classCallCheck(this, _AuCol);

    _defineDecoratedPropertyDescriptor(this, 'aggregates', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'attributes', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'command', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'editor', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'encoded', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'field', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'filterable', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'footerTemplate', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'format', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'groupable', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'groupFooterTemplate', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'groupHeaderTemplate', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'headerAttributes', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'headerTemplate', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'hidden', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'lockable', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'locked', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'menu', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'minScreenWidth', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'sortable', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'title', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'values', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'width', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'template', _instanceInitializers10);

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
  var _instanceInitializers11 = {};

  _createDecoratedClass(Grid, [{
    key: 'columns',
    decorators: [_aureliaFramework.children('au-col')],
    initializer: null,
    enumerable: true
  }, {
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers11);

  function Grid(element, widgetBase) {
    _classCallCheck(this, _Grid);

    _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers11);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers11);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoGrid').linkViewModel(this).setDefaultBindableValues();
  }

  Grid.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Grid.prototype.attached = function attached() {
    this.recreate();
  };

  Grid.prototype.recreate = function recreate() {
    var _this6 = this;

    var element = isInitFromTable(this.element) ? this.element.children[0] : this.element;

    this.kWidget = this.widgetBase.createWidget({
      element: element,
      parentCtx: this.$parent,
      beforeInitialize: function beforeInitialize(o) {
        return _this6._beforeInitialize(o);
      }
    });
  };

  Grid.prototype._beforeInitialize = function _beforeInitialize(options) {
    if (this.columns && this.columns.length > 0) {
      options.columns = this.columns;
    }
  };

  Grid.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Grid = Grid;
  Grid = _aureliaFramework.inject(Element, WidgetBase)(Grid) || Grid;
  Grid = generateBindables('kendoGrid')(Grid) || Grid;
  Grid = _aureliaFramework.customElement('k-grid')(Grid) || Grid;
  return Grid;
})();

exports.Grid = Grid;

function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}

var Menu = (function () {
  var _instanceInitializers12 = {};

  _createDecoratedClass(Menu, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers12);

  function Menu(element, widgetBase) {
    _classCallCheck(this, _Menu);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers12);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoMenu').linkViewModel(this).setDefaultBindableValues();
  }

  Menu.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  Menu.prototype.recreate = function recreate() {
    var element = undefined;
    var ul = $(this.element).find('ul');
    if (ul.has()) {
      element = $(this.element).find('ul').first();
    } else {
      element = $(this.element).appendChild('<ul></ul>');
    }

    this.kWidget = this.widgetBase.createWidget({
      element: element,
      parentCtx: this.$parent
    });
  };

  Menu.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Menu = Menu;
  Menu = _aureliaFramework.inject(Element, WidgetBase)(Menu) || Menu;
  Menu = generateBindables('kendoMenu')(Menu) || Menu;
  Menu = _aureliaFramework.customElement('k-menu')(Menu) || Menu;
  return Menu;
})();

exports.Menu = Menu;

var NumericTextBox = (function () {
  var _instanceInitializers13 = {};

  _createDecoratedClass(NumericTextBox, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers13);

  function NumericTextBox(element, widgetBase) {
    _classCallCheck(this, _NumericTextBox);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers13);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoNumericTextBox').linkViewModel(this).setDefaultBindableValues();
  }

  NumericTextBox.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  NumericTextBox.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  NumericTextBox.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _NumericTextBox = NumericTextBox;
  NumericTextBox = _aureliaFramework.inject(Element, WidgetBase)(NumericTextBox) || NumericTextBox;
  NumericTextBox = generateBindables('kendoNumericTextBox')(NumericTextBox) || NumericTextBox;
  NumericTextBox = _aureliaFramework.customAttribute('k-numerictextbox')(NumericTextBox) || NumericTextBox;
  return NumericTextBox;
})();

exports.NumericTextBox = NumericTextBox;

var PDF = function PDF() {
  _classCallCheck(this, PDF);
};

exports.PDF = PDF;

var ProgressBar = (function () {
  var _instanceInitializers14 = {};

  _createDecoratedClass(ProgressBar, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers14);

  function ProgressBar(element, widgetBase) {
    _classCallCheck(this, _ProgressBar);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers14);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoProgressBar').linkViewModel(this).setDefaultBindableValues();
  }

  ProgressBar.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  ProgressBar.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  ProgressBar.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _ProgressBar = ProgressBar;
  ProgressBar = _aureliaFramework.inject(Element, WidgetBase)(ProgressBar) || ProgressBar;
  ProgressBar = generateBindables('kendoProgressBar')(ProgressBar) || ProgressBar;
  ProgressBar = _aureliaFramework.customAttribute('k-progress-bar')(ProgressBar) || ProgressBar;
  return ProgressBar;
})();

exports.ProgressBar = ProgressBar;

var AuScheduler = function AuScheduler() {
  _classCallCheck(this, AuScheduler);
};

exports.AuScheduler = AuScheduler;

var Slider = (function () {
  var _instanceInitializers15 = {};

  _createDecoratedClass(Slider, [{
    key: 'kValue',
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
  }], null, _instanceInitializers15);

  function Slider(element, widgetBase) {
    _classCallCheck(this, _Slider);

    _defineDecoratedPropertyDescriptor(this, 'kValue', _instanceInitializers15);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers15);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoSlider').linkViewModel(this).setDefaultBindableValues();
  }

  Slider.prototype.bind = function bind(ctx) {
    this.$parent = ctx;
  };

  Slider.prototype.attached = function attached() {
    this.recreate();
  };

  Slider.prototype.recreate = function recreate() {
    var _this7 = this;

    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent,
      beforeInitialize: function beforeInitialize(o) {
        return _this7._beforeInitialize(o);
      }
    });
  };

  Slider.prototype._beforeInitialize = function _beforeInitialize(options) {
    if (!options.value && this.kValue) {
      options.value = this.kValue;
    }
  };

  Slider.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _Slider = Slider;
  Slider = _aureliaFramework.inject(Element, WidgetBase)(Slider) || Slider;
  Slider = generateBindables('kendoSlider')(Slider) || Slider;
  Slider = _aureliaFramework.customAttribute('k-slider')(Slider) || Slider;
  return Slider;
})();

exports.Slider = Slider;

var TabStrip = (function () {
  var _instanceInitializers16 = {};

  _createDecoratedClass(TabStrip, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers16);

  function TabStrip(element, widgetBase) {
    _classCallCheck(this, _TabStrip);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers16);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoTabStrip').linkViewModel(this).setDefaultBindableValues(this);
  }

  TabStrip.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  TabStrip.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  TabStrip.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _TabStrip = TabStrip;
  TabStrip = _aureliaFramework.inject(Element, WidgetBase)(TabStrip) || TabStrip;
  TabStrip = generateBindables('kendoTabStrip')(TabStrip) || TabStrip;
  TabStrip = _aureliaFramework.customAttribute('k-tabstrip')(TabStrip) || TabStrip;
  return TabStrip;
})();

exports.TabStrip = TabStrip;

var AuToolbar = function AuToolbar() {
  _classCallCheck(this, AuToolbar);
};

exports.AuToolbar = AuToolbar;

var TreeView = (function () {
  var _instanceInitializers17 = {};

  _createDecoratedClass(TreeView, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers17);

  function TreeView(element, widgetBase) {
    _classCallCheck(this, _TreeView);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers17);

    this.element = element;
    this.widgetBase = widgetBase.control('kendoTreeView').linkViewModel(this).setDefaultBindableValues();

    this.kDataSource = undefined;
  }

  TreeView.prototype.bind = function bind(ctx) {
    this.$parent = ctx;

    this.recreate();
  };

  TreeView.prototype.recreate = function recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  };

  TreeView.prototype.detached = function detached() {
    this.widgetBase.destroy(this.kWidget);
  };

  var _TreeView = TreeView;
  TreeView = _aureliaFramework.inject(Element, WidgetBase)(TreeView) || TreeView;
  TreeView = generateBindables('kendoTreeView')(TreeView) || TreeView;
  TreeView = _aureliaFramework.customAttribute('k-treeview')(TreeView) || TreeView;
  return TreeView;
})();

exports.TreeView = TreeView;