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
const apis_common = require("../../../apis/common.js");
const apis_match = require("../../../apis/match.js");
const mixins_listMixins = require("../../../mixins/listMixins.js");
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const apis_activity = require("../../../apis/activity.js");
const navBar = () => "../../../components/navBar/index.js";
const recomendSwiper = () => "./components/recomendSwiper.js";
const ActivityIndexItem = () => "./components/ActivityIndexItem.js";
const dropDown = () => "../../../components/dropDown/index.js";
const _sfc_main = {
  mixins: [mixins_listMixins.listMixins, mixins_shareMixins.shareMixins, mixins_themeMixins.themeMixins],
  components: {
    navBar,
    dropDown,
    ActivityIndexItem,
    recomendSwiper
  },
  data() {
    return {
      navBarHeight: 0,
      menuHeight: 0,
      navColor: "transparent",
      customStyle: {
        backgroundColor: "transparent"
      },
      options: {
        type_id: { label: "项目", value: "", activeIndex: 0, child: [] },
        status: {
          label: "状态",
          value: 9999,
          activeIndex: 0,
          child: [
            { label: "全部状态", value: 9999 },
            { label: "报名中", value: 1 },
            { label: "未开始", value: 2 },
            { label: "进行中", value: 3 },
            { label: "已结束", value: 4 }
          ]
        }
        // event_plan_type: {
        // 	label: "区域",
        // 	value: "",
        // 	activeIndex: 0,
        // 	child: [
        // 		{
        // 			label: "江西省",
        // 			value: ""
        // 		}
        // 	]
        // }
      },
      searchParams: {
        keyword: "",
        order_by: "",
        distance: "",
        street_id: ""
      },
      recomendList: []
    };
  },
  onLoad() {
    this.setNavigationBarColor();
    const app = getApp();
    let { navBarHeight, menuHeight } = app.globalData;
    this.navBarHeight = navBarHeight;
    this.menuHeight = menuHeight;
    this.getSportTag();
    this.getList();
  },
  onPageScroll(event) {
    this.$refs["dropDown"].init();
    if (this.pickTab == "1") {
      this.$refs.dropDown.init();
    }
    let scrollTop = event.scrollTop;
    if (scrollTop > 60) {
      this.navColor = "#359eff";
      this.customStyle.backgroundColor = "#fff";
    } else {
      this.navColor = "transparent";
      this.customStyle.backgroundColor = "transparent";
    }
  },
  methods: {
    toDateBallDetail(e) {
      common_vendor.index.navigateTo({
        url: `/pagesSub/activityPart/detail/index?activity_id=${e.activity_id}`
      });
    },
    handleSearch() {
      this.page = 1;
      this.getList();
    },
    getList(refresh) {
      return __async(this, null, function* () {
        let param = {
          page: this.page,
          size: 10,
          status: 9999
        };
        this.loading = true;
        let res = {};
        Object.keys(this.searchParams).forEach((key) => {
          if (this.searchParams[key] === "") {
            delete this.searchParams[key];
          }
        });
        param = Object.assign(param, this.searchParams);
        res = yield apis_activity.getWxActivityList(param);
        this.getListExtend(res, refresh);
      });
    },
    changeDropDown(res) {
      let obj = {};
      res.map((e) => {
        obj[e.name] = e.value;
      });
      this.searchParams = obj;
      this.resetData();
    },
    // 获取下拉运动项目
    getSportTag() {
      return __async(this, null, function* () {
        let res = yield apis_activity.getWxActivityType({});
        let list = [{ label: "全部项目", value: "0" }];
        res.data.map((e) => {
          list.push({ label: e.text, value: e.value });
        });
        this.options.type_id.child = list;
      });
    },
    // 获取下拉赛会
    getCommitteeList() {
      return __async(this, null, function* () {
        let res = yield apis_match.getContestCommitteeList({
          page: 1,
          size: 100,
          status: 1
        });
        let list = [{ label: "全部类型", value: "" }];
        res.data.list.map((e) => {
          list.push({ label: e.name, value: e.committee_id });
        });
        this.options.committee_id.child = list;
      });
    },
    // 获取区县下拉
    getCompanyAreaList() {
      return __async(this, null, function* () {
        let res = yield apis_common.getCompanyAreaAll({});
        let list = [{ label: "全市", value: "" }];
        res.data.map((e) => {
          list.push({ label: e.name, value: e.company_area_id });
        });
        this.options.street_id.child = [...list, ...list];
      });
    },
    // 跳转至统一搜索页面
    toSearch() {
      common_vendor.index.navigateTo({
        url: "/pagesSub/platform/search/search"
      });
    }
  }
};
if (!Array) {
  const _component_recomendSwiper = common_vendor.resolveComponent("recomendSwiper");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_dropDown = common_vendor.resolveComponent("dropDown");
  const _component_ActivityIndexItem = common_vendor.resolveComponent("ActivityIndexItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_recomendSwiper + _easycom_uni_icons2 + _component_dropDown + _component_ActivityIndexItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.recomendList.length > 0
  }, $data.recomendList.length > 0 ? {
    b: common_vendor.p({
      list: $data.recomendList
    })
  } : {}, {
    c: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-search",
      size: "18",
      color: "#A8ABB2"
    }),
    d: common_vendor.o((...args) => $options.handleSearch && $options.handleSearch(...args)),
    e: common_vendor.o((...args) => $options.handleSearch && $options.handleSearch(...args)),
    f: $data.searchParams.keyword,
    g: common_vendor.o(($event) => $data.searchParams.keyword = $event.detail.value),
    h: $data.menuHeight + "px",
    i: common_vendor.sr("dropDown", "0068dd95-3,0068dd95-0"),
    j: common_vendor.o($options.changeDropDown),
    k: common_vendor.p({
      options: $data.options,
      customStyle: $data.customStyle
    }),
    l: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o($options.toDateBallDetail, index),
        b: "0068dd95-4-" + i0 + ",0068dd95-0",
        c: common_vendor.p({
          info: item,
          type: "dateBall"
        }),
        d: index
      };
    }),
    m: _ctx.showEmpty
  }, _ctx.showEmpty ? {
    n: common_vendor.p({
      marginTop: 45
    })
  } : {}, {
    o: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    p: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
