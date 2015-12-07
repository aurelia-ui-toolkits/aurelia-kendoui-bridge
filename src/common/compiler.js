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
  }

  compile(templateOrFragment):any {
    let view = this.viewCompiler.compile(templateOrFragment, this.resources).create();

    return view;
  }
}
