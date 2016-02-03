import 'kendo-ui/js/kendo.pager.min';

export class BindingToRemoteData {

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
}
