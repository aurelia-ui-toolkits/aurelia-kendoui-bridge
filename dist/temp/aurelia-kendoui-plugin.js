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

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaLogging = require('aurelia-logging');

var LogManager = _interopRequireWildcard(_aureliaLogging);

require('kendo-ui/js/kendo.pdf.min');

require('kendo-ui/js/jszip.min');

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

require('kendo-ui/js/kendo.dropdownlist.min');

require('kendo-ui/js/kendo.grid.min');

require('kendo-ui/js/kendo.menu.min');

require('kendo-ui/js/kendo.progressbar.min');

require('kendo-ui/js/kendo.slider.min');

require('kendo-ui/js/kendo.tabstrip.min');

var _aureliaFramework = require('aurelia-framework');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaMetadata = require('aurelia-metadata');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

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
    this.kendoButton().kendoTabStrip().kendoProgressBar().kendoSlider().kendoDropDownList();
    return this;
  };

  KendoConfigBuilder.prototype.pro = function pro() {
    this.core().kendoGrid().kendoAutoComplete().kendoChart();
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

  return KendoConfigBuilder;
})();

var AutoComplete = (function (_WidgetBase) {
  var _instanceInitializers = {};

  _inherits(AutoComplete, _WidgetBase);

  _createDecoratedClass(AutoComplete, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }, {
    key: 'kDataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'value',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function AutoComplete(element, templateCompiler) {
    _classCallCheck(this, _AutoComplete);

    _WidgetBase.call(this, 'kendoAutoComplete', element);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

    this.templateCompiler = templateCompiler;
  }

  AutoComplete.prototype.bind = function bind(ctx) {
    this.templateCompiler.initialize(ctx);

    this._initialize();
  };

  AutoComplete.prototype.recreate = function recreate() {
    this._initialize();
  };

  AutoComplete.prototype._initialize = function _initialize() {
    var _this = this;

    _WidgetBase.prototype._initialize.call(this);

    this.widget.bind('change', function (event) {
      _this.value = event.sender.value();

      fireEvent(_this.element, 'input');
    });

    this.widget.bind('select', function (event) {
      _this.value = event.sender.value();

      fireEvent(_this.element, 'input');
    });
  };

  AutoComplete.prototype.enableChanged = function enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  AutoComplete.prototype.setValue = function setValue(newValue) {
    if (this.widget) {
      this.widget.value(newValue);
      this.widget.trigger('change');
    }
  };

  AutoComplete.prototype.getValue = function getValue(newValue) {
    if (this.widget) {
      return this.widget.value();
    }
  };

  AutoComplete.prototype.search = function search(value) {
    if (this.widget) {
      this.widget.search(value);
    }
  };

  var _AutoComplete = AutoComplete;
  AutoComplete = generateBindables('kendoAutoComplete')(AutoComplete) || AutoComplete;
  AutoComplete = _aureliaFramework.inject(Element, TemplateCompiler)(AutoComplete) || AutoComplete;
  AutoComplete = _aureliaFramework.customAttribute('k-autocomplete')(AutoComplete) || AutoComplete;
  return AutoComplete;
})(WidgetBase);

exports.AutoComplete = AutoComplete;

var Button = (function (_WidgetBase2) {
  var _instanceInitializers2 = {};

  _inherits(Button, _WidgetBase2);

  _createDecoratedClass(Button, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers2);

  function Button(element) {
    _classCallCheck(this, _Button);

    _WidgetBase2.call(this, 'kendoButton', element);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers2);
  }

  Button.prototype.bind = function bind() {
    this._initialize();
  };

  Button.prototype.recreate = function recreate() {
    this._initialize();
  };

  Button.prototype.kEnableChanged = function kEnableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  var _Button = Button;
  Button = _aureliaFramework.inject(Element)(Button) || Button;
  Button = generateBindables('kendoButton')(Button) || Button;
  Button = _aureliaFramework.customAttribute('k-button')(Button) || Button;
  return Button;
})(WidgetBase);

exports.Button = Button;

