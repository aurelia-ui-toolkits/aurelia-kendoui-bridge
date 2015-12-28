declare module 'aurelia-kendoui-plugin' {
  import * as LogManager from 'aurelia-logging';
  import 'jquery';
  import 'kendo-ui/js/kendo.pdf.min';
  import 'kendo-ui/js/jszip.min';
  import 'kendo-ui/js/kendo.autocomplete.min';
  import 'kendo-ui/js/kendo.virtuallist.min';
  import 'kendo-ui/js/kendo.button.min';
  import 'kendo-ui/js/kendo.dataviz.chart.min';
  import 'kendo-ui/js/kendo.dataviz.chart.polar.min';
  import 'kendo-ui/js/kendo.dataviz.chart.funnel.min';
  import 'kendo-ui/js/kendo.dataviz.sparkline.min';
  import 'kendo-ui/js/kendo.dataviz.stock.min';
  import 'kendo-ui/js/kendo.dataviz.treemap.min';
  import 'kendo-ui/js/kendo.colorpicker.min';
  import 'kendo-ui/js/kendo.dropdownlist.min';
  import 'kendo-ui/js/kendo.filtercell.min';
  import 'kendo-ui/js/kendo.grid.min';
  import 'kendo-ui/js/kendo.menu.min';
  import 'kendo-ui/js/kendo.progressbar.min';
  import 'kendo-ui/js/kendo.slider.min';
  import 'kendo-ui/js/kendo.tabstrip.min';
  import { customAttribute, bindable, inject, customElement, noView, TaskQueue, processContent, TargetInstruction, children }  from 'aurelia-framework';
  import { BindableProperty, HtmlBehaviorResource, TemplatingEngine }  from 'aurelia-templating';
  import { metadata }  from 'aurelia-metadata';
  import { Container }  from 'aurelia-dependency-injection';
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
    kendoChart(): any;
    kendoProgressBar(): any;
    kendoSlider(): any;
    kendoColorPicker(): any;
  }
  export class AutoComplete extends WidgetBase {
    options: any;
    kDataSource: any;
    value: any;
    constructor(element: any, templateCompiler: any);
    bind(ctx: any): any;
    recreate(): any;
    enableChanged(newValue: any): any;
    setValue(newValue: any): any;
    getValue(newValue: any): any;
    search(value: any): any;
  }
  export class Button extends WidgetBase {
    options: any;
    constructor(element: any);
    bind(): any;
    recreate(): any;
    kEnableChanged(newValue: any): any;
  }
  export class Chart extends WidgetBase {
    options: any;
    kDataSource: any;
    constructor(element: any);
    attached(): any;
    recreate(): any;
    exportImage(options: any): any;
    exportPDF(options: any): any;
    exportSVG(options: any): any;
    getAxis(name: any): any;
    redraw(): any;
    refresh(): any;
    resize(): any;
    saveAsPDF(): any;
    setDataSource(dataSource: any): any;
  }
  export class Sparkline extends WidgetBase {
    options: any;
    kDataSource: any;
    constructor(element: any);
    attached(): any;
    recreate(): any;
  }
  export class Stock extends WidgetBase {
    options: any;
    kDataSource: any;
    constructor(element: any);
    attached(): any;
    recreate(): any;
  }
  export class TreeMap extends WidgetBase {
    options: any;
    kDataSource: any;
    constructor(element: any);
    attached(): any;
    recreate(): any;
  }
  export class ColorPicker extends WidgetBase {
    options: any;
    constructor(element: any);
    bind(): any;
  }
  export const constants: any;
  
  //  creates a BindableProperty for every option defined
  //  in the option property of a Kendo control
  export function generateBindables(controlName: any): any;
  export function fireEvent(element: any, name: any, data?: any): any;
  export function fireKendoEvent(element: any, name: any, data?: any): any;
  export * from 'aurelia-kendoui-plugin/events';
  export * from 'aurelia-kendoui-plugin/options';
  export * from 'aurelia-kendoui-plugin/template-compiler';
  export * from 'aurelia-kendoui-plugin/widget-base';
  export * from 'aurelia-kendoui-plugin/decorators';
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
  export function addHyphenAndLower(char: any): any;
  export function getBindablePropertyName(propertyName: any): any;
  export function getEventsFromAttributes(element: any): any;
  export class WidgetBase {
    constructor(controlName: any, element: any);
    getOptionsFromBindables(): any;
    
    //  sets the default value of all bindable properties
    //  gets the value from the options object in the Kendo control itself
    setDefaultBindableValues(): any;
    getEventOptions(ctor: any): any;
    detached(): any;
  }
  export class DropDownList extends WidgetBase {
    options: any;
    kDataSource: any;
    kValue: any;
    constructor(element: any, templateCompiler: any);
    bind(ctx: any): any;
    recreate(): any;
    enableChanged(newValue: any): any;
    kValueChanged(newValue: any): any;
    select(index: any): any;
    search(value: any): any;
  }
  export class AuCol {
    aggregates: any;
    attributes: any;
    columns: any;
    command: any;
    editor: any;
    encoded: any;
    field: any;
    filterable: any;
    footerTemplate: any;
    format: any;
    groupable: any;
    groupFooterTemplate: any;
    groupHeaderTemplate: any;
    headerAttributes: any;
    headerTemplate: any;
    hidden: any;
    lockable: any;
    locked: any;
    menu: any;
    minScreenWidth: any;
    sortable: any;
    template: any;
    title: any;
    values: any;
    width: any;
    template: any;
    constructor(targetInstruction: any);
  }
  export class Grid extends WidgetBase {
    columns: any;
    options: any;
    kDataSource: any;
    constructor(element: any, templateCompiler: any);
    bind(ctx: any): any;
    
    //  initialization in bind() is giving issues in some scenarios
    //  so, attached() is used for this control
    attached(): any;
    recreate(): any;
    enableChanged(newValue: any): any;
  }
  export class Menu extends WidgetBase {
    options: any;
    kDataSource: any;
    constructor(element: any);
    bind(): any;
    recreate(): any;
  }
  export class ProgressBar extends WidgetBase {
    options: any;
    constructor(element: any);
    bind(): any;
    enableChanged(newValue: any): any;
    valueChanged(newValue: any): any;
  }
  export class AuScheduler {
  }
  export class Slider extends WidgetBase {
    options: any;
    constructor(element: any);
    attached(): any;
    enableChanged(newValue: any): any;
  }
  
  //  valueChanged(newValue) {
  //  this.widget.value(newValue);
  //  }
  export class TabStrip extends WidgetBase {
    options: any;
    constructor(element: any);
    bind(): any;
    recreate(): any;
    enableChanged(newValue: any): any;
  }
  export class AuToolbar {
  }
}