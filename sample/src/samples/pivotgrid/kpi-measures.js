export class KPIMeasures {
  dataSource = new kendo.data.PivotDataSource({
    type: 'xmla',
    columns: [{ name: '[Date].[Calendar]', expand: true }, { name: '[Product].[Category]' } ],
    rows: [{ name: '[Geography].[City]' }],
    measures: [
      { name: '[Measures].[Internet Revenue Status]', type: 'status' }, //KPI Status measure that will render kpiStatusTemplate
      { name: '[Measures].[Internet Revenue Trend]', type: 'trend' } //KPI Trend measure that will render kpiTrendTemplate
    ],
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
}
