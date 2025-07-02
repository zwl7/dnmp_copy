"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
const LevelIcon = () => "../../../../components/LevelIcon/index.js";
const _sfc_main = {
  name: "levelcard",
  props: {
    userInfo: {
      type: Object,
      default: () => {
      }
    }
  },
  components: {
    LevelIcon
  },
  data() {
    return {
      starFill: common_assets.starFill,
      star: common_assets.star
    };
  },
  methods: {
    goLevel() {
      common_vendor.index.navigateTo({
        url: "/pages-sub/levelRatingRecord/index"
      });
    },
    goRating() {
      common_vendor.index.navigateTo({
        url: "/pages-sub/starRatingRecord/index"
      });
    }
  }
};
if (!Array) {
  const _component_LevelIcon = common_vendor.resolveComponent("LevelIcon");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_rate2 = common_vendor.resolveComponent("uv-rate");
  (_component_LevelIcon + _easycom_uv_icon2 + _easycom_uv_rate2)();
}
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_rate = () => "../../../../node-modules/@climblee/uv-ui/components/uv-rate/uv-rate.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_rate)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      level: $props.userInfo.level
    }),
    b: common_vendor.p({
      name: "arrow-right",
      color: "#606266",
      size: "28rpx"
    }),
    c: common_vendor.o((...args) => $options.goLevel && $options.goLevel(...args)),
    d: common_vendor.sr("rateRef", "b70cc798-2"),
    e: common_vendor.p({
      value: $props.userInfo.star_level,
      size: "40rpx",
      activeIcon: $data.starFill,
      inactiveIcon: $data.star,
      readonly: true
    }),
    f: common_vendor.p({
      name: "arrow-right",
      color: "#606266",
      size: "28rpx"
    }),
    g: common_vendor.o((...args) => $options.goRating && $options.goRating(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b70cc798"]]);
wx.createComponent(Component);
//# sourceMappingURL=levelCard.js.map
