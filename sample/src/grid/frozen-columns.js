export class FrozenColumns {
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
            ShipCountry: { type: 'string' },
            ShipName: { type: 'string' },
            ShipCity: { type: 'string' },
            ShipAddress: { type: 'string' }
          }
        }
      },
      pageSize: 30
    };
  }
}
