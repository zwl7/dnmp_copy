"use strict";
const prototypeInterceptor = {
  install() {
    if (typeof Array.prototype.at !== "function") {
      Array.prototype.at = function(index) {
        if (index < 0)
          return this[this.length + index];
        if (index >= this.length)
          return void 0;
        return this[index];
      };
    }
  }
};
exports.prototypeInterceptor = prototypeInterceptor;
//# sourceMappingURL=prototype.js.map
