export class PopupEditing {
  dataSource = new kendo.data.TreeListDataSource({
    transport: {
      read: {
        url: '//demos.telerik.com/kendo-ui/service/EmployeeDirectory/All',
        dataType: 'jsonp'
      },
      update: {
        url: '//demos.telerik.com/kendo-ui/service/EmployeeDirectory/Update',
        dataType: 'jsonp'
      },
      destroy: {
        url: '//demos.telerik.com/kendo-ui/service/EmployeeDirectory/Destroy',
        dataType: 'jsonp'
      },
      create: {
        url: '//demos.telerik.com/kendo-ui/service/EmployeeDirectory/Create',
        dataType: 'jsonp'
      },
      parameterMap: function(options, operation) {
        if (operation !== 'read' && options.models) {
          return {models: kendo.stringify(options.models)};
        }
      }
    },
    batch: true,
    schema: {
      model: {
        id: 'EmployeeId',
        parentId: 'ReportsTo',
        fields: {
          EmployeeId: { type: 'number', editable: false, nullable: false },
          ReportsTo: { nullable: true, type: 'number' },
          FirstName: { validation: { required: true } },
          LastName: { validation: { required: true } },
          HireDate: { type: 'date' },
          Phone: { type: 'string' },
          BirthDate: { type: 'date' },
          Extension: { type: 'number', validation: { min: 0, required: true } },
          Position: { type: 'string' }
        },
        expanded: true
      }
    }
  });
}
