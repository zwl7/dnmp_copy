"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "uv-steps",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$15],
  data() {
    return {};
  },
  watch: {
    children() {
      this.updateChildData();
    },
    parentData() {
      this.updateChildData();
    }
  },
  computed: {
    // 监听参数的变化，通过watch中，手动去更新子组件的数据，否则子组件不会自动变化
    parentData() {
      return [this.current, this.direction, this.activeColor, this.inactiveColor, this.activeIcon, this.inactiveIcon, this.dot];
    }
  },
  methods: {
    // 更新子组件的数据
    updateChildData() {
      this.children.map((child) => {
        common_vendor.func((child || {}).updateFromParent()) && child.updateFromParent();
      });
    },
    // 接受子组件的通知，去修改其他子组件的数据
    updateFromChild() {
      this.updateChildData();
    }
  },
  created() {
    this.children = [];
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n(`uv-steps--${_ctx.direction}`),
    b: common_vendor.s(_ctx.$uv.addStyle(_ctx.customStyle))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c8bc692d"]]);
wx.createComponent(Component);
//# sourceMappingURL=uv-steps.js.map
