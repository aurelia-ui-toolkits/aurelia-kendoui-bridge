import {bindable, noView, inject, customElement} from 'aurelia-framework';
import showdown from 'showdown';
import {Loader}  from 'aurelia-loader';

@customElement('au-markdown')
@noView
@inject(Element, Loader)
export class AuMarkdown {

  @bindable url;

  constructor(element, loader) {
    this.element = element;
    this.loader = loader;
    this.converter = new showdown.Converter();
  }

  urlChanged() {
    if (this.url) {
      this.loader.loadText(this.url)
      .then(text => {
        this.element.innerHTML = this.converter.makeHtml(text);
      });
    } else {
      this.element.innerHTML = '';
    }
  }
}
