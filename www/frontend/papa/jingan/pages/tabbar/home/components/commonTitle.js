"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    showMore: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "1"
    }
  },
  computed: {
    titleClass() {
      return "title-" + this.type;
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit("more");
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.title),
    b: common_vendor.n($options.titleClass),
    c: $props.showMore
  }, $props.showMore ? {
    d: common_vendor.p({
      type: "forward",
      size: "14",
      color: "#909399"
    }),
    e: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e867f388"]]);
wx.createComponent(Component);
