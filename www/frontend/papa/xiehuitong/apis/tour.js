"use strict";
const utils_http = require("../utils/http.js");
const getTourList = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxSportTourism/list",
    data
  });
};
const getTourDetail = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxSportTourism/get",
    data
  });
};
exports.getTourDetail = getTourDetail;
exports.getTourList = getTourList;
