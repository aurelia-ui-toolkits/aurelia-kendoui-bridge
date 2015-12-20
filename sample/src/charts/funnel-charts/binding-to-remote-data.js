export class BindingToRemoteData {
    datasource = new kendo.data.DataSource({
      transport: {
        read: function(options) {
          return System.import('charts/funnel-charts/json/spain-electricity.json!json')
          .then(data => options.success(data));
        }
      },
      sort: {
          field: "year",
          dir: "desc"
      }
    });

    seriesDefaults = {
        type: "funnel",
        dynamicSlope: true,
        dynamicHeight: false,
        labels: {
            visible: true,
            template: "#= dataItem.year #"
        }
    };

    legend = {
        visible: false
    }

    series = [{
        type: "funnel",
        dynamicSlope: true,
        dynamicHeight: false,
        labels: {
            visible: true,
            template: "#= dataItem.year #"
        }
    }];

    tooltip = {
        visible: true,
        template: "#= category # - #= value # GWh"
    }
}
