"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "LevelIcon",
  props: {
    level: {
      type: [Number, String],
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
    showLevelIcon() {
      return ["0", "1", "2", "3", "4"].includes(String(this.level));
    }
  },
  methods: {
    getIcon(type, value) {
      return this.$dict.getDictLabel("promoteLevelList", value, { labelKey: type });
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  _easycom_uv_icon2();
}
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.showLevelIcon
  }, $options.showLevelIcon ? {
    b: common_vendor.p({
      name: $options.getIcon("url", $props.level),
      size: "22"
    }),
    c: common_vendor.t($options.getIcon("label", $props.level)),
    d: common_vendor.s($options.getIcon("color", $props.level))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6b7b8a05"]]);
wx.createComponent(Component);
//# sourceMappingURL=index.js.map
