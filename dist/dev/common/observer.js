'use strict';

System.register(['aurelia-dependency-injection'], function (_export, _context) {
  "use strict";

  var transient, _dec, _class, Observer;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      transient = _aureliaDependencyInjection.transient;
    }],
    execute: function () {
      _export('Observer', Observer = (_dec = transient(), _dec(_class = function () {
        function Observer() {
          _classCallCheck(this, Observer);

          this.subscriptions = [];
        }

        Observer.prototype.notify = function notify(evt, data) {
          for (var i = 0; i < this.subscriptions.length; i++) {
            if (this.subscriptions[i].event === evt) {
              this.subscriptions[i].callback(evt, data);
            }
          }
        };

        Observer.prototype.subscribe = function subscribe(evt, cb) {
          var _this = this;

          var subscription = { event: evt, callback: cb };

          this.subscriptions.push(subscription);

          return {
            dispose: function dispose() {
              return _this.unsubscribe(subscription);
            }
          };
        };

        Observer.prototype.unsubscribe = function unsubscribe(subscription) {
          var index = this.subscriptions.indexOf(subscription);

          if (index > -1) {
            this.subscriptions.splice(index, 1);
          }
        };

        return Observer;
      }()) || _class));

      _export('Observer', Observer);
    }
  };
});
//# sourceMappingURL=../dist/dev/common/observer.js.map
