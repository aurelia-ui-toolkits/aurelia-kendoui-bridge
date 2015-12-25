import products from './binding-to-local-data.json!';

export class BindingToLocalData {

  pageable = {
    refresh: true,
    pageSizes: true
  };

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
}
