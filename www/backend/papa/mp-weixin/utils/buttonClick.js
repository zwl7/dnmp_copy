"use strict";
function debounce(fn, interval) {
  var timer;
  var gapTime = interval || 1e3;
  return function() {
    clearTimeout(timer);
    var context = this;
    var args = arguments;
    timer = setTimeout(function() {
      fn.call(context, args);
    }, gapTime);
  };
}
exports.debounce = debounce;
