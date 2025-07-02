"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      url: "https://ppts.papa.com.cn/jis-rz/index.html"
    };
  },
  onLoad(e) {
    let {
      currentUserType = ""
    } = e;
    if (currentUserType) {
      this.url = `${this.url}?currentUserType=1`;
    }
    common_vendor.index.getStorage({
      key: "USER_INFO_EXPORT",
      complete: (res) => {
        const {
          token = ""
        } = res.data || {};
        this.url = `${this.url}${token ? "individualCenter" : ""}`;
      }
    });
  },
  methods: {
    transFormPageCallback({
      url = "",
      action = "",
      msg = "",
      code = "",
      params = ""
    }) {
      let res = {
        msg,
        code,
        params
      };
      let isInclude = url.indexOf("?") > -1;
      this.url = `${url}${isInclude ? "&" : "?"}action=${action}&result=${JSON.stringify(res)}&timestamp=` + (/* @__PURE__ */ new Date()).getTime();
    },
    webListener(e) {
      const [{
        action = "",
        params = {}
      }] = e.detail && e.detail.data || [];
      const pages = getCurrentPages();
      pages[pages.length - 2];
      if (action == "loginApp") {
        while (!common_vendor.index.getStorageSync("USER_INFO_EXPORT")) {
          common_vendor.index.setStorageSync("USER_INFO_EXPORT", params);
        }
        common_vendor.index.reLaunch({
          url: "/pages/register/register"
        });
      } else if (action == "loginOut") {
        while (common_vendor.index.getStorageSync("USER_INFO_EXPORT")) {
          common_vendor.index.removeStorageSync("USER_INFO_EXPORT");
        }
        common_vendor.index.switchTab({
          url: "/pages/tabbar/home/index"
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.url,
    b: common_vendor.o((...args) => $options.webListener && $options.webListener(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gxm/uniapp-shandong/pages/faceWebview/faceWebview.vue"]]);
wx.createPage(MiniProgramPage);
