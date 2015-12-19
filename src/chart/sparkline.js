import {customElement, noView, bindable, inject} from 'aurelia-framework';
import {pruneOptions, fireKendoEvent} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.dataviz.sparkline.min';

@customElement('au-kendo-sparkline')
@noView
@inject(Element)
export class Sparkline {

  @bindable autoBind = true;
  @bindable axisDefaults;
  @bindable categoryAxis;
  @bindable chartArea;
  @bindable data;
  @bindable dataSource;
  @bindable plotArea;
  @bindable pointWidth = 5;
  @bindable renderAs;
  @bindable series;
  @bindable seriesColors;
  @bindable seriesDefaults;
  @bindable theme;
  @bindable tooltip
  @bindable transitions = false;
  @bindable type = 'line';
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
    this.widget = $(this.element).kendoSparkline(this.getOptions()).data('kendoSparkline');
  }

  getOptions() {
    let options = pruneOptions({
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
      valueAxis: this.valueAxis,
      axisLabelClick: (e) => fireKendoEvent(this.element, 'axis-label-click', e),
      dataBound: (e) => fireKendoEvent(this.element, 'data-bound', e),
      drag: (e) => fireKendoEvent(this.element, 'drag', e),
      dragEnd: (e) => fireKendoEvent(this.element, 'drag-end', e),
      dragStart: (e) => fireKendoEvent(this.element, 'drag-start', e),
      plotAreaClick: (e) => fireKendoEvent(this.element, 'plot-area-click', e),
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
