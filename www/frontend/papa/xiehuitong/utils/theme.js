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
const themeTypeNameList = [
  "SkyBlue",
  // 天空蓝
  "EcologicalGreen",
  // 生态绿
  "ChinaRed",
  // 中国红
  "LemonYellow",
  // 柠檬黄
  "EnergeticOrange",
  // 活力橙
  "BlueViolet"
  // 蓝紫色
];
const themeStyleMap = {
  SkyBlue: {
    "--hubei-primary": "#409EFF",
    "--hubei-primary-light": "#CDE6FF",
    "--hubei-primary-light2": "#6AD1FF",
    "--hubei-border-color": "#dcdee0",
    //灰色
    "--hubei-border-color-light": "#8FCBFF",
    // mix(#FFFFFF, #409EFF, 50%)
    "--hubei-card-bg": "#F5FAFF",
    // mix(#FFFFFF, #409EFF, 95%)
    "--hubei-card-bg2": "#E6F2FF",
    // mix(#FFFFFF, #409EFF, 90%)
    "--hubei-card-bg3": "#B3DBFF"
    // mix(#FFFFFF, #409EFF, 70%)
  },
  EcologicalGreen: {
    "--hubei-primary": "#00CD97",
    "--hubei-primary-light": "#BFF3DE",
    "--hubei-primary-light2": "#16E9B1",
    "--hubei-border-color": "#dcdee0",
    //灰色
    "--hubei-border-color-light": "#7FE6CB",
    // mix(#FFFFFF, #00CD97, 50%)
    "--hubei-card-bg": "#F2FCF9",
    // mix(#FFFFFF, #00CD97, 95%)
    "--hubei-card-bg2": "#E6F9F3",
    // mix(#FFFFFF, #00CD97, 90%)
    "--hubei-card-bg3": "#B3F0E1"
    // mix(#FFFFFF, #00CD97, 70%)
  },
  ChinaRed: {
    "--hubei-primary": "#F94E47",
    "--hubei-primary-light": "#FFDFDA",
    "--hubei-primary-light2": "#FF7154",
    "--hubei-border-color": "#dcdee0",
    //灰色
    "--hubei-border-color-light": "#FC9F9B",
    // mix(#FFFFFF, #F94E47, 50%)
    "--hubei-card-bg": "#FEF5F5",
    // mix(#FFFFFF, #F94E47, 95%)
    "--hubei-card-bg2": "#FDEBEA",
    // mix(#FFFFFF, #F94E47, 90%)
    "--hubei-card-bg3": "#FAB7B4"
    // mix(#FFFFFF, #F94E47, 70%)
  },
  EnergeticOrange: {
    "--hubei-primary": "#FF7200",
    "--hubei-primary-light": "#FFE8D7",
    "--hubei-primary-light2": "#FF9D14",
    "--hubei-border-color": "#dcdee0",
    //灰色
    "--hubei-border-color-light": "#FFB980",
    // mix(#FFFFFF, #FF7200, 50%)
    "--hubei-card-bg": "#FFF6EC",
    // mix(#FFFFFF, #FF7200, 95%)
    "--hubei-card-bg2": "#FFEDD9",
    // mix(#FFFFFF, #FF7200, 90%)
    "--hubei-card-bg3": "#FFCB99"
    // mix(#FFFFFF, #FF7200, 70%)
  },
  BlueViolet: {
    "--hubei-primary": "#885FFB",
    "--hubei-primary-light": "#E2D8FE",
    "--hubei-primary-light2": "#B45FFF",
    "--hubei-border-color": "#dcdee0",
    "--hubei-border-color-light": "#C4AFFD",
    // mix(#FFFFFF, #885FFB, 50%)
    "--hubei-card-bg": "#F6F4FE",
    // mix(#FFFFFF, #885FFB, 95%)
    "--hubei-card-bg2": "#EDE9FE",
    // mix(#FFFFFF, #885FFB, 90%)
    "--hubei-card-bg3": "#CCBFFC"
    // mix(#FFFFFF, #885FFB, 70%)
  },
  LemonYellow: {
    "--hubei-primary": "#FFC10C",
    "--hubei-primary-light": "#FFF1C7",
    "--hubei-primary-light2": "#FFCC00",
    "--hubei-border-color": "#dcdee0",
    "--hubei-border-color-light": "#FFE086",
    // mix(#FFFFFF, #FFC10C, 50%)
    "--hubei-card-bg": "#FFFBF3",
    // mix(#FFFFFF, #FFC10C, 95%)
    "--hubei-card-bg2": "#FFF7E6",
    // mix(#FFFFFF, #FFC10C, 90%)
    "--hubei-card-bg3": "#FFEA99"
    // mix(#FFFFFF, #FFC10C, 70%)
  }
};
const iconMapBase = {
  // 我的页面
  mine_my_team: "my_team.png",
  mine_my_user: "my_user.png",
  mine_my_feedback: "my_feedback.png",
  mine_my_check: "my_check.png",
  mine_my_bid: "my_bid.png",
  mine_my_hold: "my_hold.png",
  location: "location.png",
  result_success: "success.png",
  talent_entry_1: "talent-entry-1.png",
  talent_entry_2: "talent-entry-2.png",
  join_icon: "join-icon.png",
  match_apply_bg: "match-apply-bg.png",
  talent_entry_bg: "talent-entry-bg.png",
  match_group_bg: "match-group-bg.png",
  match_top: "match-top.png",
  association_top_bg: "association-top-bg.png",
  bid_bg: "bid-bg.png",
  match_apply_bg: "match-apply-bg.png",
  match_group_bg: "match-group-bg.png",
  news_top_bg: "news-top-bg.png",
  poster_bg: "poster_bg.png",
  publish_bak: "publish_bak.png",
  search_top_bg: "search-top-bg.png",
  edit_bg: "edit_bg.png",
  tabbar_home: "index.png",
  tabbar_home_active: "index-active.png",
  tabbar_match: "activity.png",
  tabbar_match_active: "activity-active.png",
  tabbar_mine: "mine.png",
  tabbar_mine_active: "mine-active.png",
  tabbar_association: "stadium.png",
  tabbar_association_active: "stadium-active.png"
};
const blueDefaultIconMap = {
  defaultNews: "https://cdn-static.papa.com.cn/jxpq/default-new.png",
  defaultStadium: "https://cdn-static.papa.com.cn/jxpq/default-stadium.png",
  defaultTrain: "https://cdn-static.papa.com.cn/jxpq/default-train.png",
  defaultImg: "https://cdn-static.papa.com.cn/jxpq/default.png",
  defaultAvatar: "https://cdn-static.papa.com.cn/jxpq/default-avatar.png"
};
const otherDefaultIconMap = {
  defaultNews: "https://cdn-static.papa.com.cn/yuncheng/empty/暂无内容.png",
  defaultStadium: "https://cdn-static.papa.com.cn/yuncheng/empty/暂无场馆.png",
  defaultTrain: "https://cdn-static.papa.com.cn/yuncheng/empty/暂无内容.png",
  defaultImg: "https://cdn-static.papa.com.cn/yuncheng/empty/暂无内容.png",
  defaultAvatar: "https://cdn-static.papa.com.cn/jxpq/avatar.png"
};
const themeIconMap = {
  SkyBlue: __spreadValues(__spreadValues({}, iconMapBase), blueDefaultIconMap),
  EcologicalGreen: __spreadValues(__spreadValues({}, iconMapBase), otherDefaultIconMap),
  ChinaRed: __spreadValues(__spreadValues({}, iconMapBase), otherDefaultIconMap),
  EnergeticOrange: __spreadValues(__spreadValues({}, iconMapBase), otherDefaultIconMap),
  BlueViolet: __spreadValues(__spreadValues({}, iconMapBase), otherDefaultIconMap),
  LemonYellow: __spreadValues(__spreadValues({}, iconMapBase), otherDefaultIconMap)
};
exports.themeIconMap = themeIconMap;
exports.themeStyleMap = themeStyleMap;
exports.themeTypeNameList = themeTypeNameList;
