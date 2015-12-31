export class BindingToRemoteData {
  dataSource = new kendo.data.DataSource({
    transport: {
      read: function(options) {
        return System.import('samples/chart/waterfall-charts/json/pocket-price.json!json')
        .then(data => options.success(data));
      }
    }
  });

  series = [{
    type: 'waterfall',
    field: 'value',
    summaryField: 'summary',
    categoryField: 'name',
    labels: {
      visible: true,
      position: 'outsideEnd',
      format: 'C'
    },
    color: function(point) {
      let summary = point.dataItem.summary;
      if (summary) {
        return summary === 'total' ? '#555' : 'gray';
      }

      if (point.value > 0) {
        return 'green';
      } else {
        return 'red';
      }
    }
  }];
}
