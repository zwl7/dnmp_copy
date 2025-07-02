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
const _sfc_main = {
  name: "noticebar",
  props: {
    dataConfig: {
      type: Object,
      default: () => {
      }
    },
    isSwiper: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      noticeText: [],
      noticeList: [],
      swiperList: []
    };
  },
  computed: {
    themeConfig() {
      return this.$store.app.themeConfig;
    },
    customStyle() {
      return {
        borderRadius: "100px"
      };
    }
  },
  methods: {
    getMore() {
      common_vendor.index.navigateTo({
        url: "/pages-sub/notice/index"
      });
    },
    handleClickNotice(index) {
      console.log("点击了通知", index);
    },
    handleClickClose(index) {
      console.log("关闭了通知", index);
    },
    getNoticeList() {
      return __async(this, null, function* () {
        let res = yield api_home_index.getWxNoticeRecommendList({ mp_type: "socialSports" });
        if (res.data.length > 0) {
          let text = res.data.map((e) => {
            return e.name;
          });
          this.noticeList = res.data;
          this.noticeText = text;
        }
      });
    }
  },
  created() {
    this.getNoticeList();
  }
};
if (!Array) {
  const _easycom_uv_notice_bar2 = common_vendor.resolveComponent("uv-notice-bar");
  _easycom_uv_notice_bar2();
}
const _easycom_uv_notice_bar = () => "../../../../../node-modules/@climblee/uv-ui/components/uv-notice-bar/uv-notice-bar.js";
if (!Math) {
  _easycom_uv_notice_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.handleClickNotice),
    b: common_vendor.o($options.handleClickClose),
    c: common_vendor.p({
      text: $data.noticeText,
      customStyle: $options.customStyle,
      direction: "column",
      color: $options.themeConfig["hubei-primary"],
      ["more-color"]: $options.themeConfig["hubei-primary"],
      bgColor: $options.themeConfig["hubei-primary-light"],
      mode: "link",
      url: "/pages-sub/notice/index"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dfeeb96a"]]);
wx.createComponent(Component);
//# sourceMappingURL=index.js.map
