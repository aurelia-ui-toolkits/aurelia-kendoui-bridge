import {bindable, customElement} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {Loader} from 'aurelia-loader';

@customElement('api')
@inject(Loader)
export class API {
  @bindable namespace;

  constructor(loader) {
    this.loader = loader;
  }

  show() {
    if (!this.namespace) {
      return;
    }

    let path = this.namespace.replace('kendo.', '').replace('.', '/');

    this.loader.loadModule(`doc/kendo-api/${path}.json!`)
    .then(data => {
      this.currentAPI = data;
      this.window.title(this.currentAPI.name);
      this.window.center().open();

      this.fillPanelBar();
    });
  }

  fillPanelBar() {
    this.currentAPI.children.forEach(category => {
      let item = {
        text: category.name,
        items: []
      };

      category.children.forEach(child => {
        item.items.push({
          text: child.name
        });
      });

      this.panelBar.append(item);
    });
  }

  namespaceChanged() {
    if (this.namespace) {
      console.log(this.namespace);
    }
  }
}
