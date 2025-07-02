"use strict";
var __defProp = Object.defineProperty;
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
const mixins_shareMixins = require("../../mixins/shareMixins.js");
const apis_voluntaryActivity_index = require("../../apis/voluntaryActivity/index.js");
const utils_timeUtil = require("../../utils/timeUtil.js");
const common_vendor = require("../../common/vendor.js");
const ActivityItem = () => "../../components/ActivityItem/index.js";
const homeDropDown = () => "./components/homeDropDown.js";
const monthCard = () => "./components/monthCard.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  components: {
    ActivityItem,
    homeDropDown,
    monthCard
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
  mounted() {
    this.getSearchTime();
    this.queryList(1, 10);
  },
  methods: {
    onChangeMonthData(data) {
      console.log("[ data ] >", data);
      this.getSearchTime(data.year, data.month);
      this.queryList(1, 10);
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
      this.queryList(1, 10);
    },
    queryList(pageNo, pageSize) {
      return __async(this, null, function* () {
        var _a;
        console.log("[ pageNo ] >", pageNo);
        console.log("[ pageSize ] >", pageSize);
        let params = __spreadValues(__spreadValues({
          page: pageNo,
          size: pageSize
        }, this.searchObj), this.timeObj);
        if (this.activity_type) {
          params.activity_type = this.activity_type;
        }
        if (this.activityType) {
          params.activity_type = this.activityType;
        }
        let res = yield apis_voluntaryActivity_index.getVoluntaryActivityList(params);
        if (res.code !== 200) {
          this.$toast(res.message);
          return;
        }
        let dealData = res.data.list.map((item) => {
          let formatObj = {
            addressFormat: item.province_str + item.county_str + item.city_str + item.address,
            startTime: this.$dayjs(item.c_time * 1e3).format("YYYY-MM-DD HH:mm:ss")
          };
          return __spreadValues(__spreadValues({}, formatObj), item);
        });
        this.count = res.data.count;
        (_a = this.$refs.pagingRef) == null ? void 0 : _a.complete(dealData);
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
  const _component_ActivityItem = common_vendor.resolveComponent("ActivityItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_monthCard + _component_homeDropDown + _component_ActivityItem + _component_empty + _easycom_z_paging2 + _component_layout_default_uni)();
}
const _easycom_z_paging = () => "../../node-modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  _easycom_z_paging();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.onChangeMonthData),
    b: common_vendor.p({
      total: $data.count
    }),
    c: common_vendor.sr("homeDropDownRef", "ec06cba2-3,ec06cba2-1"),
    d: common_vendor.o($options.search),
    e: common_vendor.f($data.dataList, (item, index, i0) => {
      return {
        a: "ec06cba2-4-" + i0 + ",ec06cba2-1",
        b: common_vendor.p({
          item
        }),
        c: index
      };
    }),
    f: $data.dataList.length == 0
  }, $data.dataList.length == 0 ? {} : {}, {
    g: common_vendor.sr("pagingRef", "ec06cba2-1,ec06cba2-0"),
    h: common_vendor.o($options.queryList),
    i: common_vendor.o($options.scroll),
    j: common_vendor.o(($event) => $data.dataList = $event),
    k: common_vendor.p({
      ["paging-style"]: {
        "background-color": "#fff"
      },
      ["loading-more-custom-style"]: {
        "padding-bottom": "200rpx"
      },
      modelValue: $data.dataList
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ec06cba2"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
