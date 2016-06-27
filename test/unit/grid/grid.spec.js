import '../setup';
import {Grid as Widget} from 'src/grid/grid';
import {Col} from 'src/grid/col';
import {initialize} from 'aurelia-pal-browser';
import {DOM} from 'aurelia-pal';
import {Container} from 'aurelia-dependency-injection';
import {TemplatingEngine} from 'aurelia-templating';
import {TemplateGatherer} from 'src/common/template-gatherer';
import {OptionsBuilder} from 'src/common/options-builder';
import {Util} from 'src/common/util';

describe('Grid', () => {
  let element;
  let sut;
  let container;
  let templatingEngine;
  let util;
  let templateGatherer;
  let optionsBuilder;

  beforeEach(() => {
    initialize();
    container = new Container();
    element = DOM.createElement('ak-grid');
    container.registerInstance(DOM.Element, element);
    util = container.get(Util);
    templateGatherer = container.get(TemplateGatherer);
    optionsBuilder = container.get(OptionsBuilder);
    templatingEngine = container.get(TemplatingEngine);
    sut = templatingEngine.createViewModelForUnitTest(Widget, null, {});
  });

  it('disables the Kendo templating system', () => {
    let options = {};

    let col = new Col(templateGatherer, optionsBuilder, {
      getChildrenVMs: () => [{
        for: 'template',
        template: 'abcd'
      }]
    });
    col.beforeOptionsBuild();

    util.getChildrenVMs = (elem, selector) => {
      if (selector === 'ak-col') return [col];
    };
    sut._beforeInitialize(options);

    let columns = options.columns;

    expect(columns[0].template()).toBe('abcd');
  });

  it('initializes on table', (d) => {
    let target = DOM.createElement('table');
    sut.element.appendChild(target);
    sut.attached();
    setTimeout(() => {
      expect(sut.target).toBe(target);
      d();
    });
  });

  it('initializes on div', (d) => {
    let target = DOM.createElement('div');
    sut.element.appendChild(target);
    sut.attached();
    setTimeout(() => {
      expect(sut.target).toBe(target);
      d();
    });
  });

  it('initializes on div if table or div does not exist', (d) => {
    sut.attached();
    setTimeout(() => {
      expect(sut.element.querySelectorAll('div').length).toBeGreaterThan(0);
      expect(sut.target.nodeName).toBe('DIV');
      d();
    });
  });
});
