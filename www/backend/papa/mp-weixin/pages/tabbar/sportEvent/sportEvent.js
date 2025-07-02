"use strict";
const common_vendor = require("../../../common/vendor.js");
const core_listMixins = require("../../../core/listMixins.js");
const apis_activity = require("../../../apis/activity.js");
require("../../../utils/http.js");
require("../../../core/config.js");
require("../../../utils/token.js");
require("../../../utils/storageUtil.js");
const selectSearch = () => "../../activityAll/components/selectSearch.js";
const activityItem = () => "../../activityAll/components/activityItem.js";
const _sfc_main = {
  components: {
    selectSearch,
    activityItem
  },
  mixins: [core_listMixins.listMixins],
  data() {
    return {
      status: "",
      type_id: "",
      keyword: ""
    };
  },
  onLoad() {
    this.getList();
  },
  onShow() {
    let app = getApp();
    if (app.globalData.eventRefresh) {
      app.globalData.eventRefresh = false;
      this.resetData();
    }
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
    async getList(refresh) {
      let app = getApp();
      const param = {
        page: this.page,
        size: 10,
        status: 9999
      };
      if (this.keyword) {
        param.keyword = this.keyword;
      }
      if (this.status) {
        param.status = this.status;
      }
      if (this.type_id) {
        param.type_id = this.type_id;
      }
      if (app.globalData.city_id) {
        param.street_id = app.globalData.city_id;
      }
      this.loading = true;
      let res = await apis_activity.getWxActivityList(param);
      let _this = this;
      if (res.code === 200) {
        res.data.list.map((e) => {
          e.show_images = e.images_url[0];
          e.start_time_str = this.toSubstring(e.start_time);
          e.end_time_str = this.toSubstring(e.end_time);
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
    toSubstring(str) {
      var newStr = str.substring(5, 10);
      newStr = newStr.replace("-", "月") + "日";
      return newStr;
    },
    getSearchData(data) {
      this.status = data.status;
      this.type_id = data.type_id;
      this.keyword = data.keyword;
      this.resetData();
    },
    toDetail(item) {
      console.log("活动详情", item);
      let {
        activity_id
      } = item;
      common_vendor.index.navigateTo({
        url: "/pages/activityDetail/activityDetail?activity_id=" + activity_id
      });
    }
  }
};
if (!Array) {
  const _component_select_search = common_vendor.resolveComponent("select-search");
  const _component_activity_item = common_vendor.resolveComponent("activity-item");
  const _component_skeleton = common_vendor.resolveComponent("skeleton");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_component_select_search + _component_activity_item + _component_skeleton + _component_empty + _easycom_uni_load_more2)();
}
const _easycom_uni_load_more = () => "../../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.getSearchData),
    b: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.o(($event) => $options.toDetail(item), index),
        c: "3394cfc7-1-" + i0,
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3394cfc7"], ["__file", "E:/gxm/uniapp-shandong/pages/tabbar/sportEvent/sportEvent.vue"]]);
wx.createPage(MiniProgramPage);
