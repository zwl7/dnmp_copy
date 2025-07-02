"use strict";
const common_assets = require("../../../common/assets.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  mixins: [mixins_themeMixins.themeMixins],
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    },
    showExtend: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return { default_img: common_assets.defaultAvatar };
  },
  methods: {
    handleClick() {
      this.$emit("click", this.info);
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: $props.info.gender == 2 ? "iconfont-xingbie" : "iconfont-xingbie1",
      size: "25rpx",
      color: "#ffffff"
    }),
    b: $props.info.gender == 2 ? "#ff657d" : _ctx.themePrimaryColorGetter,
    c: $props.info.images || $data.default_img,
    d: common_vendor.t($props.info.name),
    e: $props.info.educational_age
  }, $props.info.educational_age ? {
    f: common_vendor.t($props.info.educational_age)
  } : {}, {
    g: $props.showExtend
  }, $props.showExtend ? {
    h: common_vendor.p({
      type: "forward",
      size: "30rpx"
    })
  } : {}, {
    i: $props.showExtend
  }, $props.showExtend ? {} : {}, {
    j: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-42205bbf"]]);
wx.createComponent(Component);
