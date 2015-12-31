export class BindingToRemoteData {

  dataSource = {
    transport: {
      read: function(options) {
        return System.import('samples/chart/scatter-charts/json/price-performance.json!json')
        .then(data => options.success(data));
      }
    },
    sort: {
      field: 'year',
      dir: 'asc'
    }
  };

  series = [{
    xField: 'price',
    yField: 'performance'
  }];

  xAxis = {
    max: 1000,
    labels: {
      format: '${0}'
    },
    title: {
      text: 'Price'
    }
  };

  yAxis = {
    min: 80,
    labels: {
      format: '{0}%'
    },
    title: {
      text: 'Performance Ratio'
    }
  };

  tooltip = {
    visible: true,
    template: '#= "<b>$" + value.x + " " + dataItem.family + " " + dataItem.model + ": " + value.y + "%</b>" #'
  }
}
