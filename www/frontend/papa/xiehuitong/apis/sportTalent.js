"use strict";
const utils_http = require("../utils/http.js");
const getSportTalentType = (param) => utils_http.request({
  url: "/infoPlatform/wxSportTalentType/get",
  data: param
});
const getSportTalentTypeList = (param) => utils_http.request({
  url: "/infoPlatform/wxSportTalentType/list",
  data: param
});
const addSportTalent = (param) => utils_http.request({
  url: "/infoPlatform/wxSportTalent/add",
  data: param
});
const getSportTalent = (param) => utils_http.request({
  url: "/infoPlatform/wxSportTalent/get",
  data: param
});
const getSportTalentList = (param) => utils_http.request({
  url: "/infoPlatform/wxSportTalent/list ",
  data: param
});
const getMySportTalentList = (param) => utils_http.request({
  url: "/infoPlatform/wxSportTalent/myList",
  data: param
});
const getMyWxSportTalent = (param) => utils_http.request({
  url: "/infoPlatform/wxSportTalent/my",
  data: param
});
exports.addSportTalent = addSportTalent;
exports.getMySportTalentList = getMySportTalentList;
exports.getMyWxSportTalent = getMyWxSportTalent;
exports.getSportTalent = getSportTalent;
exports.getSportTalentList = getSportTalentList;
exports.getSportTalentType = getSportTalentType;
exports.getSportTalentTypeList = getSportTalentTypeList;
