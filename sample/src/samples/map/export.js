import 'gka/chroma.js/chroma.min';

export class Export {
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

  exportPDF() {
    kendo.drawing.drawDOM(this.map)
    .then(group => {
      // Render the result as a PDF file
      return kendo.drawing.exportPDF(group, {
        paperSize: 'auto',
        margin: { left: '1cm', top: '1cm', right: '1cm', bottom: '1cm' }
      });
    })
    .done(data => {
      // Save the PDF file
      kendo.saveAs({
        dataURI: data,
        fileName: 'Map.pdf',
        proxyURL: '//demos.telerik.com/kendo-ui/service/export'
      });
    });
  }

  exportImage() {
    kendo.drawing.drawDOM(this.map)
    .then(group => kendo.drawing.exportImage(group))
    .done(data => {
      // Save the image file
      kendo.saveAs({
        dataURI: data,
        fileName: 'Map.png',
        proxyURL: '//demos.telerik.com/kendo-ui/service/export'
      });
    });
  }

  exportSVG() {
    kendo.drawing.drawDOM(this.map)
    .then(group => kendo.drawing.exportSVG(group))
    .done(data => {
      // Save the SVG document
      kendo.saveAs({
        dataURI: data,
        fileName: 'Map.svg',
        proxyURL: '//demos.telerik.com/kendo-ui/service/export'
      });
    });
  }
}
