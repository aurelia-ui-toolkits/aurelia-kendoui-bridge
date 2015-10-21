'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var Test = (function () {
	function Test() {
		_classCallCheck(this, _Test);
	}

	var _Test = Test;
	Test = (0, _aureliaFramework.customElement)('test')(Test) || Test;
	return Test;
})();

exports.Test = Test;