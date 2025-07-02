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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const common_vendor = require("../../common/vendor.js");
require("../index.js");
function useDialog(content, _a = {}) {
  var _b = _a, {
    title = "提示",
    showCancelButton = false,
    confirmButtonText = "确认",
    cancelButtonText = "取消"
  } = _b, moreOptions = __objRest(_b, [
    "title",
    "showCancelButton",
    "confirmButtonText",
    "cancelButtonText"
  ]);
  return new Promise((resolve, reject) => {
    common_vendor.index.showModal(__spreadProps(__spreadValues({
      title,
      content,
      confirmText: confirmButtonText,
      cancelText: cancelButtonText,
      showCancel: showCancelButton
    }, moreOptions), {
      success({ cancel }) {
        if (cancel) {
          reject({ type: "cancel" });
        }
        resolve({ type: "confirm" });
      }
    }));
  });
}
function useToast(content, _c = {}) {
  var _d = _c, { position = "center", duration = 1e3, overlay = true, icon = "none" } = _d, moreOptions = __objRest(_d, ["position", "duration", "overlay", "icon"]);
  if (!content) {
    common_vendor.index.hideToast();
    return;
  }
  common_vendor.index.showToast(__spreadValues({
    title: content,
    position,
    duration,
    mask: overlay,
    icon
  }, moreOptions));
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(common_vendor.index);
    }, duration);
  });
}
function useLoading(content, _e = {}) {
  var _f = _e, { overlay = true } = _f, moreOptions = __objRest(_f, ["overlay"]);
  if (content && typeof content === "boolean") {
    content = "努力加载中...";
  }
  if (!content) {
    common_vendor.index.hideLoading();
    return;
  }
  common_vendor.index.showLoading(__spreadValues({
    title: content,
    mask: overlay
  }, moreOptions));
}
function jumpToPath(path) {
  common_vendor.index.navigateTo({
    url: path,
    fail: (err) => {
      common_vendor.index.switchTab({
        url: path
      });
    }
  });
}
exports.jumpToPath = jumpToPath;
exports.useDialog = useDialog;
exports.useLoading = useLoading;
exports.useToast = useToast;
//# sourceMappingURL=uniapp.js.map
