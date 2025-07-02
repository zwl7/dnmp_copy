"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const api_base_index = require("./base/index.js");
const api_user_index = require("./user/index.js");
const api_home_index = require("./home/index.js");
const api_realname_index = require("./realname/index.js");
const api_voluntaryActivity_index = require("./voluntaryActivity/index.js");
const api_trainActivity_index = require("./trainActivity/index.js");
const api_instructorSite_index = require("./instructorSite/index.js");
const api = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, api_base_index.base), api_user_index.user), api_home_index.home), api_realname_index.realname), api_voluntaryActivity_index.voluntaryActivity), api_trainActivity_index.trainActivity), api_instructorSite_index.instructorSite);
const api$1 = {
  install(app) {
    app.config.globalProperties.$api = api;
  }
};
exports.api = api$1;
//# sourceMappingURL=index.js.map
