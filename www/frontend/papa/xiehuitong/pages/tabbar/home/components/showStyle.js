"use strict";
const core_themeMixins = require("../../../../core/themeMixins.js");
const common_vendor = require("../../../../common/vendor.js");
const UScrollList = () => "../../../../components/scrollList/u-scroll-list.js";
const _sfc_main = {
  mixins: [core_themeMixins.themeMixins],
  components: {
    // commonTitle,
    UScrollList
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    count: {
      type: Number
    }
  },
  data() {
    return {};
  },
  methods: {
    clickItem(item) {
      this.$emit("click", item);
    }
  }
};
if (!Array) {
  const _component_UScrollList = common_vendor.resolveComponent("UScrollList");
  _component_UScrollList();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.list, (item, index, i0) => {
      return {
        a: common_vendor.f(item, (item1, index1, i1) => {
          return {
            a: item1.images,
            b: common_vendor.t(item1.name),
            c: index1,
            d: common_vendor.o(($event) => $options.clickItem(item1), index1),
            e: common_vendor.n(index1 === item.length - 1 && "scroll-list__line__item--no-margin-right")
          };
        }),
        b: index,
        c: common_vendor.n(index != 0 && "scroll-list__margin-top")
      };
    }),
    b: common_vendor.p({
      indicator: $props.count > 10,
      ["indicator-active-color"]: _ctx.themePrimaryColorGetter
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-22a27b00"]]);
wx.createComponent(Component);
