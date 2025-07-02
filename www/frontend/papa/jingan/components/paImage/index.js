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
const _sfc_main = {
  name: "paImage",
  props: {
    src: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    },
    errorIcon: {
      type: String,
      default: ""
    },
    mode: {
      type: String,
      default: "aspectFill"
    }
  },
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_uv_image2 = common_vendor.resolveComponent("uv-image");
  _easycom_uv_image2();
}
const _easycom_uv_image = () => "../../node-modules/@climblee/uv-ui/components/uv-image/uv-image.js";
if (!Math) {
  _easycom_uv_image();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.errorIcon,
    b: $props.mode,
    c: common_vendor.p(__spreadValues({
      src: $props.src,
      mode: $props.mode,
      width: $props.width,
      height: $props.height
    }, _ctx.$attrs))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f4f4eab8"]]);
wx.createComponent(Component);
