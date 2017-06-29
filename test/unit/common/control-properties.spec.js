import '../setup';
import {Container} from 'aurelia-dependency-injection';
import {TemplatingEngine} from 'aurelia-templating';
import {initialize} from 'aurelia-pal-browser';
import {ControlProperties} from 'src/common/control-properties';

describe('ControlProperties', () => {
  let container;
  let templatingEngine;
  let sut;

  beforeEach(() => {
    initialize();

    container = new Container();
    templatingEngine = container.get(TemplatingEngine);
    sut = templatingEngine.createViewModelForUnitTest(ControlProperties);
  });

  it('controlProperties takes extraProperties into consideration', () => {
    let properties = sut.getProperties('kendoButton', ['extraProp']);

    expect(properties).toContain('extraProp');
  });

  it('getGeneratedProperties throws error when controlName not in bindables.js', () => {
    expect(() => sut.getGeneratedProperties('kendoUnknownControl')).toThrow(new Error('kendoUnknownControl not found in generated bindables.js'));
  });

  it('getGeneratedProperties returns array of properties in bindables.js', () => {
    expect(sut.getGeneratedProperties('kendoButton')).toContain('enable');
    expect(sut.getGeneratedProperties('kendoButton')).toContain('spriteCssClass');
  });

  it('getWidgetProperties returns array of intrinsic property names', () => {
    let properties = sut.getWidgetProperties('kendoButton');
    expect(properties).toContain('enable');
    expect(properties).toContain('spriteCssClass');
  });

  it('getWidgetProperties returns empty array if control is not loaded', () => {
    expect(sut.getWidgetProperties('kendoUnknownControl').length).toBe(0);
  });

  it('getProperties merges 3 lists of available properties for a control', () => {
    let source1 = ['a'];
    let source2 = ['a', 'b'];
    let source3 = ['b', 'c'];
    spyOn(sut, 'getWidgetProperties').and.returnValue(source1);
    spyOn(sut, 'getGeneratedProperties').and.returnValue(source2);
    let result = sut.getProperties('kendoButton', source3);

    expect(result.length).toBe(3);
    expect(result).toContain('a');
    expect(result).toContain('b');
    expect(result).toContain('c');
  });

  it('getTemplateProperties detects template properties', () => {
    let properties = [
      'enabled',
      'headerTemplate',
      'template'
    ];

    spyOn(sut, 'getProperties').and.returnValue(properties);

    let templateProps = sut.getTemplateProperties('kendoButton');

    expect(templateProps).toContain('headerTemplate');
    expect(templateProps).toContain('template');
    expect(templateProps).not.toContain('enabled');
  });

  it('caches list of properties', () => {
    sut.cache = [];
    sut.getProperties('kendoButton');

    expect(sut.cache.kendoButton).not.toBeUndefined();

    // check that the cache is really used
    sut.cache = {
      kendoButton: ['a']
    };
    expect(sut.getProperties('kendoButton')).toContain('a');
    expect(sut.getProperties('kendoButton').length).toBe(1);
  });
});
