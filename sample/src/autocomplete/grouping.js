export class Grouping {
  constructor() {
    this.datasource = {
      type: 'odata',
      transport: {
        read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
      },
      group: { field: 'Country' }
    };
  }
}
