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
require("../../../../utils/stroageUtils/storageUtil.js");
require("../../../../utils/thirdPartUtils/md5.js");
require("../../../../apis/sportsService/javaRequest.js");
const apis_sportsService_common = require("../../../../apis/sportsService/common.js");
const mixins_themeMixins = require("../../../../mixins/themeMixins.js");
const customSwiper = () => "./custom-swiper/yunSwiper.js";
const _sfc_main = {
  name: "YunLessonSection",
  mixins: [mixins_themeMixins.themeMixins],
  emits: ["play", "more"],
  components: {
    customSwiper
  },
  data() {
    return {
      list: []
    };
  },
  computed: {
    textColor() {
      return this.themeConfigGetter["--hubei-tabbar-font-active-color"];
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      return __async(this, null, function* () {
        try {
          const res = yield apis_sportsService_common.getCourseList({
            page: 1,
            size: 4,
            unique_code: 7,
            kind_id: 2
          });
          if (res.code === 200) {
            this.list = res.data.list;
          }
        } catch (e) {
          console.log({ e });
        }
      });
    },
    // 前往列表页
    toListPage() {
      common_vendor.index.navigateTo({
        url: "/pages/yunLesson/yunLesson"
      });
    },
    handleClick(item) {
      let { url, news_id } = item;
      if (url) {
        common_vendor.index.navigateTo({
          url: "/pages/view/webView?url=" + encodeURIComponent(url)
        });
        return;
      }
      common_vendor.index.navigateTo({
        url: "/pages/videoDetail/videoDetail?news_id=" + news_id
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_empty = common_vendor.resolveComponent("empty");
  (_easycom_uv_icon2 + _component_empty)();
}
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      size: "16px",
      name: "arrow-right",
      color: $options.textColor
    }),
    b: common_vendor.o((...args) => $options.toListPage && $options.toListPage(...args)),
    c: common_vendor.f($data.list, (item, k0, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.sub_title || item.tag_ids),
        c: item.video_banner
      }, item.video_banner ? {} : {}, {
        d: item.video_banner,
        e: common_vendor.o(($event) => _ctx.$emit("play", item), item.id || item.news_id),
        f: item.id || item.news_id,
        g: common_vendor.o(($event) => $options.handleClick(item), item.id || item.news_id)
      });
    }),
    d: $data.list.length === 0
  }, $data.list.length === 0 ? {
    e: common_vendor.p({
      marginTop: 0
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b867e29e"]]);
wx.createComponent(Component);
