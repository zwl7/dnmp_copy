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
const api_home_index = require("../../../../../api/home/index.js");
const noticebar = () => "../noticeBar/index.js";
const _sfc_main = {
  components: {
    noticebar
  },
  props: {
    dataConfig: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      noticeText: "",
      noticeList: [],
      swiperList: []
    };
  },
  computed: {
    showSwiperTitle() {
      var _a, _b;
      return ((_b = (_a = this.dataConfig) == null ? void 0 : _a.showSwiperTitle) == null ? void 0 : _b.value) == 1;
    },
    showNoticeBar() {
      var _a, _b;
      return ((_b = (_a = this.dataConfig) == null ? void 0 : _a.showNoticeBar) == null ? void 0 : _b.value) == 1;
    },
    heightStyle() {
      var _a, _b;
      return ((_b = (_a = this.dataConfig) == null ? void 0 : _a.height) == null ? void 0 : _b.value) || 442;
    },
    themeConfig() {
      return this.$store.app.themeConfig;
    },
    swiperStyle() {
      return {
        height: this.heightStyle + "rpx"
      };
    }
  },
  methods: {
    getWxRecommendList() {
      return __async(this, null, function* () {
        let res = yield api_home_index.getWxRecommend({});
        if (res.code == 200) {
          this.swiperList = res.data;
        }
      });
    },
    clickSwiper(item) {
      const { topic_id, type_id, url } = item;
      switch (type_id) {
        case 1:
          common_vendor.index.navigateTo({
            url: `/pages-sub/notice/detail?notice_id=${topic_id}`
          });
          break;
        case 7:
          if (url) {
            window.location.href = url;
          }
          break;
      }
    }
  },
  created() {
    this.getWxRecommendList();
  }
};
if (!Array) {
  const _component_noticebar = common_vendor.resolveComponent("noticebar");
  _component_noticebar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.swiperList, (item, index, i0) => {
      return common_vendor.e($options.showSwiperTitle ? {
        a: common_vendor.t(item.name)
      } : {}, {
        b: item.images_url,
        c: index,
        d: common_vendor.o(($event) => $options.clickSwiper(item), index)
      });
    }),
    b: $options.showSwiperTitle,
    c: common_vendor.s($options.swiperStyle),
    d: $options.showNoticeBar
  }, $options.showNoticeBar ? {
    e: common_vendor.p({
      isSwiper: true
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-65b4bd2e"]]);
wx.createComponent(Component);
//# sourceMappingURL=index.js.map
