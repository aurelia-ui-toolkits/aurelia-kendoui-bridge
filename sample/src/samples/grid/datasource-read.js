export class DatasourceRead {
  datasource = new kendo.data.DataSource({
    transport: {
      read: (options) => {

        // here you can do an async API call to get your data
        // or use a local array with data
        // when you have all the data that you need you can call options.success()

        // the options variable contains information about pagination, filtering etc so
        // that can be used when doing an query

        options.success(this.contacts);
      }
    }
  });

  constructor() {
    this.contacts = [{
      ContactName: 'jeroen'
    }, {
      ContactName: 'charles'
    }, {
      ContactName: 'nikolaj'
    }];
  }

  addRecord() {
    this.contacts.push({ ContactName: 'someone else' });
    this.datasource.read();
  }
}
