"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "uv-grid",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$31],
  emits: ["click"],
  data() {
    return {
      index: 0,
      width: 0
    };
  },
  watch: {
    // 当父组件需要子组件需要共享的参数发生了变化，手动通知子组件
    parentData() {
      if (this.children.length) {
        this.children.map((child) => {
          typeof child.updateParentData == "function" && child.updateParentData();
        });
      }
    }
  },
  created() {
    this.children = [];
  },
  computed: {
    // 计算父组件的值是否发生变化
    parentData() {
      return [this.hoverClass, this.col, this.size, this.border];
    },
    // 宫格对齐方式
    gridStyle() {
      let style = {};
      switch (this.align) {
        case "left":
          style.justifyContent = "flex-start";
          break;
        case "center":
          style.justifyContent = "center";
          break;
        case "right":
          style.justifyContent = "flex-end";
          break;
        default:
          style.justifyContent = "flex-start";
      }
      return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
    }
  },
  methods: {
    // 此方法由uv-grid-item触发，用于在uv-grid发出事件
    childClick(name) {
      this.$emit("click", name);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s($options.gridStyle)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-20029dff"]]);
wx.createComponent(Component);
//# sourceMappingURL=uv-grid.js.map
