declare module 'aurelia-kendoui-bridge' {
  import * as LogManager from 'aurelia-logging';
  import 'jquery';
  import 'kendo.autocomplete.min';
  import 'kendo.virtuallist.min';
  import 'kendo.dataviz.barcode.min';
  import 'kendo.button.min';
  import 'kendo.calendar.min';
  import 'kendo.dataviz.chart.min';
  import 'kendo.dataviz.chart.polar.min';
  import 'kendo.dataviz.chart.funnel.min';
  import 'kendo.dataviz.sparkline.min';
  import 'kendo.dataviz.stock.min';
  import 'kendo.dataviz.treemap.min';
  import 'kendo.colorpicker.min';
  import 'kendo.dropdownlist.min';
  import 'kendo.datepicker.min';
  import 'kendo.datetimepicker.min';
  import 'kendo.dataviz.diagram.min';
  import 'kendo.draganddrop.min';
  import 'kendo.editor.min';
  import 'kendo.dataviz.gauge.min';
  import 'kendo.data.signalr.min';
  import 'kendo.filtercell.min';
  import 'kendo.grid.min';
  import 'kendo.listview.min';
  import 'kendo.dataviz.map.min';
  import 'kendo.maskedtextbox.min';
  import 'kendo.menu.min';
  import 'kendo.numerictextbox.min';
  import 'kendo.panelbar.min';
  import 'kendo.pdf.min';
  import 'kendo.excel.min';
  import 'kendo.progressbar.min';
  import 'kendo.slider.min';
  import 'kendo.scheduler.min';
  import 'kendo.scheduler.agendaview.min';
  import 'kendo.scheduler.dayview.min';
  import 'kendo.scheduler.monthview.min';
  import 'kendo.scheduler.recurrence.min';
  import 'kendo.scheduler.timelineview.min';
  import 'kendo.mobile.switch.min';
  import 'kendo.tabstrip.min';
  import 'kendo.timepicker.min';
  import 'kendo.treelist.min';
  import 'kendo.treeview.min';
  import { inject, Container, transient }  from 'aurelia-dependency-injection';
  import { customElement, bindable, children, customAttribute, BindableProperty, HtmlBehaviorResource, noView, processContent, TargetInstruction, TemplatingEngine, ViewResources }  from 'aurelia-templating';
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
      * Globally register all Kendo Core wrappers including templating support
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
    
    /**
      * Registers value converters (wrappers around kendo functions)
      */
    useValueConverters(): KendoConfigBuilder;
    
