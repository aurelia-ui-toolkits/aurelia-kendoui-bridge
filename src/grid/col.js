import {children, customElement} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {TemplateGatherer} from '../common/template-gatherer';
import {OptionsBuilder} from '../common/options-builder';

@customElement(`${constants.elementPrefix}col`)
@generateBindables('GridColumn')
@inject(TemplateGatherer, OptionsBuilder)
export class Col {
  @children(`${constants.elementPrefix}template`) templates = [];
  @children(`${constants.elementPrefix}col`) columns = [];

  constructor(templateGatherer, optionsBuilder) {
    this.templateGatherer = templateGatherer;
    this.optionsBuilder = optionsBuilder;
  }

  beforeOptionsBuild() {
    this.templateGatherer.useTemplates(this, 'GridColumn', this.templates);
  }

  // recursively get options of all nested columns that we can pass to Kendo
  afterOptionsBuild(options) {
    if (this.columns && this.columns.length > 0) {
      options.columns = [];

      this.columns.forEach(col => {
        options.columns.push(this.optionsBuilder.getOptions(col, 'GridColumn'));
      });
    }
  }
}
