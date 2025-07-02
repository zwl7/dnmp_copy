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
const common_assets = require("../../common/assets.js");
const apis_common = require("../../apis/common.js");
require("../../utils/stroageUtils/storageUtil.js");
require("../../utils/thirdPartUtils/md5.js");
const mixins_shareMixins = require("../../mixins/shareMixins.js");
const navBar = () => "../../components/navBar/index.js";
const dropDown = () => "../../components/dropDown/index.js";
const sportTalentItem = () => "./components/sportTalentItem.js";
const scrollTabX = () => "./components/scrollTabX.js";
const _sfc_main = {
  mixins: [mixins_listMixins.listMixins, mixins_shareMixins.shareMixins],
  components: {
    navBar,
    dropDown,
    sportTalentItem,
    scrollTabX
  },
  data() {
    return {
      guider: common_assets.guider,
      tabList: [
        {
          id: 1,
          url: common_assets.guider,
          name: "江西省排球协会"
        },
        {
          id: 2,
          url: common_assets.sportner,
          name: "裁判员"
        }
        // {
        // 	id: 3,
        // 	url: personal,
        // 	name: "教练员"
        // }
      ],
      customStyle: {
        " border-radius": "30rpx 30rpx 0px 0px",
        backgroundColor: "#fff",
        borderBottom: "1px solid #ebeff4"
      },
      status: "nomore",
      navBarHeight: 0,
      navColor: "transparent",
      searchParams: {},
      type: 1,
      defaultLevel: {
        label: "级别",
        value: "",
        activeIndex: 0,
        child: [
          {
            label: "全部级别",
            value: ""
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
      },
      options: {
        belong_place_id: {
          label: "市/县",
          value: "",
          activeIndex: 0,
          child: []
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
    pickTabItem(e) {
      this.type = e.id;
      if (e.id == 3) {
        this.options.level = {
          label: "级别",
          value: "",
          activeIndex: 0,
          child: [
            {
              label: "全部级别",
              value: ""
            },
            {
              label: "高级",
              value: "1"
            },
            {
              label: "中级",
              value: "2"
            },
            {
              label: "初级",
              value: "3"
            }
          ]
        };
      } else {
        this.options.level = this.defaultLevel;
      }
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
        let res = yield apis_common.getCompanyProject({
          type: 2,
          small_type: this.type == 1 ? 20 : 21
        });
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
        let res = yield apis_common.getCompanyAreaAll({ unicode: "yuncheng" });
        let list = [
          {
            label: "全市",
            value: ""
          }
        ];
        res.data.map((e) => {
          list.push({
            label: e.name,
            value: e.company_area_id
          });
        });
        this.options.belong_place_id.child = list;
      });
    },
    getList(refresh) {
      return __async(this, null, function* () {
        let param = {
          page: this.page,
          size: 10,
          type: this.type
        };
        console.log(333, this.searchParams);
        param = Object.assign(param, this.searchParams);
        this.loading = true;
        let res = yield apis_common.getInstructorList(param);
        this.getListExtend(res, refresh);
      });
    },
    handleDataCallBack(list) {
      let showList = [];
      list.forEach((e) => {
        let obj = __spreadValues({
          show_image: "",
          show_distance: "",
          sport_tag_str: []
        }, e);
        obj.show_image = e.c_image_url;
        obj.sport_tag_str = e.sport_tag_names.split(",");
        obj.show_distance = this.$distanceFormat(e.distance);
        showList.push(obj);
      });
      return showList;
    },
    handleClick(item) {
      common_vendor.index.navigateTo({
        url: `/pages/sportTalentDetail/sportTalentDetail?instructor_id=${item.instructor_id}`
      });
    },
    handleReserve(item) {
      console.log("预约");
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_scrollTabX = common_vendor.resolveComponent("scrollTabX");
  const _component_dropDown = common_vendor.resolveComponent("dropDown");
  const _easycom_uv_sticky2 = common_vendor.resolveComponent("uv-sticky");
  const _component_sportTalentItem = common_vendor.resolveComponent("sportTalentItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_scrollTabX + _component_dropDown + _easycom_uv_sticky2 + _component_sportTalentItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
const _easycom_uv_sticky = () => "../../node-modules/@climblee/uv-ui/components/uv-sticky/uv-sticky.js";
if (!Math) {
  _easycom_uv_sticky();
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
    b: common_vendor.o($options.pickTabItem),
    c: common_vendor.p({
      list: $data.tabList
    }),
    d: common_vendor.sr("dropDown", "6da8bf8f-4,6da8bf8f-1"),
    e: common_vendor.o($options.changeDropDown),
    f: common_vendor.p({
      options: $data.options,
      customStyle: $data.customStyle,
      resultArray: $data.defaultValueArray
    }),
    g: common_vendor.p({
      customStyle: {
        background: "linear-gradient(134.4deg,#409eff 0%,#8cc4ff 25.8%,#007dff 100%)"
      }
    }),
    h: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.handleClick(item), index),
        b: common_vendor.o(($event) => $options.handleReserve(item), index),
        c: "6da8bf8f-5-" + i0 + ",6da8bf8f-0",
        d: common_vendor.p({
          info: item
        }),
        e: index
      };
    }),
    i: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    j: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    k: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
