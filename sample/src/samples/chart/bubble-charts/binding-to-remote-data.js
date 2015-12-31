export class BindingToRemoteData {
  datasource = new kendo.data.DataSource({
    transport: {
      read: function(options) {
        return System.import('samples/chart/bubble-charts/json/crime-stats.json!json')
        .then(data => options.success(data));
      }
    }
  });

  series = [{
    type: 'bubble',
    xField: 'murder',
    yField: 'burglary',
    sizeField: 'population',
    categoryField: 'state'
  }];

  xAxis = {
    labels: {
      format: '{0:N0}'
    },
    title: {
      text: 'Murders per 100,000 population'
    }
  };

  yAxis = {
    labels: {
      format: '{0:N0}'
    },
    title: {
      text: 'Burglaries per 100,000 population'
    }
  };

  tooltip = {
    visible: true,
    format: '{3}: Population {2:N0}'
  };
}
