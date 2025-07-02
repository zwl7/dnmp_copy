"use strict";
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
const common_vendor = require("../../../common/vendor.js");
const utils_stroageUtils_token = require("../../../utils/stroageUtils/token.js");
const mixins_listMixins = require("../../../mixins/listMixins.js");
const pagesSub_platform_search_searchComponents_news_index = require("./searchComponents/news/index.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const navBar = () => "../../../components/navBar/index.js";
const searchItem = () => "./components/searchItem.js";
const searchTitle = () => "./components/searchTitle.js";
const historyItem = () => "./components/historyItem.js";
const newsListItem = () => "./searchComponents/news/ListItem.js";
const _sfc_main = {
  mixins: [mixins_listMixins.listMixins, mixins_themeMixins.themeMixins],
  components: {
    navBar,
    // mytabs,
    searchItem,
    searchTitle,
    historyItem,
    newsListItem
  },
  data() {
    return {
      padding32Obj: {
        dateBall: true,
        news: true,
        sportTalent: true,
        vote: true
      },
      marginTop: "",
      loading: false,
      finished: false,
      searchParams: { keyword: "" },
      searchValue: "",
      current: "news",
      page: 1,
      tab_list: [
        {
          name: "新闻资讯",
          value: "news"
        },
        {
          name: "体育组织",
          value: "association"
        },
        {
          name: "赛事",
          value: "dateBall"
        },
        {
          name: "体育人才",
          value: "sportTalent"
        }
      ],
      showSearchResult: false,
      hotKeyword: [],
      //
      searchKeywordList: [],
      stadiumList: [],
      activityList: [],
      associationList: [],
      newsList: [],
      mainList: [],
      currentTabIndex: 0
      //当前标签索引
    };
  },
  onLoad(options) {
    this.getSearchList();
    const app = getApp();
    let { navBarHeight } = app.globalData;
    this.marginTop = navBarHeight;
    if (options.module) {
      this.currentTabIndex = this.getModuleIndex(options.module);
      this.current = this.tab_list[this.currentTabIndex].value;
    }
    this.getList();
  },
  methods: {
    handleReserve(item) {
      common_vendor.index.navigateTo({
        url: `/pagesSub/fitnessReserve/reserveTime/index?health_id=${item.health_id}`
      });
    },
    handleClick(item) {
    },
    getModuleIndex(key) {
      let moduleIndex = 0;
      this.tab_list.forEach((item, index) => {
        if (key == item.value) {
          moduleIndex = index;
        }
      });
      return moduleIndex;
    },
    pickTab(e) {
      this.current = e.value;
      this.currentTabIndex = this.getModuleIndex(e.value);
      this.resetData();
    },
    getList(refresh) {
      return __async(this, null, function* () {
        if (this.current == "news") {
          const res = yield pagesSub_platform_search_searchComponents_news_index.getDataList({ keyword: this.searchParams.keyword, page: this.page });
          this.getListExtend(res, refresh);
        }
      });
    },
    handleDataCallBack(list) {
      if (this.current == "news") {
        return pagesSub_platform_search_searchComponents_news_index.handleDataCallBack(list);
      }
      return list;
    },
    searchConfirm(e) {
      if (e.trim() == "") {
        this.showSearchResult = false;
        return;
      }
      if (!this.showSearchResult) {
        this.showSearchResult = true;
      }
      let keyword = e;
      this.searchParams.keyword = keyword;
      this.pushHistory(keyword);
      this.resetData();
    },
    searchClear(e) {
      this.showSearchResult = false;
      console.log("点击清除", e);
    },
    pushHistory(keyword) {
      let searchKeywordList = this.searchKeywordList;
      let index = searchKeywordList.indexOf(keyword);
      if (index === -1 && searchKeywordList.length <= 10) {
        searchKeywordList.push(keyword);
      }
      this.searchKeywordList = searchKeywordList;
      utils_stroageUtils_token.setGlobalSearchKey(searchKeywordList);
    },
    getSearchList() {
      utils_stroageUtils_token.getGlobalSearchKey().then((res) => {
        if (Array.isArray(res)) {
          this.searchKeywordList = res;
          console.log(res);
        }
      }).catch((err) => {
        console.log(err);
        utils_stroageUtils_token.clearGlobalSearchKey();
      });
    },
    clearHistory() {
      if (this.searchKeywordList.length === 0) {
        return;
      }
      utils_stroageUtils_token.clearGlobalSearchKey();
      this.searchKeywordList = [];
    },
    clearHistoryItem(e) {
      let keyword = e;
      let index = this.searchKeywordList.indexOf(keyword);
      this.searchKeywordList.splice(index, 1);
      utils_stroageUtils_token.setGlobalSearchKey(this.searchKeywordList);
    },
    handleKeywordSearch(item) {
      this.showSearchResult = true;
      this.searchParams.keyword = item;
      this.resetData();
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _component_history_item = common_vendor.resolveComponent("history-item");
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _component_newsListItem = common_vendor.resolveComponent("newsListItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_input2 + _component_history_item + _easycom_uv_tabs2 + _component_newsListItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
const _easycom_uv_input = () => "../../../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
const _easycom_uv_tabs = () => "../../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
if (!Math) {
  (_easycom_uv_input + _easycom_uv_tabs)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: "#fff",
      title: "搜索",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: common_vendor.o($options.searchClear),
    c: common_vendor.o($options.searchConfirm),
    d: common_vendor.o(($event) => $data.searchParams.keyword = $event),
    e: common_vendor.p({
      shape: "circle",
      prefixIcon: "search",
      prefixIconStyle: "font-size: 22px;color: #909399",
      customStyle: {
        backgroundColor: "#F7F9FC",
        height: "72rpx",
        boxSizing: "border-box",
        border: "none"
      },
      placeholder: "搜索内容",
      border: "surround",
      clearable: true,
      modelValue: $data.searchParams.keyword
    }),
    f: !$data.showSearchResult
  }, !$data.showSearchResult ? {
    g: common_vendor.o($options.clearHistory),
    h: common_vendor.o($options.handleKeywordSearch),
    i: common_vendor.o($options.clearHistoryItem),
    j: common_vendor.p({
      searchKeywordList: $data.searchKeywordList,
      hotKeyword: $data.hotKeyword
    })
  } : {}, {
    k: $data.showSearchResult
  }, $data.showSearchResult ? common_vendor.e({
    l: common_vendor.o($options.pickTab),
    m: common_vendor.p({
      list: $data.tab_list,
      scrollable: true,
      lineColor: _ctx.themeTabsLineColorGetter,
      activeStyle: {
        color: "#253858",
        fontWeight: "610"
      },
      inactiveStyle: {
        color: "#505F79",
        fontWeight: "400"
      },
      itemStyle: {
        height: "88rpx",
        padding: "0 32rpx"
      },
      current: $data.currentTabIndex
    }),
    n: common_vendor.f(_ctx.list, (item, index, i0) => {
      return common_vendor.e($data.current == "news" ? {
        a: common_vendor.o(($event) => $options.handleClick(item), index),
        b: "d8b3cbd3-5-" + i0 + ",d8b3cbd3-0",
        c: common_vendor.p({
          info: item
        })
      } : {}, {
        d: index
      });
    }),
    o: $data.current == "news",
    p: _ctx.showEmpty
  }, _ctx.showEmpty ? {
    q: common_vendor.p({
      marginTop: 45
    })
  } : {}, {
    r: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    s: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {}, {
    t: common_vendor.n($data.padding32Obj[$data.current] ? "padding-lr-32" : "")
  }) : {}, {
    v: $data.marginTop + "px"
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d8b3cbd3"]]);
wx.createPage(MiniProgramPage);
