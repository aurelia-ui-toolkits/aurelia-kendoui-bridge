import { inject, bindable, customAttribute } from 'aurelia-framework';
import showdown from 'github:showdownjs/showdown@1.3.0';

@customAttribute("au-markdown")
@inject(Element)
export class AuMarkdown {

	block;
	@bindable value;

	constructor(element){
	    this.parent = element.parentNode;
	    this.text = element.value;
	    var span = document.createElement("span");
	    element.parentNode.insertBefore(span, element.nextSibling);

	    this.converter = new showdown.Converter();
	  	span.innerHTML = this.converter.makeHtml(this.text);
	    this.parent.removeChild(element);
	    this.block = span;
	}

	attached() {
	    hljs.highlightBlock(this.block);
	}
}
