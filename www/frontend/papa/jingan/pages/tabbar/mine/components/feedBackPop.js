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
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {},
  // components: {
  //   bottomButton,
  // },
  data() {
    return {
      feedBackInfo: {
        des: ""
      },
      rules: {
        des: {
          type: "string",
          required: true,
          message: "请输入建议",
          trigger: ["blur", "change"]
        }
      }
    };
  },
  methods: {
    open() {
      this.$refs["addfeedBackPop"].open();
    },
    close() {
      this.$refs["addfeedBackPop"].close();
    },
    handleAdd() {
      this.$refs.form.validate().then((res) => {
        this.$emit("sendData", this.feedBackInfo);
        this.close();
        this.feedBackInfo.des = "";
      }).catch((errors) => {
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_textarea2 = common_vendor.resolveComponent("uv-textarea");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  const _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
  (_easycom_uv_icon2 + _easycom_uv_textarea2 + _easycom_uv_form_item2 + _easycom_uv_form2 + _easycom_uv_popup2)();
}
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_textarea = () => "../../../../node-modules/@climblee/uv-ui/components/uv-textarea/uv-textarea.js";
const _easycom_uv_form_item = () => "../../../../node-modules/@climblee/uv-ui/components/uv-form-item/uv-form-item.js";
const _easycom_uv_form = () => "../../../../node-modules/@climblee/uv-ui/components/uv-form/uv-form.js";
const _easycom_uv_popup = () => "../../../../node-modules/@climblee/uv-ui/components/uv-popup/uv-popup.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_textarea + _easycom_uv_form_item + _easycom_uv_form + _easycom_uv_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "close"
    }),
    b: common_vendor.o((...args) => $options.close && $options.close(...args)),
    c: common_vendor.o(($event) => $data.feedBackInfo.des = $event),
    d: common_vendor.p({
      placeholder: "请输入建议",
      count: true,
      maxlength: "100",
      height: "180rpx",
      border: "none",
      modelValue: $data.feedBackInfo.des
    }),
    e: common_vendor.p({
      prop: "des"
    }),
    f: common_vendor.sr("form", "0414e3d0-2,0414e3d0-0"),
    g: common_vendor.p({
      labelPosition: "left",
      labelWidth: "0rpx",
      model: $data.feedBackInfo,
      rules: $data.rules
    }),
    h: common_vendor.o((...args) => $options.close && $options.close(...args)),
    i: common_vendor.o((...args) => $options.handleAdd && $options.handleAdd(...args)),
    j: common_vendor.sr("addfeedBackPop", "0414e3d0-0"),
    k: common_vendor.p(__spreadProps(__spreadValues({}, _ctx.$attrs), {
      mode: "center",
      round: 16
    }))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