var Chart = (function (_WidgetBase3) {
  var _instanceInitializers3 = {};

  _inherits(Chart, _WidgetBase3);

  _createDecoratedClass(Chart, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }, {
    key: 'kDataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers3);

  function Chart(element) {
    _classCallCheck(this, _Chart);

    _WidgetBase3.call(this, 'kendoChart', element);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers3);

    _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers3);
  }

  Chart.prototype.attached = function attached() {
    this._initialize();
  };

  Chart.prototype.recreate = function recreate() {
    this._initialize();
  };

  Chart.prototype.exportImage = function exportImage(options) {
    if (this.widget) {
      return this.widget.exportImage(options);
    }
  };

  Chart.prototype.exportPDF = function exportPDF(options) {
    if (this.widget) {
      return this.widget.exportPDF(options);
    }
  };

  Chart.prototype.exportSVG = function exportSVG(options) {
    if (this.widget) {
      return this.widget.exportSVG(options);
    }
  };

  Chart.prototype.getAxis = function getAxis(name) {
    if (this.widget) {
      return this.widget.getAxis(name);
    }
  };

  Chart.prototype.redraw = function redraw() {
    if (this.widget) {
      return this.widget.redraw();
    }
  };

  Chart.prototype.refresh = function refresh() {
    if (this.widget) {
      return this.widget.refresh();
    }
  };

  Chart.prototype.resize = function resize() {
    if (this.widget) {
      return this.widget.resize();
    }
  };

  Chart.prototype.saveAsPDF = function saveAsPDF() {
    if (this.widget) {
      return this.widget.saveAsPDF();
    }
  };

  Chart.prototype.setDataSource = function setDataSource(dataSource) {
    if (this.widget) {
      return this.widget.setDataSource(dataSource);
    }
  };

  var _Chart = Chart;
  Chart = _aureliaFramework.inject(Element)(Chart) || Chart;
  Chart = generateBindables('kendoChart')(Chart) || Chart;
  Chart = _aureliaFramework.customElement('k-chart')(Chart) || Chart;
  return Chart;
})(WidgetBase);

exports.Chart = Chart;

var Sparkline = (function (_WidgetBase4) {
  var _instanceInitializers4 = {};

  _inherits(Sparkline, _WidgetBase4);

  _createDecoratedClass(Sparkline, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }, {
    key: 'kDataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers4);

  function Sparkline(element) {
    _classCallCheck(this, _Sparkline);

    _WidgetBase4.call(this, 'kendoSparkline', element);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers4);

    _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers4);
  }

  Sparkline.prototype.attached = function attached() {
    this._initialize();
  };

  Sparkline.prototype.recreate = function recreate() {
    this._initialize();
  };

  var _Sparkline = Sparkline;
  Sparkline = _aureliaFramework.inject(Element)(Sparkline) || Sparkline;
  Sparkline = generateBindables('kendoSparkline')(Sparkline) || Sparkline;
  Sparkline = _aureliaFramework.noView(Sparkline) || Sparkline;
  Sparkline = _aureliaFramework.customElement('k-sparkline')(Sparkline) || Sparkline;
  return Sparkline;
})(WidgetBase);

exports.Sparkline = Sparkline;

var Stock = (function (_WidgetBase5) {
  var _instanceInitializers5 = {};

  _inherits(Stock, _WidgetBase5);

  _createDecoratedClass(Stock, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }, {
    key: 'kDataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers5);

  function Stock(element) {
    _classCallCheck(this, _Stock);

    _WidgetBase5.call(this, 'kendoStockChart', element);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers5);

    _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers5);
  }

  Stock.prototype.attached = function attached() {
    this._initialize();
  };

  Stock.prototype.recreate = function recreate() {
    this._initialize();
  };

  var _Stock = Stock;
  Stock = _aureliaFramework.inject(Element)(Stock) || Stock;
  Stock = generateBindables('kendoStockChart')(Stock) || Stock;
  Stock = _aureliaFramework.customElement('k-stock')(Stock) || Stock;
  return Stock;
})(WidgetBase);

exports.Stock = Stock;

var TreeMap = (function (_WidgetBase6) {
  var _instanceInitializers6 = {};

  _inherits(TreeMap, _WidgetBase6);

  _createDecoratedClass(TreeMap, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }, {
    key: 'kDataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers6);

  function TreeMap(element) {
    _classCallCheck(this, _TreeMap);

    _WidgetBase6.call(this, 'kendoTreeMap', element);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers6);

    _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers6);
  }

  TreeMap.prototype.attached = function attached() {
    this._initialize();
  };

  TreeMap.prototype.recreate = function recreate() {
    this._initialize();
  };

  var _TreeMap = TreeMap;
  TreeMap = _aureliaFramework.inject(Element)(TreeMap) || TreeMap;
  TreeMap = generateBindables('kendoTreeMap')(TreeMap) || TreeMap;
  TreeMap = _aureliaFramework.customElement('k-treemap')(TreeMap) || TreeMap;
  return TreeMap;
})(WidgetBase);

