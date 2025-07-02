"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
require("../store/app/index.js");
const store_user_index = require("../store/user/index.js");
require("../store/dict/index.js");
let isRefreshing = true;
let subscribers = [];
let loginCount = 0;
function onAccessTokenFetched() {
  subscribers.forEach((callback) => {
    callback();
  });
  subscribers = [];
}
function addSubscriber(callback) {
  subscribers.push(callback);
}
function refreshToken() {
  const userStore = store_user_index.useUserStore();
  if (isRefreshing) {
    userStore.getTokenNoLogin().then(() => {
      onAccessTokenFetched();
      isRefreshing = true;
      console.log("----GLOBAL_SAVETOKEN", {});
      common_vendor.index.$emit("GLOBAL_SAVETOKEN", {});
    });
  }
  isRefreshing = false;
}
const http = (options, callback = null) => {
  const userStore = store_user_index.useUserStore();
  return new Promise((resolve, reject) => __async(exports, null, function* () {
    if (!userStore.token) {
      addSubscriber(() => {
        http(options, resolve);
      });
      refreshToken();
      return;
    }
    common_vendor.index.request(__spreadProps(__spreadValues({}, options), {
      dataType: "json",
      success(res) {
        if (callback && res.data.code === 200 || callback && loginCount > 10) {
          return callback(res.data);
        }
        if (res.statusCode >= 200 && res.statusCode < 300) {
          if (res.data.code === 40114 || res.data.code === 40101) {
            loginCount += 1;
            addSubscriber(() => {
              http(options, resolve);
            });
            userStore.removeToken();
            refreshToken();
            return;
          }
          resolve(res.data);
        } else {
          !options.hideErrorToast && common_vendor.index.showToast({
            icon: "none",
            title: res.data.msg || "请求错误"
          });
          reject(res);
        }
      },
      fail(err) {
        common_vendor.index.showToast({
          icon: "none",
          title: "网络错误，换个网络试试"
        });
        reject(err);
      }
    }));
  }));
};
const loginHttp = (options, callback = null) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request(__spreadProps(__spreadValues({}, options), {
      dataType: "json",
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data);
        } else {
          !options.hideErrorToast && common_vendor.index.showToast({
            icon: "none",
            title: res.data.msg || "请求错误"
          });
          reject(res);
        }
      },
      fail(err) {
        common_vendor.index.showToast({
          icon: "none",
          title: "网络错误，换个网络试试"
        });
        reject(err);
      }
    }));
  });
};
const httpGet = (url, query) => {
  return http({
    url,
    query,
    method: "GET"
  });
};
const httpPost = (url, data, query) => {
  return http({
    url,
    query,
    data,
    method: "POST"
  });
};
const request = ({ url, data, method: any = "POST" }) => {
  return http({
    url,
    data,
    method: "POST"
  });
};
http.get = httpGet;
http.post = httpPost;
exports.loginHttp = loginHttp;
exports.request = request;
//# sourceMappingURL=http.js.map
