"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "CellItem",
  props: {
    label: String,
    value: String,
    icon: String,
    link: Boolean,
    isTitle: Boolean,
    border: Boolean
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
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
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
    d: common_vendor.t($props.value),
    e: $props.link
  }, $props.link ? {
    f: common_vendor.p({
      type: "forward",
      color: "#969799",
      size: "16"
    })
  } : {}, {
    g: common_vendor.n({
      border: $props.border
    }),
    h: common_vendor.n({
      "is-title ": $props.isTitle
    }),
    i: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d15218a5"]]);
wx.createComponent(Component);
