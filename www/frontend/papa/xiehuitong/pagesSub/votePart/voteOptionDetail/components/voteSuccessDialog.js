"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "voteSuccessDialog",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      iconUrl: "https://cdn-static.papa.com.cn/yuncheng/voteZone/vote-success.png",
      popup: null
    };
  },
  methods: {
    open() {
      this.$refs["voteSuccessDialog"].open("center");
    },
    close() {
      this.$refs["voteSuccessDialog"].close();
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
  (_easycom_uni_icons2 + _easycom_uv_popup2)();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uv_popup = () => "../../../../node-modules/@climblee/uv-ui/components/uv-popup/uv-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uv_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.iconUrl,
    b: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-cross",
      size: "24",
      color: "#fff"
    }),
    c: common_vendor.o((...args) => $options.close && $options.close(...args)),
    d: common_vendor.sr("voteSuccessDialog", "75a9343b-0"),
    e: common_vendor.p({
      bgColor: "none"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-75a9343b"]]);
wx.createComponent(Component);
