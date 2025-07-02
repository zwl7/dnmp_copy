"use strict";
const common_vendor = require("../../common/vendor.js");
const core_listMixins = require("../../core/listMixins.js");
const apis_activity = require("../../apis/activity.js");
const utils_util = require("../../utils/util.js");
require("../../utils/http.js");
require("../../core/config.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
require("../../utils/qqmap-wx-jssdk.js");
const activityCalenderHeader = () => "./components/activityCalenderHeader.js";
const selectSearch = () => "./components/selectSearch.js";
const activityItem = () => "../activityAll/components/activityItem.js";
const _sfc_main = {
  components: {
    activityCalenderHeader,
    selectSearch,
    activityItem
  },
  mixins: [core_listMixins.listMixins],
  data() {
    return {
      status: 0,
      type_id: "",
      keyword: "",
      start_date: "",
      end_date: "",
      sport_tag_id: ""
    };
  },
  onLoad() {
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
  onPageScroll() {
    this.$refs["selectSearch"].closeAll();
  },
  methods: {
    async getList(refresh) {
      const param = {
        page: this.page,
        size: 10,
        status: this.status,
        start_date: this.start_date,
        end_date: this.end_date
      };
      if (this.keyword) {
        param.keyword = this.keyword;
      }
      if (this.type_id) {
        param.type_id = this.type_id;
      }
      if (this.street_id) {
        param.street_id = this.street_id;
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
      console.log(data);
      this.status = data.status;
      this.type_id = data.sport_tag_id;
      this.keyword = data.keyword;
      this.street_id = data.street_id;
      this.resetData();
    },
    getTimeDate(data) {
      let now = new Date(data);
      let str = utils_util.formatTimeBase(now, "{y}-{m}-{d}");
      this.start_date = str;
      this.end_date = str;
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
    },
    jumpToAll() {
      common_vendor.index.navigateTo({
        url: "/pages/activityAll/activityAll"
      });
    },
    clickCalender() {
      this.$refs["selectSearch"].closeAll();
    }
  }
};
if (!Array) {
  const _component_activityCalenderHeader = common_vendor.resolveComponent("activityCalenderHeader");
  const _component_select_search = common_vendor.resolveComponent("select-search");
  const _component_activity_item = common_vendor.resolveComponent("activity-item");
  const _component_skeleton = common_vendor.resolveComponent("skeleton");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_component_activityCalenderHeader + _component_select_search + _component_activity_item + _component_skeleton + _component_empty + _easycom_uni_load_more2)();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.jumpToAll),
    b: common_vendor.o($options.getTimeDate),
    c: common_vendor.o((...args) => $options.clickCalender && $options.clickCalender(...args)),
    d: common_vendor.sr("selectSearch", "a4039b90-1"),
    e: common_vendor.o($options.getSearchData),
    f: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.o(($event) => $options.toDetail(item), index),
        c: "a4039b90-2-" + i0,
        d: common_vendor.p({
          info: item
        })
      };
    }),
    g: _ctx.showSkeleton
  }, _ctx.showSkeleton ? {} : {}, {
    h: _ctx.showEmpty
  }, _ctx.showEmpty ? {
    i: common_vendor.p({
      paddingTop: "60rpx"
    })
  } : {}, {
    j: common_vendor.p({
      status: _ctx.loadStatus
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gxm/uniapp-shandong/pages/activityCalendar/activityCalendar.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
