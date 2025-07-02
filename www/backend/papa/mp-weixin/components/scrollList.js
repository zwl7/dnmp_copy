"use strict";
const common_vendor = require("../common/vendor.js");
const tabTitle = () => "./tabTitle.js";
const _sfc_main = {
  name: "scrollList",
  components: {
    tabTitle
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    showMore: {
      type: Boolean,
      default: false
    },
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
    clickMore() {
      this.$emit("more");
    },
    clickItem(item) {
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
    a: common_vendor.o($options.clickMore),
    b: common_vendor.p({
      title: $props.title,
      showMore: $props.showMore
    }),
    c: common_vendor.f($props.list, (item, index, i0) => {
      return common_vendor.e({
        a: item.show_image,
        b: item.tag
      }, item.tag ? {
        c: common_vendor.t(item.tag)
      } : {}, {
        d: common_vendor.t(item.name),
        e: index,
        f: common_vendor.o(($event) => $options.clickItem(item), index)
      });
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gxm/uniapp-shandong/components/scrollList.vue"]]);
wx.createComponent(Component);
