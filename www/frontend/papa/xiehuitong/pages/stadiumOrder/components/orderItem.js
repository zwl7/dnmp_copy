"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "orderItem",
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      //   info: {
      //     status: 1,
      //   },
    };
  },
  mounted() {
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.info.cate_type_name),
    b: common_vendor.t($props.info.order_status_str),
    c: common_vendor.f($props.info.order_info, (item, index, i0) => {
      return {
        a: common_vendor.t(item.sku_info),
        b: index
      };
    }),
    d: common_vendor.t($props.info.c_time),
    e: common_vendor.t($props.info.pay_price),
    f: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-93608d99"]]);
wx.createComponent(Component);
