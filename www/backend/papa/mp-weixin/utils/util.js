"use strict";
const common_vendor = require("../common/vendor.js");
const core_config = require("../core/config.js");
const utils_qqmapWxJssdk = require("./qqmap-wx-jssdk.js");
function formatTimeBase(time, cformat) {
  if (arguments.length == 0) {
    return null;
  }
  const format = cformat || "{y}-{m}-{d} {h}:{i}:{s} 星期{a}";
  let date;
  if (typeof time === "object" && time instanceof Date) {
    date = time;
  } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === "number" && time.toString().length === 10) {
      time = time * 1e3;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(
    /{([ymdhisa])+}/g,
    (result, key) => {
      let value = formatObj[key];
      if (key === "a") {
        return ["日", "一", "二", "三", "四", "五", "六"][value];
      }
      return value.toString().padStart(2, "0");
    }
  );
  return time_str;
}
var DEF_PI = 3.14159265359;
var DEF_2PI = 6.28318530712;
var DEF_PI180 = 0.01745329252;
var DEF_R = 63706935e-1;
function getShortDistanceBase(lat1, lon1, lat2, lon2) {
  var ew1, ns1, ew2, ns2;
  var dx, dy, dew;
  var distance;
  ew1 = lon1 * DEF_PI180;
  ns1 = lat1 * DEF_PI180;
  ew2 = lon2 * DEF_PI180;
  ns2 = lat2 * DEF_PI180;
  dew = ew1 - ew2;
  if (dew > DEF_PI) {
    dew = DEF_2PI - dew;
  } else if (dew < -DEF_PI) {
    dew = DEF_2PI + dew;
  }
  dx = DEF_R * Math.cos(ns1) * dew;
  dy = DEF_R * (ns1 - ns2);
  distance = Number(Math.sqrt(dx * dx + dy * dy).toFixed(0));
  return distance;
}
function getShortDistance(lat1, lon1, lat2, lon2) {
  let distance = getShortDistanceBase(lat1, lon1, lat2, lon2);
  distance = distance / 1e3;
  return Math.floor(distance);
}
function number(value) {
  return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
}
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
  let baseUrl = `${core_config.config.ppos_wx}?`;
  let {
    isUrl,
    haveQuery
  } = judgeUrl(str);
  if (isUrl) {
    if (haveQuery) {
      baseUrl = `${str}&`;
    } else {
      baseUrl = `${str}?`;
    }
  }
  return baseUrl;
}
function reverseGeocoder(latitude, longitude) {
  return new Promise((resolve, reject) => {
    let qqmapsdk = new utils_qqmapWxJssdk.QQMapWX({
      key: core_config.config.qqmapKey
    });
    if (!latitude && !longitude) {
      reject("请传入经纬度");
    }
    qqmapsdk.reverseGeocoder({
      location: {
        latitude,
        longitude
      },
      success(res) {
        let city_name = res.result.ad_info.city;
        let city_id = res.result.ad_info.city_code;
        city_id = String(city_id).slice(3, 7);
        let params = {
          city_name,
          city_id,
          result: res.result,
          province: res.result.ad_info.province
        };
        resolve(params);
      },
      fail(error) {
        reject("解析错误", error);
      }
    });
  });
}
exports.formatTimeBase = formatTimeBase;
exports.getShortDistance = getShortDistance;
exports.getShortDistanceBase = getShortDistanceBase;
exports.getStadiumUrl = getStadiumUrl;
exports.handleUrlQuery = handleUrlQuery;
exports.judgeUrl = judgeUrl;
exports.number = number;
exports.replaceImg = replaceImg;
exports.reverseGeocoder = reverseGeocoder;
exports.uploadFile = uploadFile;
