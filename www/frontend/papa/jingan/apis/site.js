"use strict";
const utils_http = require("../utils/http.js");
const getHealthList = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxHealth/list",
    data
  });
};
const getHealth = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxHealth/get",
    data
  });
};
const getHealthAllType = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxHealth/getAllType",
    data
  });
};
const getSeason = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxHealth/getSeason",
    data
  });
};
const getHealthAgreement = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxHealth/getAgreement",
    data
  });
};
const healthReserve = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxHealth/reserve",
    data
  });
};
const getMyReserveInfo = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxHealth/reserveInfo",
    data
  });
};
const cancelReserve = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxHealth/cancelReserve",
    data
  });
};
const addWxResservePeople = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxReservePeople/add",
    data
  });
};
const delWxResservePeople = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxReservePeople/del",
    data
  });
};
const getWxResservePeopleList = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxReservePeople/list",
    data
  });
};
const getWxFitnessRecord = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxBodyCheck/getRecord",
    data
  });
};
const getWxBodyCheckPdf = (data) => {
  return utils_http.request({
    url: "/infoPlatform/wxBodyCheck/getPdf",
    data
  });
};
exports.addWxResservePeople = addWxResservePeople;
exports.cancelReserve = cancelReserve;
exports.delWxResservePeople = delWxResservePeople;
exports.getHealth = getHealth;
exports.getHealthAgreement = getHealthAgreement;
exports.getHealthAllType = getHealthAllType;
exports.getHealthList = getHealthList;
exports.getMyReserveInfo = getMyReserveInfo;
exports.getSeason = getSeason;
exports.getWxBodyCheckPdf = getWxBodyCheckPdf;
exports.getWxFitnessRecord = getWxFitnessRecord;
exports.getWxResservePeopleList = getWxResservePeopleList;
exports.healthReserve = healthReserve;
