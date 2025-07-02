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
      common_vendor.index.setNavigationBarColor({
        frontColor: "#ffffff",
        backgroundColor: this.themePrimaryColorGetter
      });
    }
  }
};
exports.themeMixins = themeMixins;
