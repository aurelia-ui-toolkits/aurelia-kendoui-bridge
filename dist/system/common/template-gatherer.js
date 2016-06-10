System.register(['./control-properties', './util', 'aurelia-dependency-injection', '../config-builder', 'aurelia-binding'], function (_export) {
  'use strict';

  var ControlProperties, Util, inject, KendoConfigBuilder, Lexer, ParserImplementation, createOverrideContext, TemplateGatherer;

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
    }, function (_aureliaBinding) {
      Lexer = _aureliaBinding.Lexer;
      ParserImplementation = _aureliaBinding.ParserImplementation;
      createOverrideContext = _aureliaBinding.createOverrideContext;
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
            if (!c['for']) {
              throw new Error('Templating support is not enabled. Call .kendoTemplateSupport() in main.js or import common/template via require');
            }

            if (templateProps.indexOf(c['for']) === -1) {
              if (c['for'].indexOf('.') === -1) {
                throw new Error('Invalid template property name: "' + c['for'] + '", valid values are: ' + templateProps.join(', '));
              }
            }

            if (_this.util.hasValue(c.template)) {
              (function () {
                var template = c.template;

                if (_this.config.templateCallback) {
                  template = _this.config.templateCallback(target, c, c.template);
                }

                var parser = new ParserImplementation(new Lexer(), c['for']);

                var expression = parser.parseExpression();

                var iterator = expression;
                while (iterator) {
                  if (!iterator.object) {
                    iterator.name = _this.util.getBindablePropertyName(iterator.name);
                  }
                  iterator = iterator.object;
                }

                var scope = createOverrideContext(target, {});

                expression.assign(scope, c.kendoTemplate ? template : function () {
                  return template;
                });
              })();
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