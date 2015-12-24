export class PieLabels {
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
}
