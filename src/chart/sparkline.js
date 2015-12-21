import {customElement, noView, bindable, inject} from 'aurelia-framework';
import {WidgetBase, generateBindables} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.dataviz.sparkline.min';

@customElement('au-kendo-sparkline')
@noView
@generateBindables('kendoSparkline')
@inject(Element)
export class Sparkline extends WidgetBase {

  @bindable options = {};
  @bindable dataSource;

  constructor(element) {
    super('kendoSparkline', element);
  }

  attached() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  getOptions() {
    return {
      autoBind: this.autoBind,
      axisDefaults: this.axisDefaults,
      categoryAxis: this.categoryAxis,
      chartArea: this.chartArea,
      data: this.data,
      dataSource: this.dataSource,
      plotArea: this.plotArea,
      pointWidth: this.pointWidth,
      renderAs: this.renderAs,
      series: this.series,
      seriesColors: this.seriesColors,
      seriesDefaults: this.seriesDefaults,
      theme: this.theme,
      tooltip: this.tooltip,
      transitions: this.transitions,
      type: this.type,
      valueAxis: this.valueAxis
    };
  }

  detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}
