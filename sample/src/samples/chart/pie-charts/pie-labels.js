export class PieLabels {

  showLabels = true;
  align = 'circle';

  seriesDefaults = {
    labels: {
      template: '#= category # - #= kendo.format("{0:P}", percentage)#',
      position: 'outsideEnd',
      visible: true,
      background: 'transparent'
    }
  };

  legend = {
    position: 'top'
  }

  series = [{
    type: 'pie',
    data: [{
      category: 'Football',
      value: 35
    }, {
      category: 'Basketball',
      value: 25
    }, {
      category: 'Volleyball',
      value: 20
    }, {
      category: 'Rugby',
      value: 10
    }, {
      category: 'Tennis',
      value: 10
    }]
  }];

  refresh() {
    let options = this.chart.options;
    let pieSeries = options.series[0];

    options.transitions = false;
    pieSeries.labels.visible = this.showLabels;
    pieSeries.labels.align = this.align;

    this.chart.refresh();
  }
}
