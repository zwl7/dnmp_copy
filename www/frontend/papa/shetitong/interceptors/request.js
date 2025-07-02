"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const common_vendor = require("../common/vendor.js");
require("../store/app/index.js");
const store_user_index = require("../store/user/index.js");
require("../store/dict/index.js");
const utils_index = require("../utils/index.js");
const baseUrl = utils_index.getEvnBaseUrl();
const companyId = utils_index.getEvnCompanyID();
const httpInterceptor = {
  invoke(options) {
    if (options.query) {
      const queryStr = common_vendor.qs.stringify(options.query);
      if (options.url.includes("?")) {
        options.url += `&${queryStr}`;
      } else {
        options.url += `?${queryStr}`;
      }
    }
    if (!options.url.startsWith("http")) {
      options.url = baseUrl + options.url;
    }
    options.timeout = 1e4;
    options.header = __spreadProps(__spreadValues({}, options.header), {
      origin: baseUrl.split("://")[1]
    });
    if (typeof options.data === "object") {
      options.data = __spreadProps(__spreadValues({}, options.data), {
        company_id: companyId
      });
    }
    const userStore = store_user_index.useUserStore();
    const token = userStore.token;
    if (token) {
      options.header.Authorization = `${token}`;
    }
  },
  success(options) {
    return options;
  }
};
const requestInterceptor = {
  install() {
    common_vendor.index.addInterceptor("request", httpInterceptor);
    common_vendor.index.addInterceptor("uploadFile", httpInterceptor);
  }
};
exports.requestInterceptor = requestInterceptor;
//# sourceMappingURL=request.js.map
