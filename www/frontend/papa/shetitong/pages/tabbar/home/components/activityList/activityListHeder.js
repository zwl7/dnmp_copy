"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const switchButton = () => "./switchButton.js";
const _sfc_main = {
  name: "activityListHeder",
  components: {
    switchButton
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    imageUrl: {
      type: String,
      default: "https://cdn-static.papa.com.cn/social/activity-style.png"
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  methods: {
    handleChange(e) {
      this.$emit("update:modelValue", e);
      this.$emit("change", e);
    }
  }
};
if (!Array) {
  const _component_switchButton = common_vendor.resolveComponent("switchButton");
  _component_switchButton();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.imageUrl,
    b: $props.title,
    c: common_vendor.t($props.title),
    d: common_vendor.o($options.handleChange),
    e: common_vendor.p({
      checked: $props.modelValue,
      color: "#2979ff"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-16c1c9ad"]]);
wx.createComponent(Component);
//# sourceMappingURL=activityListHeder.js.map
