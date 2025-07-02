"use strict";
const sportServiceMenu = [
  {
    name: "我的点单",
    key: "myOrder",
    url: "https://cdn-static.papa.com.cn/jingAn/mine/myOrder.png",
    path: "/pagesSub/sportsService/sprotOrder/index",
    auth: [],
    isShowMenu: true,
    login: true
  },
  {
    name: "我的评价",
    key: "ratingWaitNum",
    url: "https://cdn-static.papa.com.cn/jingAn/mine/myEvalute.png",
    path: "/pagesSub/sportsService/serviceStyle/orderStyle",
    auth: [],
    isShowMenu: true,
    login: true
  },
  {
    name: "我的活动",
    key: "myActivity",
    url: "https://cdn-static.papa.com.cn/jingAn/mine/myActivity.png",
    path: "/pagesSub/activityPart/myApply/index",
    auth: [],
    isShowMenu: true,
    login: true
  }
];
const sportManageMenu = [
  {
    name: "服务派单",
    key: "platformWaitNum",
    url: "https://cdn-static.papa.com.cn/jingAn/mine/serviceAssign.png",
    path: "/pagesSub/sportsService/serviceAssign/index",
    auth: ["platformManager"],
    isShowMenu: true,
    login: true
  },
  {
    name: "组织派单",
    key: "orgWaitNum",
    url: "https://cdn-static.papa.com.cn/jingAn/mine/serviceAssign.png",
    path: "/pagesSub/sportsService/serviceAssign/organList",
    auth: ["orgManager"],
    isShowMenu: true,
    login: true
  },
  {
    name: "数据总览",
    key: "dataOverview",
    url: "https://cdn-static.papa.com.cn/jingAn/mine/dataview.png",
    path: "/pagesSub/sportsService/dataOverview/index",
    auth: ["platformManager"],
    isShowMenu: true
  },
  {
    name: "服务承接",
    key: "serveWaitNum",
    url: "https://cdn-static.papa.com.cn/jingAn/mine/serviceUndertake.png",
    path: "/pagesSub/sportsService/serviceAssign/talenList",
    auth: ["sprotsTalent"],
    isShowMenu: true,
    login: true
  },
  {
    name: "服务风采",
    key: "serviceStyle",
    url: "https://cdn-static.papa.com.cn/jingAn/mine/serviceStyle.png",
    path: "/pagesSub/sportsService/serviceStyle/myStyle",
    auth: ["sprotsTalent"],
    isShowMenu: true
  },
  {
    name: "服务点单",
    url: "https://cdn-static.papa.com.cn/jingAn/home/banner.png",
    path: "/pagesSub/sportsService/sprotOrder/index",
    auth: ["siteManager"],
    isShowMenu: false,
    login: true
  }
];
const sportOtherMenu = [
  {
    name: "消息中心",
    key: "messageCenter",
    url: "https://cdn-static.papa.com.cn/jingAn/mine/messageCenter.png",
    path: "",
    auth: [],
    isShowMenu: true
  },
  {
    name: "设置",
    key: "setting",
    url: "https://cdn-static.papa.com.cn/jingAn/mine/setting.png",
    path: "",
    auth: [],
    isShowMenu: true
  }
];
exports.sportManageMenu = sportManageMenu;
exports.sportOtherMenu = sportOtherMenu;
exports.sportServiceMenu = sportServiceMenu;
//# sourceMappingURL=sprosServiceMenu.js.map
