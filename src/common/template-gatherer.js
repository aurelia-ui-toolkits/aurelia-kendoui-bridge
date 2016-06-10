import {ControlProperties} from './control-properties';
import {Util} from './util';
import {inject} from 'aurelia-dependency-injection';
import {KendoConfigBuilder} from '../config-builder';
import {Lexer, AccessMember, ParserImplementation, createOverrideContext} from 'aurelia-binding';

@inject(ControlProperties, Util, KendoConfigBuilder)
export class TemplateGatherer {

  controlProperties: ControlProperties;

  constructor(controlProperties: ControlProperties, util: Util, config: KendoConfigBuilder) {
    this.controlProperties = controlProperties;
    this.config = config;
    this.util = util;
  }

  /***
  * parses array of ak-template view-models (@children)
  * <ak-template for='test'>
  * this function sets the property 'test' on the viewmodel to the template
  * @param target the viewModel with template properties
  * @param kendoGrid or GridColumn, properties are retrieved from bindables.js
  * @param templates array of ak-template view-models
  */
  useTemplates(target, controlName, templates) {
    let templateProps = this.controlProperties.getTemplateProperties(controlName);

    if (!templates) {
      templates = [];
    }

    templates.forEach(c => {
      if (!c.for) {
        throw new Error('Templating support is not enabled. Call .kendoTemplateSupport() in main.js or import common/template via require');
      }

      if (templateProps.indexOf(c.for) === -1) {
        if (c.for.indexOf('.') === -1) {
          throw new Error('Invalid template property name: "' + c.for + '", valid values are: ' + templateProps.join(', '));
        }
      }

      if (this.util.hasValue(c.template)) {
        let template = c.template;

        if (this.config.templateCallback) {
          template = this.config.templateCallback(target, c, c.template);
        }

        // now we must parse the expression inside for="" on the ak-template
        // and set the template on the wrapper object
        // get a ParserImplementation for the expression inside for="editable.template"
        let parser = new ParserImplementation(new Lexer(), c.for);
        // get the expression (generates a tree of AccessMembers)
        let expression = parser.parseExpression();
        // when the user uses "editable.template" it must be set as "kEditable.template"
        // so here we iterate through the tree until we get to the last object (the first part of the expression)
        let iterator = expression;
        while (iterator) {
          if (!iterator.object) {
            // convert "editable" to "kEditable"
            iterator.name = this.util.getBindablePropertyName(iterator.name);
          }
          iterator = iterator.object;
        }
        // get the scope of the widget instance
        let scope = createOverrideContext(target, {});
        // set the value on the object based on the expression
        // so if the expression is "a.b.c" and the template is "abcd"
        // it will set { a: { b: { c: 'abcd' }}}
        expression.assign(scope, c.kendoTemplate ? template : () => template);
      }
    });
  }
}
