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
const apis_site = require("../../../apis/site.js");
const apis_common = require("../../../apis/common.js");
const core_listMixins = require("../../../core/listMixins.js");
const core_shareMixins = require("../../../core/shareMixins.js");
const navBar = () => "../../../components/navBar.js";
const fitnessReserveItem = () => "./components/fitnessReserveItem.js";
const dropDown = () => "../../../components/dropDown/index.js";
const _sfc_main = {
  mixins: [core_listMixins.listMixins, core_shareMixins.shareMixins],
  components: {
    navBar,
    dropDown,
    fitnessReserveItem
  },
  data() {
    return {
      topBgImage: "https://cdn-static.papa.com.cn/yuncheng/fitness-top-bg2.png",
      navBarHeight: 0,
      navColor: "transparent",
      searchParams: {},
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
        common_type_ids: {
          label: "全部项目",
          value: "",
          activeIndex: 0,
          child: []
        },
        distance: {
          label: "距离",
          value: "",
          activeIndex: 0,
          child: [
            {
              label: "不限制",
              value: ""
            },
            {
              label: "1km",
              value: "1000"
            },
            {
              label: "3km",
              value: "3000"
            },
            {
              label: "5km",
              value: "5000"
            },
            {
              label: "20km",
              value: "20000"
            }
          ]
        }
      }
    };
  },
  onLoad() {
    const app = getApp();
    let { navBarHeight } = app.globalData;
    this.navBarHeight = navBarHeight;
    this.getList();
    this.getCompanyAreaList();
    this.getSportTag();
  },
  onPageScroll(event) {
    let scrollTop = event.scrollTop;
    if (scrollTop > 60) {
      this.navColor = "#cfbdfa";
      this.customStyle.backgroundColor = "#cfbdfa";
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
        let res = yield apis_site.getHealthAllType({});
        let list = [{ label: "全部项目", value: "" }];
        res.data.map((e) => {
          list.push({ label: e.name, value: e.common_type_id });
        });
        this.options.common_type_ids.child = list;
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
        };
        param = Object.assign(param, this.searchParams);
        this.loading = true;
        let res = yield apis_site.getHealthList(param);
        this.getListExtend(res, refresh);
      });
    },
    handleDataCallBack(list) {
      let showList = [];
      list.forEach((e) => {
        let obj = __spreadValues({ show_image: "", show_time: "" }, e);
        if (e.images_url.length > 0) {
          obj.show_image = e.images_url[0];
        }
        showList.push(obj);
      });
      return showList;
    },
    // 详情
    handleToDetail(item) {
      common_vendor.index.navigateTo({
        url: `/pagesSub/fitnessReserve/reserveDetail/index?health_id=${item.health_id}`
      });
    },
    // 预约
    handleReserve(item) {
      common_vendor.index.navigateTo({
        url: `/pagesSub/fitnessReserve/reserveTime/index?health_id=${item.health_id}`
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_fitnessReserveItem = common_vendor.resolveComponent("fitnessReserveItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_fitnessReserveItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: $data.navColor,
      title: "体质监测",
      searchTitle: "搜索内容",
      searchColor: "#f3f9ff",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true,
      moduleKey: "fitnessReserve"
    }),
    b: $data.topBgImage,
    c: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.handleToDetail(item), index),
        b: common_vendor.o(($event) => $options.handleReserve(item), index),
        c: "c17c015c-2-" + i0 + ",c17c015c-0",
        d: common_vendor.p({
          info: item,
          hiddenBtn: item.reservation == "2" ? true : false
        }),
        e: index
      };
    }),
    d: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    e: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    f: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
