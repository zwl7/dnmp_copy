"use strict";
const utils_http = require("../../utils/http.js");
const getVoluntaryActivityList = (data) => utils_http.request({ url: "/socialSports/wxVoluntaryActivity/list", data, method: "POST" });
const getVoluntaryActivityItem = (data) => utils_http.request({ url: "/socialSports/wxVoluntaryActivity/get", data, method: "POST" });
const addVoluntaryActivityItem = (data) => utils_http.request({ url: "/socialSports/wxVoluntaryActivity/add", data, method: "POST" });
const voluntaryActivityBehavior = (data) => utils_http.request({ url: "/socialSports/wxVoluntaryActivity/behavior", data, method: "POST" });
const getVoluntaryActivityMyLove = (data) => utils_http.request({ url: "/socialSports/wxVoluntaryActivity/myLove", data, method: "POST" });
const deleteVoluntaryActivity = (data) => utils_http.request({ url: "/socialSports/wxVoluntaryActivity/del", data, method: "POST" });
const evaluateAdd = (data) => utils_http.request({ url: "/socialSports/wxVoluntaryActivity/evaluateAdd", data, method: "POST" });
const evaluateGet = (data) => utils_http.request({ url: "/socialSports/wxVoluntaryActivity/evaluateGet", data, method: "POST" });
const voluntaryActivity = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addVoluntaryActivityItem,
  deleteVoluntaryActivity,
  evaluateAdd,
  evaluateGet,
  getVoluntaryActivityItem,
  getVoluntaryActivityList,
  getVoluntaryActivityMyLove,
  voluntaryActivityBehavior
}, Symbol.toStringTag, { value: "Module" }));
exports.getVoluntaryActivityList = getVoluntaryActivityList;
exports.voluntaryActivity = voluntaryActivity;
//# sourceMappingURL=index.js.map
