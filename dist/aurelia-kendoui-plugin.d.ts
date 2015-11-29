declare module 'aurelia-kendoui-plugin' {
  import 'kendo-ui/js/kendo.autocomplete.min';
  import * as $ from 'jquery';
  import 'kendo-ui/js/kendo.button.min';
  import 'kendo-ui/js/kendo.grid.min';
  import 'kendo-ui/js/kendo.tabstrip.min';
  import { customAttribute, bindable, inject, customElement }  from 'aurelia-framework';
  import { getLogger }  from 'aurelia-logging';
  export function configure(aurelia: any, configCallback: any): any;
  class KendoConfigBuilder {
    resources: any;
    core(): any;
    pro(): any;
    kendoButton(): any;
    kendoTabStrip(): any;
    kendoAutoComplete(): any;
  }
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