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
const utils_theme = require("../../utils/theme.js");
const utils_stroageUtils_token = require("../../utils/stroageUtils/token.js");
const apis_index = require("../../apis/index.js");
require("../../utils/assetsUtils/local.js");
const useAppStore = common_vendor.defineStore({
  id: "app",
  state() {
    return {
      appName: "",
      themeConfig: {
        // '--hubei-primary': '#00CD97',
        // '--hubei-primary-light': '#BFF3DE',
        // '--hubei-primary-light2': '#6AD1FF',
        // '--hubei-border-color': '#dcdee0',
        // '--hubei-border-color-light': 'background: rgba(0, 205, 151, 0.5)',
        // '--hubei-card-bg': 'background: rgba(0, 205, 151, 0.05)',
      },
      themeType: "SkyBlue",
      tabbarList: [],
      // 底部tabbar列表
      themeIconMapData: {}
    };
  },
  getters: {
    themeConfigGetter() {
      return this.themeConfig;
    },
    themePrimaryColorGetter() {
      return this.themeConfig["--hubei-primary"] || "#409eff";
    },
    themePrimaryLightColorGetter() {
      return this.themeConfig["--hubei-primary-light"] || "#c0c4cc";
    },
    themePrimaryLight2ColorGetter() {
      return this.themeConfig["--hubei-primary-light2"] || "#6ad1ff";
    },
    tabbarListGetter() {
      return this.tabbarList;
    },
    themeIconMapDataGetter() {
      return this.themeIconMapData;
    }
  },
  actions: {
    initGlobalConfig() {
      return __async(this, null, function* () {
        try {
          const themeConfig = yield utils_stroageUtils_token.getThemeColor();
          this.themeConfig = themeConfig || utils_theme.themeStyleMap["SkyBlue"];
        } catch (error) {
          console.error("获取主题色失败", error);
          this.themeConfig = utils_theme.themeStyleMap["SkyBlue"];
        }
        try {
          const res = yield utils_stroageUtils_token.getTabbarList();
          this.tabbarList = res || [];
        } catch (error) {
          console.error("获取底部tabbar列表失败", error);
        }
        this.themeIconMapData = utils_theme.themeIconMap[this.themeType] || utils_theme.themeIconMap.SkyBlue;
      });
    },
    // 主题色切换
    colorThemeChange() {
      return __async(this, null, function* () {
        try {
          let res = yield apis_index.getWxColorStyle();
          if (res.code !== 200) {
            throw new Error(res.message);
          }
          common_vendor.index.$log.info("获取主题色", res.data);
          if (utils_theme.themeTypeNameList.includes(res.data.color_scheme_type)) {
            this.themeType = res.data.color_scheme_type;
            this.themeConfig = utils_theme.themeStyleMap[this.themeType];
            this.themeIconMapData = utils_theme.themeIconMap[this.themeType] || utils_theme.themeIconMap.SkyBlue;
            console.log(utils_theme.themeIconMap[this.themeType]);
            utils_stroageUtils_token.setThemeColor(this.themeConfig);
          } else {
            throw new Error("主题色类型错误");
          }
        } catch (error) {
          common_vendor.index.$log.error("获取主题色失败", error);
          this.themeConfig = utils_theme.themeStyleMap[this.themeType];
          utils_stroageUtils_token.setThemeColor(this.themeConfig);
        }
      });
    },
    // 设置底部tabbar列表
    getTabbarList() {
      return __async(this, null, function* () {
        try {
          const res = yield apis_index.getWxMenu({
            is_enable: 1,
            page: 1,
            code: 2,
            size: 100,
            business_type: 2
          });
          if (res.code !== 200) {
            throw new Error(res.message);
          }
          const tabbarList = [];
          res.data.list.map((e) => {
            let iconObj = this.getTabbarDefaultIcon(e.default_code);
            tabbarList.push({
              pagePath: e.link_url,
              iconPath: e.icon || iconObj.iconPath,
              selectedIconPath: e.icon_selected || iconObj.selectedIconPath,
              text: e.title,
              jump_type: e.jump_type,
              default_code: e.default_code
            });
          });
          common_vendor.index.$log.info("获取Tabbar列表", tabbarList);
          utils_stroageUtils_token.setTabbarList(tabbarList);
          this.tabbarList = tabbarList;
        } catch (error) {
          console.log(error);
        }
      });
    },
    getTabbarIcon(default_code) {
      if (default_code.includes("active")) {
        return `https://cdn-static.papa.com.cn/jxpq/themeStatic/${this.themeType}/${this.themeIconMapData[default_code]}`;
      } else {
        return `https://cdn-static.papa.com.cn/jxpq/tabbar/${this.themeIconMapData[default_code]}`;
      }
    },
    getTabbarDefaultIcon(default_code) {
      let obj = {
        iconPath: "",
        selectedIconPath: ""
      };
      try {
        switch (default_code) {
          case "home":
            obj.iconPath = this.getTabbarIcon("tabbar_home");
            obj.selectedIconPath = this.getTabbarIcon("tabbar_home_active");
            break;
          case "match":
            obj.iconPath = this.getTabbarIcon("tabbar_match");
            obj.selectedIconPath = this.getTabbarIcon("tabbar_match_active");
            break;
          case "mine":
            obj.iconPath = this.getTabbarIcon("tabbar_mine");
            obj.selectedIconPath = this.getTabbarIcon("tabbar_mine_active");
            break;
          case "association":
            obj.iconPath = this.getTabbarIcon("tabbar_association");
            obj.selectedIconPath = this.getTabbarIcon("tabbar_association_active");
            break;
          default:
          case "home":
            obj.iconPath = this.getTabbarIcon("tabbar_home");
            obj.selectedIconPath = this.getTabbarIcon("tabbar_home_active");
            break;
        }
      } catch (error) {
        common_vendor.index.$log.error("获取底部tabbar图标失败", error);
      }
      return obj;
    }
  }
});
exports.useAppStore = useAppStore;
