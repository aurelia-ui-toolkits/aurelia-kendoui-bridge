export class ColumnResizing {
  dataSource = new kendo.data.TreeListDataSource({
    transport: {
      read: {
        url: '//demos.telerik.com/kendo-ui/service/EmployeeDirectory',
        dataType: 'jsonp'
      }
    },
    schema: {
      model: {
        id: 'EmployeeId',
        parentId: 'ReportsTo',
        fields: {
          EmployeeId: { type: 'number', nullable: false },
          ReportsTo: { field: 'ReportsTo', nullable: true }
        }
      }
    }
  });
}
