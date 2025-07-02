"use strict";
const common_vendor = require("../../../common/vendor.js");
const core_themeMixins = require("../../../core/themeMixins.js");
const _sfc_main = {
  mixins: [core_themeMixins.themeMixins],
  data() {
    return {
      title: "报名成功",
      type: "activity"
      // helath
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
    jumpToQrcode(type) {
      if (type == 2) {
        common_vendor.index.reLaunch({
          url: "/pages/tabbar/home/home"
        });
      } else {
        common_vendor.index.redirectTo({
          url: "/pages/matchPart/myMatchList/myMatchList"
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
  return {
    a: _ctx.getThemeIcon("result_success"),
    b: common_vendor.t($data.title),
    c: common_vendor.o(($event) => $options.jumpToQrcode(1)),
    d: common_vendor.o(($event) => $options.jumpToQrcode(2))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1dc790f0"]]);
wx.createPage(MiniProgramPage);
