"use strict";
const utils_http = require("../utils/http.js");
const getWxActivityItem = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/myInfo",
    data
  });
};
const getWxActivityCancelApply = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/cancelApply",
    data
  });
};
const getWxMemberCode = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/memberCode",
    data
  });
};
const getWxMemberRefreshCode = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/refreshCode",
    data
  });
};
const getWxMemberEnterCode = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/enterCode",
    data
  });
};
exports.getWxActivityCancelApply = getWxActivityCancelApply;
exports.getWxActivityItem = getWxActivityItem;
exports.getWxMemberCode = getWxMemberCode;
exports.getWxMemberEnterCode = getWxMemberEnterCode;
exports.getWxMemberRefreshCode = getWxMemberRefreshCode;
