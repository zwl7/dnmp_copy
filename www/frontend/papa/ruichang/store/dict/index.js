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
const common_vendor = require("../../common/vendor.js");
const configs_dict_index = require("../../configs/dict/index.js");
const useDictStore = common_vendor.defineStore({
  id: "app-dict",
  state() {
    return {
      dictModel: {},
      dictData: __spreadValues({}, configs_dict_index.dictData)
    };
  },
  actions: {}
});
exports.useDictStore = useDictStore;
//# sourceMappingURL=index.js.map
