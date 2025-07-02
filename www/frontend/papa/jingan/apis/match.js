"use strict";
const utils_http = require("../utils/http.js");
const getContestCommitteeList = (data) => {
  return utils_http.request({
    url: "/events/contestCommittee/list",
    data
  });
};
const getContestList = (data) => {
  return utils_http.request({
    url: "/events/contest/list",
    data
  });
};
const getEventsWxcontestmiendetailList = (data) => {
  return utils_http.request({
    url: "/events/wxContestMienDetail/list",
    data
  });
};
const getContestInfo = (data) => {
  return utils_http.request({
    url: "/events/contest/get",
    data
  });
};
const getGroupProjectList = (data) => {
  return utils_http.request({
    url: "/events/groupProject/list",
    data
  });
};
const getApplyFromInfo = (data) => {
  return utils_http.request({
    url: "/events/applyFrom/getSelectFrom",
    data
  });
};
const getApplyList = (data) => {
  return utils_http.request({
    url: "/events/wx/applyList",
    data
  });
};
const getContestScore = (data) => {
  return utils_http.request({
    url: "/events/contestScore/doneList",
    data
  });
};
const getUserApplyInfo = (data) => {
  return utils_http.request({
    url: "/events/applyV2/get",
    data
  });
};
const addMemberApplyPersonnel = (data) => {
  return utils_http.request({
    url: "/events/memberApplyPersonnel/add",
    data
  });
};
const getMemberApplyPersonnelList = (data) => {
  return utils_http.request({
    url: "/events/memberApplyPersonnel/list",
    data
  });
};
const getMemberApplyPersonnel = (data) => {
  return utils_http.request({
    url: "/events/memberApplyPersonnel/get",
    data
  });
};
const editMemberApplyPersonnel = (data) => {
  return utils_http.request({
    url: "/events/memberApplyPersonnel/edit",
    data
  });
};
const delMemberApplyPersonnel = (data) => {
  return utils_http.request({
    url: "/events/memberApplyPersonnel/del",
    data
  });
};
const addMemberApplyTeam = (data) => {
  return utils_http.request({
    url: "/events/memberApplyTeam/add",
    data
  });
};
const getMemberApplyTeamList = (data) => {
  return utils_http.request({
    url: "/events/memberApplyTeam/list",
    data
  });
};
const getMemberApplyTeam = (data) => {
  return utils_http.request({
    url: "/events/memberApplyTeam/get",
    data
  });
};
const editMemberApplyTeam = (data) => {
  return utils_http.request({
    url: "/events/memberApplyTeam/edit",
    data
  });
};
const delMemberApplyTeam = (data) => {
  return utils_http.request({
    url: "/events/memberApplyTeam/del",
    data
  });
};
const addEventsApply = (data) => {
  return utils_http.request({
    url: "/events/applyV2/add",
    data
  });
};
const getPayWay = (data) => {
  return utils_http.request({
    url: "/cfg/cfgPaymentWay/list",
    data
  });
};
const createOrder = (data) => {
  return utils_http.request({
    url: "/shop/order/create",
    data
  });
};
const shopOrderPay = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/orderPay ",
    data
  });
};
exports.addEventsApply = addEventsApply;
exports.addMemberApplyPersonnel = addMemberApplyPersonnel;
exports.addMemberApplyTeam = addMemberApplyTeam;
exports.createOrder = createOrder;
exports.delMemberApplyPersonnel = delMemberApplyPersonnel;
exports.delMemberApplyTeam = delMemberApplyTeam;
exports.editMemberApplyPersonnel = editMemberApplyPersonnel;
exports.editMemberApplyTeam = editMemberApplyTeam;
exports.getApplyFromInfo = getApplyFromInfo;
exports.getApplyList = getApplyList;
exports.getContestCommitteeList = getContestCommitteeList;
exports.getContestInfo = getContestInfo;
exports.getContestList = getContestList;
exports.getContestScore = getContestScore;
exports.getEventsWxcontestmiendetailList = getEventsWxcontestmiendetailList;
exports.getGroupProjectList = getGroupProjectList;
exports.getMemberApplyPersonnel = getMemberApplyPersonnel;
exports.getMemberApplyPersonnelList = getMemberApplyPersonnelList;
exports.getMemberApplyTeam = getMemberApplyTeam;
exports.getMemberApplyTeamList = getMemberApplyTeamList;
exports.getPayWay = getPayWay;
exports.getUserApplyInfo = getUserApplyInfo;
exports.shopOrderPay = shopOrderPay;
