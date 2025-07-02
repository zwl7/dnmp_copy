"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    qrCodeContent: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      customStyle: {
        backgroundColor: "#fff",
        borderRadius: "32rpx"
      },
      qrCodeUrl: ""
    };
  },
  methods: {
    open() {
      this.$refs.popup.open();
    },
    completeQrcode() {
      this.$refs.qrcode.toTempFilePath({
        success: (res) => {
          this.qrCodeUrl = res.tempFilePath;
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
  const _easycom_uv_qrcode2 = common_vendor.resolveComponent("uv-qrcode");
  (_easycom_uv_popup2 + _easycom_uv_qrcode2)();
}
const _easycom_uv_popup = () => "../../../../node-modules/@climblee/uv-ui/components/uv-popup/uv-popup.js";
const _easycom_uv_qrcode = () => "../../../../node-modules/@climblee/uv-ui/components/uv-qrcode/uv-qrcode.js";
if (!Math) {
  (_easycom_uv_popup + _easycom_uv_qrcode)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.qrCodeUrl,
    b: common_vendor.sr("popup", "7d93d8be-0"),
    c: common_vendor.p({
      mode: "center",
      customStyle: $data.customStyle
    }),
    d: common_vendor.sr("qrcode", "7d93d8be-1"),
    e: common_vendor.o($options.completeQrcode),
    f: common_vendor.p({
      size: "396rpx",
      value: $props.qrCodeContent
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7d93d8be"]]);
wx.createComponent(Component);
