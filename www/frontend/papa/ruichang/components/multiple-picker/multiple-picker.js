"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "multiple-picker",
  data() {
    return {
      show: false,
      // 选中值
      value: [],
      // 选中列表
      selected: [],
      // 列表数据
      list: [],
      // 出场动画
      animationData: {}
    };
  },
  props: {
    // 标题
    title: {
      type: String,
      default: ""
    },
    //数据列表
    columns: {
      type: Array,
      default: []
    },
    // 默认选中
    defaultIndex: {
      type: Array,
      default: []
    }
  },
  methods: {
    open() {
      this.show = true;
      this.$nextTick(() => {
        this.openMultiple();
      });
    },
    close() {
      this.show = false;
    },
    // 列点击事件
    onChange(index, item) {
      if (this.value.indexOf(item.value.toString()) >= 0) {
        this.list[index].selected = false;
      } else {
        this.list[index].selected = true;
      }
      this.value = [];
      this.selected = [];
      this.list.forEach((col_item, col_index) => {
        if (col_item.selected) {
          this.value.push(col_item.value.toString());
          this.selected.push({
            label: col_item.label,
            value: col_item.value
          });
        }
      });
      this.$emit("change", { selected: this.selected, value: this.value });
    },
    // 弹出框开启触发事件
    openMultiple() {
      this.value = this.defaultIndex ? this.defaultIndex : [];
      console.log(this.value);
      this.columns.forEach((item, index) => {
        this.$set(item, "selected", false);
        if (this.value.indexOf(item.value.toString()) >= 0) {
          item.selected = true;
        }
      });
      this.list = Object.assign([], this.columns);
      this.openAnimation();
    },
    // 确认
    confirmMultiple() {
      this.$emit("confirm", { selected: this.selected, value: this.value });
      this.show = false;
    },
    // 关闭/取消
    cancelMultiple() {
      this.$emit("cancel");
      this.show = false;
    },
    // 展开动画
    openAnimation() {
      var animation = common_vendor.index.createAnimation();
      animation.translate(0, 300).step({ duration: 0 });
      this.animationData = animation.export();
      this.$nextTick(() => {
        animation.translate(0, 0).step({ duration: 300, timingFunction: "ease" });
        this.animationData = animation.export();
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.cancelMultiple && $options.cancelMultiple(...args)),
    b: common_vendor.o((...args) => $options.cancelMultiple && $options.cancelMultiple(...args)),
    c: common_vendor.t($props.title),
    d: common_vendor.o((...args) => $options.confirmMultiple && $options.confirmMultiple(...args)),
    e: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.label),
        b: item.selected,
        c: index,
        d: common_vendor.n(item.selected ? "checked" : ""),
        e: common_vendor.o(($event) => $options.onChange(index, item), index)
      };
    }),
    f: $data.animationData,
    g: $data.show
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f559ee9e"]]);
wx.createComponent(Component);
//# sourceMappingURL=multiple-picker.js.map
