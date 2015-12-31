export class BindingToRemoteData {
  datasource = new kendo.data.DataSource({
    transport: {
      read: function(options) {
        return System.import('samples/chart/donut-charts/json/screen-resolution.json!json')
        .then(data => options.success(data));
      }
    },
    sort: {
      field: 'order',
      dir: 'asc'
    },
    group: {
      field: 'year'
    }
  });

  legend = {
    position: 'top'
  };

  title = {
    text: '1024x768 screen resolution trends'
  };

  seriesDefaults = {
    type: 'donut',
    startAngle: 270
  };

  series = [{
    field: 'share',
    categoryField: 'resolution',
    visibleInLegendField: 'visibleInLegend',
    padding: 10
  }];

  tooltip = {
    visible: true,
    template: '#= dataItem.resolution #: #= value #% (#= dataItem.year #)'
  }
}
