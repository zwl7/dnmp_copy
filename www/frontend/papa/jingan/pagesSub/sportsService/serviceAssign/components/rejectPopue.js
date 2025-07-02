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
const bottomButton = () => "../../../../components/bottomButton.js";
const _sfc_main = {
  components: {
    bottomButton
  },
  props: {
    editable: {
      type: Boolean,
      default: false
      // edit view
    },
    reason: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      customStyle: {
        width: "80%",
        minHeight: "30%",
        borderRadius: "32rpx",
        padding: " 32rpx 40rpx",
        overflow: "visible"
      }
    };
  },
  methods: {
    change(e) {
      console.log(e);
    },
    open() {
      this.$refs.popup.open();
    },
    close() {
      this.$refs.popup.close();
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_textarea2 = common_vendor.resolveComponent("uv-textarea");
  const _component_BottomButton = common_vendor.resolveComponent("BottomButton");
  const _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
  (_easycom_uv_icon2 + _easycom_uv_textarea2 + _component_BottomButton + _easycom_uv_popup2)();
}
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_textarea = () => "../../../../node-modules/@climblee/uv-ui/components/uv-textarea/uv-textarea.js";
const _easycom_uv_popup = () => "../../../../node-modules/@climblee/uv-ui/components/uv-popup/uv-popup.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_textarea + _easycom_uv_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.editable ? "请填写拒单原因" : "拒单原因"),
    b: common_vendor.o($options.close),
    c: common_vendor.p({
      name: "close",
      size: "20",
      color: "#999"
    }),
    d: $props.editable
  }, $props.editable ? {
    e: common_vendor.o(($event) => _ctx.value = $event),
    f: common_vendor.p({
      height: "135rpx",
      placeholder: "请输入内容",
      border: "none",
      modelValue: _ctx.value
    }),
    g: common_vendor.o(($event) => _ctx.$emit("confirm", _ctx.value))
  } : {
    h: common_vendor.t($props.reason || "暂无填写原因")
  }, {
    i: common_vendor.sr("popup", "758747dc-0"),
    j: common_vendor.p(__spreadProps(__spreadValues({
      mode: "center"
    }, _ctx.$attrs), {
      customStyle: __spreadValues(__spreadValues({}, $data.customStyle), _ctx.$attrs.customStyle)
    }))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-758747dc"]]);
wx.createComponent(Component);