exports.TreeMap = TreeMap;
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

      var prop = new _aureliaTemplating.BindableProperty(nameOrConfigOrTarget);
      prop.registerWith(target, behaviorResource, descriptor);
    }
  };
}

function fireEvent(element, name) {
  var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var event = new CustomEvent(name, { 'detail': data });
  element.dispatchEvent(event);
}

function fireKendoEvent(element, name) {
  var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  fireEvent(element, '' + constants.eventPrefix + name, data);
  return true;
}

var _events = require('./events');

_defaults(exports, _interopExportWildcard(_events, _defaults));

var _options = require('./options');

_defaults(exports, _interopExportWildcard(_options, _defaults));

var _templateCompiler = require('./template-compiler');

_defaults(exports, _interopExportWildcard(_templateCompiler, _defaults));

var _widgetBase = require('./widget-base');

_defaults(exports, _interopExportWildcard(_widgetBase, _defaults));

var _decorators = require('./decorators');

_defaults(exports, _interopExportWildcard(_decorators, _defaults));

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
          return _this3.enhanceView(elem, ctx);
        });
      } else {
        _this3.enhanceView(element, ctx);
      }
    };

    for (var i = 0; i < elements.length; i++) {
      _loop(i);
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
  function WidgetBase(controlName, element) {
    _classCallCheck(this, WidgetBase);

    var container = _aureliaDependencyInjection.Container.instance;
    this.taskQueue = container.get(_aureliaFramework.TaskQueue);

    this.element = element;

    this.target = this.element;

    this.controlName = controlName;

    this.setDefaultBindableValues();
  }

  WidgetBase.prototype._initialize = function _initialize() {
    var target = jQuery(this.target);

    var ctor = target[this.controlName];

    var options = this._getOptions(ctor);

    this.widget = ctor.call(target, options).data(this.controlName);

    this._initialized();
  };

  WidgetBase.prototype._initialized = function _initialized() {};

  WidgetBase.prototype._getOptions = function _getOptions(ctor) {
    var options = this.getOptionsFromBindables();
    var eventOptions = this.getEventOptions(ctor);

    return Object.assign({}, this.options, pruneOptions(options), eventOptions);
  };

  WidgetBase.prototype.getOptionsFromBindables = function getOptionsFromBindables() {
    var props = jQuery.fn[this.controlName].widget.prototype.options;
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

      options[prop] = this[getBindablePropertyName(prop)];
    }

    if (this.kDataSource) {
      options.dataSource = this.kDataSource;
    }

    return options;
  };

  WidgetBase.prototype.setDefaultBindableValues = function setDefaultBindableValues() {
    var props = jQuery.fn[this.controlName].widget.prototype.options;

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

      this[getBindablePropertyName(prop)] = props[prop];
    }
  };

  WidgetBase.prototype.getEventOptions = function getEventOptions(ctor) {
    var _this4 = this;

    var options = {};
    var allowedEvents = ctor.widget.prototype.events;

    var events = getEventsFromAttributes(this.element);

    events.forEach(function (event) {
      if (!allowedEvents.includes(event)) {
        throw new Error(event + ' is not an event on the ' + _this4.controlName + ' control');
      }

      options[event] = function (e) {
        _this4.taskQueue.queueMicroTask(function () {
          fireKendoEvent(_this4.target, _hyphenate(event), e);
        });
      };
    });

    return options;
  };

  WidgetBase.prototype.detached = function detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  };

  return WidgetBase;
})();

exports.WidgetBase = WidgetBase;

