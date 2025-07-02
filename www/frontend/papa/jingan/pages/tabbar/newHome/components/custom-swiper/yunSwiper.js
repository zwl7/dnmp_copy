"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const pages_tabbar_newHome_components_customSwiper_props = require("./props.js");
const customSwiperIndicator = () => "../custom-swiper-indicator/custom-swiper-indicator.js";
const _sfc_main = {
  name: "uv-swiper",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, pages_tabbar_newHome_components_customSwiper_props.props],
  emits: ["click", "change"],
  components: {
    customSwiperIndicator
  },
  data() {
    return {
      currentIndex: 1
      // 初始化为中间索引
    };
  },
  watch: {
    current(val, preVal) {
      if (val === preVal)
        return;
      this.currentIndex = val;
    }
  },
  computed: {
    itemStyle() {
      return (index) => {
        const style = {};
        if (this.nextMargin && this.previousMargin) {
          style.borderRadius = this.$uv.addUnit(this.radius);
          if (index !== this.currentIndex)
            ;
        }
        return style;
      };
    }
  },
  mounted() {
  },
  methods: {
    getItemType(item) {
      if (typeof item === "string")
        return this.$uv.test.video(this.getSource(item)) ? "video" : "image";
      if (typeof item === "object" && this.keyName) {
        if (!item.type)
          return this.$uv.test.video(this.getSource(item)) ? "video" : "image";
        if (item.type === "image")
          return "image";
        if (item.type === "video")
          return "video";
        return "image";
      }
    },
    // 获取目标路径，可能数组中为字符串，对象的形式，额外可指定对象的目标属性名keyName
    getSource(item) {
      if (typeof item === "string")
        return item;
      console.log({ keyName: this.keyName, item });
      if (typeof item === "object" && this.keyName)
        return item[this.keyName];
      else
        this.$uv.error("请按格式传递列表参数");
      return "";
    },
    // 轮播切换事件
    change(e) {
      const { current } = e.detail;
      this.pauseVideo(this.currentIndex);
      const offset = Math.floor(this.displayMultipleItems / 2);
      this.currentIndex = (current + offset) % this.list.length;
      this.$emit("change", e.detail);
    },
    // 切换轮播时，暂停视频播放
    pauseVideo(index) {
      const lastItem = this.getSource(this.list[index]);
      if (this.$uv.test.video(lastItem)) {
        const video = common_vendor.index.createVideoContext(`video-${index}`, this);
        video.pause();
      }
    },
    // 当一个轮播item为视频时，获取它的视频海报
    getPoster(item) {
      return typeof item === "object" && item.poster ? item.poster : "";
    },
    // 点击某个item
    clickHandler(index) {
      this.$emit("click", index);
    }
  }
};
if (!Array) {
  const _easycom_uv_loading_icon2 = common_vendor.resolveComponent("uv-loading-icon");
  const _component_custom_swiper_indicator = common_vendor.resolveComponent("custom-swiper-indicator");
  (_easycom_uv_loading_icon2 + _component_custom_swiper_indicator)();
}
const _easycom_uv_loading_icon = () => "../../../../../node-modules/@climblee/uv-ui/components/uv-loading-icon/uv-loading-icon.js";
if (!Math) {
  _easycom_uv_loading_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.loading
  }, _ctx.loading ? {
    b: common_vendor.p({
      mode: "circle"
    })
  } : {
    c: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: "d-" + i0,
        b: common_vendor.r("d", {
          item,
          index
        }, i0),
        c: common_vendor.s($options.itemStyle(index)),
        d: index
      };
    }),
    d: _ctx.$uv.addUnit(_ctx.height),
    e: common_vendor.o((...args) => $options.change && $options.change(...args)),
    f: _ctx.circular,
    g: _ctx.vertical,
    h: _ctx.interval,
    i: _ctx.duration,
    j: _ctx.autoplay,
    k: _ctx.current,
    l: _ctx.currentItemId,
    m: _ctx.$uv.addUnit(_ctx.previousMargin),
    n: _ctx.$uv.addUnit(_ctx.nextMargin),
    o: _ctx.acceleration,
    p: _ctx.displayMultipleItems,
    q: _ctx.easingFunction
  }, {
    r: !_ctx.loading && _ctx.indicator && !_ctx.showTitle
  }, !_ctx.loading && _ctx.indicator && !_ctx.showTitle ? {
    s: common_vendor.p({
      indicatorActiveColor: _ctx.indicatorActiveColor,
      indicatorInactiveColor: _ctx.indicatorInactiveColor,
      length: _ctx.list.length,
      current: $data.currentIndex,
      indicatorMode: _ctx.indicatorMode
    })
  } : {}, {
    t: common_vendor.s(_ctx.$uv.addStyle(_ctx.indicatorStyle)),
    v: _ctx.bgColor,
    w: _ctx.$uv.addUnit(_ctx.height),
    x: _ctx.$uv.addUnit(_ctx.radius)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4c051f39"]]);
wx.createComponent(Component);
