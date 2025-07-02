"use strict";
const utils_http = require("../utils/http.js");
const geteEnterCode = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/enterCode",
    data
  });
};
const getMemberCode = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/memberCode",
    data
  });
};
const getRefreshCode = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/refreshCode",
    data
  });
};
const getOrderList = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/orderList",
    data
  });
};
const cancelOrder = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/orderCancel",
    data: param
  });
};
const getOrder = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/orderGet",
    method: "post",
    data: param
  });
};
const orderPay = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/orderPay",
    data: param
  });
};
const orderNotice = (param) => {
  return utils_http.request({
    url: "/shop/order/notice",
    data: param
  });
};
const orderState = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/orderState",
    data: param
  });
};
const addUserInfo = (params) => {
  return utils_http.request({
    url: "/infoPlatform/wxProblem/add",
    data: params
  });
};
const getWxMember = (params) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/get",
    data: params
  });
};
const getWxMemberDateAuth = (params) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/dateAuth",
    data: params
  });
};
exports.addUserInfo = addUserInfo;
exports.cancelOrder = cancelOrder;
exports.getMemberCode = getMemberCode;
exports.getOrder = getOrder;
exports.getOrderList = getOrderList;
exports.getRefreshCode = getRefreshCode;
exports.getWxMember = getWxMember;
exports.getWxMemberDateAuth = getWxMemberDateAuth;
exports.geteEnterCode = geteEnterCode;
exports.orderNotice = orderNotice;
exports.orderPay = orderPay;
exports.orderState = orderState;
