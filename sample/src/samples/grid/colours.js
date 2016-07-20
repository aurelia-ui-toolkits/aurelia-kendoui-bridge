export class Colours {

  pageable = {
    refresh: true,
    pageSizes: true,
    buttonCount: 10
  };

  constructor() {
    this.datasource = {
      data: [
        { ID: 1, ProductName: 'Foo', UnitsInStock: 9, Discontinued: false },
        { ID: 2, ProductName: 'Bar', UnitsInStock: 16, Discontinued: false },
        { ID: 3, ProductName: 'Baz', UnitsInStock: 3, Discontinued: true }
      ],
      schema: {
        model: {
          id: 'ID',
          fields: {
            ID: { type: 'number' },
            ProductName: { },
            UnitsInStock: { type: 'number' },
            Discontinued: { type: 'boolean' }
          }
        }
      }
    };
  }

  getUnitsInStockClass(units) {
    if (units < 5) {
      return 'critical';
    } else if (units < 10) {
      return 'warning';
    } else {
      return 'ok';
    }
  }

  dataBound(e) {
    // get the index of the UnitsInStock cell
    let columnIndex = e.sender.wrapper.find('.k-grid-header [data-field=' + 'UnitsInStock' + ']').index();

    // iterate the data items and apply row styles where necessary
    let dataItems = e.sender.dataSource.view();
    for (let j = 0; j < dataItems.length; j++) {
      let units = dataItems[j].get('UnitsInStock');
      let discontinued = dataItems[j].get('Discontinued');

      let row = e.sender.tbody.find('[data-uid="' + dataItems[j].uid + '"]');
      if (discontinued) {
        row.addClass('discontinued');
      }

      let cell = row.children().eq(columnIndex);
      cell.addClass(this.getUnitsInStockClass(units));
    }
  }
}
