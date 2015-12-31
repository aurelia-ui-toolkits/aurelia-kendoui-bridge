export class GroupedData {
  legend = {
    position: 'right',
    labels: {
      template: '#= (series.data[0] || {}).categoryText # m/s'
    }
  };

  dataSource = {
    transport: {
      read: function(options) {
        return System.import('samples/chart/radar-charts/json/wind-data.json!json')
        .then(data => options.success(data));
      }
    },
    group: {
      field: 'category',
      dir: 'asc'
    },
    sort: {
      field: 'dir',
      dir: 'asc'
    }
  };

  seriesColors = ['#1b79e4', '#3b6ad3', '#5d5ac2',
  '#8348ae', '#a23a9d', '#c42a8c', '#e51a7a'];

  series = [{
    type: 'radarColumn',
    stack: true,
    field: 'frequency'
  }];

  categoryAxis = {
    field: 'dirText'
  };

  valueAxis = {
    visible: false
  };

  tooltip = {
    template: '#= category # (#= dataItem.categoryText # m/s) #= value #%',
    visible: true
  }
}
