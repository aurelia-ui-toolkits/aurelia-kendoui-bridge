export class BindingToGroupedData {

  stocksDataSource = new kendo.data.DataSource({
    transport: {
      read: function(options) {
        return System.import('samples/chart/scatter-charts/json/stock-data-2011.json!json')
        .then(data => options.success(data));
      }
    },
    group: {
      field: 'symbol'
    },
    sort: {
      field: 'date',
      dir: 'asc'
    },
    schema: {
      model: {
        fields: {
          date: {
            type: 'date'
          }
        }
      }
    }
  });

  series = [{
    type: 'scatterLine',
    xField: 'date',
    yField: 'close',
    name: '#= group.value # (close)'
  }];

  yAxis = {
    labels: {
      format: '${0}',
      skip: 2,
      step: 2
    }
  }
}
