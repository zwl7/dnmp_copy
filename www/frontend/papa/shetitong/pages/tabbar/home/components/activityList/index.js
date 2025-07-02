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
const common_vendor = require("../../../../../common/vendor.js");
const api_voluntaryActivity_index = require("../../../../../api/voluntaryActivity/index.js");
const ActivityItem = () => "../../../../../components/ActivityItem/index.js";
const activityListHeder = () => "./activityListHeder.js";
const _sfc_main = {
  name: "activityList",
  props: {
    dataConfig: {
      type: Object,
      default: () => {
      }
    }
  },
  components: {
    ActivityItem,
    activityListHeder
  },
  data() {
    return {
      dataList: [],
      sort: 2
      // 1:热度 2 时间 3 点赞
    };
  },
  computed: {
    imageUrl() {
      var _a, _b;
      return ((_b = (_a = this.dataConfig) == null ? void 0 : _a.headerLogoConfig) == null ? void 0 : _b.url) || "";
    }
  },
  created() {
    this.queryList(1, 10);
  },
  methods: {
    queryList(pageNo, pageSize) {
      return __async(this, null, function* () {
        let params = {
          page: pageNo,
          size: pageSize,
          sort: this.sort
        };
        let res = yield api_voluntaryActivity_index.getVoluntaryActivityList(params);
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
        this.dataList = dealData;
      });
    },
    handleChange(e) {
      console.log("[ e ] >", e);
      this.sort = e == "hot" ? 1 : 2;
      this.queryList(1, 10);
    },
    handleViewMore() {
      common_vendor.index.navigateTo({
        url: "/pages-sub/activityList/index"
      });
    }
  }
};
if (!Array) {
  const _component_activityListHeder = common_vendor.resolveComponent("activityListHeder");
  const _component_ActivityItem = common_vendor.resolveComponent("ActivityItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_component_activityListHeder + _component_ActivityItem + _component_empty + _easycom_uv_button2)();
}
const _easycom_uv_button = () => "../../../../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
if (!Math) {
  _easycom_uv_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.handleChange),
    b: common_vendor.p({
      imageUrl: $options.imageUrl
    }),
    c: common_vendor.f($data.dataList, (item, index, i0) => {
      return {
        a: "eaa2e97a-1-" + i0,
        b: common_vendor.p({
          item
        }),
        c: index
      };
    }),
    d: $data.dataList.length == 0
  }, $data.dataList.length == 0 ? {
    e: common_vendor.p({
      marginTop: 0
    })
  } : {}, {
    f: $data.dataList.length > 0
  }, $data.dataList.length > 0 ? {
    g: common_vendor.o($options.handleViewMore),
    h: common_vendor.p({
      type: "primary",
      plain: true,
      shape: "circle",
      size: "medium"
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eaa2e97a"]]);
wx.createComponent(Component);
//# sourceMappingURL=index.js.map
