"use strict";
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const mixins_shareMixins = require("../../mixins/shareMixins.js");
const apis_home_index = require("../../apis/home/index.js");
const utils_index = require("../../utils/index.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  data() {
    return {
      info: {
        images_url: []
      },
      notice_id: "",
      showSwiper: false
    };
  },
  onLoad(options) {
    this.notice_id = options.notice_id;
    this.getWxNoticeDetail();
  },
  methods: {
    getWxNoticeDetail() {
      return __async(this, null, function* () {
        let res = yield apis_home_index.getWxNoticeDetail({
          notice_id: this.notice_id
        });
        if (res.code == 200) {
          let data = res.data;
          data.des = utils_index.formatRichText(data.des);
          if (data.images_url && data.images_url.length > 0 || data.video_url && data.video_url.length > 0) {
            this.showSwiper = true;
          }
          this.info = data;
        } else {
          console.error(res);
        }
      });
    }
  }
};
if (!Array) {
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  _component_layout_default_uni();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.showSwiper
  }, $data.showSwiper ? {
    b: common_vendor.f($data.info.images_url, (image, index, i0) => {
      return {
        a: image.http_img,
        b: index
      };
    })
  } : {}, {
    c: common_vendor.t($data.info.name),
    d: common_vendor.t($data.info.released_time ? $data.info.released_time : $data.info.c_time),
    e: $data.info.des
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-884aa6e0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=detail.js.map
