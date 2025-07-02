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
const common_vendor = require("../../common/vendor.js");
const core_themeMixins = require("../../core/themeMixins.js");
const _sfc_main = {
  mixins: [core_themeMixins.themeMixins],
  name: "InsuranceCard",
  props: {
    //已投保人数
    peopleNum: {
      type: Number,
      default: 0
    },
    //需要购买保险人数
    needBuy: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: "buy"
      //buy  购买  see 查看
    },
    insurance_product_id: {
      type: [Number, String],
      default: ""
    },
    //投保要求  1=自愿投保,2=强制投保
    insurance_requirement: {
      type: [Number, String],
      default: ""
    }
  },
  data() {
    return {
      product_insure_url: ""
      //保险链接
    };
  },
  computed: {
    forceInsureText() {
      let textMap = {
        2: "需要购买保障",
        1: "推荐购买保障"
      };
      return textMap[this.insurance_requirement];
    },
    showIsGetCard() {
      return this.peopleNum == this.needBuy && this.needBuy != 0;
    }
  },
  watch: {},
  methods: {
    handleClicknow() {
      this.$refs.popup.close();
    },
    goBuyInsurance() {
      this.$emit("buyInsurance");
    },
    // 查看保险
    seeInsurance() {
      this.$refs.popup.open("center");
    },
    //点击右上角
    handleRightIcon() {
      common_vendor.index.$uv.throttle(() => __async(this, null, function* () {
        this.type === "buy" ? this.goBuyInsurance() : this.seeInsurance();
      }), 1e3);
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
  (_easycom_uv_icon2 + _easycom_uv_popup2)();
}
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_popup = () => "../../node-modules/@climblee/uv-ui/components/uv-popup/uv-popup.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($options.forceInsureText),
    b: common_vendor.t($props.type === "buy" ? "去投保" : "去查看"),
    c: common_vendor.p({
      color: _ctx.themePrimaryColorGetter,
      name: "arrow-right"
    }),
    d: common_vendor.o((...args) => $options.handleRightIcon && $options.handleRightIcon(...args)),
    e: common_vendor.t($props.peopleNum),
    f: $options.showIsGetCard
  }, $options.showIsGetCard ? {} : {}, {
    g: common_vendor.o((...args) => $options.handleClicknow && $options.handleClicknow(...args)),
    h: common_vendor.sr("popup", "20534cc4-1"),
    i: common_vendor.p({
      customStyle: {
        "background-color": "transparent"
      }
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-20534cc4"]]);
wx.createComponent(Component);
