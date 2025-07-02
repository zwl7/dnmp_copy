"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "swiperList",
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
      return false;
    },
    swiperName() {
      return this.list[this.currentswiper] ? this.list[this.currentswiper].name : "";
    }
  },
  watch: {
    list: {
      handler: function(val) {
        if (val && val.length > 0) {
          console.log("-------------", "swiper");
          this.currentswiper = 0;
        }
      },
      immediate: true
    }
  },
  data() {
    return {
      autoplay: true,
      interval: 3500,
      duration: 3500,
      // autoplay: false,
      // interval: 2000,
      // duration: 500,
      currentswiper: 0,
      name: ""
    };
  },
  methods: {
    handleItem(item) {
      this.$emit("click", item);
    },
    monitorCurrent(e) {
      if (e.target.source == "autoplay" || e.target.source == "touch") {
        this.currentswiper = e.detail.current;
      }
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
    c: common_vendor.o((...args) => $options.monitorCurrent && $options.monitorCurrent(...args)),
    d: $data.currentswiper,
    e: $options.indicatorDots,
    f: $data.autoplay,
    g: $data.interval,
    h: $data.duration
  } : {}, {
    i: $props.list.length == 1
  }, $props.list.length == 1 ? {
    j: common_vendor.f($props.list, (item, k0, i0) => {
      return {
        a: item.images_url,
        b: item,
        c: common_vendor.o(($event) => $options.handleItem(item), item)
      };
    })
  } : {}, {
    k: $props.list.length != 1
  }, $props.list.length != 1 ? {
    l: common_vendor.f($props.list.length, (item, index, i0) => {
      return {
        a: common_vendor.n($data.currentswiper == index ? "active" : ""),
        b: item
      };
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-10e9bc10"]]);
wx.createComponent(Component);
