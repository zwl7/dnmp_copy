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
const common_vendor = require("../../../../common/vendor.js");
const apis_instructorSite_index = require("../../../../apis/instructorSite/index.js");
const common_assets = require("../../../../common/assets.js");
const ActivityItem = () => "./ServiceStyleItem.js";
const _sfc_main = {
  components: {
    ActivityItem
  },
  data() {
    return {
      defaultImg: common_assets.defaultAvatar,
      medalImg: common_assets.Medal,
      list: []
    };
  },
  created() {
    this.getStyleList();
  },
  onLoad(options) {
  },
  methods: {
    getStyleList() {
      return __async(this, null, function* () {
        let res = yield apis_instructorSite_index.getVoluntaryActivityList({ page: 1, size: 2, sort: 2 });
        if (res.code == 200) {
          let dealData = res.data.list.map((item) => {
            let formatObj = {
              addressFormat: item.province_str + item.county_str + item.city_str + item.address,
              startTime: this.$dayjs(item.c_time * 1e3).format("YYYY-MM-DD HH:mm:ss")
            };
            return __spreadValues(__spreadValues({}, formatObj), item);
          });
          this.list = dealData;
        } else {
          this.$toast(res.message);
        }
      });
    },
    handleViewMore() {
      common_vendor.index.navigateTo({
        url: "/pages-sub/activityList/index"
      });
    }
  }
};
if (!Array) {
  const _component_ActivityItem = common_vendor.resolveComponent("ActivityItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_component_ActivityItem + _component_empty + _easycom_uv_button2)();
}
const _easycom_uv_button = () => "../../../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
if (!Math) {
  _easycom_uv_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: "b006a0d7-0-" + i0,
        b: common_vendor.p({
          item
        }),
        c: index
      };
    }),
    b: $data.list.length == 0
  }, $data.list.length == 0 ? {
    c: common_vendor.p({
      marginTop: 0
    })
  } : {}, {
    d: $data.list.length > 0
  }, $data.list.length > 0 ? {
    e: common_vendor.o($options.handleViewMore),
    f: common_vendor.p({
      type: "primary",
      plain: true,
      shape: "circle",
      size: "medium"
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b006a0d7"]]);
wx.createComponent(Component);
//# sourceMappingURL=ServiceStyle.js.map
