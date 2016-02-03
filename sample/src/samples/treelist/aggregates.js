export class Aggregates {
  dataSource = new kendo.data.TreeListDataSource({
    transport: {
      read: {
        url: '//demos.telerik.com/kendo-ui/service/EmployeeDirectory/All',
        dataType: 'jsonp'
      }
    },
    schema: {
      model: {
        id: 'EmployeeId',
        parentId: 'ReportsTo',
        fields: {
          ReportsTo: { nullable: true },
          EmployeeId: {  type: 'number' },
          HireDate: { field: 'HireDate', type: 'date' }
        }
      }
    },
    aggregate: [
      { field: 'FirstName', aggregate: 'count' },
      { field: 'HireDate', aggregate: 'max' }
    ]
  });
}
