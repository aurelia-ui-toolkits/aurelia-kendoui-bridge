'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _controlProperties = require('./control-properties');

var _util = require('./util');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var TemplateGatherer = (function () {
  function TemplateGatherer(controlProperties, util) {
    _classCallCheck(this, _TemplateGatherer);

    this.controlProperties = controlProperties;
    this.util = util;
  }

  TemplateGatherer.prototype.useTemplates = function useTemplates(target, controlName, templates) {
    var _this = this;

    var templateProps = this.controlProperties.getTemplateProperties(controlName);

    templates.forEach(function (c) {
      if (templateProps.indexOf(c['for']) > -1) {
        if (_this.util.hasValue(c.template)) {
          target[_this.util.getBindablePropertyName(c['for'])] = c.kendoTemplate ? c.template : function () {
            return c.template;
          };
        }
      } else {
        throw new Error('Invalid template property name: "' + c['for'] + '", valid values are: ' + templateProps.join(', '));
      }
    });
  };

  var _TemplateGatherer = TemplateGatherer;
  TemplateGatherer = _aureliaDependencyInjection.inject(_controlProperties.ControlProperties, _util.Util)(TemplateGatherer) || TemplateGatherer;
  return TemplateGatherer;
})();

exports.TemplateGatherer = TemplateGatherer;