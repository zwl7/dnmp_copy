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
    // zPaging,
  },
  data() {
    return {
      searchObj: {},
      dataList: [],
      scrollTop: 0,
      count: 0,
      timeObj: {
        start_time: "",
        end_time: ""
      },
      activityType: ""
    };
  },
  onLoad(options) {
    if (options.activityType) {
      this.activity_type = options.activityType;
    }
  },
  onShow() {
    this.resetData();
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
      this.getList();
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
          size: 10
          // ...this.searchObj,
          // ...this.timeObj,
        };
        const res = yield apis_sportsService_serviceStyle.getMyStyleList(params);
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
    }
  }
};
if (!Array) {
  const _component_ServiceStyleItem = common_vendor.resolveComponent("ServiceStyleItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_ServiceStyleItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o(_ctx.onLike, index),
        b: common_vendor.o(_ctx.onComment, index),
        c: "67ee010a-1-" + i0 + ",67ee010a-0",
        d: common_vendor.p({
          item,
          ["is-detail"]: true,
          ["is-rated"]: _ctx.isRated,
          ["is-my-comment"]: true
        }),
        e: index
      };
    }),
    b: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    c: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    d: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-67ee010a"]]);
wx.createPage(MiniProgramPage);
