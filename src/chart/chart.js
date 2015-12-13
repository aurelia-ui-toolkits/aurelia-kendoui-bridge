import {customAttribute, bindable, inject} from 'aurelia-framework';
import {pruneOptions, fireKendoEvent} from '../common/index';
import 'jquery';
import 'kendo-ui/js/kendo.dataviz.chart.min';

@customAttribute('au-kendo-chart')
@inject(Element)
export class AuKendoChart {

  @bindable autoBind = true;
  @bindable axisDefaults;
  @bindable categoryAxis;
  @bindable chartArea;
  @bindable dataSource;
  @bindable legend;
  @bindable panes;
  @bindable pannable;
  @bindable pdf;
  @bindable plotArea;
  @bindable renderAs;
  @bindable series;
  @bindable seriesColors;
  @bindable seriesDefaults;
  @bindable theme;
  @bindable title;
  @bindable tooltip;
  @bindable transitions;
  @bindable valueAxis;
  @bindable xAxis;
  @bindable yAxis;
  @bindable zoomable;


  @bindable options;

  constructor(element) {
    this.element = element;
    this.options = {};
  }

  bind() {
    this._initialize();
  }

  recreate() {
    this._initialize();
  }

  _initialize() {
    this.widget = $(this.element).kendoChart(this.getOptions()).data('kendoChart');
  }

  getOptions() {
    let options = pruneOptions({
      autoBind: this.autoBind,
      axisDefaults: this.axisDefaults,
      categoryAxis: this.categoryAxis,
      chartArea: this.chartArea,
      dataSource: this.dataSource,
      legend: this.legend,
      panes: this.panes,
      pannable: this.pannable,
      pdf: this.pdf,
      plotArea: this.plotArea,
      renderAs: this.renderAs,
      series: this.series,
      seriesColors: this.seriesColors,
      seriesDefaults: this.seriesDefaults,
      theme: this.theme,
      title: this.title,
      tooltip: this.tooltip,
      transitions: this.transitions,
      valueAxis: this.valueAxis,
      xAxis: this.xAxis,
      yAxis: this.yAxis,
      zoomable: this.zoomable,
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

    return Object.assign({}, this.options, options);
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

  detached() {
    if (this.widget) {
      this.widget.destroy();
    }
  }
}
