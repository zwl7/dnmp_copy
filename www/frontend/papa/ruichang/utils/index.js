"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
const common_vendor = require("../common/vendor.js");
const utils_platform = require("./platform.js");
const utils_imageCompress = require("./image-compress.js");
const pages = [
  {
    path: "pages/tabbar/home/index",
    aliasPath: "/",
    layout: "tabbar",
    style: {
      navigationBarTitleText: "首页",
      navigationStyle: "custom"
    }
  },
  {
    path: "pages/tabbar/commonPage/index",
    aliasPath: "/commonPage",
    layout: "tabbar",
    style: {
      navigationBarTitleText: "公共页面",
      navigationStyle: "custom"
    }
  },
  {
    path: "pages/tabbar/train/index",
    aliasPath: "/train",
    layout: "tabbar",
    style: {
      navigationBarTitleText: "培训",
      navigationStyle: "custom"
    }
  },
  {
    path: "pages/tabbar/personal/index",
    aliasPath: "/personal",
    layout: "tabbar",
    needLogin: true,
    style: {
      navigationBarTitleText: "我的",
      navigationStyle: "custom"
    }
  },
  {
    path: "pages/tabbar/train/listByType",
    aliasPath: "/listByType",
    style: {
      navigationBarTitleText: "培训"
    }
  },
  {
    path: "pages/instructorSite/index",
    aliasPath: "/instructorSite",
    style: {
      navigationStyle: "custom",
      navigationBarTitleText: "站点"
    }
  },
  {
    path: "pages/instructor/index",
    style: {
      navigationBarTitleText: "社体指导员"
    }
  },
  {
    path: "pages/tabbar/dynamic/index",
    aliasPath: "/dynamic",
    style: {
      navigationBarTitleText: "动态"
    }
  },
  {
    path: "pages/personalDetail/index",
    style: {
      navigationBarTitleText: "个人资料"
    }
  },
  {
    path: "pages/praise/index",
    style: {
      navigationBarTitleText: "我的点赞"
    }
  },
  {
    path: "pages/trainRecord/index",
    style: {
      navigationBarTitleText: "报名记录"
    }
  },
  {
    path: "pages/login/index",
    aliasPath: "/login",
    style: {}
  },
  {
    path: "pages/errors/404/index",
    aliasPath: "/404",
    style: {
      navigationBarTitleText: "404"
    }
  }
];
const subPackages = [
  {
    root: "pages-sub",
    pages: [
      {
        path: "activityList/index",
        type: "page",
        style: {
          navigationBarTitleText: "活动列表"
        }
      },
      {
        path: "activityDetail/index",
        type: "page",
        style: {
          navigationBarTitleText: "活动详情"
        }
      },
      {
        path: "contact/index",
        type: "page",
        style: {
          navigationBarTitleText: "联系我们"
        }
      },
      {
        path: "middleware/index",
        type: "page",
        style: {
          navigationBarTitleText: "路由中间件"
        }
      },
      {
        path: "notice/detail",
        type: "page",
        style: {
          navigationBarTitleText: "公告消息"
        }
      },
      {
        path: "notice/index",
        type: "page",
        style: {
          navigationBarTitleText: "公告消息"
        }
      },
      {
        path: "realname/detail",
        type: "page",
        style: {
          navigationBarTitleText: "认证详情"
        }
      },
      {
        path: "realname/index",
        type: "page",
        style: {
          navigationBarTitleText: "指导员认证"
        }
      },
      {
        path: "releaseDynamic/index",
        type: "page",
        needLogin: true,
        style: {
          navigationBarTitleText: "发布"
        }
      },
      {
        path: "selectActivetyProject/index",
        type: "page",
        style: {
          navigationBarTitleText: "选择项目"
        }
      },
      {
        path: "selectActivitySite/index",
        type: "page",
        style: {
          navigationBarTitleText: "选择站点"
        }
      },
      {
        path: "selectOrganization/index",
        type: "page",
        style: {
          navigationBarTitleText: "选择组织"
        }
      },
      {
        path: "trainApply/detail",
        type: "page",
        style: {
          navigationBarTitleText: "报名详情"
        }
      },
      {
        path: "trainApply/index",
        type: "page",
        style: {
          navigationBarTitleText: "报名"
        }
      },
      {
        path: "trainDetail/index",
        type: "page",
        style: {
          navigationBarTitleText: "培训详情"
        }
      },
      {
        path: "webview/index",
        type: "page",
        style: {
          navigationBarTitleText: "webview"
        }
      },
      {
        path: "statement/index",
        style: {
          navigationBarTitleText: "产品服务协议"
        }
      },
      {
        path: "instructorDetail/index",
        style: {
          navigationBarTitleText: "指导员详情"
        }
      },
      {
        path: "applyResult/success",
        style: {
          navigationBarTitleText: "发布结果"
        }
      },
      {
        path: "starRatingRecord/index",
        style: {
          navigationBarTitleText: "星级评定记录"
        }
      },
      {
        path: "levelRatingRecord/index",
        style: {
          navigationBarTitleText: "级别评定记录"
        }
      },
      {
        path: "instructorSite/index",
        style: {
          navigationBarTitleText: "站点",
          navigationStyle: "custom"
        }
      },
      {
        path: "instructorSite/detail",
        style: {
          navigationBarTitleText: "站点详情",
          navigationStyle: "custom"
        }
      },
      {
        path: "instructorSite/my",
        needLogin: true,
        style: {
          navigationBarTitleText: "我的站点"
        }
      },
      {
        path: "instructorSite/select",
        style: {
          navigationBarTitleText: "选择站点"
        }
      },
      {
        path: "demo/index",
        style: {
          navigationBarTitleText: "demo",
          navigationStyle: "custom"
        }
      },
      {
        path: "instructorRegion/index",
        style: {
          navigationBarTitleText: "社体指导员专区",
          navigationStyle: "custom"
        }
      },
      {
        path: "sportsOrg/index",
        style: {
          navigationBarTitleText: "体育组织",
          navigationStyle: "custom",
          enablePullDownRefresh: true
        }
      },
      {
        path: "sportsOrg/detail",
        style: {
          navigationBarTitleText: "体育组织详情",
          navigationStyle: "custom",
          enablePullDownRefresh: true
        }
      },
      {
        path: "map/index",
        style: {
          navigationBarTitleText: "体育地图",
          navigationStyle: "custom",
          enablePullDownRefresh: true
        }
      },
      {
        path: "sportOrder/index",
        style: {
          navigationBarTitleText: "服务点单",
          navigationStyle: "custom",
          enablePullDownRefresh: true
        }
      },
      {
        path: "sportOrder/form",
        style: {
          navigationBarTitleText: "新增点单",
          navigationStyle: "custom",
          enablePullDownRefresh: false,
          navigationBarTextStyle: "black"
        }
      },
      {
        path: "sportOrder/detail",
        style: {
          navigationBarTitleText: "服务详情",
          enablePullDownRefresh: false,
          navigationBarTextStyle: "black"
        }
      }
    ]
  },
  {
    root: "pagesSub/platform",
    pages: [
      {
        path: "sportsOrg/index",
        style: {
          navigationBarTitleText: "会员单位",
          navigationStyle: "custom",
          enablePullDownRefresh: true
        }
      },
      {
        path: "sportsOrg/detail",
        style: {
          navigationBarTitleText: "会员单位详情",
          navigationStyle: "custom",
          enablePullDownRefresh: true
        }
      },
      {
        path: "sportsSite/index",
        style: {
          navigationBarTitleText: "健身站点",
          navigationStyle: "custom",
          enablePullDownRefresh: true
        }
      },
      {
        path: "sportsSite/detail",
        style: {
          navigationBarTitleText: "站点详情",
          navigationStyle: "custom",
          enablePullDownRefresh: true
        }
      },
      {
        path: "stadium/index",
        style: {
          navigationBarTitleText: "场馆列表",
          enablePullDownRefresh: true,
          navigationStyle: "custom"
        }
      },
      {
        path: "stadium/detail",
        style: {
          navigationBarTitleText: "场馆详情",
          navigationStyle: "custom",
          enablePullDownRefresh: true
        }
      },
      {
        path: "yunLesson/index",
        style: {
          navigationBarTitleText: "云课堂",
          enablePullDownRefresh: true,
          navigationStyle: "custom",
          navigationBarTextStyle: "black"
        }
      },
      {
        path: "yunLesson/detail",
        style: {
          navigationBarTitleText: "云课堂详情",
          enablePullDownRefresh: false,
          navigationBarTextStyle: "black"
        }
      }
    ]
  },
  {
    root: "pagesSub/sportsService",
    pages: [
      {
        path: "serviceStyle/index",
        style: {
          navigationBarTitleText: "服务风采",
          enablePullDownRefresh: true,
          navigationBarTextStyle: "black"
        }
      },
      {
        path: "serviceStyle/myStyle",
        style: {
          navigationBarTitleText: "我的风采",
          enablePullDownRefresh: true,
          navigationBarTextStyle: "black"
        }
      },
      {
        path: "serviceStyle/orderStyle",
        style: {
          navigationBarTitleText: "我的评价",
          enablePullDownRefresh: true,
          navigationBarTextStyle: "black"
        }
      },
      {
        path: "serviceStyle/detail",
        style: {
          navigationBarTitleText: "服务风采详情",
          enablePullDownRefresh: false,
          navigationBarTextStyle: "black"
        }
      },
      {
        path: "serviceStyle/form",
        style: {
          navigationBarTitleText: "发布服务风采",
          enablePullDownRefresh: false,
          navigationBarTextStyle: "black"
        }
      },
      {
        path: "sprotOrder/index",
        style: {
          navigationBarTitleText: "服务点单",
          navigationStyle: "custom",
          enablePullDownRefresh: false,
          navigationBarTextStyle: "black"
        }
      },
      {
        path: "sprotOrder/form",
        style: {
          navigationBarTitleText: "新增点单",
          navigationStyle: "custom",
          enablePullDownRefresh: false,
          navigationBarTextStyle: "black"
        }
      },
      {
        path: "sprotOrder/detail",
        style: {
          navigationBarTitleText: "服务详情",
          enablePullDownRefresh: false,
          navigationBarTextStyle: "black"
        }
      },
      {
        path: "serviceUndertake/index",
        style: {
          navigationBarTitleText: "服务承接",
          enablePullDownRefresh: true,
          navigationStyle: "custom",
          navigationBarTextStyle: "black"
        }
      },
      {
        path: "serviceUndertake/form",
        style: {
          navigationBarTitleText: "发布服务承接",
          enablePullDownRefresh: false,
          navigationBarTextStyle: "black"
        }
      },
      {
        path: "serviceAssign/index",
        style: {
          navigationBarTitleText: "服务派单",
          enablePullDownRefresh: false,
          navigationBarTextStyle: "black",
          navigationStyle: "custom",
          navigationBarBackgroundColor: "#e7f2fe",
          backgroundColor: "#e7f2fe"
        }
      },
      {
        path: "serviceAssign/organList",
        style: {
          navigationBarTitleText: "组织派单",
          enablePullDownRefresh: false,
          navigationBarTextStyle: "black",
          navigationStyle: "custom",
          navigationBarBackgroundColor: "#e7f2fe",
          backgroundColor: "#e7f2fe"
        }
      },
      {
        path: "serviceAssign/talenList",
        style: {
          navigationBarTitleText: "服务承接",
          enablePullDownRefresh: false,
          navigationStyle: "custom",
          navigationBarTextStyle: "black",
          navigationBarBackgroundColor: "#e7f2fe",
          backgroundColor: "#e7f2fe"
        }
      },
      {
        path: "serviceAssign/detail",
        style: {
          navigationBarTitleText: "服务派单详情",
          enablePullDownRefresh: false,
          navigationBarTextStyle: "black",
          navigationBarBackgroundColor: "#e7f2fe",
          backgroundColor: "#e7f2fe"
        }
      },
      {
        path: "serviceComment/index",
        style: {
          navigationBarTitleText: "服务评价",
          navigationStyle: "custom",
          navigationBarTextStyle: "black",
          enablePullDownRefresh: false
        }
      },
      {
        path: "personalDetail/personalDetail",
        style: {
          navigationBarTitleText: "个人资料",
          enablePullDownRefresh: true,
          navigationStyle: "custom",
          navigationBarTextStyle: "black"
        }
      },
      {
        path: "realAuth/index",
        style: {
          navigationBarTitleText: "实名认证",
          enablePullDownRefresh: false,
          navigationBarTextStyle: "black",
          navigationBarBackgroundColor: "#e7f2fe",
          backgroundColor: "#e7f2fe"
        }
      },
      {
        path: "realAuth/realAtuthSubmit",
        style: {
          navigationBarTitleText: "实名认证",
          enablePullDownRefresh: false,
          navigationBarTextStyle: "black",
          navigationBarBackgroundColor: "#e7f2fe",
          backgroundColor: "#e7f2fe"
        }
      },
      {
        path: "realAuth/myIdentity",
        style: {
          navigationBarTitleText: "我的身份",
          enablePullDownRefresh: false,
          navigationBarTextStyle: "black",
          navigationBarBackgroundColor: "#ffffff",
          backgroundColor: "#ffffff"
        }
      },
      {
        path: "dataOverview/index",
        style: {
          navigationBarTitleText: "数据概览",
          navigationStyle: "custom",
          navigationBarTextStyle: "black"
        }
      }
    ]
  }
];
const getAllPages = (key = "needLogin") => {
  const mainPages = [
    ...pages.filter((page) => !key || page[key]).map((page) => __spreadProps(__spreadValues({}, page), {
      path: `/${page.path}`
    }))
  ];
  const subPages = [];
  subPackages.forEach((subPageObj) => {
    const { root } = subPageObj;
    subPageObj.pages.filter((page) => !key || page[key]).forEach((page) => {
      subPages.push(__spreadProps(__spreadValues({}, page), {
        path: `/${root}/${page.path}`
      }));
    });
  });
  const result = [...mainPages, ...subPages];
  return result;
};
const getNeedLoginPages = () => getAllPages("needLogin").map((page) => page.path);
getAllPages("needLogin").map((page) => page.path);
const getEvnBaseUrl = () => {
  let baseUrl = "https://api.wesais.com";
  return baseUrl;
};
const getMapLocation = () => {
  let lat = "29.67599";
  let lng = "115.681239";
  return { lat, lng };
};
const getEvnCompanyID = () => {
  let company_id = "924";
  if (utils_platform.isMp) {
    const {
      miniProgram: { envVersion }
    } = common_vendor.index.getAccountInfoSync();
  }
  return company_id;
};
function previewImage(url) {
  common_vendor.index.previewImage({
    urls: [url],
    longPressActions: {
      success: function(data) {
        console.log(data);
      },
      fail: function(err) {
        console.log(err.errMsg);
      }
    }
  });
}
const chooseImage = function(canvasId) {
  return new Promise((resolve, reject) => {
    common_vendor.index.chooseImage({
      count: 1,
      //默认9
      sizeType: ["original", "compressed"],
      //可以指定是原图还是压缩图，默认二者都有
      success: (res) => __async(this, null, function* () {
        res.tempFiles[0].name;
        res.tempFiles[0].size;
        console.log("fileName:", res);
        const url = res.tempFiles[0].path;
        utils_imageCompress.mpImageCompress.clearTempImg();
        let fileInfo = yield utils_imageCompress.mpImageCompress.set(url, 1024 * 2, true);
        let filePath = fileInfo.filePath;
        resolve({ file: filePath, status: true });
      })
    });
  });
};
const formatRichText = function(html, tip = "") {
  html = html ? html : "";
  let newContent = "";
  newContent = html.replace(/<img[^>]*>/gi, function(match) {
    match = match.replace(`style=""`, "");
    match = match.replace(/style="[^"]+"/gi, "").replace(/style='[^']+'/gi, "");
    match = match.replace(/width="[^"]+"/gi, "").replace(/width='[^']+'/gi, "");
    match = match.replace(/height="[^"]+"/gi, "").replace(/height='[^']+'/gi, "");
    return match;
  });
  newContent = newContent.replace(/style="[^"]+"/gi, function(match) {
    match = match.replace(/width:[^;]+;/gi, "max-width:100%;").replace(/width:[^;]+;/gi, "max-width:100%;");
    return match;
  });
  newContent = newContent.replace(/<br[^>]*\/>/gi, "");
  newContent = newContent.replace(
    /\<img/gi,
    '<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"'
  );
  if (!newContent) {
    return tip;
  }
  return newContent;
};
function parseQueryParams(queryString) {
  if (queryString.indexOf("?") !== -1) {
    queryString = queryString.split("?")[1];
  }
  var params = {};
  if (!queryString) {
    return params;
  }
  var pairs = queryString.split("&");
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=");
    var name = decodeURIComponent(pair[0]);
    var value = pair.length > 1 ? decodeURIComponent(pair[1]) : "";
    params[name] = value;
  }
  return params;
}
exports.chooseImage = chooseImage;
exports.formatRichText = formatRichText;
exports.getEvnBaseUrl = getEvnBaseUrl;
exports.getEvnCompanyID = getEvnCompanyID;
exports.getMapLocation = getMapLocation;
exports.getNeedLoginPages = getNeedLoginPages;
exports.parseQueryParams = parseQueryParams;
exports.previewImage = previewImage;
//# sourceMappingURL=index.js.map
