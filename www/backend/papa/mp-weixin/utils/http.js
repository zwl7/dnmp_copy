"use strict";
const common_vendor = require("../common/vendor.js");
const core_config = require("../core/config.js");
const utils_token = require("./token.js");
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
function getUrl(url) {
  let reg = new RegExp("http");
  let flag = reg.test(url);
  if (flag) {
    return url;
  } else {
    return core_config.config.baseUrl + url;
  }
}
async function request({
  url,
  data = {},
  header,
  callback = ""
} = {}) {
  let method = "POST";
  let isLogin = data.is_login === 1;
  let token = "";
  try {
    token = await utils_token.getToken(true);
  } catch (error) {
  }
  url = getUrl(url);
  var user_info = {};
  try {
    let user = utils_token.getUserInfoKeySync();
    if (user) {
      user_info.city_id = user.city_id;
    }
  } catch (error) {
    console.error("user_info", error);
  }
  data = Object.assign({
    company_id: core_config.config.company_id
  }, user_info, data);
  return new Promise((resolve, reject) => {
    if (!isLogin && !token) {
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
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        Origin: core_config.config.baseUrl.split("://")[1]
      },
      callback,
      fail(res) {
        reject(res);
      },
      complete: (res) => {
        if (callback && res.data.code === 200 || callback && loginCount > 10) {
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
            utils_token.setToken(res.data.data.token, true).then((c) => {
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
            utils_token.clearToken();
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
  return new Promise(async (resolve, reject) => {
    let res = await getWxCode();
    let {
      code
    } = res;
    request({
      url: "/activityPlatform/wxMember/miniLogin",
      data: {
        code,
        company_id: core_config.config.company_id,
        is_login: 1
      }
    }).then((res2) => {
      if (res2.code === 200) {
        utils_token.setToken(res2.data.token, true).then((c) => {
          console.log("----获取token2", c);
          resolve(res2);
        });
      } else {
        console.log("----获取token3", res2);
        reject(res2);
      }
    });
  });
};
exports.request = request;
