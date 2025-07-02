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
const common_assets = require("../../../common/assets.js");
const utils_buttonClick = require("../../../utils/buttonClick.js");
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const apis_match = require("../../../apis/match.js");
const common_vendor = require("../../../common/vendor.js");
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
      contest_id: null,
      shareI: common_assets.share,
      matchDetailInfo: {},
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
      return this.matchDetailInfo.apply_status != 2;
    },
    applyStatus() {
      let statusObj = {
        1: "报名未开始",
        2: "立即报名",
        3: "报名已结束"
      };
      return statusObj[this.matchDetailInfo.apply_status];
    }
  },
  onLoad(options) {
    return __async(this, null, function* () {
      this.contest_id = options.contest_id;
      yield this.getMatchDetail(this.contest_id);
      this.getGroupList();
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
        this.showSelectDialog();
      });
    },
    // 获取赛事详情
    getMatchDetail(contest_id) {
      return __async(this, null, function* () {
        let params = { contest_id };
        let res = yield apis_match.getContestInfo(params);
        let { data, code } = res;
        if (code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        this.matchDetailInfo = data;
      });
    },
    // 赛事分组信息
    getGroupList() {
      return __async(this, null, function* () {
        const param = {
          contest_id: this.contest_id,
          page: 1,
          size: 100
        };
        const res = yield apis_match.getGroupProjectList(param);
        let { data, code } = res;
        if (code == 200) {
          this.groupProjectList = data.list;
        } else {
          this.$showToastNone(res.message);
        }
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_topHedaer = common_vendor.resolveComponent("topHedaer");
  const _component_groupData = common_vendor.resolveComponent("groupData");
  const _component_groupDataDes = common_vendor.resolveComponent("groupDataDes");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _component_groupSelectDialog = common_vendor.resolveComponent("groupSelectDialog");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_topHedaer + _component_groupData + _component_groupDataDes + _easycom_uni_icons2 + _component_bottomButton + _component_groupSelectDialog + _component_layout_default_uni)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      navColor: $data.navColor,
      title: "赛事详情",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: common_vendor.p({
      info: $data.matchDetailInfo
    }),
    c: common_vendor.p({
      info: $data.groupProjectList
    }),
    d: common_vendor.p({
      info: $data.matchDetailInfo
    }),
    e: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-lianjietiaozhuan",
      size: "20"
    }),
    f: common_vendor.t($options.applyStatus),
    g: common_vendor.o($options.clickToApply),
    h: common_vendor.p({
      disabled: $options.btnDisabled
    }),
    i: common_vendor.sr("selectDialog", "bbc03b1b-7,bbc03b1b-0"),
    j: common_vendor.p({
      info: $data.matchDetailInfo,
      projectInfo: $data.groupProjectList
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bbc03b1b"]]);
_sfc_main.__runtimeHooks = 7;
wx.createPage(MiniProgramPage);
