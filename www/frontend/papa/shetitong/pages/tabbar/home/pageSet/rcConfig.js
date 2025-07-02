"use strict";
const config = {
  swipers: {
    name: "swipers",
    showNoticeBar: {
      title: "是否展示通知",
      value: 1
    },
    height: {
      title: "高度",
      value: 640
    },
    showSwiperTitle: {
      title: "是否显示标题",
      value: 0
    }
  },
  cardBox: {
    name: "cardBox",
    cardBoxList: [
      {
        title: "站点地图",
        tip: "群众健身活动组织",
        titleColor: "#006567",
        tipColor: "#006567",
        value: "/pages/instructorSite/index",
        backgroundImage: "https://cdn-static.papa.com.cn/social/index-bg-5.png"
      },
      {
        title: "公告资讯",
        tip: "通知公告一屏览",
        titleColor: "#0466cc",
        tipColor: "#0466cc",
        value: "/pages-sub/notice/index",
        backgroundImage: "https://cdn-static.papa.com.cn/social/index-bg-2.jpg"
      },
      {
        title: "身份认证",
        tip: "社体指导员快速认证",
        titleColor: "#954628",
        tipColor: "#954628",
        value: "/pages-sub/realname/index",
        backgroundImage: "https://cdn-static.papa.com.cn/social/index-bg-3.jpg"
      }
    ],
    headerLogoConfig: {
      title: "头部logo",
      url: "https://cdn-static.papa.com.cn/social/txrh.png"
    },
    headerShow: {
      title: "是否显示头部",
      value: 0
    }
  },
  activityList: {
    name: "activityList",
    headerLogoConfig: {
      title: "头部logo",
      url: "https://cdn-static.papa.com.cn/social/activity-style.png"
    },
    moreButtonShow: {
      title: "是否显示更多",
      value: 1
    }
  }
};
exports.config = config;
//# sourceMappingURL=rcConfig.js.map
