export class BindingToGroupedData {
  datasource = new kendo.data.DataSource({
    transport: {
      read: function(options) {
        return System.import('samples/chart/bubble-charts/json/olympics-japan.json!json')
        .then(data => options.success(data));
      }
    },

    group: {
      field: 'country'
    }
  });

  legend = {
    visible: false
  };

  chartArea = {
    background: ''
  };

  series = [{
    type: 'bubble',
    minSize: 0,
    maxSize: 70,
    xField: 'year',
    yField: 'standing',
    sizeField: 'number',
    colorField: 'medalColor',
    opacity: 0.9
  }];

  xAxis = {
    labels: {
      skip: 1,
      margin: {top: -25}
    },
    majorUnit: 4,
    min: 1980,
    max: 2015,
    majorGridLines: {
      visible: false
    },
    line: {
      visible: false
    }
  };

  yAxis = {
    labels: {
      step: 1,
      skip: 1,
      template: '#= value # place',
      margin: {right: -30},
      padding: {left: 20}
    },
    majorUnit: 1,
    min: 0,
    max: 3.7,
    majorGridLines: {
      visible: false
    },
    line: {
      visible: false
    }
  };

  tooltip = {
    visible: true,
    template: '#= value.x #: #= value.size # Medals'
  };

}
