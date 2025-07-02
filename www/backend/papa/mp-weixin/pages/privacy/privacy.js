"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      privacy: ""
    };
  },
  onLoad() {
    let app = getApp();
    console.log(app.globalData.privacy);
    this.privacy = app.globalData.privacy;
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.privacy
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-33d54784"], ["__file", "E:/gxm/uniapp-shandong/pages/privacy/privacy.vue"]]);
wx.createPage(MiniProgramPage);
