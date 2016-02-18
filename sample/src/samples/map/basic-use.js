export class BasicUse {

  center = [42.2814, -83.7483];

  layers = [{
    type: 'tile',
    urlTemplate: 'http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png',
    subdomains: ['a', 'b', 'c'],
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap contributors</a>'
  }];

  markers = [{
    location: [42.2814, -83.7483],
    shape: 'pinTarget',
    tooltip: {
      content: 'Ann Arbor, MI'
    }
  }];
}
