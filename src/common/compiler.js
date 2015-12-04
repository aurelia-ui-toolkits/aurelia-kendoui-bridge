import {inject, ViewCompiler, ViewResources, Container} from 'aurelia-framework';

/**
* Compiler service
*
* compiles an HTML element with aurelia
*/
@inject(ViewCompiler, ViewResources, Container)
export class Compiler {

  constructor(viewCompiler, resources, container) {
    this.viewCompiler = viewCompiler;
    this.resources = resources;
    this.container = container;
  }

  compile(templateOrFragment, ctx = null, viewSlot = null):any {
    if (typeof templateOrFragment === 'string') {
      let temp = document.createElement('span');
      temp.innerHTML = templateOrFragment;
      templateOrFragment = temp;
    }

    let view = this.viewCompiler.compile(templateOrFragment, this.resources).create(this.container, ctx);

    return view;
  }
}
