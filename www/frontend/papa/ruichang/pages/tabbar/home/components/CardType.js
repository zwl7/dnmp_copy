"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  emits: ["clickMore"],
  props: {
    titleInfo: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: ""
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    titleStyle: {
      type: Object,
      default: () => ({})
    },
    bg: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {},
  onLoad(options) {
  },
  methods: {
    handleClick() {
      this.$emit("clickMore");
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  _easycom_uv_icon2();
}
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.showTitle
  }, $props.showTitle ? {
    b: common_vendor.t($props.titleInfo.title),
    c: `${$props.titleInfo.color}`,
    d: common_vendor.t($props.titleInfo.num),
    e: `${$props.titleInfo.color}`,
    f: common_vendor.t($props.titleInfo.unit),
    g: common_vendor.p({
      name: "arrow-right",
      color: $props.titleInfo.arwColor ? $props.titleInfo.arwColor : "#53637A"
    }),
    h: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  } : {
    i: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  }, {
    j: `url(${$props.bg})`
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fb739484"]]);
wx.createComponent(Component);
//# sourceMappingURL=CardType.js.map
