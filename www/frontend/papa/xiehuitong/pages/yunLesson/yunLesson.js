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
const apis_common = require("../../apis/common.js");
const core_shareMixins = require("../../core/shareMixins.js");
const core_themeMixins = require("../../core/themeMixins.js");
const navBar = () => "../../components/navBar.js";
const yunLessonItem = () => "./components/yunLessonItem.js";
const _sfc_main = {
  mixins: [core_listMixins.listMixins, core_shareMixins.shareMixins, core_themeMixins.themeMixins],
  components: {
    navBar,
    yunLessonItem
  },
  data() {
    return {
      topBgImage: "https://cdn-static.papa.com.cn/yuncheng/lesson-top-bg.png",
      navBarHeight: 0,
      navColor: "transparent",
      tabColor: "transparent",
      tab_type: 1006,
      tag_ids: "",
      tab_list: [],
      unique_code: ""
    };
  },
  computed: {
    topItem() {
      var _a;
      return (_a = this.list[0]) != null ? _a : "";
    },
    mainList() {
      if (this.list.length > 1) {
        let list = JSON.parse(JSON.stringify(this.list));
        return list.slice(1);
      } else {
        return [];
      }
    }
  },
  onLoad(options) {
    return __async(this, null, function* () {
      const app = getApp();
      let { navBarHeight } = app.globalData;
      this.navBarHeight = navBarHeight;
      if (options.unique_code) {
        this.unique_code = options.unique_code;
      }
      yield this.getTopList();
      this.getList();
    });
  },
  onPageScroll(event) {
    let scrollTop = event.scrollTop;
    if (scrollTop > 60) {
      this.navColor = "#d7eafe";
    } else {
      this.navColor = "transparent";
    }
  },
  methods: {
    changeTab(e) {
      this.tag_ids = e.value;
      this.resetData();
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
        this.tag_ids = label[0].value;
        resolve(1);
      }));
    },
    getList(refresh) {
      return __async(this, null, function* () {
        const param = {
          page: this.page,
          size: 10,
          type: this.tab_type,
          kind_id: 2
          // tag_ids: this.tag_ids
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
    },
    handleClick(item) {
      let { url, news_id } = item;
      if (url) {
        common_vendor.index.navigateTo({
          url: "/pages/view/webView?url=" + encodeURIComponent(url)
        });
        return;
      }
      common_vendor.index.navigateTo({
        url: "/pages/videoDetail/videoDetail?news_id=" + news_id
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_yunLessonItem = common_vendor.resolveComponent("yunLessonItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_yunLessonItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: $data.navColor,
      title: "云课堂",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: $data.topBgImage,
    c: $options.topItem
  }, $options.topItem ? {
    d: common_vendor.o(($event) => $options.handleClick($options.topItem)),
    e: common_vendor.p({
      type: "top",
      info: $options.topItem
    })
  } : {}, {
    f: common_vendor.f($options.mainList, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.handleClick(item), index),
        b: "d1e3a7cf-3-" + i0 + ",d1e3a7cf-0",
        c: common_vendor.p({
          type: "normal",
          info: item
        }),
        d: index
      };
    }),
    g: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    h: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    i: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d1e3a7cf"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
