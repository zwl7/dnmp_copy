"use strict";
const apis_mine = require("../../apis/mine.js");
const common_vendor = require("../../common/vendor.js");
require("../../utils/http.js");
require("../../core/config.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
const _sfc_main = {
  data() {
    return {
      name: "",
      phone: "--",
      is_authenticate: ""
    };
  },
  onLoad() {
    this.getWxMemberInfo();
  },
  methods: {
    getWxMemberInfo() {
      apis_mine.getWxMember({}).then((res) => {
        if (res.code === 200) {
          this.phone = res.data.phone;
          this.name = res.data.name;
          this.is_authenticate = res.data.is_authenticate;
        }
      });
    },
    handleAuth() {
      if (this.is_authenticate != 1) {
        this.$showToastNone("实名认证");
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.is_authenticate == 1 ? $data.name : "请认证"),
    b: $data.is_authenticate == 1
  }, $data.is_authenticate == 1 ? {
    c: common_vendor.p({
      type: "checkbox-filled",
      size: "18",
      color: "#67c270"
    })
  } : {}, {
    d: common_vendor.o((...args) => $options.handleAuth && $options.handleAuth(...args)),
    e: common_vendor.t($data.phone)
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5f192eb4"], ["__file", "E:/gxm/uniapp-shandong/pages/mineSetting/mineSetting.vue"]]);
wx.createPage(MiniProgramPage);
