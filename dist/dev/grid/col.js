'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/constants', '../common/decorators', '../common/template-gatherer', '../common/options-builder', '../common/util'], function (_export, _context) {
  "use strict";

  var customElement, inject, constants, generateBindables, TemplateGatherer, OptionsBuilder, Util, _dec, _dec2, _dec3, _class, Col;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonTemplateGatherer) {
      TemplateGatherer = _commonTemplateGatherer.TemplateGatherer;
    }, function (_commonOptionsBuilder) {
      OptionsBuilder = _commonOptionsBuilder.OptionsBuilder;
    }, function (_commonUtil) {
      Util = _commonUtil.Util;
    }],
    execute: function () {
      _export('Col', Col = (_dec = customElement(constants.elementPrefix + 'col'), _dec2 = generateBindables('GridColumn'), _dec3 = inject(TemplateGatherer, OptionsBuilder, Util, Element), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Col(templateGatherer, optionsBuilder, util, element) {
          _classCallCheck(this, Col);

          this.templateGatherer = templateGatherer;
          this.optionsBuilder = optionsBuilder;
          this.util = util;
          this.element = element;
        }

        Col.prototype.bind = function bind($parent) {
          this.$parent = $parent;
        };

        Col.prototype.beforeOptionsBuild = function beforeOptionsBuild() {
          var templates = this.util.getChildrenVMs(this.element, constants.elementPrefix + 'template');
          this.templateGatherer.useTemplates(this, 'GridColumn', templates);
        };

        Col.prototype.afterOptionsBuild = function afterOptionsBuild(options) {
          var _this = this;

          var columns = this.util.getChildrenVMs(this.element, constants.elementPrefix + 'col');
          if (columns && columns.length > 0) {
            options.columns = [];

            columns.forEach(function (col) {
              options.columns.push(_this.optionsBuilder.getOptions(col, 'GridColumn'));
            });
          }

          if (options.editor) {
            options.editor = options.editor.bind(this.$parent);
          }

          var commands = this.util.getChildrenVMs(this.element, constants.elementPrefix + 'grid-command');
          if (commands && commands.length > 0) {
            options.command = [];

            commands.forEach(function (command) {
              var c = _this.optionsBuilder.getOptions(command, 'GridColumnCommandItem');

              if (c.click) {
                c.click = c.click.bind(_this.$parent);
              }

              options.command.push(c);
            });
          }
        };

        return Col;
      }()) || _class) || _class) || _class));

      _export('Col', Col);
    }
  };
});
//# sourceMappingURL=../dist/dev/grid/col.js.map
