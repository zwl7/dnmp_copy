"use strict";
const common_assets = require("../../../common/assets.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    type: {
      type: String,
      default: "1"
    },
    isLast: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      ballTicket: common_assets.ballTicket,
      site: common_assets.site
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  _easycom_uv_icon2();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.item.name),
    b: $props.type == "1"
  }, $props.type == "1" ? {
    c: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    })
  } : {}, {
    d: $props.item.voucher_type == 1 ? $data.ballTicket : $data.site,
    e: common_vendor.f($props.item.content, (contentItem, index, i0) => {
      return {
        a: common_vendor.t(contentItem.name),
        b: common_vendor.t(contentItem.value),
        c: index
      };
    }),
    f: $props.type != "1"
  }, $props.type != "1" ? {
    g: common_vendor.t($props.item.valid_num)
  } : {}, {
    h: !$props.isLast
  }, !$props.isLast ? {} : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f9373ff0"]]);
wx.createComponent(Component);
