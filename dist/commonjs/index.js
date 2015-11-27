"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

	_createClass(kendoConfigBuilder, [{
		key: "core",
		value: function core() {
			this.kendoButton().kendoTabStrip();
			return this;
		}
	}, {
		key: "pro",
		value: function pro() {
			this.core().kendoAutoComplete();
			return this;
		}
	}, {
		key: "kendoButton",
		value: function kendoButton() {
			this.resources.push("button");
			return this;
		}
	}, {
		key: "kendoTabStrip",
		value: function kendoTabStrip() {
			this.resources.push("tabstrip");
			return this;
		}
	}, {
		key: "kendoAutoComplete",
		value: function kendoAutoComplete() {
			this.resources.push("autocomplete");
			return this;
		}
	}]);

	return kendoConfigBuilder;
})();