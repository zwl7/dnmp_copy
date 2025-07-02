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
const apis_sportsService_common = require("../../apis/sportsService/common.js");
const config_sprosServiceMenu = require("../../config/sprosServiceMenu.js");
const useUserStore = common_vendor.defineStore({
  id: "app-user",
  state() {
    return {
      enumMap: {},
      userInfo: {},
      userTodoCenterData: {}
      // 用户待办中心数据
    };
  },
  getters: {
    userTypesGetter() {
      return this.userInfo.authTypes;
    },
    // 健身服务菜单
    sportServiceMenuGetter() {
      return config_sprosServiceMenu.sportServiceMenu.filter((item) => {
        return this.checkMenuAuth(item.auth, item.isShowMenu);
      }) || [];
    },
    // 服务管理菜单
    sportManageMenuGetter() {
      return config_sprosServiceMenu.sportManageMenu.filter((item) => {
        return this.checkMenuAuth(item.auth, item.isShowMenu);
      }) || [];
    },
    // 其他菜单
    sportOtherMenuGetter() {
      return config_sprosServiceMenu.sportOtherMenu.filter((item) => this.checkMenuAuth(item.auth, item.isShowMenu)) || [];
    }
  },
  actions: {
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
    getEnumObjByKey(key, withAll = false) {
      let list = this.enumMap[key];
      let obj = {};
      if (list) {
        list.forEach((e) => {
          obj[e.value] = e.label;
        });
      }
      return obj;
    },
    getEnumListByKey(key, withAll = false) {
      const list = this.enumMap[key];
      if (withAll) {
        return [
          {
            label: "全部",
            value: ""
          },
          ...list
        ];
      }
      return this.enumMap[key];
    },
    getCommonEnumFn() {
      return __async(this, null, function* () {
        let res = yield apis_sportsService_common.getCommonEnum();
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
