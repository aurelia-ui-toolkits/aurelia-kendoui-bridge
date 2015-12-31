export class DateAxis {

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

  seriesDefaults = {
    type: 'scatterLine',
    markers: {
      size: 6
    }
  };

  tooltip: {
    visible: true,
    format: '{0:d}, ${1}'
  };
}
