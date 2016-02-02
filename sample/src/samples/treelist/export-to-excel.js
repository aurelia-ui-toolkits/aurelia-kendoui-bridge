export class ExportToExcel {
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
          EmployeeId: {  type: 'number' }
        },
        expanded: true
      }
    }
  });
}
