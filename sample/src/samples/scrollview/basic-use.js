import * as _500px from './500px';

export class BasicUse {
  _500pxDS = new kendo.data.DataSource({
    transport: {
      read: function(options) {
        let params = {
          feature: 'popular',
          exclude: 'Nude',
          image_size: 4,
          page: options.data.page,
          rpp: options.data.pageSize
        };

        _500px.api('/photos', params, function(response) {
          options.success(response.data);
        });
      }
    },
    serverPaging: true,
    pageSize: 30,
    schema: {
      data: 'photos',
      total: 'total_items'
    }
  });

  constructor() {
    _500px.init({
      sdk_key: 'a3be03a8a98d6e05af17f60d2cf4bf696eb47555'
    });
  }

  prev() {
    this.scrollview.prev();
  }

  next() {
    this.scrollview.next();
  }
}
