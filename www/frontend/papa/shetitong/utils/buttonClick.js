"use strict";
function debounce(fn, interval) {
  var timer;
  var gapTime = interval;
  return function() {
    clearTimeout(timer);
    var context = this;
    var args = arguments;
    timer = setTimeout(function() {
      fn.call(context, ...args);
    }, gapTime);
  };
}
function throttle(fn, interval) {
  var enterTime = 0;
  var gapTime = interval;
  return function() {
    var context = this;
    var backTime = /* @__PURE__ */ new Date();
    if (backTime - enterTime > gapTime) {
      fn.call(context, arguments);
      enterTime = backTime;
    }
  };
}
exports.debounce = debounce;
exports.throttle = throttle;
//# sourceMappingURL=buttonClick.js.map
