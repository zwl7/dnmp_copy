"use strict";
const utils_http = require("../utils/http.js");
const getWxNoticeDetail = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxNotice/get",
    data
  });
};
const getWxNoticeList = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxNotice/getlist",
    data
  });
};
const getNewsList = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxNews/getlist",
    data
  });
};
const getNewsDetail = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxNews/get",
    data
  });
};
const getBaseTag = (data) => {
  return utils_http.request({
    url: "/base/companyAuth/tag",
    data
  });
};
const getWxNewsType = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxNewsType/getAll",
    method: "post",
    data: param
  });
};
const getWxCollect = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxCollect/list",
    method: "post",
    data: param
  });
};
const getSportsOrganizationType = (param) => {
  return utils_http.request({
    url: "/infoPlatform/sportsOrganizationType/list",
    method: "post",
    data: param
  });
};
const getCompany = (param) => {
  return utils_http.request({
    url: "/base/company/get",
    method: "post",
    data: param
  });
};
const getMapAreaList = (param) => {
  return utils_http.request({
    url: "/infoPlatform/map/areaList",
    method: "post",
    data: param
  });
};
const getCompanyAreaAll = (param) => {
  return utils_http.request({
    url: "/infoPlatform/companyArea/level",
    method: "post",
    data: param
  });
};
exports.getBaseTag = getBaseTag;
exports.getCompany = getCompany;
exports.getCompanyAreaAll = getCompanyAreaAll;
exports.getMapAreaList = getMapAreaList;
exports.getNewsDetail = getNewsDetail;
exports.getNewsList = getNewsList;
exports.getSportsOrganizationType = getSportsOrganizationType;
exports.getWxCollect = getWxCollect;
exports.getWxNewsType = getWxNewsType;
exports.getWxNoticeDetail = getWxNoticeDetail;
exports.getWxNoticeList = getWxNoticeList;
