export class BasicUse {

  pageable = {
    refresh: true,
    pageSizes: true,
    buttonCount: 10
  };

  constructor() {
    this.datasource = {
      type: 'odata',
      transport: {
        read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Employees'
      },
      pageSize: 20,
      serverPaging: true,
      serverSorting: true
    };
  }

  detailInit(e) {
    let detailRow = e.detailRow;

    detailRow.find('.tabstrip').kendoTabStrip({
      animation: {
        open: { effects: 'fadeIn' }
      }
    });

    detailRow.find('.orders').kendoGrid({
      dataSource: {
        type: 'odata',
        transport: {
          read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Orders'
        },
        serverPaging: true,
        serverSorting: true,
        serverFiltering: true,
        pageSize: 7,
        filter: { field: 'EmployeeID', operator: 'eq', value: e.data.EmployeeID }
      },
      scrollable: false,
      sortable: true,
      pageable: true,
      columns: [
        { field: 'OrderID', title: 'ID', width: '70px' },
        { field: 'ShipCountry', title: 'Ship Country', width: '110px' },
        { field: 'ShipAddress', title: 'Ship Address' },
        { field: 'ShipName', title: 'Ship Name', width: '300px' }
      ]
    });
  }

  onDataBound(e) {
    let grid = e.sender;
    grid.expandRow(grid.tbody.find('tr.k-master-row').first());
  }
}
