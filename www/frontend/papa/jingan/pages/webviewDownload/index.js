"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      url: "",
      tempFilePath: "",
      isOpen: false
    };
  },
  onLoad(options) {
    try {
      console.log("-------------文件预览调试----------------");
      console.log("参数：", options);
      let that = this;
      let url = decodeURIComponent(options.url);
      this.url = url;
      common_vendor.index.showLoading({
        title: "加载中..."
      });
      console.log("downloadFile：", this.url);
      common_vendor.index.downloadFile({
        url: that.url,
        success: function(res) {
          that.tempFilePath = res.tempFilePath;
          let filePath = res.tempFilePath;
          let fileTypes = ["pdf", "doc", "docx", "xls", "xlsx", "pptx"];
          let flag = "";
          let type = "";
          fileTypes.forEach((item) => {
            if (that.url.indexOf(item) !== -1) {
              flag = true;
              type = item;
            }
          });
          console.log("downloadFile success：", { filePath, flag, type });
          if (flag) {
            that.openFile(filePath, type);
          } else {
            that.downFile();
          }
        },
        fail: function(error) {
          console.log("downloadFile fail：", error);
          common_vendor.index.showToast({
            title: "文件下载失败",
            icon: "error"
          });
          common_vendor.index.hideLoading();
        }
      });
    } catch (e) {
      console.log("-------", e);
    }
  },
  onShow() {
    if (this.isOpen) {
      try {
        common_vendor.index.navigateBack();
      } catch (e) {
      }
    }
  },
  methods: {
    downFile() {
      common_vendor.index.showLoading({
        title: "文件保存中"
      });
      let that = this;
      common_vendor.index.getFileSystemManager().saveFile({
        tempFilePath: that.tempFilePath,
        success: (res) => {
          console.log("saveFile success：", res);
          let filePath = res.savedFilePath;
          console.log(filePath);
          common_vendor.index.showToast({
            title: "保存成功：" + filePath,
            icon: "none"
          });
          setTimeout(() => {
            common_vendor.index.hideLoading({
              success: (res2) => {
                common_vendor.index.navigateBack({
                  delta: 1
                });
              }
            });
          }, 1500);
        },
        fail: (err) => {
          common_vendor.index.showToast({
            title: "文件保存失败",
            icon: "error"
          });
          console.log(err);
        }
      });
    },
    openFile(filePath, type) {
      let that = this;
      console.log("openFile start：", { filePath, type });
      common_vendor.index.openDocument({
        filePath,
        showMenu: true,
        fileType: type,
        success: (res) => {
          console.log("文件打开成功!");
          console.log("openDocument success：", res);
          that.isOpen = true;
          common_vendor.index.showToast({
            title: "保存成功：" + filePath,
            icon: "none"
          });
          setTimeout(() => {
            common_vendor.index.hideLoading({
              success: (res2) => {
                common_vendor.index.navigateBack({
                  delta: 1
                });
              }
            });
          }, 1500);
        },
        fail: function(err) {
          console.log("打开失败", err);
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
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
