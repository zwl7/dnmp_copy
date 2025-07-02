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
const api_instructorSite_index = require("../../../api/instructorSite/index.js");
const common_vendor = require("../../../common/vendor.js");
const ActivityItem = () => "../../../components/ActivityItem/index.js";
const _sfc_main = {
  name: "SiteActivities",
  components: {
    ActivityItem
  },
  props: {
    siteId: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      activityList: []
    };
  },
  created() {
    this.getActivityList();
  },
  methods: {
    getActivityList() {
      return __async(this, null, function* () {
        let params = {
          page: 1,
          size: 999,
          sort: this.sort,
          instructor_site_id: this.siteId
        };
        let res = yield api_instructorSite_index.getVoluntaryActivityList(params);
        if (res.code !== 200) {
          this.$toast(res.message);
          return;
        }
        res.data.list.map((item) => {
          let formatObj = {
            addressFormat: item.province_str + item.county_str + item.city_str + item.address,
            startTime: this.$dayjs(item.c_time * 1e3).format("YYYY-MM-DD HH:mm:ss")
          };
          return __spreadValues(__spreadValues({}, formatObj), item);
        });
        console.log("[ res ] >", res);
        this.activityList = res.data.list;
      });
    }
  }
};
if (!Array) {
  const _component_ActivityItem = common_vendor.resolveComponent("ActivityItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  (_component_ActivityItem + _component_empty)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.activityList.length
  }, $data.activityList.length ? {
    b: common_vendor.f($data.activityList, (item, index, i0) => {
      return {
        a: "1035d0da-0-" + i0,
        b: common_vendor.p({
          item,
          multipleSize: "180rpx"
        }),
        c: index
      };
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1035d0da"]]);
wx.createComponent(Component);
//# sourceMappingURL=SiteActivities.js.map
