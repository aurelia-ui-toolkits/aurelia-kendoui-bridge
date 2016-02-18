export class Events {
  center = [39.6924, -97.3370];

  layers = [{
    type: 'shape',
    dataSource: {
      type: 'geojson',
      transport: {
        read: function(options) {
          return System.import('samples/map/json/us.geo.json!json')
          .then(data => options.success(data));
        }
      }
    },
    style: {
      stroke: {
        color: '#ccebc5'
      },
      fill: {
        color: '#b3cde3'
      }
    }
  }];

  onClick(e) {
    this.logger.log(kendo.format(
      'Click at :: {0}', e.location.toString()
    ));
  }

  onReset(e) {
    this.logger.log('Reset');
  }

  onPan(e) {
    this.logger.log(kendo.format(
      'Pan to :: {0}', e.center.toString()
    ));
  }

  onPanEnd(e) {
    this.logger.log(kendo.format(
      'Pan ended at :: {0}', e.center.toString()
    ));
  }

  onShapeClick(e) {
    this.logger.log(kendo.format(
      'Shape click :: {0}', e.shape.dataItem.properties.name
    ));
  }

  onShapeCreated(e) {
    this.logger.log(kendo.format(
      'Shape created :: {0}', e.shape.dataItem.properties.name
    ));
  }

  onShapeMouseEnter(e) {
    this.logger.log(kendo.format(
      'Shape mouseEnter :: {0}', e.shape.dataItem.properties.name
    ));
  }

  onShapeMouseLeave(e) {
    this.logger.log(kendo.format(
      'Shape mouseLeave :: {0}', e.shape.dataItem.properties.name
    ));
  }

  onZoomStart(e) {
    this.logger.log('Zoom start');
  }

  onZoomEnd(e) {
    this.logger.log('Zoom end');
  }
}
