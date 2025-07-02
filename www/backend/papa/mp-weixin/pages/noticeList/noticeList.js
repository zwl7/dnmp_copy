"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_common = require("../../apis/common.js");
require("../../utils/http.js");
require("../../core/config.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
const _sfc_main = {
  data() {
    return {
      list: [],
      page: 1,
      count: 0,
      loading: false,
      finished: false
    };
  },
  computed: {
    loadStatus() {
      if (this.finished) {
        return "no-more";
      } else {
        if (this.loading) {
          return "loading";
        } else {
          return "more";
        }
      }
    },
    showSkeleton() {
      if (this.list.length == 0 && !this.finished && this.loading) {
        return true;
      }
    },
    showEmpty() {
      if (this.list.length == 0 && this.finished && !this.loading) {
        return true;
      }
    }
  },
  onLoad() {
    this.getList();
  },
  onReachBottom() {
    this.load();
  },
  onPullDownRefresh() {
    this.page = 1;
    this.list = [];
    this.$nextTick(() => {
      this.getList(true);
    });
  },
  onShareAppMessage() {
  },
  methods: {
    async getList(refresh) {
      const param = {
        page: this.page,
        size: 10
      };
      this.loading = true;
      let res = await apis_common.getWxNoticeList(param);
      let _this = this;
      if (res.code === 200) {
        res.data.list.forEach((item) => {
          item.c_time = item.c_time.replace(/\-/g, "/");
        });
        this.list = this.list.concat(res.data.list);
        this.count = res.data.count;
        this.loading = false;
        if (res.data.list.length === 0) {
          this.finished = true;
        }
        if (!this.finished) {
          this.$isFullScreen().then((fres) => {
            let {
              windowHeight,
              scrollHeight
            } = fres;
            if (windowHeight + 70 >= scrollHeight) {
              _this.load();
            }
          });
        }
        if (refresh) {
          common_vendor.index.stopPullDownRefresh();
        }
      } else {
        this.$showToastNone(res.message);
      }
    },
    load() {
      console.log("触底加载");
      if (this.finish) {
        console.log("加载完成");
        this.loading = false;
        return;
      }
      this.page = this.page + 1;
      this.getList();
    },
    open(notice_id, url) {
      if (url) {
        common_vendor.index.navigateTo({
          url: "/pages/webView/webView?url=" + encodeURIComponent(url)
        });
        return;
      }
      common_vendor.index.navigateTo({
        url: "/pages/notice/notice?notice_id=" + notice_id
      });
    }
  }
};
if (!Array) {
  const _component_skeleton = common_vendor.resolveComponent("skeleton");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_component_skeleton + _component_empty + _easycom_uni_load_more2)();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.list, (item, index, i0) => {
      return common_vendor.e({
        a: item.images_url.length > 0
      }, item.images_url.length > 0 ? {
        b: item.images_url
      } : {}, {
        c: common_vendor.t(item.name),
        d: item.released_time
      }, item.released_time ? {
        e: common_vendor.t(item.released_time)
      } : {
        f: common_vendor.t(item.c_time)
      }, {
        g: index,
        h: common_vendor.o(($event) => $options.open(item.notice_id, item.url), index)
      });
    }),
    b: $options.showSkeleton
  }, $options.showSkeleton ? {} : {}, {
    c: $options.showEmpty
  }, $options.showEmpty ? {} : {}, {
    d: common_vendor.p({
      status: $options.loadStatus
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-35ea0b61"], ["__file", "E:/gxm/uniapp-shandong/pages/noticeList/noticeList.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
