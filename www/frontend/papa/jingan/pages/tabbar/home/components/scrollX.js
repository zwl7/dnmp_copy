"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      scrollTop: 0,
      old: {
        scrollTop: 0
      }
    };
  },
  methods: {
    scroll: function(e) {
      this.old.scrollTop = e.detail.scrollTop;
    },
    clickItem(item) {
      this.$emit("customClick", item);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.list, (item, index, i0) => {
      return {
        a: item.url,
        b: common_vendor.t(item.name),
        c: index,
        d: common_vendor.o(($event) => $options.clickItem(item), index)
      };
    }),
    b: common_vendor.o((...args) => $options.scroll && $options.scroll(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7b44c580"]]);
wx.createComponent(Component);
