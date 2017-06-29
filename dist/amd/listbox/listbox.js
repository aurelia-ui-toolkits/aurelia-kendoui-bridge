define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ListBox = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var ListBox = exports.ListBox = (_dec = (0, _aureliaTemplating.customElement)(_constants.constants.elementPrefix + 'list-box'), _dec2 = (0, _decorators.generateBindables)('kendoListBox'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase, _aureliaDependencyInjection.Container), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function ListBox(element, widgetBase, container) {
      _classCallCheck(this, ListBox);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoListBox').useElement(this.element).linkViewModel(this).useContainer(container);
    }

    ListBox.prototype.subscribe = function subscribe(event, callback) {
      return this.widgetBase.subscribe(event, callback);
    };

    ListBox.prototype.bind = function bind(ctx, overrideCtx) {
      this.widgetBase.useParentCtx(overrideCtx);
    };

    ListBox.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    ListBox.prototype.recreate = function recreate() {
      var templates = this.widgetBase.util.getChildrenVMs(this.element, _constants.constants.elementPrefix + 'template');
      this.widgetBase.useTemplates(this, 'kendoListBox', templates);

      this.kWidget = this.widgetBase.recreate();
    };

    ListBox.prototype.destroy = function destroy() {
      this.widgetBase.destroy(this.kWidget);
    };

    ListBox.prototype.detached = function detached() {
      this.destroy();
    };

    return ListBox;
  }()) || _class) || _class) || _class);
});