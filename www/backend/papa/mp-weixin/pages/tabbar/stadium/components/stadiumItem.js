"use strict";
const utils_util = require("../../../../utils/util.js");
const common_vendor = require("../../../../common/vendor.js");
require("../../../../core/config.js");
require("../../../../utils/qqmap-wx-jssdk.js");
const _sfc_main = {
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
    return {};
  },
  computed: {
    toDistance(item) {
      const app = getApp();
      const num = this.info.distance;
      if (num) {
        return Math.ceil(num / 1e3) + "KM";
      } else {
        const latitude = Number(this.info.latitude);
        const longitude = Number(this.info.longitude);
        const user_latitude = app.globalData.latitude;
        const user_longitude = app.globalData.longitude;
        if (!user_latitude || !user_longitude) {
          return "距离未知";
        }
        const distance = utils_util.getShortDistance(
          Number(user_latitude),
          Number(user_longitude),
          latitude,
          longitude
        );
        return distance + "KM";
      }
    },
    showReserveBtn() {
      return this.info.service_status == 1 && this.info.service_provider != 0;
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.info.show_images,
    b: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args)),
    c: common_vendor.t($props.info.name),
    d: common_vendor.t($options.toDistance),
    e: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args)),
    f: common_vendor.f($props.info.sport_tag_list, (sport_item, sindex, i0) => {
      return {
        a: common_vendor.t(sport_item),
        b: sindex
      };
    }),
    g: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args)),
    h: common_vendor.t($props.info.address),
    i: $options.showReserveBtn
  }, $options.showReserveBtn ? {
    j: common_vendor.o((...args) => $options.handleReserve && $options.handleReserve(...args))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-02e14855"], ["__file", "E:/gxm/uniapp-shandong/pages/tabbar/stadium/components/stadiumItem.vue"]]);
wx.createComponent(Component);
