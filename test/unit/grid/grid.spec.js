import {Grid as Widget} from 'src/grid/grid';
import {initialize} from 'aurelia-pal-browser';
import {DOM} from 'aurelia-pal';
import {Container} from 'aurelia-dependency-injection';
import {TemplatingEngine} from 'aurelia-templating';

describe('Grid', () => {
  let element;
  let sut;
  let container;
  let templatingEngine;

  beforeEach(() => {
    initialize();
    container = new Container();
    element = DOM.createElement('div');
    container.registerInstance(DOM.Element, element);
    templatingEngine = container.get(TemplatingEngine);
    sut = templatingEngine.createViewModelForUnitTest(Widget, null, {});
  });

  it('disables the Kendo templating system on a column basis', () => {
    let options = {};

    sut.columns = [{
      withKendoTemplates: false,
      template: 'template1'
    }, {
      withKendoTemplates: true,
      template: 'template2'
    }];


    sut._beforeInitialize(options);

    let columns = options.columns;
    expect(columns[0].template()).toBe('template1');
    expect(columns[1].template).toBe('template2');
  });
});
