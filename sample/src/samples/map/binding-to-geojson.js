import 'gka/chroma.js/chroma.min';

export class BindingToGeojson {

  center = [30.2681, -97.7448];
  scale = chroma
            .scale(['white', 'green'])
            .domain([1, 1000]);

  layers = [{
    type: 'shape',
    style: {
      fill: {
        opacity: 0.7
      }
    },
    dataSource: new kendo.data.DataSource({
      type: 'geojson',
      transport: {
        read: function(options) {
          return System.import('samples/map/json/countries-users.json!json')
          .then(data => options.success(data));
        }
      }
    })
  }];

  onShapeCreated(e) {
    let shape = e.shape;
    let users = shape.dataItem.properties.users;
    if (users) {
      let color = this.scale(users).hex();
      shape.options.fill.set('color', color);
    }
  }

  onShapeMouseEnter(e) {
    e.shape.options.set('fill.opacity', 1);
  }

  onShapeMouseLeave(e) {
    e.shape.options.set('fill.opacity', 0.7);
  }
}
