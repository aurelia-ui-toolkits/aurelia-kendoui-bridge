export class CascadingDropDownList {
  viewOrder() {
    let categoryInfo = '\nCategory: { id: ' + this.categories.widget.value() + ', name: ' + this.categories.widget.text() + ' }';
    let productInfo = '\nProduct: { id: ' + this.products.widget.value() + ', name: ' + this.products.widget.text() + ' }';
    let orderInfo = '\nOrder: { id: ' + this.orders.widget.value() + ', name: ' + this.orders.widget.text() + ' }';

    alert('Order details:\n' + categoryInfo + productInfo + orderInfo);
  }
}
