"use strict";
const utils_http = require("../utils/http.js");
const getWxActivityList = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/list",
    data
  });
};
const getWxActivityDetail = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/get",
    data
  });
};
const getApplicant = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/getApplicant",
    data
  });
};
const getApplicantNoPage = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/getApplicantNoPage",
    method: "post",
    data: param
  });
};
const addWxCollect = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxCollect/add",
    method: "post",
    data: param
  });
};
const getApplyInfo = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/applyInfoGet",
    method: "post",
    data: param
  });
};
const getWxApplyField = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxApplyField/list",
    method: "post",
    data: param
  });
};
const handleApply = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/apply",
    method: "post",
    data: param
  });
};
const getWxActivityMy = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/my",
    method: "post",
    data: param
  });
};
const getWxActivityMyInfo = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/myInfo",
    method: "post",
    data: param
  });
};
const cancelApplyActivity = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivity/cancelApply",
    method: "post",
    data: param
  });
};
exports.addWxCollect = addWxCollect;
exports.cancelApplyActivity = cancelApplyActivity;
exports.getApplicant = getApplicant;
exports.getApplicantNoPage = getApplicantNoPage;
exports.getApplyInfo = getApplyInfo;
exports.getWxActivityDetail = getWxActivityDetail;
exports.getWxActivityList = getWxActivityList;
exports.getWxActivityMy = getWxActivityMy;
exports.getWxActivityMyInfo = getWxActivityMyInfo;
exports.getWxApplyField = getWxApplyField;
exports.handleApply = handleApply;
