import {customElement, bindable, inject} from 'aurelia-framework';
import {WidgetBase} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.dataviz.stock.min';

@customElement('au-kendo-stock')
@inject(Element)
export class Stock extends WidgetBase {

  @bindable options = {};

  @bindable autoBind = true;
  @bindable axisDefaults;
  @bindable categoryAxis;
  @bindable chartArea;
  @bindable dataSource;
  @bindable dateField = 'date';
  @bindable legend;
  @bindable navigator;
  @bindable panes;
  @bindable pdf;
  @bindable plotArea;
  @bindable renderAs;
  @bindable series;
  @bindable seriesDefaults;
  @bindable theme;
  @bindable title;
  @bindable tooltip;
  @bindable transitions = true;
  @bindable valueAxis;

  constructor(element) {
    super('kendoStockChart', element);
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
      dateField: this.dateField,
      navigator: this.navigator,
      axisDefaults: this.axisDefaults,
      categoryAxis: this.categoryAxis,
      chartArea: this.chartArea,
      dataSource: this.dataSource,
      legend: this.legend,
      panes: this.panes,
      pdf: this.pdf,
      plotArea: this.plotArea,
      renderAs: this.renderAs,
      series: this.series,
      seriesDefaults: this.seriesDefaults,
      theme: this.theme,
      title: this.title,
      tooltip: this.tooltip,
      transitions: this.transitions,
      valueAxis: this.valueAxis
    };
  }

  detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}
