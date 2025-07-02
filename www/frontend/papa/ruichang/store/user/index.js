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
const apis_user_index = require("../../apis/user/index.js");
const utils_platform = require("../../utils/platform.js");
const store_user_login = require("./login.js");
const apis_sportsService_common = require("../../apis/sportsService/common.js");
const configs_sprosServiceMenu = require("../../configs/sprosServiceMenu.js");
const useUserStore = common_vendor.defineStore("app-user", {
  state() {
    return {
      userInfo: {},
      isLogin: utils_token.getIsLogin(),
      // 是否登陆
      token: utils_token.getToken(),
      enumMap: {},
      userTodoCenterData: {}
      // 用户待办中心数据
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
    // 是否认证社体指导员
    resumed: (state) => !!state.resumeInfo.id,
    userTypesGetter() {
      return this.userInfo.authTypes;
    },
    // 健身服务菜单
    sportServiceMenuGetter() {
      return configs_sprosServiceMenu.sportServiceMenu.filter((item) => {
        return this.checkMenuAuth(item.auth, item.isShowMenu);
      }) || [];
    },
    // 服务管理菜单
    sportManageMenuGetter() {
      return configs_sprosServiceMenu.sportManageMenu.filter((item) => {
        return this.checkMenuAuth(item.auth, item.isShowMenu);
      }) || [];
    },
    // 其他菜单
    sportOtherMenuGetter() {
      return configs_sprosServiceMenu.sportOtherMenu.filter((item) => this.checkMenuAuth(item.auth, item.isShowMenu)) || [];
    }
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
            res = yield apis_user_index.getWxMemberInfo(params);
            console.log("获取用户信---息", res);
          } else {
            res = yield apis_user_index.getH5MemberInfo(params);
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
          is_auth_instructor: data.instructor_id > 0 ? 1 : 0,
          is_auth: data.is_authenticate,
          is_authenticate: data.is_authenticate
        });
        this.setUserInfo(this.userInfo);
        getApp().globalData.userInfo = this.userInfo;
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
    },
    // 获取用户待办中心数据
    getUserTodoCenterData() {
      return __async(this, null, function* () {
        const res = yield apis_sportsService_common.getToDoData({});
        if (res.code === 0) {
          if (Object.prototype.toString.call(res.data) === "[object Object]") {
            let obj = {};
            Object.keys(res.data).forEach((key) => {
              obj[key] = res.data[key] > 99 ? "99+" : res.data[key];
            });
            this.userTodoCenterData = obj;
          }
        }
      });
    },
    // 枚举逻辑
    setUserInfo(userData) {
      var _a;
      console.log({ userData });
      const map = {
        999: "platformManager",
        // 1平台管理员
        1: "orgManager",
        // 2.组织管理员
        2: "siteManager",
        // 3.站点管理员
        998: "sprotsTalent"
        // 4.体育人才
      };
      userData.authTypes = (_a = userData.auth) == null ? void 0 : _a.map((item) => map[item.type]).filter((item) => item);
      this.userInfo = userData;
    },
    checkMenuAuth(authList, isShowMenu = true) {
      if (!isShowMenu)
        return false;
      if (!Array.isArray(authList) || authList.length == 0)
        return true;
      let flag = false;
      if (this.userInfo.authTypes && this.userInfo.authTypes.length > 0) {
        authList.forEach((item) => {
          if (this.userInfo.authTypes.includes(item)) {
            flag = true;
          }
        });
      }
      return flag;
    },
    // 枚举逻辑
    setEnumMap(value) {
      this.enumMap = value;
    },
    getEnumObjByKey(key) {
      let list = this.enumMap[key];
      let obj = {};
      if (list) {
        list.forEach((e) => {
          obj[e.value] = e.label;
        });
      }
      return obj;
    },
    getEnumListByKey(key) {
      return this.enumMap[key];
    },
    getCommonEnumFn() {
      return __async(this, null, function* () {
        console.log("获取枚举");
        let res = yield apis_sportsService_common.getCommonEnum();
        console.log("获取枚举", { res });
        if (res.code != 0) {
          return console.error(res);
        }
        let enumMapCopy = {};
        res.data.map((e) => {
          let list = e.enumVal.map((c) => {
            return {
              label: c.desc,
              value: c.value
            };
          });
          enumMapCopy[e.key] = list;
        });
        console.log({ enumMapCopy });
        this.setEnumMap(enumMapCopy);
        return enumMapCopy;
      });
    }
  }
});
exports.useUserStore = useUserStore;
//# sourceMappingURL=index.js.map
