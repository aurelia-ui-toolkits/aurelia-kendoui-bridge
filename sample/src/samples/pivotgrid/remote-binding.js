export class RemoteBinding {
  dataSource = new kendo.data.PivotDataSource({
    type: 'odata',
    transport: {
      read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
    },
    schema: {
      cube: {
        dimensions: {
          ContactName: { caption: 'All Contacts' },
          CompanyName: { caption: 'All Companies' },
          Country: { caption: 'All Countries' },
          ContactTitle: { caption: 'All Titles' }
        },
        measures: {
          'Contacts Count': { field: 'CustomerID', aggregate: 'count' }
        }
      }
    },
    columns: [{ name: 'Country', expand: true }, { name: 'CompanyName' } ],
    rows: [{ name: 'ContactTitle', expand: true }],
    measures: ['Contacts Count']
  });
}
