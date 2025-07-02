"use strict";
const mixins_themeMixins = require("../../../../mixins/themeMixins.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  mixins: [mixins_themeMixins.themeMixins],
  props: {
    type: {
      type: String,
      default: "user"
    },
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  computed: {
    showTitle() {
      return this.type == "user" ? "个人报名信息" : "团队报名信息";
    },
    extendClass() {
      return this.type == "user" ? "user" : "team";
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($options.showTitle),
    b: `url(${_ctx.getThemeIcon("match_top")})`,
    c: common_vendor.f($props.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.label),
        b: common_vendor.t(item.value),
        c: index
      };
    }),
    d: common_vendor.n($options.extendClass)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-23c7e556"]]);
wx.createComponent(Component);
