"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "approveItem",
  emits: ["toDetail"],
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
  computed: {},
  methods: {
    getBg(tag) {
      return this.$dict.getDictLabel("volunteerStatusColorList", tag, {
        labelKey: "bgColor",
        valueKey: "value"
      }) || "#0078D0";
    },
    getColor(tag) {
      return this.$dict.getDictLabel("volunteerStatusColorList", tag, {
        labelKey: "color"
      }) || "#fff";
    },
    toDetail() {
      this.$emit("toDetail", this.info);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.info.c_time),
    b: common_vendor.t($props.info.status_str),
    c: $options.getColor($props.info.status),
    d: $options.getBg($props.info.status),
    e: common_vendor.t($props.info.type_name),
    f: common_vendor.t($props.info.name),
    g: common_vendor.t($props.info.identity),
    h: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ad475c84"]]);
wx.createComponent(Component);
