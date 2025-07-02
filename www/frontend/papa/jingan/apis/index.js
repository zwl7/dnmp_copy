"use strict";
const utils_http = require("../utils/http.js");
const getWxRecommend = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxRecommend/list",
    data
  });
};
const getWxNoticeDetail = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxNotice/get",
    data
  });
};
const getWxNotice = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxNotice/list",
    data
  });
};
const getWxNoticeList = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxNotice/getlist",
    data
  });
};
const AddProblemInfo = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxProblem/add",
    data
  });
};
const getIndexKingkong = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxMemberIndexKingkong/get",
    data
  });
};
const updateIndexKingkong = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxMemberIndexKingkong/save",
    data
  });
};
const getWxColorStyle = (data) => {
  return utils_http.request({
    url: "/cfg/wxColorStyle/wxGet",
    data
  });
};
const getWxMenu = (data) => {
  return utils_http.request({
    url: "/cfg/wxMenu/list",
    data
  });
};
exports.AddProblemInfo = AddProblemInfo;
exports.getIndexKingkong = getIndexKingkong;
exports.getWxColorStyle = getWxColorStyle;
exports.getWxMenu = getWxMenu;
exports.getWxNotice = getWxNotice;
exports.getWxNoticeDetail = getWxNoticeDetail;
exports.getWxNoticeList = getWxNoticeList;
exports.getWxRecommend = getWxRecommend;
exports.updateIndexKingkong = updateIndexKingkong;
