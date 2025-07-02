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
const core_listMixins = require("../../core/listMixins.js");
const apis_jxBidEvent = require("../../apis/jxBidEvent.js");
const core_themeMixins = require("../../core/themeMixins.js");
const core_shareMixins = require("../../core/shareMixins.js");
const listSearch = () => "../../components/listSearch.js";
const dropDown = () => "../../components/dropDown/index.js";
const BiddingItem = () => "./components/BiddingItem.js";
const scrollTabX = () => "../sportTalent/components/scrollTabX.js";
const ApplyFormDialog = () => "./components/ApplyFormDialog.js";
const _sfc_main = {
  mixins: [core_listMixins.listMixins, core_themeMixins.themeMixins, core_shareMixins.shareMixins],
  components: {
    listSearch,
    dropDown,
    BiddingItem,
    scrollTabX,
    ApplyFormDialog
  },
  data() {
    return {
      customStyle: {
        backgroundColor: "transparent"
      },
      statusList: [
        {
          id: 0,
          name: "全部"
        },
        {
          id: 3,
          name: "申办中"
        },
        {
          id: 2,
          name: "待申办"
        },
        {
          id: 4,
          name: "已结束"
        }
      ],
      options: {
        level: {
          label: "活动等级",
          value: "",
          activeIndex: 0,
          child: [
            {
              label: "全部",
              value: ""
            },
            {
              label: "省级",
              value: 1
            },
            {
              label: "州市级",
              value: 2
            },
            {
              label: "区县及以下",
              value: 3
            },
            {
              label: "国家级和跨省赛事活动",
              value: 4
            }
          ]
        }
      },
      searchParams: {},
      info: {
        status: 3
      },
      type: ""
      // 从“我的”跳转过来是 mine
    };
  },
  onLoad(options) {
    this.setNavigationBarColor();
    if (options.type) {
      this.type = options.type;
    }
    this.getList();
  },
  methods: {
    openApplyFormDialog() {
      this.$refs.applyFormDialog.open();
    },
    pickTabItem(e) {
      console.log({ e });
      this.searchParams.status = e.id;
      this.resetData();
    },
    handleSearch(e) {
      this.searchParams = __spreadProps(__spreadValues({}, this.searchParams), { name: e });
      this.resetData();
    },
    changeDropDown(res) {
      console.log({ res });
      let obj = {};
      res.map((e) => {
        obj[e.name] = e.value;
      });
      if (obj.level === "") {
        delete obj.level;
      }
      this.searchParams = obj;
      console.log({ obj });
      console.log(this.searchParams, "this.searchParams");
      this.resetData();
    },
    getList(refresh) {
      return __async(this, null, function* () {
        const param = __spreadValues({
          page: this.page,
          size: 10
        }, this.searchParams);
        this.loading = true;
        let func;
        func = this.type === "mine" ? apis_jxBidEvent.getMyWxEventList : apis_jxBidEvent.getWxEventList;
        let res = yield func(param);
        this.getListExtend(res, refresh);
      });
    },
    toBidDetail(info) {
      const { event_plan_id } = info;
      common_vendor.index.navigateTo({
        url: `/pages/eventBiddingDetail/eventBiddingDetail?event_plan_id=` + event_plan_id
      });
    }
  }
};
if (!Array) {
  const _component_dropDown = common_vendor.resolveComponent("dropDown");
  const _component_listSearch = common_vendor.resolveComponent("listSearch");
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _component_BiddingItem = common_vendor.resolveComponent("BiddingItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_ApplyFormDialog = common_vendor.resolveComponent("ApplyFormDialog");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_dropDown + _component_listSearch + _easycom_uv_tabs2 + _component_BiddingItem + _component_empty + _component_loadMore + _component_ApplyFormDialog + _component_layout_default_uni)();
}
const _easycom_uv_tabs = () => "../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
if (!Math) {
  _easycom_uv_tabs();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.sr("dropDown", "7b2f6c62-1,7b2f6c62-0"),
    b: common_vendor.o($options.changeDropDown),
    c: common_vendor.p({
      options: $data.options,
      customStyle: $data.customStyle
    }),
    d: common_vendor.o($options.handleSearch),
    e: common_vendor.o($options.handleSearch),
    f: common_vendor.p({
      show: false,
      disabled: false,
      placeholder: "搜索赛事活动"
    }),
    g: common_vendor.o((...args) => $options.openApplyFormDialog && $options.openApplyFormDialog(...args)),
    h: common_vendor.o($options.pickTabItem),
    i: common_vendor.p({
      list: $data.statusList,
      scrollable: _ctx.tabIsScrollable,
      lineColor: _ctx.themePrimaryColorGetter,
      customStyle: {
        backgroundColor: "transparent"
      },
      activeStyle: {
        color: _ctx.themePrimaryColorGetter,
        fontWeight: "610"
      },
      inactiveStyle: {
        color: "#505F79",
        fontWeight: "400"
      },
      itemStyle: {
        padding: "0 48rpx",
        height: "88rpx"
      }
    }),
    j: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.toBidDetail(item), index),
        b: "7b2f6c62-4-" + i0 + ",7b2f6c62-0",
        c: common_vendor.p({
          info: item
        }),
        d: index
      };
    }),
    k: _ctx.showEmpty
  }, _ctx.showEmpty ? {
    l: common_vendor.p({
      marginTop: 45
    })
  } : {}, {
    m: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    n: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {}, {
    o: common_vendor.sr("applyFormDialog", "7b2f6c62-7,7b2f6c62-0")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7b2f6c62"]]);
wx.createPage(MiniProgramPage);
