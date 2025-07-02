"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
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
    toDetail() {
      this.$emit("toDetail", this.info);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.info.show_image,
    b: common_vendor.t($props.info.name),
    c: common_vendor.t($props.info.address),
    d: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e3d5a866"], ["__file", "E:/gxm/uniapp-shandong/pages/associationList/components/stadiumItem.vue"]]);
wx.createComponent(Component);
