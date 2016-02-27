import {TemplateGatherer} from 'src/common/template-gatherer';
import {ControlProperties} from 'src/common/control-properties';
import {TemplatingEngine} from 'aurelia-templating';
import {initialize} from 'aurelia-pal-browser';
import {Container} from 'aurelia-dependency-injection';

describe('TemplateGatherer', () => {
  let sut;
  let container;
  let templatingEngine;
  let controlProperties;

  beforeEach(() => {
    initialize();

    controlProperties = {
      getTemplateProperties: jasmine.createSpy()
    };

    container = new Container();
    container.registerInstance(ControlProperties, controlProperties);
    templatingEngine = container.get(TemplatingEngine);
    sut = templatingEngine.createViewModelForUnitTest(TemplateGatherer);
  });

  it('throws error when template prop is not allowed', () => {
    let templateProps = ['template'];
    let templates = [{
      for: 'unknownTemplate'
    }];
    let target = {};
    let controlName = 'kendoScheduler';

    controlProperties.getTemplateProperties.and.returnValue(templateProps);

    expect(() => sut.useTemplates(target, controlName, templates)).toThrow(new Error('Invalid template property name: "unknownTemplate", valid values are: template'));
  });

  it('ignores undefined/null templates', () => {
    let templateProps = ['template'];
    let templates = [{
      for: 'template',
      template: undefined
    }];
    let target = {};
    let controlName = 'kendoScheduler';

    controlProperties.getTemplateProperties.and.returnValue(templateProps);

    sut.useTemplates(target, controlName, templates);

    expect(target.hasOwnProperty('template')).toBe(false);
  });

  it('wraps template in function if kendoTemplate is false', () => {
    let templateProps = ['template'];
    let templates = [{
      for: 'template',
      template: 'abcd',
      kendoTemplate: false
    }];
    let target = {};
    let controlName = 'kendoScheduler';

    controlProperties.getTemplateProperties.and.returnValue(templateProps);

    sut.useTemplates(target, controlName, templates);

    expect(typeof target.kTemplate).toBe('function');
    expect(target.kTemplate()).toBe('abcd');
  });

  it('doesn\'t wrap template in function if kendoTemplate is true', () => {
    let templateProps = ['template'];
    let templates = [{
      for: 'template',
      template: 'abcd',
      kendoTemplate: true
    }];
    let target = {};
    let controlName = 'kendoScheduler';

    controlProperties.getTemplateProperties.and.returnValue(templateProps);

    sut.useTemplates(target, controlName, templates);

    expect(target.kTemplate).toBe('abcd');
  });
});
