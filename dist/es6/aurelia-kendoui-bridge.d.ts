declare module 'aurelia-kendoui-bridge' {
  import * as LogManager from 'aurelia-logging';
  import {
    inject,
    Container,
    transient
  } from 'aurelia-dependency-injection';
  import {
    customElement,
    customAttribute,
    bindable,
    BindableProperty,
    HtmlBehaviorResource,
    TemplatingEngine,
    ViewResources,
    noView,
    processContent,
    TargetInstruction
  } from 'aurelia-templating';
  import {
    metadata
  } from 'aurelia-metadata';
  import {
    bindingMode,
    EventManager,
    createOverrideContext
  } from 'aurelia-binding';
  import {
    TaskQueue
  } from 'aurelia-task-queue';
  import {
    RepeatStrategyLocator,
    ArrayRepeatStrategy
  } from 'aurelia-templating-resources';
  
  /**
  * Configure the Aurelia-KendoUI-bridge
  */
  export class KendoConfigBuilder {
    resources: string[];
    debugMode: any;
    registerRepeatStrategy: any;
    constructor();
    
    /**
      * Automatically detect which Kendo controls are loaded, and load matching wrappers
      */
    detect(): KendoConfigBuilder;
    
    /**
      * Globally register all Kendo Core wrappers including templating support
      */
    core(): KendoConfigBuilder;
    
    /**
      * Globally register all Kendo Core and Kendo Pro wrappers
      */
    pro(): KendoConfigBuilder;
    
    /**
      * Registers value converters (wrappers around kendo functions)
      */
    useValueConverters(): KendoConfigBuilder;
    
    /**
      * Adds kendo templating support
      */
    kendoTemplateSupport(): KendoConfigBuilder;
    
    /**
      * Adds kendo templating support
      */
    debug(): KendoConfigBuilder;
    
    /**
      * Loads the notify binding behavior
      */
    notifyBindingBehavior(): KendoConfigBuilder;
    
    /**
      * Custom callback for template modification
      */
    withTemplateCallback(callback?: any): KendoConfigBuilder;
    
    /**
      * Don't register an array repeat strategy for kendo.data.ObservableArray
      */
    withoutRepeatStrategy(): any;
    kendoAutoComplete(): KendoConfigBuilder;
    kendoButton(): KendoConfigBuilder;
    kendoMobileButtonGroup(): KendoConfigBuilder;
    kendoBarcode(): KendoConfigBuilder;
    kendoCalendar(): KendoConfigBuilder;
    kendoChart(): KendoConfigBuilder;
    kendoComboBox(): KendoConfigBuilder;
    kendoContextMenu(): KendoConfigBuilder;
    kendoColorPicker(): KendoConfigBuilder;
    kendoColorPalette(): KendoConfigBuilder;
    kendoDatePicker(): KendoConfigBuilder;
    kendoDateTimePicker(): KendoConfigBuilder;
    kendoDiagram(): KendoConfigBuilder;
    kendoDraggable(): KendoConfigBuilder;
    kendoDropDownList(): KendoConfigBuilder;
    kendoDropTarget(): KendoConfigBuilder;
    kendoEditor(): KendoConfigBuilder;
    kendoFilterMenu(): KendoConfigBuilder;
    kendoFlatColorPicker(): KendoConfigBuilder;
    kendoGantt(): KendoConfigBuilder;
    kendoGrid(): KendoConfigBuilder;
    kendoLinearGauge(): KendoConfigBuilder;
    kendoListView(): KendoConfigBuilder;
    kendoNotification(): KendoConfigBuilder;
    kendoMap(): KendoConfigBuilder;
    kendoMenu(): KendoConfigBuilder;
    kendoMaskedTextBox(): KendoConfigBuilder;
    kendoMultiSelect(): KendoConfigBuilder;
    kendoNumericTextBox(): KendoConfigBuilder;
    kendoPanelBar(): KendoConfigBuilder;
    kendoPivotGrid(): KendoConfigBuilder;
    kendoPopup(): KendoConfigBuilder;
    kendoProgressBar(): KendoConfigBuilder;
    kendoQRCode(): KendoConfigBuilder;
    kendoRadialGauge(): KendoConfigBuilder;
    kendoResponsivePanel(): KendoConfigBuilder;
    kendoMobileScrollView(): KendoConfigBuilder;
    kendoScheduler(): KendoConfigBuilder;
    kendoSlider(): KendoConfigBuilder;
    kendoSortable(): KendoConfigBuilder;
    kendoSpreadsheet(): KendoConfigBuilder;
    kendoSplitter(): KendoConfigBuilder;
    kendoSlider(): KendoConfigBuilder;
    kendoMobileSwitch(): KendoConfigBuilder;
    kendoTabStrip(): KendoConfigBuilder;
    kendoTreeList(): KendoConfigBuilder;
    kendoToolbar(): KendoConfigBuilder;
    kendoTreeView(): KendoConfigBuilder;
    kendoTimePicker(): KendoConfigBuilder;
    kendoToolBar(): KendoConfigBuilder;
    kendoTooltip(): KendoConfigBuilder;
    kendoRangeSlider(): KendoConfigBuilder;
    kendoUpload(): KendoConfigBuilder;
    kendoValidator(): KendoConfigBuilder;
    kendoWindow(): KendoConfigBuilder;
    
    // deprecated
    kendoButtonGroup(): KendoConfigBuilder;
    kendoCombobox(): KendoConfigBuilder;
    kendoScrollView(): KendoConfigBuilder;
    kendoSwitch(): KendoConfigBuilder;
    kendoToolbar(): KendoConfigBuilder;
  }
  export function configure(aurelia?: any, configCallback?: any): any;
  export let version: any;
  export class AutoComplete {
    constructor(element?: any, widgetBase?: any, container?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class Barcode {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class Button {
    kEnabled: any;
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class ButtonGroup {
    kEnabled: any;
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class Calendar {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  
  //eslint-disable-line no-unused-vars
  export class Chart {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  
  //eslint-disable-line no-unused-vars
  export class Sparkline {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  
  //eslint-disable-line no-unused-vars
  export class Stock {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  
  //eslint-disable-line no-unused-vars
  export class TreeMap {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class ColorPalette {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class ColorPicker {
    kEnabled: any;
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class ComboBox {
    kEnabled: any;
    kReadOnly: any;
    constructor(element?: any, widgetBase?: any, container?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export let bindables: any;
  export const constants: any;
  
  /***
  * Available properties (merged together from several locations) are stored here per controlName
  * so that this isn't done for each created wrapper instance
  */
  export class ControlProperties {
    cache: any;
    constructor(util: Util);
    
    /**
      * Merges together available properties for a specific control
      * and stores this in a cache so that this is done only once per control
      * @param controlName the name of the kendo control (kendoGrid, kendoButton)
      * @param extraProperties allows you to provide an extra list of available properties
      */
    getProperties(controlName: string, extraProperties?: any): string[];
    
    /**
      * returns a list of properties of a Kendo control that has been pre-generated (into bindables.js)
      * @param controlName the name of the kendo control (kendoGrid, kendoButton)
      */
    getGeneratedProperties(controlName: string): any;
    
    /*
      * returns the intrinsic list of properties of a kendo control
      * returns an empty array if the control is not loaded
      * @param controlName the name of the kendo control (kendoGrid, kendoButton)
      */
    getWidgetProperties(controlName: string): string[];
    
    /*
      * filters list of properties of a control by template property
      * @param controlName the name of the kendo control (kendoGrid, kendoButton)
      */
    getTemplateProperties(controlName: string): string[];
  }
  
  /**
  * Creates a BindableProperty for every option defined in a Kendo control
  * in the option property of a Kendo control
  * @param controlName The Kendo control of which the options should be converted into bindable properties
  */
  export function generateBindables(controlName: string, extraProperties?: any): any;
  export function delayed(): any;
  export class NotifyBindingBehavior {
    constructor(eventManager?: any);
    bind(binding?: any, scope?: any, target?: any, fieldName?: any): any;
    unbind(binding?: any, scope?: any): any;
  }
  
  /***
  * Converts an object with bindable properties (with k- convention)
  * into an object that can be passed to a Kendo control
  */
  export class OptionsBuilder {
    constructor(controlProperties: ControlProperties, util: Util);
    
    /**
      * converts properties of view-model (with k- convention) to an object
      */
    getOptions(viewModel?: any, className?: any): any;
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
    constructor(templatingEngine?: any, util?: any);
    
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
      * @param elements an array of Elements or a kendo.jQuery selector
      * @param data optionally an array of dataitems
      */
    compile($parent?: any, elements?: any, data?: any, container?: any): any;
    
    /**
      * uses the enhance function of Aurelia's TemplatingEngine
      * to "compile" existing DOM elements
      * @param element The Element to compile
      * @param ctx The dataitem (context) to compile the Element with
      */
    enhanceView($parent?: any, element?: any, ctx?: any, container?: any): any;
    
    /**
      * loops through each element kendo asks us to clean up
      * calls cleanupView() for each element
      * @param element An array of elements
      */
    cleanup(elements?: any): any;
    
    /**
      * cleans up the view kendo has asked us to clean up
      */
    cleanupView(element?: any): any;
  }
  export class Template {
    template: any;
    for: any;
    kendoTemplate: any;
    constructor(targetInstruction?: any);
  }
  
  /**
  * Collection of useful functions used in multiple parts of the plugin
  */
  export class Util {
    
    /**
      * prepends hyphen and lowercases the input char
      * @param char the char to add an hyphen in front for
      */
    addHyphenAndLower(char: string): string;
    
    /**
      * hyphenates a string
      * kTest -> k-test
      * @param name the string to hyphenate
      */
    _hyphenate(name: string): string;
    
    /**
      * unhyphenate's a string
      * k-test -> kTest
      */
    _unhyphenate(name: string): string;
    
    /**
      * prepends prefix and unhyphenates the resulting string
      * test -> kTest
      */
    getBindablePropertyName(propertyName: string): string;
    
    /**
      * removes prefix and unhyphenates the resulting string
      * kTest -> test
      */
    getKendoPropertyName(propertyName: string): string;
    
    /**
      * converts all attributes found on an element to matching Kendo events
      * returns a list of these Kendo events
      */
    getEventsFromAttributes(element: Element): string[];
    
    /**
      * Implicitly setting options to "undefined" for a kendo control can break things.
      * this function prunes the supplied options object and removes values that
      * aren't set to something explicit (i.e. not null)
      * @param options the options object to prune the properties of
      */
    pruneOptions(options: any): any;
    hasValue(prop?: any): any;
    
    /**
      * Fire DOM event on an element
      * @param element The Element which the DOM event will be fired on
      * @param name The Event's name
      * @param data Addition data to attach to an event
      */
    fireEvent(element: Element, name: string, data?: any): any;
    
    /**
      * Fire DOM event on an element with the k-on prefix
      * @param element The Element which the DOM event will be fired on
      * @param name The Event's name, without k-on prefix
      * @param data Addition data to attach to an event
      */
    fireKendoEvent(element: Element, name: string, data?: any): any;
    
    /**
      * detection of template properties
      */
    isTemplateProperty(propertyName: string): any;
    
    /**
      * detection of objects
      */
    isObject(obj?: any): any;
    getChildrenVMs(element?: any, cssSelector?: any): any;
  }
  
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
      * A list of bindings for properties such as kEnable/kReadOnly/kValue
      * whenever one of these properties changes an API function will be called on the Kendo control
      * for example, a change of an 'kEnable' property will result in a .enable(true/false) call
      */
    bindingsToKendo: any;
    constructor(taskQueue?: any, templateCompiler?: any, optionsBuilder?: any, util?: any, templateGatherer?: any, configBuilder?: any, repeatStratLocator?: any);
    control(controlName?: any): any;
    linkViewModel(viewModel?: any): any;
    useContainer(container?: any): any;
    
    /**
      * adds two-way value binding
      * @param valueBindingProperty the property name of the kendo control (value/checked)
      * @param valueFunction the function on the kendo control that gets the value of the above property
      */
    useValueBinding(valueBindingProperty?: any, valueFunction?: any): any;
    
    /**
      * add binding to Kendo
      * whenever a bindable property in a wrapper changes, and the propertyname is in this list
      * then it will call an API function on the Kendo control to update the value
      * @param propertyName the bindable property name in the wrapper (kValue, kChecked, kEnabled)
      * @param valueFunction the API function on the kendo control that sets the value of the above property
      */
    bindToKendo(propertyName?: any, functionName?: any): any;
    
    /**
      * collects all options objects
      * calls all hooks
      * then initialized the Kendo control as "widget"
      */
    createWidget(options?: any): any;
    _createWidget(element?: any, options?: any, controlName?: any): any;
    
    /**
      * combines all options objects and properties into a single options object
      */
    _getOptions(element?: any): any;
    
    /**
      * convert attributes into a list of events a user wants to subscribe to.
      * These events are then subscribed to, which when called
      * calls the fireKendoEvent function to raise a DOM event
      */
    getEventOptions(element?: any): any;
    _handleValueChange(widget?: any): any;
    getValue(widget?: any): any;
    handlePropertyChanged(widget?: any, property?: any, newValue?: any, oldValue?: any): any;
    useTemplates(target?: any, controlName?: any, templates?: any): any;
    registerRepeatStrategy(): any;
    
    /**
      * destroys the widget
      */
    destroy(widget?: any): any;
  }
  export class ContextMenu {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class DatePicker {
    kEnabled: any;
    kReadOnly: any;
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class DateTimePicker {
    kEnabled: any;
    kReadOnly: any;
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class Diagram {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class Draggable {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    beforeInitialize(options?: any): any;
    unbind(): any;
  }
  export class DropTargetArea {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class DropTarget {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class DropDownList {
    kNoValueBinding: any;
    kEnabled: any;
    kReadOnly: any;
    constructor(element?: any, widgetBase?: any, container?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class Editor {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class FilterMenu {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class FlatColorPicker {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class GanttCol {
  
  }
  
  //eslint-disable-line no-unused-vars
  export class Gantt {
    constructor(element?: any, widgetBase?: any, container?: any, optionsBuilder?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    _beforeInitialize(options?: any): any;
    unbind(): any;
  }
  export class LinearGauge {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class RadialGauge {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class Col {
    constructor(templateGatherer?: any, optionsBuilder?: any, util?: any, element?: any);
    bind($parent?: any): any;
    beforeOptionsBuild(): any;
    
    // recursively get options of all nested columns that we can pass to Kendo
    afterOptionsBuild(options?: any): any;
  }
  export class GridToolbar {
    constructor(templateGatherer?: any, util?: any, element?: any);
    beforeOptionsBuild(): any;
  }
  
  //eslint-disable-line no-unused-vars
  export class Grid {
    constructor(element?: any, widgetBase?: any, container?: any, optionsBuilder?: any, templateGatherer?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    _beforeInitialize(options?: any): any;
    unbind(): any;
  }
  export class ListView {
    constructor(element?: any, widgetBase?: any, container?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class Map {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class MaskedTextBox {
    kDisableDates: any;
    kEnabled: any;
    kReadOnly: any;
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class Menu {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class Multiselect {
    kEnabled: any;
    kReadOnly: any;
    kNoValueBinding: any;
    constructor(element?: any, widgetBase?: any, container?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class NotificationTemplate {
    template: any;
    type: any;
    constructor(targetInstruction?: any);
  }
  export class Notification {
    constructor(element?: any, widgetBase?: any, container?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    beforeInitialize(options?: any): any;
    unbind(): any;
  }
  export class NumericTextBox {
    kEnabled: any;
    kReadOnly: any;
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class PanelBar {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class PDF {
  
  }
  export class PivotConfigurator {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  
  //eslint-disable-line no-unused-vars
  export class PivotGrid {
    constructor(element?: any, widgetBase?: any, container?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class Popup {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class ProgressBar {
    kEnabled: any;
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class QRCode {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class RangeSlider {
    kEnabled: any;
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class ResponsivePanel {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  
  //eslint-disable-line no-unused-vars
  export class Scheduler {
    constructor(element?: any, widgetBase?: any, container?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class Scrollview {
    constructor(element?: any, widgetBase?: any, container?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class Slider {
    kEnabled: any;
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class Sortable {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class Splitter {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class Spreadsheet {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class Switch {
    kEnabled: any;
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class TabStrip {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class TimePicker {
    kDisableDates: any;
    kEnabled: any;
    kReadOnly: any;
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    propertyChanged(property?: any, newValue?: any, oldValue?: any): any;
    unbind(): any;
  }
  export class ToolbarItemButton {
    constructor(optionsBuilder?: any);
    getOptions(): any;
  }
  export class ToolbarItem {
    constructor(templateGatherer?: any, optionsBuilder?: any, util?: any, element?: any);
    getOptions(): any;
  }
  export class Toolbar {
    constructor(element?: any, widgetBase?: any, optionsBuilder?: any, container?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    _beforeInitialize(options?: any): any;
    unbind(): any;
  }
  export class Tooltip {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class TreeCol {
    constructor(templateGatherer?: any, util?: any, element?: any);
    beforeOptionsBuild(): any;
  }
  
  //eslint-disable-line no-unused-vars
  export class TreeList {
    constructor(element?: any, widgetBase?: any, container?: any, optionsBuilder?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    _beforeInitialize(options?: any): any;
    unbind(): any;
  }
  export class TreeView {
    constructor(element?: any, widgetBase?: any, container?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class Upload {
    constructor(element?: any, widgetBase?: any, container?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class Validator {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
  export class kendoToStringValueConverter {
    toView(value?: any, format?: any, language?: any): any;
  }
  export class kendoParseDateValueConverter {
    toView(value?: any, format?: any, language?: any): any;
  }
  export class kendoParseIntValueConverter {
    toView(value?: any, language?: any): any;
  }
  export class kendoParseFloatValueConverter {
    toView(value?: any, language?: any): any;
  }
  export class kendoParseColorValueConverter {
    toView(value?: any): any;
  }
  export class kendoStringifyValueConverter {
    toView(obj?: any): any;
  }
  export class kendoFormatValueConverter {
    toView(value?: any, ...params: any[]): any;
  }
  export class Window {
    constructor(element?: any, widgetBase?: any);
    bind(ctx?: any): any;
    attached(): any;
    recreate(): any;
    unbind(): any;
  }
}