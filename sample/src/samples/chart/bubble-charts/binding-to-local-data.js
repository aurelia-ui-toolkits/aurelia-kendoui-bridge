import json from './binding-to-local-data.json!';

export class BindingToLocalData {

  constructor() {
    this.json = json;
  }

  title = {
    text: 'Job Growth for 2011'
  };

  legend = {
    visible: false
  };

  series = [{
    type: 'bubble',
    xField: 'growth',
    yField: 'jobs',
    sizeField: 'applications',
    categoryField: 'company'
  }];

  xAxis = {
    labels: {
      format: '{0:N0}',
      skip: 1
    },
    axisCrossingValue: -5000,
    majorUnit: 2000,
    plotBands: [{
      from: -5000,
      to: 0,
      color: '#00f',
      opacity: 0.05
    }]
  };

  yAxis = {
    labels: {
      format: '{0:N0}'
    },
    line: {
      width: 0
    }
  };

  tooltip = {
    visible: true,
    format: '{3}: {2:N0} applications',
    opacity: 1
  };
}
