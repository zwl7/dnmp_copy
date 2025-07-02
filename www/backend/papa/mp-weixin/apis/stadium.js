"use strict";
const utils_http = require("../utils/http.js");
const getWxStadiumList = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxStadium/list",
    data
  });
};
const getWxMapList = (param) => utils_http.request({
  url: "/infoPlatform/wxMap/list",
  method: "post",
  data: param
});
const getMothCount = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/mothCount",
    method: "post",
    data: param
  });
};
const getWxStadium = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxStadium/get",
    method: "post",
    data: param
  });
};
const getWxMapTypeList = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMap/typeList",
    method: "post",
    data: param
  });
};
const getWxMapTypeTagList = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMap/typeTag",
    method: "post",
    data: param
  });
};
const mapFeedback = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxProblem/siteAdd",
    method: "post",
    data: param
  });
};
exports.getMothCount = getMothCount;
exports.getWxMapList = getWxMapList;
exports.getWxMapTypeList = getWxMapTypeList;
exports.getWxMapTypeTagList = getWxMapTypeTagList;
exports.getWxStadium = getWxStadium;
exports.getWxStadiumList = getWxStadiumList;
exports.mapFeedback = mapFeedback;
