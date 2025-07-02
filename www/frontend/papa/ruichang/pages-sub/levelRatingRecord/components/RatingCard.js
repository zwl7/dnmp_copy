"use strict";
const common_vendor = require("../../../common/vendor.js");
const levelIcon = () => "../../../components/LevelIcon/index.js";
const _sfc_main = {
  name: "RatingCard",
  components: {
    levelIcon
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
};
if (!Array) {
  const _component_levelIcon = common_vendor.resolveComponent("levelIcon");
  _component_levelIcon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      level: $props.data.afterLevel
    }),
    b: common_vendor.p({
      level: $props.data.originalLevel
    }),
    c: common_vendor.t($props.data.currentProject),
    d: common_vendor.t($props.data.originalProject),
    e: common_vendor.t($props.data.trainingName),
    f: common_vendor.t($props.data.department)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d53193da"]]);
wx.createComponent(Component);
//# sourceMappingURL=RatingCard.js.map
