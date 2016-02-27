import {products} from './products';

export class LocalBinding {
  dataSource = new kendo.data.PivotDataSource({
    data: products,
    schema: {
      model: {
        fields: {
          ProductName: { type: 'string' },
          UnitPrice: { type: 'number' },
          UnitsInStock: { type: 'number' },
          Discontinued: { type: 'boolean' },
          CategoryName: { field: 'Category.CategoryName' }
        }
      },
      cube: {
        dimensions: {
          ProductName: { caption: 'All Products' },
          CategoryName: { caption: 'All Categories' },
          Discontinued: { caption: 'Discontinued' }
        },
        measures: {
          'Sum': { field: 'UnitPrice', format: '{0:c}', aggregate: 'sum' },
          'Average': { field: 'UnitPrice', format: '{0:c}', aggregate: 'average' }
        }
      }
    },
    columns: [{ name: 'CategoryName', expand: true }, { name: 'ProductName' } ],
    rows: [{ name: 'Discontinued', expand: true }],
    measures: ['Sum']
  });
}
