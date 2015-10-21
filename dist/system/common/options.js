System.register([], function (_export) {
	"use strict";

	_export("pruneOptions", pruneOptions);

	function pruneOptions(options) {

		var returnOptions = {};

		for (var prop in options) {
			if (options.hasOwnProperty(prop) && options[prop] !== null) {
				returnOptions[prop] = options[prop];
			}
		}

		return returnOptions;
	}

	return {
		setters: [],
		execute: function () {}
	};
});