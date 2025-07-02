"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
const apis_stadium = require("../../apis/stadium.js");
const apis_common = require("../../apis/common.js");
const apis_activity = require("../../apis/activity.js");
const apis_sportTalent = require("../../apis/sportTalent.js");
const utils_stroageUtils_token = require("../../utils/stroageUtils/token.js");
const core_listMixins = require("../../core/listMixins.js");
const apis_match = require("../../apis/match.js");
const apis_site = require("../../apis/site.js");
const apis_tour = require("../../apis/tour.js");
const apis_businessSite = require("../../apis/businessSite.js");
const apis_vote = require("../../apis/vote.js");
const core_themeMixins = require("../../core/themeMixins.js");
const navBar = () => "../../components/navBar.js";
const searchItem = () => "./components/searchItem.js";
const searchTitle = () => "./components/searchTitle.js";
const historyItem = () => "./components/historyItem.js";
const newsListItem = () => "../newsList/components/newsListItem.js";
const associationItem = () => "../associationList/components/associationItem.js";
const sportsTrainingItem = () => "../sportsTraining/components/sportsTrainingItem.js";
const sportTalentItem = () => "./components/sportTalentItem.js";
const dateBallItem = () => "../matchIndex/components/dateBallItem.js";
const fitnessReserveItem = () => "../../pagesSub/fitnessReserve/fitnessReserve/components/fitnessReserveItem.js";
const tourItem = () => "../tourList/components/tourItem.js";
const businessSiteItem = () => "../businessSiteList/components/businessSiteItem.js";
const voteItem = () => "../../pagesSub/votePart/vote/components/voteItem.js";
const _sfc_main = {
  mixins: [core_listMixins.listMixins, core_themeMixins.themeMixins],
  components: {
    navBar,
    // mytabs,
    searchItem,
    searchTitle,
    historyItem,
    newsListItem,
    associationItem,
    sportsTrainingItem,
    sportTalentItem,
    dateBallItem,
    fitnessReserveItem,
    tourItem,
    businessSiteItem,
    voteItem
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
      current: "stadium",
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
      console.log(item);
      console.log(this.current);
      let url = "";
      switch (this.current) {
        case "stadium":
          url = "stadiumDetail/stadiumDetail?stadium_id=" + item.stadium_id;
          break;
        case "activity":
          url = "activityDetail/activityDetail?activity_id=" + item.activity_id;
          break;
        case "news":
          break;
        case "association":
          url = "siteDetail/siteDetail?site_id=" + item.site_id;
          break;
        case "dateBall":
          url = "matchPart/detail/detail?contest_id=" + item.contest_id;
          break;
        case "fitnessReserve":
          url = "fitnessReserveTime/fitnessReserveTime?health_id=" + item.health_id;
          break;
        case "sportTalent":
          url = `talentApprovePart/talentDetail/talentDetail?sport_talent_id=${item.sport_talent_id}`;
          break;
        case "sportsTraining":
          url = "sportsTrainingDetail/sportsTrainingDetail?organization_id=" + item.organization_id;
          break;
        case "tour":
          url = "tourDetail/tourDetail?sport_tourism_id=" + item.sport_tourism_id;
          break;
        case "businessSite":
          url = "businessSiteDetail/businessSiteDetail?business_place_id=" + item.business_place_id;
          break;
        case "vote":
          url = "votePart/voteDetail/voteDetail?vote_id=" + item.vote_id;
          break;
      }
      if (url) {
        common_vendor.index.navigateTo({
          url: "/pages/" + url
        });
      }
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
        let param = {
          page: this.page,
          size: 10
        };
        let res = "";
        this.loading = true;
        if (!this.searchParams.keyword) {
          delete this.searchParams.keyword;
        }
        param = __spreadValues(__spreadValues({}, param), this.searchParams);
        switch (this.current) {
          case "stadium":
            res = yield apis_stadium.getWxStadiumList(param);
            break;
          case "activity":
            param = __spreadProps(__spreadValues({}, param), {
              start_date: "0",
              end_date: "0"
            });
            res = yield apis_activity.getWxActivityList(param);
            break;
          case "news":
            param = __spreadProps(__spreadValues({}, param), {
              kind_id: 1
            });
            res = yield apis_common.getNewsList(param);
            break;
          case "association":
            param = __spreadProps(__spreadValues({}, param), {
              type_id: "8"
            });
            res = yield apis_common.getWxSiteList(param);
            break;
          case "dateBall":
            param = __spreadProps(__spreadValues({}, param), {
              name: param.keyword
            });
            res = yield apis_match.getContestList(param);
            break;
          case "fitnessReserve":
            param = __spreadValues({
              status: 1
            }, param);
            res = yield apis_site.getHealthList(param);
            break;
          case "sportTalent":
            res = yield apis_sportTalent.getSportTalentList(param);
            break;
          case "sportsTraining":
            param = __spreadValues({
              status: 1
            }, param);
            res = yield apis_common.getWxOrganization(param);
            break;
          case "tour":
            res = yield apis_tour.getTourList(param);
            break;
          case "businessSite":
            res = yield apis_businessSite.getBusinessSiteList(param);
            break;
          case "vote":
            res = yield apis_vote.getVoteList(param);
            break;
        }
        this.getListExtend(res, refresh);
      });
    },
    handleDataCallBack(list) {
      let showList = [];
      let show_time = "";
      list.forEach((e) => {
        let obj = {};
        switch (this.current) {
          case "stadium":
            obj = __spreadValues({ show_image: "", show_distance: "" }, e);
            if (e.images_url && e.images_url.length > 0) {
              obj.show_image = e.images_url[0];
            }
            obj.show_distance = this.$distanceFormat(e.distance);
            break;
          case "activity":
            obj = __spreadValues({ show_image: "", show_time: "", show_distance: "" }, e);
            if (e.images_url && e.images_url.length > 0) {
              obj.show_image = e.images_url[0];
            }
            show_time = this.toSubstring(e.start_time) + "-" + this.toSubstring(e.end_time);
            obj.show_time = show_time;
            obj.show_distance = this.$distanceFormat(e.distance);
            break;
          case "news":
            obj = __spreadValues({ show_image: "", show_time: "" }, e);
            if (e.images_url.length > 0) {
              obj.show_image = e.images_url[0];
            }
            show_time = e.released_time ? e.released_time : e.c_time;
            obj.show_time = this.$timeFrom(new Date(show_time).getTime(), "yyyy-mm-dd hh:MM:ss");
            break;
          case "association":
            obj = __spreadValues({ show_image: e.c_image_url, show_distance: "" }, e);
            obj.show_distance = this.$distanceFormat(e.distance);
            break;
          case "tour":
            obj = __spreadValues({ show_image: e.c_image_url, show_distance: "" }, e);
            obj.show_distance = this.$distanceFormat(e.distance);
            break;
          case "businessSite":
            obj = __spreadValues({ show_image: e.c_image_url, show_distance: "" }, e);
            obj.show_distance = this.$distanceFormat(e.distance);
            break;
          case "vote":
            obj = __spreadValues({ show_image: e.c_image_url, show_distance: "" }, e);
            obj.show_distance = this.$distanceFormat(e.distance);
            break;
          case "dateBall":
            obj = __spreadValues({
              activity_status: "",
              shactivity_status_strow_distance: ""
            }, e);
            obj.activity_status = this.getStatus(
              Date.parse(e.apply_start_time),
              Date.parse(e.apply_end_time)
            );
            obj.activity_status_str = this.$dict.getDictLabel(
              "applyColorList",
              obj.activity_status,
              {
                labelKey: "label"
              }
            );
            break;
          case "fitnessReserve":
            obj = __spreadValues({ show_image: "", show_time: "" }, e);
            if (e.images_url.length > 0) {
              obj.show_image = e.images_url[0];
            }
            break;
          case "sportTalent":
            let strMap = {
              0: "国家级",
              1: "一级",
              2: "二级",
              3: "三级"
            };
            obj = __spreadValues({
              show_image: "",
              show_distance: ""
            }, e);
            obj.show_image = e.cover_image_url;
            obj.level_str = strMap[e.level];
            break;
          case "sportsTraining":
            obj = __spreadValues({ show_image: e.img_str, show_distance: "" }, e);
            obj.show_distance = this.$distanceFormat(e.distance);
            break;
        }
        showList.push(obj);
      });
      return showList;
    },
    getStatus(startTime, endTime) {
      let status = 2;
      let now = Date.parse(/* @__PURE__ */ new Date());
      if (now > endTime) {
        status = 3;
      } else if (now < startTime) {
        status = 1;
      }
      return status;
    },
    toSubstring(str) {
      var newStr = str.substring(5, 10);
      newStr = newStr.replace("-", "月") + "日";
      return newStr;
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
  const _component_associationItem = common_vendor.resolveComponent("associationItem");
  const _component_sportTalentItem = common_vendor.resolveComponent("sportTalentItem");
  const _component_sportsTrainingItem = common_vendor.resolveComponent("sportsTrainingItem");
  const _component_dateBallItem = common_vendor.resolveComponent("dateBallItem");
  const _component_fitnessReserveItem = common_vendor.resolveComponent("fitnessReserveItem");
  const _component_tourItem = common_vendor.resolveComponent("tourItem");
  const _component_businessSiteItem = common_vendor.resolveComponent("businessSiteItem");
  const _component_voteItem = common_vendor.resolveComponent("voteItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_input2 + _component_history_item + _easycom_uv_tabs2 + _component_newsListItem + _component_associationItem + _component_sportTalentItem + _component_sportsTrainingItem + _component_dateBallItem + _component_fitnessReserveItem + _component_tourItem + _component_businessSiteItem + _component_voteItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
const _easycom_uv_input = () => "../../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
const _easycom_uv_tabs = () => "../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
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
      lineColor: _ctx.themePrimaryColorGetter,
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
        b: "cdfa925e-5-" + i0 + ",cdfa925e-0",
        c: common_vendor.p({
          info: item
        })
      } : {}, $data.current == "association" ? {
        d: common_vendor.o(($event) => $options.handleClick(item), index),
        e: "cdfa925e-6-" + i0 + ",cdfa925e-0",
        f: common_vendor.p({
          info: item
        })
      } : {}, $data.current == "sportTalent" ? {
        g: common_vendor.o(($event) => $options.handleClick(item), index),
        h: "cdfa925e-7-" + i0 + ",cdfa925e-0",
        i: common_vendor.p({
          info: item,
          type: "search"
        })
      } : {}, $data.current == "sportsTraining" ? {
        j: common_vendor.o(($event) => $options.handleClick(item), index),
        k: "cdfa925e-8-" + i0 + ",cdfa925e-0",
        l: common_vendor.p({
          info: item
        })
      } : {}, $data.current == "dateBall" ? {
        m: common_vendor.o(($event) => $options.handleClick(item), index),
        n: "cdfa925e-9-" + i0 + ",cdfa925e-0",
        o: common_vendor.p({
          info: item,
          type: "dateBall"
        })
      } : {}, $data.current == "fitnessReserve" ? {
        p: common_vendor.o(($event) => $options.handleClick(item), index),
        q: common_vendor.o(($event) => $options.handleReserve(item), index),
        r: "cdfa925e-10-" + i0 + ",cdfa925e-0",
        s: common_vendor.p({
          info: item
        })
      } : {}, $data.current == "tour" ? {
        t: common_vendor.o(($event) => $options.handleClick(item), index),
        v: "cdfa925e-11-" + i0 + ",cdfa925e-0",
        w: common_vendor.p({
          info: item
        })
      } : {}, $data.current == "businessSite" ? {
        x: common_vendor.o(($event) => $options.handleClick(item), index),
        y: "cdfa925e-12-" + i0 + ",cdfa925e-0",
        z: common_vendor.p({
          info: item
        })
      } : {}, $data.current == "vote" ? {
        A: common_vendor.o(($event) => $options.handleClick(item), index),
        B: "cdfa925e-13-" + i0 + ",cdfa925e-0",
        C: common_vendor.p({
          info: item
        })
      } : {}, {
        D: index
      });
    }),
    o: $data.current == "news",
    p: $data.current == "association",
    q: $data.current == "sportTalent",
    r: $data.current == "sportsTraining",
    s: $data.current == "dateBall",
    t: $data.current == "fitnessReserve",
    v: $data.current == "tour",
    w: $data.current == "businessSite",
    x: $data.current == "vote",
    y: _ctx.showEmpty
  }, _ctx.showEmpty ? {
    z: common_vendor.p({
      marginTop: 45
    })
  } : {}, {
    A: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    B: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {}, {
    C: common_vendor.n($data.padding32Obj[$data.current] ? "padding-lr-32" : "")
  }) : {}, {
    D: $data.marginTop + "px"
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-cdfa925e"]]);
wx.createPage(MiniProgramPage);
