"use strict";
const common_vendor = require("../../common/vendor.js");
const core_listMixins = require("../../core/listMixins.js");
const apis_common = require("../../apis/common.js");
require("../../utils/http.js");
require("../../core/config.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
const mytabs = () => "../../components/tabs/mytabs.js";
const _sfc_main = {
  mixins: [core_listMixins.listMixins],
  components: {
    mytabs
  },
  data() {
    return {
      current: 0,
      tab_list: [],
      type_id: "",
      tab_type: 1
    };
  },
  async onLoad(options) {
    if (options.type_id) {
      this.type_id = options.type_id;
    }
    await this.getTopList();
    this.getList();
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
  methods: {
    changeTab(index) {
      this.current = index;
      this.tab_type = this.tab_list[index].value;
      this.resetData();
    },
    async getList(refresh) {
      const param = {
        page: this.page,
        size: 10,
        type: this.tab_type,
        kind_id: 1
      };
      this.loading = true;
      let res = await apis_common.getNewsList(param);
      let _this = this;
      if (res.code === 200) {
        res.data.list.forEach((item) => {
          item.show_image = "";
          if (item.images_url.length > 0) {
            item.show_image = item.images_url[0];
          }
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
              _this.loadMore();
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
    // 获取类型顶部
    getTopList() {
      return new Promise(async (resolve) => {
        let param = {};
        if (this.type_id) {
          param = {
            type_id: +this.type_id
          };
        }
        const res = await apis_common.getWxNewsType(param);
        const empty = [];
        res.data.forEach((item) => {
          empty.push({
            name: item.text,
            value: item.value,
            is_independent_show: item.is_independent_show
          });
        });
        this.tab_list = empty.filter((item) => {
          return item.is_independent_show === 2;
        });
        this.tab_type = this.tab_list[0].value;
        resolve(1);
      });
    },
    open(index, item) {
      let {
        url,
        news_id
      } = item;
      if (url) {
        common_vendor.index.navigateTo({
          url: "/pages/webView/webView?url=" + encodeURIComponent(url)
        });
        return;
      }
      common_vendor.index.navigateTo({
        url: "/pages/newsDetail/newsDetail?news_id=" + news_id
      });
    }
  }
};
if (!Array) {
  const _component_mytabs = common_vendor.resolveComponent("mytabs");
  const _component_skeleton = common_vendor.resolveComponent("skeleton");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_component_mytabs + _component_skeleton + _component_empty + _easycom_uni_load_more2)();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.tab_list.length > 1
  }, $data.tab_list.length > 1 ? {
    b: common_vendor.o($options.changeTab),
    c: common_vendor.p({
      list: $data.tab_list,
      current: $data.current
    })
  } : {}, {
    d: common_vendor.f(_ctx.list, (item, index, i0) => {
      return common_vendor.e({
        a: index === 0
      }, index === 0 ? {
        b: item.show_image,
        c: common_vendor.t(item.name)
      } : common_vendor.e({
        d: item.show_image,
        e: common_vendor.t(item.name),
        f: item.released_time
      }, item.released_time ? {
        g: common_vendor.t(item.released_time)
      } : {
        h: common_vendor.t(item.c_time)
      }), {
        i: index,
        j: common_vendor.o(($event) => $options.open(index, item), index)
      });
    }),
    e: _ctx.showSkeleton
  }, _ctx.showSkeleton ? {} : {}, {
    f: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    g: common_vendor.p({
      status: _ctx.loadStatus
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-190076f1"], ["__file", "E:/gxm/uniapp-shandong/pages/newsList/newsList.vue"]]);
wx.createPage(MiniProgramPage);
