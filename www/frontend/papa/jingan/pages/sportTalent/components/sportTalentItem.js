"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "stadiumItem",
  emits: ["reserve", "click"],
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    },
    type: {
      type: String,
      default: () => {
        return "";
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    toDistance() {
      this.info;
      let distance = "位置未知";
      return distance;
    }
  },
  methods: {
    getIcon(type, value) {
      return this.$dict.getDictLabel("promoteLevelList", value, {
        labelKey: type
      });
    },
    handleReserve() {
      this.$emit("reserve", this.info);
    },
    toDetail() {
      this.$emit("click", this.info);
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_pa_tag = common_vendor.resolveComponent("pa-tag");
  (_easycom_uv_icon2 + _component_pa_tag)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.info.show_image,
    b: common_vendor.p({
      name: $options.getIcon("url", $props.info.level),
      color: "#faac0e",
      size: "18"
    }),
    c: common_vendor.t($props.info.level_str),
    d: common_vendor.s($options.getIcon("color", $props.info.level)),
    e: common_vendor.t($props.info.name),
    f: common_vendor.f($props.info.sport_tag_str.slice(0, 5), (tag, sindex, i0) => {
      return {
        a: common_vendor.t(tag),
        b: sindex,
        c: "6e25a7a6-1-" + i0
      };
    }),
    g: $props.info.sport_tag_str.length > 5
  }, $props.info.sport_tag_str.length > 5 ? {} : {}, {
    h: $props.type == "search"
  }, $props.type == "search" ? common_vendor.e({
    i: $props.type == "search"
  }, $props.type == "search" ? {
    j: common_vendor.t($props.info.type_str)
  } : {}) : {}, {
    k: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6e25a7a6"]]);
wx.createComponent(Component);
