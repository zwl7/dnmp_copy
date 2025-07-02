"use strict";
const config = {
  dataCard: {
    name: "dataCard",
    title: "数据统计",
    icon: "https://cdn-static.papa.com.cn/social/icon-data.png"
  },
  funcCard: {
    name: "funcCard",
    menuConfig: {
      title: "功能集合",
      icon: "https://cdn-static.papa.com.cn/social/icon-fun.png",
      list: [
        {
          img: "https://cdn-static.papa.com.cn/social/mine-zyfw.png",
          title: "志愿服务",
          value: "/pages/tabbar/dynamic/index"
        },
        {
          img: "https://cdn-static.papa.com.cn/social/mine-dz.png",
          title: "点赞",
          value: "/pages/praise/index"
        },
        {
          img: "https://cdn-static.papa.com.cn/social/mine-rz.png",
          title: "指导员认证",
          value: "auth"
        },
        {
          img: "https://cdn-static.papa.com.cn/social/mine-bmjl.png",
          title: "报名记录",
          value: "/pages/trainRecord/index"
        },
        {
          img: "https://cdn-static.papa.com.cn/social/mine-zd.png",
          title: "我的站点",
          value: "/pages-sub/instructorSite/my"
        }
      ]
    }
  }
};
exports.config = config;
//# sourceMappingURL=wzConfig.js.map
