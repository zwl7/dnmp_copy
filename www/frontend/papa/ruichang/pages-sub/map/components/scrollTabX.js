"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    scrollViewStyle: {
      type: Object,
      default: {}
    },
    scrollItemStyle: {
      type: Object,
      default: {}
    },
    itemCardImageStyle: {
      type: Object,
      default: {}
    },
    titleStyle: {
      type: Object,
      default: {}
    },
    itemStyle: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      scrollTop: 0,
      old: {
        scrollTop: 0
      },
      currentTab: 0
    };
  },
  methods: {
    getItemStyle(index) {
      if (this.currentTab == index)
        ;
    },
    scroll: function(e) {
      this.old.scrollTop = e.detail.scrollTop;
    },
    clickItem(item, index) {
      this.currentTab = index;
      this.$emit("click", item);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.list, (item, index, i0) => {
      return {
        a: item.img,
        b: common_vendor.n($data.currentTab == index ? "image-icon-active" : "image-icon-inactive"),
        c: common_vendor.t(item.name),
        d: common_vendor.n($data.currentTab == index ? "active-item" : "inactive-item"),
        e: index != $props.list.length - 1 ? 1 : "",
        f: index == $props.list.length - 1 ? 1 : "",
        g: index,
        h: common_vendor.o(($event) => $options.clickItem(item, index), index)
      };
    }),
    b: common_vendor.s($props.titleStyle),
    c: common_vendor.s($props.scrollItemStyle)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-be0d9ec5"]]);
wx.createComponent(Component);
//# sourceMappingURL=scrollTabX.js.map
