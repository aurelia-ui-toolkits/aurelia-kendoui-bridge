import '../setup';
import {Grid as Widget} from 'src/grid/grid';
import {Col} from 'src/grid/col';
import {initialize} from 'aurelia-pal-browser';
import {DOM} from 'aurelia-pal';
import {Container} from 'aurelia-dependency-injection';
import {TemplatingEngine} from 'aurelia-templating';
import {TemplateGatherer} from 'src/common/template-gatherer';

describe('Grid', () => {
  let element;
  let sut;
  let container;
  let templatingEngine;

  beforeEach(() => {
    initialize();
    container = new Container();
    element = DOM.createElement('ak-grid');
    container.registerInstance(DOM.Element, element);
    templatingEngine = container.get(TemplatingEngine);
    sut = templatingEngine.createViewModelForUnitTest(Widget, null, {});
  });

  it('disables the Kendo templating system', () => {
    let options = {};

    let col = new Col(container.get(TemplateGatherer));
    col.templates = [{
      for: 'template',
      template: 'abcd'
    }];
    col.bind();

    sut.columns = [col];

    sut._beforeInitialize(options);

    let columns = options.columns;

    expect(columns[0].template()).toBe('abcd');
  });

  it('initializes on table', () => {
    let target = DOM.createElement('table');
    sut.element.appendChild(target);
    sut.attached();
    expect(sut.target).toBe(target);
  });

  it('initializes on div', () => {
    let target = DOM.createElement('div');
    sut.element.appendChild(target);
    sut.attached();
    expect(sut.target).toBe(target);
  });

  it('initializes on div if table or div does not exist', () => {
    sut.attached();
    expect(sut.element.querySelectorAll('div').length).toBeGreaterThan(0);
    expect(sut.target.nodeName).toBe('DIV');
  });
});
