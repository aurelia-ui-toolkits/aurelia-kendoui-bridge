'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateCompiler = undefined;

var _dec, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaBinding = require('aurelia-binding');

var _util = require('./util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TemplateCompiler = exports.TemplateCompiler = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.TemplatingEngine, _util.Util), _dec(_class = function () {
  function TemplateCompiler(templatingEngine, util) {
    _classCallCheck(this, TemplateCompiler);

    this.isInitialized = false;

    this.templatingEngine = templatingEngine;
    this.util = util;
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

    var $parent = void 0;
    var viewResources = void 0;
    var $angular = widget.$angular || widget.options.$angular;

    if ($angular) {
      $parent = $angular[0]._$parent;
      viewResources = $angular[0]._$resources;
    }

    if (!$parent) return;

    var args = _args();
    var elements = args.elements;
    var data = args.data;

    switch (_event) {
      case 'compile':
        this.compile($parent, elements, data, viewResources);
        break;

      case 'cleanup':
        this.cleanup(elements);
        break;

      default:
        break;
    }
  };

  TemplateCompiler.prototype.compile = function compile($parent, elements, data, viewResources) {
    var _this2 = this;

    var _loop = function _loop(i) {
      var element = elements[i];
      var ctx = undefined;

      if (data && data[i]) {
        var _data = data[i];
        var dataItem = _data.dataItem || _data.aggregate || _data;

        if (!_this2.util.isObject(dataItem)) {
          ctx = {
            dataItem: dataItem
          };
        } else {
          ctx = dataItem;
        }
      }

      if (element instanceof jQuery) {
        element.each(function (index, elem) {
          return _this2.enhanceView($parent, elem, ctx, viewResources);
        });
      } else {
        _this2.enhanceView($parent, element, ctx, viewResources);
      }
    };

    for (var i = 0; i < elements.length; i++) {
      _loop(i);
    }
  };

  TemplateCompiler.prototype.enhanceView = function enhanceView($parent, element, ctx, viewResources) {
    var view = $(element).data('viewInstance');

    if (element.querySelectorAll('.au-target').length === 0) {
      if (viewResources) {
        view = this.templatingEngine.enhance({
          bindingContext: ctx,
          overrideContext: (0, _aureliaBinding.createOverrideContext)(ctx, $parent),
          element: element,
          resources: viewResources
        });
      } else {
        view = this.templatingEngine.enhance({
          bindingContext: ctx,
          overrideContext: (0, _aureliaBinding.createOverrideContext)(ctx, $parent),
          element: element
        });
      }

      $(element).data('viewInstance', view);
    } else {
      view.bind(ctx, (0, _aureliaBinding.createOverrideContext)(ctx, $parent));
    }

    view.attached();
  };

  TemplateCompiler.prototype.cleanup = function cleanup(elements) {
    if (!elements) return;

    for (var i = 0; i < elements.length; i++) {
      var _element = elements[i];
      this.cleanupView(_element);
    }
  };

  TemplateCompiler.prototype.cleanupView = function cleanupView(element) {
    var view = $(element).data('viewInstance');
    if (!view) return;

    view.detached();
    view.unbind();
  };

  return TemplateCompiler;
}()) || _class);