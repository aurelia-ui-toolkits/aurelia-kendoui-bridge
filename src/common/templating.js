import {ControlProperties} from './control-properties';
import {Container} from 'aurelia-dependency-injection';

export function useTemplates(target, templates) {
  let controlProperties = (Container.instance || new Container()).get(ControlProperties);
  let templateProps = controlProperties.getTemplateProperties(target);

  templates.forEach(c => {
    if (!c.for) {
      target[templateProps.defaultProperty] = c.template;
    } else {
      if (templateProps.validProperties.indexOf(c.for) !== -1) {
        target[c.for] = c.template;
      } else {
        throw new Error('Invalid template property name: ' + c.for);
      }
    }
  });
}
