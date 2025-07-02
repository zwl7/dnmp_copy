"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  name: "yunLessonItem",
  props: {
    type: {
      type: String,
      default: "normal"
      //normal top
    },
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
  mounted() {
  },
  methods: {
    handleClick() {
      this.$emit("click");
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
    a: $props.type === "top"
  }, $props.type === "top" ? common_vendor.e({
    b: $props.info.video_banner,
    c: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-Play",
      size: "16",
      color: "#fff"
    }),
    d: common_vendor.t($props.info.visit_count)
  }, {}, {
    e: common_vendor.t($props.info.name)
  }) : {}, {
    f: $props.type == "normal"
  }, $props.type == "normal" ? common_vendor.e({
    g: $props.info.video_banner
  }, {}, {
    i: common_assets._imports_1,
    j: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-Play",
      size: "16",
      color: "#fff"
    }),
    k: common_vendor.t($props.info.visit_count)
  }, {}, {
    l: common_vendor.t($props.info.name)
  }) : {}, {
    m: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-165215ce"]]);
wx.createComponent(Component);
