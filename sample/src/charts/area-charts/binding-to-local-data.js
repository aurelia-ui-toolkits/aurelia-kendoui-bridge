import json from './binding-to-local-data.json!';

export class BindingToLocalData {

  constructor() {
    this.json = json;
  }

  seriesDefaults = {
    type: 'area',
    labels: {
      visible: true,
      format: '{0}%',
      background: 'transparent'
    }
  };

  series = [{
    field: 'value',
    name: 'United States'
  }];

  valueAxis = {
    labels: {
      format: '{0}%'
    },
    line: {
      visible: false
    }
  };

  categoryAxis = {
    field: 'year',
    majorGridLines: {
      visible: false
    }
  };

  tooltip = {
    visible: true,
    format: '{0}%',
    template: '${category} - ${value}%'
  };
}
