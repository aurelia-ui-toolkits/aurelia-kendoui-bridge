define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Test = (function () {
		function Test() {
			_classCallCheck(this, _Test);
		}

		var _Test = Test;
		Test = (0, _aureliaFramework.customElement)('test')(Test) || Test;
		return Test;
	})();

	exports.Test = Test;
});