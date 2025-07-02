"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: "搜索内容"
    }
  },
  data() {
    return {
      content: ""
    };
  },
  methods: {
    handleClick() {
      this.$emit("search", this.content);
    },
    handleClear() {
      this.content = "";
      this.$emit("clear", this.content);
    },
    handleConfirm() {
      this.$emit("confirm", this.content);
    },
    handleMap() {
      this.$emit("map");
    }
  }
};
if (!Array) {
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  _easycom_uv_input2();
}
const _easycom_uv_input = () => "../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
if (!Math) {
  _easycom_uv_input();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.handleClear),
    b: common_vendor.o($options.handleConfirm),
    c: common_vendor.o(($event) => $data.content = $event),
    d: common_vendor.p({
      shape: "circle",
      prefixIcon: "search",
      prefixIconStyle: "font-size: 22px;color: #909399",
      customStyle: {
        backgroundColor: "#F7F9FC",
        height: "72rpx",
        boxSizing: "border-box",
        border: "none"
      },
      placeholder: $props.placeholder,
      border: "surround",
      clearable: true,
      disabled: $props.disabled,
      modelValue: $data.content
    }),
    e: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c94bd53c"]]);
wx.createComponent(Component);
