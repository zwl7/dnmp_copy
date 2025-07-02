"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "CellItem",
  props: {
    label: String,
    labelColor: String,
    value: String,
    valueColor: String,
    icon: String,
    link: Boolean,
    isTitle: Boolean,
    border: Boolean,
    minWidth: String
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
if (!Array) {
  const _component_template = common_vendor.resolveComponent("template");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_component_template + _easycom_uni_icons2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.icon
  }, $props.icon ? {
    b: $props.icon
  } : {}, {
    c: common_vendor.t($props.label),
    d: $props.labelColor,
    e: $props.minWidth,
    f: common_vendor.t($props.value),
    g: $props.valueColor,
    h: $props.link
  }, $props.link ? {
    i: common_vendor.p({
      type: "forward",
      color: "#969799",
      size: "16"
    })
  } : {}, {
    j: common_vendor.n({
      border: $props.border
    }),
    k: common_vendor.n({
      "is-title ": $props.isTitle
    }),
    l: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d088163a"]]);
wx.createComponent(Component);
