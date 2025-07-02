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
const apis_common = require("../../apis/common.js");
const apis_match = require("../../apis/match.js");
const core_listMixins = require("../../core/listMixins.js");
const core_shareMixins = require("../../core/shareMixins.js");
const core_themeMixins = require("../../core/themeMixins.js");
const navBar = () => "../../components/navBar.js";
const recomendSwiper = () => "./components/recomendSwiper.js";
const dateBallItem = () => "./components/dateBallItem.js";
const dropDown = () => "../../components/dropDown/index.js";
const _sfc_main = {
  mixins: [core_listMixins.listMixins, core_shareMixins.shareMixins, core_themeMixins.themeMixins],
  components: {
    navBar,
    dropDown,
    dateBallItem,
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
        sport_id: { label: "项目", value: "", activeIndex: 0, child: [] },
        date_status: {
          label: "状态",
          value: "",
          activeIndex: 0,
          child: [
            {
              label: "全部状态",
              value: ""
            },
            {
              label: "未开始",
              value: "1"
            },
            {
              label: "报名中",
              value: "2"
            },
            {
              label: "已结束",
              value: "3"
            }
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
    jumpToEventMap() {
      common_vendor.index.navigateTo({
        url: "/pages/matchPart/matchCalendar/matchCalendar"
      });
    },
    toDateBallDetail(e) {
      common_vendor.index.navigateTo({
        url: `/pages/matchPart/detail/detail?contest_id=${e.contest_id}`
      });
    },
    handleSearch() {
      common_vendor.index.navigateTo({
        url: "/pages/search/search?module=dateBall"
      });
    },
    getList(refresh) {
      return __async(this, null, function* () {
        let param = {
          page: this.page,
          size: 10
        };
        this.loading = true;
        let res = {};
        Object.keys(this.searchParams).forEach((key) => {
          if (this.searchParams[key] === "") {
            delete this.searchParams[key];
          }
        });
        param = Object.assign(param, this.searchParams);
        res = yield apis_match.getContestList(param);
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
        let res = yield apis_common.getCompanyAuthTag({});
        let list = [{ label: "全部项目", value: "" }];
        res.data.map((e) => {
          list.push({ label: e.option_name, value: e.option_value });
        });
        this.options.sport_id.child = list;
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
        url: "/pages/search/search"
      });
    }
  }
};
if (!Array) {
  const _component_recomendSwiper = common_vendor.resolveComponent("recomendSwiper");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_dropDown = common_vendor.resolveComponent("dropDown");
  const _component_dateBallItem = common_vendor.resolveComponent("dateBallItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_tabbar_uni = common_vendor.resolveComponent("layout-tabbar-uni");
  (_component_recomendSwiper + _easycom_uni_icons2 + _component_dropDown + _component_dateBallItem + _component_empty + _component_loadMore + _component_layout_tabbar_uni)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
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
    d: $data.menuHeight + "px",
    e: common_vendor.o((...args) => $options.handleSearch && $options.handleSearch(...args)),
    f: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-date",
      size: "32",
      color: _ctx.themePrimaryColorGetter
    }),
    g: common_vendor.o((...args) => $options.jumpToEventMap && $options.jumpToEventMap(...args)),
    h: common_vendor.sr("dropDown", "3e3fc07e-4,3e3fc07e-0"),
    i: common_vendor.o($options.changeDropDown),
    j: common_vendor.p({
      options: $data.options,
      customStyle: $data.customStyle
    }),
    k: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o($options.toDateBallDetail, index),
        b: "3e3fc07e-5-" + i0 + ",3e3fc07e-0",
        c: common_vendor.p({
          info: item,
          type: "dateBall"
        }),
        d: index
      };
    }),
    l: _ctx.showEmpty
  }, _ctx.showEmpty ? {
    m: common_vendor.p({
      marginTop: 45
    })
  } : {}, {
    n: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    o: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
