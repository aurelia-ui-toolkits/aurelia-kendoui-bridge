import 'kendo-ui/js/kendo.mobile.buttongroup.min';

export class BubbleLayer {
  center = [45, 45];

  layers = [{
    type: 'tile',
    urlTemplate: 'http://otile3.mqcdn.com/tiles/1.0.0/sat/#= zoom #/#= x #/#= y #.png',
    attribution: 'Tiles &copy; <a href=\'http://www.mapquest.com/\' target=\'_blank\'>MapQuest</a>'
  }, {
    type: 'bubble',
    attribution: 'Population data from Nordpil and UN Population Division.',
    style: {
      fill: {
        color: '#fff',
        opacity: 0.4
      },
      stroke: {
        width: 0
      }
    },
    dataSource: new kendo.data.DataSource({
      transport: {
        read: function(options) {
          return System.import('samples/map/json/urban-areas.json!json')
          .then(data => options.success(data));
        }
      }
    }),
    locationField: 'Location',
    valueField: 'Pop2010'
  }];

  attached() {
    $(this.selectSymbol).kendoMobileButtonGroup({
      select: (e) => {
        let layer = this.map.layers[1];
        layer.options.symbol = e.index === 0 ? 'circle' : 'square';
        layer.reset();
      },
      index: 0
    });
  }

  onReset() {
    this.info.innerHTML = kendo.template(this.emptyInfoTemplate.innerHTML)({});
    this.activeShape = null;
  }

  onShapeMouseEnter(e) {
    if (this.activeShape) {
      this.activeShape.options.set('stroke', null);
    }

    this.activeShape = e.shape;
    this.activeShape.options.set('stroke', { width: 1.5, color: '#fff' });

    this.info.innerHTML = kendo.template(this.infoTemplate.innerHTML)(e.shape.dataItem);
  }
}
