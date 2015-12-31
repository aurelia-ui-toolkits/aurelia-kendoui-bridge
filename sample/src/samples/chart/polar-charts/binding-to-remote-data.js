export class BindingToRemoteData {
  dataSource = {
    transport: {
      read: function(options) {
        return System.import('samples/chart/polar-charts/json/antenna-gain.json!json')
        .then(data => options.success(data));
      }
    }
  };

  series = [{
    type: 'polarLine',
    xField: 'azimuth',
    yField: 'gain'
  }];
}
