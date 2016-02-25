export class ExportToPDF {
  pdf = {
    fileName: 'Kendo UI PivotGrid Export.pdf',
    proxyURL: '//demos.telerik.com/kendo-ui/service/export'
  };

  dataSource = new kendo.data.PivotDataSource({
    type: 'xmla',
    columns: [{ name: '[Date].[Calendar]', expand: true } ],
    rows: [{ name: '[Product].[Category]', expand: true }],
    measures: ['[Measures].[Reseller Freight Cost]'],
    transport: {
      connection: {
        catalog: 'Adventure Works DW 2008R2',
        cube: 'Adventure Works'
      },
      read: '//demos.telerik.com/olap/msmdpump.dll'
    },
    schema: {
      type: 'xmla'
    },
    error: (e) => {
      alert('error: ' + kendo.stringify(e.errors[0]));
    }
  });

  constructor() {
    kendo.pdf.defineFont({
      'DejaVu Sans': '//kendo.cdn.telerik.com/2014.3.1314/styles/fonts/DejaVu/DejaVuSans.ttf',
      'DejaVu Sans|Bold': '//kendo.cdn.telerik.com/2014.3.1314/styles/fonts/DejaVu/DejaVuSans-Bold.ttf',
      'DejaVu Sans|Bold|Italic': '//kendo.cdn.telerik.com/2014.3.1314/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf',
      'DejaVu Sans|Italic': '//kendo.cdn.telerik.com/2014.3.1314/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf'
    });
  }

  export() {
    this.pivotgrid.saveAsPDF();
  }
}
