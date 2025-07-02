"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const common_vendor = require("../common/vendor.js");
const utils_http = require("../utils/http.js");
const core_config = require("../core/config.js");
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
const getWxNewsType = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxNewsType/getAll",
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
const getMapAreaList = (param) => {
  return utils_http.request({
    url: "/infoPlatform/map/areaList",
    method: "post",
    data: param
  });
};
const getCompanyAreaAll = (param) => {
  return utils_http.request({
    url: "/infoPlatform/companyArea/all",
    method: "post",
    data: param
  });
};
const getCompanyProject = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxKindTag/getAll",
    method: "post",
    data: param
  });
};
const getWxActivityType = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivityType/getAll",
    method: "post",
    data: param
  });
};
const getWxSiteList = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxSite/list",
    method: "post",
    data: param
  });
};
const getWxSiteDetail = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxSite/get",
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
const uploadPic = (params) => common_vendor.index.uploadFile(__spreadValues({
  url: `${core_config.config.baseUrl}/img/upload`,
  formData: {
    size: 5
  },
  name: "image"
}, params || {}));
const wxMemberLogout = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/loginOut",
    method: "post",
    data: param
  });
};
const wxMemberUpdate = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/update",
    method: "post",
    data: param
  });
};
const wxMemberDataReport = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/dataReport",
    method: "post",
    data: param
  });
};
exports.addWxCollect = addWxCollect;
exports.getCompanyAreaAll = getCompanyAreaAll;
exports.getCompanyProject = getCompanyProject;
exports.getMapAreaList = getMapAreaList;
exports.getNewsDetail = getNewsDetail;
exports.getNewsList = getNewsList;
exports.getSportsOrganizationType = getSportsOrganizationType;
exports.getWxActivityType = getWxActivityType;
exports.getWxNewsType = getWxNewsType;
exports.getWxSiteDetail = getWxSiteDetail;
exports.getWxSiteList = getWxSiteList;
exports.uploadPic = uploadPic;
exports.wxMemberDataReport = wxMemberDataReport;
exports.wxMemberLogout = wxMemberLogout;
exports.wxMemberUpdate = wxMemberUpdate;
//# sourceMappingURL=common.js.map
