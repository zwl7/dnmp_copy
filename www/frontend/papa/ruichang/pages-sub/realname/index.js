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
const common_vendor = require("../../common/vendor.js");
const IdentityInfo = () => "./components/Identity/index.js";
const SuccessInfo = () => "./components/Success/index.js";
const ValidatePhone = () => "./components/ValidatePhone/index.js";
const _sfc_main = {
  components: {
    IdentityInfo,
    ValidatePhone,
    SuccessInfo
  },
  data() {
    return {
      progressActive: 0,
      progressModel: [
        {
          label: "信息填写",
          value: 0,
          component: "IdentityInfo"
        },
        {
          label: "手机号验证",
          value: 1,
          component: "ValidatePhone"
        },
        {
          label: "认证结果",
          value: 2,
          component: "SuccessInfo"
        }
      ],
      formData: {}
    };
  },
  computed: {
    currentProgress() {
      return this.progressModel[this.progressActive] || {};
    },
    activeColor() {
      return this.$store.app.themeConfig["--hubei-primary"];
    }
  },
  methods: {
    handler({ active = 0, params = {} } = {}) {
      this.handleActive(active);
      this.formData = __spreadValues(__spreadValues({}, this.formData), params);
    },
    handleActive(value) {
      this.progressActive = value;
    }
  }
};
if (!Array) {
  const _easycom_uv_steps_item2 = common_vendor.resolveComponent("uv-steps-item");
  const _easycom_uv_steps2 = common_vendor.resolveComponent("uv-steps");
  const _component_IdentityInfo = common_vendor.resolveComponent("IdentityInfo");
  const _component_ValidatePhone = common_vendor.resolveComponent("ValidatePhone");
  const _component_SuccessInfo = common_vendor.resolveComponent("SuccessInfo");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_steps_item2 + _easycom_uv_steps2 + _component_IdentityInfo + _component_ValidatePhone + _component_SuccessInfo + _component_layout_default_uni)();
}
const _easycom_uv_steps_item = () => "../../node-modules/@climblee/uv-ui/components/uv-steps-item/uv-steps-item.js";
const _easycom_uv_steps = () => "../../node-modules/@climblee/uv-ui/components/uv-steps/uv-steps.js";
if (!Math) {
  (_easycom_uv_steps_item + _easycom_uv_steps)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      title: "信息填写"
    }),
    b: common_vendor.p({
      title: "手机号验证"
    }),
    c: common_vendor.p({
      title: "认证结果"
    }),
    d: common_vendor.p(__spreadValues({}, {
      current: $options.currentProgress.value,
      activeColor: $options.activeColor
    })),
    e: $options.currentProgress.component === "IdentityInfo"
  }, $options.currentProgress.component === "IdentityInfo" ? {
    f: common_vendor.p(__spreadValues({}, __spreadProps(__spreadValues({}, $options.currentProgress), {
      handler: $options.handler,
      params: $data.formData
    })))
  } : {}, {
    g: $options.currentProgress.component === "ValidatePhone"
  }, $options.currentProgress.component === "ValidatePhone" ? {
    h: common_vendor.p(__spreadValues({}, __spreadProps(__spreadValues({}, $options.currentProgress), {
      handler: $options.handler,
      params: $data.formData
    })))
  } : {}, {
    i: $options.currentProgress.component === "SuccessInfo"
  }, $options.currentProgress.component === "SuccessInfo" ? {
    j: common_vendor.p(__spreadValues({}, __spreadProps(__spreadValues({}, $options.currentProgress), {
      handler: $options.handler,
      params: $data.formData
    })))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ef7443e6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
