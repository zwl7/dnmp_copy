"use strict";
const utils_http = require("../utils/http.js");
const getWxStadiumList = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxStadium/list",
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
const getWxMapList = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMap/list",
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
const mapFeedback = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxProblem/siteAdd",
    method: "post",
    data: param
  });
};
exports.getWxMapList = getWxMapList;
exports.getWxMapTypeList = getWxMapTypeList;
exports.getWxStadium = getWxStadium;
exports.getWxStadiumList = getWxStadiumList;
exports.mapFeedback = mapFeedback;
//# sourceMappingURL=stadium.js.map
