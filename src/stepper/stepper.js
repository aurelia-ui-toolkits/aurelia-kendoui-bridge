import {inject, Container} from 'aurelia-dependency-injection';
import {customElement} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {OptionsBuilder} from '../common/options-builder';

@customElement(`${constants.elementPrefix}stepper`)
@generateBindables('kendoStepper')
@inject(Element, WidgetBase, OptionsBuilder, Container)
export class Stepper {
  constructor(element, widgetBase, optionsBuilder, container) {
    this.element = element;
    this.optionsBuilder = optionsBuilder;
    this.widgetBase = widgetBase
      .control('kendoStepper')
      .useElement(this.element)
      .beforeInitialize(options => this._beforeInitialize(options))
      .linkViewModel(this)
      .useContainer(container);
  }

  subscribe(event, callback) {
    return this.widgetBase.subscribe(event, callback);
  }

  bind(ctx, overrideCtx) {
    this.widgetBase.useParentCtx(overrideCtx);
  }

  attached() {
    if (!this.kNoInit) {
      this.recreate();
    }
  }

  recreate() {
    this.kWidget = this.widgetBase.recreate();
  }

  _beforeInitialize(options) {
    const steps = this.widgetBase.util.getChildrenVMs(this.element, `${constants.elementPrefix}step`);
    if (steps && steps.length > 0) {
      options.steps = [];

      steps.forEach(step => {
        options.steps.push(step.getOptions());
      });
    }
  }

  destroy() {
    this.widgetBase.destroy(this.kWidget);
  }

  detached() {
    this.destroy();
  }
}
