import {bindable,noView,customElement,processContent} from 'aurelia-framework';
import showdown from 'showdown';

@processContent(false)
@customElement("au-markdown")
@noView
export class AuMarkdown {

  @bindable model = null;

  static inject = [Element];
  constructor(element){
    this.element = element;
    this.converter = new showdown.Converter();
  }

  attached(){
    this.root = this.element.shadowRoot || this.element;
    if(!this.model) {
      this.valueChanged(this.element.innerHTML);
    }else{
      this.valueChanged(this.model);
    }
  }

  modelChanged(){
    this.valueChanged(this.model);
  }

  valueChanged(newValue){
    if(!this.root) return;
    this.root.innerHTML = this.converter.makeHtml(dedent(newValue));
  }
}

function dedent(str){
  var match = str.match(/^[ \t]*(?=\S)/gm);
  if (!match) return str;

  var indent = Math.min.apply(Math, match.map(function (el) {
    return el.length;
  }));

  var re = new RegExp('^[ \\t]{' + indent + '}', 'gm');
  return indent > 0 ? str.replace(re, '') : str;
}
