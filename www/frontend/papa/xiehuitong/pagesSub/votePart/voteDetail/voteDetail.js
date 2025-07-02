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
const common_vendor = require("../../../common/vendor.js");
const apis_vote = require("../../../apis/vote.js");
const core_listMixins = require("../../../core/listMixins.js");
const core_shareMixins = require("../../../core/shareMixins.js");
const navBar = () => "../../../components/navBar.js";
const tabs = () => "../../../components/tabs/index.js";
const optionItem = () => "./componets/optionItem.js";
const sortList = () => "./componets/sortList.js";
const _sfc_main = {
  mixins: [core_listMixins.listMixins, core_shareMixins.shareMixins],
  components: {
    navBar,
    tabs,
    optionItem,
    sortList
  },
  data() {
    return {
      topBgImage: `https://cdn-static.papa.com.cn/yuncheng/voteZone/vote-detail-top.png?t=${(/* @__PURE__ */ new Date()).getTime()}`,
      navBarHeight: 0,
      navColor: "transparent",
      customStyle: {
        backgroundColor: "transparent"
      },
      time: 0,
      timeData: {},
      tablist: [
        {
          name: "介绍",
          id: "0"
        },
        {
          name: "投票",
          id: "1"
        },
        {
          name: "排行",
          id: "2"
        }
      ],
      currentTab: "1",
      commonStyle: {
        "min-width": "180rpx",
        opacity: 1,
        "border-radius": "16rpx",
        height: "100%",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        "font-size": "32rpx",
        "font-weight": 400
      },
      activeStyle: {
        width: "100%",
        height: "100%",
        color: "#ffffff",
        background: "linear-gradient(90deg, #9ED1FF 0%, #A564FF 100%)"
      },
      inactiveStyle: {
        color: "#505F79"
      },
      itemStyle: {
        padding: "0",
        height: "88rpx",
        background: "#fff",
        overflow: "hidden"
      },
      customStyle: {
        // height: '80rpx',
        "border-radius": "16rpx"
      },
      info: {
        des: ""
      },
      defaultObj: {
        sortTitle: "排名",
        idTitle: "编号/用户ID",
        pointTitle: "票数"
      },
      optionList: [],
      sorlist: [
        {
          sortTitle: "排名",
          idTitle: "编号/用户ID",
          pointTitle: "票数"
        }
      ],
      showEnd: false
    };
  },
  onLoad(options) {
    return __async(this, null, function* () {
      const app = getApp();
      let flag = yield getApp().judgeIsLogin();
      if (!flag) {
        return;
      }
      let { navBarHeight } = app.globalData;
      this.navBarHeight = navBarHeight;
      if (options.vote_id) {
        this.vote_id = options.vote_id;
        this.getDetail();
        this.getList();
      }
    });
  },
  onPageScroll(event) {
    let scrollTop = event.scrollTop;
    if (scrollTop > 60) {
      this.navColor = "#aed1ff";
    } else {
      this.navColor = "transparent";
    }
  },
  onPullDownRefresh() {
    this.page = 1;
    this.finished = false;
    this.$nextTick(() => {
      this.getList(true);
      common_vendor.index.stopPullDownRefresh();
    });
  },
  methods: {
    resetData() {
      this.finished = false;
      this.loading = false;
      this.page = 1;
      this.$nextTick(() => {
        this.getList(true);
      });
    },
    getListExtend(res, refresh = false) {
      try {
        let _this = this;
        if (res.code === 200) {
          if (this.handleDataCallBack instanceof Function) {
            res.data.list = this.handleDataCallBack(res.data.list);
          }
          let _list = JSON.parse(JSON.stringify(this.list));
          if (refresh) {
            _list = [];
          }
          this.list = _list.concat(res.data.list);
          this.count = res.data.count;
          this.loading = false;
          if (res.data.list.length === 0) {
            this.finished = true;
          }
          if (!this.finished) {
            this.$isFullScreen().then((fres) => {
              let { windowHeight, scrollHeight } = fres;
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
      } catch (e) {
        console.error("handleList", e);
      }
    },
    getDetail() {
      return __async(this, null, function* () {
        let res = yield apis_vote.getVoteDetail({ vote_id: this.vote_id });
        if (res.code == 200) {
          let e = res.data;
          let obj = __spreadValues({
            show_image: "",
            show_distance: "",
            sport_tag_str: []
          }, e);
          const today = (/* @__PURE__ */ new Date()).getTime();
          this.time = new Date(e.end_time).getTime() - today;
          obj.des = this.$formatRichText(e.des, "暂无内容");
          this.info = __spreadValues(__spreadValues({}, this.info), obj);
        }
      });
    },
    toOptionDetail(item) {
      common_vendor.index.navigateTo({
        url: "/pagesSub/votePart/voteOptionDetail/voteOptionDetail?vote_options_id=" + item.vote_options_id
      });
    },
    changeTab(e) {
      this.currentTab = e.id;
      if (this.currentTab != "0") {
        this.resetData();
        this.getDetail();
      }
    },
    onChange(e) {
      this.timeData = e;
    },
    getList(refresh) {
      return __async(this, null, function* () {
        let param = {
          page: this.page,
          size: 10,
          vote_id: this.vote_id
        };
        let res = {};
        this.loading = true;
        let now = Date.parse(/* @__PURE__ */ new Date());
        let start_time = Date.parse(this.info.start_time);
        let end_time = Date.parse(this.info.end_time);
        if (this.currentTab == "2") {
          if (now > start_time) {
            res = yield apis_vote.getVoteRank(param);
            if (now > end_time) {
              this.showEnd = true;
            }
          } else {
            res = { code: 200, data: { list: [], count: 0, page: 1, size: 10 } };
          }
        } else if (this.currentTab == "1") {
          res = yield apis_vote.getVoteOptionList(param);
        }
        this.getListExtend(res, refresh);
      });
    },
    handleDataCallBack(list) {
      let showList = [];
      list.forEach((e) => {
        let obj = __spreadValues({ show_image: e.c_image_url, show_distance: "" }, e);
        obj.show_distance = this.$distanceFormat(e.distance);
        showList.push(obj);
      });
      if (this.currentTab == "2" && list.length > 0) {
        showList = [this.defaultObj, ...list];
      }
      return showList;
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_uv_count_down2 = common_vendor.resolveComponent("uv-count-down");
  const _component_tabs = common_vendor.resolveComponent("tabs");
  const _easycom_uv_sticky2 = common_vendor.resolveComponent("uv-sticky");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_optionItem = common_vendor.resolveComponent("optionItem");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_sortList = common_vendor.resolveComponent("sortList");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_count_down2 + _component_tabs + _easycom_uv_sticky2 + _component_empty + _component_optionItem + _component_loadMore + _component_sortList + _component_layout_default_uni)();
}
const _easycom_uv_count_down = () => "../../../node-modules/@climblee/uv-ui/components/uv-count-down/uv-count-down.js";
const _easycom_uv_sticky = () => "../../../node-modules/@climblee/uv-ui/components/uv-sticky/uv-sticky.js";
if (!Math) {
  (_easycom_uv_count_down + _easycom_uv_sticky)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: $data.navColor,
      title: "投票活动详情",
      moduleKey: "vote",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: $data.topBgImage,
    c: common_vendor.t($data.info.name),
    d: common_vendor.t($data.timeData.days),
    e: common_vendor.t($data.timeData.hours > 10 ? $data.timeData.hours : $data.timeData.hours),
    f: common_vendor.t($data.timeData.minutes),
    g: common_vendor.t($data.timeData.seconds),
    h: common_vendor.o($options.onChange),
    i: common_vendor.p({
      time: $data.time,
      format: "DD:HH:mm:ss",
      autoStart: true,
      millisecond: true
    }),
    j: common_vendor.t($data.info.total_vote_count),
    k: common_vendor.t($data.info.vote_options_count),
    l: common_vendor.t($data.info.view_count),
    m: common_vendor.t($data.info.start_time),
    n: common_vendor.t($data.info.end_time),
    o: common_vendor.t($data.info.rule_desc),
    p: common_vendor.o($options.changeTab),
    q: common_vendor.p({
      scrollable: false,
      list: $data.tablist,
      commonStyle: $data.commonStyle,
      activeStyle: $data.activeStyle,
      inactiveStyle: $data.inactiveStyle,
      itemStyle: $data.itemStyle,
      customStyle: $data.customStyle,
      current: $data.currentTab
    }),
    r: common_vendor.p({
      ["offset-top"]: `${$data.navBarHeight}px`,
      customStyle: {
        background: "#ebf4ff"
      }
    }),
    s: $data.currentTab == "0"
  }, $data.currentTab == "0" ? common_vendor.e({
    t: $data.info.des != "暂无内容"
  }, $data.info.des != "暂无内容" ? {
    v: $data.info.des
  } : {
    w: common_vendor.p({
      marginTop: 45
    })
  }, {
    x: _ctx.showEmpty ? 1 : "",
    y: _ctx.showEmpty ? 1 : "",
    z: _ctx.showEmpty ? 1 : "",
    A: !_ctx.showEmpty ? 1 : ""
  }) : $data.currentTab == "1" ? common_vendor.e({
    C: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.toOptionDetail(item), index),
        b: "5b73eb8d-6-" + i0 + ",5b73eb8d-0",
        c: common_vendor.p({
          info: item
        }),
        d: index
      };
    }),
    D: _ctx.showEmpty
  }, _ctx.showEmpty ? {
    E: common_vendor.p({
      marginTop: 45
    })
  } : {}, {
    F: _ctx.showEmpty ? 1 : "",
    G: _ctx.showEmpty ? 1 : "",
    H: _ctx.showEmpty ? 1 : "",
    I: !_ctx.showEmpty ? 1 : "",
    J: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    K: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {}) : common_vendor.e({
    L: common_vendor.p({
      list: _ctx.list,
      showEnd: $data.showEnd
    }),
    M: _ctx.showEmpty
  }, _ctx.showEmpty ? {
    N: common_vendor.p({
      marginTop: 45
    })
  } : {}, {
    O: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    P: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {}), {
    B: $data.currentTab == "1"
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
