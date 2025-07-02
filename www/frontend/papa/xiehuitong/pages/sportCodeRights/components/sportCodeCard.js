"use strict";
const common_vendor = require("../../../common/vendor.js");
const core_themeMixins = require("../../../core/themeMixins.js");
const _sfc_main = {
  mixins: [core_themeMixins.themeMixins],
  emits: ["refresh"],
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    },
    type: {
      type: String,
      default: "sportCode"
      //sportCode运动码
    }
  },
  data() {
    return {
      height: 0,
      qrcodeUrl: "",
      intvervalId: 0
    };
  },
  mounted() {
    const query = common_vendor.index.createSelectorQuery().in(this);
    query.select("#code-body").boundingClientRect((data) => {
      console.log("得到布局位置信息" + JSON.stringify(data.height));
      this.height = data.height * 2 + 16;
    }).exec();
  },
  created() {
    this.setFlashTime();
  },
  unmounted() {
    clearInterval(this.intvervalId);
  },
  methods: {
    toGuide() {
      this.$emit("toGuide");
    },
    toScopeArea() {
      this.$emit("toScopeArea");
    },
    setFlashTime() {
      this.intvervalId = setInterval(() => {
        this.info.refreshTime--;
      }, 1e3);
    },
    refreshCode() {
      this.$emit("refresh", this.info);
    },
    completeQrcode() {
      this.$refs.qrcode.toTempFilePath({
        success: (res) => {
          this.qrcodeUrl = res.tempFilePath;
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_qrcode2 = common_vendor.resolveComponent("uv-qrcode");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uv_qrcode2 + _easycom_uni_icons2)();
}
const _easycom_uv_qrcode = () => "../../../node-modules/@climblee/uv-ui/components/uv-qrcode/uv-qrcode.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uv_qrcode + _easycom_uni_icons)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.info.title),
    b: common_vendor.sr("qrcode", "2d7e1826-0"),
    c: common_vendor.o($options.completeQrcode),
    d: common_vendor.p({
      size: "396rpx",
      value: $props.info.codeUrl
    }),
    e: $data.qrcodeUrl,
    f: $props.type == "sportCode"
  }, $props.type == "sportCode" ? {
    g: common_vendor.p({
      color: _ctx.themePrimaryColorGetter,
      ["custom-prefix"]: "iconfont",
      type: "iconfont-refresh",
      size: "22"
    }),
    h: common_vendor.t($props.info.refreshTime),
    i: common_vendor.o((...args) => $options.refreshCode && $options.refreshCode(...args)),
    j: common_vendor.o((...args) => $options.toScopeArea && $options.toScopeArea(...args)),
    k: common_vendor.o((...args) => $options.toGuide && $options.toGuide(...args))
  } : {}, {
    l: $data.height + "rpx"
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
