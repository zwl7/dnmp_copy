"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "staticInfoCard",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  computed: {
    showList() {
      return this.list.filter((item) => {
        return item.show;
      });
    }
  },
  data() {
    return {};
  },
  methods: {
    showUnit(item) {
      return item.num > 0;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($options.showList, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.num),
        c: $options.showUnit(item)
      }, $options.showUnit(item) ? {
        d: common_vendor.t(item.unit)
      } : {}, {
        e: index
      });
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2c44a503"]]);
wx.createComponent(Component);
//# sourceMappingURL=abstractInfoCard.js.map