var DropDownList = (function (_WidgetBase7) {
  var _instanceInitializers7 = {};

  _inherits(DropDownList, _WidgetBase7);

  _createDecoratedClass(DropDownList, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }, {
    key: 'kDataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'kValue',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers7);

  function DropDownList(element, templateCompiler) {
    _classCallCheck(this, _DropDownList);

    _WidgetBase7.call(this, 'kendoDropDownList', element);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers7);

    _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers7);

    _defineDecoratedPropertyDescriptor(this, 'kValue', _instanceInitializers7);

    this.templateCompiler = templateCompiler;
  }

  DropDownList.prototype.bind = function bind(ctx) {
    this.templateCompiler.initialize(ctx);

    this._initialize();
  };

  DropDownList.prototype.recreate = function recreate() {
    this._initialize();
  };

  DropDownList.prototype._initialized = function _initialized() {
    var _this5 = this;

    this.widget.bind('change', function (event) {
      _this5.kValue = event.sender.value();
      _this5.kText = event.sender.text();

      fireEvent(_this5.element, 'input');
    });

    this.widget.bind('select', function (event) {
      _this5.kValue = event.sender.value();
      _this5.kText = event.sender.text();

      fireEvent(_this5.element, 'input');
    });

    this.widget.trigger('change');
  };

  DropDownList.prototype.enableChanged = function enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  DropDownList.prototype.valueChanged = function valueChanged(newValue) {
    if (this.widget) {
      this.widget.value(newValue);
      this.widget.trigger('change');
    }
  };

  DropDownList.prototype.select = function select(index) {
    if (this.widget) {
      this.widget.select(index);

      this.widget.trigger('change');
    }
  };

  DropDownList.prototype.search = function search(value) {
    if (this.widget) {
      this.widget.search(value);

      this.widget.trigger('change');
    }
  };

  var _DropDownList = DropDownList;
  DropDownList = generateBindables('kendoDropDownList')(DropDownList) || DropDownList;
  DropDownList = _aureliaFramework.inject(Element, TemplateCompiler)(DropDownList) || DropDownList;
  DropDownList = _aureliaFramework.customAttribute('k-drop-down-list')(DropDownList) || DropDownList;
  return DropDownList;
})(WidgetBase);

exports.DropDownList = DropDownList;

var AuCol = (function () {
  var _instanceInitializers8 = {};

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
    initializer: function initializer() {
      return '';
    },
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
  }], null, _instanceInitializers8);

  function AuCol(targetInstruction) {
    _classCallCheck(this, _AuCol);

    _defineDecoratedPropertyDescriptor(this, 'title', _instanceInitializers8);

    _defineDecoratedPropertyDescriptor(this, 'field', _instanceInitializers8);

    _defineDecoratedPropertyDescriptor(this, 'format', _instanceInitializers8);

    _defineDecoratedPropertyDescriptor(this, 'command', _instanceInitializers8);

    _defineDecoratedPropertyDescriptor(this, 'width', _instanceInitializers8);

    _defineDecoratedPropertyDescriptor(this, 'lockable', _instanceInitializers8);

    _defineDecoratedPropertyDescriptor(this, 'locked', _instanceInitializers8);

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

var Grid = (function (_WidgetBase8) {
  var _instanceInitializers9 = {};

  _inherits(Grid, _WidgetBase8);

  _createDecoratedClass(Grid, [{
    key: 'kColumns',
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
  }, {
    key: 'kDataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers9);

  function Grid(element, templateCompiler) {
    _classCallCheck(this, _Grid);

    _WidgetBase8.call(this, 'kendoGrid', element);

    _defineDecoratedPropertyDescriptor(this, 'kColumns', _instanceInitializers9);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers9);

    _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers9);

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
    this.target = isInitFromTable(this.element) ? this.element.children[0] : this.element;

    _WidgetBase8.prototype._initialize.call(this);
  };

  Grid.prototype.enableChanged = function enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  var _Grid = Grid;
  Grid = _aureliaFramework.inject(Element, TemplateCompiler)(Grid) || Grid;
  Grid = generateBindables('kendoGrid')(Grid) || Grid;
  Grid = _aureliaFramework.customElement('k-grid')(Grid) || Grid;
  return Grid;
})(WidgetBase);

exports.Grid = Grid;

function isInitFromTable(element) {
  return element.children.length > 0 && element.children[0].nodeName === 'TABLE';
}

var Menu = (function (_WidgetBase9) {
  var _instanceInitializers10 = {};

  _inherits(Menu, _WidgetBase9);

  _createDecoratedClass(Menu, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }, {
    key: 'kDataSource',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers10);

  function Menu(element) {
    _classCallCheck(this, _Menu);

    _WidgetBase9.call(this, 'kendoMenu', element);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers10);

    _defineDecoratedPropertyDescriptor(this, 'kDataSource', _instanceInitializers10);
  }

  Menu.prototype.bind = function bind() {
    this._initialize();
  };

  Menu.prototype.recreate = function recreate() {
    this._initialize();
  };

  Menu.prototype._initialize = function _initialize() {
    var ul = $(this.element).find('ul');
    if (ul.has()) {
      this.target = $(this.element).find('ul').first();
    } else {
      this.target = $(this.element).appendChild('<ul></ul>');
    }

    _WidgetBase9.prototype._initialize.call(this);
  };

  var _Menu = Menu;
  Menu = _aureliaFramework.inject(Element)(Menu) || Menu;
  Menu = generateBindables('kendoMenu')(Menu) || Menu;
  Menu = _aureliaFramework.customElement('k-menu')(Menu) || Menu;
  return Menu;
})(WidgetBase);

exports.Menu = Menu;

var ProgressBar = (function (_WidgetBase10) {
  var _instanceInitializers11 = {};

  _inherits(ProgressBar, _WidgetBase10);

  _createDecoratedClass(ProgressBar, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers11);

  function ProgressBar(element) {
    _classCallCheck(this, _ProgressBar);

    _WidgetBase10.call(this, 'kendoProgressBar', element);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers11);

    this.element = element;
    this.options = {};
  }

  ProgressBar.prototype.bind = function bind() {
    this._initialize();
  };

  ProgressBar.prototype.enableChanged = function enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  ProgressBar.prototype.valueChanged = function valueChanged(newValue) {
    this.widget.value(newValue);
  };

  var _ProgressBar = ProgressBar;
  ProgressBar = _aureliaFramework.inject(Element)(ProgressBar) || ProgressBar;
  ProgressBar = generateBindables('kendoProgressBar')(ProgressBar) || ProgressBar;
  ProgressBar = _aureliaFramework.customAttribute('k-progress-bar')(ProgressBar) || ProgressBar;
  return ProgressBar;
})(WidgetBase);

