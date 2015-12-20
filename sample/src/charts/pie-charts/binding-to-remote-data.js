export class BindingToRemoteData {
  datasource = new kendo.data.DataSource({
    transport: {
      read: function(options) {
        return System.import('charts/line-charts/json/spain-electricity.json!json')
        .then(data => options.success(data));
      }
    },
    sort: {
        field: "year",
        dir: "asc"
    }
  });

    seriesDefaults = {

    };

    legend = {
        visible: false
    }

    series = [{

    }];

    valueAxis = {

    };

    categoryAxis = {

    };

    tooltip = {

    }
}
