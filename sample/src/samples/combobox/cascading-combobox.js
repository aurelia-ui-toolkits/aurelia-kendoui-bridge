export class CascadingDropDownList {
  viewOrder() {
    let categoryInfo = `\nCategory: { id: ${this.categories.value()}, name: ${this.categories.text()} }`;
    let productInfo = `\nProduct: { id: ${this.products.value()}, name: ${this.products.text()} }`;
    let orderInfo = `\nOrder: { id: ${this.orders.value()}, name: ${this.orders.text()} }`;

    alert(`Order details:\n ${categoryInfo}${productInfo}${orderInfo}`);
  }
}
