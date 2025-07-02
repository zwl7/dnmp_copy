"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "ReportItem",
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      background: "#4cd964"
    };
  },
  computed: {},
  methods: {
    handleClick() {
      this.$emit("toDetail");
    },
    handleDownload() {
      this.$emit("toDownload");
    }
  },
  watch: {}
};
if (!Array) {
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  _easycom_uv_button2();
}
const _easycom_uv_button = () => "../../../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
if (!Math) {
  _easycom_uv_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.info.report_name),
    b: common_vendor.t($props.info.name),
    c: common_vendor.t($props.info.time),
    d: common_vendor.o($options.handleDownload),
    e: common_vendor.p({
      size: "mini",
      type: "primary",
      shape: "circle"
    }),
    f: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-020042b7"]]);
wx.createComponent(Component);
