export class BubbleLayer {
  center = [45, 45];

  layers = [{
        type: "tile",
        urlTemplate: "http://otile3.mqcdn.com/tiles/1.0.0/sat/#= zoom #/#= x #/#= y #.png",
        attribution: "Tiles &copy; <a href='http://www.mapquest.com/' target='_blank'>MapQuest</a>>"
    }, {
        type: "bubble",
        attribution: "Population data from Nordpil and UN Population Division.",
        style: {
            fill: {
                color: "#fff",
                opacity: 0.4
            },
            stroke: {
                width: 0
            }
        },
        dataSource:  new kendo.data.DataSource({
          transport: {
            read: function(options) {
              return System.import('samples/map/json/urban-areas.json!json')
              .then(data => options.success(data));
            }
          }
        }),
        locationField: "Location",
        valueField: "Pop2010"
    }];
}

