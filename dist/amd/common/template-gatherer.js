define(['exports', './control-properties', './util', 'aurelia-dependency-injection', '../config-builder'], function (exports, _controlProperties, _util, _aureliaDependencyInjection, _configBuilder) {
  'use strict';

  exports.__esModule = true;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var TemplateGatherer = (function () {
    function TemplateGatherer(controlProperties, util, config) {
      _classCallCheck(this, _TemplateGatherer);

      this.controlProperties = controlProperties;
      this.config = config;
      this.util = util;
    }

    TemplateGatherer.prototype.useTemplates = function useTemplates(target, controlName, templates) {
      var _this = this;

      var templateProps = this.controlProperties.getTemplateProperties(controlName);

      if (!templates) {
        templates = [];
      }

      templates.forEach(function (c) {
        if (templateProps.indexOf(c['for']) > -1) {
          if (_this.util.hasValue(c.template)) {
            (function () {
              var template = c.template;

              if (_this.config.templateCallback) {
                template = _this.config.templateCallback(target, c, c.template);
              }

              target[_this.util.getBindablePropertyName(c['for'])] = c.kendoTemplate ? template : function () {
                return template;
              };
            })();
          }
        } else {
          if (!c['for']) {
            throw new Error('Templating support is not enabled. Call .kendoTemplateSupport() in main.js or import common/template via require');
          } else {
            throw new Error('Invalid template property name: "' + c['for'] + '", valid values are: ' + templateProps.join(', '));
          }
        }
      });
    };

    var _TemplateGatherer = TemplateGatherer;
    TemplateGatherer = _aureliaDependencyInjection.inject(_controlProperties.ControlProperties, _util.Util, _configBuilder.KendoConfigBuilder)(TemplateGatherer) || TemplateGatherer;
    return TemplateGatherer;
  })();

  exports.TemplateGatherer = TemplateGatherer;
});