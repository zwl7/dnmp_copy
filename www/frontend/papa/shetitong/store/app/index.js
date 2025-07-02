"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
function getTabbarIcon(icon) {
  return `https://cdn-static.papa.com.cn/social/${icon}.png`;
}
const useAppStore = common_vendor.defineStore({
  id: "app",
  state() {
    return {
      appName: "",
      themeConfig: {
        // 瑞昌
        "hubei-primary": "#409EFF",
        "hubei-primary-dark": "#3998f8",
        "hubei-primary-disabled": "#ECF5FF",
        "hubei-primary-light": "#D9ECFF"
      },
      // themeConfig: {
      //   //万载
      //   'hubei-primary': '#00CD97',
      //   'hubei-primary-dark': '#00b484',
      //   'hubei-primary-disabled': '#ECF5FF',
      //   'hubei-primary-light': '#EEFCF8',
      // },
      themeType: "1",
      //  1 瑞昌  2 万载
      siteInfo: {},
      systemInfo: {},
      menuInfo: {},
      themeIconMap: {
        1: {
          LIKE_ICON: common_assets.praiseFill,
          //点赞图标
          COMMENT_ICON: common_assets.commentFill,
          //评论图标
          INSTRUCT_BAG_IMG: "https://cdn-static.papa.com.cn/social/instruct_bg_2.jpg",
          DESC_ICON: "https://cdn-static.papa.com.cn/social/des_icon.png",
          LOGIN_PAGE_AVATR: "https://cdn-static.papa.com.cn/social/login_avatar.png",
          //登录页头像
          CALENDAR_ICON: "https://cdn-static.papa.com.cn/social/calendar-icon.png",
          //日历图标
          SUCCESS_ICON: "https://cdn-static.papa.com.cn/social/result-success.png"
          //成功图标
        },
        2: {
          LIKE_ICON: getTabbarIcon("praise-fill-2"),
          //点赞图标
          COMMENT_ICON: getTabbarIcon("desc"),
          //评论图标
          INSTRUCT_BAG_IMG: "https://cdn-static.papa.com.cn/social/instruct_bg_2.jpg",
          DESC_ICON: "https://cdn-static.papa.com.cn/social/desc.png",
          LOGIN_PAGE_AVATR: "https://cdn-static.papa.com.cn/social/login_avatar-2.png",
          //登录页头像
          CALENDAR_ICON: "https://cdn-static.papa.com.cn/social/calendar-icon-2.png",
          //日历图标
          SUCCESS_ICON: "https://cdn-static.papa.com.cn/social/result-success-2.png"
          //成功图标
        }
      }
    };
  },
  getters: {
    currentThemeIconByType: (state) => {
      return state.themeIconMap[state.themeType];
    }
  },
  actions: {
    getAppBaseInfo() {
      return new Promise((resolve) => {
        common_vendor.index.getAppBaseInfo({
          success: (res) => {
            this.appName = res.appName;
          }
        });
      });
    },
    getSystemInfo() {
      return new Promise((resolve) => {
        common_vendor.index.getSystemInfo({
          success: (res) => {
            this.systemInfo = res;
            const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
            this.menuInfo.navBarHeight = res.statusBarHeight + menuButtonInfo.height + 10;
            this.menuInfo.menuWidth = menuButtonInfo.width;
            this.menuInfo.menuTop = menuButtonInfo.top;
            this.menuInfo.menuHeight = menuButtonInfo.height;
            this.menuInfo.menuRight = res.screenWidth - menuButtonInfo.right;
            resolve(res);
          }
        });
      });
    },
    setThemeType(themeType) {
      this.themeType = themeType;
      let themeTypeObj = {
        1: {
          "hubei-primary": "#409EFF",
          "hubei-primary-dark": "#3998f8",
          "hubei-primary-disabled": "#ECF5FF",
          "hubei-primary-light": "#D9ECFF"
        },
        2: {
          "hubei-primary": "#00CD97",
          "hubei-primary-dark": "#00b484",
          "hubei-primary-disabled": "#ECF5FF",
          "hubei-primary-light": "#EEFCF8"
        }
      };
      this.themeConfig = themeTypeObj[this.themeType];
    }
  }
});
exports.useAppStore = useAppStore;
//# sourceMappingURL=index.js.map
