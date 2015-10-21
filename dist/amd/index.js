define(['exports', 'kendo-ui/src/styles/web/kendo.common.core.css!'], function (exports, _kendoUiSrcStylesWebKendoCommonCoreCss) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports.configure = configure;

	function configure(aurelia) {

		var resources = ['button/button', 'autocomplete/autocomplete'];

		aurelia.globalResources(resources);
	}
});