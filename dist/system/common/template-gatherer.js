System.register(['./control-properties', './util', 'aurelia-dependency-injection'], function (_export) {
  'use strict';

  var ControlProperties, Util, inject, TemplateGatherer;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_controlProperties) {
      ControlProperties = _controlProperties.ControlProperties;
    }, function (_util) {
      Util = _util.Util;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }],
    execute: function () {
      TemplateGatherer = (function () {
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
        TemplateGatherer = inject(ControlProperties, Util)(TemplateGatherer) || TemplateGatherer;
        return TemplateGatherer;
      })();

      _export('TemplateGatherer', TemplateGatherer);
    }
  };
});