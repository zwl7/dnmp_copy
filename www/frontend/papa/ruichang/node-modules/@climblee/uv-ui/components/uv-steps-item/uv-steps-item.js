"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "uv-steps-item",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$15],
  data() {
    return {
      index: 0,
      childLength: 0,
      showLine: false,
      size: {
        height: 0,
        width: 0
      },
      parentData: {
        direction: "row",
        current: 0,
        activeColor: "",
        inactiveColor: "",
        activeIcon: "",
        inactiveIcon: "",
        dot: false
      }
    };
  },
  watch: {
    "parentData"(newValue, oldValue) {
    }
  },
  created() {
    this.init();
  },
  computed: {
    lineStyle() {
      var _a, _b;
      const style = {};
      if (this.parentData.direction === "row") {
        style.width = this.size.width + "px";
        style.left = this.size.width / 2 + "px";
      } else {
        style.height = this.size.height + "px";
      }
      style.backgroundColor = ((_b = (_a = this.parent.children) == null ? void 0 : _a[this.index + 1]) == null ? void 0 : _b.error) ? "#f56c6c" : this.index < this.parentData.current ? this.parentData.activeColor : this.parentData.inactiveColor;
      return style;
    },
    statusClass() {
      const {
        index,
        error
      } = this;
      const {
        current
      } = this.parentData;
      if (current == index) {
        return error === true ? "error" : "process";
      } else if (error) {
        return "error";
      } else if (current > index) {
        return "finish";
      } else {
        return "wait";
      }
    },
    statusColor() {
      let color = "";
      switch (this.statusClass) {
        case "finish":
          color = this.parentData.activeColor;
          break;
        case "error":
          color = "#f56c6c";
          break;
        case "process":
          color = this.parentData.dot ? this.parentData.activeColor : "transparent";
          break;
        default:
          color = this.parentData.inactiveColor;
          break;
      }
      return color;
    },
    contentStyle() {
      const style = {};
      if (this.parentData.direction === "column") {
        style.marginLeft = this.parentData.dot ? "2px" : "6px";
        style.marginTop = this.parentData.dot ? "0px" : "6px";
      } else {
        style.marginTop = this.parentData.dot ? "2px" : "6px";
        style.marginLeft = this.parentData.dot ? "2px" : "6px";
      }
      return style;
    }
  },
  mounted() {
    this.parent && this.parent.updateFromChild();
    this.$uv.sleep().then(() => {
      this.getStepsItemRect();
    });
  },
  methods: {
    init() {
      this.updateParentData();
      if (!this.parent) {
        return this.$uv.error("uv-steps-item必须要搭配uv-steps组件使用");
      }
      this.index = this.parent.children.indexOf(this);
      this.childLength = this.parent.children.length;
    },
    updateParentData() {
      this.getParentData("uv-steps");
    },
    // 父组件数据发生变化
    updateFromParent() {
      this.init();
    },
    // 获取组件的尺寸，用于设置横线的位置
    getStepsItemRect() {
      this.$uvGetRect(".uv-steps-item").then((size) => {
        this.size = size;
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_text2 = common_vendor.resolveComponent("uv-text");
  (_easycom_uv_icon2 + _easycom_uv_text2)();
}
const _easycom_uv_icon = () => "../uv-icon/uv-icon.js";
const _easycom_uv_text = () => "../uv-text/uv-text.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_text)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.index + 1 < $data.childLength
  }, $data.index + 1 < $data.childLength ? {
    b: common_vendor.n(`uv-steps-item__line--${$data.parentData.direction}`),
    c: common_vendor.s($options.lineStyle)
  } : {}, {
    d: $data.parentData.dot
  }, $data.parentData.dot ? {
    e: $options.statusColor
  } : $data.parentData.activeIcon || $data.parentData.inactiveIcon ? {
    g: common_vendor.p({
      name: $data.index <= $data.parentData.current ? $data.parentData.activeIcon : $data.parentData.inactiveIcon,
      size: _ctx.iconSize,
      color: $data.index <= $data.parentData.current ? $data.parentData.activeColor : $data.parentData.inactiveColor
    })
  } : common_vendor.e({
    h: $options.statusClass === "process" || $options.statusClass === "wait"
  }, $options.statusClass === "process" || $options.statusClass === "wait" ? {
    i: common_vendor.t($data.index + 1),
    j: $data.index == $data.parentData.current ? "#ffffff" : $data.parentData.inactiveColor
  } : {
    k: common_vendor.p({
      color: $options.statusClass === "error" ? "error" : $data.parentData.activeColor,
      size: "12",
      name: $options.statusClass === "error" ? "close" : "checkmark"
    })
  }, {
    l: $options.statusClass === "process" ? $data.parentData.activeColor : "transparent",
    m: $options.statusColor
  }), {
    f: $data.parentData.activeIcon || $data.parentData.inactiveIcon,
    n: common_vendor.n(`uv-steps-item__wrapper--${$data.parentData.direction}`),
    o: common_vendor.n($data.parentData.dot && `uv-steps-item__wrapper--${$data.parentData.direction}--dot`),
    p: common_vendor.p({
      text: _ctx.title,
      type: $data.parentData.current == $data.index ? "main" : "content",
      lineHeight: "20px",
      size: $data.parentData.current == $data.index ? 14 : 13
    }),
    q: common_vendor.p({
      text: _ctx.desc,
      type: "tips",
      size: "12"
    }),
    r: common_vendor.n(`uv-steps-item__content--${$data.parentData.direction}`),
    s: common_vendor.s($options.contentStyle),
    t: common_vendor.n(`uv-steps-item--${$data.parentData.direction}`),
    v: common_vendor.s(_ctx.$uv.addStyle(_ctx.customStyle))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-686aab93"]]);
wx.createComponent(Component);
//# sourceMappingURL=uv-steps-item.js.map
