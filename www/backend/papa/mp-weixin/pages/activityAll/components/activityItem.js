"use strict";
const utils_util = require("../../../utils/util.js");
const common_vendor = require("../../../common/vendor.js");
require("../../../core/config.js");
require("../../../utils/qqmap-wx-jssdk.js");
const _sfc_main = {
  emits: ["click"],
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
    },
    getTag() {
      let flag_map = {
        1: "有直播",
        2: "即将直播",
        3: "直播中",
        4: "比赛回放"
      };
      return flag_map[this.info.live_flag];
    },
    getBtnClass() {
      let status = this.info.status;
      return status == 4 ? "act-end" : status == 3 ? "act-ing" : status == 2 ? "act-status" : "act-apply";
    }
  },
  methods: {
    toDetail() {
      this.$emit("click", this.info);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.info.show_images,
    b: common_vendor.t($props.info.name),
    c: common_vendor.t($options.toDistance),
    d: common_vendor.t($props.info.address),
    e: $options.getTag
  }, $options.getTag ? {
    f: common_vendor.t($options.getTag)
  } : {}, {
    g: common_vendor.t($props.info.start_time_str),
    h: common_vendor.t($props.info.end_time_str),
    i: common_vendor.t($props.info.status_str),
    j: common_vendor.n($options.getBtnClass),
    k: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dd28e561"], ["__file", "E:/gxm/uniapp-shandong/pages/activityAll/components/activityItem.vue"]]);
wx.createComponent(Component);
