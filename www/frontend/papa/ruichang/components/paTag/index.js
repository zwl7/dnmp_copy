"use strict";
const components_paTag_props = require("./props.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "uv-tags",
  emits: ["click", "close"],
  mixins: [components_paTag_props.props],
  computed: {
    style() {
      const style = {};
      if (this.bgColor) {
        style.backgroundColor = this.bgColor;
      }
      if (this.color) {
        style.color = this.color;
      }
      if (this.borderColor) {
        style.borderColor = this.borderColor;
      }
      return style;
    },
    // nvue下，文本颜色无法继承父元素
    textColor() {
      const style = {};
      if (this.color) {
        style.color = this.color;
      }
      return style;
    },
    imgStyle() {
      const width = this.size === "large" ? "17px" : this.size === "medium" ? "15px" : "13px";
      return {
        width,
        height: width
      };
    },
    // 图标大小
    iconSize() {
      const size = this.size === "large" ? 21 : this.size === "medium" ? 19 : 16;
      return size;
    },
    // 图标颜色
    elIconColor() {
      return this.iconColor ? this.iconColor : this.plain ? this.type : "#ffffff";
    }
  },
  methods: {
    // 点击标签
    clickHandler() {
      this.$emit("click", this.name);
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  _easycom_uv_icon2();
}
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.icon
  }, _ctx.icon ? common_vendor.e({
    b: _ctx.$uv.test.image(_ctx.icon)
  }, _ctx.$uv.test.image(_ctx.icon) ? {
    c: _ctx.icon,
    d: common_vendor.s($options.imgStyle)
  } : {
    e: common_vendor.p({
      color: $options.elIconColor,
      name: _ctx.icon,
      size: $options.iconSize
    })
  }) : {}, {
    f: common_vendor.t(_ctx.text),
    g: common_vendor.s($options.textColor),
    h: common_vendor.n(`uv-tags__text--${_ctx.type}`),
    i: common_vendor.n(_ctx.plain && `uv-tags__text--${_ctx.type}--plain`),
    j: common_vendor.n(`uv-tags__text--${_ctx.size}`),
    k: common_vendor.n(`uv-tags--${_ctx.shape}`),
    l: common_vendor.n(!_ctx.plain && `uv-tags--${_ctx.type}`),
    m: common_vendor.n(_ctx.plain && `uv-tags--${_ctx.type}--plain`),
    n: common_vendor.n(`uv-tags--${_ctx.size}`),
    o: common_vendor.n(`uv-tags--${_ctx.size}--${_ctx.closePlace}`),
    p: common_vendor.n(_ctx.plain && _ctx.plainFill && `uv-tags--${_ctx.type}--plain--fill`),
    q: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args)),
    r: common_vendor.s({
      marginRight: _ctx.closable && _ctx.closePlace == "right-top" ? "10px" : 0,
      marginTop: _ctx.closable && _ctx.closePlace == "right-top" ? "10px" : 0
    }),
    s: common_vendor.s($options.style)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1c487779"]]);
wx.createComponent(Component);
//# sourceMappingURL=index.js.map
