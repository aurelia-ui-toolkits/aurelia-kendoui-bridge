export class VirtualizationOfRemoteData {
  constructor() {
    this.datasource = {
      type: 'odata',
      serverPaging: true,
      serverSorting: true,
      pageSize: 100,
      transport: {
        read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Orders'
      }
    };
  }

  disablePageScroll() {
    jQuery('.page-host').css('overflow-y', 'hidden');
  }
}
