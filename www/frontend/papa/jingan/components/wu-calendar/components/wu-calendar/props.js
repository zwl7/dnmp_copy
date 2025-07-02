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
var _a, _b;
const common_vendor = require("../../../../common/vendor.js");
const props = {
  props: __spreadValues({
    // 自定义当前时间
    date: {
      type: [String, Array],
      default: ""
    },
    // 日历类型(默认为month)
    type: {
      type: String,
      default: "month",
      validator(value) {
        return ["month", "week"].includes(value);
      }
    },
    // 日期选择模式
    mode: {
      type: String,
      default: "single"
    },
    // 是否使用默认日期(今天，默认为true)
    useToday: {
      type: Boolean,
      default: true
    },
    // 是否使用折叠功能
    fold: {
      type: Boolean,
      default: null
    },
    // 主题色
    color: {
      type: String,
      default: "#3c9cff"
    },
    // 取消文字的颜色
    cancelColor: {
      type: String,
      default: "#333"
    },
    // 确定文字的颜色
    confirmColor: {
      type: String,
      default: "#333"
    },
    // 	mode=range时，第一个日期底部的提示文字
    startText: {
      type: String,
      default: "开始"
    },
    // mode=range时，最后一个日期底部的提示文字
    endText: {
      type: String,
      default: "结束"
    },
    // 日历以周几开始
    startWeek: {
      type: String,
      default: "sun",
      validator(value) {
        return ["sun", "mon"].includes(value);
      }
    },
    // 打点，期待格式[{date: '2019-06-27', info: '签到', data: { custom: '自定义信息', name: '自定义消息头',xxx:xxx... }}]
    selected: {
      type: Array,
      default() {
        return [];
      }
    },
    // 是否显示农历
    lunar: {
      type: Boolean,
      default: false
    },
    // 日期选择范围-开始日期
    startDate: {
      type: String,
      default: ""
    },
    // 日期选择范围-结束日期
    endDate: {
      type: String,
      default: ""
    },
    // 允许日期选择范围内重选结束日期
    rangeEndRepick: {
      type: Boolean,
      default: false
    },
    // 允许日期选择范围起始日期为同一天
    rangeSameDay: {
      type: Boolean,
      default: false
    },
    // 允许日期选择范围内遇到打点禁用日期进行截断
    rangeHaveDisableTruncation: {
      type: Boolean,
      default: false
    },
    // 每月仅显示当月日期
    monthShowCurrentMonth: {
      type: Boolean,
      default: false
    },
    // 插入模式,可选值，ture：插入模式；false：弹窗模式； 默认为插入模式
    insert: {
      type: Boolean,
      default: true
    },
    // 滑动切换模式，可选值 horizontal: 横向 vertical：纵向 none： 不使用滑动切换
    slideSwitchMode: {
      type: String,
      default: "horizontal"
    },
    // 是否显示月份为背景
    showMonth: {
      type: Boolean,
      default: true
    },
    // 弹窗模式是否清空上次选择内容
    clearDate: {
      type: Boolean,
      default: true
    },
    // 是否点击遮罩层关闭
    maskClick: {
      type: Boolean,
      default: false
    },
    // 是否禁止点击日历
    disabledChoice: {
      type: Boolean,
      default: false
    },
    // 是否显示之前的顶部栏
    disabledOldHeader: {
      type: Boolean,
      default: false
    }
  }, (_b = (_a = common_vendor.index.$w) == null ? void 0 : _a.props) == null ? void 0 : _b.calendar)
};
exports.props = props;
