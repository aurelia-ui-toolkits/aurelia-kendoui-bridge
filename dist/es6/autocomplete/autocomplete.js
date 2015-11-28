import {customAttribute, bindable, bindingMode, inject} from 'aurelia-framework';
import {fireEvent} from '../common/events';
import {pruneOptions} from '../common/options';
import $ from 'jquery';
import 'kendo-ui/js/kendo.autocomplete.min';

@customAttribute('au-kendo-autocomplete')
//@bindable({ name: 'value', changeHandler: 'valueChanged', defaultValue: [], defaultBindingMode: bindingMode.twoWay })
//@bindable({ name: 'data', changeHandler: 'dataChanged', defaultValue: [], defaultBindingMode: bindingMode.oneWay })
//@bindable({ name: 'options', changeHandler: 'optionsChanged', defaultValue: {}, defaultBindingMode: bindingMode.oneWay })
//@bindable({ name: 'class', defaultValue: '', defaultBindingMode: bindingMode.oneWay })
@inject(Element)
export class AuKendoAutoComplete {

    element;

    // Autocomplete API
    // Full options object if you want to set options that way
    @bindable options = {};

    // Individual properties - default values need setting
    @bindable animation;
    @bindable dataSource;
    @bindable dataTextField = null;
    @bindable delay = 200;
    @bindable enable = true;
    @bindable filter = "startswith";
    @bindable fixedGroupTemplate;
    @bindable groupTemplate;
    @bindable height;
    @bindable highlightFirst;
    @bindable ignoreCase;
    @bindable minLength;
    @bindable placeholder;
    @bindable popup;
    @bindable separator = "";
    @bindable suggest = true;
    @bindable headerTemplate;
    @bindable template;
    @bindable valuePrimitive;
    @bindable virtual;

    // Aurelia value-added API
    @bindable value;

    constructor(element) {
        this.element = element;
    }

    attached() {
        this._component = $(this.element).kendoAutoComplete(this.getOptions()).data("kendoAutoComplete");

        this._component.bind('change', (event) => {
            this.value = event.sender.value();

            // Update the kendo binding
            fireEvent(this.element, 'input');
        });

        this._component.bind('select', (event) => {
            this.value = event.sender.value();

            // Update the kendo binding
            fireEvent(this.element, 'input');
        });
    }

    detached() {
        if(this._component)
            this._component.destroy();
    }

    getOptions() {
        var options = pruneOptions({
            animation: this.animation,
            dataSource: this.dataSource,
            dataTextField: this.dataTextField,
            delay: this.delay,
            enable: this.enable,
            filter: this.filter,
            fixedGroupTemplate: this.fixedGroupTemplate,
            groupTemplate: this.groupTemplate,
            height: this.height,
            highlightFirst: this.highlightFirst,
            ignoreCase: this.ignoreCase,
            minLength: this.minLength,
            placeholder: this.placeholder,
            popup: this.popup,
            separator: this.separator,
            suggest: this.suggest,
            headerTemplate: this.headerTemplate,
            template: this.template,
            valuePrimitive: this.valuePrimitive,
            virtual: this.virtual
        });

        return Object.assign({}, this.options, options);
    }

    enableChanged(newValue) {
        if (this._component)
            this._component.enable(newValue);
    }
}


// Handlers

// AuKendoAutoComplete.prototype.valueChanged = function(value) {
//     if (this._dataComponent) {
//         let textfield = (this.options || {}).dataTextField;
//         this._dataComponent.value(textfield !== null ? value[textfield] : value);
//     }
// };

// AuKendoAutoComplete.prototype.dataChanged = function(value) {
//     if (this._dataComponent) {
//         this._dataComponent.setDataSource(new Kendo.data.DataSource({
//             data: value
//         }));
//     }
// };

// AuKendoAutoComplete.prototype.optionsChanged = function(value) {
//     if (this._dataComponent) {
//         this._dataComponent.setOptions(value);
//     }
// };
