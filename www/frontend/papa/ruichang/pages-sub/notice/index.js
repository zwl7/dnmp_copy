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
const mixins_shareMixins = require("../../mixins/shareMixins.js");
const common_assets = require("../../common/assets.js");
const apis_home_index = require("../../apis/home/index.js");
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  components: {},
  data() {
    return {
      noticeBg: common_assets.noticeBg,
      dataList: [],
      scrollTop: 0
    };
  },
  created() {
  },
  methods: {
    //返回顶部
    backToTop() {
      var _a;
      (_a = this.$refs.pagingRef) == null ? void 0 : _a.scrollToTop();
    },
    pageScroll(event) {
      let scrollTop = event.detail.scrollTop;
      this.scrollTop = scrollTop;
    },
    queryList(pageNo, pageSize) {
      return __async(this, null, function* () {
        var _a;
        console.log("[ pageNo ] >", pageNo);
        console.log("[ pageSize ] >", pageSize);
        let params = {
          page: pageNo,
          size: pageSize,
          mp_type: "socialSports"
        };
        let res = yield apis_home_index.getWxNoticeList(params);
        console.log("[ res ] >", res);
        if (res.code == 200) {
          let list = res.data.list.map((e) => {
            e.show_img = "";
            if (e.images_url && e.images_url.length > 0) {
              e.show_img = e.images_url[0];
            }
            return e;
          });
          (_a = this.$refs.pagingRef) == null ? void 0 : _a.complete(list);
        }
      });
    },
    handleClick(item) {
      let { url, notice_id } = item;
      if (url) {
        common_vendor.index.navigateTo({
          url: `/pages-sub/webview/index?url=${encodeURIComponent(url)}`
        });
        return;
      }
      common_vendor.index.navigateTo({
        url: `/pages-sub/notice/detail?notice_id=${notice_id}`
      });
    }
  }
};
if (!Array) {
  const _component_paBackToTop = common_vendor.resolveComponent("paBackToTop");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_paBackToTop + _easycom_z_paging2 + _component_layout_default_uni)();
}
const _easycom_z_paging = () => "../../node-modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  _easycom_z_paging();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.noticeBg,
    b: common_vendor.f($data.dataList, (item, index, i0) => {
      return common_vendor.e({
        a: item.show_img
      }, item.show_img ? {
        b: item.show_img
      } : {}, {
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.c_time),
        e: index,
        f: common_vendor.o(($event) => $options.handleClick(item), index)
      });
    }),
    c: common_vendor.o($options.backToTop),
    d: common_vendor.p({
      ["scroll-top"]: $data.scrollTop
    }),
    e: common_vendor.sr("pagingRef", "9492a016-1,9492a016-0"),
    f: common_vendor.o($options.queryList),
    g: common_vendor.o($options.pageScroll),
    h: common_vendor.o(($event) => $data.dataList = $event),
    i: common_vendor.p({
      ["auto-height"]: true,
      ["empty-view-text"]: "暂无数据",
      ["empty-view-img"]: "/static/images/empty.png",
      ["empty-view-img-style"]: {
        width: "160px",
        height: "160px"
      },
      modelValue: $data.dataList
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9492a016"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