    /**
      * Adds kendo templating support
      */
    kendoTemplateSupport(): KendoConfigBuilder;
    kendoAutoComplete(): KendoConfigBuilder;
    kendoButton(): KendoConfigBuilder;
    kendoBarcode(): KendoConfigBuilder;
    kendoCalendar(): KendoConfigBuilder;
    kendoChart(): KendoConfigBuilder;
    kendoCombobox(): KendoConfigBuilder;
    kendoColorPicker(): KendoConfigBuilder;
    kendoColorPalette(): KendoConfigBuilder;
    kendoDatePicker(): KendoConfigBuilder;
    kendoDateTimePicker(): KendoConfigBuilder;
    kendoDiagram(): KendoConfigBuilder;
    kendoDraggable(): KendoConfigBuilder;
    kendoDropDownList(): KendoConfigBuilder;
    kendoDropTarget(): KendoConfigBuilder;
    kendoEditor(): KendoConfigBuilder;
    kendoFlatColorPicker(): KendoConfigBuilder;
    kendoGrid(): KendoConfigBuilder;
    kendoLinearGauge(): KendoConfigBuilder;
    kendoListView(): KendoConfigBuilder;
    kendoMap(): KendoConfigBuilder;
    kendoMenu(): KendoConfigBuilder;
    kendoMaskedTextBox(): KendoConfigBuilder;
    kendoNumericTextBox(): KendoConfigBuilder;
    kendoPanelBar(): KendoConfigBuilder;
    kendoProgressBar(): KendoConfigBuilder;
    kendoRadialGauge(): KendoConfigBuilder;
    kendoScheduler(): KendoConfigBuilder;
    kendoSlider(): KendoConfigBuilder;
    kendoSwitch(): KendoConfigBuilder;
    kendoTabStrip(): KendoConfigBuilder;
    kendoTreeList(): KendoConfigBuilder;
    kendoToolbar(): KendoConfigBuilder;
    kendoTreeView(): KendoConfigBuilder;
    kendoTimePicker(): KendoConfigBuilder;
    kendoRangeSlider(): KendoConfigBuilder;
  }
  export function configure(aurelia: any, configCallback: any): any;
  export class AutoComplete {
    options: any;
    templates: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class Barcode {
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
  export class Calendar {
    options: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
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
  export class ColorPalette {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
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
  export class ComboBox {
    options: any;
    templates: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export let bindables: any;
  export const constants: any;
  
  /***
  * Available properties (merged together from several locations) are stored here per controlName
  * so that this isn't done for each created wrapper instance
  */
  export class ControlProperties {
    cache: any;
    templateProperties: any;
    
    /**
      * Merges together available properties for a specific control
      * and stores this in a cache so that this is done only once per control
      */
    getProperties(controlName: any): any;
    getWidgetProperties(controlName: any): any;
    getTemplateProperties(controlName: any): any;
  }
  
  /**
  * Creates a BindableProperty for every option defined in a Kendo control
  * in the option property of a Kendo control
  * @param controlName The Kendo control of which the options should be converted into bindable properties
  */
  export function generateBindables(controlName: string): any;
  export class Template {
    template: any;
    for: any;
    constructor(targetInstruction: any);
  }
  
  /***
  * Converts an object with bindable properties (with k- convention)
  * into an object that can be passed to a Kendo control
  */
  export class OptionsBuilder {
    constructor(controlProperties: any);
    
    /**
      * converts properties of view-model (with k- convention) to an object
      * that can be passed to a Kendo control. It also wraps templates into a function
      * so the Kendo templating system is not used
      */
    getOptions(viewModel: any, className: any): any;
    isTemplate(propertyName: any): any;
  }
  
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
    compile($parent: any, elements: any, data: any, viewResources: any): any;
    
    /**
      * uses the enhance function of Aurelia's TemplatingEngine
      * to "compile" existing DOM elements
      * @param element The Element to compile
      * @param ctx The dataitem (context) to compile the Element with
      */
    enhanceView($parent: any, element: any, ctx: any, viewResources: any): any;
    
    //  attach it to the DOM
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
  * removes prefix and unhyphenates the resulting string
  * kTest -> test
  */
  export function getKendoPropertyName(propertyName: string): string;
  
  /**
  * converts all attributes found on an element to matching Kendo events
  * returns a list of these Kendo events
  */
  export function getEventsFromAttributes(element: Element): string[];
  
  /**
  * Implicitly setting options to "undefined" for a kendo control can break things.
  * this function prunes the supplied options object and removes values that
  * aren't set to something explicit (i.e. not null)
  * @param options the options object to prune the properties of
  */
  export function pruneOptions(options: any): any;
  export function hasValue(prop: any): any;
  
  /***
  * parses array of k-template view-models (@children)
  * <k-template for='test'>
  * this function sets the property 'test' on the viewmodel to the template
  * @param target the viewModel with template properties
  * @param kendoGrid or GridColumn, properties are retrieved from bindables.js
  * @param templates array of k-template view-models
  */
  export function useTemplates(target: any, controlName: any, templates: any): any;
  
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
    constructor(taskQueue: any, templateCompiler: any, optionsBuilder: any);
    control(controlName: any): any;
    linkViewModel(viewModel: any): any;
    useViewResources(resources: any): any;
    
    /**
      * adds two-way value binding
      * @param valueBindingProperty the property name of the kendo control (value/checked)
      * @param valueFunction the function on the kendo control that gets the value of the above property
      */
    useValueBinding(valueBindingProperty?: any, valueFunction?: any): any;
    
    /**
      * collects all options objects
      * calls all hooks
      * then initialized the Kendo control as "widget"
      */
    createWidget(options: any): any;
    
    /**
      * convert attributes into a list of events a user wants to subscribe to.
      * These events are then subscribed to, which when called
      * calls the fireKendoEvent function to raise a DOM event
      */
    getEventOptions(element: any): any;
    handlePropertyChanged(widget: any, property: any, newValue: any, oldValue: any): any;
    useTemplates(target: any, controlName: any, templates: any): any;
    
    /**
      * destroys the widget
      */
    destroy(widget: any): any;
  }
  export class DatePicker {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class DateTimePicker {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class Diagram {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Draggabke {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    beforeInitialize(options: any): any;
    detached(): any;
  }
  export class DropTargetArea {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    recreate(): any;
    detached(): any;
  }
  export class DropTarget {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    recreate(): any;
    detached(): any;
  }
  export class DropDownList {
    options: any;
    templates: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class Editor {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class FlatColorPicker {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class LinearGauge {
    options: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class RadialGauge {
    options: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  
  // eslint-disable-line no-unused-vars
  export class Grid {
    columns: any;
    options: any;
    constructor(element: any, widgetBase: any, viewResources: any, optionsBuilder: any);
    bind(ctx: any): any;
    
    //  initialization in bind() is giving issues in some scenarios
    //  so, attached() is used for this control
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Col {
    templates: any;
    bind(): any;
  }
  export class ListView {
    options: any;
    templates: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Map {
    options: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class MaskedTextBox {
    kDisableDates: any;
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
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
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class PanelBar {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
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
  export class RangeSlider {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  
  // eslint-disable-line no-unused-vars
  export class Scheduler {
    options: any;
    templates: any;
    constructor(element: any, widgetBase: any, viewResources: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class Slider {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class Switch {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class TabStrip {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    recreate(): any;
    detached(): any;
  }
  export class TimePicker {
    kDisableDates: any;
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    recreate(): any;
    propertyChanged(property: any, newValue: any, oldValue: any): any;
    detached(): any;
  }
  export class AuToolbar {
  }
  export class TreeCol {
    templates: any;
    bind(): any;
  }
  
  // eslint-disable-line no-unused-vars
  export class TreeList {
    columns: any;
    options: any;
    constructor(element: any, widgetBase: any, viewResources: any, optionsBuilder: any);
    bind(ctx: any): any;
    
    //  initialization in bind() is giving issues in some scenarios
    //  so, attached() is used for this control
    attached(): any;
    recreate(): any;
    detached(): any;
  }
  export class TreeView {
    options: any;
    constructor(element: any, widgetBase: any);
    bind(ctx: any): any;
    recreate(): any;
    detached(): any;
  }
  export class kendoToStringValueConverter {
    toView(value: any, format: any, language: any): any;
  }
  export class kendoParseDateValueConverter {
    toView(value: any, format: any, language: any): any;
  }
  export class kendoParseIntValueConverter {
    toView(value: any, language: any): any;
  }
  export class kendoParseFloatValueConverter {
    toView(value: any, language: any): any;
  }
  export class kendoParseColorValueConverter {
    toView(value: any): any;
  }
  export class kendoStringifyValueConverter {
    toView(obj: any): any;
  }
  export class kendoFormatValueConverter {
    toView(value: any, ...params: any[]): any;
  }
}