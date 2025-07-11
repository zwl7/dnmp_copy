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
const apis_index = require("../../../../apis/index.js");
const _sfc_main = {
  name: "swiperList",
  // props: {
  //   list: {
  //     type: Array,
  //     default: () => {
  //       return []
  //     },
  //   },
  // },
  computed: {
    indicatorDots() {
      return false;
    },
    swiperName() {
      return this.list[this.currentswiper] ? this.list[this.currentswiper].name : "";
    }
  },
  watch: {
    list: {
      handler: function(val) {
        if (val && val.length > 0) {
          console.log("-------------", "swiper");
          this.currentswiper = 0;
        }
      },
      immediate: true
    }
  },
  data() {
    return {
      autoplay: true,
      interval: 3500,
      duration: 3500,
      // autoplay: false,
      // interval: 2000,
      // duration: 500,
      currentswiper: 0,
      name: "",
      list: []
    };
  },
  mounted() {
    this.getWxRecommendList();
  },
  methods: {
    clickSwiper(item) {
      console.log("点击轮播图", item);
      const { topic_id, small_type_id, url } = item;
      switch (small_type_id) {
        case 12:
          common_vendor.index.navigateTo({
            url: "/pages/activityDetail/activityDetail?activity_id=" + topic_id
          });
          break;
        case 26:
          common_vendor.index.navigateTo({
            url: "/pages/noticeDetail/noticeDetail?notice_id=" + topic_id
          });
          break;
        case 28:
          common_vendor.index.navigateTo({
            url: `/pages/newsDetail/newsDetail?news_id=${topic_id}&title=体育资讯`
          });
          break;
        case 120:
          if (url) {
            this.$openUrl(url);
          }
          return;
      }
    },
    getWxRecommendList() {
      return __async(this, null, function* () {
        let res = yield apis_index.getWxRecommend({});
        if (res.code == 200) {
          console.log({ swiper: res });
          this.list = res.data;
        } else {
          console.error(res.message);
        }
      });
    },
    monitorCurrent(e) {
      if (e.target.source == "autoplay" || e.target.source == "touch") {
        this.currentswiper = e.detail.current;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.list.length != 1
  }, $data.list.length != 1 ? {
    b: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.images_url,
        b: common_vendor.t(item.name),
        c: index,
        d: common_vendor.o(($event) => $options.clickSwiper(item), index)
      };
    }),
    c: common_vendor.o((...args) => $options.monitorCurrent && $options.monitorCurrent(...args)),
    d: $data.currentswiper,
    e: $options.indicatorDots,
    f: $data.autoplay,
    g: $data.interval,
    h: $data.duration
  } : {}, {
    i: $data.list.length == 1
  }, $data.list.length == 1 ? {
    j: common_vendor.f($data.list, (item, k0, i0) => {
      return {
        a: item.images_url,
        b: item,
        c: common_vendor.o(($event) => $options.clickSwiper(item), item)
      };
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9bc4a6fc"]]);
wx.createComponent(Component);
