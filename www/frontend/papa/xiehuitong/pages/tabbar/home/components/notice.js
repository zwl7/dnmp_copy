"use strict";
const common_assets = require("../../../../common/assets.js");
const core_themeMixins = require("../../../../core/themeMixins.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  mixins: [core_themeMixins.themeMixins],
  name: "notice",
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
      NoticePic: common_assets.NoticePic
    };
  },
  methods: {
    clickItem(item) {
      this.$emit("click", item);
    },
    clickIcon() {
      this.$emit("clickIcon");
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
    a: common_vendor.p({
      type: "iconfont-gonggao",
      ["custom-prefix"]: "iconfont",
      color: _ctx.themePrimaryColorGetter,
      size: "18"
    }),
    b: common_vendor.f($props.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: common_vendor.o(($event) => $options.clickItem(item), index)
      };
    }),
    c: common_vendor.p({
      type: "forward",
      color: _ctx.themePrimaryColorGetter,
      size: "18"
    }),
    d: common_vendor.o((...args) => $options.clickIcon && $options.clickIcon(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-451e084b"]]);
wx.createComponent(Component);
