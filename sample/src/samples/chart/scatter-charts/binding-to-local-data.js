import json from './binding-to-local-data.json!';

export class BindingToLocalData {

  constructor() {
    this.json = json;
  }

  series = [{
    xField: 'price',
    yField: 'performance'
  }];

  xAxis = {
    max: 1000,
    labels: {
      format: '${0}'
    },
    title: {
      text: 'Price'
    }
  };

  yAxis = {
    min: 80,
    labels: {
      format: '{0}%'
    },
    title: {
      text: 'Performance Ratio'
    }
  };

  tooltip = {
    visible: true,
    template: '#= "<b>$" + value.x + " " + dataItem.family + " " + dataItem.model + ": " + value.y + "%</b>" #'
  }
}
