"use strict";
const common_vendor = require("../../common/vendor.js");
const core_listMixins = require("../../core/listMixins.js");
const apis_index = require("../../apis/index.js");
require("../../utils/http.js");
require("../../core/config.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
const selectSearch = () => "./components/selectSearch.js";
const stadiumItem = () => "./components/stadiumItem.js";
const _sfc_main = {
  components: {
    selectSearch,
    stadiumItem
  },
  mixins: [core_listMixins.listMixins],
  data() {
    return {
      site_type: "",
      keyword: "",
      street_id: ""
    };
  },
  onLoad() {
    this.getList();
  },
  onReachBottom() {
    console.log("dasdasdssa");
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
    async getList(refresh) {
      const param = {
        page: this.page,
        size: 10,
        type_id: 8
      };
      if (this.keyword) {
        param.keyword = this.keyword;
      }
      if (this.site_type) {
        param.site_type = this.site_type;
      }
      if (this.street_id) {
        param.street_id = this.street_id;
      }
      this.loading = true;
      let res = await apis_index.getWxSite(param);
      let _this = this;
      if (res.code === 200) {
        res.data.list.map((e) => {
          e.show_image = e.images_url[0];
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
    getSearchData(data) {
      this.site_type = data.site_type;
      this.keyword = data.keyword;
      this.street_id = data.street_id;
      this.resetData();
    },
    toDetail(item) {
      let {
        site_id
      } = item;
      common_vendor.index.navigateTo({
        url: "/pages/associationDetail/associationDetail?site_id=" + site_id
      });
    }
  }
};
if (!Array) {
  const _component_select_search = common_vendor.resolveComponent("select-search");
  const _component_stadium_item = common_vendor.resolveComponent("stadium-item");
  const _component_skeleton = common_vendor.resolveComponent("skeleton");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_component_select_search + _component_stadium_item + _component_skeleton + _component_empty + _easycom_uni_load_more2)();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.getSearchData),
    b: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.o($options.toDetail, index),
        c: "1eb14132-1-" + i0,
        d: common_vendor.p({
          info: item
        })
      };
    }),
    c: _ctx.showSkeleton
  }, _ctx.showSkeleton ? {} : {}, {
    d: _ctx.showEmpty
  }, _ctx.showEmpty ? {
    e: common_vendor.p({
      paddingTop: "60rpx"
    })
  } : {}, {
    f: common_vendor.p({
      status: _ctx.loadStatus
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1eb14132"], ["__file", "E:/gxm/uniapp-shandong/pages/associationList/associationList.vue"]]);
wx.createPage(MiniProgramPage);
