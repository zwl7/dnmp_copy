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
const utils_http = require("../../utils/http.js");
const utils_index = require("../../utils/index.js");
let baseURL = utils_index.getEvnBaseUrl();
const getUploadURL = () => `${utils_index.getEvnBaseUrl()}/file/upload`;
function downloadFile(id) {
  return window.open(`${baseURL}/downloadFile?id=${id}`);
}
const uploadFile = (params) => utils_http.request.upload(__spreadValues({
  url: "/file/upload",
  dataType: "json",
  headers: {
    "content-type": "multipart/form-data"
  }
}, params || {}));
const uploadPic = (params) => common_vendor.index.uploadFile(__spreadValues({
  url: `${baseURL}/img/upload`,
  formData: {
    size: 5
  },
  name: "image"
}, params || {}));
const base = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  downloadFile,
  getUploadURL,
  uploadFile,
  uploadPic
}, Symbol.toStringTag, { value: "Module" }));
exports.base = base;
exports.uploadPic = uploadPic;
//# sourceMappingURL=index.js.map
