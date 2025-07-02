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
const mixins_listMixins = require("../../mixins/listMixins.js");
const mixins_shareMixins = require("../../mixins/shareMixins.js");
const mixins_themeMixins = require("../../mixins/themeMixins.js");
const apis_common = require("../../apis/common.js");
const navBar = () => "../../components/navBar/index.js";
const newsListItem = () => "./components/newsListItem.js";
const _sfc_main = {
  mixins: [mixins_listMixins.listMixins, mixins_shareMixins.shareMixins, mixins_themeMixins.themeMixins],
  components: {
    navBar,
    newsListItem
  },
  data() {
    return {
      topBgImage: this.getThemeIcon("news_top_bg"),
      navBarHeight: 0,
      navColor: "transparent",
      tabColor: "transparent",
      mainColor: this.themePrimaryLightColorGetter,
      //顶部主要颜色
      navTitle: "体育资讯",
      unique_code: "",
      tab_type: 1,
      tag_ids: "",
      tab_list: []
    };
  },
  onLoad(options) {
    return __async(this, null, function* () {
      const app = getApp();
      let { navBarHeight } = app.globalData;
      this.navBarHeight = navBarHeight;
      if (options.unique_code) {
        this.unique_code = options.unique_code;
      }
      this.setTheme(options);
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
    setTheme(options) {
      if (options.title) {
        this.navTitle = options.title;
      }
      switch (options.unique_code) {
        case "5":
          this.mainColor = this.themePrimaryColorGetter;
          this.topBgImage = this.getThemeIcon("news_top_bg");
          break;
        case "6":
          this.mainColor = "#b9efc5";
          this.topBgImage = "https://cdn-static.papa.com.cn/yuncheng/health-top-bg.png";
          break;
        default:
          this.mainColor = this.themePrimaryLightColorGetter;
          this.topBgImage = this.getThemeIcon("news_top_bg");
          break;
      }
    },
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
        let param = {};
        if (this.unique_code) {
          param = {
            unique_code: this.unique_code
          };
        }
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
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _component_newsListItem = common_vendor.resolveComponent("newsListItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_tabs2 + _component_newsListItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
const _easycom_uv_tabs = () => "../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
if (!Math) {
  _easycom_uv_tabs();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: $data.navColor,
      title: $data.navTitle,
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: $data.topBgImage,
    c: $data.unique_code != "6"
  }, $data.unique_code != "6" ? {
    d: common_vendor.o($options.changeTab),
    e: common_vendor.p({
      list: $data.tab_list,
      scrollable: $data.tab_list.length > 4,
      lineColor: _ctx.themeTabsLineColorGetter,
      activeStyle: {
        color: "#253858",
        fontWeight: "610"
      },
      inactiveStyle: {
        color: "#505F79",
        fontWeight: "400"
      }
    }),
    f: $data.navBarHeight + "px",
    g: $data.navColor
  } : {}, {
    h: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.handleClick(item), index),
        b: "52a2e96f-3-" + i0 + ",52a2e96f-0",
        c: common_vendor.p({
          type: index == 0 ? "top" : "normal",
          info: item
        }),
        d: index,
        e: $data.unique_code != "6" || $data.unique_code == "6" && index !== 0 ? 1 : ""
      };
    }),
    i: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    j: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    k: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-52a2e96f"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
