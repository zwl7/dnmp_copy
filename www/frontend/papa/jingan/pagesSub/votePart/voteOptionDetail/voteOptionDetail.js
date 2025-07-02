"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
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
const apis_vote = require("../../../apis/vote.js");
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const navBar = () => "../../../components/navBar/index.js";
const voteSuccessDialog = () => "./components/voteSuccessDialog.js";
const bottomButton = () => "../../../components/bottomButton.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  components: {
    navBar,
    bottomButton,
    voteSuccessDialog
  },
  data() {
    return {
      default_img: "https://cdn-static.papa.com.cn/yuncheng/voteZone/vote-default-avatar.png",
      info: {},
      navBarHeight: 0,
      navColor: "transparent",
      vote_options_id: "",
      loading: false
    };
  },
  onLoad(options) {
    const app = getApp();
    let { navBarHeight } = app.globalData;
    this.navBarHeight = navBarHeight;
    if (options.vote_options_id) {
      this.vote_options_id = options.vote_options_id;
      this.getDetail();
    }
  },
  onPageScroll(event) {
    let scrollTop = event.scrollTop;
    if (scrollTop > 60) {
      this.navColor = "#ebf4ff";
    } else {
      this.navColor = "transparent";
    }
  },
  methods: {
    vote() {
      return __async(this, null, function* () {
        let flag = yield getApp().judgeIsAuth(true);
        if (!flag) {
          return;
        }
        const res = yield apis_vote.toVote({ vote_options_id: this.vote_options_id });
        let { code, data, message } = res;
        if (code == 200) {
          this.$refs["voteSuccessDialog"].open();
          this.getDetail();
          let pages = getCurrentPages();
          pages.forEach((item) => {
            if (item.route == "pagesSub/votePart/voteDetail/voteDetail") {
              item.$vm.getDetail();
              item.$vm.resetData();
            } else if (item.route == "pagesSub/votePart/vote/vote" || item.route == "pagesSub/platform/search/search") {
              item.$vm.resetData();
            }
          });
        } else {
          common_vendor.index.showToast({
            title: message,
            icon: "none"
          });
        }
      });
    },
    getDetail() {
      return __async(this, null, function* () {
        let res = yield apis_vote.getVoteOption({ vote_options_id: this.vote_options_id });
        if (res.code == 200) {
          let e = res.data;
          let obj = __spreadValues({
            show_image: "",
            show_distance: "",
            sport_tag_str: []
          }, e);
          obj.des = this.$formatRichText(e.des, "暂无内容");
          this.info = obj;
        }
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  const _component_vote_success_dialog = common_vendor.resolveComponent("vote-success-dialog");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_bottomButton + _easycom_uv_safe_bottom2 + _component_vote_success_dialog + _component_layout_default_uni)();
}
const _easycom_uv_safe_bottom = () => "../../../node-modules/@climblee/uv-ui/components/uv-safe-bottom/uv-safe-bottom.js";
if (!Math) {
  _easycom_uv_safe_bottom();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      navColor: $data.navColor,
      title: "选手资料",
      moduleKey: "vote",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: common_vendor.t($data.info.number),
    c: common_vendor.t($data.info.name),
    d: common_vendor.t($data.info.rank),
    e: common_vendor.t($data.info.vote_count),
    f: $data.info.images || $data.default_img,
    g: $data.info.des,
    h: common_vendor.o($options.vote),
    i: common_vendor.p({
      customStyle: {
        height: "88rpx",
        "font-size": "32rpx",
        "font-weight": 600
      }
    }),
    j: $data.navBarHeight + 15 + "px",
    k: common_vendor.sr("voteSuccessDialog", "7f697659-4,7f697659-0")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
