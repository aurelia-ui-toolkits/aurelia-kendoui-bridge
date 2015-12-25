import json from './binding-to-local-data.json!';

export class BindingToLocalData {

  constructor() {
    this.json = json;
  }

  seriesDefaults = {
    type: 'column',
    labels: {
      visible: true,
      background: 'transparent'
    }
  };

  series = [{
    field: 'value',
    colorField: 'userColor'
  }];

  valueAxis = {
    max: 28,
    majorGridLines: {
      visible: false
    },
    visible: false
  };

  categoryAxis = {
    field: 'day',
    majorGridLines: {
      visible: false
    },
    line: {
      visible: false
    }
  };
}
