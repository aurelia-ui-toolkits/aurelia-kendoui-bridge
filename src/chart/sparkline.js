import {customElement, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {PDF} from '../pdf/pdf'; //eslint-disable-line no-unused-vars
import 'kendo-ui/js/kendo.dataviz.sparkline.min';

@customElement('k-sparkline')
@generateBindables('kendoSparkline')
@inject(Element, WidgetBase)
export class Sparkline {

  @bindable options = {};

  constructor(element, widgetBase) {
    widgetBase.linkViewModel(this, element, 'kendoSparkline');
  }

  attached() {
    this.widgetBase.createWidget(this.element);
  }

  destroy() {
    if (this.widget) {
      return this.widget.destroy();
    }
  }

  exportImage(options) {
    if (this.widget) {
      return this.widget.exportImage(options);
    }
  }

  exportPDF(options) {
    if (this.widget) {
      return this.widget.exportPDF(options);
    }
  }

  exportSVG(options) {
    if (this.widget) {
      return this.widget.exportSVG(options);
    }
  }

  setDataSource(dataSource) {
    if (this.widget) {
      return this.widget.setDataSource(dataSource);
    }
  }

  setOptions(value) {
    if (this.widget) {
      return this.widget.setOptions(value);
    }
  }

  svg() {
    if (this.widget) {
      return this.widget.svg();
    }
  }

  imageDataURL() {
    if (this.widget) {
      return this.widget.imageDataURL();
    }
  }

  refresh() {
    if (this.widget) {
      return this.widget.refresh();
    }
  }
}
