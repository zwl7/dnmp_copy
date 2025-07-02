"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  emits: ["click", "close", "change"],
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$38],
  watch: {
    text: {
      immediate: true,
      handler(newValue, oldValue) {
        if (!this.$uv.test.array(newValue)) {
          this.$uv.error("noticebar组件direction为column时，要求text参数为数组形式");
        }
      }
    }
  },
  computed: {
    // 文字内容的样式
    textStyle() {
      let style = {};
      style.color = this.color;
      style.fontSize = this.$uv.addUnit(this.fontSize);
      return style;
    },
    // 垂直或者水平滚动
    vertical() {
      if (this.mode == "horizontal")
        return false;
      else
        return true;
    },
    // NVUE中的swiper在css中样式不生效
    swiperStyle() {
      const style = {};
      return style;
    }
  },
  data() {
    return {
      index: 0
    };
  },
  methods: {
    noticeChange(e) {
      this.index = e.detail.current;
      this.$emit("change", this.index);
    },
    // 点击通告栏
    clickHandler() {
      this.$emit("click", this.index);
    },
    // 点击关闭按钮
    close() {
      this.$emit("close");
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  _easycom_uv_icon2();
}
const _easycom_uv_icon = () => "../uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.icon
  }, _ctx.icon ? {
    b: common_vendor.p({
      name: _ctx.icon,
      color: _ctx.color,
      size: "19"
    })
  } : {}, {
    c: common_vendor.f(_ctx.text, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    d: common_vendor.s($options.textStyle),
    e: _ctx.disableTouch,
    f: _ctx.step ? false : true,
    g: _ctx.duration,
    h: !_ctx.disableScroll,
    i: common_vendor.s($options.swiperStyle),
    j: common_vendor.o((...args) => $options.noticeChange && $options.noticeChange(...args)),
    k: ["link", "closable"].includes(_ctx.mode)
  }, ["link", "closable"].includes(_ctx.mode) ? common_vendor.e({
    l: _ctx.mode === "link"
  }, _ctx.mode === "link" ? {
    m: common_vendor.p({
      name: "arrow-right",
      size: 17,
      color: _ctx.color
    })
  } : {}, {
    n: _ctx.mode === "closable"
  }, _ctx.mode === "closable" ? {
    o: common_vendor.o($options.close),
    p: common_vendor.p({
      name: "close",
      size: 16,
      color: _ctx.color
    })
  } : {}) : {}, {
    q: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-edae50b8"]]);
wx.createComponent(Component);
//# sourceMappingURL=uv-column-notice.js.map
