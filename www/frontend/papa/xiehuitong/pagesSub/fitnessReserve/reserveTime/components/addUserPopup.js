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
const utils_reg = require("../../../../utils/reg.js");
const common_vendor = require("../../../../common/vendor.js");
const bottomButton = () => "../../../../components/bottomButton.js";
const _sfc_main = {
  props: {},
  components: {
    bottomButton
  },
  data() {
    return {
      userInfo: {
        name: "",
        card: "",
        checkValue: []
      },
      rules: {
        name: {
          type: "string",
          required: true,
          message: "请填写姓名",
          trigger: ["blur", "change"]
        },
        card: {
          type: "string",
          required: true,
          pattern: utils_reg.reg_cp,
          message: "身份证号格式不正确",
          trigger: ["blur", "change"]
        }
      }
    };
  },
  methods: {
    open() {
      this.$refs["addUserPopup"].open();
    },
    close() {
      this.$refs["addUserPopup"].close();
    },
    handleAdd() {
      this.$refs.form.validate().then((res) => {
        let obj = JSON.parse(JSON.stringify(this.userInfo));
        this.$emit("sendData", obj);
        this.close();
        this.userInfo = {
          name: "",
          card: "",
          checkValue: []
        };
      }).catch((errors) => {
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
  (_easycom_uv_icon2 + _easycom_uv_input2 + _easycom_uv_form_item2 + _easycom_uv_form2 + _component_bottomButton + _easycom_uv_popup2)();
}
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_input = () => "../../../../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
const _easycom_uv_form_item = () => "../../../../node-modules/@climblee/uv-ui/components/uv-form-item/uv-form-item.js";
const _easycom_uv_form = () => "../../../../node-modules/@climblee/uv-ui/components/uv-form/uv-form.js";
const _easycom_uv_popup = () => "../../../../node-modules/@climblee/uv-ui/components/uv-popup/uv-popup.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_input + _easycom_uv_form_item + _easycom_uv_form + _easycom_uv_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "close"
    }),
    b: common_vendor.o((...args) => $options.close && $options.close(...args)),
    c: common_vendor.o(($event) => $data.userInfo.name = $event),
    d: common_vendor.p({
      placeholder: "请输入姓名",
      border: "none",
      ["cursor-spacing"]: "0",
      modelValue: $data.userInfo.name
    }),
    e: common_vendor.p({
      label: "姓名",
      prop: "name",
      borderBottom: true,
      required: true
    }),
    f: common_vendor.o(($event) => $data.userInfo.card = $event),
    g: common_vendor.p({
      placeholder: "请输入身份证号",
      border: "none",
      ["cursor-spacing"]: "0",
      modelValue: $data.userInfo.card
    }),
    h: common_vendor.p({
      label: "身份证号",
      prop: "card",
      borderBottom: true,
      required: true
    }),
    i: common_vendor.sr("form", "28aec92d-2,28aec92d-0"),
    j: common_vendor.p({
      labelPosition: "left",
      model: $data.userInfo,
      labelWidth: "184rpx",
      rules: $data.rules
    }),
    k: common_vendor.o($options.handleAdd),
    l: common_vendor.sr("addUserPopup", "28aec92d-0"),
    m: common_vendor.p(__spreadProps(__spreadValues({}, _ctx.$attrs), {
      mode: "center",
      round: 16
    }))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-28aec92d"]]);
wx.createComponent(Component);
