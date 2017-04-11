define(['exports', 'aurelia-dependency-injection'], function (exports, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Observer = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Observer = exports.Observer = (_dec = (0, _aureliaDependencyInjection.transient)(), _dec(_class = function () {
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
  }()) || _class);
});