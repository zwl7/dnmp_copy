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
const common_vendor = require("../../common/vendor.js");
const apis_user_index = require("../../apis/user/index.js");
class UserLoginClass {
  constructor(parameters) {
  }
  getTemporaryToken() {
    return new Promise((resolve, reject) => __async(this, null, function* () {
      let res = {};
      {
        res = yield this.getWxTemporaryToken();
      }
      resolve(res);
    }));
  }
  //  h5 - 临时token 获取
  getH5TemporaryToken(data) {
    return new Promise((resolve, reject) => __async(this, null, function* () {
      var _a, _b;
      const companyData = yield apis_user_index.getCompany({
        // domain: location.domain,
      });
      const { data: data2 } = companyData;
      let params = ((_a = data2 == null ? void 0 : data2.data) == null ? void 0 : _a.company_id) ? { company_id: (_b = data2 == null ? void 0 : data2.data) == null ? void 0 : _b.company_id } : {};
      const res = yield apis_user_index.getTokenNoLogin(params);
      if (res.code != 200) {
        reject(res);
      }
      resolve(res.data);
    }));
  }
  // 小程序 - 临时token 获取
  getWxTemporaryToken() {
    return new Promise((resolve, reject) => __async(this, null, function* () {
      let wxCode = yield this.getWxCode();
      let params = {
        code: wxCode
      };
      let res = yield apis_user_index.miniLogin(params);
      if (res.code != 200) {
        common_vendor.index.showToast({
          title: res.message,
          icon: "none",
          duration: 2e3
        });
        reject(res);
      }
      resolve(res.data);
    }));
  }
  // 获取微信code
  getWxCode() {
    return new Promise((resolve, reject) => {
      common_vendor.index.login({
        provider: "weixin",
        success(res) {
          resolve(res.code);
        },
        fail() {
          reject("faily get wxcode");
        }
      });
    });
  }
}
exports.UserLoginClass = UserLoginClass;
//# sourceMappingURL=login.js.map
