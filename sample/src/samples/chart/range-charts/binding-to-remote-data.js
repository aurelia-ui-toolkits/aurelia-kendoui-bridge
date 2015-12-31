export class BindingToRemoteData {
  datasource = new kendo.data.DataSource({
    transport: {
      read: function(options) {
        return System.import('samples/chart/range-charts/json/download-speed.json!json')
        .then(data => options.success(data));
      }
    },
    sort: {
      field: 'year',
      dir: 'asc'
    }
  });

  series = [{
    fromField: 'WiFiFrom',
    toField: 'WiFiTo',
    name: 'WiFi'
  }, {
    fromField: 'OpticalFrom',
    toField: 'OpticalTo',
    name: 'Optical'
  }];

  tooltip = {
    visible: true,
    template: '#= value.from # - #= value.to #'
  };
}
