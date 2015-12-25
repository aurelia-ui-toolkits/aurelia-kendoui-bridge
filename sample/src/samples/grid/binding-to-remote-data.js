export class BindingToRemoteData {
  constructor() {
    this.datasource = {
      type: 'odata',
      transport: {
        read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Orders'
      },
      schema: {
        model: {
          fields: {
            OrderID: { type: 'number' },
            Freight: { type: 'number' },
            ShipName: { type: 'string' },
            OrderDate: { type: 'date' },
            ShipCity: { type: 'string' }
          }
        }
      },
      pageSize: 9,
      serverPaging: true,
      serverFiltering: true,
      serverSorting: true
    };
  }
}
