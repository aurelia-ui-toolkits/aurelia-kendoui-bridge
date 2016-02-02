export class Api {
  select(e) {
    let colorId = e.value.substring(1);
    $('.product-image').attr('src', 'http://demos.telerik.com/kendo-ui/content/web/colorpicker/sofa-' + colorId + '.jpg');
  }
}
