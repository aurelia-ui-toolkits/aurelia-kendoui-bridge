import {customElement, bindable, inject} from 'aurelia-framework';
import {WidgetBase, generateBindables} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.dataviz.chart.min';
import 'kendo-ui/js/kendo.dataviz.chart.polar.min';
import 'kendo-ui/js/kendo.dataviz.chart.funnel.min';

@customElement('au-kendo-chart')
@generateBindables('kendoChart')
@inject(Element)
export class Chart extends WidgetBase {

  @bindable options = {};
  @bindable dataSource;

  constructor(element) {
    super('kendoChart', element);
  }

  attached() {
    this._initialize();
  }

  recreate() {
    this._initialize();
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

  getAxis(name) {
    if (this.widget) {
      return this.widget.getAxis(name);
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

  saveAsPDF() {
    if (this.widget) {
      return this.widget.saveAsPDF();
    }
  }

  setDataSource(dataSource) {
    if (this.widget) {
      return this.widget.setDataSource(dataSource);
    }
  }
}
