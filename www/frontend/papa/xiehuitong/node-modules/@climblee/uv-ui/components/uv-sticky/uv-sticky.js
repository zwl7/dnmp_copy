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
const common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "uv-sticky",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$8],
  data() {
    return {
      cssSticky: false,
      // 是否使用css的sticky实现
      stickyTop: 0,
      // 吸顶的top值，因为可能受自定义导航栏影响，最终的吸顶值非offsetTop值
      elId: "",
      left: 0,
      // js模式时，吸顶的内容因为处于postition: fixed模式，为了和原来保持一致的样式，需要记录并重新设置它的left，height，width属性
      width: "auto",
      height: "auto",
      fixed: false
      // js模式时，是否处于吸顶模式
    };
  },
  computed: {
    style() {
      const style = {};
      if (!this.disabled) {
        if (this.cssSticky) {
          style.position = "sticky";
          style.zIndex = this.uZindex;
          style.top = this.$uv.addUnit(this.stickyTop);
        } else {
          style.height = this.fixed ? this.height + "px" : "auto";
        }
      } else {
        style.position = "static";
      }
      style.backgroundColor = this.bgColor;
      return this.$uv.deepMerge(this.$uv.addStyle(this.customStyle), style);
    },
    // 吸顶内容的样式
    stickyContent() {
      const style = {};
      if (!this.cssSticky) {
        style.position = this.fixed ? "fixed" : "static";
        style.top = this.stickyTop + "px";
        style.left = this.left + "px";
        style.width = this.width == "auto" ? "auto" : this.width + "px";
        style.zIndex = this.uZindex;
      }
      return style;
    },
    uZindex() {
      return this.zIndex ? this.zIndex : 970;
    }
  },
  created() {
    this.elId = this.$uv.guid();
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getStickyTop();
      this.checkSupportCssSticky();
      if (!this.cssSticky) {
        !this.disabled && this.initObserveContent();
      }
    },
    initObserveContent() {
      this.$uvGetRect("#" + this.elId).then((res) => {
        this.height = res.height;
        this.left = res.left;
        this.width = res.width;
        this.$nextTick(() => {
          this.observeContent();
        });
      });
    },
    observeContent() {
      this.disconnectObserver("contentObserver");
      const contentObserver = common_vendor.index.createIntersectionObserver({
        // 检测的区间范围
        thresholds: [0.95, 0.98, 1]
      });
      contentObserver.relativeToViewport({
        top: -this.stickyTop
      });
      contentObserver.observe(`#${this.elId}`, (res) => {
        this.setFixed(res.boundingClientRect.top);
      });
      this.contentObserver = contentObserver;
    },
    setFixed(top) {
      const fixed = top <= this.stickyTop;
      this.fixed = fixed;
    },
    disconnectObserver(observerName) {
      const observer = this[observerName];
      observer && observer.disconnect();
    },
    getStickyTop() {
      this.stickyTop = this.$uv.getPx(this.offsetTop) + this.$uv.getPx(this.customNavHeight);
    },
    checkSupportCssSticky() {
      return __async(this, null, function* () {
        if (this.$uv.os() === "android" && Number(this.$uv.sys().system) > 8) {
          this.cssSticky = true;
        }
        this.cssSticky = yield this.checkComputedStyle();
        if (this.$uv.os() === "ios") {
          this.cssSticky = true;
        }
      });
    },
    // 在APP和微信小程序上，通过uni.createSelectorQuery可以判断是否支持css sticky
    checkComputedStyle() {
      return new Promise((resolve) => {
        common_vendor.index.createSelectorQuery().in(this).select(".uv-sticky").fields({
          computedStyle: ["position"]
        }).exec((e) => {
          resolve("sticky" === e[0].position);
        });
      });
    },
    // H5通过创建元素的形式嗅探是否支持css sticky
    // 判断浏览器是否支持sticky属性
    checkCssStickyForH5() {
    }
  },
  unmounted() {
    this.disconnectObserver("contentObserver");
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s($options.stickyContent),
    b: $data.elId,
    c: common_vendor.s($options.style)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-80f5cda6"]]);
wx.createComponent(Component);
