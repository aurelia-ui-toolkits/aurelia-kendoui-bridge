System.register(['aurelia-framework'], function (_export) {
	'use strict';

	var bindable, customElement, Test;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFramework) {
			bindable = _aureliaFramework.bindable;
			customElement = _aureliaFramework.customElement;
		}],
		execute: function () {
			Test = (function () {
				function Test() {
					_classCallCheck(this, _Test);
				}

				var _Test = Test;
				Test = customElement('test')(Test) || Test;
				return Test;
			})();

			_export('Test', Test);
		}
	};
});