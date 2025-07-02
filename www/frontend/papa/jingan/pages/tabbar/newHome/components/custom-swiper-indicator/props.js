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
var _a, _b;
const common_vendor = require("../../../../../common/vendor.js");
const props = {
  props: __spreadValues({
    // 轮播的长度
    length: {
      type: [String, Number],
      default: 0
    },
    // 当前处于活动状态的轮播的索引
    current: {
      type: [String, Number],
      default: 0
    },
    // 指示器非激活颜色
    indicatorActiveColor: {
      type: String,
      default: ""
    },
    // 指示器的激活颜色
    indicatorInactiveColor: {
      type: String,
      default: ""
    },
    // 指示器模式，line-线型，dot-点型
    indicatorMode: {
      type: String,
      default: ""
    }
  }, (_b = (_a = common_vendor.index.$uv) == null ? void 0 : _a.props) == null ? void 0 : _b.swiperIndicator)
};
exports.props = props;
