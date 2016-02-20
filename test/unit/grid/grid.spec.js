import {Grid as Widget} from 'src/grid/grid';
import {Col} from 'src/grid/k-col';
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

  it('disables the Kendo templating system', () => {
    let options = {};

    let col = new Col();
    col.kTemplate = 'template1';

    sut.columns = [col];

    sut._beforeInitialize(options);

    let columns = options.columns;

    expect(columns[0].template()).toBe('template1');
  });
});
