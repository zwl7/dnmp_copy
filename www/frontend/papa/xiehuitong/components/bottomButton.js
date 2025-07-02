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
const core_themeMixins = require("../core/themeMixins.js");
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  mixins: [core_themeMixins.themeMixins],
  options: {
    styleIsolation: "shared"
    // 解除样式隔离
  },
  props: {
    loadingText: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    commonStyle() {
      let obj = {
        height: "80rpx",
        "font-size": "28rpx",
        color: "#fff",
        background: `linear-gradient(227.21deg, ${this.themePrimaryColorGetter} 0%, ${this.themePrimaryLight2ColorGetter} 100%)`,
        "border-radius": "200rpx",
        "line-height": "80rpx",
        "border-style": "none"
      };
      if (this.disabled) {
        obj.background = this.themePrimaryLightColorGetter;
        obj.color = "#fff";
      }
      return obj;
    }
  },
  methods: {
    click(e) {
      console.log("--------button");
      this.$emit("customClick", e);
      this.$emit("click", e);
    }
  }
};
if (!Array) {
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  _easycom_uv_button2();
}
const _easycom_uv_button = () => "../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
if (!Math) {
  _easycom_uv_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.click),
    b: common_vendor.p(__spreadProps(__spreadValues({
      customStyle: __spreadValues(__spreadValues({}, $options.commonStyle), $props.customStyle),
      disabled: $props.disabled,
      loading: $props.loading,
      loadingText: $props.loadingText
    }, _ctx.$attrs), {
      throttleTime: 300
    }))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
