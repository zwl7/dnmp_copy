"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    showExtend: {
      type: Boolean,
      default: true
    },
    topBg: {
      type: String,
      default: ""
    },
    customStyle: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      defaultCustomStyle: {
        // background: "linear-gradient(180deg, #d3ebff 0%, #ffffff 100%)",
        "box-shadow": ""
        // "min-height": "432rpx"
      }
    };
  },
  methods: {
    clickItem(item) {
      this.$emit("click", item);
    },
    handleClickRight() {
      this.$emit("more");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.topBg
  }, $props.topBg ? {
    b: $props.topBg
  } : {}, {
    c: common_vendor.n($props.topBg ? "translate-Y" : ""),
    d: common_vendor.s($data.defaultCustomStyle),
    e: common_vendor.s($props.customStyle)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-91c5f7c8"]]);
wx.createComponent(Component);
