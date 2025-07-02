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
const mixins_shareMixins = require("../../mixins/shareMixins.js");
const listSearch = () => "../../components/SearchComponent/listSearch.js";
const instructorSiteItem = () => "./components/InstructorSiteItem.js";
const instructorDropDown = () => "./components/instructorDropDown.js";
const navBar = () => "../../components/navBar/index.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  components: {
    instructorSiteItem,
    listSearch,
    instructorDropDown,
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
      searchObj: {},
      searchContent: "",
      navBarHeight: 0,
      navColor: "transparent",
      titleColor: "#333",
      customStyle: {
        backgroundColor: "transparent"
      },
      scrollTop: 0
    };
  },
  onLoad(options) {
    this.queryList(1, 10);
  },
  methods: {
    pageScroll(event) {
      let scrollTop = event.detail.scrollTop;
      if (scrollTop > 100) {
        this.navColor = "#fff";
        this.titleColor = "#333";
      } else {
        this.navColor = "transparent";
        this.titleColor = "#333";
      }
      this.scrollTop = scrollTop;
    },
    //返回顶部
    backToTop() {
      var _a;
      (_a = this.$refs.pagingRef) == null ? void 0 : _a.scrollToTop();
    },
    handleMap() {
      if (this.$store.app.themeType == "SkyBlue") {
        common_vendor.index.navigateTo({
          url: "/pages/instructorSite/index"
        });
        return;
      }
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
          name: this.searchContent,
          sort_type: "service_time_desc"
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
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_listSearch = common_vendor.resolveComponent("listSearch");
  const _component_instructorDropDown = common_vendor.resolveComponent("instructorDropDown");
  const _easycom_uv_sticky2 = common_vendor.resolveComponent("uv-sticky");
  const _component_instructorSiteItem = common_vendor.resolveComponent("instructorSiteItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_paBackToTop = common_vendor.resolveComponent("paBackToTop");
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_listSearch + _component_instructorDropDown + _easycom_uv_sticky2 + _component_instructorSiteItem + _component_empty + _component_paBackToTop + _easycom_z_paging2 + _component_layout_default_uni)();
}
const _easycom_uv_sticky = () => "../../node-modules/@climblee/uv-ui/components/uv-sticky/uv-sticky.js";
const _easycom_z_paging = () => "../../node-modules/z-paging/components/z-paging/z-paging.js";
if (!Math) {
  (_easycom_uv_sticky + _easycom_z_paging)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      title: "站点",
      showBack: true,
      fixed: false,
      navColor: $data.navColor,
      titleColor: $data.titleColor
    }),
    b: common_vendor.o($options.listHandleConfirm),
    c: common_vendor.o($options.listHandleClear),
    d: common_vendor.o($options.handleMap),
    e: common_vendor.p({
      show: true,
      disabled: false
    }),
    f: common_vendor.sr("homeDropDownRef", "532ef812-5,532ef812-3"),
    g: common_vendor.o($options.search),
    h: common_vendor.f($data.dataList, (item, index, i0) => {
      return {
        a: common_vendor.o($options.toDetail, index),
        b: "532ef812-6-" + i0 + ",532ef812-1",
        c: common_vendor.p({
          info: item,
          ["show-join"]: false,
          ["page-show-quit"]: false
        }),
        d: index
      };
    }),
    i: $data.dataList.length == 0
  }, $data.dataList.length == 0 ? {} : {}, {
    j: common_vendor.o($options.backToTop),
    k: common_vendor.p({
      ["scroll-top"]: $data.scrollTop
    }),
    l: common_vendor.sr("pagingRef", "532ef812-1,532ef812-0"),
    m: common_vendor.o($options.queryList),
    n: common_vendor.o($options.pageScroll),
    o: common_vendor.o(($event) => $data.dataList = $event),
    p: common_vendor.p({
      ["loading-more-custom-style"]: {
        "padding-bottom": "200rpx"
      },
      modelValue: $data.dataList
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-532ef812"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
