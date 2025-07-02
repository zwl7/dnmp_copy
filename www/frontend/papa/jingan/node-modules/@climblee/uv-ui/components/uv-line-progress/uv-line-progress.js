"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "uv-line-progress",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$22],
  data() {
    return {
      lineWidth: 0
    };
  },
  watch: {
    percentage(n) {
      this.resizeProgressWidth();
    }
  },
  computed: {
    progressStyle() {
      let style = {};
      style.width = this.lineWidth;
      style.backgroundColor = this.activeColor;
      style.height = this.$uv.addUnit(this.$uv.getPx(this.height));
      return style;
    },
    innserPercentage() {
      return this.$uv.range(0, 100, this.percentage);
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$uv.sleep(20).then(() => {
        this.resizeProgressWidth();
      });
    },
    getProgressWidth() {
      return this.$uvGetRect(".uv-line-progress__background");
    },
    resizeProgressWidth() {
      this.getProgressWidth().then((size) => {
        const {
          width
        } = size;
        this.lineWidth = width * this.innserPercentage / 100 + "px";
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.s({
      backgroundColor: _ctx.inactiveColor,
      height: _ctx.$uv.addUnit(_ctx.$uv.getPx(_ctx.height))
    }),
    b: _ctx.showText && _ctx.percentage >= 10
  }, _ctx.showText && _ctx.percentage >= 10 ? {
    c: common_vendor.t($options.innserPercentage + "%")
  } : {}, {
    d: common_vendor.s($options.progressStyle),
    e: common_vendor.s(_ctx.$uv.addStyle(_ctx.customStyle))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cf5ae23f"]]);
wx.createComponent(Component);
