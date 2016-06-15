import 'aurelia-polyfills';
import {TemplatingEngine} from 'aurelia-templating';
import {createScopeForTest} from 'aurelia-binding';
import {BehaviorInstruction, Controller} from 'aurelia-templating';


TemplatingEngine.prototype.createViewModelForUnitTest = function(viewModelType, attributesFromHTML, bindingContext) {
  let controller = this.createControllerForUnitTest(viewModelType, attributesFromHTML);
  controller.bind(createScopeForTest(bindingContext));
  return controller.viewModel;
};

TemplatingEngine.prototype.createControllerForUnitTest = function(viewModelType, attributesFromHTML) {
  let exportName = viewModelType.name;
  let resourceModule = this._moduleAnalyzer.analyze('test-module', { [exportName]: viewModelType }, exportName);
  let description = resourceModule.mainResource;

  description.initialize(this._container);

  let viewModel = this._container.get(viewModelType);
  let instruction = BehaviorInstruction.unitTest(description, attributesFromHTML);

  return new Controller(description.metadata, instruction, viewModel);
}
