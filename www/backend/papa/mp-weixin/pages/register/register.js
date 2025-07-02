"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_login = require("../../apis/login.js");
require("../../utils/http.js");
require("../../core/config.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
const _sfc_main = {
  data() {
    return {
      name: "请登录",
      token: "",
      show: true,
      seconds: 5e3,
      timeout: ""
    };
  },
  onShow() {
    this.initLoginInfo();
  },
  onUnload() {
    clearTimeout(this.timeout);
  },
  methods: {
    setInterval() {
      const _this = this;
      var interval = setInterval(() => {
        _this.seconds -= 1e3;
      }, 1e3);
      this.timeout = setTimeout(() => {
        this.show = false;
        common_vendor.index.redirectTo({
          url: `/pages/faceWebview/faceWebview`
        });
        clearInterval(interval);
      }, this.seconds);
    },
    initLoginInfo() {
      var that = this;
      common_vendor.index.getStorage({
        key: "USER_INFO_EXPORT",
        complete: (res) => {
          const {
            token = ""
          } = res.data || {};
          if (token) {
            apis_login.handleAuthenticate({
              platform: "sd",
              code: token
            }).then((res2) => {
              if (res2.code == 200) {
                common_vendor.index.showToast({
                  title: "认证成功",
                  icon: "success",
                  duration: 2e3
                });
                getApp().globalData.mineRefresh = true;
                common_vendor.index.reLaunch({
                  url: "/pages/tabbar/mine/index"
                });
              } else {
                common_vendor.index.removeStorageSync("USER_INFO_EXPORT");
                common_vendor.index.showToast({
                  title: "请先实名注册并登录",
                  duration: 1500,
                  icon: "none"
                });
                setTimeout(() => {
                  this.seconds = 5e3;
                  this.show = true;
                  this.setInterval();
                }, 1500);
              }
            });
          } else {
            that.show = true;
            this.setInterval();
          }
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.seconds / 1e3),
    b: $data.show
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bac4a35d"], ["__file", "E:/gxm/uniapp-shandong/pages/register/register.vue"]]);
wx.createPage(MiniProgramPage);
