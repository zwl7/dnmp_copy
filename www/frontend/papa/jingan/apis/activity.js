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
const getWxActivity = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/get",
    data
  });
};
const getActivityApplyInfo = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/applyInfoGet",
    data
  });
};
const getUserWxActivityList = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/my",
    data
  });
};
const getWxActivityItem = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/myInfo",
    data
  });
};
const cancelWxActivityApply = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/cancelApply",
    data
  });
};
const applyWxActivity = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/apply",
    data
  });
};
const getWxActivityType = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivityType/getAll",
    data: param
  });
};
exports.applyWxActivity = applyWxActivity;
exports.cancelWxActivityApply = cancelWxActivityApply;
exports.getActivityApplyInfo = getActivityApplyInfo;
exports.getMothCount = getMothCount;
exports.getUserWxActivityList = getUserWxActivityList;
exports.getWxActivity = getWxActivity;
exports.getWxActivityItem = getWxActivityItem;
exports.getWxActivityList = getWxActivityList;
exports.getWxActivityType = getWxActivityType;
