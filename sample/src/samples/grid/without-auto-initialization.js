export class WithoutAutoInitialization {
  datasource = new kendo.data.DataSource();

  attached() {
    this.getData()
    .then(data => {
      this.datasource.data(data);
      this.gridVM.recreate(); // initialize the grid

      kendo.jQuery(this.loading).hide();
    });
  }

  getData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {ProductName: 'foo'},
          {ProductName: 'bar'}
        ]);
      }, 1000);
    });
  }
}
