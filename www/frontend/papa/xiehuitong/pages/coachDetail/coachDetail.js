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
const apis_common = require("../../apis/common.js");
const common_vendor = require("../../common/vendor.js");
const navBar = () => "../../components/navBar.js";
const coachItem = () => "../sportsTrainingDetail/components/coachItem.js";
const _sfc_main = {
  components: {
    navBar,
    coachItem
  },
  data() {
    return {
      info: {},
      navBarHeight: 0,
      navColor: "#fff",
      organization_coach_id: ""
    };
  },
  onLoad(options) {
    const app = getApp();
    let { navBarHeight } = app.globalData;
    this.navBarHeight = navBarHeight;
    if (options.organization_coach_id) {
      this.organization_coach_id = options.organization_coach_id;
      this.getDetail();
    }
  },
  onPageScroll(event) {
    event.scrollTop;
  },
  methods: {
    getDetail() {
      return __async(this, null, function* () {
        let res = yield apis_common.getCoachDetail({
          organization_coach_id: this.organization_coach_id
        });
        if (res.code == 200) {
          let e = res.data;
          let obj = __spreadValues({
            show_image: "",
            show_distance: "",
            sport_tag_str: []
          }, e);
          obj.show_image = e.publicity_image;
          obj.sport_tag_str = (e.sport_tag_names || "").split(",");
          obj.show_distance = this.$distanceFormat(e.distance);
          obj.des = this.$formatRichText(e.des, "暂无内容");
          this.info = obj;
        }
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_coachItem = common_vendor.resolveComponent("coachItem");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_coachItem + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      navColor: $data.navColor,
      title: "教练详情",
      searchColor: "#f3f9ff",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: common_vendor.p({
      info: $data.info,
      showExtend: false
    }),
    c: $data.info.des,
    d: $data.navBarHeight + "px"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
