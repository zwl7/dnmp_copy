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
const common_vendor = require("../../../../../common/vendor.js");
const CircleProgress = () => "../../../../../components/CircleProgress/index.js";
const centerPopue = () => "../../../../../components/centerPopue/index.js";
const CommentPopupTab = () => "./CommentPopupTab.js";
const _sfc_main = {
  name: "CreaterViewCommentPopup",
  props: {
    ratingObj: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  components: {
    CircleProgress,
    centerPopue,
    CommentPopupTab
  },
  data() {
    return {
      activeTab: 0,
      // 当前选中的tab 0:点单人评价 1:群众评价
      showComment: false,
      showRatePopup: false,
      rating: 0,
      rateTexts: ["很差", "一般", "满意", "不错", "非常满意"],
      count: 5,
      startcount: 0,
      evaluteMode: "edit",
      // view/edit
      levelMap: {
        1: "https://cdn-static.papa.com.cn/jingAn/icon/nation-level.png",
        2: "https://cdn-static.papa.com.cn/jingAn/icon/first-level.png",
        3: "https://cdn-static.papa.com.cn/jingAn/icon/second-level.png",
        4: "https://cdn-static.papa.com.cn/jingAn/icon/three-level.png",
        5: "https://cdn-static.papa.com.cn/jingAn/icon/other-level.png"
      },
      myEvalue: {
        common: 4,
        detail: 3
      },
      ratingMap: {
        1: {
          text: "非常差",
          value: "bad",
          numKey: "badNum",
          ratioKey: "badRatio",
          fillColor: "#c2a0ff"
        },
        2: {
          text: "差",
          value: "poor",
          fillColor: "#ff8585",
          ratioKey: "poorRatio",
          numKey: "poorNum"
        },
        3: {
          text: "一般",
          value: "avg",
          fillColor: "#6cb4ff",
          ratioKey: "avgRatio",
          numKey: "avgNum"
        },
        4: {
          text: "满意",
          value: "good",
          fillColor: "#ff8585",
          ratioKey: "goodRatio",
          numKey: "goodNum"
        },
        5: {
          text: "非常满意",
          value: "excellent",
          fillColor: "#fdae44",
          ratioKey: "excellentRatio",
          numKey: "excellentNum"
        }
      },
      rateCircleList: []
    };
  },
  watch: {
    ratingObj: {
      handler(val) {
        this.rateCircleList = Object.keys(this.ratingMap).map((key) => {
          const ratingItem = this.ratingMap[key];
          return __spreadProps(__spreadValues({}, ratingItem), {
            num: val[ratingItem.numKey],
            ratio: val[ratingItem.ratioKey] * 100
          });
        });
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    open() {
      this.$refs["myCenterPopue"].open();
    },
    close() {
      this.$refs["myCenterPopue"].close();
    },
    changeTab(index) {
      this.activeTab = index;
    },
    // 根据枚举获取实际的星星颗数
    getStartCount(enumText) {
      let COUNT = 0;
      let text = "";
      Object.keys(this.ratingMap).forEach((key) => {
        if (this.ratingMap[key].value === enumText) {
          COUNT = key;
          text = this.ratingMap[key].text;
        }
      });
      return [COUNT, text];
    }
  }
};
if (!Array) {
  const _easycom_uv_rate2 = common_vendor.resolveComponent("uv-rate");
  const _component_CommentPopupTab = common_vendor.resolveComponent("CommentPopupTab");
  const _component_circle_progress = common_vendor.resolveComponent("circle-progress");
  const _component_centerPopue = common_vendor.resolveComponent("centerPopue");
  (_easycom_uv_rate2 + _component_CommentPopupTab + _component_circle_progress + _component_centerPopue)();
}
const _easycom_uv_rate = () => "../../../../../node-modules/@climblee/uv-ui/components/uv-rate/uv-rate.js";
if (!Math) {
  _easycom_uv_rate();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("rateRef", "a2d3c16e-1,a2d3c16e-0"),
    b: common_vendor.p({
      count: $data.count,
      value: $options.getStartCount($props.ratingObj.overallRating)[0],
      size: "48rpx",
      gutter: "10",
      readonly: true,
      activeIcon: "https://cdn-static.papa.com.cn/jingAn/icon/start-fill.svg",
      inactiveIcon: "https://cdn-static.papa.com.cn/jingAn/icon/start.svg",
      touchable: true
    }),
    c: common_vendor.t($options.getStartCount($props.ratingObj.overallRating)[1] || "未评分"),
    d: common_vendor.o($options.changeTab),
    e: common_vendor.p({
      activeTab: $data.activeTab
    }),
    f: common_vendor.sr("rateRef", "a2d3c16e-3,a2d3c16e-0"),
    g: common_vendor.p({
      count: $data.count,
      value: $options.getStartCount($props.ratingObj.rating)[0],
      size: "48rpx",
      gutter: "10",
      readonly: true,
      activeIcon: "https://cdn-static.papa.com.cn/jingAn/icon/start-fill.svg",
      inactiveIcon: "https://cdn-static.papa.com.cn/jingAn/icon/start.svg",
      touchable: true
    }),
    h: common_vendor.t($options.getStartCount($props.ratingObj.rating)[1] || "未评分"),
    i: common_vendor.t($props.ratingObj.ratingTime),
    j: $data.activeTab === 0,
    k: common_vendor.t($props.ratingObj.praiseNum),
    l: common_vendor.f($data.rateCircleList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: common_vendor.t(item.num),
        c: "a2d3c16e-4-" + i0 + ",a2d3c16e-0",
        d: common_vendor.p({
          progressColor: item.fillColor,
          fontColor: "#838fa1",
          lineWidth: 8,
          percentage: item.ratio
        }),
        e: index
      };
    }),
    m: $data.activeTab === 1,
    n: common_vendor.sr("myCenterPopue", "a2d3c16e-0"),
    o: common_vendor.p({
      title: "满意度评价",
      customStyle: {}
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a2d3c16e"]]);
wx.createComponent(Component);
//# sourceMappingURL=CreaterViewCommentPopup.js.map
