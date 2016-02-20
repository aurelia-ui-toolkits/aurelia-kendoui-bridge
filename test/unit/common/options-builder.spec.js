import {Container} from 'aurelia-dependency-injection';
import {TemplatingEngine} from 'aurelia-templating';
import {initialize} from 'aurelia-pal-browser';
import {ControlProperties} from 'src/common/control-properties';
import {OptionsBuilder} from 'src/common/options-builder';

describe('OptionsBuilder', () => {
  let container;
  let templatingEngine;
  let sut;
  let controlProperties;

  beforeEach(() => {
    initialize();

    controlProperties = {
      getProperties: jasmine.createSpy()
    };

    container = new Container();
    container.registerInstance(ControlProperties, controlProperties);
    templatingEngine = container.get(TemplatingEngine);
    sut = templatingEngine.createViewModelForUnitTest(OptionsBuilder);
  });

  it('finds templates by conventions', () => {
    expect(sut.isTemplate('test')).toBe(false);
    expect(sut.isTemplate('testTemplate')).toBe(true);
    expect(sut.isTemplate('template')).toBe(true);
  });

  it('getOptions harvests properties from viewModel', () => {
    controlProperties.getProperties = jasmine.createSpy().and.returnValue(['option1', 'test', 'dataSource', 'template', 'empty1', 'empty2']);
    let datasource = {};
    let widget = {};

    let viewModel = {
      kOption1: 'a',
      kTest: 'b',
      kTemplate: 'abcd',
      kEmpty1: undefined,
      kEmpty2: null,
      kDataSource: datasource,
      kWidget: widget
    };

    let options = sut.getOptions(viewModel, 'kendoButton');

    expect(options.option1).toBe('a');
    expect(options.test).toBe('b');
    expect(options.template()).toBe('abcd');
    expect(options.dataSource).toBe(datasource);
    expect(options.widget).toBeUndefined();
    expect(options.empty1).toBeUndefined();
    expect(options.empty2).toBeUndefined();
  });
});
