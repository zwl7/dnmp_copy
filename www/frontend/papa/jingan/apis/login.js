"use strict";
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const common_vendor = require("../common/vendor.js");
const utils_http = require("../utils/http.js");
const config_config = require("../config/config.js");
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
const login = () => __async(exports, null, function* () {
  const { code } = yield getWxCode();
  return utils_http.request({
    url: "/infoPlatform/wxMember/miniLogin",
    data: {
      code,
      company_id: config_config.config.company_id,
      is_login: 1
    }
  });
});
const temporaryLogin = () => __async(exports, null, function* () {
  return utils_http.request({
    url: "/infoPlatform/wxMember/lsLogin",
    data: {
      company_id: config_config.config.company_id,
      is_login: 1
    }
  });
});
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
const getWxMemberDateAuth = (params) => {
  return utils_http.request({
    url: "/infoPlatform/wxMember/dateAuth",
    data: params
  });
};
exports.getInstructionByCode = getInstructionByCode;
exports.getWxMemberDateAuth = getWxMemberDateAuth;
exports.handleAuthenticate = handleAuthenticate;
exports.login = login;
exports.miniAuthLogin = miniAuthLogin;
exports.temporaryLogin = temporaryLogin;
