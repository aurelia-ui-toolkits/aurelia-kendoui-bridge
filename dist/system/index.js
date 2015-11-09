System.register(['kendo-ui/src/styles/web/kendo.common.core.css!'], function (_export) {
	'use strict';

	_export('configure', configure);

	function configure(aurelia, configCallback) {

		var resources = [];

		if (configCallback !== undefined && typeof configCallback === 'function') {
			resources = configCallback();
		}

		if (typeof resources === "string") resources = [resources];

		resources = resources.map(function (r) {
			return r + "/" + r;
		});

		aurelia.globalResources(resources);
	}

	return {
		setters: [function (_kendoUiSrcStylesWebKendoCommonCoreCss) {}],
		execute: function () {}
	};
});