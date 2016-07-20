import products from './binding-to-local-data.json!';

export class RowSelect {
  constructor() {
    this.datasource = {
      data: products.products,
      schema: {
        model: {
          fields: {
            ProductName: { type: 'string' },
            UnitPrice: { type: 'number' },
            UnitsInStock: { type: 'number' },
            Discontinued: { type: 'boolean' }
          }
        }
      },
      pageSize: 10
    };
  }

  rowSelected(e) {
    let grid = e.sender;
    let selectedRow = grid.select();
    let dataItem = grid.dataItem(selectedRow);
    alert(dataItem.ProductName);
  }
}
