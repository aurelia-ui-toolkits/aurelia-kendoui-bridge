"use strict";

exports.__esModule = true;
exports.configure = configure;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function configure(aurelia, configCallback) {

	var builder = new kendoConfigBuilder();

	if (configCallback !== undefined && typeof configCallback === 'function') {
		configCallback(builder);
	}

	if (builder.resources.length === 0) {
		console.warn("Nothing specified for kendo configuration - using defaults for Kendo Core");
		builder.core();
	}

	var resources = builder.resources;

	resources = resources.map(function (r) {
		return r + "/" + r;
	});

	aurelia.globalResources(resources);
}

var kendoConfigBuilder = (function () {
	function kendoConfigBuilder() {
		_classCallCheck(this, kendoConfigBuilder);

		this.resources = [];
	}

	kendoConfigBuilder.prototype.core = function core() {
		this.kendoButton().kendoTabStrip();
		return this;
	};

	kendoConfigBuilder.prototype.pro = function pro() {
		this.core().kendoAutoComplete();
		return this;
	};

	kendoConfigBuilder.prototype.kendoButton = function kendoButton() {
		this.resources.push("button");
		return this;
	};

	kendoConfigBuilder.prototype.kendoTabStrip = function kendoTabStrip() {
		this.resources.push("tabstrip");
		return this;
	};

	kendoConfigBuilder.prototype.kendoAutoComplete = function kendoAutoComplete() {
		this.resources.push("autocomplete");
		return this;
	};

	return kendoConfigBuilder;
})();