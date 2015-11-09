'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.configure = configure;

require('kendo-ui/src/styles/web/kendo.common.core.css!');

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