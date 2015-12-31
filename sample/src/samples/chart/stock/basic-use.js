export class BasicUse {
  dataSource = {
    transport: {
      read: function(options) {
        return System.import('samples/chart/stock/json/boeing-stock.json!json')
        .then(data => options.success(data));
      }
    },
    schema: {
      model: {
        fields: {
          Date: { type: 'date' }
        }
      }
    }
  };

  series = [{
    type: 'candlestick',
    openField: 'Open',
    highField: 'High',
    lowField: 'Low',
    closeField: 'Close'
  }];

  navigator = {
    series: {
      type: 'area',
      field: 'Close'
    },
    select: {
      from: '2009/02/05',
      to: '2011/10/07'
    },
    categoryAxis: {
      labels: {
        rotation: 'auto'
      }
    }
  };
}
