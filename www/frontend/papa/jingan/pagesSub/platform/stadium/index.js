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
const mixins_listMixins = require("../../../mixins/listMixins.js");
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const mixins_stadiumReserve = require("../../../mixins/stadiumReserve.js");
const apis_common = require("../../../apis/common.js");
const apis_stadium = require("../../../apis/stadium.js");
const navBar = () => "../../../components/navBar/index.js";
const dropDown = () => "../../../components/dropDown/index.js";
const stadiumItem = () => "./components/stadiumItem.js";
const dropDownCitySelect = () => "../../../components/dropDownCitySelect.js";
const _sfc_main = {
  mixins: [mixins_listMixins.listMixins, mixins_stadiumReserve.stadiumReserve, mixins_shareMixins.shareMixins],
  components: {
    navBar,
    dropDown,
    stadiumItem,
    dropDownCitySelect
  },
  data() {
    return {
      customStyle: {
        backgroundColor: "#fff",
        borderBottom: "1px solid #ebeff4"
      },
      status: "nomore",
      navBarHeight: 0,
      navColor: "#fff",
      searchParams: {},
      selectType: "",
      areaOptions: [],
      areaSelected: [],
      options: {
        street_id: {
          label: "区域",
          value: "",
          activeIndex: 0,
          child: [],
          useSlot: true
        },
        sport_tag_id: {
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
        },
        service_status: {
          label: "预订状态",
          value: "",
          activeIndex: 0,
          child: [
            {
              label: "全部场馆",
              value: ""
            },
            {
              label: "可预订",
              value: 1
            },
            {
              label: "不可预订",
              value: 2
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
    this.getSportTag();
    this.getCompanyAreaList();
    this.getList();
  },
  onPageScroll(event) {
    this.$refs.dropDown.init();
  },
  methods: {
    openDrop(e) {
      console.log(e);
      this.selectType = e.name;
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
        let res = yield apis_common.getCompanyProject({ type: 3 });
        let list = [{ label: "全部项目", value: "" }];
        res.data.map((e) => {
          list.push({ label: e.option_name, value: e.option_value });
        });
        this.options.sport_tag_id.child = list;
      });
    },
    getCompanyAreaList() {
      return __async(this, null, function* () {
        let res = yield apis_common.getCompanyAreaAll({});
        this.areaOptions = res.data;
      });
    },
    getList(refresh) {
      return __async(this, null, function* () {
        let param = {
          page: this.page,
          size: 10
          // large_stadium: 1
        };
        param = Object.assign(param, this.searchParams);
        this.loading = true;
        let res = yield apis_stadium.getWxStadiumList(param);
        this.getListExtend(res, refresh);
      });
    },
    handleDataCallBack(list) {
      let showList = [];
      list.forEach((e) => {
        let obj = __spreadValues({ show_image: "", show_distance: "" }, e);
        if (e.images_url && e.images_url.length > 0) {
          obj.show_image = e.images_url[0];
        }
        obj.show_distance = this.$distanceFormat(e.distance);
        showList.push(obj);
      });
      return showList;
    },
    handleClick(item) {
      common_vendor.index.navigateTo({
        url: `/pagesSub/platform/stadium/detail?stadium_id=${item.stadium_id}`
      });
    },
    citySelectConfirm(e) {
      this.options["street_id"].label = e ? e.label : "全部区域";
      this.searchParams["street_id"] = e.districtId ? e.districtId : "";
      this.resetData();
      this.$refs["dropDown"].close();
    },
    citySelectReset() {
    }
  }
};
if (!Array) {
  const _component_dropDownCitySelect = common_vendor.resolveComponent("dropDownCitySelect");
  const _component_dropDown = common_vendor.resolveComponent("dropDown");
  const _easycom_uv_sticky2 = common_vendor.resolveComponent("uv-sticky");
  const _component_stadiumItem = common_vendor.resolveComponent("stadiumItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_dropDownCitySelect + _component_dropDown + _easycom_uv_sticky2 + _component_stadiumItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
const _easycom_uv_sticky = () => "../../../node-modules/@climblee/uv-ui/components/uv-sticky/uv-sticky.js";
if (!Math) {
  _easycom_uv_sticky();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.citySelectConfirm),
    b: common_vendor.o($options.citySelectReset),
    c: common_vendor.p({
      defaultSelected: $data.areaSelected,
      options: $data.areaOptions,
      ["show-location"]: false,
      ["show-distance"]: false
    }),
    d: $data.selectType == "street_id",
    e: common_vendor.sr("dropDown", "3618c3e0-2,3618c3e0-1"),
    f: common_vendor.o($options.changeDropDown),
    g: common_vendor.o($options.openDrop),
    h: common_vendor.p({
      sign: "stadium",
      options: $data.options,
      customStyle: $data.customStyle
    }),
    i: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.handleClick(item), index),
        b: common_vendor.o(($event) => _ctx.handleReserve(item), index),
        c: "3618c3e0-4-" + i0 + ",3618c3e0-0",
        d: common_vendor.p({
          info: item
        }),
        e: index
      };
    }),
    j: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    k: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    l: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
