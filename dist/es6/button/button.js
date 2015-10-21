import {customAttribute, bindable, inject} from 'aurelia-framework';
import $ from 'jquery';
import 'kendo-ui/src/js/kendo.button';
import 'kendo-ui/src/styles/web/kendo.bootstrap.css!';

@customAttribute('au-kendo-button')
@inject(Element)
export class AuKendoButton {

    _component;

    @bindable icon;
    @bindable options;

    constructor(element) {
        this.element = element;
    }

    attached() {
        this._component = $(this.element).kendoButton(this.options).data('kendoButton');
    }

    detached() {
    	if(this._component)
	        this._component.destroy();
    }

    iconChanged() {
    }
}