"use strict";
const utils_http = require("../utils/http.js");
const getBusinessSiteList = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxBusinessPlace/list",
    data
  });
};
exports.getBusinessSiteList = getBusinessSiteList;
