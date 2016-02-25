export class PDFExport {
  dataSource = new kendo.data.HierarchicalDataSource({
    data: [{
      firstName: 'Antonio',
      lastName: 'Moreno',
      image: 'antonio.jpg',
      title: 'Team Lead',
      colorScheme: '#1696d3',
      items: [{
        firstName: 'Elizabeth',
        image: 'elizabeth.jpg',
        lastName: 'Brown',
        title: 'Design Lead',
        colorScheme: '#ef6944',
        items: [{
          firstName: 'Ann',
          lastName: 'Devon',
          image: 'ann.jpg',
          title: 'UI Designer',
          colorScheme: '#ef6944'
        }]
      }, {
        firstName: 'Diego',
        lastName: 'Roel',
        image: 'diego.jpg',
        title: 'QA Engineer',
        colorScheme: '#ee587b',
        items: [{
          firstName: 'Fran',
          lastName: 'Wilson',
          image: 'fran.jpg',
          title: 'QA Intern',
          colorScheme: '#ee587b'
        }]
      }, {
        firstName: 'Felipe',
        lastName: 'Izquiedro',
        image: 'felipe.jpg',
        title: 'Senior Developer',
        colorScheme: '#75be16',
        items: [{
          firstName: 'Daniel',
          lastName: 'Tonini',
          image: 'daniel.jpg',
          title: 'Developer',
          colorScheme: '#75be16'
        }]
      }]
    }],
    schema: {
      model: {
        children: 'items'
      }
    }
  });


  constructor() {
    this.shapeDefaults = { visual: this.visualTemplate };
  }

  exportPDF() {
    this.diagram.exportPDF({ paperSize: 'auto', margin: { left: '1cm', top: '1cm', right: '1cm', bottom: '1cm' } }).done(data => {
      kendo.saveAs({
        dataURI: data,
        fileName: 'diagram.pdf',
        proxyURL: '//demos.telerik.com/kendo-ui/service/export'
      });
    });
  }

  exportImage() {
    this.diagram.exportImage().done(data => {
      kendo.saveAs({
        dataURI: data,
        fileName: 'diagram.png',
        proxyURL: '//demos.telerik.com/kendo-ui/service/export'
      });
    });
  }

  exportSVG() {
    this.diagram.exportSVG().done(data => {
      kendo.saveAs({
        dataURI: data,
        fileName: 'diagram.svg',
        proxyURL: '//demos.telerik.com/kendo-ui/service/export'
      });
    });
  }


  visualTemplate(options) {
    let dataviz = kendo.dataviz;
    let g = new dataviz.diagram.Group();
    let dataItem = options.dataItem;

    g.append(new dataviz.diagram.Rectangle({
      width: 210,
      height: 75,
      stroke: {
        width: 0
      },
      fill: {
        gradient: {
          type: 'linear',
          stops: [{
            color: dataItem.colorScheme,
            offset: 0,
            opacity: 0.5
          }, {
            color: dataItem.colorScheme,
            offset: 1,
            opacity: 1
          }]
        }
      }
    }));

    g.append(new dataviz.diagram.TextBlock({
      text: dataItem.firstName + ' ' + dataItem.lastName,
      x: 85,
      y: 20,
      fill: '#fff'
    }));

    g.append(new dataviz.diagram.TextBlock({
      text: dataItem.title,
      x: 85,
      y: 40,
      fill: '#fff'
    }));

    g.append(new dataviz.diagram.Image({
      source: 'http://demos.telerik.com/kendo-ui/content/dataviz/diagram/people/' + dataItem.image,
      x: 3,
      y: 3,
      width: 68,
      height: 68
    }));

    return g;
  }
}
