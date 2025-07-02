"use strict";
const utils_http = require("../utils/http.js");
const getWxEventList = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxEventPlan/list",
    data
  });
};
const getMyWxEventList = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxEventPlan/applyList",
    data
  });
};
const getWxEventPlanInfo = (data) => utils_http.request({
  url: "/infoPlatform/wxEventPlan/get",
  data
});
const isApplyEvent = (data) => utils_http.request({
  url: "/infoPlatform/wxEventPlanApply/my",
  data
});
const addWxEventPlan = (data) => utils_http.request({
  url: "/infoPlatform/wxEventPlan/add",
  data
});
const addApplyWxEventPlan = (data) => utils_http.request({
  url: "/infoPlatform/wxEventPlanApply/add",
  data
});
const getWxEventApplyList = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxEventPlanApply/list",
    data
  });
};
const getWxEventApplyInfo = (data) => utils_http.request({
  url: "/infoPlatform/wxEventPlanApply/get",
  data
});
exports.addApplyWxEventPlan = addApplyWxEventPlan;
exports.addWxEventPlan = addWxEventPlan;
exports.getMyWxEventList = getMyWxEventList;
exports.getWxEventApplyInfo = getWxEventApplyInfo;
exports.getWxEventApplyList = getWxEventApplyList;
exports.getWxEventList = getWxEventList;
exports.getWxEventPlanInfo = getWxEventPlanInfo;
exports.isApplyEvent = isApplyEvent;
