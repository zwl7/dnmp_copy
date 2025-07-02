"use strict";
const common_vendor = require("../common/vendor.js");
const tabTitle = () => "./tabTitle.js";
const _sfc_main = {
  name: "adSpace",
  components: {
    tabTitle
  },
  data() {
    return {
      list_data: [1, 2]
    };
  }
};
if (!Array) {
  const _component_tab_title = common_vendor.resolveComponent("tab-title");
  _component_tab_title();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.list_data.length === 1
  }, $data.list_data.length === 1 ? {} : {}, {
    b: $data.list_data.length === 2
  }, $data.list_data.length === 2 ? {} : {}, {
    c: $data.list_data.length === 3
  }, $data.list_data.length === 3 ? {} : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gxm/uniapp-shandong/components/adSpace.vue"]]);
wx.createComponent(Component);
