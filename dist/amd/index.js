define(['exports', 'kendo-ui/src/styles/web/kendo.common.core.css!'], function (exports, _kendoUiSrcStylesWebKendoCommonCoreCss) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports.configure = configure;

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
});