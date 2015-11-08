import {customAttribute, bindable, inject} from 'aurelia-framework';
import {pruneOptions} from '../common/options';
import $ from 'jquery';
import 'kendo-ui/src/js/kendo.button';

@customAttribute('au-kendo-button')
@inject(Element)
export class AuKendoButton {

    _component;

    @bindable enable = true;
    @bindable icon;
    @bindable imageUrl;
    @bindable spriteCssClass;

    @bindable options;

    constructor(element) {
        this.element = element;
        this.options = {};
    }

    attached() {
        this._component = $(this.element).kendoButton(this.getOptions()).data('kendoButton');
    }

    detached() {
    	if(this._component)
	        this._component.destroy();
    }

    getOptions() {
        
        var options = pruneOptions({
            icon: this.icon,
            enable: this.enable,
            imageUrl: this.imageUrl,
            spriteCssClass: this.spriteCssClass
        });

        return Object.assign({}, this.options, options);
    }

    enableChanged(newValue) {
    	if(this._component)
    		this._component.enable(newValue);
    }
}