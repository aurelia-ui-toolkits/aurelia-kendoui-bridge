import {customElement, bindable, inject} from 'aurelia-framework';
import {getLogger} from 'aurelia-logging';
import {fireEvent} from '../common/events';
import {pruneOptions} from '../common/options';
import $ from 'jquery';
import 'kendo-ui/js/kendo.grid.min';

@customElement("au-kendo-grid")
@inject(Element)
export class Grid {

	host;
	_component;

	constructor() {

		var logger = getLogger('aurelia-kendoui');

		if (!Kendo.ui.Grid) {
			logger.error('Kendo.ui.Grid is not defined. Ensure that the professional version of Kendo UI is installed.');

			return;
		}

		this.logger = logger;
	}

	attached () {
		this._component = $(this.host).kendoGrid(this.getOptions()).data("kendoGrid");
	}

	detached () {
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
