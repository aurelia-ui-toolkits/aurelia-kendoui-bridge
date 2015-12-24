export class CustomizingTemplates {

  template = '<span class="k-state-default" style="background-image: url(\'http://demos.telerik.com/kendo-ui/content/web/Customers/${data.CustomerID}.jpg\')"></span>' +
              '<span class="k-state-default"><h3>${data.ContactName}</h3><p>${data.CompanyName}</p></span>';

  headerTemplate = '<div class="dropdown-header k-widget k-header">' +
                        '<span>Photo</span>' +
                        '<span>Contact info</span>' +
                    '</div>';

  constructor() {
    this.datasource = {
      transport: {
        read: {
          dataType: 'jsonp',
          url: '//demos.telerik.com/kendo-ui/service/Customers'
        }
      }
    };
  }
}
