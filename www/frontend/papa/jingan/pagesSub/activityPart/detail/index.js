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
const common_assets = require("../../../common/assets.js");
const utils_buttonClick = require("../../../utils/buttonClick.js");
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
require("../../../utils/stroageUtils/storageUtil.js");
require("../../../utils/thirdPartUtils/md5.js");
const apis_activity = require("../../../apis/activity.js");
const navBar = () => "../../../components/navBar/index.js";
const topHedaer = () => "./components/topHedaer.js";
const groupData = () => "./components/groupData.js";
const groupDataDes = () => "./components/groupDataDes.js";
const groupSelectDialog = () => "./components/groupSelectDialog.js";
const bottomButton = () => "../../../components/bottomButton.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  components: {
    navBar,
    topHedaer,
    groupData,
    groupDataDes,
    groupSelectDialog,
    bottomButton
  },
  data() {
    return {
      navColor: "transparent",
      activity_id: null,
      shareI: common_assets.share,
      matchDetailInfo: {
        images_url: [],
        tag_ids: ""
      },
      groupProjectList: [],
      //基础数据
      sportsList: [],
      //组别
      smallProjectList: []
      //小项列表
    };
  },
  computed: {
    joinNumber() {
      return this.matchDetailInfo.applyNumberLimit - this.matchDetailInfo.appliedNumber;
    },
    btnStatus() {
      const statusMap = {
        10: "报名未开始",
        9: "立即报名",
        1: "立即报名",
        2: "报名截止",
        3: "进行中",
        4: "已结束"
      };
      console.log("status", this.matchDetailInfo.status);
      return statusMap[this.matchDetailInfo.status];
    },
    btnDisabled() {
      return !(this.matchDetailInfo.online_apply == 1 && this.matchDetailInfo.status == 1);
    },
    applyStatus() {
      return this.btnDisabled ? this.matchDetailInfo.status_str : "立即报名";
    }
  },
  onLoad(options) {
    return __async(this, null, function* () {
      this.activity_id = options.activity_id;
      yield this.getWxActivityDetail(this.activity_id);
    });
  },
  onShareTimeline() {
    return {
      title: this.shareTimelineObj.title
    };
  },
  onPageScroll: utils_buttonClick.throttle(function(e) {
    e[0].scrollTop;
  }, 100),
  methods: {
    showSelectDialog() {
      this.$refs.selectDialog.open();
    },
    closeSelectDialog() {
      this.$refs.selectDialog.close();
    },
    onChange(e) {
      this.timeData = e;
    },
    clickToApply() {
      return __async(this, null, function* () {
        console.log("clickToApply");
        let flag = yield getApp().judgeIsAuth();
        if (!flag)
          return;
        common_vendor.index.navigateTo({
          url: `/pagesSub/activityPart/apply/index?activity_id=${this.activity_id}`
        });
      });
    },
    // 获取赛事详情
    getWxActivityDetail(activity_id) {
      return __async(this, null, function* () {
        let params = { activity_id };
        let res = yield apis_activity.getWxActivity(params);
        let { data, code } = res;
        if (code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        this.matchDetailInfo = data;
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_topHedaer = common_vendor.resolveComponent("topHedaer");
  const _component_groupDataDes = common_vendor.resolveComponent("groupDataDes");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _component_groupSelectDialog = common_vendor.resolveComponent("groupSelectDialog");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_topHedaer + _component_groupDataDes + _easycom_uni_icons2 + _component_bottomButton + _component_groupSelectDialog + _component_layout_default_uni)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      navColor: $data.navColor,
      title: "活动详情",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: common_vendor.p({
      info: $data.matchDetailInfo
    }),
    c: common_vendor.p({
      info: $data.matchDetailInfo
    }),
    d: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-lianjietiaozhuan",
      size: "20"
    }),
    e: common_vendor.t($options.applyStatus),
    f: common_vendor.o($options.clickToApply),
    g: common_vendor.p({
      disabled: $options.btnDisabled
    }),
    h: common_vendor.sr("selectDialog", "fa0d49fd-6,fa0d49fd-0"),
    i: common_vendor.p({
      info: $data.matchDetailInfo,
      projectInfo: $data.groupProjectList
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fa0d49fd"]]);
_sfc_main.__runtimeHooks = 7;
wx.createPage(MiniProgramPage);
