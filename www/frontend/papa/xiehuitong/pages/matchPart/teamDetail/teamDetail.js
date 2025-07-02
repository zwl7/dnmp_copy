"use strict";
const common_vendor = require("../../../common/vendor.js");
const bottomButton = () => "../../../components/bottomButton.js";
const roundButton = () => "../components/roundButton.js";
const ceilLine = () => "../components/ceilLine.js";
const _sfc_main = {
  components: {
    bottomButton,
    roundButton,
    ceilLine
  },
  data() {
    return {
      value: "",
      customStyle: {
        height: "100rpx",
        backgroundColor: "#fafbfd",
        boxSizing: "border-box",
        border: "none"
      }
    };
  },
  methods: {
    change() {
    }
  }
};
if (!Array) {
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _component_ceil_line = common_vendor.resolveComponent("ceil-line");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_input2 + _component_ceil_line + _component_bottomButton + _component_layout_default_uni)();
}
const _easycom_uv_input = () => "../../../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
if (!Math) {
  _easycom_uv_input();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change),
    b: common_vendor.o(($event) => $data.value = $event),
    c: common_vendor.p({
      placeholder: "请输入内容",
      customStyle: $data.customStyle,
      modelValue: $data.value
    }),
    d: common_vendor.p({
      title: "张三",
      value: "详情"
    }),
    e: common_vendor.p({
      title: "张三",
      value: "详情"
    }),
    f: common_vendor.p({
      title: "张三",
      value: "详情",
      border: true,
      ["is-group"]: true
    }),
    g: common_vendor.p({
      title: "张三",
      value: "详情",
      border: true,
      ["is-group"]: true
    }),
    h: common_vendor.p({
      title: "张三",
      value: "详情",
      ["is-group"]: true
    }),
    i: common_vendor.p({
      disabled: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f4be6f9d"]]);
wx.createPage(MiniProgramPage);
