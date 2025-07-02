"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "scrollOne",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  computed: {
    indicatorDots() {
      return this.list.length > 1 ? true : false;
    }
  },
  data() {
    return {
      autoplay: true,
      interval: 2e3,
      duration: 500
    };
  },
  methods: {
    handleItem(item) {
      this.$emit("click", item);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.list.length != 1
  }, $props.list.length != 1 ? {
    b: common_vendor.f($props.list, (item, index, i0) => {
      return {
        a: item.images_url,
        b: index,
        c: common_vendor.o(($event) => $options.handleItem(item), index)
      };
    }),
    c: $options.indicatorDots,
    d: $data.autoplay,
    e: $data.interval,
    f: $data.duration
  } : {}, {
    g: $props.list.length == 1
  }, $props.list.length == 1 ? {
    h: common_vendor.f($props.list, (item, k0, i0) => {
      return {
        a: item.images_url,
        b: item,
        c: common_vendor.o(($event) => $options.handleItem(item), item)
      };
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gxm/uniapp-shandong/components/scrollOne.vue"]]);
wx.createComponent(Component);
