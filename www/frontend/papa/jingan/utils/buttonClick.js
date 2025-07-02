"use strict";
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
exports.throttle = throttle;
