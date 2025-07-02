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
      load_finish: false,
      info: {},
      news_id: "",
      showSwiper: false
    };
  },
  onLoad(options) {
    this.news_id = options.news_id;
    this.getNewsDetail();
  },
  methods: {
    async getNewsDetail() {
      let res = await apis_common.getNewsDetail({
        news_id: this.news_id
      });
      if (res.code == 200) {
        let data = res.data;
        data.des = data.des.replace(/\<img/gi, '<img style="max-width:100%;height:auto"');
        if (data.images_url && data.images_url.length > 0 || data.video_url && data.video_url.length > 0) {
          this.showSwiper = true;
        }
        this.info = data;
        this.load_finish = true;
        if (data.url) {
          this.$openUrl(data.url);
        }
      } else {
        console.error(res);
      }
    }
  }
};
if (!Array) {
  const _component_skeleton = common_vendor.resolveComponent("skeleton");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_component_skeleton + _easycom_uni_icons2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.load_finish
  }, !$data.load_finish ? {
    b: common_vendor.p({
      type: "detail"
    })
  } : common_vendor.e({
    c: $data.showSwiper
  }, $data.showSwiper ? {
    d: common_vendor.f($data.info.images_url, (image, index, i0) => {
      return {
        a: image,
        b: index
      };
    })
  } : {}, {
    e: common_vendor.t($data.info.name),
    f: common_vendor.t($data.info.released_time ? $data.info.released_time : $data.info.c_time),
    g: common_vendor.p({
      type: "eye",
      size: "18"
    }),
    h: common_vendor.t($data.info.visit_count),
    i: $data.info.des
  }));
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eca9fe72"], ["__file", "E:/gxm/uniapp-shandong/pages/newsDetail/newsDetail.vue"]]);
wx.createPage(MiniProgramPage);
