export class Api {

  center = [30.2681, -97.7448];
  lat = 30.2681;
  long = -97.7448;

  layers = [{
    type: 'tile',
    urlTemplate: 'http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png',
    subdomains: ['a', 'b', 'c'],
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap contributors</a>'
  }];

  updateControls() {
    let center = this.map.center();

    this.lat = center.lat;
    this.long = center.lng;
    this.selectedZoom = this.map.zoom();
  }

  centerMap() {
    this.map.center([this.lat, this.long]);
  }

  zoom() {
    this.map.zoom(this.selectedZoom);
  }
}
