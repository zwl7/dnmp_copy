"use strict";
const config = {
  swipers: {
    name: "swipers",
    showNoticeBar: {
      title: "是否展示通知",
      value: 0
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
  menus: {
    name: "menus",
    menuConfig: {
      title: "菜单配置",
      list: [
        {
          title: "社体指导员",
          img: "https://cdn-static.papa.com.cn/social/index-stzdy.png",
          value: "/pages/instructor/index"
        },
        {
          title: "指导员认证",
          img: "https://cdn-static.papa.com.cn/social/index-rz.png",
          value: "/pages-sub/realname/index"
        },
        {
          title: "通知公告",
          img: "https://cdn-static.papa.com.cn/social/index-tz.png",
          value: "/pages-sub/notice/index"
        },
        {
          title: "我的站点",
          img: "https://cdn-static.papa.com.cn/social/index-zd.png",
          value: "/pages-sub/instructorSite/my"
        }
      ]
    },
    tabConfig: {
      title: "展示样式",
      value: 1
      //1 单行  2 多行
    },
    showTitle: {
      title: "是否显示标题",
      value: 1
    },
    number: {
      title: "显示个数",
      value: 1
    },
    rowsNum: {
      title: "显示行数",
      value: 0
    },
    docConfig: {
      title: "指示器",
      value: 3
      //0:圆点 1:线条
    }
  },
  noticeBar: {
    name: "noticeBar"
  },
  cardBox: {
    name: "cardBox",
    cardBoxList: [
      {
        title: "活动风采",
        tip: "社体进校园",
        titleColor: "#006567",
        tipColor: "#006567",
        value: "/pages-sub/activityList/index?activityType=1",
        backgroundImage: "https://cdn-static.papa.com.cn/social/index-hdfc.png"
      },
      {
        title: "培训活动",
        tip: "青少年社会体育指导员",
        titleColor: "#0466cc",
        tipColor: "#0466cc",
        value: "/pages/tabbar/train/listByType?trainType=3&title=培训活动",
        backgroundImage: "https://cdn-static.papa.com.cn/social/index-pxhd.png"
      }
    ],
    headerLogoConfig: {
      title: "头部logo",
      url: "https://cdn-static.papa.com.cn/social/txrh.png"
    },
    headerShow: {
      title: "是否显示头部",
      value: 1
    }
  },
  activityList: {
    name: "activityList",
    headerLogoConfig: {
      title: "头部logo",
      url: "https://cdn-static.papa.com.cn/social/icon-hdfc.png"
    },
    moreButtonShow: {
      title: "是否显示更多",
      value: 1
    }
  }
};
exports.config = config;
//# sourceMappingURL=wzConfig.js.map
