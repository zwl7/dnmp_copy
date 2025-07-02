"use strict";
const core_themeMixins = require("../../../core/themeMixins.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  mixins: [core_themeMixins.themeMixins],
  name: "BiddingItem",
  emits: ["toDetail"],
  props: {
    info: {
      type: Object,
      default: () => {
      }
    }
  },
  watch: {},
  data() {
    return {};
  },
  methods: {
    getBg(status) {
      const bgMap = {
        3: this.themePrimaryColorGetter,
        2: "#FAAD14",
        4: "#C8C9CC"
      };
      return bgMap[status] || this.themePrimaryColorGetter;
    },
    toDetail() {
      this.$emit("toDetail");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.info.name),
    b: common_vendor.t($props.info.level_str),
    c: common_vendor.t($props.info.sport_tag_str),
    d: common_vendor.t($props.info.start_time),
    e: common_vendor.t($props.info.end_time),
    f: common_vendor.t($props.info.status_str),
    g: $options.getBg($props.info.status),
    h: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-02dbe97a"]]);
wx.createComponent(Component);
