System.register(['kendo-ui/src/styles/web/kendo.common.core.css!'], function (_export) {
	'use strict';

	_export('configure', configure);

	function configure(aurelia) {

		var resources = ['button/button', 'autocomplete/autocomplete'];

		aurelia.globalResources(resources);
	}

	return {
		setters: [function (_kendoUiSrcStylesWebKendoCommonCoreCss) {}],
		execute: function () {}
	};
});