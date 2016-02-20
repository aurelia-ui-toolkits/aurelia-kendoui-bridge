import products from './editing-custom-editor.json!';

export class EditingCustomEditor {
  categoryTemplate = '${Category.CategoryName}';

  dataSource = new kendo.data.DataSource({
    pageSize: 20,
    data: products.products,
    autoSync: true,
    schema: {
      model: {
        id: 'ProductID',
        fields: {
          ProductID: { editable: false, nullable: true },
          ProductName: { validation: { required: true } },
          Category: { defaultValue: { CategoryID: 1, CategoryName: 'Beverages'} },
          UnitPrice: { type: 'number', validation: { required: true, min: 1} }
        }
      }
    }
  });

  categoryDropDownEditor(container, options) {
    $('<input required data-text-field="CategoryName" data-value-field="CategoryID" data-bind="value:' + options.field + '"/>')
    .appendTo(container)
    .kendoDropDownList({
      autoBind: false,
      dataSource: {
        type: 'odata',
        transport: {
          read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Categories'
        }
      }
    });
  }
}
