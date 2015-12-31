export class BindingToRemoteData {
  datasource = new kendo.data.DataSource({
    transport: {
      read: function(options) {
        return System.import('samples/chart/funnel-charts/json/spain-electricity.json!json')
        .then(data => options.success(data));
      }
    },
    sort: {
      field: 'year',
      dir: 'desc'
    }
  });

  seriesDefaults = {
    type: 'funnel',
    dynamicSlope: true,
    dynamicHeight: false,
    labels: {
      visible: true,
      template: '#= dataItem.year #'
    }
  };

  legend = {
    visible: false
  }

  series = [{
    field: 'wind',
    categoryField: 'year',
    segmentSpacing: 2
  }];

  tooltip = {
    visible: true,
    template: '#= category # - #= value # GWh'
  }
}
