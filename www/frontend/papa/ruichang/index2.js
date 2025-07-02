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
const navBar = () => "./components/navBar/index.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  components: {
    instructorItem,
    instructorDropDown,
    listSearch,
    navBar
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
      pageType: "level",
      //level  star
      navBarHeight: 0,
      navColor: "transparent",
      titleColor: "transparent",
      customStyle: {
        backgroundColor: "transparent"
      },
      scrollTop: 0
    };
  },
  computed: {
    themeType() {
      return this.$store.app.themeType;
    }
  },
  created() {
    this.pageType = this.$store.app.themeType == "SkyBlue" ? "level" : "star";
    this.navBarHeight = this.$store.app.menuInfo.navBarHeight;
  },
  methods: {
    //返回顶部
    backToTop() {
      var _a;
      (_a = this.$refs.pagingRef) == null ? void 0 : _a.scrollToTop();
    },
    pageScroll(event) {
      let scrollTop = event.detail.scrollTop;
      if (scrollTop > 100) {
        this.navColor = "#fff";
        this.titleColor = "#333";
      } else {
        this.navColor = "transparent";
        this.titleColor = "transparent";
      }
      this.scrollTop = scrollTop;
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
      var _a;
      console.log("[ data ] >", data);
      if (data && data.level == 4 && this.themeType == "EcologicalGreen") {
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
        let res = yield this.$autoLoading(this.$api.getWxInstructorList(params));
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
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_listSearch = common_vendor.resolveComponent("listSearch");
  const _component_instructorDropDown = common_vendor.resolveComponent("instructorDropDown");
  const _easycom_uv_sticky2 = common_vendor.resolveComponent("uv-sticky");
  const _component_instructorItem = common_vendor.resolveComponent("instructorItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_paBackToTop = common_vendor.resolveComponent("paBackToTop");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_listSearch + _component_instructorDropDown + _easycom_uv_sticky2 + _component_instructorItem + _component_empty + _component_paBackToTop + _easycom_z_paging2 + _component_layout_default_uni)();
}
const _easycom_uv_sticky = () => "./node-modules/@climblee/uv-ui/components/uv-sticky/uv-sticky.js";
const _easycom_z_paging = () => "./node-modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  (_easycom_uv_sticky + _easycom_z_paging)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      title: "指导员",
      showBack: false,
      fixed: false,
      navColor: $data.navColor,
      titleColor: $data.titleColor
    }),
    b: common_vendor.o($options.listHandleConfirm),
    c: common_vendor.o($options.listHandleClear),
    d: common_vendor.p({
      show: false,
      disabled: false
    }),
    e: common_vendor.sr("homeDropDownRef", "1693e6f6-5,1693e6f6-3"),
    f: common_vendor.o($options.search),
    g: common_vendor.p({
      pageType: $data.pageType
    }),
    h: common_vendor.p({
      offsetTop: $data.navBarHeight - 2
    }),
    i: common_vendor.f($data.dataList, (item, index, i0) => {
      return {
        a: "1693e6f6-6-" + i0 + ",1693e6f6-1",
        b: common_vendor.p({
          info: item,
          pageType: $data.pageType
        }),
        c: index
      };
    }),
    j: $data.dataList.length == 0
  }, $data.dataList.length == 0 ? {} : {}, {
    k: common_vendor.o($options.backToTop),
    l: common_vendor.p({
      ["scroll-top"]: $data.scrollTop
    }),
    m: common_vendor.sr("pagingRef", "1693e6f6-1,1693e6f6-0"),
    n: common_vendor.o($options.queryList),
    o: common_vendor.o($options.pageScroll),
    p: common_vendor.o(($event) => $data.dataList = $event),
    q: common_vendor.p({
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
