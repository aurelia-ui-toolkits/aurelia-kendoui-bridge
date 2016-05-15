System.register(['./control-properties', './util', 'aurelia-dependency-injection', '../config-builder'], function (_export) {
  'use strict';

  var ControlProperties, Util, inject, KendoConfigBuilder, TemplateGatherer;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_controlProperties) {
      ControlProperties = _controlProperties.ControlProperties;
    }, function (_util) {
      Util = _util.Util;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_configBuilder) {
      KendoConfigBuilder = _configBuilder.KendoConfigBuilder;
    }],
    execute: function () {
      TemplateGatherer = (function () {
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
        TemplateGatherer = inject(ControlProperties, Util, KendoConfigBuilder)(TemplateGatherer) || TemplateGatherer;
        return TemplateGatherer;
      })();

      _export('TemplateGatherer', TemplateGatherer);
    }
  };
});