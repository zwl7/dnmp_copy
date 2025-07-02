"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "报名成功"
    };
  },
  computed: {
    success_icon() {
      return this.$store.app.currentThemeIconByType["SUCCESS_ICON"];
    }
  },
  onLoad(options) {
    if (options.title) {
      this.title = options.title;
    }
    if (this.type == "train") {
      common_vendor.index.setNavigationBarTitle({ title: "报名结果" });
    }
    if (this.type == "activity") {
      common_vendor.index.setNavigationBarTitle({ title: "发布结果" });
    }
  },
  methods: {
    jumpToQrcode() {
      common_vendor.index.switchTab({ url: "/pages/tabbar/home/index" });
    }
  }
};
if (!Array) {
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_button2 + _component_layout_default_uni)();
}
const _easycom_uv_button = () => "../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
if (!Math) {
  _easycom_uv_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $options.success_icon,
    b: common_vendor.t($data.title),
    c: common_vendor.o($options.jumpToQrcode),
    d: common_vendor.p({
      type: "info",
      shape: "circle",
      loadingText: "登录中",
      ripple: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cd512efe"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=success.js.map
