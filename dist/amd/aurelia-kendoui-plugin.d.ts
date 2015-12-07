declare module 'aurelia-kendoui-plugin' {
  import * as LogManager from 'aurelia-logging';
  import 'jquery';
  import 'kendo-ui/js/kendo.autocomplete.min';
  import 'kendo-ui/js/kendo.button.min';
  import 'kendo-ui/js/kendo.grid.min';
  import 'kendo-ui/js/kendo.scheduler.min';
  import 'kendo-ui/js/kendo.tabstrip.min';
  import 'kendo-ui/js/kendo.toolbar.min';
  import { customAttribute, bindable, inject, ViewCompiler, ViewResources, Container, customElement, processContent, TargetInstruction }  from 'aurelia-framework';
  import { ViewSlot }  from 'aurelia-templating';
  export function configure(aurelia: any, configCallback: any): any;
  class KendoConfigBuilder {
    resources: any;
    core(): any;
    pro(): any;
    kendoAutoComplete(): any;
    kendoButton(): any;
    kendoCombobox(): any;
    kendoDropDownList(): any;
    kendoGrid(): any;
    kendoScheduler(): any;
    kendoTabStrip(): any;
    kendoToolbar(): any;
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
    bind(): any;
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
    bind(): any;
    detached(): any;
    getOptions(): any;
    enableChanged(newValue: any): any;
  }
  
  /**
  * Compiler service
  *
  * compiles an HTML element with aurelia
  */
  export class Compiler {
    constructor(viewCompiler: any, resources: any, container: any);
    compile(templateOrFragment: any): any;
  }
  export function fireEvent(element: any, name: any): any;
  export function pruneOptions(options: any): any;
  export class Grid {
    columns: any;
    selectable: any;
    filterable: any;
    pageable: any;
    sortable: any;
    pageSize: any;
    page: any;
    selectedItem: any;
    selectedItems: any;
    autoBind: any;
    resizable: any;
    reorderable: any;
    editable: any;
    sort: any;
    group: any;
    dataSource: any;
    groupable: any;
    constructor(element: any, compiler: any, targetInstruction: any);
    bind(ctx: any): any;
    detached(): any;
    getOptions(): any;
    enableChanged(newValue: any): any;
  }
  
  //  @customAttribute('au-kendo-button')
  export class AuScheduler {
    options: any;
    constructor(element: any);
    bind(): any;
    
    // this._component = $(this.element).kendoButton(this.getOptions()).data('kendoButton');
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
    bind(): any;
    detached(): any;
    getOptions(): any;
    enableChanged(newValue: any): any;
  }
  
  //  @customAttribute('au-kendo-button')
  export class AuToolbar {
    options: any;
    constructor(element: any);
    bind(): any;
    
    // this._component = $(this.element).kendoButton(this.getOptions()).data('kendoButton');
    detached(): any;
    getOptions(): any;
    enableChanged(newValue: any): any;
  }
}