export class BindingToGroupedArea {
  datasource = new kendo.data.DataSource({
    transport: {
      read: function(options) {
        return System.import('samples/chart/area-charts/json/stock-data-2011.json!json')
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
    type: 'area',
    field: 'close',
    name: '${group.value} (close)'
  }];

  valueAxis = {
    labels: {
      format: '${0}',
      skip: 2,
      step: 2
    },
    line: {
      visible: false
    },
    max: 700
  };

  categoryAxis = {
    field: 'date',
    labels: {
      format: 'MMM'
    },
    line: {
      visible: false
    },
    majorGridLines: {
      visible: false
    }
  };

  tooltip = {
    visible: true,
    format: '{0}%',
    template: '${series.name} - ${value}%'
  };
}
