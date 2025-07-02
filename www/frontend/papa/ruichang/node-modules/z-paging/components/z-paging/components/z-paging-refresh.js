"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "z-paging-refresh",
  data() {
    return {
      R: common_vendor.Enum.Refresher,
      isIos: common_vendor.index.getSystemInfoSync().platform === "ios",
      refresherTimeText: "",
      zTheme: {
        title: { white: "#efefef", black: "#555555" },
        arrow: { white: common_vendor.zStatic.base64ArrowWhite, black: common_vendor.zStatic.base64Arrow },
        flower: { white: common_vendor.zStatic.base64FlowerWhite, black: common_vendor.zStatic.base64Flower },
        success: { white: common_vendor.zStatic.base64SuccessWhite, black: common_vendor.zStatic.base64Success },
        indicator: { white: "#eeeeee", black: "#777777" }
      }
    };
  },
  props: [
    "status",
    "defaultThemeStyle",
    "defaultText",
    "pullingText",
    "refreshingText",
    "completeText",
    "goF2Text",
    "defaultImg",
    "pullingImg",
    "refreshingImg",
    "completeImg",
    "refreshingAnimated",
    "showUpdateTime",
    "updateTimeKey",
    "imgStyle",
    "titleStyle",
    "updateTimeStyle",
    "updateTimeTextMap",
    "unit"
  ],
  computed: {
    ts() {
      return this.defaultThemeStyle;
    },
    // 当前状态数组
    statusTextArr() {
      this.updateTime();
      return [this.defaultText, this.pullingText, this.refreshingText, this.completeText, this.goF2Text];
    },
    // 当前状态文字
    currentTitle() {
      return this.statusTextArr[this.status] || this.defaultText;
    },
    // 左侧图片class
    leftImageClass() {
      const preSizeClass = `zp-r-left-image-pre-size-${this.unit}`;
      if (this.status === this.R.Complete)
        return preSizeClass;
      return `zp-r-left-image ${preSizeClass} ${this.status === this.R.Default ? "zp-r-arrow-down" : "zp-r-arrow-top"}`;
    },
    // 左侧图片style
    leftImageStyle() {
      const showUpdateTime = this.showUpdateTime;
      const size = showUpdateTime ? common_vendor.u.addUnit(36, this.unit) : common_vendor.u.addUnit(34, this.unit);
      return { width: size, height: size, "margin-right": showUpdateTime ? common_vendor.u.addUnit(20, this.unit) : common_vendor.u.addUnit(9, this.unit) };
    },
    // 左侧图片src
    leftImageSrc() {
      const R = this.R;
      const status = this.status;
      if (status === R.Default) {
        if (!!this.defaultImg)
          return this.defaultImg;
        return this.zTheme.arrow[this.ts];
      } else if (status === R.ReleaseToRefresh) {
        if (!!this.pullingImg)
          return this.pullingImg;
        if (!!this.defaultImg)
          return this.defaultImg;
        return this.zTheme.arrow[this.ts];
      } else if (status === R.Loading) {
        if (!!this.refreshingImg)
          return this.refreshingImg;
        return this.zTheme.flower[this.ts];
      } else if (status === R.Complete) {
        if (!!this.completeImg)
          return this.completeImg;
        return this.zTheme.success[this.ts];
      } else if (status === R.GoF2) {
        return this.zTheme.arrow[this.ts];
      }
      return "";
    },
    // 右侧文字style
    rightTextStyle() {
      let stl = {};
      stl["color"] = this.zTheme.title[this.ts];
      stl["font-size"] = common_vendor.u.addUnit(30, this.unit);
      return stl;
    }
  },
  methods: {
    // 添加单位
    addUnit(value, unit) {
      return common_vendor.u.addUnit(value, unit);
    },
    // 更新下拉刷新时间
    updateTime() {
      if (this.showUpdateTime) {
        this.refresherTimeText = common_vendor.u.getRefesrherFormatTimeByKey(this.updateTimeKey, this.updateTimeTextMap);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.status !== $data.R.Loading
  }, $props.status !== $data.R.Loading ? {
    b: common_vendor.n($options.leftImageClass),
    c: common_vendor.s($options.leftImageStyle),
    d: common_vendor.s($props.imgStyle),
    e: $options.leftImageSrc
  } : {
    f: $props.refreshingAnimated ? 1 : "",
    g: $props.unit === "rpx" ? 1 : "",
    h: $props.unit === "px" ? 1 : "",
    i: common_vendor.s($options.leftImageStyle),
    j: common_vendor.s($props.imgStyle),
    k: $options.leftImageSrc
  }, {
    l: common_vendor.t($options.currentTitle),
    m: common_vendor.s($options.rightTextStyle),
    n: common_vendor.s($props.titleStyle),
    o: $props.showUpdateTime && $data.refresherTimeText.length
  }, $props.showUpdateTime && $data.refresherTimeText.length ? {
    p: common_vendor.t($data.refresherTimeText),
    q: $props.unit === "rpx" ? 1 : "",
    r: $props.unit === "px" ? 1 : "",
    s: common_vendor.s({
      color: $data.zTheme.title[$options.ts]
    }),
    t: common_vendor.s($props.updateTimeStyle)
  } : {}, {
    v: common_vendor.n($props.showUpdateTime ? "zp-r-container zp-r-container-padding" : "zp-r-container")
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fff6d205"]]);
wx.createComponent(Component);
//# sourceMappingURL=z-paging-refresh.js.map
