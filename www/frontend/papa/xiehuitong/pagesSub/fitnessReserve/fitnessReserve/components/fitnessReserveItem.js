"use strict";
const core_themeMixins = require("../../../../core/themeMixins.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "fitnessReserveItem",
  emits: ["reserve", "toDetail"],
  mixins: [core_themeMixins.themeMixins],
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    },
    hiddenBtn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    handleReserve() {
      this.$emit("reserve", this.info);
    },
    toDetail() {
      this.$emit("toDetail", this.info);
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
  return common_vendor.e({
    a: $props.info.show_image || _ctx.defaultImgUrl,
    b: common_vendor.t($props.info.name),
    c: $props.info.common_type_ids_str_arr
  }, $props.info.common_type_ids_str_arr ? common_vendor.e({
    d: common_vendor.f($props.info.common_type_ids_str_arr.slice(0, 2), (sport_item, sindex, i0) => {
      return {
        a: common_vendor.t(sport_item),
        b: sindex
      };
    }),
    e: $props.info.common_type_ids_str_arr.length > 2
  }, $props.info.common_type_ids_str_arr.length > 2 ? {} : {}) : {}, {
    f: common_vendor.p({
      type: "iconfont-location-outline",
      ["custom-prefix"]: "iconfont",
      size: "16",
      color: "#A5ADBA"
    }),
    g: common_vendor.t($props.info.address),
    h: !$props.hiddenBtn
  }, !$props.hiddenBtn ? {
    i: common_vendor.o((...args) => $options.handleReserve && $options.handleReserve(...args))
  } : {}, {
    j: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-51e5e007"]]);
wx.createComponent(Component);
