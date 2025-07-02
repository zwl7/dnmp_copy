"use strict";
const utils_http = require("../../utils/http.js");
const getVoluntaryActivityList = (data) => utils_http.request({ url: "/socialSports/wxVoluntaryActivity/list", data, method: "POST" });
const getAllInstructorSite = (data) => utils_http.request({ url: "/socialSports/wxInstructorSite/getAllInstructorSite", data, method: "POST" });
const getInstructorSiteList = (data) => utils_http.request({ url: "/socialSports/wxInstructorSite/list", data, method: "POST" });
const getInstructorSiteDetail = (data) => utils_http.request({ url: "/socialSports/wxInstructorSite/get", data, method: "POST" });
const instructorSiteBehavior = (data) => utils_http.request({ url: "/socialSports/wxInstructorSite/behavior", data, method: "POST" });
const joinOrQuitInstructorSite = (data) => utils_http.request({ url: "/socialSports/wxInstructorSite/joinAndQuit", data, method: "POST" });
const getSiteinstructorList = (data) => utils_http.request({ url: "/socialSports/wxInstructorSite/instructorList", data, method: "POST" });
const getInstructorSiteTypeList = (data) => utils_http.request({ url: "/organUnit/dataDictionary/instructorSiteList", data, method: "POST" });
const instructorSite = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getAllInstructorSite,
  getInstructorSiteDetail,
  getInstructorSiteList,
  getInstructorSiteTypeList,
  getSiteinstructorList,
  getVoluntaryActivityList,
  instructorSiteBehavior,
  joinOrQuitInstructorSite
}, Symbol.toStringTag, { value: "Module" }));
exports.getInstructorSiteList = getInstructorSiteList;
exports.getSiteinstructorList = getSiteinstructorList;
exports.getVoluntaryActivityList = getVoluntaryActivityList;
exports.instructorSite = instructorSite;
exports.joinOrQuitInstructorSite = joinOrQuitInstructorSite;
//# sourceMappingURL=index.js.map
