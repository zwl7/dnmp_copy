"use strict";
var __defProp = Object.defineProperty;
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
const common_assets = require("../common/assets.js");
function getTabbarIcon(icon) {
  return `https://cdn-static.papa.com.cn/social/${icon}.png`;
}
const themeStyleMap = {
  SkyBlue: {
    "--hubei-primary": "#409EFF",
    "--hubei-primary-dark": "#3998f8",
    "--hubei-primary-disabled": "#ECF5FF",
    "--hubei-primary-light": "#D9ECFF",
    "--hubei-primary-light2": "#F4F9FF",
    "--hubei-mine-top-bg": "linear-gradient(180deg, #D3E8FF 0%, #D9ECFF 54.25%, #FFFFFF 100%)",
    "--hubei-mine-card-start-bg": "rgba(#409EFF, 0.01)",
    "--hubei-mine-card-end-bg": "rgba(#409EFF, 0.2)",
    "--hubei-border-color": "#dcdee0",
    //灰色
    "--hubei-border-color-light": "#8FCBFF",
    // mix(#FFFFFF, #409EFF, 50%)
    "--hubei-card-bg": "#F5FAFF",
    // mix(#FFFFFF, #409EFF, 95%)
    "--hubei-card-bg2": "#E6F2FF",
    // mix(#FFFFFF, #409EFF, 90%)
    "--hubei-card-bg3": "#B3DBFF",
    // mix(#FFFFFF, #409EFF, 70%)
    //tabbar
    "--hubei-tabbar-font-color": "#666666",
    // #666666
    "--hubei-tabbar-font-active-color": "#409EFF",
    // #409EFF
    // navbar 导航栏
    "--hubei-navbar-font-color": "#ffffff",
    // #ffffff
    "--hubei-navbar-bg-color": "#409EFF",
    // #409EFF
    // tabs 标签栏
    "--hubei-tabs-line-color": "#409EFF",
    // #409EFF
    "--hubei-tabs-active-color": "#409EFF",
    // #409EFF
    //tag-box 标签框
    "--hubei-tag-box-bg-color": "#ECF5FF",
    // #409EFF
    "--hubei-tag-box-font-color": "#409EFF",
    // #ffffff
    "--hubei-tag-box-border-color": "#ECF5FF",
    // #409EFF
    //button 按钮
    "--hubei-primary-button-bg-color": `#409EFF`,
    //主按钮 #409EFF
    "--hubei-primary-button-font-color": "#ffffff",
    //主按钮字体 #ffffff
    "--hubei-primary-button-border-color": "#409EFF",
    //主按钮边框 #409EFF
    "--hubei-primary-button-normal-opacity": "1",
    //主按钮正常状态 #1
    "--hubei-primary-button-hover-opacity": "0.7",
    //主按钮hover状态 #0.7
    "--hubei-primary-button-disabled-opacity": "0.2",
    //主按钮disabled状态 #0.2
    "--hubei-lesser-button-bg-color": "#409EFF",
    //次级 #409EFF
    "--hubei-lesser-button-font-color": "#ffffff",
    //次级字体 #ffffff
    "--hubei-lesser-button-border-color": "#409EFF",
    //次级边框 #409EFF
    "--hubei-lesser-button-normal-opacity": "1",
    //次级正常状态 #1
    "--hubei-lesser-button-hover-opacity": "0.7",
    //次级hover状态 #0.7
    "--hubei-lesser-button-disabled-opacity": "0.2",
    //次级disabled状态 #0.2
    "--hubei-plain-button-bg-color": "#ffffff",
    //镂空按钮 #transparent
    "--hubei-plain-button-font-color": "#303133",
    //镂空按钮字体 #303133
    "--hubei-plain-button-border-color": "#303133",
    //镂空按钮边框 #303133
    "--hubei-plain-button-normal-opacity": "1",
    //镂空按钮正常状态 #1
    "--hubei-plain-button-hover-opacity": "0.7",
    //镂空按钮hover状态 #0.7
    "--hubei-plain-button-disabled-opacity": "0.2",
    //镂空按钮disabled状态 #0.2
    // 报名表单卡片
    "--hubei-apply-form-card-border-color": "#409EFF",
    // 边框颜色 #409EFF
    "--hubei-apply-form-card-index-bg-color": "#409EFF",
    // 序号背景颜色 #409EFF
    "--hubei-apply-form-card-index-font-color": "#ffffff",
    // 序号字体颜色 #ffffff
    "--hubei-list-page-bg-color": "#f6f7f9",
    // 列表页背景颜色 #f6f7f9
    "--hubei-map-bg-color": "linear-gradient(180deg, #C9E3FF 0%, #ffffff 100%)"
  },
  EcologicalGreen: {
    "--hubei-primary": "#00CD97",
    "--hubei-primary-dark": "#00b484",
    "--hubei-primary-disabled": "#ECF5FF",
    "--hubei-primary-light": "#EEFCF8",
    "--hubei-mine-top-bg": "linear-gradient(180deg, #52D8BD 0%, #97F2AD 54.25%, #FFFFFF 100%)",
    "--hubei-mine-card-start-bg": "rgba(#00CD97, 0.01)",
    "--hubei-mine-card-end-bg": "rgba(#00CD97, 0.2)"
  }
};
const iconMapBase = {
  association_top_bg: "association-top-bg.png",
  yun_lesson_bg: "lesson-top-bg.png",
  // 云课堂背景
  // 点赞图标
  thumb: "thumb.svg",
  thumb_fill: "thumb-fill.svg"
};
const themeIconMap = {
  SkyBlue: __spreadValues({
    LIKE_ICON: common_assets.praiseFill,
    //点赞图标
    COMMENT_ICON: common_assets.commentFill,
    //评论图标
    INSTRUCT_BAG_IMG: "https://cdn-static.papa.com.cn/social/instruct_bg.jpg",
    DESC_ICON: "https://cdn-static.papa.com.cn/social/des_icon.png",
    LOGIN_PAGE_AVATR: "https://cdn-static.papa.com.cn/social/login_avatar.png",
    //登录页头像
    CALENDAR_ICON: "https://cdn-static.papa.com.cn/social/calendar-icon.png",
    //日历图标
    SUCCESS_ICON: "https://cdn-static.papa.com.cn/social/result-success.png",
    //成功图标
    MY_PAGE_BG: "https://cdn-static.papa.com.cn/social/themeStatic/SkyBlue/login_bg.png",
    //我的页面背景图
    MY_PAGE_AUTH_CARD: "https://cdn-static.papa.com.cn/social/themeStatic/SkyBlue/social_auth_card.png",
    //我的页面社体指导员认证图标
    STADIUM_JOIN_CARD: "https://cdn-static.papa.com.cn/social/themeStatic/SkyBlue/stadium_join_card.png"
  }, iconMapBase),
  EcologicalGreen: {
    LIKE_ICON: getTabbarIcon("praise-fill-2"),
    //点赞图标
    COMMENT_ICON: getTabbarIcon("desc"),
    //评论图标
    INSTRUCT_BAG_IMG: "https://cdn-static.papa.com.cn/social/instruct_bg_2.jpg",
    DESC_ICON: "https://cdn-static.papa.com.cn/social/desc.png",
    LOGIN_PAGE_AVATR: "https://cdn-static.papa.com.cn/social/login_avatar-2.png",
    //登录页头像
    CALENDAR_ICON: "https://cdn-static.papa.com.cn/social/calendar-icon-2.png",
    //日历图标
    SUCCESS_ICON: "https://cdn-static.papa.com.cn/social/result-success-2.png"
    //成功图标
  }
};
exports.themeIconMap = themeIconMap;
exports.themeStyleMap = themeStyleMap;
//# sourceMappingURL=theme.js.map
