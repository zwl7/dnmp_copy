"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "ScoreCard",
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  data() {
    return {
      scoreItems: [
        {
          label: "变动后",
          value: 5
        },
        {
          label: "变动前",
          value: 4
        }
      ],
      scoreReason: "系统依据评定规则，按周期自动更新",
      totalScore: 66
    };
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
  return {
    a: common_vendor.f(5, (n, k0, i0) => {
      return {
        a: n,
        b: "e7a1ec19-0-" + i0,
        c: common_vendor.p({
          type: n <= $props.data.afterLevel ? "star-filled" : "star",
          size: "20",
          color: "#ffd700"
        })
      };
    }),
    b: common_vendor.f(5, (n, k0, i0) => {
      return {
        a: n,
        b: "e7a1ec19-1-" + i0,
        c: common_vendor.p({
          type: n <= $props.data.originalLevel ? "star-filled" : "star",
          size: "20",
          color: "#ffd700"
        })
      };
    }),
    c: common_vendor.t($props.data.score),
    d: common_vendor.t($props.data.reason ? $props.data.reason : "暂无内容")
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e7a1ec19"]]);
wx.createComponent(Component);
//# sourceMappingURL=RatingCard.js.map
