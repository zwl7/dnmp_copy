"use strict";
const apis_common = require("../../apis/common.js");
const common_vendor = require("../../common/vendor.js");
require("../../utils/http.js");
require("../../core/config.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
const _sfc_main = {
  data() {
    return {
      info: {},
      notice_id: "",
      showSwiper: false
    };
  },
  onLoad(options) {
    this.notice_id = options.notice_id;
    this.getWxNoticeDetail();
  },
  methods: {
    async getWxNoticeDetail() {
      let res = await apis_common.getWxNoticeDetail({
        notice_id: this.notice_id
      });
      if (res.code == 200) {
        let data = res.data;
        data.des = data.des.replace(/\<img/gi, '<img style="max-width:100%;height:auto"');
        if (data.images_url && data.images_url.length > 0 || data.video_url && data.video_url.length > 0) {
          this.showSwiper = true;
        }
        this.info = data;
      } else {
        console.error(res);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.showSwiper
  }, $data.showSwiper ? {
    b: common_vendor.f($data.info.images_url, (image, index, i0) => {
      return {
        a: image,
        b: index
      };
    })
  } : {}, {
    c: common_vendor.t($data.info.name),
    d: common_vendor.t($data.info.released_time ? $data.info.released_time : $data.info.c_time),
    e: $data.info.des
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1c2e4c1e"], ["__file", "E:/gxm/uniapp-shandong/pages/notice/notice.vue"]]);
wx.createPage(MiniProgramPage);
