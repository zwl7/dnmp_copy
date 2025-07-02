"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "paBackToTop",
  props: {
    // 返回顶部的形状，circle-圆形，square-方形
    mode: {
      type: String,
      default: "circle"
    },
    // 自定义图标
    icon: {
      type: String,
      default: "arrow-upward"
    },
    // 提示文字
    text: {
      type: String,
      default: ""
    },
    // 返回顶部滚动时间
    duration: {
      type: [String, Number],
      default: 200
    },
    // 滚动距离
    scrollTop: {
      type: [String, Number],
      default: 0
    },
    // 距离顶部多少距离显示，单位px
    top: {
      type: [String, Number],
      default: 400
    },
    // 返回顶部按钮到底部的距离，单位px
    bottom: {
      type: [String, Number],
      default: 150
    },
    // 返回顶部按钮到右边的距离，单位px
    right: {
      type: [String, Number],
      default: 20
    },
    // 层级
    zIndex: {
      type: [String, Number],
      default: 9
    },
    // 图标的样式，对象形式
    iconStyle: {
      type: Object,
      default: () => ({
        color: "#909399",
        fontSize: "19px"
      })
    }
  },
  computed: {
    backTopStyle() {
      const style = {
        bottom: this.bottom + "px",
        right: this.right + "px",
        width: "40px",
        height: "40px",
        position: "fixed",
        zIndex: 10
      };
      return style;
    },
    show() {
      return this.scrollTop > this.top;
    },
    contentStyle() {
      let radius = 0;
      if (this.mode === "circle") {
        radius = "100px";
      } else {
        radius = "4px";
      }
      return {
        borderRadius: radius
      };
    }
  },
  methods: {
    backToTop() {
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        duration: this.duration
      });
      this.$emit("click");
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_transition2 = common_vendor.resolveComponent("uv-transition");
  (_easycom_uv_icon2 + _easycom_uv_transition2)();
}
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_transition = () => "../../node-modules/@climblee/uv-ui/components/uv-transition/uv-transition.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_transition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      name: $props.icon,
      ["custom-style"]: $props.iconStyle
    }),
    b: $props.text
  }, $props.text ? {
    c: common_vendor.t($props.text)
  } : {}, {
    d: common_vendor.s($options.contentStyle),
    e: common_vendor.o((...args) => $options.backToTop && $options.backToTop(...args)),
    f: common_vendor.p({
      mode: "fade",
      customStyle: $options.backTopStyle,
      show: $options.show
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9b667617"]]);
wx.createComponent(Component);
//# sourceMappingURL=index.js.map
