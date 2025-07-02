"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "tourItem",
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
      defaultImg: "https://cdn-static.papa.com.cn/yuncheng/default-tour.png"
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
    dealImages(images) {
      let showImg = this.defaultImg;
      if (images) {
        showImg = images.split(",")[0];
      }
      return showImg;
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
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.dealImages($props.info.images),
    b: common_vendor.t($props.info.name),
    c: common_vendor.p({
      type: "iconfont-location-outline",
      ["custom-prefix"]: "iconfont",
      size: "16",
      color: "#A5ADBA"
    }),
    d: $props.info.show_distance
  }, $props.info.show_distance ? {
    e: common_vendor.t($props.info.show_distance)
  } : {}, {
    f: common_vendor.t($props.info.address),
    g: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aaf2af6b"]]);
wx.createComponent(Component);
