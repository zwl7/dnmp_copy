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
const api_voluntaryActivity_index = require("../../../api/voluntaryActivity/index.js");
const common_vendor = require("../../../common/vendor.js");
const ActivityItem = () => "../../../components/ActivityItem/index.js";
const _sfc_main = {
  components: {
    ActivityItem
  },
  data() {
    return {
      type: 2,
      list: [],
      urls: [],
      dataList: [],
      activity_type: ""
      //1 校园
    };
  },
  onLoad(options) {
    if (options.activity_type) {
      this.activity_type = options.activity_type;
    }
  },
  onShow() {
    this.queryList(1, 10);
  },
  methods: {
    isDelete(deleteFlag) {
      if (deleteFlag) {
        this.queryList(1, 10);
      }
    },
    queryList(pageNo, pageSize) {
      return __async(this, null, function* () {
        var _a, _b;
        console.log("[ pageNo ] >", pageNo);
        console.log("[ pageSize ] >", pageSize);
        let params = {
          page: pageNo,
          size: pageSize,
          is_self: 1
        };
        if (this.activity_type) {
          params.activity_type = this.activity_type;
        }
        let res = yield api_voluntaryActivity_index.getVoluntaryActivityList(params);
        if (res.code !== 200) {
          this.$toast(res.message);
          (_a = this.$refs.pagingRef) == null ? void 0 : _a.complete([]);
          return;
        }
        if (res.code == 200) {
          let dealData = res.data.list.map((item) => {
            let formatObj = {
              addressFormat: item.province_str + item.county_str + item.city_str + item.address,
              startTime: this.$dayjs(item.c_time * 1e3).format("YYYY-MM-DD HH:mm:ss")
            };
            return __spreadValues(__spreadValues({}, formatObj), item);
          });
          this.dataList = dealData;
          (_b = this.$refs.pagingRef) == null ? void 0 : _b.complete(dealData);
        }
      });
    },
    change1() {
    }
  }
};
if (!Array) {
  const _component_ActivityItem = common_vendor.resolveComponent("ActivityItem");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_ActivityItem + _easycom_z_paging2 + _component_layout_default_uni)();
}
const _easycom_z_paging = () => "../../../node-modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  _easycom_z_paging();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.dataList, (item, k0, i0) => {
      return {
        a: item,
        b: common_vendor.o($options.isDelete, item),
        c: "77e9f18b-2-" + i0 + ",77e9f18b-1",
        d: common_vendor.p({
          item,
          type: $data.type
        })
      };
    }),
    b: common_vendor.sr("pagingRef", "77e9f18b-1,77e9f18b-0"),
    c: common_vendor.o($options.queryList),
    d: common_vendor.o(($event) => $data.dataList = $event),
    e: common_vendor.p({
      ["empty-view-text"]: "暂无动态",
      ["empty-view-img"]: "/static/images/empty.png",
      ["empty-view-img-style"]: {
        width: "160px",
        height: "160px"
      },
      modelValue: $data.dataList
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-77e9f18b"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
