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
const mixins_shareMixins = require("./mixins/shareMixins.js");
const common_vendor = require("./common/vendor.js");
const instructorItem = () => "./components/InstructorItem/index.js";
const instructorDropDown = () => "./pages/instructor/components/instructorDropDown.js";
const listSearch = () => "./components/SearchComponent/listSearch.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  components: {
    instructorItem,
    instructorDropDown,
    listSearch
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
      searchContent: "",
      searchObj: {},
      pageType: "level"
      //level  star
    };
  },
  computed: {
    themeType() {
      return this.$store.app.themeType;
    }
  },
  created() {
    this.pageType = this.$store.app.themeType == 1 ? "level" : "star";
  },
  methods: {
    listHandleConfirm(data) {
      this.searchContent = data;
      this.queryList(1, 10);
    },
    listHandleClear() {
      this.searchContent = "";
      this.queryList(1, 10);
    },
    search(data) {
      var _a;
      console.log("[ data ] >", data);
      if (data && data.level == 4 && this.themeType == 2) {
        delete data.level;
        data.is_young = 1;
      }
      this.searchObj = data;
      this.dataList = [];
      (_a = this.$refs.pagingRef) == null ? void 0 : _a.complete([]);
      this.queryList(1, 10);
    },
    getLabel(data = [], key, keyArray = []) {
      let label = [];
      data.forEach((item) => {
        if (item[keyArray[0]] == key) {
          label.push(item[keyArray[1]]);
        }
        if (item[keyArray[2]] && item[keyArray[2]].length > 0) {
          label = label.concat(this.getLabel(item[keyArray[2]], key, keyArray));
        }
      });
      return label;
    },
    queryList(pageNo, pageSize) {
      return __async(this, null, function* () {
        var _a;
        console.log("[ pageNo ] >", pageNo);
        console.log("[ pageSize ] >", pageSize);
        this.tempDataObj.areaGroupList;
        let params = __spreadValues({
          page: pageNo,
          size: pageSize,
          name: this.searchContent
        }, this.searchObj);
        let res = yield this.$api.getWxInstructorList(params);
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
  const _component_instructorDropDown = common_vendor.resolveComponent("instructorDropDown");
  const _easycom_uv_sticky2 = common_vendor.resolveComponent("uv-sticky");
  const _component_instructorItem = common_vendor.resolveComponent("instructorItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_listSearch + _component_instructorDropDown + _easycom_uv_sticky2 + _component_instructorItem + _component_empty + _easycom_z_paging2 + _component_layout_default_uni)();
}
const _easycom_uv_sticky = () => "./node-modules/@climblee/uv-ui/components/uv-sticky/uv-sticky.js";
const _easycom_z_paging = () => "./node-modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  (_easycom_uv_sticky + _easycom_z_paging)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.listHandleConfirm),
    b: common_vendor.o($options.listHandleClear),
    c: common_vendor.p({
      show: false,
      disabled: false
    }),
    d: common_vendor.sr("homeDropDownRef", "1693e6f6-4,1693e6f6-2"),
    e: common_vendor.o($options.search),
    f: common_vendor.p({
      pageType: $data.pageType
    }),
    g: common_vendor.f($data.dataList, (item, index, i0) => {
      return {
        a: "1693e6f6-5-" + i0 + ",1693e6f6-1",
        b: common_vendor.p({
          info: item,
          pageType: $data.pageType
        }),
        c: index
      };
    }),
    h: $data.dataList.length == 0
  }, $data.dataList.length == 0 ? {} : {}, {
    i: common_vendor.sr("pagingRef", "1693e6f6-1,1693e6f6-0"),
    j: common_vendor.o($options.queryList),
    k: common_vendor.o(($event) => $data.dataList = $event),
    l: common_vendor.p({
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1693e6f6"]]);
exports.MiniProgramPage = MiniProgramPage;
//# sourceMappingURL=index2.js.map
