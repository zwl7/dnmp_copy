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
const getWxMapList = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMap/list",
    data: param
  });
};
const getWxMapTypeList = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMap/typeList",
    data: param
  });
};
const mapFeedback = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxProblem/siteAdd",
    data: param
  });
};
exports.getWxMapList = getWxMapList;
exports.getWxMapTypeList = getWxMapTypeList;
exports.getWxStadium = getWxStadium;
exports.getWxStadiumCollectList = getWxStadiumCollectList;
exports.getWxStadiumList = getWxStadiumList;
exports.mapFeedback = mapFeedback;
