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
const common_vendor = require("../../common/vendor.js");
const mixins_shareMixins = require("../../mixins/shareMixins.js");
const apis_common = require("../../apis/common.js");
const utils_util = require("../../utils/util.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  data() {
    return {
      praiseFill: common_assets.praiseFill,
      praise: common_assets.praise,
      load_finish: false,
      info: {
        des: ``
      },
      news_id: "",
      videoPlay: false
      // 视频是否在播放
    };
  },
  computed: {
    showSwiper() {
      return this.imageList.length > 0 || this.videoList.length > 0;
    },
    imageList() {
      return this.info.images_info || [];
    },
    videoList() {
      return this.info.video_url || [];
    },
    showVideoProgress() {
      return this.videoPlay;
    }
  },
  onLoad(options) {
    this.news_id = options.news_id;
    this.getNewsDetail();
    this.share = {
      title: "",
      withShareTicket: true
    };
    if (options.title) {
      common_vendor.index.setNavigationBarTitle({
        title: decodeURIComponent(options.title)
      });
    }
  },
  methods: {
    handlePraise() {
      common_vendor.index.$uv.throttle(() => __async(this, null, function* () {
        let flag = yield getApp().judgeIsAuth();
        if (!flag) {
          return;
        }
        let res = yield apis_common.wxMemberDataReport({
          resource_type: 12,
          resource_id: this.news_id,
          action: !this.info.is_love ? "add" : "cancel"
        });
        if (res.code == 200) {
          this.info.is_love = !this.info.is_love;
          let loveNum = Number(this.info.love_count || 0);
          this.info.love_count = this.info.is_love ? loveNum + 1 : loveNum - 1;
        } else {
          common_vendor.index.showToast({
            type: "none",
            title: res.message
          });
        }
      }), 1e3);
    },
    getNewsDetail() {
      return __async(this, null, function* () {
        let res = yield apis_common.getNewsDetail({
          news_id: this.news_id
        });
        if (res.code == 200) {
          let data = res.data;
          data.des = utils_util.formatRichText(data.des);
          if (data.images_url && data.images_url.length > 0) {
            this.share.imageUrl = data.images_url[0];
          }
          let show_time = data.released_time ? data.released_time : data.c_time;
          data.show_time = this.$timeFrom(new Date(show_time).getTime(), "yyyy-mm-dd hh:MM:ss");
          this.info = data;
          this.load_finish = true;
          if (data.url) {
            this.$openUrl(data.url);
          }
          this.share.title = res.data.name;
        } else {
          console.error(res);
        }
      });
    },
    onVideoPlay() {
      this.videoPlay = true;
    },
    onVideoPause() {
      this.videoPlay = false;
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_icon2 + _component_layout_default_uni)();
}
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.info.name),
    b: common_vendor.t($data.info.show_time),
    c: common_vendor.t($data.info.visit_count),
    d: common_vendor.t($data.info.love_count || 0),
    e: common_vendor.p({
      name: $data.info.is_love ? $data.praiseFill : $data.praise,
      size: "15"
    }),
    f: common_vendor.o((...args) => $options.handlePraise && $options.handlePraise(...args)),
    g: common_vendor.f($options.videoList, (item, index, i0) => {
      return {
        a: "video" + index,
        b: item.video_url,
        c: item.banner_url,
        d: common_vendor.o((...args) => $options.onVideoPlay && $options.onVideoPlay(...args), index),
        e: common_vendor.o((...args) => $options.onVideoPause && $options.onVideoPause(...args), index),
        f: index
      };
    }),
    h: $options.showVideoProgress,
    i: common_vendor.f($options.imageList, (item, index, i0) => {
      return {
        a: item.url,
        b: index
      };
    }),
    j: $options.showSwiper,
    k: $data.info.des
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d2a52f62"]]);
wx.createPage(MiniProgramPage);
