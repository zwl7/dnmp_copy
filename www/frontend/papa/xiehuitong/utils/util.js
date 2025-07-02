"use strict";
const common_vendor = require("../common/vendor.js");
const core_config = require("../core/config.js");
function handleUrlQuery(obj) {
  let urlquery = "";
  for (const key in obj) {
    let str = key + "=" + obj[key] + "&";
    urlquery += str;
  }
  urlquery = urlquery.substr(0, urlquery.length - 1);
  return urlquery;
}
function uploadFile(filePath) {
  return new Promise((resolve, reject) => {
    common_vendor.index.uploadFile({
      filePath,
      name: "image",
      formData: {
        size: 5
      },
      url: core_config.config.baseUrl + "/img/upload",
      header: {
        "Content-Type": "multipart/form-data"
      },
      success: (res) => {
        if (res.statusCode == 200) {
          let data = JSON.parse(res.data);
          if (data.code !== 200) {
            common_vendor.index.showToast({
              title: data.message,
              icon: "none"
            });
          } else {
            resolve(data);
          }
        } else {
          reject(res.data);
        }
      },
      fail: reject
    });
  });
}
function replaceImg(content) {
  return content.replace(/<(img).*?(\/>|<\/img>)/g, function(mats) {
    if (mats.indexOf("style") < 0) {
      return mats.replace(/<\s*img/, '<img style="max-width:100%;height:auto;"');
    } else {
      return mats.replace(/style=("|')/, "style=$1max-width:100%;height:auto;");
    }
  });
}
function judgeUrl(str) {
  let reg = /^https?:\/\//;
  let flag = false;
  let haveQuery = false;
  if (reg.test(str)) {
    flag = true;
  }
  if (str.indexOf("?") != -1) {
    haveQuery = true;
  }
  return {
    isUrl: flag,
    haveQuery
  };
}
function getStadiumUrl(str) {
  let baseUrl = `${core_config.config.ppos_wx_stadium}?`;
  let { isUrl, haveQuery } = judgeUrl(str);
  if (isUrl) {
    if (haveQuery) {
      baseUrl = `${str}&`;
    } else {
      baseUrl = `${str}?`;
    }
  }
  return baseUrl;
}
function saveFile(filePath) {
  const getFileType = (url) => {
    const path = url.split("?")[0].split("#")[0];
    const fileName = path.split("/").pop();
    const fileExtension = fileName.split(".").pop();
    return fileExtension === fileName ? null : fileExtension;
  };
  let fileType = getFileType(filePath);
  common_vendor.index.showLoading({
    title: "加载中"
  });
  common_vendor.index.downloadFile({
    url: filePath,
    success(res) {
      if (res.statusCode == 200) {
        common_vendor.index.openDocument({
          filePath: res.tempFilePath,
          fileType: fileType || "doc",
          showMenu: true,
          success: function(res2) {
            common_vendor.index.hideLoading();
          },
          fail: function(err) {
            common_vendor.index.hideLoading();
            common_vendor.index.showToast({
              icon: "none",
              title: "文件打开失败！"
            });
          },
          complete: function() {
            common_vendor.index.hideLoading();
          }
        });
      }
    }
  });
}
function formatRichText(html) {
  let newContent = "";
  newContent = html.replace(/<img[^>]*>/gi, function(match) {
    match = match.replace(`style=""`, "");
    match = match.replace(/style="[^"]+"/gi, "").replace(/style='[^']+'/gi, "");
    match = match.replace(/width="[^"]+"/gi, "").replace(/width='[^']+'/gi, "");
    match = match.replace(/height="[^"]+"/gi, "").replace(/height='[^']+'/gi, "");
    return match;
  });
  newContent = newContent.replace(/style="[^"]+"/gi, function(match) {
    match = match.replace(/width:[^;]+;/gi, "max-width:100%;").replace(/width:[^;]+;/gi, "max-width:100%;");
    return match;
  });
  newContent = newContent.replace(/<br[^>]*\/>/gi, "");
  newContent = newContent.replace(/(\r\n|\n|\r)/gm, "");
  newContent = newContent.replace(
    /\<img/gi,
    '<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"'
  );
  return newContent;
}
function previewImage(url) {
  common_vendor.index.previewImage({
    urls: [url],
    longPressActions: {
      success: function(data) {
        console.log(data);
      },
      fail: function(err) {
        console.log(err.errMsg);
      }
    }
  });
}
const getCanvasImage = function(canvasId, imagePath, imageW, imageH, getImgsuccess) {
  const ctx = common_vendor.index.createCanvasContext(canvasId, this);
  ctx.drawImage(imagePath, 0, 0, imageW, imageH);
  ctx.draw(false, () => {
    common_vendor.index.canvasToTempFilePath(
      {
        canvasId,
        x: 0,
        y: 0,
        width: imageW,
        height: imageH,
        quality: 1,
        success: function(res) {
          getImgsuccess(res);
        },
        fail(err) {
          console.log(`getCanvasImage fail:${err}`);
        },
        complete() {
          console.log(`getCanvasImage complete`);
        }
      },
      this
    );
  });
};
const chooseImage = function(canvasId) {
  return new Promise((resolve, reject) => {
    common_vendor.index.chooseImage({
      count: 1,
      //默认9
      sizeType: ["original", "compressed"],
      //可以指定是原图还是压缩图，默认二者都有
      success: (res) => {
        res.tempFiles[0].name;
        const fileSize = res.tempFiles[0].size;
        if (fileSize > 2048 * 1024) {
          common_vendor.index.getImageInfo({
            src: res.tempFilePaths[0],
            success: (image) => {
              const maxSide = Math.max(image.width, image.height);
              const windowWH = 120;
              let scale = 1;
              if (maxSide > windowWH) {
                scale = windowWH / maxSide;
              }
              const imageW = Math.trunc(image.width * scale);
              const imageH = Math.trunc(image.height * scale);
              getCanvasImage(canvasId, res.tempFilePaths[0], imageW, imageH, (result) => {
                if (result.errMsg == "canvasToTempFilePath:ok" && result.tempFilePath) {
                  resolve({
                    file: result.tempFilePath,
                    status: true
                  });
                } else {
                  reject({
                    status: false
                  });
                }
              });
            }
          });
        } else {
          resolve({
            file: res.tempFilePaths[0],
            status: true
          });
        }
      }
    });
  });
};
const formatTreeOption = function(datalist, propList, level = 2) {
  let _list = [];
  datalist.forEach((e) => {
    let obj = {
      text: e[propList[0]],
      value: e[propList[1]],
      level: 0,
      //数组层级
      children: [],
      parentId: 0
    };
    let children = [];
    if (e[propList[4]] && e[propList[4]].length > 0) {
      e[propList[4]].forEach((c, index) => {
        if (level == 2) {
          children.push({
            text: c[propList[2]],
            value: c[propList[3]],
            level: 1,
            parentId: e[propList[1]]
          });
          return 0;
        }
        let obj1 = {
          text: c[propList[2]],
          value: c[propList[3]],
          level: 1,
          parentId: e[propList[1]],
          children: []
        };
        let children1 = [];
        if (c[propList[4]] && c[propList[4]].length > 0) {
          c[propList[4]].forEach((j) => {
            children1.push({
              text: j[propList[5]],
              value: j[propList[6]],
              level: 2,
              parentId: c[propList[3]]
            });
          });
        }
        obj1.children = children1;
        children.push(obj1);
      });
    }
    obj.children = children;
    _list.push(obj);
  });
  return _list;
};
function objectToQueryString(obj) {
  const params = Object.entries(obj);
  const encodedParams = params.map(([key, value]) => `${key}=${value}`);
  return encodedParams.join("&");
}
function appendUrlParams(url, params) {
  if (!url || !params || Object.keys(params).length === 0) {
    return url;
  }
  const queryString = Object.entries(params).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&");
  const hashIndex = url.indexOf("#");
  if (hashIndex > -1) {
    const baseUrl = url.slice(0, hashIndex);
    let hashPart = url.slice(hashIndex);
    if (hashPart.includes("?")) {
      hashPart = hashPart + "&" + queryString;
    } else {
      hashPart = hashPart + "?" + queryString;
    }
    return baseUrl + hashPart;
  } else {
    if (url.includes("?")) {
      return url + "&" + queryString;
    }
    return url + "?" + queryString;
  }
}
function getBirthDateObjectFromId(idNumber) {
  idNumber = idNumber.trim();
  try {
    let year, month, day;
    if (idNumber.length === 18) {
      year = idNumber.substring(6, 10);
      month = idNumber.substring(10, 12);
      day = idNumber.substring(12, 14);
    } else if (idNumber.length === 15) {
      year = "19" + idNumber.substring(6, 8);
      month = idNumber.substring(8, 10);
      day = idNumber.substring(10, 12);
    } else {
      return null;
    }
    return new Date(year, parseInt(month) - 1, day);
  } catch (e) {
    return null;
  }
}
function isFileExtension(filename, extensions, caseSensitive = false) {
  if (!filename || !(extensions == null ? void 0 : extensions.length))
    return false;
  const lastDotIndex = filename.lastIndexOf(".");
  if (lastDotIndex === -1)
    return false;
  const ext = filename.slice(lastDotIndex);
  const targetExts = caseSensitive ? extensions : extensions.map((e) => e.toLowerCase());
  return targetExts.includes(caseSensitive ? ext : ext.toLowerCase());
}
exports.appendUrlParams = appendUrlParams;
exports.chooseImage = chooseImage;
exports.formatRichText = formatRichText;
exports.formatTreeOption = formatTreeOption;
exports.getBirthDateObjectFromId = getBirthDateObjectFromId;
exports.getStadiumUrl = getStadiumUrl;
exports.handleUrlQuery = handleUrlQuery;
exports.isFileExtension = isFileExtension;
exports.judgeUrl = judgeUrl;
exports.objectToQueryString = objectToQueryString;
exports.previewImage = previewImage;
exports.replaceImg = replaceImg;
exports.saveFile = saveFile;
exports.uploadFile = uploadFile;
