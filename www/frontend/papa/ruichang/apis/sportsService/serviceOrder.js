"use strict";
const apis_sportsService_javaRequest = require("./javaRequest.js");
const addOrder = (data) => {
  return apis_sportsService_javaRequest.request({
    url: "/services/serveWork/add",
    data
  });
};
const getMyOrderList = (data) => {
  return apis_sportsService_javaRequest.request({
    url: "/services/serveWork/selectMyOrder",
    data
  });
};
const getOrderInfo = (serveWorkId) => {
  return apis_sportsService_javaRequest.request({
    url: `/services/serveWork/info/${serveWorkId}`,
    method: "get"
  });
};
const getOrderSetting = (settingId) => {
  return apis_sportsService_javaRequest.request({
    url: `/services/setting/info/${settingId}`,
    method: "get"
  });
};
exports.addOrder = addOrder;
exports.getMyOrderList = getMyOrderList;
exports.getOrderInfo = getOrderInfo;
exports.getOrderSetting = getOrderSetting;
//# sourceMappingURL=serviceOrder.js.map
