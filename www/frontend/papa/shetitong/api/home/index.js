"use strict";
const utils_http = require("../../utils/http.js");
const getWxTrainActivityList = (data) => utils_http.request({ url: "/socialSports/wxTrainActivity/list", data, method: "POST" });
const getConfigSelect = (data) => utils_http.request({ url: "/socialSports/instructor/getConfigSelect", data, method: "POST" });
const getWxNoticeList = (data) => utils_http.request({ url: "/organUnit/wxNotice/getlist", data, method: "POST" });
const getWxNoticeRecommendList = (data) => utils_http.request({ url: "/organUnit/wxNotice/list", data, method: "POST" });
const getWxNoticeDetail = (data) => utils_http.request({ url: "/organUnit/wxNotice/get", data, method: "POST" });
const getWxRecommend = (data) => utils_http.request({ url: "/organUnit/wxRecommend/list", data, method: "POST" });
const getWxInstructorList = (data) => utils_http.request({ url: "/socialSports/wxInstructor/getRank", data, method: "POST" });
const getWxInstructorDetail = (data) => utils_http.request({ url: "/socialSports/wxInstructor/get", data, method: "POST" });
const getWxInstructorStarList = (data) => utils_http.request({ url: "/socialSports/wxInstructor/starList", data, method: "POST" });
const getWxInstructorPromoteList = (data) => utils_http.request({ url: "/socialSports/wxInstructor/promoteList", data, method: "POST" });
const home = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getConfigSelect,
  getWxInstructorDetail,
  getWxInstructorList,
  getWxInstructorPromoteList,
  getWxInstructorStarList,
  getWxNoticeDetail,
  getWxNoticeList,
  getWxNoticeRecommendList,
  getWxRecommend,
  getWxTrainActivityList
}, Symbol.toStringTag, { value: "Module" }));
exports.getWxInstructorPromoteList = getWxInstructorPromoteList;
exports.getWxInstructorStarList = getWxInstructorStarList;
exports.getWxNoticeDetail = getWxNoticeDetail;
exports.getWxNoticeList = getWxNoticeList;
exports.getWxNoticeRecommendList = getWxNoticeRecommendList;
exports.getWxRecommend = getWxRecommend;
exports.home = home;
//# sourceMappingURL=index.js.map
