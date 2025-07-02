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
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    agreementData: {
      type: String,
      default: ""
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    open() {
      this.$refs["addUserPopup"].open();
    },
    close() {
      this.$refs["addUserPopup"].close();
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  const _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
  (_easycom_uv_icon2 + _easycom_uv_safe_bottom2 + _easycom_uv_popup2)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_safe_bottom = () => "../../../node-modules/@climblee/uv-ui/components/uv-safe-bottom/uv-safe-bottom.js";
const _easycom_uv_popup = () => "../../../node-modules/@climblee/uv-ui/components/uv-popup/uv-popup.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_safe_bottom + _easycom_uv_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "close"
    }),
    b: common_vendor.o((...args) => $options.close && $options.close(...args)),
    c: common_vendor.sr("addUserPopup", "75696443-0"),
    d: common_vendor.p(__spreadProps(__spreadValues({}, _ctx.$attrs), {
      mode: "bottom",
      round: 16,
      ["custom-style"]: "height: 400rpx;"
    }))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-75696443"]]);
wx.createComponent(Component);
