"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    info: {
      type: Object,
      default: () => {
        return {
          name: "",
          card: ""
        };
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    showCard() {
      return this.hideIdCard(this.info.card);
    }
  },
  methods: {
    checkboxChange(e) {
      console.log(this.info);
      console.log(e);
    },
    deleteItem() {
      this.$emit("click", this.info);
    },
    hideIdCard(id) {
      var idLength = id.length;
      if (idLength === 18 || idLength === 15) {
        var hiddenId = "";
        for (var i = 0; i < idLength - 4; i++) {
          hiddenId += "*";
        }
        return id.substring(0, idLength - 4) + hiddenId + id.substr(-4);
      } else {
        console.log("无效的身份证号");
        return null;
      }
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_checkbox2 = common_vendor.resolveComponent("uv-checkbox");
  const _easycom_uv_checkbox_group2 = common_vendor.resolveComponent("uv-checkbox-group");
  (_easycom_uv_icon2 + _easycom_uv_checkbox2 + _easycom_uv_checkbox_group2)();
}
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_checkbox = () => "../../../../node-modules/@climblee/uv-ui/components/uv-checkbox/uv-checkbox.js";
const _easycom_uv_checkbox_group = () => "../../../../node-modules/@climblee/uv-ui/components/uv-checkbox-group/uv-checkbox-group.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_checkbox + _easycom_uv_checkbox_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "close",
      color: "#a8abb2",
      size: "16"
    }),
    b: common_vendor.o((...args) => $options.deleteItem && $options.deleteItem(...args)),
    c: common_vendor.p({
      customStyle: {
        marginBottom: "8px"
      },
      name: $props.info.card
    }),
    d: common_vendor.o($options.checkboxChange),
    e: common_vendor.o(($event) => $props.info.checkValue = $event),
    f: common_vendor.p({
      modelValue: $props.info.checkValue
    }),
    g: common_vendor.t($props.info.name),
    h: common_vendor.t($options.showCard)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
