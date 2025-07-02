"use strict";
const common_assets = require("../../../common/assets.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "sportsTrainingItem",
  emits: ["reserve", "toDetail"],
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
    },
    showImageUrl() {
      return this.info.img_str ? this.info.img_str.split(",")[0] : common_assets.defaultUrl;
    }
  },
  methods: {
    handleReserve() {
      this.$emit("reserve", this.info);
    },
    toDetail() {
      this.$emit("toDetail", this.info);
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.showImageUrl,
    b: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args)),
    c: common_vendor.t($props.info.name),
    d: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args)),
    e: common_vendor.f($props.info.sport_tag_str.slice(0, 2), (sport_item, sindex, i0) => {
      return {
        a: common_vendor.t(sport_item),
        b: sindex
      };
    }),
    f: $props.info.sport_tag_str.length > 2
  }, $props.info.sport_tag_str.length > 2 ? {} : {}, {
    g: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args)),
    h: common_vendor.p({
      type: "iconfont-location-outline",
      ["custom-prefix"]: "iconfont",
      size: "16",
      color: "#A5ADBA"
    }),
    i: $props.info.show_distance
  }, $props.info.show_distance ? {
    j: common_vendor.t($props.info.show_distance)
  } : {}, {
    k: common_vendor.t($props.info.address)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-79190493"]]);
wx.createComponent(Component);
