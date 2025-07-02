"use strict";
const utils_http = require("../utils/http.js");
const getWxStadiumList = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxStadium/list",
    data: param
  });
};
const getWxStadium = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxStadium/get",
    data: param
  });
};
const getWxStadiumCollectList = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxCollect/list",
    data
  });
};
exports.getWxStadium = getWxStadium;
exports.getWxStadiumCollectList = getWxStadiumCollectList;
exports.getWxStadiumList = getWxStadiumList;
