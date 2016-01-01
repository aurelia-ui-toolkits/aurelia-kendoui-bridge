import {customElement, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {PDF} from '../pdf/pdf'; //eslint-disable-line no-unused-vars
import 'kendo-ui/js/kendo.dataviz.stock.min';

@customElement('k-stock')
@generateBindables('kendoStockChart')
@inject(Element)
export class Stock extends WidgetBase {

  @bindable kDataSource;
  @bindable options = {};

  constructor(element) {
    super('kendoStockChart', element);
  }

  attached() {
    this._initialize();
  }

  recreate() {
    this._initialize();
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

  redraw() {
    if (this.widget) {
      return this.widget.redraw();
    }
  }

  refresh() {
    if (this.widget) {
      return this.widget.refresh();
    }
  }

  resize() {
    if (this.widget) {
      return this.widget.resize();
    }
  }

  setDataSource(dataSource) {
    if (this.widget) {
      return this.widget.setDataSource(dataSource);
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
}
