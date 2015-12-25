export class BasicUse {

  seriesDefaults = {
    type: 'bubble'
  };

  legend = {
    visible: false
  };

  series = [{
    data: [{
      x: -2500,
      y: 50000,
      size: 500000,
      category: 'Microsoft'
    }, {
      x: 500,
      y: 110000,
      size: 7600000,
      category: 'Starbucks'
    }, {
      x: 7000,
      y: 19000,
      size: 700000,
      category: 'Google'
    }, {
      x: 1400,
      y: 150000,
      size: 700000,
      category: 'Publix Super Markets'
    }, {
      x: 2400,
      y: 30000,
      size: 300000,
      category: 'PricewaterhouseCoopers'
    }, {
      x: 2450,
      y: 34000,
      size: 90000,
      category: 'Cisco'
    }, {
      x: 2700,
      y: 34000,
      size: 400000,
      category: 'Accenture'
    }, {
      x: 2900,
      y: 40000,
      size: 450000,
      category: 'Deloitte'
    }, {
      x: 3000,
      y: 55000,
      size: 900000,
      category: 'Whole Foods Market'
    }]
  }];

  xAxis = {
    labels: {
      format: '{0:N0}',
      skip: 1,
      rotation: 'auto'
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
  }
}
