export class Export {
  pointer = [{
    value: 20,
    color: '#c20000',
    cap: { size: 0.15 }
  }, {
    value: 80,
    color: '#ff7a00',
    cap: { size: 0.1 }
  }, {
    value: 140,
    color: '#ffc700'
  }];

  scale = {
    minorUnit: 5,
    startAngle: -30,
    endAngle: 210,
    max: 180,
    labels: {
      position: 'inside'
    },
    ranges: [
      {
        from: 80,
        to: 120,
        color: '#bb6e36'
      }, {
        from: 120,
        to: 150,
        color: '#b8b8b8'
      }, {
        from: 150,
        to: 180,
        color: '#f3ac32'
      }
    ]
  };

  exportPDF() {
    this.gauge.exportPDF({ paperSize: 'auto', margin: { left: '1cm', top: '1cm', right: '1cm', bottom: '1cm' } }).done((data) => {
      kendo.saveAs({
        dataURI: data,
        fileName: 'chart.pdf',
        proxyURL: '//demos.telerik.com/kendo-ui/service/export'
      });
    });
  }

  exportImage() {
    this.gauge.exportImage().done((data) => {
      kendo.saveAs({
        dataURI: data,
        fileName: 'chart.png',
        proxyURL: '//demos.telerik.com/kendo-ui/service/export'
      });
    });
  }

  exportSVG() {
    this.gauge.exportSVG().done((data) => {
      kendo.saveAs({
        dataURI: data,
        fileName: 'chart.svg',
        proxyURL: '//demos.telerik.com/kendo-ui/service/export'
      });
    });
  }
}
