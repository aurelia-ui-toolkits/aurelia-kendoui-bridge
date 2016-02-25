export class Export {
  pointer = [{
    value: 10,
    shape: 'arrow',
    color: '#c20000'
  }, {
    value: 50,
    color: '#ff7a00',
    margin: 10
  }, {
    value: 30,
    color: '#ffc700'
  }, {
    value: 45,
    color: '#428bca',
    shape: 'arrow'
  }];

  scale = {
    majorUnit: 20,
    minorUnit: 2,
    min: -40,
    max: 60,
    vertical: true,
    ranges: [
      {
        from: -40,
        to: -20,
        color: '#2798df'
      }, {
        from: 30,
        to: 45,
        color: '#ffc700'
      }, {
        from: 45,
        to: 60,
        color: '#c20000'
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
