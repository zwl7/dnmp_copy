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
const core_listMixins = require("../../core/listMixins.js");
const core_shareMixins = require("../../core/shareMixins.js");
const apis_common = require("../../apis/common.js");
const core_themeMixins = require("../../core/themeMixins.js");
const navBar = () => "../../components/navBar.js";
const newsListItem = () => "./components/newsListItem.js";
const _sfc_main = {
  mixins: [core_listMixins.listMixins, core_shareMixins.shareMixins, core_themeMixins.themeMixins],
  components: {
    navBar,
    newsListItem
  },
  data() {
    return {
      navBarHeight: 0,
      navColor: "transparent",
      tabColor: "transparent",
      mainColor: "#d7eafe",
      //顶部主要颜色
      navTitle: "推荐专区",
      unique_code: "",
      type_id: "",
      tab_type: 1,
      tag_ids: "",
      tab_list: []
    };
  },
  computed: {
    scrollable() {
      let tabLength = this.tab_list.map((e) => e.name).join("").length;
      return tabLength > 21;
    }
  },
  onLoad(options) {
    return __async(this, null, function* () {
      const app = getApp();
      let { navBarHeight } = app.globalData;
      this.navBarHeight = navBarHeight;
      this.unique_code = options.unique_code;
      this.type_id = options.type_id;
      yield this.getTopList();
      this.getList();
    });
  },
  onPageScroll(event) {
    let scrollTop = event.scrollTop;
    if (scrollTop > 60) {
      this.navColor = this.mainColor;
    } else {
      this.navColor = "transparent";
    }
  },
  methods: {
    changeTab(e) {
      common_vendor.index.$uv.throttle(() => __async(this, null, function* () {
        this.tag_ids = e.value;
        this.resetData();
      }), 200);
    },
    handleClick(item) {
      let { url, news_id } = item;
      if (url) {
        common_vendor.index.navigateTo({
          url: "/pages/webView/webView?url=" + encodeURIComponent(url)
        });
        return;
      }
      common_vendor.index.navigateTo({
        url: `/pages/newsDetail/newsDetail?news_id=${news_id}&title=${this.navTitle}`
      });
    },
    // 获取类型顶部
    getTopList() {
      return new Promise((resolve) => __async(this, null, function* () {
        let param = { kind_id: 2, type_id: this.type_id };
        const res = yield apis_common.getWxNewsType(param);
        const arr = res.data[0].label.split(",");
        const label = [];
        arr.map((e, index) => {
          label.push({
            name: e,
            value: e
          });
        });
        this.tab_list = label.length > 1 ? label : [];
        this.tab_type = res.data[0].value;
        this.tag_ids = this.unique_code == "6" ? "全部" : label[0].value;
        resolve(1);
      }));
    },
    getList(refresh) {
      return __async(this, null, function* () {
        const param = {
          page: this.page,
          size: 10,
          type: this.tab_type,
          kind_id: 1,
          tag_ids: this.tag_ids
        };
        if (param.tag_ids && param.tag_ids === "全部") {
          delete param.tag_ids;
        }
        this.loading = true;
        let res = yield apis_common.getNewsList(param);
        this.getListExtend(res, refresh);
      });
    },
    handleDataCallBack(list) {
      let showList = [];
      list.forEach((e) => {
        let obj = __spreadValues({ show_image: "", show_time: "" }, e);
        if (e.images_url.length > 0) {
          obj.show_image = e.images_url[0];
        }
        let show_time = e.released_time ? e.released_time : e.c_time;
        obj.show_time = this.$timeFrom(new Date(show_time).getTime(), "yyyy-mm-dd hh:MM:ss");
        showList.push(obj);
      });
      return showList;
    }
  }
};
const __injectCSSVars__ = () => {
  common_vendor.useCssVars((_ctx) => ({
    "316ad7fd": _ctx.mainColor
  }));
};
const __setup__ = _sfc_main.setup;
_sfc_main.setup = __setup__ ? (props, ctx) => {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
if (!Array) {
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _component_newsListItem = common_vendor.resolveComponent("newsListItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_tabs2 + _component_newsListItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
const _easycom_uv_tabs = () => "../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
if (!Math) {
  _easycom_uv_tabs();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.changeTab),
    b: common_vendor.p({
      list: $data.tab_list,
      scrollable: $options.scrollable,
      lineColor: _ctx.themePrimaryColorGetter,
      activeStyle: {
        color: "#253858",
        fontWeight: "610",
        overFlow: "hidden",
        whiteSpace: "nowrap"
      },
      inactiveStyle: {
        color: "#505F79",
        fontWeight: "400",
        overFlow: "hidden",
        whiteSpace: "nowrap"
      }
    }),
    c: $data.navColor,
    d: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.handleClick(item), index),
        b: "30928c0f-2-" + i0 + ",30928c0f-0",
        c: common_vendor.p({
          type: "recommend",
          info: item
        }),
        d: index
      };
    }),
    e: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    f: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    g: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {}, {
    h: common_vendor.s(_ctx.__cssVars())
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-30928c0f"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
