"use strict";
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const config_config = require("../config/config.js");
require("../common/vendor.js");
const shareMixins = {
  data() {
    return {
      share: {
        title: "",
        path: "",
        imageUrl: "",
        withShareTicket: true
      }
    };
  },
  onShareAppMessage(res) {
    return __async(this, null, function* () {
      let flag = yield getApp().judgeIsAuth();
      if (!flag) {
        return;
      }
      let that = this;
      let pages = getCurrentPages();
      let nowPage = pages[pages.length - 1];
      let fullPath = nowPage.$page.fullPath;
      let title = config_config.config.appName;
      let path = this.share.path ? this.share.apth : fullPath;
      if ((that.url || "").includes("weixin.qq")) {
        path = `${nowPage.route}?url=${encodeURIComponent(that.url)}`;
      }
      return {
        title: this.share.title ? this.share.title : title,
        path,
        imageUrl: this.share.imageUrl ? this.share.imageUrl : "",
        withShareTicket: this.share.withShareTicket
      };
    });
  }
};
exports.shareMixins = shareMixins;
