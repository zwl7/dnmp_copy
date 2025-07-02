"use strict";
const utils_assets_local = require("../../../../utils/assets/local.js");
const config = {
  dataCard: {
    name: "dataCard",
    title: "数据统计",
    icon: utils_assets_local.useAssets("images/personal/record.png")
  },
  funcCard: {
    name: "funcCard",
    menuConfig: {
      title: "功能集合",
      icon: "",
      list: [
        {
          img: utils_assets_local.useAssets("images/personal/service.png"),
          title: "志愿服务",
          value: "/pages/tabbar/dynamic/index"
        },
        {
          img: utils_assets_local.useAssets("images/personal/praise.png"),
          title: "点赞",
          value: "/pages/praise/index"
        },
        {
          img: utils_assets_local.useAssets("images/personal/validate.png"),
          title: "指导员认证",
          value: "auth"
        },
        {
          img: utils_assets_local.useAssets("images/personal/record.png"),
          title: "报名记录",
          value: "/pages/trainRecord/index"
        },
        {
          img: utils_assets_local.useAssets("images/personal/mySite.png"),
          title: "我的站点",
          value: "/pages-sub/instructorSite/my"
        }
      ]
    }
  }
};
exports.config = config;
//# sourceMappingURL=rcConfig.js.map
