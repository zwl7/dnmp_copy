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
const common_vendor = require("../common/vendor.js");
var offCanvas, ctx;
const fs = common_vendor.index.getFileSystemManager();
const dirPath = `${common_vendor.index.env.USER_DATA_PATH}/compress-img`;
var filePath = null;
var imgWidth = 0;
var imgHeight = 0;
var imgSize = 0;
const self = {
  int() {
    if (!offCanvas) {
      offCanvas = common_vendor.index.createOffscreenCanvas({
        type: "2d",
        width: 300,
        height: 300
      });
    }
    if (!ctx)
      ctx = offCanvas.getContext("2d");
  },
  // changeType 是否强制转换图片类型
  set(src, maxsize = 1024, changeType = false) {
    return __async(this, null, function* () {
      self.int();
      filePath = src;
      let i = 0;
      let istrue = false;
      do {
        i++;
        yield new Promise((resolve) => {
          fs.getFileInfo({
            filePath,
            success(res) {
              return __async(this, null, function* () {
                imgSize = res.size;
                if (res.size > maxsize * 1024 || changeType && i < 2) {
                  yield self.compress(filePath, false);
                } else {
                  yield self.compress(filePath, true);
                  istrue = true;
                }
                resolve();
              });
            }
          });
        });
      } while (!istrue && i < 50);
      return {
        filePath,
        width: imgWidth,
        height: imgHeight,
        size: imgSize
      };
    });
  },
  compress(src, onlyGetWH = false) {
    return __async(this, null, function* () {
      let imageItem = offCanvas.createImage();
      imageItem.src = src;
      imageItem.onerror = (err) => {
        console.log("err", err);
        common_vendor.index.showModal({
          title: "提示",
          content: "照片加载失败",
          confirmText: "关闭",
          showCancel: false
        });
      };
      if (imageItem.width > 0) {
        if (onlyGetWH) {
          imgWidth = imageItem.width;
          imgHeight = imageItem.height;
        } else {
          self._imgLoaded(imageItem);
        }
      } else {
        yield new Promise((resolve) => {
          imageItem.onload = () => {
            if (onlyGetWH) {
              imgWidth = imageItem.width;
              imgHeight = imageItem.height;
            } else {
              self._imgLoaded(imageItem);
            }
            resolve();
          };
        });
      }
    });
  },
  _imgLoaded(img) {
    return __async(this, null, function* () {
      let yinzi = 0.95;
      if (img.width > 2048 || img.height > 2048)
        yinzi = img.height > img.width ? 2048 / img.height : 2048 / img.width;
      imgWidth = img.width * yinzi;
      imgHeight = img.height * yinzi;
      offCanvas.width = imgWidth;
      offCanvas.height = imgHeight;
      ctx.clearRect(0, 0, imgWidth, imgHeight);
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, offCanvas.width, offCanvas.height);
      fs.mkdir({
        dirPath,
        recursive: false
        // fail(res) {
        //   console.error(res)
        // }
      });
      const tempPath = `${dirPath}/${(/* @__PURE__ */ new Date()).getTime()}.jpg`;
      const dataURL = offCanvas.toDataURL("image/jpeg", 0.92).replace("data:image/jpeg;base64,", "");
      try {
        fs.writeFileSync(tempPath, dataURL, "base64");
        filePath = tempPath;
      } catch (e) {
        console.error(e);
      }
    });
  },
  clearTempImg() {
    try {
      offCanvas = null;
      ctx = null;
      common_vendor.index.getFileSystemManager().rmdir({
        dirPath,
        recursive: true
        // fail(res) {
        //   console.error(res)
        // }
      });
    } catch (error) {
      console.info(error);
    }
  }
};
const mpImageCompress = {
  set: self.set,
  clearTempImg: self.clearTempImg
};
exports.mpImageCompress = mpImageCompress;
