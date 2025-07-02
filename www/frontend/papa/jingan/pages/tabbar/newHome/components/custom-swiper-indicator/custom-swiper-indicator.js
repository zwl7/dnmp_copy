"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const pages_tabbar_newHome_components_customSwiperIndicator_props = require("./props.js");
const _sfc_main = {
  name: "uv-swiper-indicator",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, pages_tabbar_newHome_components_customSwiperIndicator_props.props],
  data() {
    return {
      lineWidth: 22
    };
  },
  computed: {
    // 指示器为线型的样式
    lineStyle() {
      let style = {};
      style.width = this.$uv.addUnit(this.lineWidth);
      style.transform = `translateX(${this.$uv.addUnit(this.current * this.lineWidth)})`;
      style.backgroundColor = this.indicatorActiveColor;
      return style;
    },
    // 指示器为点型的样式
    dotStyle() {
      return (index) => {
        let style = {};
        style.backgroundColor = index === this.current ? this.indicatorActiveColor : this.indicatorInactiveColor;
        return style;
      };
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.indicatorMode === "line"
  }, _ctx.indicatorMode === "line" ? {
    b: common_vendor.s($options.lineStyle),
    c: common_vendor.n(`uv-swiper-indicator__wrapper--${_ctx.indicatorMode}`),
    d: _ctx.$uv.addUnit($data.lineWidth * _ctx.length),
    e: _ctx.indicatorInactiveColor
  } : {}, {
    f: _ctx.indicatorMode === "dot"
  }, _ctx.indicatorMode === "dot" ? {
    g: common_vendor.f(_ctx.length, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.n(index === _ctx.current && "uv-swiper-indicator__wrapper__dot--active"),
        c: common_vendor.s($options.dotStyle(index))
      };
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-26b9e79f"]]);
wx.createComponent(Component);
