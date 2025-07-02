"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    customStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    borderType: {
      type: String,
      default: "solid"
    },
    isSelect: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    }
  },
  computed: {
    outCustomStyle() {
      return Object.assign({}, { "border-style": this.borderType }, this.customStyle);
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit("customClick");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.title),
    b: common_vendor.n({
      selected: $props.isSelect
    }),
    c: common_vendor.s($options.outCustomStyle),
    d: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9beff492"]]);
wx.createComponent(Component);
