"use strict";
const apis_sportsService_javaRequest = require("./javaRequest.js");
const getStyleList = (data) => {
  return apis_sportsService_javaRequest.request({
    url: "/services/serveMien/page",
    data
  });
};
const getMyStyleList = (data) => {
  return apis_sportsService_javaRequest.request({
    url: "/services/serveMien/selectMyServeMien",
    data
  });
};
const getMyOderList = (data) => {
  return apis_sportsService_javaRequest.request({
    url: "/services/serveMien/selectOrderServeMien",
    data
  });
};
const addStyle = (data) => {
  return apis_sportsService_javaRequest.request({
    url: "/services/serveMien/add",
    data
  });
};
const addAppraise = (data) => {
  return apis_sportsService_javaRequest.request({
    url: "/services/serveWork/appraise",
    data,
    method: "PUT"
  });
};
const getStyleDetail = (serveMienId) => {
  return apis_sportsService_javaRequest.request({
    url: `/services/serveMien/info/${serveMienId}`,
    method: "GET"
  });
};
const praise = (serveWorkId) => {
  return apis_sportsService_javaRequest.request({
    url: `/services/serveWork/praise/${serveWorkId}`,
    method: "get"
  });
};
const cancelPraise = (serveWorkId) => {
  return apis_sportsService_javaRequest.request({
    url: `/services/serveWork/cancelPraise/${serveWorkId}`,
    method: "get"
  });
};
const getAppraise = (serveMienId) => {
  return apis_sportsService_javaRequest.request({
    url: `/services/serveMien/selectAppraise/${serveMienId}`,
    method: "get"
  });
};
const getMessAppraise = (serveMienId) => {
  return apis_sportsService_javaRequest.request({
    url: `/services/serveMienRecord/infoByServeWorkId/${serveMienId}`,
    method: "get"
  });
};
exports.addAppraise = addAppraise;
exports.addStyle = addStyle;
exports.cancelPraise = cancelPraise;
exports.getAppraise = getAppraise;
exports.getMessAppraise = getMessAppraise;
exports.getMyOderList = getMyOderList;
exports.getMyStyleList = getMyStyleList;
exports.getStyleDetail = getStyleDetail;
exports.getStyleList = getStyleList;
exports.praise = praise;
