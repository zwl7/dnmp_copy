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
const core_themeMixins = require("../../core/themeMixins.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  mixins: [core_themeMixins.themeMixins],
  props: {
    current: {
      type: String,
      default: "0"
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    commonStyle: {
      type: Object,
      default: () => {
        return {
          "min-width": "180rpx",
          opacity: 1,
          "border-radius": "28rpx",
          height: "56rpx",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          "font-size": "28rpx"
        };
      }
    },
    customStyle: {
      type: Object,
      default: () => {
        return {
          "padding-left": "32rpx",
          "padding-right": "32rpx"
        };
      }
    },
    itemStyle: {
      type: Object,
      default: () => {
        return {
          padding: "10rpx 24rpx 10rpx 0rpx"
        };
      }
    },
    activeStyle: {
      type: Object,
      default: () => {
        return {
          "font-weight": 600,
          color: "#FFFFFF"
        };
      }
    },
    inactiveStyle: {
      type: Object,
      default: () => {
        return {
          background: "#FFFFFF",
          "font-weight": 400,
          color: "#646566"
        };
      }
    }
  },
  data() {
    return {
      // commonStyle: {
      //   "min-width": "180rpx",
      //   opacity: 1,
      //   "border-radius": "28rpx",
      //   height: "56rpx",
      //   display: "flex",
      //   "justify-content": "center",
      //   "align-items": "center",
      //   "font-size": "28rpx",
      // },
    };
  },
  computed: {
    activeStyleGetter() {
      return Object.assign(
        {},
        {
          background: `linear-gradient(227.21deg, ${this.themePrimaryColorGetter} 0%, ${this.themePrimaryLight2ColorGetter} 100%)`
        },
        this.activeStyle
      );
    }
  },
  methods: {
    clickItem(item) {
      this.$emit("click", item);
    }
  }
};
if (!Array) {
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  _easycom_uv_tabs2();
}
const _easycom_uv_tabs = () => "../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
if (!Math) {
  _easycom_uv_tabs();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.clickItem),
    b: common_vendor.p({
      list: $props.list,
      scrollable: $props.scrollable,
      lineColor: "transparent",
      activeStyle: __spreadValues(__spreadValues({}, $options.activeStyleGetter), $props.commonStyle),
      inactiveStyle: __spreadValues(__spreadValues({}, $props.inactiveStyle), $props.commonStyle),
      itemStyle: $props.itemStyle,
      customStyle: $props.customStyle,
      current: $props.current
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1e309488"]]);
wx.createComponent(Component);
