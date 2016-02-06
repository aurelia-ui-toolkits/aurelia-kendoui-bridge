export class Grouping {
  dataSource = {
    type: 'odata',
    transport: {
      read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
    },
    group: { field: 'Country' }
  }
}
