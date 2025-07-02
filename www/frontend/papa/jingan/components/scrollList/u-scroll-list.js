"use strict";
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
const common_vendor = require("../../common/vendor.js");
const components_scrollList_props = require("./props.js");
const block0 = (Component2) => {
  if (!Component2.wxsCallMethods) {
    Component2.wxsCallMethods = [];
  }
  Component2.wxsCallMethods.push("scrollEvent");
};
const _sfc_main = {
  name: "u-scroll-list",
  options: {
    virtualHost: true
  },
  mixins: [components_scrollList_props.props],
  data() {
    return {
      scrollInfo: {
        scrollLeft: 0,
        scrollWidth: 0
      },
      scrollWidth: 0
    };
  },
  computed: {
    // 指示器为线型的样式
    barStyle() {
      const style = {};
      const scrollLeft = this.scrollInfo.scrollLeft, scrollWidth = this.scrollInfo.scrollWidth, barAllMoveWidth = this.indicatorWidth - this.indicatorBarWidth;
      const x = scrollLeft / (scrollWidth - this.scrollWidth) * barAllMoveWidth;
      style.transform = `translateX(${x}px)`;
      style.width = this.addUnit(this.indicatorBarWidth);
      style.backgroundColor = this.indicatorActiveColor;
      return style;
    },
    lineStyle() {
      const style = {};
      style.width = this.addUnit(this.indicatorWidth);
      style.backgroundColor = this.indicatorColor;
      return style;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getComponentWidth();
    },
    // scroll-view触发滚动事件
    scrollHandler(e) {
      this.scrollInfo = e.detail;
    },
    scrolltoupperHandler() {
      this.scrollEvent("left");
      this.scrollInfo.scrollLeft = 0;
    },
    scrolltolowerHandler() {
      this.scrollEvent("right");
      this.scrollInfo.scrollLeft = this.getPx(this.indicatorWidth) - this.getPx(this.indicatorBarWidth);
    },
    scrollEvent(status) {
      this.$emit(status);
    },
    // 获取组件的宽度
    getComponentWidth() {
      return __async(this, null, function* () {
        yield this.sleep(30);
        this.$uGetRect(".u-scroll-list").then((size) => {
          console.log(size);
          this.scrollWidth = size.width;
        });
      });
    },
    $uGetRect(selector, all) {
      return new Promise((resolve) => {
        common_vendor.index.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    },
    number(value) {
      return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
    },
    // xadsadasdasd
    addUnit(value = "auto", unit = "px") {
      value = String(value);
      return this.number(value) ? `${value}${unit}` : value;
    },
    getPx(value, unit = false) {
      if (this.number(value)) {
        return unit ? `${value}px` : Number(value);
      }
      if (/(rpx|upx)$/.test(value)) {
        return unit ? `${common_vendor.index.upx2px(parseInt(value))}px` : Number(common_vendor.index.upx2px(parseInt(value)));
      }
      return unit ? `${parseInt(value)}px` : parseInt(value);
    },
    sleep(value = 30) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, value);
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.scrollWidth,
    b: $options.getPx(_ctx.indicatorBarWidth),
    c: $options.getPx(_ctx.indicatorWidth),
    d: _ctx.indicator
  }, _ctx.indicator ? {
    e: common_vendor.s($options.barStyle),
    f: common_vendor.s($options.lineStyle)
  } : {});
}
if (typeof block0 === "function")
  block0(_sfc_main);
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-25498e12"]]);
wx.createComponent(Component);
