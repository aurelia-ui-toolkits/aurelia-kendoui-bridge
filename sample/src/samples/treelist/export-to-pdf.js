export class ExportToPDF {

  constructor() {
    kendo.pdf.defineFont({
      'DejaVu Sans': '//kendo.cdn.telerik.com/2014.3.1314/styles/fonts/DejaVu/DejaVuSans.ttf',
      'DejaVu Sans|Bold': '//kendo.cdn.telerik.com/2014.3.1314/styles/fonts/DejaVu/DejaVuSans-Bold.ttf',
      'DejaVu Sans|Bold|Italic': '//kendo.cdn.telerik.com/2014.3.1314/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf',
      'DejaVu Sans|Italic': '//kendo.cdn.telerik.com/2014.3.1314/styles/fonts/DejaVu/DejaVuSans-Oblique.ttf'
    });
  }

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
