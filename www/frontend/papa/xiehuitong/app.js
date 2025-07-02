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
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const core_config = require("./core/config.js");
const apis_login = require("./apis/login.js");
const utils_stroageUtils_token = require("./utils/stroageUtils/token.js");
const apis_insureModule = require("./apis/insureModule.js");
const store_app_index = require("./store/app/index.js");
const utils_enum_dict = require("./utils/enum/dict.js");
const core_appMount = require("./core/appMount.js");
const store_index = require("./store/index.js");
const utils_logUtils_prettyLog = require("./utils/logUtils/prettyLog.js");
if (!Math) {
  "./pages/tabbar/home/home.js";
  "./pages/matchIndex/matchIndex.js";
  "./pages/tabbar/mine/mine.js";
  "./pages/associationList/associationList.js";
  "./pages/tourList/tourList.js";
  "./pages/tourDetail/tourDetail.js";
  "./pages/newsList/newsList.js";
  "./pages/newsDetail/newsDetail.js";
  "./pages/yunLesson/yunLesson.js";
  "./pages/sportsTraining/sportsTraining.js";
  "./pages/personalDetail/personalDetail.js";
  "./pages/myCollect/myCollect.js";
  "./pages/stadiumOrder/stadiumOrder.js";
  "./pages/search/search.js";
  "./pages/sportCodeRights/sportCodeRights.js";
  "./pages/orderVoucher/orderVoucher.js";
  "./pages/stadiumApplyForm/stadiumApplyForm.js";
  "./pages/login/login.js";
  "./pages/agreement/agreement.js";
  "./pages/privacy/privacy.js";
  "./pages/notice/notice.js";
  "./pages/noticeDetail/noticeDetail.js";
  "./pages/webView/webView.js";
  "./pages/videoDetail/videoDetail.js";
  "./pages/siteDetail/siteDetail.js";
  "./pages/stadiumOrderDetail/stadiumOrderDetail.js";
  "./pages/sportTalent/sportTalent.js";
  "./pages/sportTalentDetail/sportTalentDetail.js";
  "./pages/enterGuide/enterGuide.js";
  "./pages/sportsTrainingDetail/sportsTrainingDetail.js";
  "./pages/orderCenter/orderCenter.js";
  "./pages/orderCenter/shopOrderCenter.js";
  "./pages/paySuccess/paySuccess.js";
  "./pages/register/register.js";
  "./pages/demo/demo.js";
  "./pages/coachDetail/coachDetail.js";
  "./pages/more/more.js";
  "./pages/feedBack/feedBack.js";
  "./pages/webviewDownload/index.js";
  "./pages/newsList/recommend.js";
  "./pages/eventBidding/eventBidding.js";
  "./pages/eventBiddingDetail/eventBiddingDetail.js";
  "./pages/applyHoldEvent/applyHoldEvent.js";
  "./pages/evenApply/evenApply.js";
  "./pages/applyBidEvent/applyBidEvent.js";
  "./pages/bidEventDetail/bidEventDetail.js";
  "./pages/applyEventResult/applyEventResult.js";
  "./pagesSub/votePart/vote/vote.js";
  "./pagesSub/votePart/voteDetail/voteDetail.js";
  "./pagesSub/votePart/voteOptionDetail/voteOptionDetail.js";
  "./pagesSub/membershipService/associationAbout/associationAbout.js";
  "./pagesSub/membershipService/applyEntrance/applyEntrance.js";
  "./pagesSub/membershipService/memberApplyForm/memberApplyForm.js";
  "./pagesSub/membershipService/memberApplyResult/memberApplyResult.js";
  "./pagesSub/membershipService/serviceAgreement/serviceAgreement.js";
  "./pagesSub/membershipService/privacyAgreement/privacyAgreement.js";
  "./pagesSub/fitnessReserve/fitnessReserve/index.js";
  "./pagesSub/fitnessReserve/reserveDetail/index.js";
  "./pagesSub/fitnessReserve/reserveTime/index.js";
  "./pagesSub/fitnessReserve/vouncher/index.js";
  "./pagesSub/fitnessReserve/bodyResult/index.js";
  "./pagesSub/fitnessReserve/applyVoucher/applyVoucher.js";
  "./pagesSub/fitnessReserve/activityApplyResult/activityApplyResult.js";
  "./pages/bookingVenue/stadiumDetail/stadiumDetail.js";
  "./pages/bookingVenue/stadiumOrder/stadiumOrder.js";
  "./pages/matchPart/detail/detail.js";
  "./pages/matchPart/score/score.js";
  "./pages/matchPart/mien/mien.js";
  "./pages/matchPart/applyPage/applyPage.js";
  "./pages/matchPart/commonTeamAdd/commonTeamAdd.js";
  "./pages/matchPart/teamDetail/teamDetail.js";
  "./pages/matchPart/myMatchList/myMatchList.js";
  "./pages/matchPart/myMatchDetail/myMatchDetail.js";
  "./pages/matchPart/qrcode/qrcode.js";
  "./pages/matchPart/commonTeam/commonTeam.js";
  "./pages/matchPart/commonUser/commonUser.js";
  "./pages/matchPart/commonUserAdd/commonUserAdd.js";
  "./pages/matchPart/commonUserEdit/commonUserEdit.js";
  "./pages/matchPart/commonTeamEdit/commonTeamEdit.js";
  "./pages/matchPart/userApply/userApply.js";
  "./pages/matchPart/teamApply/teamApply.js";
  "./pages/matchPart/matchCalendar/matchCalendar.js";
  "./pages/matchPart/matchCalendar/demo.js";
  "./pages/matchPart/applyResult/applyResult.js";
  "./pages/matchPart/commonUserDetail/commonUserDetail.js";
  "./pages/matchPart/commonTeamDetail/commonTeamDetail.js";
  "./pages/talentApprovePart/entry/entry.js";
  "./pages/talentApprovePart/applyFormEdit/applyForm.js";
  "./pages/talentApprovePart/applyForm/applyForm.js";
  "./pages/talentApprovePart/talentIndex/talentIndex.js";
  "./pages/talentApprovePart/applySuccess/applySuccess.js";
  "./pages/talentApprovePart/approveList/approveList.js";
  "./pages/talentApprovePart/applyFormDetail/applyFormDetail.js";
  "./pages/talentApprovePart/talentDetail/talentDetail.js";
}
const _sfc_main = {
  globalData: {
    isAuth: false,
    latitude: 0,
    //用户选的后的经纬度
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
    noticeShowPopup: false,
    loginJumpPath: "",
    isInFriendCircle: false,
    //是否分享在朋友圈
    company_id: "",
    miniProgramInsureParams: {}
    //保险购买的参数
  },
  onLaunch: function(e) {
    const appStore = store_app_index.useAppStore();
    appStore.initGlobalConfig();
    appStore.colorThemeChange();
    appStore.getTabbarList();
    if (e.scene === 1154) {
      this.globalData.isInFriendCircle = true;
    }
    this.getNavBarInfo();
    this.setBaseConfig();
    this.handleLogin();
    this.parseUserInfo();
    this.autoUpdate();
  },
  onShow: function(options) {
    return __async(this, null, function* () {
      if (options.referrerInfo && options.referrerInfo.extraData && options.referrerInfo.extraData.code == 1) {
        if (this.globalData.miniProgramInsureParams) {
          let params = __spreadProps(__spreadValues({}, this.globalData.miniProgramInsureParams), { symbol: 1 });
          yield apis_insureModule.saveWxInsureModule(params);
        }
      }
    });
  },
  onHide: function() {
    console.log("App Hide");
  },
  methods: {
    // 基础设置
    setBaseConfig() {
      common_vendor.index.$log.info("baseConfig", core_config.config);
      this.globalData.company_id = core_config.config.company_id;
    },
    // 菜单按钮的布局位置信息
    getNavBarInfo() {
      const systemInfo = common_vendor.index.getSystemInfoSync();
      if (systemInfo.system && systemInfo.system.indexOf("Android") > -1) {
        this.globalData.isIos = false;
      } else {
        this.globalData.isIos = true;
      }
      const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
      this.globalData.navBarHeight = systemInfo.statusBarHeight + menuButtonInfo.height + 10;
      this.globalData.menuWidth = menuButtonInfo.width;
      this.globalData.menuTop = menuButtonInfo.top;
      this.globalData.menuHeight = menuButtonInfo.height;
      this.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
    },
    // 检测更新
    autoUpdate() {
      if (common_vendor.index.canIUse("getUpdateManager")) {
        let manager = common_vendor.index.getUpdateManager();
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
      let loginFunc = apis_login.login;
      if (this.globalData.isInFriendCircle) {
        loginFunc = apis_login.temporaryLogin;
      }
      return new Promise((resolve, reject) => {
        loginFunc().then((res) => {
          if (res.code === 200) {
            this.globalData.is_get_loginInfo = true;
            this.globalData.isAuth = res.data.is_authenticate === -1 ? false : true;
            let userInfo = {
              phone: res.data.phone,
              nick_name: res.data.nick_name ? res.data.nick_name : res.data.phone.slice(0, 3) + "****" + res.data.phone.slice(7, 11),
              name: res.data.name,
              avatar_url: Object.prototype.toString.call(res.data.avatar_url) === "[object Array]" ? "" : res.data.avatar_url,
              is_auth: res.data.is_authenticate,
              account_id: res.data.account_id
            };
            this.globalData.business_id = res.data.business_id;
            this.globalData.userInfo = userInfo;
            this.globalData.is_login = true;
            this.globalData.token = res.data.token;
            utils_stroageUtils_token.setToken(res.data.token, true).then((c) => {
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
      utils_stroageUtils_token.getUserInfoKey().then((res) => {
        if (res) {
          this.globalData.city = res.city_name;
          this.globalData.city_id = res.city_id;
          this.globalData.latitude = res.lat;
          this.globalData.longitude = res.lng;
        }
      });
    },
    //根据用户登录状态进行判断
    judgeIsAuth(needReal = false) {
      return new Promise((resolve) => __async(this, null, function* () {
        let isAuth = -1;
        if (this.globalData.is_login) {
          isAuth = this.globalData.userInfo.is_auth;
        } else {
          yield this.handleLogin();
          isAuth = this.globalData.userInfo.is_auth;
        }
        if (!needReal && isAuth < 0 || needReal && isAuth < 1) {
          isAuth = parseInt(isAuth, 10);
          let title = "请先进行登录";
          let content = "";
          let cancelText = "取消";
          let confirmText = "去登录";
          let url = "/pages/login/login";
          if (isAuth == 0) {
            title = "实名认证";
            content = "为了您更方便的使用，请您先进行实名认证哦～";
            cancelText = "再想想";
            confirmText = "去认证";
            url = "/pages/register/register";
          }
          let _this = this;
          let pages = getCurrentPages();
          let currentPage = pages[pages.length - 1];
          let fullPath = currentPage.$page.fullPath;
          common_vendor.index.showModal({
            cancelText,
            confirmText,
            title,
            content,
            success(e) {
              if (e.confirm) {
                _this.globalData.loginJumpPath = fullPath;
                common_vendor.index.navigateTo({
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
      }));
    },
    //根据用户登录状态
    judgeIsLogin(options = { needReal: false }) {
      console.log("-------judgeIsLogin-----", options);
      let { needReal, cancelText, backHome, noModel } = options;
      return new Promise((resolve) => __async(this, null, function* () {
        let isAuth = -1;
        if (this.globalData.is_login) {
          isAuth = this.globalData.userInfo.is_auth;
        } else {
          yield this.handleLogin();
          isAuth = this.globalData.userInfo.is_auth;
        }
        if (!needReal && isAuth == -1) {
          isAuth = parseInt(isAuth, 10);
          let title = "请先进行登录";
          let content = "";
          cancelText = cancelText ? cancelText : "取消";
          let confirmText = "去登录";
          let url = "/pages/login/login";
          let _this = this;
          let pages = getCurrentPages();
          let currentPage = pages[pages.length - 1];
          let fullPath = decodeURIComponent(currentPage.$page.fullPath);
          if (noModel) {
            _this.globalData.loginJumpPath = fullPath;
            resolve(false);
            return;
          }
          common_vendor.index.showModal({
            cancelText,
            confirmText,
            title,
            content,
            success(e) {
              if (e.confirm) {
                _this.globalData.loginJumpPath = fullPath;
                common_vendor.index.redirectTo({
                  url
                });
              }
              if (e.cancel) {
                if (backHome) {
                  common_vendor.index.reLaunch({
                    url: "/pages/tabbar/home/home"
                  });
                }
                console.log("取消");
              }
              resolve(false);
            },
            fail(err) {
              console.log(err);
            }
          });
          return;
        }
        resolve(true);
      }));
    },
    // 判断是否分享在朋友圈
    judgeIsInFriendCircle() {
      if (this.globalData.isInFriendCircle) {
        common_vendor.index.showToast({
          icon: "none",
          title: "请前往小程序使用完整服务"
        });
        return false;
      } else {
        return true;
      }
    },
    // 获取当前位置
    getLocation() {
      let _this = this;
      const app = getApp();
      try {
        common_vendor.index.getFuzzyLocation({
          type: "wgs84",
          success(res) {
            console.log("-------getFuzzyLocation", res);
            let latitude = parseFloat(Number(res.latitude).toFixed(6));
            let longitude = parseFloat(Number(res.longitude).toFixed(6));
            console.log("-------getFuzzyLocation2", latitude, longitude);
            app.globalData.latitude = latitude;
            app.globalData.longitude = longitude;
            app.globalData.user_latitude = latitude;
            app.globalData.user_longitude = longitude;
            app.globalData.is_get_location = true;
            _this.setUserInfoMethod(latitude, longitude);
          },
          fail(error) {
            console.log("首页getFuzzyLocation失败,", error);
            if (app.globalData.latitude && app.globalData.longitude) {
              _this.getData();
            } else {
              common_vendor.index.getSetting({
                success(res) {
                  if ("undefined" == res.authSetting["scope.userLocation"] || res.authSetting["scope.userLocation"]) {
                    console.log("系统没有给定位权限=====================", res);
                  } else {
                    console.log("用户拒绝了授权=====================", res);
                    common_vendor.index.showModal({
                      title: "提示",
                      content: "若点击不授权，将无法使用位置功能",
                      cancelText: "不授权",
                      cancelColor: "#999",
                      confirmText: "授权",
                      confirmColor: "#f94218",
                      success(res2) {
                        console.log(res2);
                        if (res2.confirm) {
                          common_vendor.index.openSetting({
                            success(res3) {
                              console.log(res3.authSetting);
                            }
                          });
                        } else if (res2.cancel) {
                          console.log("用户点击不授权");
                        }
                      }
                    });
                  }
                }
              });
            }
          }
        });
      } catch (error) {
        console.log("定位授权", error);
      }
    },
    setUserInfoMethod(latitude, longitude) {
      utils_stroageUtils_token.getUserInfoKey().then((res) => {
        let params = {
          latitude,
          longitude
        };
        utils_stroageUtils_token.setUserInfoKey(params);
      });
    }
  }
};
const empty = () => "./components/empty.js";
const loadMore = () => "./components/loadMore.js";
common_vendor.index.$log = utils_logUtils_prettyLog.log;
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.config.globalProperties.$dict = utils_enum_dict.dict;
  app.component("Empty", empty);
  app.component("LoadMore", loadMore);
  app.use(common_vendor.uvUi);
  app.use(store_index.store);
  core_appMount.install(app);
  app.component("layout-default-uni", Layout_Default_Uni);
  app.component("layout-tabbar-uni", Layout_Tabbar_Uni);
  return {
    app
  };
}
const Layout_Default_Uni = () => "./layouts/default.js";
const Layout_Tabbar_Uni = () => "./layouts/tabbar.js";
createApp().app.mount("#app");
exports.createApp = createApp;
