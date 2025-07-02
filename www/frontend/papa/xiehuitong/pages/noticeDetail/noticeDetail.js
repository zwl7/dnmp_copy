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
const core_shareMixins = require("../../core/shareMixins.js");
const apis_index = require("../../apis/index.js");
const utils_util = require("../../utils/util.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  mixins: [core_shareMixins.shareMixins],
  data() {
    return {
      load_finish: false,
      info: {
        des: "",
        images_url: [],
        view: "",
        show_time: ""
      },
      notice_id: "",
      showSwiper: false
    };
  },
  onLoad(options) {
    this.notice_id = options.notice_id;
    this.getWxNoticeDetail();
    this.share = {
      title: "",
      path: "/pages/noticeDetail/noticeDetail?notice_id=" + this.notice_id,
      withShareTicket: true
    };
  },
  methods: {
    getWxNoticeDetail() {
      return __async(this, null, function* () {
        this.info.des = utils_util.formatRichText(this.info.des);
        let res = yield apis_index.getWxNoticeDetail({
          notice_id: this.notice_id
        });
        if (res.code == 200) {
          let data = res.data;
          data.des = utils_util.formatRichText(data.des);
          if (data.images_url && data.images_url.length > 0) {
            this.showSwiper = true;
            this.share.imageUrl = data.images_url[0];
          }
          let show_time = data.released_time ? data.released_time : data.c_time;
          data.show_time = this.$timeFrom(new Date(show_time).getTime(), "yyyy-mm-dd hh:MM:ss");
          this.info = data;
          this.load_finish = true;
          this.share.title = res.data.name;
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
    a: common_vendor.t($data.info.name),
    b: common_vendor.t($data.info.show_time),
    c: $data.info.view
  }, $data.info.view ? {
    d: common_vendor.t($data.info.view)
  } : {}, {
    e: $data.showSwiper
  }, $data.showSwiper ? {
    f: common_vendor.f($data.info.images_url, (image, index, i0) => {
      return {
        a: image,
        b: index
      };
    })
  } : {}, {
    g: $data.info.des
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9d4d6664"]]);
wx.createPage(MiniProgramPage);
