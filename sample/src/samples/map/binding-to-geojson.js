export class BindingToGeojson {

  center = [30.2681, -97.7448];

  layers = [{
        type: "shape",
        style: {
            fill: {
                opacity: 0.7
            }
        },
        dataSource:  new kendo.data.DataSource({
          transport: {
            read: function(options) {
              return System.import('samples/map/json/countries-users.json!json')
              .then(data => options.success(data));
            }
          }
        }),
        locationField: "Location",
        valueField: "Pop2010"
    }];
}
