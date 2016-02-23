export class Templates {
  dataSource = new kendo.data.PivotDataSource({
    type: 'xmla',
    columns: [{ name: '[Date].[Calendar]', expand: true }],
    rows: [{ name: '[Product].[Product Line]', expand: true }],
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

  getTotal(value) {
    if (value) {
      return kendo.parseFloat(value, 'c2');
    } else {
      return 'N/A';
    }
  }
}
