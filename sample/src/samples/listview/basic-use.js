import 'kendo-ui/js/kendo.pager.min';
import {products} from './resources/products';

export class BasicUse {

  dataSource = new kendo.data.DataSource({
    data: products,
    pageSize: 21
  });

  attached() {
    $(this.pager).kendoPager({
      dataSource: this.dataSource
    });
  }
}
