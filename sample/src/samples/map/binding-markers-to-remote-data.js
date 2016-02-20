export class BindingMarkersToRemoteData {

  center = [30.268107, -97.744821];

  layers = [{
    type: 'tile',
    urlTemplate: 'http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png',
    subdomains: ['a', 'b', 'c'],
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap contributors</a>' +
    'Tiles courtesy of <a href="http://www.opencyclemap.org/">Andy Allan</a>'
  }, {
    type: 'marker',
    dataSource: new kendo.data.DataSource({
      transport: {
        read: function(options) {
          return System.import('samples/map/json/store-locations.json!json')
          .then(data => options.success(data));
        }
      }
    }),
    locationField: 'latlng',
    titleField: 'name'
  }];
}
