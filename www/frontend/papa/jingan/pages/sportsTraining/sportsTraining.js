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
const common_vendor = require("../../common/vendor.js");
const mixins_listMixins = require("../../mixins/listMixins.js");
const apis_common = require("../../apis/common.js");
const navBar = () => "../../components/navBar/index.js";
const sportsTrainingItem = () => "./components/sportsTrainingItem.js";
const dropDown = () => "../../components/dropDown/index.js";
const _sfc_main = {
  mixins: [mixins_listMixins.listMixins],
  components: {
    navBar,
    dropDown,
    sportsTrainingItem
  },
  data() {
    return {
      topBgImage: "https://cdn-static.papa.com.cn/yuncheng/sports-training-top-bg.png",
      navBarHeight: 0,
      navColor: "transparent",
      customStyle: {
        backgroundColor: "transparent"
      },
      options: {
        street_id: {
          label: "市/县",
          value: "",
          activeIndex: 0,
          child: []
        },
        sport_tag_id: {
          label: "全部项目",
          value: "",
          activeIndex: 0,
          child: []
        }
      }
    };
  },
  onLoad() {
    const app = getApp();
    let { navBarHeight } = app.globalData;
    this.navBarHeight = navBarHeight;
    this.getSportTag();
    this.getCompanyAreaList();
    this.getList();
  },
  onPageScroll(event) {
    this.$refs.dropDown.init();
    let scrollTop = event.scrollTop;
    if (scrollTop > 60) {
      this.navColor = "#e9d7fd";
      this.customStyle.backgroundColor = "#e9d7fd";
    } else {
      this.navColor = "transparent";
      this.customStyle.backgroundColor = "transparent";
    }
  },
  methods: {
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
        let res = yield apis_common.getCompanyProject({ type: 1 });
        let list = [{ label: "全部项目", value: "" }];
        res.data.map((e) => {
          list.push({ label: e.option_name, value: e.option_value });
        });
        this.options.sport_tag_id.child = list;
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
        this.options.street_id.child = list;
      });
    },
    getList(refresh) {
      return __async(this, null, function* () {
        let param = {
          page: this.page,
          size: 10,
          status: 1
          //已发布
        };
        param = Object.assign(param, this.searchParams);
        this.loading = true;
        let res = yield apis_common.getWxOrganization(param);
        this.getListExtend(res, refresh);
      });
    },
    handleDataCallBack(list) {
      let showList = [];
      list.forEach((e) => {
        let obj = __spreadValues({ show_image: e.img_str, show_distance: "" }, e);
        obj.show_distance = this.$distanceFormat(e.distance);
        showList.push(obj);
      });
      return showList;
    },
    toDetail(item) {
      common_vendor.index.navigateTo({
        url: `/pages/sportsTrainingDetail/sportsTrainingDetail?organization_id=${item.organization_id}`
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_dropDown = common_vendor.resolveComponent("dropDown");
  const _component_sportsTrainingItem = common_vendor.resolveComponent("sportsTrainingItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_dropDown + _component_sportsTrainingItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: $data.navColor,
      title: "体育培训",
      searchTitle: "搜索内容",
      moduleKey: "sportsTraining",
      searchColor: "#f3f9ff",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: $data.topBgImage,
    c: common_vendor.sr("dropDown", "6d09ad6d-2,6d09ad6d-0"),
    d: common_vendor.o($options.changeDropDown),
    e: common_vendor.p({
      options: $data.options,
      customStyle: $data.customStyle
    }),
    f: $data.navBarHeight + "px",
    g: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.toDetail(item), index),
        b: "6d09ad6d-3-" + i0 + ",6d09ad6d-0",
        c: common_vendor.p({
          info: item
        }),
        d: index
      };
    }),
    h: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    i: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    j: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
