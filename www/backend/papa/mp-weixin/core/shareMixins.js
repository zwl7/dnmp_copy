"use strict";
const shareMixins = {
  data() {
    return {
      share: {
        title: "自定义分享标题",
        path: "/pages/main-assess/assess",
        imageUrl: "图片url",
        withShareTicket: true
      }
    };
  },
  onShareAppMessage(res) {
    let pages = getCurrentPages();
    pages[pages.length - 1];
    return {
      title: this.share.title,
      path: this.share.path,
      imageUrl: this.share.imageUrl,
      withShareTicket: this.share.withShareTicket
    };
  }
};
exports.shareMixins = shareMixins;
