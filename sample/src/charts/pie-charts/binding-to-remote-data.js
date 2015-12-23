export class BindingToRemoteData {
    dataSource = new kendo.data.DataSource({
        transport: {
          read: function(options) {
            return System.import('charts/pie-charts/json/screen_resolution.json!json')
            .then(data => options.success(data));
          }
        },
        filter: {
            field: "year", operator: "eq", value: 2000
        },
        sort: {
            field: "year",
            dir: "asc"
        }
    });

    title = {
        text: 2000
    };


    seriesDefaults = {
        type: "pie"
    };

    legend = {
        position: "top"
    };

    series = [{
        field: "share",
        categoryField: "resolution",
        padding: 0
    }];

    tooltip = {
        visible: true,
        format: "N0",
        template: "#= category # - #= kendo.format('{0:P}', percentage)#"
    }
}
