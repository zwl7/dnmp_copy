"use strict";
const utils_http = require("../../utils/http.js");
const getWxTrainActivityItem = (data) => utils_http.request({ url: "/socialSports/wxTrainActivity/get", data, method: "POST" });
const addWxTrainActivityItem = (data) => utils_http.request({ url: "/socialSports/wxTrainActivity/applyAdd", data, method: "POST" });
const editWxTrainActivityItem = (data) => utils_http.request({ url: "/socialSports/wxTrainActivity/applyUpdate", data, method: "POST" });
const getWxTrainActivityApplyList = (data) => utils_http.request({ url: "/socialSports/wxTrainActivityApply/list", data, method: "POST" });
const getWxTrainActivityApplyItem = (data) => utils_http.request({ url: "/socialSports/wxTrainActivityApply/get", data, method: "POST" });
const getWxTrainActivityInstructInfo = (data) => utils_http.request({ url: "/socialSports/wxTrainActivityApply/getInfoBySearch", data, method: "POST" });
const trainActivity = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addWxTrainActivityItem,
  editWxTrainActivityItem,
  getWxTrainActivityApplyItem,
  getWxTrainActivityApplyList,
  getWxTrainActivityInstructInfo,
  getWxTrainActivityItem
}, Symbol.toStringTag, { value: "Module" }));
exports.trainActivity = trainActivity;
//# sourceMappingURL=index.js.map
