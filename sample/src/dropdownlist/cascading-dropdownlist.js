export class CascadingDropDownList {
	viewOrder() {
		var categoryInfo = "\nCategory: { id: " + this.categories.widget.value() + ", name: " + this.categories.widget.text() + " }",
        	productInfo = "\nProduct: { id: " + this.products.widget.value() + ", name: " + this.products.widget.text() + " }",
            orderInfo = "\nOrder: { id: " + this.orders.widget.value() + ", name: " + this.orders.widget.text() + " }";

            alert("Order details:\n" + categoryInfo + productInfo + orderInfo);    
	}
}