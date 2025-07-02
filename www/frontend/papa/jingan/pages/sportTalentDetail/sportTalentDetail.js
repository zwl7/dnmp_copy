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
const mixins_shareMixins = require("../../mixins/shareMixins.js");
const common_vendor = require("../../common/vendor.js");
const navBar = () => "../../components/navBar/index.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  components: {
    navBar
  },
  data() {
    return {
      info: {},
      navBarHeight: 0,
      navColor: "transparent",
      instructor_id: ""
    };
  },
  onLoad(options) {
    const app = getApp();
    let { navBarHeight } = app.globalData;
    this.navBarHeight = navBarHeight;
    if (options.instructor_id) {
      this.instructor_id = options.instructor_id;
      this.getDetail();
    }
  },
  onPageScroll(event) {
    let scrollTop = event.scrollTop;
    if (scrollTop > 60) {
      this.navColor = "#fff";
    } else {
      this.navColor = "transparent";
    }
  },
  methods: {
    getIcon(type, value) {
      return this.$dict.getDictLabel("promoteLevelList", value, {
        labelKey: type
      });
    },
    getDetail() {
      return __async(this, null, function* () {
        let res = yield apis_common.getInstructor({ instructor_id: this.instructor_id });
        if (res.code == 200) {
          let e = res.data;
          let obj = __spreadValues({
            show_image: "",
            show_distance: "",
            sport_tag_str: []
          }, e);
          obj.show_image = e.publicity_image;
          obj.sport_tag_str = e.sport_tag_names.split(",");
          obj.show_distance = this.$distanceFormat(e.distance);
          obj.des = this.$formatRichText(e.des, "暂无内容");
          obj.images_url = e.cover_image.split(",");
          this.info = obj;
        }
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_pa_tag = common_vendor.resolveComponent("pa-tag");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_icon2 + _component_pa_tag + _component_layout_default_uni)();
}
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      navColor: $data.navColor,
      title: "详情",
      searchColor: "#f3f9ff",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: common_vendor.f($data.info.images_url, (item, index, i0) => {
      return {
        a: item,
        b: index
      };
    }),
    c: $data.info.show_image,
    d: common_vendor.o((...args) => _ctx.toDetail && _ctx.toDetail(...args)),
    e: common_vendor.t($data.info.name),
    f: common_vendor.p({
      name: $options.getIcon("url", $data.info.level),
      color: "#faac0e",
      size: "18"
    }),
    g: common_vendor.t($data.info.level_str),
    h: common_vendor.s($options.getIcon("color", $data.info.level)),
    i: common_vendor.o((...args) => _ctx.toDetail && _ctx.toDetail(...args)),
    j: common_vendor.f($data.info.sport_tag_str, (tag, sindex, i0) => {
      return {
        a: common_vendor.t($data.info.sport_tag_str.length > 5 ? "..." : tag),
        b: sindex,
        c: "7b7dc91e-3-" + i0 + ",7b7dc91e-0"
      };
    }),
    k: common_vendor.o((...args) => _ctx.toDetail && _ctx.toDetail(...args)),
    l: $data.info.des
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
