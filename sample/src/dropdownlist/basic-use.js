export class BasicUse {
    data = [{
        text: "Black",
        value: "1"
    }, {
        text: "Orange",
        value: "2"
    }, {
        text: "Grey",
        value: "3"
    }];

    onChange() {
    	var value = this.capColor.widget.value();
    
        $("#cap")
        	.toggleClass("black-cap", value == 1)
            .toggleClass("orange-cap", value == 2)
            .toggleClass("grey-cap", value == 3);
	}

    buyCap() {
		alert('Thank you! Your Choice is:\n\nColor ID: ' + this.capColor.widget.value() + ' and Size: ' + this.capSize.widget.value());
	}
}
