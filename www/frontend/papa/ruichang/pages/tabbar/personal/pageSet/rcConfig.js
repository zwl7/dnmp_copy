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
  },
  //社体指导员专区
  socialGuide: {
    name: "socialGuide",
    menuConfig: {
      title: "社体指导员专区",
      icon: "",
      list: [
        {
          img: "https://cdn-static.papa.com.cn/social/mineStaticIcon/wdfw.png",
          title: "我的服务",
          value: "",
          path: "/pagesSub/sportsService/serviceAssign/talenList",
          auth: [],
          isShowMenu: true,
          login: true,
          key: "serveWaitNum"
        },
        // {
        //   img: 'https://cdn-static.papa.com.cn/social/mineStaticIcon/bmjl.png',
        //   title: '服务承接',
        //   value: '',
        //   path: '/pagesSub/sportsService/serviceAssign/talenList',
        //   auth: ['sprotsTalent'],
        //   isShowMenu: true,
        //   login: true,
        //   key: 'serveWaitNum',
        // },
        {
          img: "https://cdn-static.papa.com.cn/social/mineStaticIcon/zyfwjl.png",
          title: "志愿服务",
          value: "",
          path: "/pages/tabbar/dynamic/index",
          auth: [],
          isShowMenu: true,
          key: ""
        },
        {
          img: "https://cdn-static.papa.com.cn/social/mineStaticIcon/rzxx.png",
          title: "认证信息",
          value: "",
          // path: '/pagesSub/sportsService/realAuth/myIdentity',
          path: "/pages-sub/realname/detail",
          auth: [],
          isShowMenu: true,
          login: true,
          key: "realAuth"
        }
      ]
    }
  },
  //服务管理
  serviceManage: {
    name: "serviceManage",
    menuConfig: {
      title: "服务管理",
      icon: "",
      list: [
        {
          img: "https://cdn-static.papa.com.cn/social/mineStaticIcon/fwpd.png",
          title: "服务派单",
          value: "",
          key: "platformWaitNum",
          path: "/pagesSub/sportsService/serviceAssign/organList",
          auth: ["platformManager"],
          isShowMenu: true,
          login: true
        },
        {
          img: "https://cdn-static.papa.com.cn/social/mineStaticIcon/sjzl.png",
          title: "数据总览",
          value: "",
          key: "dataOverview",
          path: "/pagesSub/sportsService/dataOverview/index",
          auth: ["platformManager"],
          isShowMenu: true
        }
      ]
    }
  },
  //我的服务
  myService: {
    name: "myService",
    menuConfig: {
      title: "我的服务",
      icon: "",
      list: [
        {
          img: "https://cdn-static.papa.com.cn/social/mineStaticIcon/wddd.png",
          title: "我的点单",
          value: "",
          key: "myOrder",
          path: "/pagesSub/sportsService/sprotOrder/index",
          auth: [],
          isShowMenu: true,
          login: true
        },
        {
          img: "https://cdn-static.papa.com.cn/social/mineStaticIcon/wdpj.png",
          title: "我的评价",
          value: "",
          key: "ratingWaitNum",
          path: "/pagesSub/sportsService/serviceStyle/orderStyle",
          auth: [],
          isShowMenu: true,
          login: true
        },
        {
          img: "https://cdn-static.papa.com.cn/social/mineStaticIcon/bmjl.png",
          title: "报名记录",
          value: "/pages/trainRecord/index"
        },
        {
          img: "https://cdn-static.papa.com.cn/social/mineStaticIcon/wdlz.png",
          title: "我的入驻",
          value: ""
        },
        {
          img: "https://cdn-static.papa.com.cn/social/mineStaticIcon/wdzd.png",
          title: "我的站点",
          value: "/pages-sub/instructorSite/my"
        },
        {
          img: "https://cdn-static.papa.com.cn/social/mineStaticIcon/wddz.png",
          title: "我的点赞",
          value: "/pages/praise/index"
        }
      ]
    }
  },
  //其他服务
  otherService: {
    name: "otherService",
    menuConfig: {
      title: "其他服务",
      icon: "",
      list: [
        {
          img: "https://cdn-static.papa.com.cn/social/mineStaticIcon/xxzx.png",
          title: "消息中心",
          value: ""
        },
        {
          img: "https://cdn-static.papa.com.cn/social/mineStaticIcon/sz.png",
          title: "设置",
          value: ""
        }
      ]
    }
  }
};
exports.config = config;
//# sourceMappingURL=rcConfig.js.map
