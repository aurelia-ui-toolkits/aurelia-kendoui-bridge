declare module 'aurelia-kendoui-plugin' {
  import 'kendo-ui/js/kendo.autocomplete.min';
  import * as $ from 'jquery';
  import 'kendo-ui/js/kendo.button.min';
  import 'kendo-ui/js/kendo.grid.min';
  import 'kendo-ui/js/kendo.tabstrip.min';
  import { customAttribute, bindable, bindingMode, inject, customElement }  from 'aurelia-framework';
  import { getLogger }  from 'aurelia-logging';
  export function configure(aurelia: any, configCallback: any): any;
  class kendoConfigBuilder {
    resources: any;
    core(): any;
    pro(): any;
    kendoButton(): any;
    kendoTabStrip(): any;
    kendoAutoComplete(): any;
  }
  
  // @bindable({ name: 'value', changeHandler: 'valueChanged', defaultValue: [], defaultBindingMode: bindingMode.twoWay })
  // @bindable({ name: 'data', changeHandler: 'dataChanged', defaultValue: [], defaultBindingMode: bindingMode.oneWay })
  // @bindable({ name: 'options', changeHandler: 'optionsChanged', defaultValue: {}, defaultBindingMode: bindingMode.oneWay })
  // @bindable({ name: 'class', defaultValue: '', defaultBindingMode: bindingMode.oneWay })
  export class AuKendoAutoComplete {
    element: any;
    options: any;
    animation: any;
    dataSource: any;
    dataTextField: any;
    delay: any;
    enable: any;
    filter: any;
    fixedGroupTemplate: any;
    groupTemplate: any;
    height: any;
    highlightFirst: any;
    ignoreCase: any;
    minLength: any;
    placeholder: any;
    popup: any;
    separator: any;
    suggest: any;
    headerTemplate: any;
    template: any;
    valuePrimitive: any;
    virtual: any;
    value: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
    getOptions(): any;
    enableChanged(newValue: any): any;
  }
  
  //  Handlers
  //  AuKendoAutoComplete.prototype.valueChanged = function(value) {
  //      if (this._dataComponent) {
  //          let textfield = (this.options || {}).dataTextField;
  //          this._dataComponent.value(textfield !== null ? value[textfield] : value);
  //      }
  //  };
  //  AuKendoAutoComplete.prototype.dataChanged = function(value) {
  //      if (this._dataComponent) {
  //          this._dataComponent.setDataSource(new Kendo.data.DataSource({
  //              data: value
  //          }));
  //      }
  //  };
  //  AuKendoAutoComplete.prototype.optionsChanged = function(value) {
  //      if (this._dataComponent) {
  //          this._dataComponent.setOptions(value);
  //      }
  //  };
  export class AuKendoButton {
    enable: any;
    icon: any;
    imageUrl: any;
    spriteCssClass: any;
    options: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
    getOptions(): any;
    enableChanged(newValue: any): any;
  }
  export function fireEvent(element: any, name: any): any;
  export function pruneOptions(options: any): any;
  export class Grid {
    host: any;
    constructor();
    attached(): any;
    detached(): any;
    getOptions(): any;
    enableChanged(newValue: any): any;
  }
  export class TabStrip {
    animation: any;
    collapsible: any;
    contentUrls: any;
    dataContentField: any;
    dataContentUrlField: any;
    dataSpriteCssClass: any;
    dataTextField: any;
    dataUrlField: any;
    navigatable: any;
    scrollable: any;
    tabPosition: any;
    value: any;
    enable: any;
    options: any;
    constructor(element: any);
    attached(): any;
    detached(): any;
    getOptions(): any;
    enableChanged(newValue: any): any;
  }
}