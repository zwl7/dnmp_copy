"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_mine = require("../../apis/mine.js");
require("../../utils/http.js");
require("../../core/config.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
const _sfc_main = {
  data() {
    return {
      message: "",
      loading: false
    };
  },
  methods: {
    confirmInfo() {
      if (!this.message.trim()) {
        this.$showToastNone("请输入提交建议");
        return;
      }
      common_vendor.index.showLoading({
        title: "正在提交"
      });
      if (this.loading) {
        return;
      }
      this.loading = true;
      const data = {
        type: 1,
        des: this.message
      };
      apis_mine.addUserInfo(data).then((res) => {
        if (res.code === 200) {
          common_vendor.index.showToast({
            icon: "success",
            title: "反馈成功"
          });
          setTimeout(() => {
            common_vendor.index.navigateBack();
          }, 1e3);
        } else {
          this.$showToastNone(res.message);
        }
        common_vendor.index.hideLoading();
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  _easycom_uni_easyinput2();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.message = $event),
    b: common_vendor.p({
      type: "textarea",
      placeholder: "请输入反馈信息",
      modelValue: $data.message
    }),
    c: common_vendor.o((...args) => $options.confirmInfo && $options.confirmInfo(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8f5488fa"], ["__file", "E:/gxm/uniapp-shandong/pages/myFeedback/myFeedback.vue"]]);
wx.createPage(MiniProgramPage);
