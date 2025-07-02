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
const core_listMixins = require("../../../core/listMixins.js");
const apis_common = require("../../../apis/common.js");
const apis_sportTalent = require("../../../apis/sportTalent.js");
const core_shareMixins = require("../../../core/shareMixins.js");
const core_themeMixins = require("../../../core/themeMixins.js");
const navBar = () => "../../../components/navBar.js";
const dropDown = () => "../../../components/dropDown/index.js";
const sportTalentItem = () => "./components/sportTalentItem.js";
const dropDownCitySelect = () => "../../../components/dropDownCitySelect.js";
const _sfc_main = {
  mixins: [core_listMixins.listMixins, core_shareMixins.shareMixins, core_themeMixins.themeMixins],
  components: {
    navBar,
    dropDown,
    sportTalentItem,
    dropDownCitySelect
  },
  data() {
    return {
      sportTalentTypeTabList: [],
      customStyle: {
        backgroundColor: "#fff"
        // borderBottom: "1px solid #ebeff4"
      },
      status: "nomore",
      navBarHeight: 0,
      navColor: "transparent",
      searchParams: {},
      sportTalentTypeId: 1,
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
        sport_tag_id: {
          label: "项目",
          value: "",
          activeIndex: 0,
          child: []
        },
        level: {
          label: "级别",
          value: "",
          activeIndex: 0,
          child: [
            {
              label: "全部级别",
              value: ""
            },
            {
              label: "国际级",
              value: "-1"
            },
            {
              label: "国家级",
              value: "0"
            },
            {
              label: "一级",
              value: "1"
            },
            {
              label: "二级",
              value: "2"
            },
            {
              label: "三级",
              value: "3"
            }
          ]
        }
      },
      defaultValueArray: []
    };
  },
  computed: {
    tabIsScrollable() {
      return this.sportTalentTypeTabList.length > 3 ? true : false;
    },
    themePageBgColorGetter() {
      return `linear-gradient(${this.themePrimaryLightColorGetter} 0%,#ffffff 100%)`;
    }
  },
  onLoad() {
    return __async(this, null, function* () {
      const app = getApp();
      let { navBarHeight } = app.globalData;
      this.navBarHeight = navBarHeight;
      yield this.getTalentTabType();
      this.getSportTag();
      this.getCompanyAreaList();
      this.getList();
    });
  },
  onPageScroll(event) {
    this.$refs.dropDown.init();
  },
  methods: {
    openDrop(e) {
      console.log(e);
      this.selectType = e.name;
    },
    pickTalentTabItem(e) {
      this.sportTalentTypeId = e.id;
      this.$refs.dropDown.init();
      this.defaultValueArray = [
        {
          name: "sport_tag_id",
          label: "项目",
          value: ""
        },
        {
          name: "belong_place_id",
          label: "市/县",
          value: ""
        },
        {
          name: "level",
          label: "级别",
          value: ""
        }
      ];
      this.searchParams = {};
      this.getSportTag();
      this.resetData();
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
        let res = yield apis_common.getBaseTag({});
        let list = [
          {
            label: "全部项目",
            value: ""
          }
        ];
        res.data.map((e) => {
          list.push({
            label: e.option_name,
            value: e.option_value
          });
        });
        this.options.sport_tag_id.child = list;
      });
    },
    // 获取区县下拉
    getCompanyAreaList() {
      return __async(this, null, function* () {
        let res = yield apis_common.getCompanyAreaAll({});
        this.areaOptions = res.data;
      });
    },
    // 获取tab 列表
    getTalentTabType() {
      return __async(this, null, function* () {
        let params = { page: 1, size: 1e3, is_show: 1, status: 1 };
        let res = yield apis_sportTalent.getSportTalentTypeList(params);
        if (res.code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        let list = [];
        res.data.list.map((e) => {
          list.push({ id: e.type_id, name: e.name });
        });
        this.sportTalentTypeId = list.length ? list[0].id : "";
        this.sportTalentTypeTabList = list;
      });
    },
    getList(refresh) {
      return __async(this, null, function* () {
        let params = {
          page: this.page,
          size: 10,
          type_id: this.sportTalentTypeId,
          status: 1
        };
        params = Object.assign(params, this.searchParams);
        params.level === "" && delete params.level;
        this.loading = true;
        for (let key in params) {
          params[key] === "" && delete params[key];
        }
        let res = yield apis_sportTalent.getSportTalentList(params);
        this.getListExtend(res, refresh);
      });
    },
    handleDataCallBack(list) {
      let showList = [];
      let strMap = {
        0: "国家级",
        1: "一级",
        2: "二级",
        3: "三级"
      };
      list.forEach((e) => {
        let obj = __spreadValues({
          show_image: "",
          show_distance: "",
          sport_tag_str: []
        }, e);
        obj.show_image = e.cover_image_url;
        obj.level_str = strMap[e.level];
        showList.push(obj);
      });
      return showList;
    },
    handleClick(item) {
      common_vendor.index.navigateTo({
        url: `/pages/talentApprovePart/talentDetail/talentDetail?sport_talent_id=${item.sport_talent_id}`
      });
    },
    citySelectConfirm(e) {
      console.log(e);
      this.options["belong_place_id"].label = e ? e.label : "全部区域";
      this.searchParams["belong_place_id"] = (e ? e.districtId : "") || "";
      this.resetData();
      this.$refs["dropDown"].close();
    },
    citySelectReset() {
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _component_dropDownCitySelect = common_vendor.resolveComponent("dropDownCitySelect");
  const _component_dropDown = common_vendor.resolveComponent("dropDown");
  const _easycom_uv_sticky2 = common_vendor.resolveComponent("uv-sticky");
  const _component_sportTalentItem = common_vendor.resolveComponent("sportTalentItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_tabs2 + _component_dropDownCitySelect + _component_dropDown + _easycom_uv_sticky2 + _component_sportTalentItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
const _easycom_uv_tabs = () => "../../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
const _easycom_uv_sticky = () => "../../../node-modules/@climblee/uv-ui/components/uv-sticky/uv-sticky.js";
if (!Math) {
  (_easycom_uv_tabs + _easycom_uv_sticky)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: $data.navColor,
      isFixed: false,
      titleColor: "#323233",
      backColor: "#323233",
      title: "体育人才",
      searchTitle: "搜索内容",
      moduleKey: "sportTalent",
      showBack: true
    }),
    b: common_vendor.o($options.pickTalentTabItem),
    c: common_vendor.p({
      list: $data.sportTalentTypeTabList,
      scrollable: $options.tabIsScrollable,
      lineColor: _ctx.themePrimaryColorGetter,
      customStyle: {
        backgroundColor: "transparent"
      },
      activeStyle: {
        color: _ctx.themePrimaryColorGetter,
        fontWeight: "610"
      },
      inactiveStyle: {
        color: "#505F79",
        fontWeight: "400"
      },
      itemStyle: {
        padding: "0 32rpx",
        height: "88rpx"
      }
    }),
    d: common_vendor.o($options.citySelectConfirm),
    e: common_vendor.o($options.citySelectReset),
    f: common_vendor.p({
      defaultSelected: $data.areaSelected,
      options: $data.areaOptions,
      ["show-location"]: false,
      ["show-distance"]: false
    }),
    g: $data.selectType == "belong_place_id",
    h: common_vendor.sr("dropDown", "26af3734-4,26af3734-1"),
    i: common_vendor.o($options.changeDropDown),
    j: common_vendor.o($options.openDrop),
    k: common_vendor.p({
      options: $data.options,
      customStyle: $data.customStyle,
      resultArray: $data.defaultValueArray
    }),
    l: common_vendor.p({
      ["custom-style"]: {
        background: $options.themePageBgColorGetter
      }
    }),
    m: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.handleClick(item), index),
        b: "26af3734-6-" + i0 + ",26af3734-0",
        c: common_vendor.p({
          info: item
        }),
        d: index
      };
    }),
    n: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
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
