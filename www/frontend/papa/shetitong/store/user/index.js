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
const common_vendor = require("../../common/vendor.js");
const utils_token = require("../../utils/token.js");
const api_user_index = require("../../api/user/index.js");
const utils_platform = require("../../utils/platform.js");
const store_user_login = require("./login.js");
const useUserStore = common_vendor.defineStore("app-user", {
  state() {
    return {
      userInfo: {},
      isLogin: utils_token.getIsLogin(),
      // 是否登陆
      token: utils_token.getToken()
      // domain: location.host,
    };
  },
  getters: {
    userId: (state) => {
      var _a;
      return (_a = state.userInfo) == null ? void 0 : _a.userId;
    },
    avatar: (state) => {
      var _a;
      return (_a = state.userInfo) == null ? void 0 : _a.avatar;
    },
    nick_name: (state) => {
      var _a;
      return (_a = state.userInfo) == null ? void 0 : _a.nick_name;
    },
    isAuthInstructor: (state) => state.userInfo.is_auth_instructor,
    resumed: (state) => !!state.resumeInfo.id
  },
  actions: {
    removeToken() {
      this.token = "";
      utils_token.removeToken();
    },
    setToken(token) {
      this.token = token;
      utils_token.setToken(token);
    },
    _setIsLogin(isLogin) {
      this.isLogin = isLogin;
      utils_token.setIsLogin(isLogin);
      common_vendor.index.$emit("GET_USER_INFO", {
        isLogin
      });
    },
    // 获取用户详情
    getUserInfo() {
      return __async(this, arguments, function* (params = {}) {
        let res = {};
        try {
          if (utils_platform.isMp) {
            res = yield api_user_index.getWxMemberInfo(params);
            console.log("获取用户信---息", res);
          } else {
            res = yield api_user_index.getH5MemberInfo(params);
          }
          if (res.code !== 200) {
            throw new Error(res.message);
          }
        } catch (error) {
          console.log("获取用户信息失败", error);
          throw new Error(error);
        }
        if (!(res == null ? void 0 : res.data)) {
          throw new Error("获取用户信息失败, 没有获取到数据");
        }
        const data = res.data;
        let instructor_info = {};
        if (Object.prototype.toString.call(data.instructor_info) == "[object Object]") {
          instructor_info = data.instructor_info;
        }
        let baseInstructor = instructor_info.rs ? instructor_info.rs : {};
        this.userInfo = __spreadProps(__spreadValues(__spreadValues({}, instructor_info), data), {
          instructor_info,
          instructor_id: data.instructor_id,
          userId: data.id,
          avatar: data.avatar,
          avatar_url: data.avatar_url,
          nick_name: baseInstructor.name ? baseInstructor.name : "微信用户",
          tag_ids_arr: baseInstructor.tag_ids_arr ? baseInstructor.tag_ids_arr : [],
          level: baseInstructor.level,
          star_level: baseInstructor.star_level ? baseInstructor.star_level : "",
          level_str: baseInstructor.level_str ? baseInstructor.level_str : "",
          is_auth_instructor: data.instructor_id > 0 ? 1 : 0
        });
        return this.userInfo;
      });
    },
    // 获取临时token
    getTokenNoLogin() {
      return __async(this, null, function* () {
        const userLoginClass = new store_user_login.UserLoginClass();
        const res = yield userLoginClass.getTemporaryToken();
        this.setToken(res.token);
        this._setIsLogin(res.is_login);
        return res.data;
      });
    },
    logout({ silenced = false, redirect = null } = {}) {
      this.removeToken();
      this.userInfo = {};
      this.resumeInfo = {};
      this._setIsLogin(false);
      if (!silenced) {
        common_vendor.index.reLaunch({
          url: "/pages/tabbar/home/index"
        });
      }
    }
  }
});
exports.useUserStore = useUserStore;
//# sourceMappingURL=index.js.map
