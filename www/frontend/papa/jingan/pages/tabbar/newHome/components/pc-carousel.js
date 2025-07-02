"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "PcCarousel",
  props: {
    sourceList: {
      type: Array,
      default: () => []
    }
  },
  computed: {},
  data() {
    return {
      current: 0
    };
  },
  methods: {
    monitorCurrent(e) {
      const currentIndex = e.detail.current;
      this.current = currentIndex > this.sourceList.length - 1 ? 0 : currentIndex;
    },
    // 根据传入的index获取类名
    getClassName(index) {
      if (index === this.current) {
        return "active";
      }
      if (this.current === 0) {
        if (index === this.sourceList.length - 1) {
          return "pre";
        }
        if (index === this.current + 1) {
          return "next";
        }
      }
      if (this.current === this.sourceList.length - 1) {
        if (index === 0) {
          return "next";
        }
        if (index === this.current - 1) {
          return "pre";
        }
      }
      if (index === this.current - 1) {
        return "pre";
      }
      if (index === this.current + 1) {
        return "next";
      }
      return "";
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.sourceList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: item.images_url,
        c: common_vendor.n($options.getClassName(index)),
        d: common_vendor.o(($event) => _ctx.$emit("detail", item), index),
        e: index,
        f: index === $data.current ? 1 : ""
      };
    }),
    b: common_vendor.o((...args) => $options.monitorCurrent && $options.monitorCurrent(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bbdf6aef"]]);
wx.createComponent(Component);
