import {customAttribute, bindable, inject} from 'aurelia-framework';
import {pruneOptions} from '../common/options';
import $ from 'jquery';
import 'kendo-ui';

@customAttribute('au-kendo-tabstrip')
@inject(Element)
export class TabStrip {
	
	_component;

	@bindable animation;
    @bindable collapsible;
    @bindable contentUrls;
    @bindable dataContentField;
    @bindable dataContentUrlField;
    @bindable dataSpriteCssClass;
    @bindable dataTextField;
    @bindable dataUrlField;
    @bindable navigatable;
    @bindable scrollable;
    @bindable tabPosition;
    @bindable value;
    @bindable enable;

    @bindable options;

    constructor(element) {
        this.element = element;
        this.options = {};
    }

    attached() {
        this._component = $(this.element).kendoTabStrip(this.getOptions()).data('kendoTabStrip');
    }

    detached() {
    	if(this._component)
	        this._component.destroy();
    }

    getOptions() {
        var options = pruneOptions({
        	animation: this.animation,
    	    collapsible: this.collapsible,
    	    contentUrls: this.contentUrls,
    	    dataContentField: this.dataContentField,
    	    dataContentUrlField: this.dataContentUrlField,
    	    dataSpriteCssClass: this.dataSpriteCssClass,
    	    dataTextField: this.dataTextField,
    	    dataUrlField: this.dataUrlField,
    	    navigatable: this.navigatable,
    	    scrollable: this.scrollable,
    	    tabPosition: this.tabPosition,
    	    value: this.value
        });

        return Object.assign({}, this.options, options);
    }

    enableChanged(newValue) {
    	if(this._component)
    		this._component.enable(newValue);
    }
}