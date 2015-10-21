'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.configure = configure;

require('kendo-ui/src/styles/web/kendo.common.core.css!');

function configure(aurelia) {

	var resources = ['button/button', 'autocomplete/autocomplete'];

	aurelia.globalResources(resources);
}