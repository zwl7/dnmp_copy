"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "dropdownItem",
  components: {},
  emits: ["change", "maskClick"],
  props: {
    animation: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "center"
    },
    isMaskClick: {
      type: Boolean,
      default: null
    },
    maskClick: {
      type: Boolean,
      default: null
    },
    backgroundColor: {
      type: String,
      default: "none"
    },
    safeArea: {
      type: Boolean,
      default: true
    },
    maskBackgroundColor: {
      type: String,
      default: "rgba(0, 0, 0, 0.4)"
    },
    itemTop: {
      type: Number
    }
  },
  watch: {
    maskClick: {
      handler: function(val) {
        this.mkclick = val;
      },
      immediate: true
    },
    isMaskClick: {
      handler: function(val) {
        this.mkclick = val;
      },
      immediate: true
    },
    itemTop: {
      handler: function(val) {
        this.maskClass.top = val * 2 + "rpx";
      },
      immediate: true
    },
    // H5 下禁止底部滚动
    showPopup(show) {
    }
  },
  data() {
    return {
      duration: 300,
      ani: ["slide-top"],
      showPopup: false,
      showTrans: false,
      popupWidth: 0,
      popupHeight: 0,
      maskClass: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)"
      },
      transClass: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
      },
      maskShow: true,
      mkclick: true
    };
  },
  computed: {
    bg() {
      if (this.backgroundColor === "" || this.backgroundColor === "none") {
        return "transparent";
      }
      return this.backgroundColor;
    },
    unipopupTop() {
      return this.itemTop + "px";
    }
  },
  mounted() {
  },
  // TODO vue3
  unmounted() {
    this.setH5Visible();
  },
  created() {
    if (this.isMaskClick === null && this.maskClick === null) {
      this.mkclick = true;
    } else {
      this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
    }
    if (this.animation) {
      this.duration = 300;
    } else {
      this.duration = 0;
    }
    this.messageChild = null;
    this.clearPropagation = false;
    this.maskClass.backgroundColor = this.maskBackgroundColor;
  },
  methods: {
    setH5Visible() {
    },
    /**
     * 公用方法，不显示遮罩层
     */
    closeMask() {
      this.maskShow = false;
    },
    /**
     * 公用方法，遮罩层禁止点击
     */
    disableMask() {
      this.mkclick = false;
    },
    // TODO nvue 取消冒泡
    clear(e) {
      e.stopPropagation();
      this.clearPropagation = true;
    },
    open(direction) {
      this.top();
      this.$emit("change", {
        show: true,
        type: direction
      });
    },
    close(type) {
      this.showTrans = false;
      this.$emit("change", {
        show: false,
        type: this.type
      });
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.showPopup = false;
      }, 300);
    },
    touchstart() {
      this.clearPropagation = false;
    },
    onTap() {
      if (this.clearPropagation) {
        this.clearPropagation = false;
        return;
      }
      this.$emit("maskClick");
      if (!this.mkclick)
        return;
      this.close();
    },
    top(type) {
      this.popupstyle = "top";
      this.ani = ["slide-top"];
      this.transClass = {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: this.bg
      };
      if (type)
        return;
      this.showPopup = true;
      this.showTrans = true;
      this.$nextTick(() => {
        if (this.messageChild && this.type === "message") {
          this.messageChild.timerClose();
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_transition2 = common_vendor.resolveComponent("uni-transition");
  _easycom_uni_transition2();
}
const _easycom_uni_transition = () => "../../uni_modules/uni-transition/components/uni-transition/uni-transition.js";
if (!Math) {
  _easycom_uni_transition();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.showPopup
  }, $data.showPopup ? common_vendor.e({
    b: $data.maskShow
  }, $data.maskShow ? {
    c: common_vendor.o($options.onTap),
    d: common_vendor.p({
      name: "mask",
      ["mode-class"]: "fade",
      styles: $data.maskClass,
      duration: $data.duration,
      show: $data.showTrans
    })
  } : {}, {
    e: common_vendor.o((...args) => $options.clear && $options.clear(...args)),
    f: common_vendor.o($options.onTap),
    g: common_vendor.p({
      ["mode-class"]: $data.ani,
      name: "content",
      styles: $data.transClass,
      duration: $data.duration,
      show: $data.showTrans
    }),
    h: common_vendor.o((...args) => $options.touchstart && $options.touchstart(...args)),
    i: common_vendor.s({
      top: $options.unipopupTop
    })
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gxm/uniapp-shandong/components/dropdown/dropdown-item.vue"]]);
wx.createComponent(Component);
