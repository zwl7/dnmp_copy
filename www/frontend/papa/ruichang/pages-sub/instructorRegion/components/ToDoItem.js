"use strict";
const common_vendor = require("../../../common/vendor.js");
const LevelIcon = () => "../../../components/LevelIcon/index.js";
const _sfc_main = {
  name: "stadiumItem",
  components: {
    LevelIcon
  },
  emits: ["reserve", "click"],
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_easycom_uv_icon2 + _easycom_uv_button2)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_button = () => "../../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "arrow-right",
      size: "16",
      color: "#606266"
    }),
    b: common_vendor.p({
      name: "map",
      size: "14",
      color: "#909399"
    }),
    c: common_vendor.p({
      name: "account",
      size: "16",
      color: "#909399"
    }),
    d: common_vendor.p({
      name: "clock",
      size: "14",
      color: "#909399"
    }),
    e: common_vendor.p({
      ["custom-style"]: {
        height: "56rpx",
        borderRadius: "28rpx",
        background: "linear-gradient(227.21deg, #1B8BFF 0%, #6AD1FF 100%)"
      },
      color: "#fff",
      text: "发布服务风采"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ab0b2a0d"]]);
wx.createComponent(Component);
//# sourceMappingURL=ToDoItem.js.map
