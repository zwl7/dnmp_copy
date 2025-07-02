"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_http = require("../../utils/http.js");
const utils_index = require("../../utils/index.js");
const loginByPhone = (data) => utils_http.loginHttp({ url: "/member/wxMember/phoneLogin", data, method: "POST" });
const getTokenNoLogin = (data) => utils_http.loginHttp({ url: "/member/wxMember/getTokenNoLogin", data, method: "POST" });
const miniLogin = (data) => utils_http.loginHttp({ url: "/infoPlatform/wxMember/miniLogin", data, method: "POST" });
const wxMiniAuthLogin = (data) => utils_http.loginHttp({ url: "/infoPlatform/wxMember/miniAuthLogin", data, method: "POST" });
const wxLoginOut = (data) => utils_http.request({ url: "/infoPlatform/wxMember/loginOut", data, method: "POST" });
const getWxMemberInfo = (data) => utils_http.request({ url: "/infoPlatform/wxMember/get", data, method: "POST" });
const getPhoneCode = (data) => utils_http.request({ url: "/member/wxMember/sendPhoneCode", data, method: "POST" });
const getH5MemberInfo = (data) => utils_http.request({ url: "/member/wxMember/get", data, method: "POST" });
const userAuth = (data) => utils_http.request({ url: "/member/wxMember/auth", data, method: "POST" });
const codeAuth = (data) => utils_http.request({ url: "/member/wxMember/phoneAuth", data, method: "POST" });
const platformUserAuth = (data) => utils_http.request({ url: "/infoPlatform/wxMember/instructorAuth", data, method: "POST" });
const platformCodeAuth = (data) => utils_http.request({ url: "/infoPlatform/wxMember/phoneAuth", data, method: "POST" });
const getTagGroupList = (data) => utils_http.request({ url: "/organUnit/tagGroup/list", data, method: "POST" });
const getCompanyAreaLevel = (data) => utils_http.request({ url: "/organUnit/companyArea/level", data, method: "POST" });
const getCompanyAreaByAccount = (data) => utils_http.request({ url: "/infoPlatform/companyArea/byAccountWithCommunity", data, method: "POST" });
const getAreaSetting = (data) => utils_http.request({ url: "/organUnit/dataDictionary/getAreaSetting", data, method: "POST" });
const userHeadimg = (data) => mock(data);
const getMyVoluntaryActivityData = (data) => utils_http.request(
  { url: "/socialSports/wxVoluntaryActivity/myVoluntaryActivityData" }
);
const updateMmeberInfo = (data) => utils_http.request({ url: "/member/wxMember/updateMmeberInfo", data, method: "POST" });
const updateInfoPlatformMmeberInfo = (data) => utils_http.request({ url: "/infoPlatform/wxMember/update", data, method: "POST" });
const getCompany = (formData) => common_vendor.index.request({
  url: `${utils_index.getEvnBaseUrl()}/base/company/getByDomain`,
  //仅为示例，并非真实接口地址。
  data: formData,
  method: "POST",
  header: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
});
const user = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  codeAuth,
  getAreaSetting,
  getCompany,
  getCompanyAreaByAccount,
  getCompanyAreaLevel,
  getH5MemberInfo,
  getMyVoluntaryActivityData,
  getPhoneCode,
  getTagGroupList,
  getTokenNoLogin,
  getWxMemberInfo,
  loginByPhone,
  miniLogin,
  platformCodeAuth,
  platformUserAuth,
  updateInfoPlatformMmeberInfo,
  updateMmeberInfo,
  userAuth,
  userHeadimg,
  wxLoginOut,
  wxMiniAuthLogin
}, Symbol.toStringTag, { value: "Module" }));
exports.codeAuth = codeAuth;
exports.getCompany = getCompany;
exports.getH5MemberInfo = getH5MemberInfo;
exports.getTokenNoLogin = getTokenNoLogin;
exports.getWxMemberInfo = getWxMemberInfo;
exports.miniLogin = miniLogin;
exports.platformCodeAuth = platformCodeAuth;
exports.platformUserAuth = platformUserAuth;
exports.user = user;
exports.userAuth = userAuth;
//# sourceMappingURL=index.js.map
