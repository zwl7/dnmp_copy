"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    getRankingImg(item) {
      if (item.ranking < 4) {
        return `https://cdn-static.papa.com.cn/ppcs_mp/score/level_${item.ranking}.png`;
      }
      return "";
    },
    getUserAvatar(item) {
      return item.avatar || "https://cdn-static.papa.com.cn/ppcs_mp/avatar.png";
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.list, (item, k0, i0) => {
      return common_vendor.e({
        a: $options.getRankingImg(item)
      }, $options.getRankingImg(item) ? {
        b: $options.getRankingImg(item)
      } : {
        c: common_vendor.t(item.ranking)
      }, {
        d: $options.getUserAvatar(item),
        e: common_vendor.t(item.name),
        f: common_vendor.t(item.score),
        g: item.apply_id,
        h: common_vendor.n("level-" + item.ranking)
      });
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
