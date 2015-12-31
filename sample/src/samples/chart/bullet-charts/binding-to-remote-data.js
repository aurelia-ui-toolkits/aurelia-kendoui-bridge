export class BindingToRemoteData {
  datasource = new kendo.data.DataSource({
    transport: {
      read: function(options) {
        return System.import('samples/chart/bullet-charts/json/april-sales.json!json')
        .then(data => options.success(data));
      }
    }
  });

  legend = {
    visible: false
  }

  series = [{
    type: 'verticalBullet',
    currentField: 'current',
    targetField: 'target',
    target: {
      color: '#aaaaaa'
    },
    gap: 4
  }];

  categoryAxis = {
    majorGridLines: {
      visible: false
    },
    field: 'category'
  };

  valueAxis = {
    min: 2000,
    max: 11000,
    majorGridLines: {
      visible: false
    },
    minorTicks: {
      visible: true
    },
    plotBands: [{
      from: 1000, to: 3000, color: '#aaaaaa', opacity: 0.55
    }, {
      from: 3000, to: 5000, color: '#aaaaaa', opacity: 0.4
    }, {
      from: 5000, to: 8000, color: '#aaaaaa', opacity: 0.25
    }, {
      from: 8000, to: 11000, color: '#aaaaaa', opacity: 0.1
    }]
  };

  tooltip = {
    visible: true,
    template: 'Target: #= value.target # items<br /> Actual: #= value.current # items'
  }
}
