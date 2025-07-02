"use strict";
const core_config = require("../core/config.js");
const utils_thirdPartUtils_qqmapWxJssdk = require("./thirdPartUtils/qqmap-wx-jssdk.js");
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
function reverseGeocoder(latitude, longitude) {
  return new Promise((resolve, reject) => {
    let qqmapsdk = new utils_thirdPartUtils_qqmapWxJssdk.QQMapWX({
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
exports.getShortDistanceBase = getShortDistanceBase;
exports.reverseGeocoder = reverseGeocoder;
//# sourceMappingURL=mapUtils.js.map
