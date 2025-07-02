"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "orderCard",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    title: {
      type: String,
      default: () => {
        return "";
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    handlePick(item) {
      this.$emit("click", item);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.title),
    b: common_vendor.f($props.list, (item, index, i0) => {
      return common_vendor.e({
        a: item.img_url,
        b: common_vendor.t(item.sport_tag_name),
        c: common_vendor.t(item.opertor),
        d: common_vendor.o(($event) => $options.handlePick(item), index),
        e: $props.list.length != index + 1
      }, $props.list.length != index + 1 ? {} : {}, {
        f: index
      });
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fe8cdfb4"]]);
wx.createComponent(Component);
