"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "RankIcon",
  props: {
    rank: {
      type: [Number, String],
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
    getClass() {
      if (this.rank < 4) {
        return "rank_" + this.rank;
      } else {
        return "rank_4";
      }
    }
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.rank),
    b: common_vendor.n($options.getClass)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-68ed9291"]]);
wx.createComponent(Component);
//# sourceMappingURL=rank.js.map
