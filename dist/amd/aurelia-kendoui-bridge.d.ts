declare module 'aurelia-kendoui-bridge' {
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
  import 'kendo-ui/js/kendo.numerictextbox.min';
  import 'kendo-ui/js/kendo.pdf.min';
  import 'kendo-ui/js/jszip.min';
  import 'kendo-ui/js/kendo.progressbar.min';
  import 'kendo-ui/js/kendo.slider.min';
  import 'kendo-ui/js/kendo.tabstrip.min';
  import 'kendo-ui/js/kendo.treeview.min';
  import { inject, transient }  from 'aurelia-dependency-injection';
  import { customAttribute, bindable, customElement, BindableProperty, HtmlBehaviorResource, TemplatingEngine, children, noView, processContent, TargetInstruction }  from 'aurelia-templating';
  import { metadata }  from 'aurelia-metadata';
  import { bindingMode }  from 'aurelia-binding';
  import { TaskQueue }  from 'aurelia-task-queue';
  
  /**
  * Configure the Aurelia-KendoUI-bridge
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
    kendoNumericTextBox(): KendoConfigBuilder;
  }
  export function configure(aurelia: any, configCallback: any): any;
  export class AutoComplete {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    recreate(): any;
    detached(): any;
  }
  export class Button {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    recreate(): any;
    detached(): any;
  }
  
  // eslint-disable-line no-unused-vars
  export class Chart {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  
  // eslint-disable-line no-unused-vars
  export class Sparkline {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  
  // eslint-disable-line no-unused-vars
  export class Stock {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  
  // eslint-disable-line no-unused-vars
  export class TreeMap {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class ColorPicker {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    recreate(): any;
    detached(): any;
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
      * The widgets parent viewmodel (this is the object instance the user will bind to)
      */
    viewModel: any;
    
    /**
      * The constructor of a Kendo control
      */
    ctor: any;
    constructor(taskQueue: any, templateCompiler: any);
    control(controlName: any): any;
    linkViewModel(viewModel: any): any;
    
    /**
      * collects all options objects
      * calls all hooks
      * then initialized the Kendo control as "widget"
      */
    createWidget(options: any): any;
    
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
    getEventOptions(element: any): any;
    
    /**
      * destroys the widget
      */
    destroy(widget: any): any;
  }
  export class DatePicker {
    kValue: any;
    kDisableDates: any;
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    recreate(): any;
    detached(): any;
  }
  export class DropDownList {
    options: any;
    kValue: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    recreate(): any;
    detached(): any;
  }
  
  // eslint-disable-line no-unused-vars
  export class Grid {
    columns: any;
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    
    //  initialization in bind() is giving issues in some scenarios
    //  so, attached() is used for this control
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Col {
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
  export class Menu {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    recreate(): any;
    detached(): any;
  }
  export class NumericTextBox {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    recreate(): any;
    detached(): any;
  }
  export class PDF {
  }
  export class ProgressBar {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    recreate(): any;
    detached(): any;
  }
  export class AuScheduler {
  }
  export class Slider {
    kValue: any;
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class TabStrip {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    recreate(): any;
    detached(): any;
  }
  export class AuToolbar {
  }
  export class TreeView {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    recreate(): any;
    detached(): any;
  }
}