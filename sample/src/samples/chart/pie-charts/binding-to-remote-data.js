export class BindingToRemoteData {

  years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009];

  seriesDefaults = {
    type: 'pie'
  };

  legend = {
    position: 'top'
  };

  series = [{
    field: 'share',
    categoryField: 'resolution',
    padding: 0
  }];

  tooltip = {
    visible: true,
    format: 'N0',
    template: '#= category # - #= kendo.format("{0:P}", percentage)#'
  }

  getDatasource(year) {
    return new kendo.data.DataSource({
      transport: {
        read: function(options) {
          return System.import('samples/chart/pie-charts/json/screen_resolution.json!json')
          .then(data => options.success(data));
        }
      },
      filter: {
        field: 'year', operator: 'eq', value: year
      },
      sort: {
        field: 'year',
        dir: 'asc'
      }
    });
  }
}
