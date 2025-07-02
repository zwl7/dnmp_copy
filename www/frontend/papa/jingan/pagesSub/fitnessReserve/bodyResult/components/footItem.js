"use strict";
const utils_util = require("../../../../utils/util.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "FootItem",
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      background: "#4cd964",
      previewImage: utils_util.previewImage
    };
  },
  computed: {},
  methods: {
    handleClick() {
      this.$emit("toDetail");
    }
  },
  watch: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.info.time),
    b: $props.info.footImg,
    c: common_vendor.o(($event) => $data.previewImage($props.info.footImg)),
    d: common_vendor.f($props.info.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index != 0 ? 1 : "",
        c: common_vendor.t(item.left),
        d: common_vendor.t(item.right),
        e: (index + 1) % 2 == 0 ? 1 : "",
        f: index == 0 ? 1 : "",
        g: index != 0 ? 1 : "",
        h: index == $props.info.list.length - 1 ? 1 : "",
        i: item
      };
    }),
    e: $props.info.footImg,
    f: common_vendor.o(($event) => $data.previewImage($props.info.footImg))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0f39b71a"]]);
wx.createComponent(Component);
