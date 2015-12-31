export class LogarithmicAxis {

  datasource = new kendo.data.DataSource({
    transport: {
      read: function(options) {
        return System.import('samples/chart/area-charts/json/spain-electricity.json!json')
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

  categoryAxis = {
    field: 'year',
    labels: {
      rotation: -90
    },
    crosshair: {
      visible: true
    }
  };

  valueAxis = {
    type: 'log',
    labels: {
      format: 'N0'
    }
  };

  tooltip = {
    visible: true,
    shared: true,
    format: 'N0'
  }
}
