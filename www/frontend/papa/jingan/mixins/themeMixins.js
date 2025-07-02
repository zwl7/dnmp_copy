"use strict";
const common_vendor = require("../common/vendor.js");
const store_app_index = require("../store/app/index.js");
const themeMixins = {
  data() {
    return {};
  },
  computed: {
    themeTypeGetter() {
      return store_app_index.useAppStore().themeType;
    },
    themeConfigGetter() {
      return store_app_index.useAppStore().themeConfigGetter;
    },
    themePrimaryColorGetter() {
      return store_app_index.useAppStore().themePrimaryColorGetter;
    },
    // 主题色补色文字
    themePrimaryTextColorGetter() {
      return store_app_index.useAppStore().themePrimaryTextColorGetter;
    },
    themePrimaryLightColorGetter() {
      return store_app_index.useAppStore().themePrimaryLightColorGetter;
    },
    themePrimaryLight2ColorGetter() {
      return store_app_index.useAppStore().themePrimaryLight2ColorGetter;
    },
    themeIconMapGetter() {
      return store_app_index.useAppStore().themeIconMapDataGetter;
    },
    defaultImgUrl() {
      return this.themeIconMapGetter["defaultImg"];
    },
    // 标签栏线条颜色
    themeTabsLineColorGetter() {
      return store_app_index.useAppStore().themeConfig["--hubei-tabs-line-color"];
    },
    // 标签栏字体颜色
    themeTabsFontColorGetter() {
      return store_app_index.useAppStore().themeConfig["--hubei-tabs-active-color"];
    },
    // 主题色全部颜色
    themeConfigGetter() {
      return store_app_index.useAppStore().themeConfig;
    }
  },
  methods: {
    getThemeIcon(iconName) {
      const themeType = store_app_index.useAppStore().themeType;
      const themeIconMap = store_app_index.useAppStore().themeIconMapData;
      return `https://cdn-static.papa.com.cn/jxpq/themeStatic/${themeType}/${themeIconMap[iconName]}`;
    },
    setNavigationBarColor() {
      console.log("------setNavigationBarColor-----------", this.themePrimaryColorGetter);
      console.log("------setNavigationBarColor-----------", this.themeConfigGetter);
      common_vendor.index.setNavigationBarColor({
        frontColor: this.themeConfigGetter["--hubei-navbar-font-color"] || "#000000",
        backgroundColor: this.themeConfigGetter["--hubei-navbar-bg-color"] || "#ffffff"
      });
    }
  }
};
exports.themeMixins = themeMixins;
