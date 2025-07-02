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
const getBaseTag = (data) => {
  return utils_http.request({
    url: "/base/companyAuth/tag",
    data
  });
};
const getWxNewsType = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxNewsType/getAll",
    data: param
  });
};
const getSportsOrganizationType = (param) => {
  return utils_http.request({
    url: "/infoPlatform/sportsOrganizationType/list",
    data: param
  });
};
const getAssociateType = (param) => {
  return utils_http.request({
    url: "/infoPlatform/memberUnitsType/list",
    data: param
  });
};
const getCompany = (param) => {
  return utils_http.request({
    url: "/base/company/get",
    data: param
  });
};
const getCompanyAreaAll = (param) => {
  return utils_http.request({
    url: "/infoPlatform/companyArea/all",
    data: param
  });
};
const memberUnitsApply = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/memberUnitsApply",
    data: param
  });
};
const getMemberUnitsApply = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/getMemberUnitsApply",
    data: param
  });
};
const updateMemberUnitsApply = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/updateMemberUnitsApply",
    data: param
  });
};
const sendPhoneCode = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/sendPhoneCode",
    data: param
  });
};
const addStadiumApply = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxStadiumApply/add",
    data: param
  });
};
const getCompanyAuthTag = (param) => {
  return utils_http.request({
    url: "/base/companyAuth/tag",
    data: param
  });
};
const getCompanyProject = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxKindTag/getAll",
    data: param
  });
};
const getWxActivityType = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxActivityType/getAll",
    data: param
  });
};
const getWxSiteList = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxSite/list",
    data: param
  });
};
const getWxMemberList = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMemberUnits/list",
    data: param
  });
};
const getWxUnitDetail = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMemberUnits/get",
    data: param
  });
};
const addWxCollect = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxCollect/add",
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
const getWxMember = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/get",
    data: param
  });
};
const getWxOrganization = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxOrganization/list",
    data: param
  });
};
const getWxOrganizationDetail = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxOrganization/get",
    data: param
  });
};
const getInstructorList = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxInstructor/list",
    data: param
  });
};
const getInstructor = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxInstructor/get",
    data: param
  });
};
const wxMemberLogout = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/loginOut",
    data: param
  });
};
const wxMemberUpdate = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/update",
    data: param
  });
};
const wxMemberDataReport = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/dataReport",
    data: param
  });
};
const getListCoach = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxOrganization/listCoach",
    data: param
  });
};
const getCoachDetail = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxOrganization/getCoach",
    data: param
  });
};
const getAuthorize = (param) => {
  return utils_http.request({
    url: "/infoPlatform/memberOauth2/authorize",
    data: param
  });
};
exports.addStadiumApply = addStadiumApply;
exports.addWxCollect = addWxCollect;
exports.getAssociateType = getAssociateType;
exports.getAuthorize = getAuthorize;
exports.getBaseTag = getBaseTag;
exports.getCoachDetail = getCoachDetail;
exports.getCompany = getCompany;
exports.getCompanyAreaAll = getCompanyAreaAll;
exports.getCompanyAuthTag = getCompanyAuthTag;
exports.getCompanyProject = getCompanyProject;
exports.getInstructor = getInstructor;
exports.getInstructorList = getInstructorList;
exports.getListCoach = getListCoach;
exports.getMemberUnitsApply = getMemberUnitsApply;
exports.getNewsDetail = getNewsDetail;
exports.getNewsList = getNewsList;
exports.getSportsOrganizationType = getSportsOrganizationType;
exports.getWxActivityType = getWxActivityType;
exports.getWxMember = getWxMember;
exports.getWxMemberList = getWxMemberList;
exports.getWxNewsType = getWxNewsType;
exports.getWxOrganization = getWxOrganization;
exports.getWxOrganizationDetail = getWxOrganizationDetail;
exports.getWxSiteList = getWxSiteList;
exports.getWxUnitDetail = getWxUnitDetail;
exports.memberUnitsApply = memberUnitsApply;
exports.sendPhoneCode = sendPhoneCode;
exports.updateMemberUnitsApply = updateMemberUnitsApply;
exports.uploadPic = uploadPic;
exports.wxMemberDataReport = wxMemberDataReport;
exports.wxMemberLogout = wxMemberLogout;
exports.wxMemberUpdate = wxMemberUpdate;
