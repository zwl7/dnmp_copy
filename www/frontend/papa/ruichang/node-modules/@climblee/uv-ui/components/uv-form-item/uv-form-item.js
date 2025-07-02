"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "uv-form-item",
  emits: ["click"],
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$8],
  data() {
    return {
      // 错误提示语
      message: "",
      parentData: {
        // 提示文本的位置
        labelPosition: "left",
        // 提示文本对齐方式
        labelAlign: "left",
        // 提示文本的样式
        labelStyle: {},
        // 提示文本的宽度
        labelWidth: 45,
        // 错误提示方式
        errorType: "message"
      }
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.updateParentData();
      if (!this.parent) {
        this.$uv.error("uv-form-item需要结合uv-form组件使用");
      }
    },
    // 获取父组件的参数
    updateParentData() {
      this.getParentData("uv-form");
    },
    // 移除uv-form-item的校验结果
    clearValidate() {
      this.message = null;
    },
    // 清空当前的组件的校验结果，并重置为初始值
    resetField() {
      const value = this.$uv.getProperty(this.parent.originalModel, this.prop);
      this.$uv.setProperty(this.parent.model, this.prop, value);
      this.message = null;
    },
    // 点击组件
    clickHandler() {
      this.$emit("click");
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_transition2 = common_vendor.resolveComponent("uv-transition");
  const _easycom_uv_line2 = common_vendor.resolveComponent("uv-line");
  (_easycom_uv_icon2 + _easycom_uv_transition2 + _easycom_uv_line2)();
}
const _easycom_uv_icon = () => "../uv-icon/uv-icon.js";
const _easycom_uv_transition = () => "../uv-transition/uv-transition.js";
const _easycom_uv_line = () => "../uv-line/uv-line.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_transition + _easycom_uv_line)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.required || _ctx.leftIcon || _ctx.label
  }, _ctx.required || _ctx.leftIcon || _ctx.label ? common_vendor.e({
    b: _ctx.required
  }, _ctx.required ? {} : {}, {
    c: _ctx.leftIcon
  }, _ctx.leftIcon ? {
    d: common_vendor.p({
      name: _ctx.leftIcon,
      ["custom-style"]: _ctx.leftIconStyle
    })
  } : {}, {
    e: common_vendor.t(_ctx.label),
    f: common_vendor.s($data.parentData.labelStyle),
    g: common_vendor.s({
      justifyContent: $data.parentData.labelAlign === "left" ? "flex-start" : $data.parentData.labelAlign === "center" ? "center" : "flex-end"
    }),
    h: _ctx.$uv.addUnit(_ctx.labelWidth || $data.parentData.labelWidth),
    i: $data.parentData.labelPosition === "left" ? 0 : "5px"
  }) : {}, {
    j: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args)),
    k: common_vendor.s(_ctx.$uv.addStyle(_ctx.customStyle)),
    l: common_vendor.s({
      flexDirection: (_ctx.labelPosition || $data.parentData.labelPosition) === "left" ? "row" : "column"
    }),
    m: !!$data.message && $data.parentData.errorType === "message"
  }, !!$data.message && $data.parentData.errorType === "message" ? {
    n: common_vendor.t($data.message),
    o: _ctx.$uv.addUnit($data.parentData.labelPosition === "top" ? 0 : _ctx.labelWidth || $data.parentData.labelWidth),
    p: common_vendor.p({
      show: true,
      duration: 100,
      mode: "fade"
    })
  } : {}, {
    q: _ctx.borderBottom
  }, _ctx.borderBottom ? {
    r: common_vendor.p({
      color: $data.message && $data.parentData.errorType === "border-bottom" ? "#f56c6c" : "#d6d7d9"
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9f97b0ec"]]);
wx.createComponent(Component);
//# sourceMappingURL=uv-form-item.js.map
