"use strict";
const apis_sportsService_javaRequest = require("./javaRequest.js");
const getCommonEnum = (data) => {
  return apis_sportsService_javaRequest.request({
    url: "/services/enum/getBizList",
    data,
    method: "get"
  });
};
const getServicesDictPage = (data) => {
  return apis_sportsService_javaRequest.request({
    url: "/services/dict/page",
    data
  });
};
const getPersonnelAuth = (data) => {
  return apis_sportsService_javaRequest.request({
    url: "/infoPlatform/wxMember/personnelAuth",
    data
  });
};
const getCourseList = (data) => {
  return apis_sportsService_javaRequest.request({
    url: "/infoPlatform/wxNews/getlist",
    data
  });
};
const getToDoData = (data) => {
  return apis_sportsService_javaRequest.request({
    url: "/services/serveWork/getToDo",
    data
  });
};
const getPlatformOrderPage = (param) => {
  return apis_sportsService_javaRequest.request({
    url: "/services/setting/platformOrderPage",
    method: "post",
    data: param
  });
};
const getOrgOrderPage = (param) => {
  return apis_sportsService_javaRequest.request({
    url: "/services/setting/orgOrderPage",
    method: "post",
    data: param
  });
};
exports.getCommonEnum = getCommonEnum;
exports.getCourseList = getCourseList;
exports.getOrgOrderPage = getOrgOrderPage;
exports.getPersonnelAuth = getPersonnelAuth;
exports.getPlatformOrderPage = getPlatformOrderPage;
exports.getServicesDictPage = getServicesDictPage;
exports.getToDoData = getToDoData;
