"use strict";
const common_assets = require("../../../common/assets.js");
const common_vendor = require("../../../common/vendor.js");
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
      defaultUrl: common_assets.defaultUrl
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
      let returnImg = common_assets.defaultUrl;
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
    }
  }
};
if (!Array) {
  const _component_pa_tag = common_vendor.resolveComponent("pa-tag");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_component_pa_tag + _easycom_uni_icons2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.dealImage(),
    b: common_vendor.t($props.info.name),
    c: $props.info.sport_tag_str
  }, $props.info.sport_tag_str ? common_vendor.e({
    d: common_vendor.f($props.info.sport_tag_str.slice(0, 2), (tag, sindex, i0) => {
      return {
        a: common_vendor.t(tag),
        b: sindex,
        c: "509f0518-0-" + i0
      };
    }),
    e: $props.info.sport_tag_str.length > 1
  }, $props.info.sport_tag_str.length > 1 ? {} : {}) : {}, {
    f: common_vendor.p({
      type: "iconfont-location-outline",
      ["custom-prefix"]: "iconfont",
      size: "16",
      color: "#A5ADBA"
    }),
    g: $props.info.show_distance
  }, $props.info.show_distance ? {
    h: common_vendor.t($props.info.show_distance)
  } : {}, {
    i: common_vendor.t($props.info.address || "暂无位置信息"),
    j: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-509f0518"]]);
wx.createComponent(Component);
//# sourceMappingURL=mapItem.js.map
