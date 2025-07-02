"use strict";
const utils_http = require("../utils/http.js");
const orderState = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/orderState",
    data
  });
};
const platformOrderPay = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/orderPay",
    data
  });
};
const orderNotice = (data) => {
  return utils_http.request({
    url: "/shop/order/notice",
    data
  });
};
const cancelPay = (param) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/orderCancel",
    data: param
  });
};
const getOrderList = (param) => {
  return utils_http.request({
    url: "/shop/order/list",
    data: param
  });
};
const getOrderDetail = (param) => {
  return utils_http.request({
    url: "/shop/order/get",
    data: param
  });
};
const getInsuranceByOrderNo = (param) => {
  return utils_http.request({
    url: "/events/apply/getByOrderNo",
    data: param
  });
};
exports.cancelPay = cancelPay;
exports.getInsuranceByOrderNo = getInsuranceByOrderNo;
exports.getOrderDetail = getOrderDetail;
exports.getOrderList = getOrderList;
exports.orderNotice = orderNotice;
exports.orderState = orderState;
exports.platformOrderPay = platformOrderPay;
