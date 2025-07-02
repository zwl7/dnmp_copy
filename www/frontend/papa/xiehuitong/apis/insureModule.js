"use strict";
const utils_http = require("../utils/http.js");
const getWxInsureModuleProduct = (data) => {
  return utils_http.request({
    url: "/pub/wxInsureModuleProduct/get",
    data
  });
};
const saveWxInsureModule = (data) => {
  return utils_http.request({
    url: "/pub/wxInsureModuleProductBusiness/save",
    data
  });
};
const getBuyInsureStatus = (data) => {
  return utils_http.request({
    url: "/pub/wxInsureModuleProductBusiness/getBuyInsureStatus",
    data
  });
};
exports.getBuyInsureStatus = getBuyInsureStatus;
exports.getWxInsureModuleProduct = getWxInsureModuleProduct;
exports.saveWxInsureModule = saveWxInsureModule;
