"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  props: {
    calcHeight: {
      type: Number,
      default: 220
      // 没有tabbar 140， 有tabbar 200
    }
  },
  data() {
    return {
      serchText: "",
      initSeletHeight: 0,
      seletHeight: 700,
      Height: 600,
      windowHeight: "",
      windowHeightIn: "",
      disabled: true,
      // 位置状态
      positions: {
        top: 0,
        middle: 0,
        bottom: 0
      },
      // 触摸相关数据
      touch: {
        startY: 0,
        lastY: 0,
        startTime: 0,
        moveSpeed: 0
      },
      // 当前位置状态
      currentPosition: "bottom"
      // 'top', 'middle', 'bottom'
    };
  },
  created() {
    setTimeout(() => {
      this.initPositions();
    }, 50);
  },
  methods: {
    initPositions() {
      common_vendor.index.getSystemInfo({
        success: (res) => {
          const windowHeight = res.windowHeight;
          this.positions.top = 0;
          this.positions.middle = Math.floor(windowHeight * 0.3);
          this.positions.bottom = windowHeight - this.calcHeight;
          this.windowHeight = windowHeight * 2;
          this.windowHeightIn = windowHeight;
          this.seletHeight = this.positions.bottom;
          this.initSeletHeight = this.positions.bottom;
        }
      });
    },
    touchstart(e) {
      const touch = e.touches[0];
      this.touch.startY = touch.clientY;
      this.touch.lastY = touch.clientY;
      this.touch.startTime = Date.now();
      this.touch.moveSpeed = 0;
      this.disabled = false;
    },
    touchmove(e) {
      const touch = e.touches[0];
      const currentY = touch.clientY;
      const deltaY = currentY - this.touch.lastY;
      const deltaTime = Date.now() - this.touch.startTime;
      this.touch.moveSpeed = deltaY / deltaTime;
      this.touch.lastY = currentY;
    },
    touchend(e) {
      const query = common_vendor.index.createSelectorQuery().in(this);
      query.select("#id").boundingClientRect((data) => {
        const topHeight = data.top;
        const totalMoveDistance = this.touch.startY - this.touch.lastY;
        const moveSpeed = this.touch.moveSpeed;
        let finalPosition = this.decideFinalPosition(topHeight, totalMoveDistance, moveSpeed);
        this.seletHeight = this.positions[finalPosition];
        this.currentPosition = finalPosition;
        this.disabled = true;
        console.log("最终位置：", finalPosition, "高度：", this.seletHeight);
      }).exec();
    },
    decideFinalPosition(topHeight, totalMoveDistance, moveSpeed) {
      const SPEED_THRESHOLD = 0.5;
      const DISTANCE_THRESHOLD = 10;
      if (Math.abs(moveSpeed) > SPEED_THRESHOLD) {
        if (moveSpeed < 0) {
          return topHeight < this.positions.middle ? "top" : "middle";
        } else {
          return topHeight > this.positions.middle ? "bottom" : "middle";
        }
      }
      switch (this.currentPosition) {
        case "bottom":
          if (totalMoveDistance > DISTANCE_THRESHOLD) {
            return "middle";
          }
          return "bottom";
        case "middle":
          if (Math.abs(totalMoveDistance) < DISTANCE_THRESHOLD) {
            return "middle";
          }
          return totalMoveDistance > 0 ? "top" : "bottom";
        case "top":
          if (totalMoveDistance < -10) {
            return "middle";
          }
          return "top";
        default:
          return "bottom";
      }
    },
    movechange(e) {
      this.Height = e.detail.y;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.touchstart && $options.touchstart(...args)),
    b: common_vendor.o((...args) => $options.touchmove && $options.touchmove(...args)),
    c: common_vendor.o((...args) => $options.touchend && $options.touchend(...args)),
    d: $data.seletHeight + "px",
    e: common_vendor.o((...args) => $options.movechange && $options.movechange(...args)),
    f: $data.seletHeight,
    g: $data.disabled,
    h: $data.windowHeightIn + "px",
    i: $data.windowHeight + "px"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
