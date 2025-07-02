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
  name: "uv-drop-down",
  mixins: [common_vendor.mpMixin, common_vendor.mixin],
  emits: ["click"],
  props: {
    isSticky: {
      type: Boolean,
      default: true
    },
    sign: {
      type: [String, Number],
      default: "UVDROPDOWN"
    },
    defaultValue: {
      type: Array,
      default: () => {
        return [];
      }
    },
    textSize: {
      type: String,
      default: "28rpx"
    },
    textColor: {
      type: String,
      default: "#303133"
    },
    textActiveSize: {
      type: String,
      default: "28rpx"
    },
    textActiveColor: {
      type: String,
      default: "#3c9cff"
    },
    extraIcon: {
      type: Object,
      default() {
        return {
          name: "arrow-down",
          size: "28rpx",
          color: "#303133"
        };
      }
    },
    extraActiveIcon: {
      type: Object,
      default() {
        return {
          name: "arrow-up",
          size: "28rpx",
          color: "#3c9cff"
        };
      }
    }
  },
  computed: {
    parentData() {
      return [
        this.defaultValue,
        this.textSize,
        this.textColor,
        this.textActiveColor,
        this.textActiveSize,
        this.extraIcon,
        this.extraActiveIcon,
        this.sign,
        this.clickHandler
      ];
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      common_vendor.index.$emit(`${this.sign}_CLICKMENU`, {
        show: false
      });
      this.$nextTick(() => __async(this, null, function* () {
        const rect = yield this.queryRect();
        common_vendor.index.$emit(`${this.sign}_GETRECT`, rect);
      }));
    },
    // 查询内容高度
    queryRect() {
      return new Promise((resolve) => {
        this.$uvGetRect(`.uv-drop-down`).then((size) => {
          resolve(size);
        });
      });
    },
    clickHandler(data) {
      this.$emit("click", data);
    }
  }
};
if (!Array) {
  const _easycom_uv_sticky2 = common_vendor.resolveComponent("uv-sticky");
  _easycom_uv_sticky2();
}
const _easycom_uv_sticky = () => "../../../../node-modules/@climblee/uv-ui/components/uv-sticky/uv-sticky.js";
if (!Math) {
  _easycom_uv_sticky();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s(_ctx.$uv.addStyle(_ctx.customStyle)),
    b: common_vendor.p({
      disabled: !$props.isSticky
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a6b340ba"]]);
wx.createComponent(Component);
