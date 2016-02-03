export class DragAndDrop {
  dataSource = {
    transport: {
      read: {
        url: '//demos.telerik.com/kendo-ui/service/EmployeeDirectory/All',
        dataType: 'jsonp'
      }
    },
    schema: {
      model: {
        id: 'EmployeeID',
        parentId: 'ReportsTo',
        fields: {
          ReportsTo: { field: 'ReportsTo',  nullable: true },
          EmployeeID: { field: 'EmployeeId', type: 'number' },
          Extension: { field: 'Extension', type: 'number' }
        }
      }
    }
  }
}
