"use strict";
const common_vendor = require("../../../common/vendor.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const _sfc_main = {
  mixins: [mixins_themeMixins.themeMixins],
  data() {
    return {
      title: "报名成功",
      type: "activity"
      // health
    };
  },
  onLoad(options) {
    this.applicant_id = options.applicant_id;
    if (options.title) {
      this.title = options.title;
    }
    if (this.type) {
      this.type = options.type;
    }
  },
  methods: {
    jumpToQrcode() {
      if (this.type == "health") {
        common_vendor.index.redirectTo({
          url: "/pages/mySubscribe/mySubscribe"
        });
      } else {
        common_vendor.index.redirectTo({
          url: `/pages/orderVoucher/orderVoucher?applicant_id=${this.applicant_id}`
        });
      }
    }
  }
};
if (!Array) {
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  _component_layout_default_uni();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.type == "helath"
  }, $data.type == "helath" ? {
    b: _ctx.getThemeIcon("result_success"),
    c: common_vendor.t($data.title),
    d: common_vendor.o((...args) => $options.jumpToQrcode && $options.jumpToQrcode(...args))
  } : {
    e: _ctx.getThemeIcon("result_success"),
    f: common_vendor.t($data.title),
    g: common_vendor.o((...args) => $options.jumpToQrcode && $options.jumpToQrcode(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c68e41f6"]]);
wx.createPage(MiniProgramPage);
