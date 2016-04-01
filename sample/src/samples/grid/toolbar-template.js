export class ToolbarTemplate {
  dataSource = new kendo.data.DataSource({
    type: 'odata',
    transport: {
      read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Products'
    },
    pageSize: 20,
    serverPaging: true,
    serverSorting: true,
    serverFiltering: true
  });

  categoryDataSource = {
    type: 'odata',
    severFiltering: true,
    transport: {
      read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Categories'
    }
  };

  categoryChanged(e) {
    let dropdownlist = e.sender;
    let value = dropdownlist.value();
    if (value) {
      this.dataSource.filter({ field: 'CategoryID', operator: 'eq', value: parseInt(value, 0) });
    } else {
      this.dataSource.filter({});
    }
  }
}
