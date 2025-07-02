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
const common_vendor = require("../../../common/vendor.js");
const apis_index = require("../../../apis/index.js");
const mixins_listMixins = require("../../../mixins/listMixins.js");
const navBar = () => "../../../components/navBar/index.js";
const _sfc_main = {
  mixins: [mixins_listMixins.listMixins],
  components: {
    navBar
  },
  data() {
    return {
      marginTop: 0,
      scrollTop: 0
    };
  },
  onLoad(options) {
    return __async(this, null, function* () {
      const app = getApp();
      let { navBarHeight } = app.globalData;
      this.marginTop = navBarHeight;
      this.getList();
    });
  },
  onReachBottom() {
    this.loadMore();
  },
  onPullDownRefresh() {
    this.page = 1;
    this.list = [];
    this.$nextTick(() => {
      this.getList(true);
    });
  },
  onPageScroll(event) {
    this.scrollTop = event.scrollTop;
  },
  methods: {
    getList(refresh) {
      return __async(this, null, function* () {
        const param = {
          page: this.page,
          size: 10
        };
        this.loading = true;
        let res = yield apis_index.getWxNoticeList(param);
        this.getListExtend(res, refresh);
      });
    },
    handleDataCallBack(list) {
      list.forEach((item) => {
        item.c_time = item.c_time.replace(/\-/g, "/");
      });
      return list;
    },
    handleClick(item) {
      let { url, notice_id } = item;
      if (url) {
        common_vendor.index.navigateTo({
          url: `/pages/webView/webView?url=${encodeURIComponent(url)}`
        });
        return;
      }
      common_vendor.index.navigateTo({
        url: `/pages/noticeDetail/noticeDetail?notice_id=${notice_id}`
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_paBackToTop = common_vendor.resolveComponent("paBackToTop");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_empty + _component_loadMore + _component_paBackToTop + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: "#fff",
      title: "公告消息",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: common_vendor.f(_ctx.list, (item, index, i0) => {
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
    c: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    d: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    e: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {}, {
    f: common_vendor.p({
      ["scroll-top"]: $data.scrollTop
    }),
    g: $data.marginTop + "px"
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
