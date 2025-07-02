"use strict";
const common_assets = require("../../../../common/assets.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "stadiumItem",
  emits: ["reserve", "click"],
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      defaultUrl: common_assets.defaultUrl$1,
      defaultImg: "https://cdn-static.papa.com.cn/jxpq/themeStatic/GrassGreen/defaultSiteAvater.png"
    };
  },
  computed: {
    toDistance() {
      this.info;
      let distance = "位置未知";
      return distance;
    }
  },
  methods: {
    dealImage() {
      let info = this.info;
      let returnImg = common_assets.defaultUrl$1;
      Object.prototype.toString.call(info.images_url) === "[object Array]";
      if (Object.prototype.toString.call(info.images_url) === "[object Array]") {
        if (info.images_url.length > 0) {
          returnImg = info.images_url[0];
        } else {
          if (info.sport_tourism_id) {
            returnImg = "https://cdn-static.papa.com.cn/yuncheng/default-tour.png";
          }
        }
      }
      return returnImg;
    },
    handleReserve() {
      this.$emit("reserve", this.info);
    },
    toDetail() {
      this.$emit("click", this.info);
    },
    handleError() {
      this.info.images_url[0] = this.defaultImg;
    }
  }
};
if (!Array) {
  const _component_pa_tag = common_vendor.resolveComponent("pa-tag");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_component_pa_tag + _easycom_uni_icons2)();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.dealImage(),
    b: common_vendor.o((...args) => $options.handleError && $options.handleError(...args)),
    c: common_vendor.t($props.info.name),
    d: $props.info.sport_tag_str
  }, $props.info.sport_tag_str ? common_vendor.e({
    e: common_vendor.f($props.info.sport_tag_str.slice(0, 2), (tag, sindex, i0) => {
      return {
        a: common_vendor.t(tag),
        b: sindex,
        c: "ce995e4e-0-" + i0
      };
    }),
    f: $props.info.sport_tag_str.length > 1
  }, $props.info.sport_tag_str.length > 1 ? {} : {}) : {}, {
    g: common_vendor.p({
      type: "iconfont-location-outline",
      ["custom-prefix"]: "iconfont",
      size: "16",
      color: "#A5ADBA"
    }),
    h: $props.info.show_distance
  }, $props.info.show_distance ? {
    i: common_vendor.t($props.info.show_distance)
  } : {}, {
    j: common_vendor.t($props.info.address || "暂无位置信息"),
    k: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ce995e4e"]]);
wx.createComponent(Component);
