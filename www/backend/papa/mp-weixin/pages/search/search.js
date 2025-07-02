"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_stadium = require("../../apis/stadium.js");
const apis_index = require("../../apis/index.js");
const apis_activity = require("../../apis/activity.js");
const utils_token = require("../../utils/token.js");
require("../../utils/http.js");
require("../../core/config.js");
require("../../utils/storageUtil.js");
const mytabs = () => "../../components/tabs/mytabs.js";
const searchItem = () => "./components/searchItem.js";
const searchTitle = () => "./components/searchTitle.js";
const historyItem = () => "./components/historyItem.js";
const _sfc_main = {
  components: {
    mytabs,
    searchItem,
    searchTitle,
    historyItem
  },
  data() {
    return {
      loading: false,
      finished: false,
      searchValue: "",
      current: "0",
      page: 1,
      tab_list: [
        {
          name: "全部",
          value: "0"
        },
        {
          name: "体育场馆",
          value: "1"
        },
        {
          name: "赛事活动",
          value: "2"
        },
        {
          name: "会员单位",
          value: "3"
        },
        {
          name: "场馆新闻",
          value: "4"
        }
      ],
      showSearchResult: false,
      hotKeyword: [],
      searchKeywordList: [],
      stadiumList: [],
      activityList: [],
      associationList: [],
      newsList: [],
      mainList: []
    };
  },
  created() {
    this.getSearchList();
  },
  computed: {
    showEmty() {
      let a = this.stadiumList.length;
      let b = this.activityList.length;
      let c = this.associationList.length;
      let d = this.newsList.length;
      let f = this.mainList.length;
      let flag = a == 0 && b == 0 && c == 0 && d == 0;
      if (this.current == 0 && flag || this.current != 0 && f == 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  onReachBottom() {
    if (this.showSearchResult && this.current != 0) {
      this.loadMore();
    }
  },
  methods: {
    changeTab(index) {
      console.log("当前选中的项：" + index);
      this.current = index;
      let type_id = this.tab_list[index].value;
      if (type_id == 0) {
        type_id = "";
      }
      this.resetData();
      this.type_id = type_id;
      if (this.current == 0) {
        this.getMainList();
      } else {
        this.getList();
      }
    },
    searchConfirm(e) {
      console.log("点击确认", e);
      if (!this.showSearchResult) {
        this.showSearchResult = true;
      }
      let keyword = e.value;
      this.pushHistory(keyword);
      this.resetData();
      if (this.current == 0) {
        this.getMainList();
      } else {
        this.getList();
      }
    },
    searchClear(e) {
      console.log("点击清除", e);
      this.resetData();
    },
    searchCancel(e) {
      console.log("点击取消", e);
      this.resetData();
    },
    resetData() {
      if (this.current == 0) {
        this.stadiumList = [];
        this.activityList = [];
        this.associationList = [];
        this.newsList = [];
      } else {
        this.mainList = [];
        this.loading = false;
        this.finished = true;
        this.page = 1;
      }
    },
    pushHistory(keyword) {
      let searchKeywordList = this.searchKeywordList;
      let index = searchKeywordList.indexOf(keyword);
      if (index === -1 && searchKeywordList.length <= 10) {
        searchKeywordList.push(keyword);
      }
      this.searchKeywordList = searchKeywordList;
      utils_token.setGlobalSearchKey(searchKeywordList);
    },
    getSearchList() {
      utils_token.getGlobalSearchKey().then((res) => {
        if (Array.isArray(res)) {
          this.searchKeywordList = res;
          console.log(res);
        }
      }).catch((err) => {
        console.log(err);
        utils_token.clearGlobalSearchKey();
      });
    },
    clearHistory() {
      if (this.searchKeywordList.length === 0) {
        return;
      }
      utils_token.clearGlobalSearchKey();
      this.searchKeywordList = [];
    },
    handleKeywordSearch(item) {
      this.showSearchResult = true;
      this.searchValue = item;
      this.getMainList();
    },
    handleTabMore(index) {
      this.current = index;
      this.resetData();
      if (this.current == 0) {
        this.getMainList();
      } else {
        this.getList();
      }
    },
    getMainList() {
      let params = {
        keyword: this.searchValue,
        page: 1,
        size: 3
      };
      let siteParams = Object.assign({
        type_id: 8
      }, params);
      let activityParams = Object.assign({
        status: 9999
      }, params);
      let newsParams = Object.assign({
        type: 1,
        kind_id: 1
      }, params);
      let promiseAllList = [apis_stadium.getWxStadiumList(params), apis_index.getWxSite(siteParams), apis_index.getWxNews(newsParams), apis_activity.getWxActivityList(activityParams)];
      Promise.all(promiseAllList).then((res) => {
        res.map((e) => {
          if (e.data && e.data.list) {
            e.data.list.map((c) => {
              c.showImage = c.images_url[0];
            });
          }
        });
        this.stadiumList = res[0].data.list;
        this.associationList = res[1].data.list;
        this.newsList = res[2].data.list;
        this.activityList = res[3].data.list;
      });
    },
    async getList(refresh) {
      let params = {
        keyword: this.searchValue,
        page: this.page,
        size: 10
      };
      let func = null;
      if (this.current == 1) {
        func = apis_stadium.getWxStadiumList;
      }
      if (this.current == 2) {
        params = Object.assign({
          status: 9999
        }, params);
        func = apis_activity.getWxActivityList;
      }
      if (this.current == 3) {
        params = Object.assign({
          type_id: 8
        }, params);
        func = apis_index.getWxSite;
      }
      if (this.current == 4) {
        params = Object.assign({
          type: 1,
          kind_id: 1
        }, params);
        func = apis_index.getWxNews;
      }
      this.loading = true;
      let res = await func(params);
      let _this = this;
      if (res.code === 200) {
        res.data.list.forEach((item) => {
          item.showImage = "";
          if (item.images_url.length > 0) {
            item.showImage = item.images_url[0];
          }
        });
        this.mainList = this.mainList.concat(res.data.list);
        this.count = res.data.count;
        this.loading = false;
        if (res.data.list.length === 0) {
          this.finished = true;
        }
        if (!this.finished) {
          this.$isFullScreen().then((fres) => {
            let {
              windowHeight,
              scrollHeight
            } = fres;
            if (windowHeight + 70 >= scrollHeight) {
              _this.loadMore();
            }
          });
        }
        if (refresh) {
          common_vendor.index.stopPullDownRefresh();
        }
      } else {
        this.$showToastNone(res.message);
      }
    },
    loadMore() {
      console.log("触底加载");
      if (this.finished) {
        console.log("加载完成");
        this.loading = false;
        return;
      }
      this.getList();
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _component_history_item = common_vendor.resolveComponent("history-item");
  const _component_mytabs = common_vendor.resolveComponent("mytabs");
  const _component_search_title = common_vendor.resolveComponent("search-title");
  const _component_search_item = common_vendor.resolveComponent("search-item");
  const _component_empty = common_vendor.resolveComponent("empty");
  (_easycom_uni_search_bar2 + _component_history_item + _component_mytabs + _component_search_title + _component_search_item + _component_empty)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.searchConfirm),
    b: common_vendor.o($options.searchClear),
    c: common_vendor.o($options.searchCancel),
    d: common_vendor.o(($event) => $data.searchValue = $event),
    e: common_vendor.p({
      placeholder: "请输入搜索关键词",
      modelValue: $data.searchValue
    }),
    f: !$data.showSearchResult
  }, !$data.showSearchResult ? {
    g: common_vendor.o($options.clearHistory),
    h: common_vendor.o($options.handleKeywordSearch),
    i: common_vendor.p({
      searchKeywordList: $data.searchKeywordList,
      hotKeyword: $data.hotKeyword
    })
  } : {}, {
    j: $data.showSearchResult
  }, $data.showSearchResult ? common_vendor.e({
    k: common_vendor.o($options.changeTab),
    l: common_vendor.p({
      list: $data.tab_list,
      current: $data.current
    }),
    m: $data.current == 0
  }, $data.current == 0 ? common_vendor.e({
    n: $data.stadiumList.length > 0
  }, $data.stadiumList.length > 0 ? {
    o: common_vendor.o(($event) => $options.handleTabMore(1)),
    p: common_vendor.p({
      title: "体育场馆"
    }),
    q: common_vendor.f($data.stadiumList, (item, index, i0) => {
      return {
        a: "c10c040c-4-" + i0,
        b: common_vendor.p({
          info: item
        }),
        c: index
      };
    })
  } : {}, {
    r: $data.activityList.length > 0
  }, $data.activityList.length > 0 ? {
    s: common_vendor.o(($event) => $options.handleTabMore(2)),
    t: common_vendor.p({
      title: "赛事活动"
    }),
    v: common_vendor.f($data.activityList, (item, index, i0) => {
      return {
        a: "c10c040c-6-" + i0,
        b: common_vendor.p({
          info: item
        }),
        c: index
      };
    })
  } : {}, {
    w: $data.associationList.length > 0
  }, $data.associationList.length > 0 ? {
    x: common_vendor.o(($event) => $options.handleTabMore(3)),
    y: common_vendor.p({
      title: "会员单位"
    }),
    z: common_vendor.f($data.associationList, (item, index, i0) => {
      return {
        a: "c10c040c-8-" + i0,
        b: common_vendor.p({
          info: item
        }),
        c: index
      };
    })
  } : {}, {
    A: $data.newsList.length > 0
  }, $data.newsList.length > 0 ? {
    B: common_vendor.o(($event) => $options.handleTabMore(4)),
    C: common_vendor.p({
      title: "场馆新闻"
    }),
    D: common_vendor.f($data.newsList, (item, index, i0) => {
      return {
        a: "c10c040c-10-" + i0,
        b: common_vendor.p({
          info: item
        }),
        c: index
      };
    })
  } : {}) : {}, {
    E: $data.current != 0
  }, $data.current != 0 ? {
    F: common_vendor.f($data.mainList, (item, index, i0) => {
      return {
        a: "c10c040c-11-" + i0,
        b: common_vendor.p({
          info: item
        }),
        c: index
      };
    })
  } : {}, {
    G: $options.showEmty
  }, $options.showEmty ? {
    H: common_vendor.p({
      tip: "没有发现内容哦，换个关键词试试吧",
      paddingTop: "200rpx"
    })
  } : {}) : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c10c040c"], ["__file", "E:/gxm/uniapp-shandong/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
