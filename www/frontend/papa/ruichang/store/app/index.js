"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_theme = require("../../utils/theme.js");
const utils_storages_saveGlobalStroage = require("../../utils/storages/saveGlobalStroage.js");
const useAppStore = common_vendor.defineStore({
  id: "app",
  state() {
    return {
      appName: "",
      themeConfig: {},
      themeType: "SkyBlue",
      //  1 SkyBlue 天空蓝  2 EcologicalGreen 生态绿
      siteInfo: {},
      systemInfo: {},
      menuInfo: {},
      themeIconMapData: {}
    };
  },
  getters: {
    themeConfigGetter() {
      return this.themeConfig;
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
    // 设置主题类型
    setThemeType(themeType) {
      common_vendor.index.$log.info("获取主题色", themeType);
      this.themeType = themeType;
      this.themeConfig = utils_theme.themeStyleMap[themeType];
      this.themeIconMapData = utils_theme.themeIconMap[this.themeType] || utils_theme.themeIconMap.SkyBlue;
      console.log(this.themeIconMapData);
      utils_storages_saveGlobalStroage.setThemeColor(this.themeConfig);
    }
  }
});
exports.useAppStore = useAppStore;
//# sourceMappingURL=index.js.map
