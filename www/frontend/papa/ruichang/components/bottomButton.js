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
const mixins_themeMixins = require("../mixins/themeMixins.js");
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  mixins: [mixins_themeMixins.themeMixins],
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
    },
    buttonType: {
      type: String,
      default: "primary"
      // 主要按钮primary  次级按钮 lesser  镂空按钮 plain
    }
  },
  data() {
    return {};
  },
  computed: {
    commonStyle() {
      let baseObj = {
        height: "80rpx",
        "font-size": "28rpx",
        "line-height": "80rpx",
        "border-style": "none",
        "border-radius": "200rpx"
      };
      let styleObj = this.getButtonTypeStyle();
      if (this.disabled) {
        baseObj.opacity = this.themeConfigGetter[`--hubei-${this.buttonType}-button-disabled-opacity`];
      }
      return __spreadValues(__spreadValues({}, baseObj), styleObj);
    }
  },
  methods: {
    click(e) {
      console.log("--------button");
      this.$emit("customClick", e);
      this.$emit("click", e);
    },
    getButtonTypeStyle() {
      let obj = {
        background: this.themeConfigGetter[`--hubei-${this.buttonType}-button-bg-color`],
        color: this.themeConfigGetter[`--hubei-${this.buttonType}-button-font-color`]
      };
      if (this.themeConfigGetter[`--hubei-${this.buttonType}-button-border-color`]) {
        obj.border = `1rpx solid ${this.themeConfigGetter[`--hubei-${this.buttonType}-button-border-color`]}`;
      }
      return obj;
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
//# sourceMappingURL=bottomButton.js.map
