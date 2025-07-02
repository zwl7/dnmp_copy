"use strict";
const common_vendor = require("../common/vendor.js");
const tabTitle = () => "./tabTitle.js";
const _sfc_main = {
  name: "newsList",
  components: {
    tabTitle
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    handleMore() {
      this.$emit("more");
    },
    handleClick(item) {
      this.$emit("click", item);
    }
  }
};
if (!Array) {
  const _component_tab_title = common_vendor.resolveComponent("tab-title");
  _component_tab_title();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.handleMore),
    b: common_vendor.p({
      title: "体育新闻",
      showMore: true
    }),
    c: common_vendor.f($props.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.released_time),
        c: item.c_image_url,
        d: index,
        e: common_vendor.o(($event) => $options.handleClick(item), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gxm/uniapp-shandong/components/newsList.vue"]]);
wx.createComponent(Component);