exports.ProgressBar = ProgressBar;

var AuScheduler = function AuScheduler() {
  _classCallCheck(this, AuScheduler);
};

exports.AuScheduler = AuScheduler;

var Slider = (function (_WidgetBase11) {
  var _instanceInitializers12 = {};

  _inherits(Slider, _WidgetBase11);

  _createDecoratedClass(Slider, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers12);

  function Slider(element) {
    _classCallCheck(this, _Slider);

    _WidgetBase11.call(this, 'kendoSlider', element);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers12);

    this.element = element;
    this.options = {};
  }

  Slider.prototype.attached = function attached() {
    this._initialize();
  };

  Slider.prototype.enableChanged = function enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  var _Slider = Slider;
  Slider = _aureliaFramework.inject(Element)(Slider) || Slider;
  Slider = generateBindables('kendoSlider')(Slider) || Slider;
  Slider = _aureliaFramework.customAttribute('k-slider')(Slider) || Slider;
  return Slider;
})(WidgetBase);

exports.Slider = Slider;

var TabStrip = (function (_WidgetBase12) {
  var _instanceInitializers13 = {};

  _inherits(TabStrip, _WidgetBase12);

  _createDecoratedClass(TabStrip, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers13);

  function TabStrip(element) {
    _classCallCheck(this, _TabStrip);

    _WidgetBase12.call(this, 'kendoTabStrip', element);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers13);
  }

  TabStrip.prototype.bind = function bind() {
    this._initialize();
  };

  TabStrip.prototype.recreate = function recreate() {
    this._initialize();
  };

  TabStrip.prototype.enableChanged = function enableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  var _TabStrip = TabStrip;
  TabStrip = _aureliaFramework.inject(Element)(TabStrip) || TabStrip;
  TabStrip = generateBindables('kendoTabStrip')(TabStrip) || TabStrip;
  TabStrip = _aureliaFramework.customAttribute('k-tabstrip')(TabStrip) || TabStrip;
  return TabStrip;
})(WidgetBase);

exports.TabStrip = TabStrip;

var AuToolbar = function AuToolbar() {
  _classCallCheck(this, AuToolbar);
};

exports.AuToolbar = AuToolbar;