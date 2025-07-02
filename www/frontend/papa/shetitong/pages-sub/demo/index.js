"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      codeList: []
    };
  },
  // 页面加载时获取缓存数据
  onShow() {
  },
  methods: {
    handleJump() {
      let url = "http://aap-test.nbcb.com.cn:20380/mobilebank/page/indexRouter.html#page/P01/13/23/P011323.html?_gwsdk=V2&transApplyToken=cpss20241217161720139277&signMsg=Wf+XAEBa6iwRyrL1G/+Z6iAD1hPUxMdF2/QQ+cTlSuZkjjfJi/+Sw7imepEzJ6ujVXKpS5vaQe9M1b/jBPVcfOtxdQSPIqMQ/RTEm7bNeuy6ouSOqy9uF7UwIY0Umc5BM9idqXd+ezC32fs14VwHuZwmp4SuSpzTNCx9vzt1XSrL3Pki2Iw3dg02dwsqXgmeGZttSK0JhowuXVn9Np7+tMf8RrZnugWXeM9UkT3xfHdENoRIzOMwPfGyHzZtYUKyq5ScM2Ph0sYtILRFpzdCU1cYwQwmO5lscKQMD4TQOZnmCUD+1frVpFFHolEqts+rPbtFXeTlKwvnmC3YPnip5Q==";
      common_vendor.index.navigateToMiniProgram({
        appId: "wx66f5f02aa612120a",
        path: `pages/link/link?shareURL=${encodeURIComponent(url)}`,
        envVersion: "trial",
        success(res) {
        }
      });
    }
  }
};
if (!Array) {
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  _component_layout_default_uni();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.handleJump && $options.handleJump(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
