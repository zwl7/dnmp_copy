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
function showToastNone(title, duraction = 1500) {
  common_vendor.index.showToast({
    icon: "none",
    title,
    duration: 1500
  });
}
function isFullScreen() {
  return new Promise((reslove) => {
    common_vendor.index.createSelectorQuery().selectViewport().scrollOffset().exec((res) => __async(this, null, function* () {
      const windowHeight = common_vendor.index.getSystemInfoSync().windowHeight;
      const scrollHeight = res[0].scrollHeight;
      let obj = {
        windowHeight,
        scrollHeight,
        isFullScreen: windowHeight > scrollHeight
      };
      reslove(obj);
    }));
  });
}
function openUrl(url) {
  common_vendor.index.navigateTo({
    url: "/pages/webView/webView?url=" + encodeURIComponent(url)
  });
}
function timeFrom(timestamp = null, format = "yyyy-mm-dd") {
  if (timestamp == null)
    timestamp = Number(/* @__PURE__ */ new Date());
  timestamp = parseInt(timestamp);
  if (timestamp.toString().length == 10)
    timestamp *= 1e3;
  let timer = (/* @__PURE__ */ new Date()).getTime() - timestamp;
  timer = parseInt(timer / 1e3);
  let tips = "";
  switch (true) {
    case timer < 300:
      tips = "刚刚";
      break;
    case (timer >= 300 && timer < 3600):
      tips = `${parseInt(timer / 60)} 分钟前`;
      break;
    case (timer >= 3600 && timer < 86400):
      tips = `${parseInt(timer / 3600)} 小时前`;
      break;
    default:
      if (format == "yyyy-mm-dd hh:MM:ss" && getApp().globalData.isIos) {
        format = "yyyy/mm/dd hh:MM:ss";
      }
      tips = common_vendor.index.$uv.timeFormat(timestamp, format);
  }
  return tips;
}
function distanceFormat(distance) {
  if (distance) {
    return Math.ceil(distance / 1e3) + "KM";
  } else {
    return "";
  }
}
function formatRichText(html, tip) {
  html = html ? html : "";
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
  newContent = newContent.replace(
    /\<img/gi,
    '<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"'
  );
  if (!newContent) {
    return tip;
  }
  return newContent;
}
function toLocation(info) {
  var _a, _b;
  let { latitude, longitude } = info;
  if (!latitude || !longitude) {
    showToastNone("暂无位置信息");
    return;
  }
  common_vendor.index.openLocation({
    latitude: +latitude,
    longitude: +longitude,
    name: (_a = info.name) != null ? _a : "",
    address: (_b = info.address) != null ? _b : "",
    scale: 16,
    infoUrl: "",
    fail(err) {
      showToastNone("地图打开失败");
    }
  });
}
function callPhone(info) {
  if (!info.phone) {
    showToastNone("暂无联系方式");
    return;
  }
  common_vendor.index.makePhoneCall({
    phoneNumber: info.phone,
    fail(err) {
      console.error(err);
    }
  });
}
function cdnUrl(url) {
  return "https://cdn-static.papa.com.cn/jxpq" + url;
}
function formatJumpPath(obj) {
  let url = "";
  if (obj.jump_type === 1) {
    url = obj.link_url;
  } else if (obj.jump_type === 2) {
    url = obj.out_link_url;
  } else if (obj.jump_type === 3) {
    url = `${obj.link_url}@APPID=${obj.out_link_url}`;
  }
  return url;
}
function jumpPath(url) {
  console.log("----jumpPath----", url);
  try {
    if (typeof url === "object") {
      url = formatJumpPath(url);
    }
    let arr = url.split("@APPID=");
    if (arr.length > 1) {
      common_vendor.index.navigateToMiniProgram({
        appId: arr[arr.length - 1],
        path: arr[0],
        envVersion: "release",
        success: (res) => {
          console.log("打开成功", res);
        },
        fail: (err) => {
        }
      });
    } else {
      if (url.indexOf("http") != -1) {
        common_vendor.index.navigateTo({
          url: "/pages/webView/webView?url=" + encodeURIComponent(url)
        });
      } else {
        if ([
          "/pages/tabbar/home/home",
          "/pages/matchIndex/matchIndex",
          "/pages/tabbar/mine/mine",
          "/pages/associationList/associationList"
        ].indexOf(url) == -1) {
          common_vendor.index.navigateTo({
            url,
            success: (res) => {
              console.log("----jumpPath success----", res);
            },
            fail: (err) => {
              common_vendor.index.showToast({
                icon: "none",
                title: err.errMsg
              });
              console.log("----jumpPath fail----", err);
            }
          });
        } else {
          common_vendor.index.switchTab({
            url,
            success: (res) => {
              console.log("----jumpPath success----", res);
            },
            fail: (err) => {
              common_vendor.index.showToast({
                icon: "none",
                title: err.errMsg
              });
              console.log("----jumpPath fail----", err);
            }
          });
        }
      }
    }
  } catch (error) {
    console.log("----jumpPath error----", error);
    common_vendor.index.showToast({
      icon: "none",
      title: "跳转失败"
    });
  }
}
const install = (app) => {
  app.config.globalProperties.$showToastNone = showToastNone;
  app.config.globalProperties.$isFullScreen = isFullScreen;
  app.config.globalProperties.$openUrl = openUrl;
  app.config.globalProperties.$timeFrom = timeFrom;
  app.config.globalProperties.$distanceFormat = distanceFormat;
  app.config.globalProperties.$formatRichText = formatRichText;
  app.config.globalProperties.$toLocation = toLocation;
  app.config.globalProperties.$callPhone = callPhone;
  app.config.globalProperties.$cdnUrl = cdnUrl;
  app.config.globalProperties.$jumpPath = jumpPath;
};
exports.install = install;
exports.timeFrom = timeFrom;
