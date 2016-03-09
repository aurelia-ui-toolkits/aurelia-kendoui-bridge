import {ControlProperties} from './control-properties';
import {Util} from './util';
import {inject} from 'aurelia-dependency-injection';

@inject(ControlProperties, Util)
export class TemplateGatherer {

  controlProperties: ControlProperties;

  constructor(controlProperties: ControlProperties, util: Util) {
    this.controlProperties = controlProperties;
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

    templates.forEach(c => {
      if (templateProps.indexOf(c.for) > -1) {
        if (this.util.hasValue(c.template)) {
          target[this.util.getBindablePropertyName(c.for)] = c.kendoTemplate ? c.template : () => c.template;
        }
      } else {
        throw new Error('Invalid template property name: "' + c.for + '", valid values are: ' + templateProps.join(', '));
      }
    });
  }
}
