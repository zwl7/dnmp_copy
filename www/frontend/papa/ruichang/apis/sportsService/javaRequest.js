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
const core_config = require("../../core/config.js");
const utils_token = require("../../utils/token.js");
const utils_thirdPartUtils_md5 = require("../../utils/thirdPartUtils/md5.js");
let isRefreshing = true;
let subscribers = [];
let loginCount = 0;
function onAccessTokenFetched() {
  console.log("----回调函数", subscribers);
  subscribers.forEach((callback) => {
    callback();
  });
  subscribers = [];
}
function addSubscriber(callback) {
  subscribers.push(callback);
}
common_vendor.index.$on("GLOBAL_SAVETOKEN", () => {
  console.log("----GLOBAL_SAVETOKEN");
  onAccessTokenFetched();
});
function getUrl(url) {
  let reg = new RegExp("http");
  let flag = reg.test(url);
  if (flag) {
    return url;
  } else {
    return core_config.config.baseUrl + url;
  }
}
function request() {
  return __async(this, arguments, function* ({ url, data = {}, header, callback = "", method = "POST" } = {}) {
    let isLogin = data.is_login === 1;
    let token = "";
    try {
      token = yield utils_token.getToken(true);
    } catch (error) {
    }
    url = getUrl(url);
    var user_info = {};
    try {
      let user = utils_token.getUserInfoKeySync();
      if (user) {
        user_info.latitude = user.latitude;
        user_info.longitude = user.longitude;
      }
    } catch (error) {
      console.error("user_info", error);
    }
    if (data.authorizationToken) {
      token = data.authorizationToken;
      delete data.authorizationToken;
    }
    let request_id = utils_thirdPartUtils_md5.w_md5.hex_md5_32(`${(/* @__PURE__ */ new Date()).getTime()}${Math.random()}${token}`);
    data = Object.assign(
      {
        company_id: core_config.config.company_id,
        business_id: core_config.config.business_id,
        request_id
      },
      user_info,
      data
    );
    if (url.indexOf("pay") != -1 || url.indexOf("wxMenu") != -1) {
      delete data.business_id;
      delete data.company_id;
    }
    return new Promise((resolve, reject) => {
      if (!token) {
        addSubscriber(() => {
          request({
            url,
            data,
            method,
            header,
            callback: resolve
          });
        });
        return;
      }
      common_vendor.index.request({
        url,
        data,
        method,
        header: {
          Authorization: token,
          "content-type": "application/json;charset=utf-8",
          Origin: core_config.config.baseUrl.split("://")[1],
          channel: "wx"
        },
        callback,
        fail(res) {
          reject(res);
        },
        complete: (res) => {
          if (callback && res.data.code === 0 || callback && loginCount > 10) {
            return callback(res.data);
          }
          let statusCode = res.statusCode;
          if (statusCode == 404)
            ;
          else if (statusCode == 401)
            ;
          else if (statusCode == 200) {
            if (isLogin) {
              console.log("---定时器");
              ({
                member_id: res.data.data.account_id,
                business_id: res.data.data.business_id
              });
              utils_token.removeToken(res.data.data.token).then((c) => {
              });
              onAccessTokenFetched();
            }
            if (res.data.code === 40114 || res.data.code === 40101) {
              if (data.city_id) {
                delete data.city_id;
              }
              loginCount += 1;
              addSubscriber(() => {
                request({
                  url,
                  data,
                  method,
                  header,
                  callback: resolve
                });
              });
              clearToken();
              if (isRefreshing) {
                getNewToken().then(() => {
                  onAccessTokenFetched();
                  isRefreshing = true;
                });
              }
              isRefreshing = false;
              return;
            }
            resolve(res.data);
          } else if (statusCode.startsWith("5")) {
            common_vendor.index.showModal({
              content: "服务器报错，请重试！",
              showCancel: false
            });
          }
        }
      });
    });
  });
}
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
const getNewToken = () => {
  return new Promise((resolve, reject) => __async(exports, null, function* () {
    let res = yield getWxCode();
    let { code } = res;
    request({
      url: "/infoPlatform/wxMember/miniLogin",
      data: {
        code,
        company_id: core_config.config.company_id,
        is_login: 1
      }
    }).then((res2) => {
      if (res2.code === 200) {
        utils_token.setToken(res2.data.token).then((c) => {
          console.log("----获取token2", c);
          resolve(res2);
        });
      } else {
        console.log("----获取token3", res2);
        reject(res2);
      }
    });
  }));
};
exports.request = request;
//# sourceMappingURL=javaRequest.js.map
