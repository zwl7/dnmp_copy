"use strict";
const apis_sportsService_javaRequest = require("./javaRequest.js");
const platformDispatch = (data) => {
  return apis_sportsService_javaRequest.request({
    url: "/services/serveWork/platformDispatch",
    data,
    method: "put"
  });
};
const orgDispatch = (data) => {
  return apis_sportsService_javaRequest.request({
    url: "/services/serveWork/orgDispatch",
    data,
    method: "put"
  });
};
const getOrderList = (data) => {
  return apis_sportsService_javaRequest.request({
    url: "/services/serveWork/page",
    data
  });
};
const getOrgDispatchList = (data) => {
  return apis_sportsService_javaRequest.request({
    url: "/services/serveWork/selectOrgDispatch",
    data
  });
};
const getTalentOrderList = (data) => {
  return apis_sportsService_javaRequest.request({
    url: "/services/serveWork/selectTalentOrder",
    data
  });
};
exports.getOrderList = getOrderList;
exports.getOrgDispatchList = getOrgDispatchList;
exports.getTalentOrderList = getTalentOrderList;
exports.orgDispatch = orgDispatch;
exports.platformDispatch = platformDispatch;
