export class Events {
  dataSource = {
    transport: {
      read: function(options) {
        return System.import('samples/chart/treemap/json/population-usa.json!json')
        .then(data => options.success(data));
      }
    },
    schema: {
      model: {
        children: 'items'
      }
    }
  };

  attached() {
    $('.options').bind('change', () => this.refresh());
  }
}
