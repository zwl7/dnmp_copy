"use strict";
const common_vendor = require("../common/vendor.js");
const utils_http = require("../utils/http.js");
const core_config = require("../core/config.js");
function getWxCode() {
  return new Promise((resolve, reject) => {
    common_vendor.index.login({
      provider: "weixin",
      success(res) {
        resolve(res);
      },
      fail() {
        reject("faily get wxcode");
      }
    });
  });
}
const login = async () => {
  const {
    code
  } = await getWxCode();
  return utils_http.request({
    url: "/infoPlatform/wxMember/miniLogin",
    data: {
      code,
      company_id: core_config.config.company_id,
      is_login: 1
    }
  });
};
const getInstructionByCode = (params) => {
  return utils_http.request({
    url: "/cfg/instruction/getByCode",
    data: params
  });
};
const miniAuthLogin = (params) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/miniAuthLogin",
    data: params
  });
};
const handleAuthenticate = (params) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/authenticate",
    data: params
  });
};
exports.getInstructionByCode = getInstructionByCode;
exports.handleAuthenticate = handleAuthenticate;
exports.login = login;
exports.miniAuthLogin = miniAuthLogin;
