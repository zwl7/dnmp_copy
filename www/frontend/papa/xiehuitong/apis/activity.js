"use strict";
const utils_http = require("../utils/http.js");
const getWxActivityList = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/list",
    data
  });
};
const getMothCount = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/mothCount",
    data
  });
};
exports.getMothCount = getMothCount;
exports.getWxActivityList = getWxActivityList;
