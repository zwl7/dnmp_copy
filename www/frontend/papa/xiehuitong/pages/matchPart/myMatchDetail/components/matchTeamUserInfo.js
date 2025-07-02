"use strict";
const common_vendor = require("../../../../common/vendor.js");
const ceilLine = () => "../../components/ceilLine.js";
const _sfc_main = {
  components: {
    ceilLine
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClickQrcode() {
      this.$emit("clickQrcode");
    },
    showBorder(index) {
      return index != this.list.length - 1;
    }
  }
};
if (!Array) {
  const _component_ceil_line = common_vendor.resolveComponent("ceil-line");
  _component_ceil_line();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.list, (item, index, i0) => {
      return {
        a: index,
        b: "365bd181-0-" + i0,
        c: common_vendor.p({
          title: item.value,
          index: item.index,
          value: "",
          border: $options.showBorder(index),
          ["is-group"]: true,
          isLink: false
        })
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-365bd181"]]);
wx.createComponent(Component);
