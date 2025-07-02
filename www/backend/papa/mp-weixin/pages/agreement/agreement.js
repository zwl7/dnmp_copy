"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      agreeement: ""
    };
  },
  onLoad() {
    let app = getApp();
    console.log(app.globalData.agreeement);
    this.agreeement = app.globalData.agreeement;
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.agreeement
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b6d09298"], ["__file", "E:/gxm/uniapp-shandong/pages/agreement/agreement.vue"]]);
wx.createPage(MiniProgramPage);
