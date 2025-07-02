"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const core_config = require("./core/config.js");
const apis_login = require("./apis/login.js");
const apis_common = require("./apis/common.js");
const utils_token = require("./utils/token.js");
require("./uni.adaptor.js");
const core_appMount = require("./core/appMount.js");
require("./utils/http.js");
require("./utils/storageUtil.js");
if (!Math) {
  "./pages/tabbar/home/index.js";
  "./pages/tabbar/stadium/index.js";
  "./pages/tabbar/mine/index.js";
  "./pages/notice/notice.js";
  "./pages/noticeList/noticeList.js";
  "./pages/webView/webView.js";
  "./pages/newsList/newsList.js";
  "./pages/newsDetail/newsDetail.js";
  "./pages/activityCalendar/activityCalendar.js";
  "./pages/demo/demo.js";
  "./pages/map/map.js";
  "./pages/activityAll/activityAll.js";
  "./pages/activityDetail/activityDetail.js";
  "./pages/activityJoinMember/activityJoinMember.js";
  "./pages/activityApply/activityApply.js";
  "./pages/stadiumDetail/stadiumDetail.js";
  "./pages/myRegistration/myRegistration.js";
  "./pages/signUpDetail/signUpDetail.js";
  "./pages/sportCode/sportCode.js";
  "./pages/orderList/orderList.js";
  "./pages/orderDetail/orderDetail.js";
  "./pages/orderCenter/orderCenter.js";
  "./pages/myFeedback/myFeedback.js";
  "./pages/mineSetting/mineSetting.js";
  "./pages/myCollections/myCollections.js";
  "./pages/associationAbout/associationAbout.js";
  "./pages/associationList/associationList.js";
  "./pages/associationDetail/associationDetail.js";
  "./pages/login/login.js";
  "./pages/register/register.js";
  "./pages/faceWebview/faceWebview.js";
  "./pages/search/search.js";
  "./pages/areaSearch/areaSearch.js";
  "./pages/tabbar/sportEvent/sportEvent.js";
  "./pages/signUpResult/signUpResult.js";
  "./pages/loginInfo/loginInfo.js";
  "./pages/agreement/agreement.js";
  "./pages/privacy/privacy.js";
  "./pages/areaSearchNew/areaSearchNew.js";
}
const _sfc_main = {
  globalData: {
    isAuth: false,
    latitude: 0,
    //用户选择的后的经纬度
    longitude: 0,
    user_latitude: 0,
    //用户当前的经纬度 通过接口获取
    user_longitude: 0,
    city: "",
    city_id: "0",
    curLongitude: 0,
    curLatitude: 0,
    userInfo: {
      phone: "",
      nick_name: "",
      name: "",
      avatar_url: "",
      is_auth: -1
    },
    is_get_loginInfo: false,
    business_id: 0,
    is_login: false,
    token: "",
    companyAreaList: [],
    isIos: false,
    navBarHeight: 0,
    menuTop: 0,
    menuHeight: 0,
    menuRight: 0,
    menuWidth: 0,
    agreeement: "",
    //用户协议
    privacy: "",
    //隐私协议
    stadiumRefresh: false,
    //刷新场馆列表
    mineRefresh: false,
    //刷新我的页面
    eventRefresh: false,
    //刷新赛事
    isShandongPlatform: false
    //是否为山东平台
  },
  onLaunch: function() {
    this.handleLogin();
    this.parseUserInfo();
    this.setBaseConfig();
    this.autoUpdate();
    this.getCompanyArea();
    this.getNavBarInfo();
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  },
  methods: {
    // 基础设置
    setBaseConfig() {
      const env = common_vendor.index.getAccountInfoSync();
      let envVersion = env.miniProgram.envVersion;
      core_config.config.env = envVersion;
      switch (envVersion) {
        case "develop":
          {
            core_config.config.company_id = 445;
            core_config.config.baseUrl = "https://apitest.wesais.cn";
            core_config.config.ppos_wx = "https://app.papa.com.cn/stadiumInfo";
          }
          break;
        case "trial":
          {
            core_config.config.company_id = 445;
            core_config.config.baseUrl = "https://apitest.wesais.cn";
            core_config.config.ppos_wx = "https://app.papa.com.cn/stadiumInfo";
          }
          break;
        case "release":
          {
            core_config.config.company_id = 454;
            core_config.config.baseUrl = "https://api.wesais.com";
            core_config.config.ppos_wx = "https://app.papa.com.cn/stadiumInfo";
          }
          break;
      }
      this.globalData.isShandongPlatform = true;
    },
    // 菜单按钮的布局位置信息
    getNavBarInfo() {
      const systemInfo = common_vendor.index.getSystemInfoSync();
      if (systemInfo.system.indexOf("Android") > -1) {
        this.globalData.isIos = false;
      } else {
        this.globalData.isIos = true;
      }
      const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
      this.globalData.navBarHeight = systemInfo.statusBarHeight + 44;
      this.globalData.menuWidth = menuButtonInfo.width;
      this.globalData.menuTop = menuButtonInfo.top;
      this.globalData.menuHeight = menuButtonInfo.height;
      this.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
      console.log(menuButtonInfo);
    },
    // 检测更新
    autoUpdate() {
      if (common_vendor.index.canIUse("getUpdateManager")) {
        var manager = common_vendor.index.getUpdateManager();
        manager.onCheckForUpdate(function(t) {
          if (t.hasUpdate) {
            manager.onUpdateReady(function() {
              common_vendor.index.showModal({
                title: "更新提示",
                content: "新版本已经准备好，请重启应用",
                showCancel: false,
                success: function(t2) {
                  if (t2.confirm) {
                    manager.applyUpdate();
                    console.log("新版本已经下载好");
                  }
                }
              });
            });
            manager.onUpdateFailed(function() {
              common_vendor.index.showModal({
                title: "已经有新版本了哟~",
                content: "新版本已经上线啦，请您删除当前小程序，重新搜索打开哟",
                showCancel: false,
                success: function(e) {
                }
              });
            });
          }
        });
      } else
        common_vendor.index.showModal({
          title: "温馨提示",
          concent: "当前微信版本过低，无法使用该功能，请升级至最新微信版本后重试。"
        }), console.log("微信版本过低，更新微信");
    },
    // 登录 获取token
    handleLogin() {
      return new Promise((resolve, reject) => {
        apis_login.login().then((res) => {
          if (res.code === 200) {
            this.globalData.is_get_loginInfo = true;
            this.globalData.isAuth = res.data.is_authenticate === -1 ? false : true;
            let userInfo = {
              phone: res.data.phone,
              nick_name: res.data.nick_name,
              name: res.data.name,
              avatar_url: res.data.avatar_url,
              is_auth: res.data.is_authenticate
            };
            this.globalData.business_id = res.data.business_id;
            this.globalData.userInfo = userInfo;
            this.globalData.is_login = true;
            this.globalData.token = res.data.token;
            utils_token.setToken(res.data.token, true).then((c) => {
            });
          } else {
            common_vendor.index.showToast({
              title: res.message,
              icon: "none"
            });
          }
          resolve(res);
        }).catch((error) => {
          console.log("errror", error);
          reject(error);
          common_vendor.index.showToast({
            title: "登录获取token失败",
            icon: "none"
          });
        });
      });
    },
    // 解析用户存储的经纬度信息
    parseUserInfo() {
      utils_token.getUserInfoKey().then((res) => {
        if (res) {
          this.globalData.city = res.city_name;
          this.globalData.city_id = res.city_id;
          this.globalData.latitude = res.lat;
          this.globalData.longitude = res.lng;
        }
      });
    },
    //根据用户登录状态进行判断
    judgeIsAuth() {
      return new Promise(async (resolve) => {
        let isAuth = -1;
        if (this.globalData.is_login) {
          isAuth = this.globalData.userInfo.is_auth;
        } else {
          await this.handleLogin();
          isAuth = this.globalData.userInfo.is_auth;
        }
        if (isAuth < 0) {
          isAuth = parseInt(isAuth, 10);
          const message = "请先进行登录";
          const confirmText = isAuth == -1 ? "去登录" : "去认证";
          const url = "/pages/login/login";
          common_vendor.index.showModal({
            cancelText: "取消",
            confirmText,
            title: message,
            success(e) {
              if (e.confirm) {
                common_vendor.index.redirectTo({
                  url
                });
              }
              if (e.cancel) {
                console.log("取消");
              }
            }
          });
          resolve(false);
          return;
        }
        resolve(true);
      });
    },
    getCompanyArea(type, val) {
      return new Promise(async (resolve) => {
        if (this.globalData.companyAreaList.length > 0) {
          let resolveList = this.globalData.companyAreaList;
          if (type === "select") {
            resolveList = await this.filterCompanyArea(val);
          }
          resolve(resolveList);
          return;
        } else {
          apis_common.getCompanyAreaAll({
            company_area_id: 0,
            level: 3
          }).then(async (res) => {
            if (res.code == 200) {
              if (res.data[0].company_area_id == "37") {
                res.data[0].company_area_id = 0;
                res.data[0].lat = 0;
                res.data[0].lng = 0;
                let list = [res.data[0], ...res.data[0].next];
                this.globalData.companyAreaList = list;
              } else {
                this.globalData.companyAreaList = res.data;
              }
            }
            let resolveList = this.globalData.companyAreaList;
            if (type === "select") {
              resolveList = await this.filterCompanyArea(val);
            }
            resolve(resolveList);
          });
        }
      });
    },
    filterCompanyArea(city_id) {
      if (this.globalData.isShandongPlatform && city_id == 0) {
        city_id = 37;
      }
      return new Promise((resolve) => {
        let params = {
          company_area_id: city_id,
          level: 4
        };
        apis_common.getCompanyAreaAll(params).then((res) => {
          resolve(res.data[0].next);
        }).catch((err) => {
          resolve([]);
        });
      });
    },
    // 监听全局数据
    watchMethods: {},
    watchGlobalData: function(key, methodKey, method) {
      const _this = this;
      let obj = this.globalData;
      let ori = obj[key];
      if (!this.watchMethods[key]) {
        this.watchMethods[key] = [];
      }
      let isExit = false;
      this.watchMethods[key].map((e, index) => {
        if (e.name == method.name) {
          this.watchMethods[key][index] = method;
          isExit = true;
        }
      });
      if (!isExit) {
        this.watchMethods[key].push(method);
      }
      if (ori || ori == "0") {
        const methods = _this.watchMethods[key];
        methods.map((item) => item(ori));
      }
      Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: true,
        set: function(value) {
          this["__" + key] = value;
          const methods = _this.watchMethods[key];
          methods.map((item) => item(value));
        },
        get: function() {
          if (typeof this["__" + key] == "undefined") {
            if (ori) {
              this["__" + key] = JSON.parse(JSON.stringify(ori));
              return ori;
            } else {
              return void 0;
            }
          } else {
            return this["__" + key];
          }
        }
      });
    }
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/gxm/uniapp-shandong/App.vue"]]);
const empty = () => "./components/empty.js";
const skeleton = () => "./components/skeleton.js";
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.component("empty", empty);
  app.component("skeleton", skeleton);
  core_appMount.install(app);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
