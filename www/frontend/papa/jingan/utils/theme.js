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
  "BlueViolet",
  // 蓝紫色
  "GrassGreen"
  // 草绿
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
    "--hubei-tag-box-bg-color": "#409EFF",
    // #409EFF
    "--hubei-tag-box-font-color": "#ffffff",
    // #ffffff
    "--hubei-tag-box-border-color": "#409EFF",
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
    "--hubei-plain-button-bg-color": "transparent",
    //镂空按钮 #transparent
    "--hubei-plain-button-font-color": "#409EFF",
    //镂空按钮字体 #409EFF
    "--hubei-plain-button-border-color": "#409EFF",
    //镂空按钮边框 #409EFF
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
    "--hubei-list-page-bg-color": "linear-gradient($hubei-primary-light 0%, #f6f7f9 80%)",
    "--hubei-map-bg-color": " linear-gradient(180deg, #D6F7A3 0%, #FFFFFF 100%)"
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
    "--hubei-card-bg3": "#B3F0E1",
    // mix(#FFFFFF, #00CD97, 70%)
    //tabbar
    "--hubei-tabbar-font-color": "#666666",
    // #666666
    "--hubei-tabbar-font-active-color": "#00CD97",
    // #00CD97 
    // navbar 导航栏
    "--hubei-navbar-font-color": "#ffffff",
    // #ffffff
    "--hubei-navbar-bg-color": "#00CD97",
    // #00CD97
    // tabs 标签栏
    "--hubei-tabs-line-color": "#00CD97",
    // #00CD97
    "--hubei-tabs-active-color": "#00CD97",
    // #00CD97
    //tag-box 标签框
    "--hubei-tag-box-bg-color": "#00CD97",
    // #00CD97
    "--hubei-tag-box-font-color": "#ffffff",
    // #ffffff
    "--hubei-tag-box-border-color": "#00CD97",
    // #00CD97
    //button 按钮
    "--hubei-primary-button-bg-color": `#00CD97`,
    //主按钮 #00CD97
    "--hubei-primary-button-font-color": "#ffffff",
    //主按钮字体 #ffffff
    "--hubei-primary-button-border-color": "#00CD97",
    //主按钮边框 #00CD97
    "--hubei-primary-button-normal-opacity": "1",
    //主按钮正常状态 #1
    "--hubei-primary-button-hover-opacity": "0.7",
    //主按钮hover状态 #0.7
    "--hubei-primary-button-disabled-opacity": "0.2",
    //主按钮disabled状态 #0.2
    "--hubei-lesser-button-bg-color": "#00CD97",
    //次级 #00CD97
    "--hubei-lesser-button-font-color": "#ffffff",
    //次级字体 #ffffff
    "--hubei-lesser-button-border-color": "#00CD97",
    //次级边框 #00CD97
    "--hubei-lesser-button-normal-opacity": "1",
    //次级正常状态 #1
    "--hubei-lesser-button-hover-opacity": "0.7",
    //次级hover状态 #0.7
    "--hubei-lesser-button-disabled-opacity": "0.2",
    //次级disabled状态 #0.2
    "--hubei-plain-button-bg-color": "transparent",
    //镂空按钮 #transparent
    "--hubei-plain-button-font-color": "#00CD97",
    //镂空按钮字体 #00CD97
    "--hubei-plain-button-border-color": "#00CD97",
    //镂空按钮边框 #00CD97
    "--hubei-plain-button-normal-opacity": "1",
    //镂空按钮正常状态 #1
    "--hubei-plain-button-hover-opacity": "0.7",
    //镂空按钮hover状态 #0.7
    "--hubei-plain-button-disabled-opacity": "0.2",
    //镂空按钮disabled状态 #0.2
    // 报名表单卡片
    "--hubei-apply-form-card-border-color": "#00CD97",
    // 边框颜色 #00CD97
    "--hubei-apply-form-card-index-bg-color": "#00CD97",
    // 序号背景颜色 #00CD97
    "--hubei-apply-form-card-index-font-color": "#ffffff",
    // 序号字体颜色 #ffffff
    // 列表
    "--hubei-list-page-bg-color": "linear-gradient($hubei-primary-light 0%, #f6f7f9 80%)",
    "--hubei-map-bg-color": " linear-gradient(180deg, #D6F7A3 0%, #FFFFFF 100%)"
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
    "--hubei-card-bg3": "#FAB7B4",
    // mix(#FFFFFF, #F94E47, 70%)
    //tabbar
    "--hubei-tabbar-font-color": "#666666",
    // #666666
    "--hubei-tabbar-font-active-color": "#409EFF",
    // #409EFF 
    // navbar 导航栏
    "--hubei-navbar-font-color": "#ffffff",
    // #ffffff
    "--hubei-navbar-bg-color": "#F94E47",
    // #F94E47
    // tabs 标签栏
    "--hubei-tabs-line-color": "#F94E47",
    // #F94E47
    "--hubei-tabs-active-color": "#F94E47",
    // #F94E47
    //tag-box 标签框
    "--hubei-tag-box-bg-color": "#F94E47",
    // #F94E47
    "--hubei-tag-box-font-color": "#ffffff",
    // #ffffff
    "--hubei-tag-box-border-color": "#F94E47",
    // #F94E47
    //button 按钮
    "--hubei-primary-button-bg-color": `#F94E47`,
    //主按钮 #F94E47
    "--hubei-primary-button-font-color": "#ffffff",
    //主按钮字体 #ffffff
    "--hubei-primary-button-border-color": "#F94E47",
    //主按钮边框 #F94E47
    "--hubei-primary-button-normal-opacity": "1",
    //主按钮正常状态 #1
    "--hubei-primary-button-hover-opacity": "0.7",
    //主按钮hover状态 #0.7
    "--hubei-primary-button-disabled-opacity": "0.2",
    //主按钮disabled状态 #0.2
    "--hubei-lesser-button-bg-color": "#F94E47",
    //次级 #F94E47
    "--hubei-lesser-button-font-color": "#ffffff",
    //次级字体 #ffffff
    "--hubei-lesser-button-border-color": "#F94E47",
    //次级边框 #F94E47
    "--hubei-lesser-button-normal-opacity": "1",
    //次级正常状态 #1
    "--hubei-lesser-button-hover-opacity": "0.7",
    //次级hover状态 #0.7
    "--hubei-lesser-button-disabled-opacity": "0.2",
    //次级disabled状态 #0.2
    "--hubei-plain-button-bg-color": "transparent",
    //镂空按钮 #transparent
    "--hubei-plain-button-font-color": "#F94E47",
    //镂空按钮字体 #F94E47
    "--hubei-plain-button-border-color": "#F94E47",
    //镂空按钮边框 #F94E47
    "--hubei-plain-button-normal-opacity": "1",
    //镂空按钮正常状态 #1
    "--hubei-plain-button-hover-opacity": "0.7",
    //镂空按钮hover状态 #0.7
    "--hubei-plain-button-disabled-opacity": "0.2",
    //镂空按钮disabled状态 #0.2
    // 报名表单卡片
    "--hubei-apply-form-card-border-color": "#F94E47",
    // 边框颜色 #F94E47
    "--hubei-apply-form-card-index-bg-color": "#F94E47",
    // 序号背景颜色 #F94E47
    "--hubei-apply-form-card-index-font-color": "#ffffff",
    // 序号字体颜色 #ffffff
    // 列表
    "--hubei-list-page-bg-color": "linear-gradient($hubei-primary-light 0%, #f6f7f9 80%)",
    "--hubei-map-bg-color": " linear-gradient(180deg, #D6F7A3 0%, #FFFFFF 100%)"
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
    "--hubei-card-bg3": "#FFCB99",
    // mix(#FFFFFF, #FF7200, 70%)
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
    "--hubei-tabs-line-color": "#FF7200",
    // #FF7200
    "--hubei-tabs-active-color": "#FF7200",
    // #FF7200
    //tag-box 标签框
    "--hubei-tag-box-bg-color": "#FF7200",
    // #FF7200
    "--hubei-tag-box-font-color": "#ffffff",
    // #ffffff
    "--hubei-tag-box-border-color": "#FF7200",
    // #FF7200
    //button 按钮
    "--hubei-primary-button-bg-color": `#FF7200`,
    //主按钮 #FF7200
    "--hubei-primary-button-font-color": "#ffffff",
    //主按钮字体 #ffffff
    "--hubei-primary-button-border-color": "#FF7200",
    //主按钮边框 #FF7200
    "--hubei-primary-button-normal-opacity": "1",
    //主按钮正常状态 #1
    "--hubei-primary-button-hover-opacity": "0.7",
    //主按钮hover状态 #0.7
    "--hubei-primary-button-disabled-opacity": "0.2",
    //主按钮disabled状态 #0.2
    "--hubei-lesser-button-bg-color": "#FF7200",
    //次级 #FF7200
    "--hubei-lesser-button-font-color": "#ffffff",
    //次级字体 #ffffff
    "--hubei-lesser-button-border-color": "#FF7200",
    //次级边框 #FF7200
    "--hubei-lesser-button-normal-opacity": "1",
    //次级正常状态 #1
    "--hubei-lesser-button-hover-opacity": "0.7",
    //次级hover状态 #0.7
    "--hubei-lesser-button-disabled-opacity": "0.2",
    //次级disabled状态 #0.2
    "--hubei-plain-button-bg-color": "transparent",
    //镂空按钮 #transparent
    "--hubei-plain-button-font-color": "#FF7200",
    //镂空按钮字体 #FF7200
    "--hubei-plain-button-border-color": "#FF7200",
    //镂空按钮边框 #FF7200
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
    // 列表
    "--hubei-list-page-bg-color": "linear-gradient($hubei-primary-light 0%, #f6f7f9 80%)",
    "--hubei-map-bg-color": " linear-gradient(180deg, #D6F7A3 0%, #FFFFFF 100%)"
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
    "--hubei-card-bg3": "#CCBFFC",
    // mix(#FFFFFF, #885FFB, 70%)
    //tabbar
    "--hubei-tabbar-font-color": "#666666",
    // #666666
    "--hubei-tabbar-font-active-color": "#885FFB",
    // #885FFB 
    // navbar 导航栏
    "--hubei-navbar-font-color": "#ffffff",
    // #ffffff
    "--hubei-navbar-bg-color": "#885FFB",
    // #885FFB
    // tabs 标签栏
    "--hubei-tabs-line-color": "#885FFB",
    // #885FFB
    "--hubei-tabs-active-color": "#885FFB",
    // #885FFB
    //tag-box 标签框
    "--hubei-tag-box-bg-color": "#409EFF",
    // #409EFF
    "--hubei-tag-box-font-color": "#ffffff",
    // #ffffff
    "--hubei-tag-box-border-color": "#885FFB",
    // #885FFB
    //button 按钮
    "--hubei-primary-button-bg-color": `#885FFB`,
    //主按钮 #885FFB
    "--hubei-primary-button-font-color": "#ffffff",
    //主按钮字体 #ffffff
    "--hubei-primary-button-border-color": "#885FFB",
    //主按钮边框 #885FFB
    "--hubei-primary-button-normal-opacity": "1",
    //主按钮正常状态 #1
    "--hubei-primary-button-hover-opacity": "0.7",
    //主按钮hover状态 #0.7
    "--hubei-primary-button-disabled-opacity": "0.2",
    //主按钮disabled状态 #0.2
    "--hubei-lesser-button-bg-color": "#885FFB",
    //次级 #885FFB
    "--hubei-lesser-button-font-color": "#ffffff",
    //次级字体 #ffffff
    "--hubei-lesser-button-border-color": "#885FFB",
    //次级边框 #885FFB
    "--hubei-lesser-button-normal-opacity": "1",
    //次级正常状态 #1
    "--hubei-lesser-button-hover-opacity": "0.7",
    //次级hover状态 #0.7
    "--hubei-lesser-button-disabled-opacity": "0.2",
    //次级disabled状态 #0.2
    "--hubei-plain-button-bg-color": "transparent",
    //镂空按钮 #transparent
    "--hubei-plain-button-font-color": "#885FFB",
    //镂空按钮字体 #885FFB
    "--hubei-plain-button-border-color": "#885FFB",
    //镂空按钮边框 #885FFB
    "--hubei-plain-button-normal-opacity": "1",
    //镂空按钮正常状态 #1
    "--hubei-plain-button-hover-opacity": "0.7",
    //镂空按钮hover状态 #0.7
    "--hubei-plain-button-disabled-opacity": "0.2",
    //镂空按钮disabled状态 #0.2
    // 报名表单卡片
    "--hubei-apply-form-card-border-color": "#885FFB",
    // 边框颜色 #885FFB
    "--hubei-apply-form-card-index-bg-color": "#885FFB",
    // 序号背景颜色 #885FFB
    "--hubei-apply-form-card-index-font-color": "#ffffff",
    // 序号字体颜色 #ffffff
    // 列表
    "--hubei-list-page-bg-color": "linear-gradient($hubei-primary-light 0%, #f6f7f9 80%)",
    "--hubei-map-bg-color": " linear-gradient(180deg, #D6F7A3 0%, #FFFFFF 100%)"
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
    "--hubei-card-bg3": "#FFEA99",
    // mix(#FFFFFF, #FFC10C, 70%)
    //tabbar
    "--hubei-tabbar-font-color": "#666666",
    // #666666
    "--hubei-tabbar-font-active-color": "#409EFF",
    // #409EFF 
    // navbar 导航栏
    "--hubei-navbar-font-color": "#ffffff",
    // #ffffff
    "--hubei-navbar-bg-color": "#FFC10C",
    // #FFC10C
    // tabs 标签栏
    "--hubei-tabs-line-color": "#FFC10C",
    // #FFC10C
    "--hubei-tabs-active-color": "#FFC10C",
    // #FFC10C
    //tag-box 标签框
    "--hubei-tag-box-bg-color": "#FFC10C",
    // #FFC10C
    "--hubei-tag-box-font-color": "#ffffff",
    // #ffffff
    "--hubei-tag-box-border-color": "#FFC10C",
    // #FFC10C
    //button 按钮
    "--hubei-primary-button-bg-color": `#FFC10C`,
    //主按钮 #FFC10C
    "--hubei-primary-button-font-color": "#ffffff",
    //主按钮字体 #ffffff
    "--hubei-primary-button-border-color": "#FFC10C",
    //主按钮边框 #FFC10C
    "--hubei-primary-button-normal-opacity": "1",
    //主按钮正常状态 #1
    "--hubei-primary-button-hover-opacity": "0.7",
    //主按钮hover状态 #0.7
    "--hubei-primary-button-disabled-opacity": "0.2",
    //主按钮disabled状态 #0.2
    "--hubei-lesser-button-bg-color": "#FFC10C",
    //次级 #FFC10C
    "--hubei-lesser-button-font-color": "#ffffff",
    //次级字体 #ffffff
    "--hubei-lesser-button-border-color": "#FFC10C",
    //次级边框 #FFC10C
    "--hubei-lesser-button-normal-opacity": "1",
    //次级正常状态 #1
    "--hubei-lesser-button-hover-opacity": "0.7",
    //次级hover状态 #0.7
    "--hubei-lesser-button-disabled-opacity": "0.2",
    //次级disabled状态 #0.2
    "--hubei-plain-button-bg-color": "transparent",
    //镂空按钮 #transparent
    "--hubei-plain-button-font-color": "#FFC10C",
    //镂空按钮字体 #FFC10C
    "--hubei-plain-button-border-color": "#FFC10C",
    //镂空按钮边框 #FFC10C
    "--hubei-plain-button-normal-opacity": "1",
    //镂空按钮正常状态 #1
    "--hubei-plain-button-hover-opacity": "0.7",
    //镂空按钮hover状态 #0.7
    "--hubei-plain-button-disabled-opacity": "0.2",
    //镂空按钮disabled状态 #0.2
    // 报名表单卡片
    "--hubei-apply-form-card-border-color": "#FFC10C",
    // 边框颜色 #FFC10C
    "--hubei-apply-form-card-index-bg-color": "#FFC10C",
    // 序号背景颜色 #FFC10C
    "--hubei-apply-form-card-index-font-color": "#ffffff",
    // 序号字体颜色 #ffffff
    // 列表
    "--hubei-list-page-bg-color": "linear-gradient($hubei-primary-light 0%, #f6f7f9 80%)",
    "--hubei-map-bg-color": " linear-gradient(180deg, #D6F7A3 0%, #FFFFFF 100%)"
  },
  GrassGreen: {
    "--hubei-primary": "#B8F412",
    "--hubei-primary-light": "#BDF51A",
    //  #BDF51A
    "--hubei-primary-light2": "#C2F527",
    //  #C2F527
    "--hubei-primary-font-color": "#303133",
    "--hubei-border-color": "#dcdee0",
    // 灰色
    "--hubei-border-color-light": "#DCFA89",
    // mix(#FFFFFF, #B8F412, 50%)
    "--hubei-card-bg": "#BDF51A",
    // mix(#FFFFFF, #B8F412, 95%)
    "--hubei-card-bg2": "#F7FEE9",
    // mix(#FFFFFF, #B8F412, 5%)
    "--hubei-card-bg3": "#D6FE99",
    // mix(#FFFFFF, #D6FE99, 70%)
    //tabbar
    "--hubei-tabbar-font-color": "#909399",
    // #909399
    "--hubei-tabbar-font-active-color": "#303133",
    // #303133 
    // navbar 导航栏
    "--hubei-navbar-font-color": "#000000",
    // #000000
    "--hubei-navbar-bg-color": "#ffffff",
    // #ffffff
    // tabs 标签栏
    "--hubei-tabs-line-color": "#303133",
    // #303133
    "--hubei-tabs-active-color": "#303133",
    // #303133
    //tag-box 标签框
    "--hubei-tag-box-bg-color": "rgba(184, 244, 18, 0.6)",
    // rgba(184, 244, 18, 0.6)
    "--hubei-tag-box-font-color": "#303133",
    // #409eff
    "--hubei-tag-box-border-color": "rgba(184, 244, 18, 0.6)",
    // rgba(184, 244, 18, 0.6)
    //button 按钮
    "--hubei-primary-button-bg-color": `#303133`,
    //主按钮 #303133
    "--hubei-primary-button-font-color": "#B8F412",
    //主按钮字体 #B8F412
    "--hubei-primary-button-border-color": "#303133",
    //主按钮边框 #303133
    "--hubei-primary-button-normal-opacity": "1",
    //主按钮正常状态 #1
    "--hubei-primary-button-hover-opacity": "0.7",
    //主按钮hover状态 #0.7
    "--hubei-primary-button-disabled-opacity": "0.7",
    //主按钮disabled状态 #0.2
    "--hubei-lesser-button-bg-color": "#B8F412",
    //次级 #B8F412
    "--hubei-lesser-button-font-color": "#303133",
    //次级字体 #303133
    "--hubei-lesser-button-border-color": "#303133",
    //次级边框 #303133
    "--hubei-lesser-button-normal-opacity": "1",
    //次级正常状态 #1
    "--hubei-lesser-button-hover-opacity": "0.7",
    //次级hover状态 #0.7
    "--hubei-lesser-button-disabled-opacity": "0.7",
    //次级disabled状态 #0.7
    "--hubei-plain-button-bg-color": "transparent",
    //镂空按钮 #transparent
    "--hubei-plain-button-font-color": "#303133",
    //镂空按钮字体 #409eff
    "--hubei-plain-button-border-color": "#303133",
    //镂空按钮边框 #409eff
    "--hubei-plain-button-normal-opacity": "1",
    //镂空按钮正常状态 #1
    "--hubei-plain-button-hover-opacity": "0.7",
    //镂空按钮hover状态 #0.7
    "--hubei-plain-button-disabled-opacity": "0.7",
    //镂空按钮disabled状态 #0.7
    // 报名表单卡片
    "--hubei-apply-form-card-border-color": "#303133",
    // 边框颜色 #303133
    "--hubei-apply-form-card-index-bg-color": "#303133",
    // 序号背景颜色 #303133
    "--hubei-apply-form-card-index-font-color": "#B8F412",
    // 序号字体颜色 #B8F412
    // 列表
    "--hubei-list-page-bg-color": "#F7F8FA",
    "--hubei-map-bg-color": " linear-gradient(180deg, #D6F7A3 0%, #FFFFFF 100%)"
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
  yun_lesson_bg: "lesson-top-bg.png",
  // 云课堂背景
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
  tabbar_association_active: "stadium-active.png",
  // 点赞图标
  thumb: "thumb.svg",
  thumb_fill: "thumb-fill.svg"
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
  LemonYellow: __spreadValues(__spreadValues({}, iconMapBase), otherDefaultIconMap),
  GrassGreen: __spreadValues(__spreadValues({}, iconMapBase), otherDefaultIconMap)
};
exports.themeIconMap = themeIconMap;
exports.themeStyleMap = themeStyleMap;
exports.themeTypeNameList = themeTypeNameList;
