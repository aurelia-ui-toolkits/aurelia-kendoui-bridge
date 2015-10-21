import {customAttribute, bindable, bindingMode, inject} from 'aurelia-framework';
import {fireEvent} from 'common/events';
import $ from 'jquery';
import 'kendo-ui/src/js/kendo.autocomplete';

@customAttribute('au-kendo-autocomplete')
//@bindable({ name: 'value', changeHandler: 'valueChanged', defaultValue: [], defaultBindingMode: bindingMode.twoWay })
//@bindable({ name: 'data', changeHandler: 'dataChanged', defaultValue: [], defaultBindingMode: bindingMode.oneWay })
//@bindable({ name: 'options', changeHandler: 'optionsChanged', defaultValue: {}, defaultBindingMode: bindingMode.oneWay })
//@bindable({ name: 'class', defaultValue: '', defaultBindingMode: bindingMode.oneWay })
@inject(Element)
export class AuKendoAutoComplete {

    element;

    // Autocomplete API
    // Full options object
    @bindable options = {};

    // Individual properties
    @bindable animation;
    @bindable dataSource;
    @bindable dataTextField;
    @bindable delay;
    @bindable enable = true;
    @bindable filter;
    @bindable fixedGroupTemplate;
    @bindable groupTemplate;
    @bindable height;
    @bindable highlightFirst;
    @bindable ignoreCase;
    @bindable minLength;
    @bindable placeholder;
    @bindable popup;
    @bindable separator = ',';
    @bindable suggest = true;
    @bindable headerTemplate;
    @bindable template;
    @bindable valuePrimitive;
    @bindable virtual;


    // Aurelia value-added API
    @bindable value;
    @bindable selectedItem;

    constructor(element) {
        this.element = element;
    }

    attached() {
        this._component = $(this.element).kendoAutoComplete(this.getOptions()).data("kendoAutoComplete");

        this._component.bind('change', (event) => {
            let textfield = this.options.dataTextField;

            let newValue = event.sender.value();
            let selected = textfield !== null && textfield !== undefined ? this.dataSource.filter((value) => value[textfield] === newValue) : this.dataSource.filter((value) => value === newValue);

            // Since autocomplete allows freeform input as well, we assign the freeform value if necessary.
            this.value = selected.length ? selected[0] : textfield;
            // {
            //     [textfield.toString()]: newValue
            // };
            
            fireEvent(this.element, 'input');

        });

        // this._component.bind('change', (event) => {
        //     // Kendo autocomplete doesn't provide the dataSource value back, so we have to handle this here.
        //     let textfield = (this.options || {}).dataTextField;
        //     let newValue = event.sender.value();
        //     let selected = textfield !== null && textfield !== undefined ? this.data.filter((value) => value[textfield] === newValue) : this.data.filter((value) => value === newValue);

        //     // Since autocomplete allows freeform input as well, we assign the freeform value if necessary.
        //     this.value = selected.length ? selected[0] : {
        //         [textfield.toString()]: newValue
        //     };
        // });
    }

    getOptions() {

        var options = {
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
        };

        if (this.animation)
            options['animation'] = this.animation;


        return Object.assign({}, this.options, options);
    }

    detached() {
        this._component.destroy();
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
