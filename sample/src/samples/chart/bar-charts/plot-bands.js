export class PlotBands {
  datasource = new kendo.data.DataSource({
    transport: {
      read: function(options) {
        return System.import('samples/chart/bar-charts/json/spain-electricity.json!json')
        .then(data => options.success(data));
      }
    },
    sort: {
      field: 'year',
      dir: 'asc'
    }
  });

  series = [{
    field: 'nuclear',
    name: 'Nuclear'
  }, {
    field: 'hydro',
    name: 'Hydro'
  }, {
    field: 'wind',
    name: 'Wind'
  }];

  valueAxis = {
    labels: {
      format: 'N0'
    },
    majorUnit: 10000,
    plotBands: [{
      from: 10000,
      to: 30000,
      color: '#c00',
      opacity: 0.3
    }, {
      from: 30000,
      to: 30500,
      color: '#c00',
      opacity: 0.8
    }],
    max: 70000,
    line: {
      visible: false
    }
  };

  categoryAxis = {
    field: 'year',
    labels: {
      rotation: -90
    },
    crosshair: {
      visible: true
    }
  };

  tooltip = {
    visible: true,
    format: 'N0'
  };
}
