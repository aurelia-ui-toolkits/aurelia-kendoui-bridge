export class BindingToRemoteData {
  datasource = new kendo.data.DataSource({
    transport: {
      read: function(options) {
        return System.import('samples/chart/box-plot-charts/json/ozone.json!json')
        .then(data => options.success(data));
      }
    },
    sort: {
      field: 'year',
      dir: 'asc'
    }
  });

  legend = {
    visible: false
  };

  series = [{
    type: 'boxPlot',
    lowerField: 'lower',
    q1Field: 'q1',
    medianField: 'median',
    q3Field: 'q3',
    upperField: 'upper',
    outliersField: 'outliers',
    meanField: 'mean',
    categoryField: 'year'
  }];
}
