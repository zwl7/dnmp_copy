"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const centerPopue = () => "../../../../../components/centerPopue/index.js";
const bottomButton = () => "../../../../../components/bottomButton.js";
const _sfc_main = {
  name: "VisitorViewCommentPopup",
  components: {
    centerPopue,
    bottomButton
  },
  props: {
    // view/edit
    evaluteMode: {
      type: String,
      default: "view"
    },
    initStart: {
      type: String,
      default: ""
    }
  },
  computed: {
    evaluteText() {
      var _a;
      let text = "";
      if (this.ratingMap[this.startcount + ""]) {
        text = (_a = this.ratingMap[this.startcount + ""]) == null ? void 0 : _a.text;
      }
      return text || "请评分";
    }
  },
  data() {
    return {
      showComment: false,
      showRatePopup: false,
      rating: 0,
      rateTexts: ["很差", "一般", "满意", "不错", "非常满意"],
      count: 5,
      startcount: 0,
      // evaluteMode: 'view', // view/edit
      levelMap: {
        1: "https://cdn-static.papa.com.cn/jingAn/icon/nation-level.png",
        2: "https://cdn-static.papa.com.cn/jingAn/icon/first-level.png",
        3: "https://cdn-static.papa.com.cn/jingAn/icon/second-level.png",
        4: "https://cdn-static.papa.com.cn/jingAn/icon/three-level.png",
        5: "https://cdn-static.papa.com.cn/jingAn/icon/other-level.png"
      },
      myEvalue: {
        common: 4,
        detail: 3
      },
      ratingMap: {
        1: {
          text: "非常差",
          value: "bad"
        },
        2: {
          text: "较差",
          value: "poor"
        },
        3: {
          text: "一般",
          value: "avg"
        },
        4: {
          text: "满意",
          value: "good"
        },
        5: {
          text: "非常满意",
          value: "excellent"
        }
      }
    };
  },
  methods: {
    handleSubmit() {
      if (this.startcount === 0) {
        common_vendor.index.showToast({
          title: "请选择评价",
          icon: "none"
        });
        return;
      }
      const value = this.ratingMap[this.startcount].value;
      this.$emit("submit", value);
    },
    open() {
      console.log("initStart", this.initStart);
      this.$refs["centerPopue"].open();
      let count = 0;
      if (this.evaluteMode === "edit") {
        count = 5;
        this.startcount = 0;
      } else {
        Object.keys(this.ratingMap).forEach((key) => {
          if (this.ratingMap[key].value === this.initStart) {
            count = key;
          }
        });
        this.startcount = count;
      }
      this.$nextTick(() => {
        this.$refs["rateRef"].getRateItemRect();
        this.$refs["rateRef"].getRateIconWrapRect();
      });
    },
    close() {
      this.$nextTick(() => {
        this.$refs["centerPopue"].close();
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_rate2 = common_vendor.resolveComponent("uv-rate");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _component_centerPopue = common_vendor.resolveComponent("centerPopue");
  (_easycom_uv_rate2 + _component_bottomButton + _component_centerPopue)();
}
const _easycom_uv_rate = () => "../../../../../node-modules/@climblee/uv-ui/components/uv-rate/uv-rate.js";
if (!Math) {
  _easycom_uv_rate();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.evaluteMode == "edit" ? "您对该服务活动是否满意？" : "总体评价"),
    b: common_vendor.sr("rateRef", "0e06e440-1,0e06e440-0"),
    c: common_vendor.o(($event) => $data.startcount = $event),
    d: common_vendor.p({
      count: $data.count,
      size: "48rpx",
      gutter: "10",
      readonly: $props.evaluteMode == "view",
      activeIcon: "https://cdn-static.papa.com.cn/jingAn/icon/start-fill.svg",
      inactiveIcon: "https://cdn-static.papa.com.cn/jingAn/icon/start.svg",
      touchable: true,
      modelValue: $data.startcount
    }),
    e: common_vendor.t($options.evaluteText),
    f: $props.evaluteMode == "edit"
  }, $props.evaluteMode == "edit" ? {
    g: common_vendor.t($props.evaluteMode == "edit" ? "提交" : ""),
    h: common_vendor.o((...args) => $options.handleSubmit && $options.handleSubmit(...args))
  } : {}, {
    i: common_vendor.sr("centerPopue", "0e06e440-0"),
    j: common_vendor.p({
      title: "服务评价",
      customStyle: {}
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0e06e440"]]);
wx.createComponent(Component);
//# sourceMappingURL=VisitorViewCommentPopup.js.map
