declare module 'aurelia-kendoui-plugin' {
  import * as LogManager from 'aurelia-logging';
  import 'jquery';
  import 'kendo-ui/js/kendo.button.min';
  import 'kendo-ui/js/kendo.autocomplete.min';
  import 'kendo-ui/js/kendo.grid.min';
  import 'kendo-ui/js/kendo.menu.min';
  import 'kendo-ui/js/kendo.tabstrip.min';
  import { customAttribute, bindable, inject, noView, processContent, TargetInstruction, children, customElement }  from 'aurelia-framework';
  import { TemplatingEngine }  from 'aurelia-templating';
  export function configure(aurelia: any, configCallback: any): any;
  class KendoConfigBuilder {
    resources: any;
    core(): any;
    pro(): any;
    kendoAutoComplete(): any;
    kendoButton(): any;
    kendoMenu(): any;
    kendoCombobox(): any;
    kendoDropDownList(): any;
    kendoGrid(): any;
    kendoScheduler(): any;
    kendoTabStrip(): any;
    kendoToolbar(): any;
  }
  export class AuKendoButton {
    enable: any;
    icon: any;
    imageUrl: any;
    spriteCssClass: any;
    options: any;
    constructor(element: any);
    bind(): any;
    recreate(): any;
    getOptions(): any;
    enableChanged(newValue: any): any;
    detached(): any;
  }
  export class AuKendoAutoComplete {
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
    constructor(element: any, templateCompiler: any);
    bind(ctx: any): any;
    recreate(): any;
    getOptions(): any;
    enableChanged(newValue: any): any;
    detached(): any;
  }
  export function fireEvent(element: any, name: any, data?: any): any;
  export function fireKendoEvent(element: any, name: any, data?: any): any;
  export * from 'aurelia-kendoui-plugin/events';
  export * from 'aurelia-kendoui-plugin/options';
  export * from 'aurelia-kendoui-plugin/template-compiler';
  export function pruneOptions(options: any): any;
  export class TemplateCompiler {
    constructor(templatingEngine: any);
    initialize($parent: any): any;
    
    //  this function filters out compile and cleanup events
    //  and calls the compile or cleanup function with the needed arguments
    handleTemplateEvents(_event: any, _args: any): any;
    
    //  loops through each element, and find the matching dataitem
    //  and calls enhanceView(element, dataItem) for each element there is
    compile(elements: any, data: any): any;
    
    //  uses the ehance function of Aurelia's TemplatingEngine
    //  to "compile" the existing DOM element
    enhanceView(element: any, ctx: any): any;
    
    //  loops through each element kendo asks us to clean up
    //  calls cleanupView() for each element
    cleanup(elements: any): any;
    
    //  cleans up the view kendo has asked us to clean up
    cleanupView(element: any): any;
  }
  export class AuCol {
    title: any;
    field: any;
    format: any;
    command: any;
    width: any;
    lockable: any;
    locked: any;
    template: any;
    constructor(targetInstruction: any);
  }
  export class Grid {
    columns: any;
    autoBind: any;
    columnMenu: any;
    dataSource: any;
    editable: any;
    filterable: any;
    group: any;
    groupable: any;
    height: any;
    navigatable: any;
    page: any;
    pageable: any;
    sortable: any;
    pageSize: any;
    scrollable: any;
    selectable: any;
    selectedItem: any;
    selectedItems: any;
    sort: any;
    reorderable: any;
    resizable: any;
    toolbar: any;
    constructor(element: any, templateCompiler: any);
    bind(ctx: any): any;
    
    //  initialization in bind() is giving issues in some scenarios
    //  so, attached() is used for this control
    attached(): any;
    recreate(): any;
    getOptions(): any;
    enableChanged(newValue: any): any;
    detached(): any;
  }
  export class Menu {
    options: any;
    dataSource: any;
    closeOnClick: any;
    animation: any;
    direction: any;
    hoverDelay: any;
    orientation: any;
    popupCollision: any;
    constructor(element: any);
    bind(): any;
    recreate(): any;
    getOptions(): any;
    detached(): any;
  }
  export class AuScheduler {
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
    bind(): any;
    recreate(): any;
    getOptions(): any;
    enableChanged(newValue: any): any;
    detached(): any;
  }
  export class AuToolbar {
  }
}