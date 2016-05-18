export class Datasource {
  datasource = new kendo.data.DataSource({
    transport: {
      read: (o) => {
        this.apiCall()
        .then(data => {
          o.success(data);
        });
      }
    }
  });

  // returns data, could be an API call
  apiCall() {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve([
          { text: 'red', value: 'red' },
          { text: 'blue', value: 'blue' }
        ]);
      }, 1000);
    });
  }
}
