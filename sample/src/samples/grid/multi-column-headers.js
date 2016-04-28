export class MultiColumnHeaders {
  datasource = {
    type: 'odata',
    transport: {
      read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
    },
    pageSize: 20
  };

  groupedColumns = [{
    field: 'ContactTitle',
    title: 'Contact Title',
    width: 200
  }, {
    field: 'ContactName',
    title: 'Contact Name',
    width: 200
  }, {
    title: 'Location',
    columns: [ {
      field: 'Country',
      width: 200
    }, {
      field: 'City',
      width: 200
    }]
  }, {
    field: 'Phone',
    title: 'Phone'
  }];
}
