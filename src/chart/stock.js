import {customElement, bindable, inject} from 'aurelia-framework';
import {pruneOptions, fireKendoEvent} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.dataviz.stock.min';

@customElement('au-kendo-stock')
@inject(Element)
export class Stock {

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

  get options() {
    return this.widget && this.widget.options;
  }

  constructor(element) {
    this.element = element;
  }

  attached() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  _initialize() {
    this.widget = $(this.element).kendoStockChart(this.getOptions()).data('kendoStockChart');
  }

  getOptions() {
    let options = pruneOptions({
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
      valueAxis: this.valueAxis,
      axisLabelClick: (e) => fireKendoEvent(this.element, 'axis-label-click', e),
      legendItemClick: (e) => fireKendoEvent(this.element, 'legend-item-click', e),
      legendItemHover: (e) => fireKendoEvent(this.element, 'legend-item-hover', e),
      dataBound: (e) => fireKendoEvent(this.element, 'data-bound', e),
      drag: (e) => fireKendoEvent(this.element, 'drag', e),
      dragEnd: (e) => fireKendoEvent(this.element, 'drag-end', e),
      dragStart: (e) => fireKendoEvent(this.element, 'drag-start', e),
      noteClick: (e) => fireKendoEvent(this.element, 'note-click', e),
      noteHover: (e) => fireKendoEvent(this.element, 'note-hover', e),
      plotAreaClick: (e) => fireKendoEvent(this.element, 'plot-area-click', e),
      render: (e) => fireKendoEvent(this.element, 'render', e),
      select: (e) => fireKendoEvent(this.element, 'select', e),
      selectEnd: (e) => fireKendoEvent(this.element, 'select-end', e),
      selectStart: (e) => fireKendoEvent(this.element, 'select-start', e),
      seriesClick: (e) => fireKendoEvent(this.element, 'series-click', e),
      seriesHover: (e) => fireKendoEvent(this.element, 'series-hover', e),
      zoom: (e) => fireKendoEvent(this.element, 'zoom', e),
      zoomEnd: (e) => fireKendoEvent(this.element, 'zoom-end', e),
      zoomStart: (e) => fireKendoEvent(this.element, 'zoom-start', e)
    });

    return options;
  }

  detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}
