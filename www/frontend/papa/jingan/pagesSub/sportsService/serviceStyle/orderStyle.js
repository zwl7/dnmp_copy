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
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const mixins_listMixins = require("../../../mixins/listMixins.js");
const utils_timeUtil = require("../../../utils/timeUtil.js");
const apis_sportsService_serviceStyle = require("../../../apis/sportsService/serviceStyle.js");
const common_vendor = require("../../../common/vendor.js");
const ServiceStyleItem = () => "../../../pages/tabbar/newHome/components/ServiceStyleItem/index.js";
const homeDropDown = () => "./components/homeDropDown.js";
const monthCard = () => "./components/monthCard.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins, mixins_listMixins.listMixins],
  components: {
    ServiceStyleItem,
    homeDropDown,
    monthCard
  },
  data() {
    return {
      tabs: [
        { name: "待评价", count: 3, key: "rating_wait" },
        { name: "全部", count: 8, key: "" }
      ],
      searchObj: {},
      list: [],
      scrollTop: 0,
      count: 0,
      timeObj: {
        start_time: "",
        end_time: ""
      },
      activityType: "",
      serveWorkDevStatus: "rating_wait"
    };
  },
  onLoad(options) {
    if (options.activityType) {
      this.activity_type = options.activityType;
    }
  },
  onShow() {
    this.getList();
  },
  methods: {
    onChangeMonthData(data) {
      console.log("[ data ] >", data);
      this.getSearchTime(data.year, data.month);
      this.resetData();
    },
    getSearchTime(year, month) {
      if (!year || !month) {
        let now = /* @__PURE__ */ new Date();
        year = now.getFullYear();
        month = now.getMonth() + 1;
      }
      let { start, end } = utils_timeUtil.getMonthStartAndEnd(year, month);
      this.timeObj = {
        start_time: utils_timeUtil.formatTimeBase(start, "{y}-{m}-{d}"),
        end_time: utils_timeUtil.formatTimeBase(end, "{y}-{m}-{d}")
      };
    },
    search(data) {
      this.searchObj = data;
      this.resetData();
    },
    getDataDemo() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: [
              {
                id: 1,
                name: "活动名称",
                time: "2022-01-01",
                address: "活动地点",
                type: "活动类型",
                status: "活动状态"
              }
            ],
            total: 10
          });
        }, 1e3);
      });
    },
    getList(refresh = false) {
      return __async(this, null, function* () {
        let params = {
          page: this.page,
          size: 10,
          serveWorkDevStatus: this.serveWorkDevStatus
        };
        const res = yield apis_sportsService_serviceStyle.getMyOderList(params);
        console.log({ res });
        if (res.code === 0) {
          console.log(this.$refs.pagingRef);
          res.data.listData.forEach((item) => {
            var _a;
            console.log({ item });
            item.images = (_a = item.image) == null ? void 0 : _a.split(",");
          });
          this.getListExtend(res, refresh);
        }
      });
    },
    // 切换tab栏
    changeTabs(e) {
      console.log({ e });
      this.serveWorkDevStatus = e.key;
      this.resetData();
    }
  }
};
if (!Array) {
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _component_ServiceStyleItem = common_vendor.resolveComponent("ServiceStyleItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_tabs2 + _component_ServiceStyleItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
const _easycom_uv_tabs = () => "../../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
if (!Math) {
  _easycom_uv_tabs();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.changeTabs),
    b: common_vendor.p({
      list: $data.tabs,
      customStyle: "width: 100%;height: 80rpx;",
      itemStyle: "width: 50%;height: 80rpx;box-sizing: border-box",
      lineColor: "#303133"
    }),
    c: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.o(_ctx.onLike, index),
        b: common_vendor.o(_ctx.onComment, index),
        c: "4af2bac9-2-" + i0 + ",4af2bac9-0",
        d: common_vendor.p({
          item,
          ["is-detail"]: true,
          isComment: true
        }),
        e: index
      };
    }),
    d: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    e: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    f: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4af2bac9"]]);
wx.createPage(MiniProgramPage);
