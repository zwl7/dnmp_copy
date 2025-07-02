"use strict";
require("../common/vendor.js");
const utils_http = require("../utils/http.js");
const getWxRecommend = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxRecommend/list",
    data
  });
};
const getWxNotice = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxNotice/list",
    data
  });
};
const getWxNews = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxNews/getlist",
    data
  });
};
const getWxStadiumRecommend = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxStadium/recommend",
    data
  });
};
const getWxSite = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxSite/list",
    data
  });
};
const getWxSiteDetail = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxSite/get",
    data
  });
};
const getInstitutionlist = (data) => {
  return utils_http.request({
    url: "/infoPlatform/institution/list",
    data
  });
};
exports.getInstitutionlist = getInstitutionlist;
exports.getWxNews = getWxNews;
exports.getWxNotice = getWxNotice;
exports.getWxRecommend = getWxRecommend;
exports.getWxSite = getWxSite;
exports.getWxSiteDetail = getWxSiteDetail;
exports.getWxStadiumRecommend = getWxStadiumRecommend;
