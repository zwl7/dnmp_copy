"use strict";
const mixins_themeMixins = require("../../../../mixins/themeMixins.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  mixins: [mixins_themeMixins.themeMixins],
  props: {
    info: {
      type: Object,
      default: () => {
        return {
          groupName: "",
          projectName: ""
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClickQrcode() {
      this.$emit("clickQrcode");
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
  return {
    a: common_vendor.t($props.info.groupName),
    b: common_vendor.t($props.info.projectName),
    c: common_vendor.p({
      type: "iconfont-erweima1",
      ["custom-prefix"]: "iconfont",
      color: _ctx.themePrimaryColorGetter,
      size: "60rpx"
    }),
    d: common_vendor.o((...args) => $options.handleClickQrcode && $options.handleClickQrcode(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-71df20cf"]]);
wx.createComponent(Component);
