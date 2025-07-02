"use strict";
const common_vendor = require("../common/vendor.js");
function showToastNone(title) {
  common_vendor.index.showToast({
    icon: "none",
    title
  });
}
function isFullScreen() {
  return new Promise((reslove) => {
    common_vendor.index.createSelectorQuery().selectViewport().scrollOffset().exec(async (res) => {
      const windowHeight = common_vendor.index.getSystemInfoSync().windowHeight;
      const scrollHeight = res[0].scrollHeight;
      let obj = {
        windowHeight,
        scrollHeight,
        isFullScreen: windowHeight > scrollHeight
      };
      reslove(obj);
    });
  });
}
function openUrl(url) {
  common_vendor.index.navigateTo({
    url: "/pages/webView/webView?url=" + encodeURIComponent(url)
  });
}
const install = (app) => {
  app.config.globalProperties.$showToastNone = showToastNone;
  app.config.globalProperties.$isFullScreen = isFullScreen;
  app.config.globalProperties.$openUrl = openUrl;
};
exports.install = install;
