'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var _aureliaTemplating = require('aurelia-templating');

var TemplateCompiler = (function () {
  function TemplateCompiler(templatingEngine) {
    _classCallCheck(this, _TemplateCompiler);

    this.templatingEngine = templatingEngine;
  }

  TemplateCompiler.prototype.initialize = function initialize($parent) {
    var _this = this;

    this.$parent = $parent;

    kendo.ui.Widget.prototype.angular = function (_event, _args) {
      return _this.handleTemplateEvents(_event, _args);
    };
    kendo.mobile.ui.Widget.prototype.angular = function (_event, _args) {
      return _this.handleTemplateEvents(_event, _args);
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
    var _this2 = this;

    var _loop = function (i) {
      var element = elements[i];
      var ctx = undefined;

      if (data && data[i]) {
        var _data = data[i];
        ctx = _data.dataItem;
      }

      if (element instanceof jQuery) {
        element.each(function (index, elem) {
          return _this2.enhanceView(elem, ctx);
        });
      } else {
        _this2.enhanceView(element, ctx);
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
    var _this3 = this;

    if (!elements) return;

    elements.forEach(function (element) {
      _this3.cleanupView(element);
    });
  };

  TemplateCompiler.prototype.cleanupView = function cleanupView(element) {
    var view = $(element).data('viewInstance');
    if (!view) {
      throw new Error('viewInstance does not exist on this element');
    }

    view.detached();
    view.unbind();
  };

  var _TemplateCompiler = TemplateCompiler;
  TemplateCompiler = _aureliaFramework.inject(_aureliaTemplating.TemplatingEngine)(TemplateCompiler) || TemplateCompiler;
  return TemplateCompiler;
})();

exports.TemplateCompiler = TemplateCompiler;