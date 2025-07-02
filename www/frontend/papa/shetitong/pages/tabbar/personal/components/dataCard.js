"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "dataCard",
  props: {
    dataConfig: {
      type: Object,
      default: () => {
      }
    },
    themeType: {
      default: "1",
      type: String
    },
    //  1 瑞昌  2 万载
    list: {
      default: [],
      type: Array
    }
  },
  data() {
    return {};
  },
  computed: {
    menuTitle() {
      var _a;
      return ((_a = this.dataConfig) == null ? void 0 : _a.title) || "";
    },
    menuIcon() {
      var _a;
      return ((_a = this.dataConfig) == null ? void 0 : _a.icon) || "";
    }
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.menuIcon
  }, $options.menuIcon ? {
    b: $options.menuIcon
  } : {}, {
    c: common_vendor.t($options.menuTitle),
    d: common_vendor.f($props.list, (baseListItem, baseListIndex, i0) => {
      return {
        a: common_vendor.t(baseListItem.title),
        b: common_vendor.t(baseListItem.number),
        c: baseListIndex
      };
    }),
    e: common_vendor.n($props.themeType == 2 ? "background" : ""),
    f: common_vendor.n($props.themeType == 1 ? "data-review" : "")
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8fecf316"]]);
wx.createComponent(Component);
//# sourceMappingURL=dataCard.js.map
