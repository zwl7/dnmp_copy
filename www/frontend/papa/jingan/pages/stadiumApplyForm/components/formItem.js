"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "formItem",
  emits: ["update:value", "clickInput", "blurInput"],
  props: {
    value: "",
    icon: {
      default: "iconfont-pingguoshouji",
      type: String
    },
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: 30
    },
    errorMessage: {
      type: String,
      default: ""
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("update:value", val);
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    onKeyInput(e) {
    },
    clickInput() {
      this.$emit("clickInput");
    },
    blurInput() {
      this.$emit("blurInput");
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: $props.icon,
      size: "20",
      color: "#545050"
    }),
    b: $props.maxlength,
    c: common_vendor.o([($event) => $options.inputValue = $event.detail.value, (...args) => $options.onKeyInput && $options.onKeyInput(...args)]),
    d: common_vendor.o((...args) => $options.clickInput && $options.clickInput(...args)),
    e: common_vendor.o((...args) => $options.blurInput && $options.blurInput(...args)),
    f: $props.disabled,
    g: $props.type,
    h: $props.placeholder,
    i: $options.inputValue,
    j: common_vendor.t($props.errorMessage)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
