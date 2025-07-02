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
const common_vendor = require("../../../common/vendor.js");
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const apis_common = require("../../../apis/common.js");
const utils_util = require("../../../utils/util.js");
const common_assets = require("../../../common/assets.js");
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
      video_url: ""
    };
  },
  onLoad(options) {
    this.news_id = options.news_id;
    this.getNewsDetail();
    this.share = {
      title: "",
      withShareTicket: true
    };
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
          if (!data.des) {
            data.des = "暂无简介";
          }
          let show_time = data.released_time ? data.released_time : data.c_time;
          data.show_time = this.$timeFrom(new Date(show_time).getTime(), "yyyy-mm-dd hh:MM:ss");
          this.info = data;
          this.load_finish = true;
          this.video_url = data.video_url[0].video_url;
          if (data.url) {
            this.$openUrl(data.url);
          }
          this.share.title = res.data.name;
        } else {
          console.error(res);
        }
      });
    },
    fullscreenchange(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _component_pa_tag = common_vendor.resolveComponent("pa-tag");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_pa_tag + _easycom_uv_icon2 + _easycom_uni_icons2 + _component_layout_default_uni)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uni_icons)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.video_url,
    b: common_vendor.o((...args) => $options.fullscreenchange && $options.fullscreenchange(...args)),
    c: common_vendor.t($data.info.name),
    d: common_vendor.p({
      text: $data.info.type_str
    }),
    e: common_vendor.t($data.info.visit_count),
    f: common_vendor.t($data.info.show_time),
    g: common_vendor.t($data.info.love_count || 0),
    h: common_vendor.p({
      name: $data.info.is_love ? $data.praiseFill : $data.praise,
      size: "15"
    }),
    i: common_vendor.o((...args) => $options.handlePraise && $options.handlePraise(...args)),
    j: _ctx.video_type != "fit" && $data.info.status == 2
  }, _ctx.video_type != "fit" && $data.info.status == 2 ? {
    k: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "icon-report",
      color: "#C8C9CC",
      size: "16"
    }),
    l: common_vendor.o(($event) => _ctx.openInform(_ctx.item))
  } : {}, {
    m: $data.info.des
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
