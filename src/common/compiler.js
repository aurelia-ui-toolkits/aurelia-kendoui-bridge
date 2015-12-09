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

  compile(templateOrFragment):any {
    let view = this.viewCompiler.compile(templateOrFragment, this.resources).create(this.container);

    return view;
  }
}
