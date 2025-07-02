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
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "uv-drop-down-popup",
  mixins: [common_vendor.mpMixin, common_vendor.mixin],
  props: {
    sign: {
      type: [String, Number],
      default: "UVDROPDOWN"
    },
    zIndex: {
      type: [Number, String],
      default: 999
    },
    opacity: {
      type: [Number, String],
      default: 0.5
    },
    clickOverlayOnClose: {
      type: Boolean,
      default: true
    },
    // 当前下拉选项对象
    currentDropItem: {
      type: Object,
      default() {
        return {
          activeIndex: 0,
          child: []
        };
      }
    },
    keyName: {
      type: String,
      default: "label"
    },
    useSlot: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false,
      rect: {},
      height: 0
    };
  },
  computed: {
    overlayStyle() {
      let { height = 0, top = 0 } = this.rect;
      const style = {
        position: "fixed",
        top: `${top + height}px`,
        left: 0,
        right: 0,
        zIndex: this.zIndex,
        bottom: 0,
        "background-color": `rgba(0, 0, 0, ${this.opacity})`
      };
      return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
    },
    list() {
      try {
        return Array.isArray(this.currentDropItem.child) ? this.currentDropItem.child : [];
      } catch (e) {
        return [];
      }
    },
    getTextColor(index) {
      return (index2) => {
        const active = this.currentDropItem.activeIndex == index2;
        const color = this.currentDropItem.color;
        const activeColor = this.currentDropItem.activeColor;
        if (active) {
          return activeColor ? activeColor : "#3c9cff";
        }
        return color ? color : "#333";
      };
    },
    getActive(index) {
      return (index2) => {
        const active = this.currentDropItem.activeIndex == index2;
        return active;
      };
    },
    getTextSize(index) {
      return (index2) => {
        const active = this.currentDropItem.activeIndex == index2;
        const size = this.currentDropItem.size;
        const activeSize = this.currentDropItem.activeSize;
        if (active) {
          return activeSize ? activeSize : "30rpx";
        }
        return size ? size : "30rpx";
      };
    },
    itemCustomStyle() {
      return (index) => {
        const active = this.currentDropItem.activeIndex == index;
        const style = {};
        if (active && this.currentDropItem.itemActiveCustomStyle) {
          return this.$uv.deepMerge(
            style,
            this.$uv.addStyle(this.currentDropItem.itemActiveCustomStyle)
          );
        }
        if (this.currentDropItem.itemCustomStyle) {
          return this.$uv.deepMerge(style, this.$uv.addStyle(this.currentDropItem.itemCustomStyle));
        }
        return style;
      };
    }
  },
  created() {
    this.init();
  },
  methods: {
    blockClick() {
    },
    clickHandler(item, index) {
      this.currentDropItem.activeIndex = index;
      this.$emit("clickItem", item);
      this.close();
    },
    init() {
      common_vendor.index.$off(`${this.sign}_GETRECT`);
      common_vendor.index.$on(`${this.sign}_GETRECT`, (rect) => {
        this.rect = rect;
      });
      common_vendor.index.$off(`${this.sign}_CLICKMENU`);
      common_vendor.index.$on(`${this.sign}_CLICKMENU`, (res) => __async(this, null, function* () {
        if (res.show) {
          this.open();
        } else {
          this.close();
        }
      }));
    },
    open() {
      this.show = true;
      this.$nextTick(() => __async(this, null, function* () {
        const res = yield this.queryRect();
        this.height = res.height;
        this.$emit("popupChange", { show: true });
      }));
    },
    close() {
      if (!this.show)
        return;
      this.height = 0;
      this.height = 0;
      this.show = false;
      common_vendor.index.$emit(`${this.sign}_CLOSEPOPUP`);
      this.$emit("popupChange", { show: false });
    },
    clickOverlay() {
      if (this.clickOverlayOnClose) {
        this.close();
      }
    },
    // 查询内容高度
    queryRect() {
      return new Promise((resolve) => {
        this.$uvGetRect(`.uv-dp__container__list`).then((size) => {
          resolve(size);
        });
      });
    },
    // nvue下设置高度
    animation(height, duration = 200) {
    }
  }
};
if (!Array) {
  const _easycom_uv_text2 = common_vendor.resolveComponent("uv-text");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_transition2 = common_vendor.resolveComponent("uv-transition");
  (_easycom_uv_text2 + _easycom_uv_icon2 + _easycom_uv_transition2)();
}
const _easycom_uv_text = () => "../../../../node-modules/@climblee/uv-ui/components/uv-text/uv-text.js";
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_transition = () => "../../../../node-modules/@climblee/uv-ui/components/uv-transition/uv-transition.js";
if (!Math) {
  (_easycom_uv_text + _easycom_uv_icon + _easycom_uv_transition)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.useSlot
  }, $props.useSlot ? {} : {}, {
    b: !$props.useSlot
  }, !$props.useSlot ? {
    c: common_vendor.f($options.list, (item, index, i0) => {
      return common_vendor.e({
        a: "33418d24-1-" + i0 + ",33418d24-0",
        b: common_vendor.p({
          text: item[$props.keyName],
          size: $options.getTextSize(index),
          color: $options.getTextColor(index)
        }),
        c: $options.getActive(index)
      }, $options.getActive(index) ? {
        d: "33418d24-2-" + i0 + ",33418d24-0",
        e: common_vendor.p({
          name: "checkmark",
          color: $options.getTextColor(index),
          size: "16"
        })
      } : {}, {
        f: index,
        g: common_vendor.o(($event) => $options.clickHandler(item, index), index),
        h: common_vendor.s($options.itemCustomStyle(index))
      });
    })
  } : {}, {
    d: `${$data.height}px`,
    e: common_vendor.o((...args) => $options.blockClick && $options.blockClick(...args)),
    f: common_vendor.o($options.clickOverlay),
    g: common_vendor.p({
      show: $data.show,
      mode: "fade",
      duration: 300,
      ["custom-style"]: $options.overlayStyle
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-33418d24"]]);
wx.createComponent(Component);
