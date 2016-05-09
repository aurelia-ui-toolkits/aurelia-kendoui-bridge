import {ControlProperties} from './control-properties';
import {Util} from './util';
import {inject} from 'aurelia-dependency-injection';
import {KendoConfigBuilder} from '../config-builder';

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
      if (templateProps.indexOf(c.for) > -1) {
        if (this.util.hasValue(c.template)) {
          let template = c.template;

          if (this.config.templateCallback) {
            template = this.config.templateCallback(c, c.template);
          }

          target[this.util.getBindablePropertyName(c.for)] = c.kendoTemplate ? template : () => template;
        }
      } else {
        if (!c.for) {
          throw new Error('Templating support is not enabled. Call .kendoTemplateSupport() in main.js or import common/template via require');
        } else {
          throw new Error('Invalid template property name: "' + c.for + '", valid values are: ' + templateProps.join(', '));
        }
      }
    });
  }
}
