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
const store_app_index = require("./store/app/index.js");
const store_user_index = require("./store/user/index.js");
require("./store/dict/index.js");
const store_index = require("./store/index.js");
const interceptors_route = require("./interceptors/route.js");
const interceptors_request = require("./interceptors/request.js");
const interceptors_prototype = require("./interceptors/prototype.js");
const api_index = require("./api/index.js");
const utils_modals_uniapp = require("./utils/modals/uniapp.js");
const utils_showDictLabel = require("./utils/showDictLabel.js");
const utils_dict = require("./utils/dict.js");
const utils_assets_local = require("./utils/assets/local.js");
if (!Math) {
  "./pages/tabbar/home/index.js";
  "./pages/tabbar/commonPage/index.js";
  "./pages/tabbar/train/index.js";
  "./pages/tabbar/personal/index.js";
  "./pages/tabbar/train/listByType.js";
  "./pages/instructorSite/index.js";
  "./pages/instructor/index.js";
  "./pages/tabbar/dynamic/index.js";
  "./pages/personalDetail/index.js";
  "./pages/praise/index.js";
  "./pages/trainRecord/index.js";
  "./pages/login/index.js";
  "./pages/errors/404/index.js";
  "./pages-sub/activityList/index.js";
  "./pages-sub/activityDetail/index.js";
  "./pages-sub/contact/index.js";
  "./pages-sub/middleware/index.js";
  "./pages-sub/notice/detail.js";
  "./pages-sub/notice/index.js";
  "./pages-sub/realname/detail.js";
  "./pages-sub/realname/index.js";
  "./pages-sub/releaseDynamic/index.js";
  "./pages-sub/selectActivetyProject/index.js";
  "./pages-sub/selectActivitySite/index.js";
  "./pages-sub/trainApply/detail.js";
  "./pages-sub/trainApply/index.js";
  "./pages-sub/trainDetail/index.js";
  "./pages-sub/webview/index.js";
  "./pages-sub/statement/index.js";
  "./pages-sub/instructorDetail/index.js";
  "./pages-sub/applyResult/success.js";
  "./pages-sub/starRatingRecord/index.js";
  "./pages-sub/levelRatingRecord/index.js";
  "./pages-sub/instructorSite/index.js";
  "./pages-sub/instructorSite/detail.js";
  "./pages-sub/instructorSite/my.js";
  "./pages-sub/instructorSite/select.js";
  "./pages-sub/demo/index.js";
}
const __default__ = {
  globalData: {
    demo: 1
  },
  onLaunch() {
    this.autoUpdate();
  },
  methods: {
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
      } else {
        common_vendor.index.showModal({
          title: "温馨提示",
          concent: "当前微信版本过低，无法使用该功能，请升级至最新微信版本后重试。"
        });
      }
    },
    //根据用户登录状态进行判断 needReal true的话需要认证指导员
    judgeIsAuth(options = {
      needReal: false
    }) {
      return new Promise((resolve) => __async(this, null, function* () {
        const userStore = store_user_index.useUserStore();
        const isLogin = userStore.isLogin;
        const isAuthInstructor = userStore.isAuthInstructor;
        const { needReal } = options;
        if (!needReal && !isLogin) {
          common_vendor.index.showModal({
            title: "提示",
            content: "请先进行登录",
            showCancel: true,
            success: ({ confirm, cancel }) => {
              if (confirm) {
                common_vendor.index.navigateTo({
                  url: "/pages/login/index"
                });
              }
            }
          });
          resolve(false);
          return;
        }
        if (needReal && !isAuthInstructor) {
          if (!isLogin) {
            common_vendor.index.showModal({
              title: "提示",
              content: "请先进行登录",
              showCancel: true,
              success: ({ confirm, cancel }) => {
                if (confirm) {
                  common_vendor.index.navigateTo({
                    url: "/pages/login/index"
                  });
                }
              }
            });
            resolve(false);
            return;
          }
          common_vendor.index.showModal({
            title: "提示",
            content: "请先认证社体指导员",
            showCancel: true,
            success: ({ confirm, cancel }) => {
              if (confirm) {
                common_vendor.index.navigateTo({ url: "/pages-sub/realname/index" });
              }
            }
          });
          resolve(false);
          return;
        }
        resolve(true);
      }));
    }
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __name: "App",
  setup(__props) {
    let isLetUserInfo = false;
    common_vendor.onLaunch(() => {
      const userStore = store_user_index.useUserStore();
      if (userStore.isLogin && !isLetUserInfo) {
        userStore.getUserInfo();
        isLetUserInfo = true;
      }
      common_vendor.index.$on("GET_USER_INFO", (data) => {
        if (data.isLogin)
          userStore.getUserInfo();
        isLetUserInfo = true;
      });
      const appStore = store_app_index.useAppStore();
      appStore.getSystemInfo();
      appStore.getAppBaseInfo();
      setThemeTypeByAppId();
    });
    const setThemeTypeByAppId = () => {
      const appId = common_vendor.index.getAccountInfoSync().miniProgram.appId;
      const appStore = store_app_index.useAppStore();
      if (appId === "wxfe01aae4d0ffdb44") {
        appStore.setThemeType("1");
      }
      if (appId === "wx84a3e7594546d208") {
        appStore.setThemeType("2");
      }
    };
    common_vendor.onShow(() => {
    });
    common_vendor.onHide(() => {
      console.log("App Hide");
    });
    return () => {
    };
  }
}));
const ViaIcon = () => "./icons/components/ViaIcon/index.js";
const empty = () => "./components/empty.js";
const bottomButton = () => "./components/bottomButton.js";
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(store_index.store);
  app.use(interceptors_route.routeInterceptor);
  app.use(interceptors_request.requestInterceptor);
  app.use(interceptors_prototype.prototypeInterceptor);
  app.use(common_vendor.uvUi);
  app.use(api_index.api);
  app.component("ViaIcon", ViaIcon);
  app.config.globalProperties.$dialog = utils_modals_uniapp.useDialog;
  app.config.globalProperties.$toast = utils_modals_uniapp.useToast;
  app.config.globalProperties.$loading = utils_modals_uniapp.useLoading;
  app.config.globalProperties.$jumpToPath = utils_modals_uniapp.jumpToPath;
  app.config.globalProperties.$showDictLabel = utils_showDictLabel._showDictLabel;
  app.config.globalProperties.$dict = utils_dict.dict;
  common_vendor.dayjs.extend(common_vendor.isBetween);
  common_vendor.dayjs.extend(common_vendor.duration);
  app.config.globalProperties.$dayjs = common_vendor.dayjs;
  app.component("empty", empty);
  app.component("bottomButton", bottomButton);
  app.config.globalProperties.$assets = utils_assets_local.useAssets;
  app.component("layout-default-uni", Layout_Default_Uni);
  app.component("layout-tabbar-uni", Layout_Tabbar_Uni);
  return {
    app,
    Pinia: store_index.store.Pinia
  };
}
const Layout_Default_Uni = () => "./layouts/default.js";
const Layout_Tabbar_Uni = () => "./layouts/tabbar.js";
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=app.js.map
