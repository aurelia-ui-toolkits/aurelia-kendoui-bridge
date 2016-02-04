export class Selection {

  dataSource = new kendo.data.DataSource({
    transport: {
      read: {
        url: '//demos.telerik.com/kendo-ui/service/Products',
        dataType: 'jsonp'
      }
    },
    pageSize: 21
  });

  attached() {
    $(this.pager).kendoPager({
      dataSource: this.dataSource
    });
  }

  dataBound() {
    this.logger.log('ListView data bound');
  }

  change() {
    let data = this.listView.dataSource.view();
    let selected = $.map(this.listView.select(), item => data[$(item).index()].ProductName );

    this.logger.log(`Selected: ${selected.length} item(s), [${selected.join(' ')}]`);
  }
}
