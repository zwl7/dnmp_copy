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
const apis_common = require("../../../apis/common.js");
const mixins_listMixins = require("../../../mixins/listMixins.js");
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const navBar = () => "../../../components/navBar/index.js";
const associationItem = () => "./components/associationItem.js";
const dropDownCitySelect = () => "../../../components/dropDown/dropDownCitySelect.js";
const dropDown = () => "../../../components/dropDown/index.js";
const _sfc_main = {
  mixins: [mixins_listMixins.listMixins, mixins_shareMixins.shareMixins, mixins_themeMixins.themeMixins],
  components: {
    navBar,
    dropDown,
    associationItem,
    dropDownCitySelect
  },
  data() {
    return {
      topBgImage: this.getThemeIcon("association_top_bg"),
      navBarHeight: 0,
      navColor: "transparent",
      customStyle: {
        backgroundColor: "transparent"
      },
      searchParams: {},
      areaSelected: [],
      areaOptions: [],
      selectType: "",
      options: {
        belong_place_id: {
          label: "市/县",
          value: "",
          activeIndex: 0,
          child: [],
          useSlot: true
        },
        style_id: {
          label: "站点类型",
          value: "",
          activeIndex: 0,
          child: [
            {
              label: "全部",
              value: ""
            },
            { label: "广场", value: 0 },
            { label: "公园", value: 1 },
            { label: "城市社区", value: 2 },
            { label: "农村社区", value: 3 },
            { label: "其他", value: 4 }
          ]
        },
        // type_id: {
        //   label: "类型",
        //   value: "",
        //   activeIndex: 0,
        //   child: [],
        // },
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
    this.getCompanyAreaList();
    this.getList();
  },
  onPageScroll(event) {
    this.$refs.dropDown.init();
    let scrollTop = event.scrollTop;
    if (scrollTop > 60) {
      this.navColor = "#cae8fe";
      this.customStyle.backgroundColor = "#cae8fe";
    } else {
      this.navColor = "transparent";
      this.customStyle.backgroundColor = "transparent";
    }
  },
  methods: {
    openDrop(e) {
      console.log(e);
      this.selectType = e.name;
    },
    getCompanyAreaList() {
      return __async(this, null, function* () {
        let res = yield apis_common.getCompanyAreaAll({});
        this.areaOptions = res.data;
      });
    },
    toDetail(info) {
      console.log(info);
      common_vendor.index.navigateTo({
        url: `/pagesSub/platform/sportsOrg/detail?site_id=${info.site_id}`
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
        let res = yield apis_common.getWxActivityType({});
        let list = [{ label: "类型", value: "" }];
        res.data.map((e) => {
          list.push({ label: e.text, value: e.value });
        });
        this.options.type_id.child = list;
      });
    },
    // 获取组织类型
    getOrganizationType() {
      return __async(this, null, function* () {
        let res = yield apis_common.getSportsOrganizationType({ page: 1, size: 1e3, status: 1 });
        let list = [{ label: "全部类型", value: "" }];
        res.data.list.map((e) => {
          list.push({ label: e.name, value: e.type_id });
        });
        this.options.site_type.child = list;
      });
    },
    getList(refresh) {
      return __async(this, null, function* () {
        let param = {
          page: this.page,
          size: 10,
          type_id: "10"
        };
        param = Object.assign(param, this.searchParams);
        this.loading = true;
        let res = yield apis_common.getWxSiteList(param);
        this.getListExtend(res, refresh);
      });
    },
    handleDataCallBack(list) {
      let showList = [];
      list.forEach((e) => {
        let obj = __spreadValues({ show_image: e.c_image_url, show_distance: "" }, e);
        obj.show_distance = this.$distanceFormat(e.distance);
        showList.push(obj);
      });
      return showList;
    },
    citySelectConfirm(e) {
      this.options["belong_place_id"].label = e ? e.label : "全部区域";
      this.searchParams["belong_place_id"] = e.districtId ? e.districtId : "";
      this.resetData();
      this.$refs["dropDown"].close();
    },
    citySelectReset() {
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_dropDownCitySelect = common_vendor.resolveComponent("dropDownCitySelect");
  const _component_dropDown = common_vendor.resolveComponent("dropDown");
  const _component_associationItem = common_vendor.resolveComponent("associationItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_dropDownCitySelect + _component_dropDown + _component_associationItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: $data.navColor,
      title: "站点",
      moduleKey: "association",
      searchColor: "#f3f9ff",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: $data.topBgImage,
    c: common_vendor.o($options.citySelectConfirm),
    d: common_vendor.o($options.citySelectReset),
    e: common_vendor.p({
      defaultSelected: $data.areaSelected,
      options: $data.areaOptions,
      ["show-location"]: false,
      ["show-distance"]: false
    }),
    f: $data.selectType == "belong_place_id",
    g: common_vendor.sr("dropDown", "1bf53b63-2,1bf53b63-0"),
    h: common_vendor.o($options.changeDropDown),
    i: common_vendor.o($options.openDrop),
    j: common_vendor.p({
      sign: "associationItem",
      options: $data.options,
      customStyle: $data.customStyle
    }),
    k: $data.navBarHeight + "px",
    l: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.toDetail(item), index),
        b: "1bf53b63-4-" + i0 + ",1bf53b63-0",
        c: common_vendor.p({
          info: item
        }),
        d: index
      };
    }),
    m: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    n: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    o: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1bf53b63"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
