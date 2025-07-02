"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      wechatImage: "",
      enterpriseInfo: {}
    };
  },
  computed: {},
  methods: {}
};
if (!Array) {
  const _component_via_icon = common_vendor.resolveComponent("via-icon");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_via_icon + _easycom_uv_form_item2 + _easycom_uv_form2 + _component_layout_default_uni)();
}
const _easycom_uv_form_item = () => "../../node-modules/@climblee/uv-ui/components/uv-form-item/uv-form-item.js";
const _easycom_uv_form = () => "../../node-modules/@climblee/uv-ui/components/uv-form/uv-form.js";
if (!Math) {
  (_easycom_uv_form_item + _easycom_uv_form)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.$assets(""),
    b: common_vendor.t($data.enterpriseInfo.email),
    c: common_vendor.p({
      name: "fuzhi"
    }),
    d: common_vendor.o(($event) => _ctx.handleCopy($data.enterpriseInfo.email)),
    e: common_vendor.p({
      label: "邮箱"
    }),
    f: common_vendor.t($data.enterpriseInfo.wechat),
    g: common_vendor.p({
      name: "fuzhi"
    }),
    h: common_vendor.o(($event) => _ctx.handleCopy($data.enterpriseInfo.wechat)),
    i: common_vendor.p({
      label: "微信号"
    }),
    j: $data.wechatImage,
    k: common_vendor.p({
      label: "微信二维码"
    }),
    l: common_vendor.p({
      ["label-width"]: "200",
      border: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
