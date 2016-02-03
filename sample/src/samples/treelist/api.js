export class API {
  selectRowIndex = 0;
  expandRowIndex = 0;
  selectRow() {
    let row = this.treelist.content.find('tr:visible').eq(this.selectRowIndex);

    this.treelist.select(row);
  }

  expandCollapse() {
    let row = this.treelist.content.find('tr:visible').eq(this.expandRowIndex);

    if (row.has('.k-i-collapse').length) {
      this.treelist.collapse(row);
    } else {
      this.treelist.expand(row);
    }
  }

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
