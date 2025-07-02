"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      serchText: "",
      initSeletHeight: 0,
      seletHeight: 700,
      Height: 600,
      windowHeight: "",
      //外层活动框高度
      windowHeightIn: "",
      //内层层活动框高度
      disabled: true
    };
  },
  created(options) {
    setTimeout((res) => {
      common_vendor.index.getSystemInfo({
        success: (res2) => {
          this.windowHeight = res2.windowHeight * 2;
          this.windowHeightIn = res2.windowHeight;
          this.seletHeight = res2.windowHeight - 140;
          this.initSeletHeight = res2.windowHeight - 140;
          console.log({
            windowHeight: this.windowHeight,
            windowHeightIn: this.windowHeightIn,
            seletHeight: this.seletHeight,
            initSeletHeight: this.initSeletHeight
          });
        }
      });
    }, 50);
  },
  methods: {
    // 手指松开事件
    touchend(e) {
      const query = common_vendor.index.createSelectorQuery().in(this);
      query.select("#id").boundingClientRect((data) => {
        let topHeight = data.top.toFixed(1) * 1;
        let seletHeightCopy = this.seletHeight;
        if (this.seletHeight <= this.Height) {
          if (topHeight > 50) {
            if (topHeight > 50 && topHeight < 300) {
              seletHeightCopy = 300;
            } else {
              seletHeightCopy = this.initSeletHeight;
            }
          } else {
            seletHeightCopy = this.initSeletHeight;
          }
        } else {
          if (topHeight < 300) {
            seletHeightCopy = 0;
          } else {
            seletHeightCopy = 300;
          }
        }
        console.log(seletHeightCopy);
        this.seletHeight = seletHeightCopy;
        this.disabled = true;
      }).exec();
    },
    // 拖动触发
    movechange(e) {
      this.Height = e.detail.y;
    },
    touchstart(e) {
      this.disabled = false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.touchstart && $options.touchstart(...args)),
    b: common_vendor.o((...args) => $options.touchend && $options.touchend(...args)),
    c: $data.seletHeight + "px",
    d: common_vendor.o((...args) => _ctx.handleTouchMove && _ctx.handleTouchMove(...args)),
    e: common_vendor.o((...args) => $options.movechange && $options.movechange(...args)),
    f: $data.seletHeight,
    g: $data.disabled,
    h: $data.windowHeightIn + "px",
    i: $data.windowHeight + "px"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=mapTouch.js.map
