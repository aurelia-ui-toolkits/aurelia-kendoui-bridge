import {bindable} from 'aurelia-framework';

export class BasicUse {

  @bindable type = 'squarified';

  dataSource = {
    transport: {
      read: function(options) {
        return System.import('charts/treemap/json/population-usa.json!json')
        .then(data => options.success(data));
      }
    },
    schema: {
      model: {
        children: 'items'
      }
    }
  };

  typeChanged() {
    this.treemap.widget.setOptions({
      type: this.type
    });
  }
}
