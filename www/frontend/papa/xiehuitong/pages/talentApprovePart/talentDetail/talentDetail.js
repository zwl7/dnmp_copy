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
const apis_sportTalent = require("../../../apis/sportTalent.js");
const core_shareMixins = require("../../../core/shareMixins.js");
const utils_enum_useOption = require("../../../utils/enum/useOption.js");
const common_vendor = require("../../../common/vendor.js");
const navBar = () => "../../../components/navBar.js";
const _sfc_main = {
  mixins: [core_shareMixins.shareMixins],
  components: {
    navBar
  },
  data() {
    return {
      info: {
        level_info_json_array: []
      },
      navBarHeight: 0,
      navColor: "transparent",
      sport_talent_id: "",
      level_list: [],
      showLevelTag: [],
      tagList: []
    };
  },
  computed: {},
  onLoad(options) {
    const app = getApp();
    let { navBarHeight } = app.globalData;
    this.navBarHeight = navBarHeight;
    if (options.sport_talent_id) {
      this.sport_talent_id = options.sport_talent_id;
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
        let res = yield apis_sportTalent.getSportTalent({ sport_talent_id: this.sport_talent_id });
        if (res.code == 200) {
          let e = res.data;
          let { showLevelTag, tagList } = this.formatLevelTag(e.level_info_json_array);
          let obj = __spreadValues({
            show_image: "",
            show_distance: ""
          }, e);
          obj.show_image = e.cover_image_url;
          obj.show_distance = this.$distanceFormat(e.distance);
          obj.des = this.$formatRichText(String(e.remark), "暂无内容");
          obj.images_url = e.cover_image_url.split(",");
          this.showLevelTag = showLevelTag;
          this.tagList = tagList;
          this.info = obj;
        }
      });
    },
    formatLevelTag(level_info_json_array) {
      let list = [];
      let tagList = [];
      try {
        let levelSet = /* @__PURE__ */ new Set();
        level_info_json_array.sort((a, b) => {
          return a.level - b.level;
        });
        level_info_json_array.forEach((item) => {
          levelSet.add(item.level);
          tagList.push(item.sport_tag_id_str);
        });
        let options = utils_enum_useOption.useOptions();
        levelSet.forEach((item) => {
          let level_str = options.promoteLevelList.find((citem) => citem.value == item);
          if (level_str) {
            list.push({
              level: item,
              level_str: level_str.label
            });
          }
        });
      } catch (error) {
        console.error("------showLevelTag------", error);
      }
      return {
        showLevelTag: list,
        tagList
      };
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_icon2 + _component_layout_default_uni)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
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
    d: common_vendor.t($data.info.name),
    e: common_vendor.f($data.showLevelTag, (item, index, i0) => {
      return {
        a: "0a20ed74-2-" + i0 + ",0a20ed74-0",
        b: common_vendor.p({
          name: $options.getIcon("url", item.level),
          color: "#faac0e",
          size: "18"
        }),
        c: common_vendor.t(item.level_str),
        d: index,
        e: common_vendor.s($options.getIcon("color", item.level))
      };
    }),
    f: common_vendor.f($data.tagList, (sport_item, sindex, i0) => {
      return {
        a: common_vendor.t(sport_item),
        b: sindex
      };
    }),
    g: $data.info.des
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
