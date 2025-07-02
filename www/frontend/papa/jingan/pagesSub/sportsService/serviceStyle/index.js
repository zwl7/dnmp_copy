"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
const utils_timeUtil = require("../../../utils/timeUtil.js");
const apis_sportsService_serviceStyle = require("../../../apis/sportsService/serviceStyle.js");
const mixins_listMixins = require("../../../mixins/listMixins.js");
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
      list: [],
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
  onPageScroll(event) {
    this.scrollTop = event.scrollTop;
  },
  onShow() {
    this.getSearchTime();
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
      let { start } = utils_timeUtil.getMonthStartAndEnd(year, month);
      this.timeObj = utils_timeUtil.formatTimeBase(start, "{y}-{m}");
    },
    search(data) {
      console.log("筛选！");
      const map = {
        2: {
          sortColumn: "B.likes_num",
          sortType: "desc"
        }
      };
      if (map[data.sort]) {
        data.sortColumn = map[data.sort].sortColumn;
        data.sortType = map[data.sort].sortType;
      }
      this.searchObj = data;
      this.resetData();
    },
    getList(refresh = false) {
      return __async(this, null, function* () {
        let params = __spreadProps(__spreadValues({
          page: this.page,
          size: 10
        }, this.searchObj), {
          createTime: this.timeObj
        });
        if (this.activity_type) {
          params.activity_type = this.activity_type;
        }
        const res = yield apis_sportsService_serviceStyle.getStyleList(params);
        console.log({ res });
        if (res.code === 0) {
          console.log(this.$refs.pagingRef);
          res.data.listData.forEach((item) => {
            item.images = item.image ? item.image.split(",") : [];
          });
          this.getListExtend(res, refresh);
        }
      });
    },
    scroll(e) {
      if (this.$refs.homeDropDownRef.popupChange) {
        this.$refs.homeDropDownRef.init();
      }
    }
  }
};
if (!Array) {
  const _component_monthCard = common_vendor.resolveComponent("monthCard");
  const _component_homeDropDown = common_vendor.resolveComponent("homeDropDown");
  const _component_ServiceStyleItem = common_vendor.resolveComponent("ServiceStyleItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_paBackToTop = common_vendor.resolveComponent("paBackToTop");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_monthCard + _component_homeDropDown + _component_ServiceStyleItem + _component_empty + _component_loadMore + _component_paBackToTop + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.onChangeMonthData),
    b: common_vendor.p({
      total: $data.count
    }),
    c: common_vendor.sr("homeDropDownRef", "1ce11cdc-2,1ce11cdc-0"),
    d: common_vendor.o($options.search),
    e: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: "1ce11cdc-3-" + i0 + ",1ce11cdc-0",
        b: common_vendor.p({
          item,
          ["is-detail"]: true,
          isComment: true
        }),
        c: index
      };
    }),
    f: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    g: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    h: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {}, {
    i: common_vendor.p({
      ["scroll-top"]: $data.scrollTop
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1ce11cdc"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
