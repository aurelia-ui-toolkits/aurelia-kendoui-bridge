export class TwoWayBinding {
  constructor() {
    this.datasource = new kendo.data.DataSource({
      transport: {
        read: (options) => {
          options.success(this.data);
        },
        update: (options) => {
          console.log('There were changes detected'); // eslint-disable-line no-console
          options.success();
        },
        create: (options) => {
          // assign ID as otherwise Kendo things it hasn't been created yet
          options.data.models.forEach(i => i.ProductID = Math.floor((Math.random() * 99999999) + 1));
          options.success();
        },
        destroy: (options) => {
          options.success();
        }
      },
      batch: true,
      pageSize: 8,
      schema: {
        model: {
          id: 'ProductID',
          fields: {
            ProductName: { validation: { required: true } }
          }
        }
      }
    });
  }

  attached() {
    // Kendo will see that this is an ObservableArray
    // and it will not clone the array, but use this array directly
    // allowing you to push/pop to this array directly
    this.data = new kendo.data.ObservableArray([
      {ProductName: 'foo', Category: 'Food', ProductID: 1},
      {ProductName: 'bar', Category: 'Food', ProductID: 2}
    ]);
  }

  save() {
    this.grid.saveChanges();
  }

  addNew() {
    this.data.push({ProductName: 'hello'});
  }

  updateItem() {
    // use .set() to change variables, otherwise it isn't picked up by Kendo
    let lastItem = this.data[this.data.length - 1];
    lastItem.set('ProductName', 'abcd');
  }

  removeItem() {
    this.data.pop();
  }

  updateProp(item, property) {
    // raise the change event so that the grid knows that a property has changed and will make the grid reflect the change
    item.trigger('change', { field: property });
    item.dirty = true;
  }
}
