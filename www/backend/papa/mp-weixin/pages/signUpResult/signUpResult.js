"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      applicant_id: ""
    };
  },
  onLoad(options) {
    this.applicant_id = options.applicant_id;
  },
  methods: {
    handleClick(type) {
      if (type == 1) {
        common_vendor.index.redirectTo({
          url: "/pages/signUpDetail/signUpDetail?applicant_id=" + this.applicant_id
        });
      } else {
        common_vendor.index.redirectTo({
          url: "/pages/activityCalendar/activityCalendar"
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.o(($event) => $options.handleClick(1)),
    c: common_vendor.o(($event) => $options.handleClick(2))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0ddc2f1c"], ["__file", "E:/gxm/uniapp-shandong/pages/signUpResult/signUpResult.vue"]]);
wx.createPage(MiniProgramPage);
