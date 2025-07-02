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
const common_vendor = require("../../common/vendor.js");
const listSearch = () => "../../components/SearchComponent/listSearch.js";
const instructorSiteItem = () => "../../components/InstructorSiteItem/index.js";
const instructorDropDown = () => "./components/instructorDropDown.js";
const _sfc_main = {
  components: {
    instructorSiteItem,
    listSearch,
    instructorDropDown
  },
  data() {
    return {
      area: "",
      list: [],
      urls: [],
      dataList: [],
      areaGroupList: [
        [
          {
            text: "全部区域",
            value: 0
          }
        ]
      ],
      tempDataObj: {},
      searchObj: {},
      searchContent: ""
    };
  },
  onLoad(options) {
    this.queryList(1, 10);
  },
  methods: {
    handleMap() {
      common_vendor.index.switchTab({ url: "/pages/tabbar/commonPage/index" });
    },
    toDetail(info) {
      common_vendor.index.navigateTo({
        url: "/pages-sub/instructorSite/detail?instructor_site_id=" + info.instructor_site_id
      });
    },
    listHandleConfirm(data) {
      this.searchContent = data;
      this.queryList(1, 10);
    },
    listHandleClear() {
      this.searchContent = "";
      this.queryList(1, 10);
    },
    search(data) {
      this.searchObj = data;
      this.queryList(1, 10);
    },
    queryList(pageNo, pageSize) {
      return __async(this, null, function* () {
        var _a;
        this.tempDataObj.areaGroupList;
        let params = __spreadValues({
          page: pageNo,
          size: pageSize,
          name: this.searchContent
        }, this.searchObj);
        let res = yield this.$api.getInstructorSiteList(params);
        if (res.code !== 200) {
          this.$toast(res.message);
          return;
        }
        (_a = this.$refs.pagingRef) == null ? void 0 : _a.complete(res.data.list);
      });
    }
  }
};
if (!Array) {
  const _component_listSearch = common_vendor.resolveComponent("listSearch");
  const _easycom_uv_sticky2 = common_vendor.resolveComponent("uv-sticky");
  const _component_instructorSiteItem = common_vendor.resolveComponent("instructorSiteItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_listSearch + _easycom_uv_sticky2 + _component_instructorSiteItem + _component_empty + _easycom_z_paging2 + _component_layout_default_uni)();
}
const _easycom_uv_sticky = () => "../../node-modules/@climblee/uv-ui/components/uv-sticky/uv-sticky.js";
const _easycom_z_paging = () => "../../node-modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  (_easycom_uv_sticky + _easycom_z_paging)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.listHandleConfirm),
    b: common_vendor.o($options.listHandleClear),
    c: common_vendor.o($options.handleMap),
    d: common_vendor.p({
      show: false,
      disabled: false
    }),
    e: common_vendor.f($data.dataList, (item, index, i0) => {
      return {
        a: common_vendor.o($options.toDetail, index),
        b: "e86245db-4-" + i0 + ",e86245db-1",
        c: common_vendor.p({
          info: item,
          ["show-join"]: true
        }),
        d: index
      };
    }),
    f: $data.dataList.length == 0
  }, $data.dataList.length == 0 ? {} : {}, {
    g: common_vendor.sr("pagingRef", "e86245db-1,e86245db-0"),
    h: common_vendor.o($options.queryList),
    i: common_vendor.o(($event) => $data.dataList = $event),
    j: common_vendor.p({
      ["loading-more-custom-style"]: {
        "padding-bottom": "200rpx"
      },
      modelValue: $data.dataList
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e86245db"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=select.js.map
