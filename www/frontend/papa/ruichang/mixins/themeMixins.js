"use strict";
const common_vendor = require("../common/vendor.js");
const store_app_index = require("../store/app/index.js");
const themeMixins = {
  data() {
    return {};
  },
  computed: {
    themeIconMapGetter() {
      return store_app_index.useAppStore().themeIconMapData;
    },
    themeConfigGetter() {
      return store_app_index.useAppStore().themeConfig;
    }
  },
  methods: {
    getThemeIcon(iconName) {
      const themeType = store_app_index.useAppStore().themeType;
      const themeIconMap = store_app_index.useAppStore().themeIconMapData;
      return `https://cdn-static.papa.com.cn/social/themeStatic/${themeType}/${themeIconMap[iconName]}`;
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
//# sourceMappingURL=themeMixins.js.map
