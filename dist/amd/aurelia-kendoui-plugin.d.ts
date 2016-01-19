declare module 'aurelia-kendoui-plugin' {
  import * as LogManager from 'aurelia-logging';
  import 'jquery';
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
  import 'kendo-ui/js/kendo.datepicker.min';
  import 'kendo-ui/js/kendo.dropdownlist.min';
  import 'kendo-ui/js/kendo.data.signalr.min';
  import 'kendo-ui/js/kendo.filtercell.min';
  import 'kendo-ui/js/kendo.grid.min';
  import 'kendo-ui/js/kendo.menu.min';
  import 'kendo-ui/js/kendo.pdf.min';
  import 'kendo-ui/js/jszip.min';
  import 'kendo-ui/js/kendo.progressbar.min';
  import 'kendo-ui/js/kendo.slider.min';
  import 'kendo-ui/js/kendo.tabstrip.min';
  import 'kendo-ui/js/kendo.treeview.min';
  import { Aurelia, customAttribute, bindable, inject, customElement, TaskQueue, noView, processContent, TargetInstruction, children }  from 'aurelia-framework';
  import { BindableProperty, HtmlBehaviorResource, TemplatingEngine }  from 'aurelia-templating';
  import { metadata }  from 'aurelia-metadata';
  import { Container }  from 'aurelia-dependency-injection';
  
  /**
  * Configure the Aurelia-KendoUI-plugin
  */
  export class KendoConfigBuilder {
    resources: string[];
    useGlobalResources: boolean;
    
    /**
      * Globally register all Kendo Core wrappers
      */
    core(): KendoConfigBuilder;
    
    /**
      * Globally register all Kendo Core and Kendo Pro wrappers
      */
    pro(): KendoConfigBuilder;
    
    /**
      * Don't globalize any resources
      * Allows you to import wrappers yourself via <require></require>
      */
    withoutGlobalResources(): KendoConfigBuilder;
    kendoAutoComplete(): KendoConfigBuilder;
    kendoButton(): KendoConfigBuilder;
    kendoMenu(): KendoConfigBuilder;
    kendoCombobox(): KendoConfigBuilder;
    kendoDropDownList(): KendoConfigBuilder;
    kendoGrid(): KendoConfigBuilder;
    kendoScheduler(): KendoConfigBuilder;
    kendoTabStrip(): KendoConfigBuilder;
    kendoToolbar(): KendoConfigBuilder;
    kendoChart(): KendoConfigBuilder;
    kendoProgressBar(): KendoConfigBuilder;
    kendoSlider(): KendoConfigBuilder;
    kendoColorPicker(): KendoConfigBuilder;
    kendoTreeView(): KendoConfigBuilder;
    kendoDatePicker(): KendoConfigBuilder;
  }
  export function configure(aurelia: Aurelia, configCallback?: ((builder: KendoConfigBuilder) => void)): any;
  export class AutoComplete extends WidgetBase {
    kDataSource: any;
    options: any;
    constructor(element: any);
    bind(ctx: any): any;
    kEnableChanged(): any;
    enable(newValue: any): any;
    value(newValue: any): any;
    search(value: any): any;
    close(value: any): any;
    dataItem(value: any): any;
    destroy(): any;
    focus(): any;
    readonly(value: any): any;
    refresh(): any;
    select(value: any): any;
    setDataSource(value: any): any;
    suggest(value: any): any;
  }
  export class Button extends WidgetBase {
    options: any;
    constructor(element: any);
    bind(ctx: any): any;
    kEnableChanged(): any;
    enable(enable: any): any;
  }
  
  // eslint-disable-line no-unused-vars
  export class Chart extends WidgetBase {
    kDataSource: any;
    options: any;
    constructor(element: any);
    attached(): any;
    exportImage(options: any): any;
    exportPDF(options: any): any;
    exportSVG(options: any): any;
    getAxis(name: any): any;
    redraw(): any;
    refresh(): any;
    resize(): any;
    saveAsPDF(): any;
    setDataSource(dataSource: any): any;
    setOptions(value: any): any;
    svg(): any;
    imageDataURL(): any;
    toggleHighlight(show: any, options: any): any;
    destroy(): any;
  }
  
  // eslint-disable-line no-unused-vars
  export class Sparkline extends WidgetBase {
    kDataSource: any;
    options: any;
    constructor(element: any);
    attached(): any;
    destroy(): any;
    exportImage(options: any): any;
    exportPDF(options: any): any;
    exportSVG(options: any): any;
    setDataSource(dataSource: any): any;
    setOptions(value: any): any;
    svg(): any;
    imageDataURL(): any;
    refresh(): any;
  }
  
  // eslint-disable-line no-unused-vars
  export class Stock extends WidgetBase {
    kDataSource: any;
    options: any;
    constructor(element: any);
    attached(): any;
    destroy(): any;
    exportImage(options: any): any;
    exportPDF(options: any): any;
    exportSVG(options: any): any;
    redraw(): any;
    refresh(): any;
    resize(): any;
    setDataSource(dataSource: any): any;
    svg(): any;
    imageDataURL(): any;
  }
  
  // eslint-disable-line no-unused-vars
  export class TreeMap extends WidgetBase {
    kDataSource: any;
    options: any;
    constructor(element: any);
    attached(): any;
    destroy(): any;
    setDataSource(dataSource: any): any;
    setOptions(value: any): any;
    findByUid(text: any): any;
    dataItem(tile: any): any;
    resize(): any;
  }
  export class ColorPicker extends WidgetBase {
    options: any;
    constructor(element: any);
    bind(ctx: any): any;
  }
  export const constants: any;
  
  /**
  * Creates a BindableProperty for every option defined in a Kendo control
  * in the option property of a Kendo control
  * @param controlName The Kendo control of which the options should be converted into bindable properties
  */
  export function generateBindables(controlName: string): any;
  
  /**
  * Fire DOM event on an element
  * @param element The Element which the DOM event will be fired on
  * @param name The Event's name
  * @param data Addition data to attach to an event
  */
  export function fireEvent(element: Element, name: string, data?: any): any;
  
  /**
  * Fire DOM event on an element with the k-on prefix
  * @param element The Element which the DOM event will be fired on
  * @param name The Event's name, without k-on prefix
  * @param data Addition data to attach to an event
  */
  export function fireKendoEvent(element: Element, name: string, data?: any): any;
  
  /**
  * Implicitly setting options to "undefined" for a kendo control can break things.
  * this function prunes the supplied options object and removes values that
  * aren't set to something explicit (i.e. not null)
  * @param options the options object to prune the properties of
  */
  export function pruneOptions(options: any): any;
  
  /**
  * An adaptor which uses Aurelia's enhance capability to
  * compile any template Kendo wants to have compiled
  */
  export class TemplateCompiler {
    
    /**
      * We don't need to initialize the TemplateCompiler every time a Kendo controls
      * is initialized
      */
    isInitialized: any;
    constructor(templatingEngine: any);
    
    /**
      * Initialize the template compiler and
      * patch the angular property to retrieve compilation requests
      * from Kendo controls
      * @param $parent The overrideContext to use when a template gets compiled
      */
    initialize(): any;
    
    /**
      * Gets called by Kendo, and filters out compile and cleanup events,
      * then calls the compile or cleanup function with the needed arguments
      * @param _event Events like 'compile' or 'cleanup'
      * @param _args optional array of dataitems
      */
    handleTemplateEvents(widget: any, _event: string, _args?: any): any;
    
    /**
      * loops through each element, and find the matching dataitem
      * and calls enhanceView(element, dataItem) for each element there is
      * @param elements an array of Elements or a jQuery selector
      * @param data optionally an array of dataitems
      */
    compile($parent: any, elements: any, data: any): any;
    
    /**
      * uses the enhance function of Aurelia's TemplatingEngine
      * to "compile" existing DOM elements
      * @param element The Element to compile
      * @param ctx The dataitem (context) to compile the Element with
      */
    enhanceView($parent: any, element: any, ctx: any): any;
    
    /**
      * loops through each element kendo asks us to clean up
      * calls cleanupView() for each element
      * @param element An array of elements
      */
    cleanup(elements: any): any;
    
    /**
      * cleans up the view kendo has asked us to clean up
      */
    cleanupView(element: any): any;
  }
  
  /**
  * prepends hyphen and lowercases the input char
  * @param char the char to add an hyphen in front for
  */
  export function addHyphenAndLower(char: string): string;
  
  /**
  * prepends prefix and unhyphenates the resulting string
  * test -> kTest
  */
  export function getBindablePropertyName(propertyName: string): string;
  
  /**
  * converts all attributes found on an element to matching Kendo events
  * returns a list of these Kendo events
  */
  export function getEventsFromAttributes(element: Element): string[];
  
  /**
  * Abstraction of commonly used code across wrappers
  */
  export class WidgetBase {
    
    /**
      * the Kendo widget after initialization
      */
    widget: any;
    
    /**
      * The element of the custom element, or the element on which a custom attribute
      * is placed. DOM events will be raised on this element
      */
    element: Element;
    
    /**
      * Used to prevent race conditions when events are raised before
      * all bindings have been updated.
      */
    taskQueue: TaskQueue;
    
    /**
      * The element on which a Kendo widget is initialized
      * This is the "element" by default
      */
    target: Element;
    
    /**
      * The Kendo control's name, such as kendoGrid or kendoButton
      */
    controlName: string;
    
    /**
      * The parent context (used for template compilation)
      */
    $parent: any;
    
    /**
      * The templating compiler adaptor
      */
    templateCompiler: TemplateCompiler;
    constructor(controlName: string, element: Element);
    bind(ctx: any): any;
    
    /**
      * Re-initializes the control
      */
    recreate(): any;
    
    /**
      * loops through all bindable properties generated by the @generateBindables decorator
      * and puts all these values in a single options object
      */
    getOptionsFromBindables(): any;
    
    /**
      * sets the default value of all bindable properties
      *  gets the value from the options object in the Kendo control itself
      */
    setDefaultBindableValues(): any;
    
    /**
      * convert attributes into a list of events a user wants to subscribe to.
      * These events are then subscribed to, which when called
      * calls the fireKendoEvent function to raise a DOM event
      */
    getEventOptions(ctor: any): any;
    
    /**
      * destroys the widget when the view gets detached
      */
    detached(): any;
  }
  export class DatePicker extends WidgetBase {
    kValue: any;
    kDisableDates: any;
    options: any;
    constructor(element: any);
    bind(ctx: any): any;
    close(value: any): any;
    destroy(): any;
    enable(newValue: any): any;
    readonly(value: any): any;
    max(value: any): any;
    min(value: any): any;
    open(): any;
    setOptions(options: any): any;
    value(newValue: any): any;
    kValueChanged(): any;
  }
  export class DropDownList extends WidgetBase {
    options: any;
    kDataSource: any;
    kValue: any;
    constructor(element: any);
    bind(ctx: any): any;
    enableChanged(newValue: any): any;
    kValueChanged(newValue: any): any;
    value(newValue: any): any;
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
    title: any;
    values: any;
    width: any;
    template: any;
    constructor(targetInstruction: any);
  }
  
  // eslint-disable-line no-unused-vars
  export class Grid extends WidgetBase {
    columns: any;
    kDataSource: any;
    options: any;
    constructor(element: any);
    
    //  initialization in bind() is giving issues in some scenarios
    //  so, attached() is used for this control
    attached(): any;
    enableChanged(newValue: any): any;
    addRow(): any;
    autoFitColumn(value: any): any;
    cancelChanges(): any;
    cancelRow(): any;
    cellIndex(cell: any): any;
    clearSelection(): any;
    closeCell(): any;
    collapseGroup(group: any): any;
    collapseRow(row: any): any;
    current(cell: any): any;
    dataItem(row: any): any;
    destroy(): any;
    editCell(cell: any): any;
    editRow(row: any): any;
    expandGroup(row: any): any;
    expandRow(row: any): any;
    getOptions(): any;
    hideColumn(column: any): any;
    lockColumn(column: any): any;
    refresh(): any;
    removeRow(row: any): any;
    reorderColumn(destIndex: any, column: any): any;
    saveAsExcel(): any;
    saveAsPDF(): any;
    saveChanges(): any;
    saveRow(): any;
    select(rows: any): any;
    setDataSource(dataSource: any): any;
    setOptions(options: any): any;
    showColumn(column: any): any;
    unlockColumn(column: any): any;
  }
  export class Menu extends WidgetBase {
    options: any;
    kDataSource: any;
    constructor(element: any);
    bind(ctx: any): any;
  }
  export class PDF {
  }
  export class ProgressBar extends WidgetBase {
    options: any;
    constructor(element: any);
    bind(ctx: any): any;
    kEnableChanged(newValue: any): any;
    kValueChanged(newValue: any): any;
    value(newValue: any): any;
    enable(newValue: any): any;
  }
  export class AuScheduler {
  }
  export class Slider extends WidgetBase {
    kValue: any;
    options: any;
    constructor(element: any);
    attached(): any;
    kEnableChanged(newValue: any): any;
    enable(newValue: any): any;
    value(newValue: any): any;
    destroy(): any;
    resize(): any;
    kValueChanged(): any;
  }
  export class TabStrip extends WidgetBase {
    options: any;
    constructor(element: any);
    bind(ctx: any): any;
    enableChanged(newValue: any): any;
  }
  export class AuToolbar {
  }
  export class TreeView extends WidgetBase {
    kDataSource: any;
    options: any;
    constructor(element: any);
    bind(ctx: any): any;
    append(nodeData: any, parentNode: any, success: any): any;
    collapse(nodes: any): any;
    dataItem(node: any): any;
    destroy(): any;
    detach(node: any): any;
    enable(nodes: any, enable: any): any;
    expand(nodes: any): any;
    expandPath(path: any, complete: any): any;
    expandTo(targetNode: any): any;
    findByText(text: any): any;
    findByUid(text: any): any;
    insertAfter(nodeData: any, referenceNode: any): any;
    insertBefore(nodeData: any, referenceNode: any): any;
    parent(node: any): any;
    remove(node: any): any;
    select(node: any): any;
    setDataSource(dataSource: any): any;
    text(node: any, newText: any): any;
    toggle(node: any): any;
    updateIndeterminate(node: any): any;
  }
}