"use strict";
const common_vendor = require("../../common/vendor.js");
const core_themeMixins = require("../../core/themeMixins.js");
const _sfc_main = {
  mixins: [core_themeMixins.themeMixins],
  data() {
    return {
      type: "hold",
      // hold 赛事申办 / bid 办赛
      event_plan_id: "",
      event_plan_apply_id: ""
    };
  },
  onLoad(options) {
    if (options.event_plan_id) {
      this.event_plan_id = options.event_plan_id;
    }
    if (options.event_plan_apply_id) {
      this.event_plan_id = options.event_plan_id;
      this.event_plan_apply_id = options.event_plan_apply_id;
    }
  },
  methods: {
    jumpToDetail() {
      if (this.event_plan_apply_id) {
        common_vendor.index.redirectTo({
          url: `/pages/bidEventDetail/bidEventDetail?event_plan_id=${this.event_plan_id}&event_plan_apply_id=${this.event_plan_apply_id}`
        });
      } else {
        common_vendor.index.redirectTo({
          url: `/pages/eventBiddingDetail/eventBiddingDetail?event_plan_id=${this.event_plan_id}`
        });
      }
    },
    toHome() {
      common_vendor.index.switchTab({
        url: `/pages/tabbar/home/home`
      });
    }
  }
};
if (!Array) {
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  _component_layout_default_uni();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.getThemeIcon("result_success"),
    b: common_vendor.o((...args) => $options.jumpToDetail && $options.jumpToDetail(...args)),
    c: common_vendor.o((...args) => $options.toHome && $options.toHome(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5fcaba9b"]]);
wx.createPage(MiniProgramPage);
