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
const common_vendor = require("../../common/vendor.js");
const mixins_listMixins = require("../../mixins/listMixins.js");
const apis_stadium = require("../../apis/stadium.js");
const mixins_shareMixins = require("../../mixins/shareMixins.js");
const mixins_themeMixins = require("../../mixins/themeMixins.js");
const navBar = () => "../../components/navBar/index.js";
const collectItem = () => "./components/collectItem.js";
const _sfc_main = {
  mixins: [mixins_listMixins.listMixins, mixins_shareMixins.shareMixins, mixins_themeMixins.themeMixins],
  components: {
    navBar,
    collectItem
  },
  data() {
    return {
      pickTab: "0",
      status: "nomore",
      top: "",
      tabList: [
        {
          name: "全部",
          id: "0"
        },
        {
          name: "体育场馆",
          id: "3"
        },
        // {
        //   name: "运动圈",
        //   id: "5",
        // },
        {
          name: "体育组织",
          id: "1"
        },
        // {
        //   name: "线下课",
        //   id: "15",
        // },
        //{
        //	name: "赛事活动",
        //	id: "4"
        //},
        {
          name: "体质检测点",
          id: "9"
        },
        {
          name: "体育旅游",
          id: "30"
        },
        {
          name: "经营场所",
          id: "29"
        }
      ]
    };
  },
  onLoad() {
    return __async(this, null, function* () {
      const app = getApp();
      let flag = yield getApp().judgeIsLogin();
      if (!flag) {
        return;
      }
      let { navBarHeight } = app.globalData;
      this.top = navBarHeight;
      this.getList();
    });
  },
  methods: {
    pickTabItem(e) {
      this.pickTab = e.id;
      this.resetData();
    },
    getList(refresh) {
      return __async(this, null, function* () {
        let param = {
          page: this.page,
          size: 10,
          type_id: Number(this.pickTab)
        };
        if (param.type_id == 0) {
          delete param.type_id;
        }
        param = Object.assign(param, this.searchParams);
        this.loading = true;
        let res = yield apis_stadium.getWxStadiumCollectList(param);
        if (res.code == 200) {
          this.getListExtend(res, refresh);
        } else {
          common_vendor.index.showToast({
            icon: "none",
            title: res.message
          });
        }
      });
    },
    toDetail(item) {
      let { type_id, topic_id } = item;
      let url = "";
      switch (type_id) {
        case 15:
          break;
        case 4:
          url = "activityDetail/activityDetail?activity_id=" + topic_id;
          break;
        case 3:
          url = "stadiumDetail/stadiumDetail?stadium_id=" + topic_id;
          break;
        case 2:
          break;
        case 1:
          url = "siteDetail/siteDetail?site_id=" + topic_id;
          break;
        case 5:
          break;
        case 30:
          url = "tourDetail/tourDetail?sport_tourism_id=" + topic_id;
          break;
        case 29:
          url = "businessSiteDetail/businessSiteDetail?business_place_id=" + topic_id;
          break;
        case 9:
          url = "fitnessReserveDetail/fitnessReserveDetail?health_id=" + topic_id;
          break;
      }
      if (url) {
        common_vendor.index.navigateTo({
          url: "/pages/" + url
        });
      }
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _easycom_uv_sticky2 = common_vendor.resolveComponent("uv-sticky");
  const _component_collectItem = common_vendor.resolveComponent("collectItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_tabs2 + _easycom_uv_sticky2 + _component_collectItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
const _easycom_uv_tabs = () => "../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
const _easycom_uv_sticky = () => "../../node-modules/@climblee/uv-ui/components/uv-sticky/uv-sticky.js";
if (!Math) {
  (_easycom_uv_tabs + _easycom_uv_sticky)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: "#fff",
      title: "我的收藏",
      moduleKey: "stadium",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: common_vendor.o($options.pickTabItem),
    c: common_vendor.p({
      list: $data.tabList,
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
        padding: "0 32rpx",
        height: "88rpx"
      }
    }),
    d: $data.top + "px",
    e: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.toDetail(item), index),
        b: "80b1afea-4-" + i0 + ",80b1afea-0",
        c: common_vendor.p({
          info: item
        }),
        d: index
      };
    }),
    f: _ctx.showEmpty
  }, _ctx.showEmpty ? {
    g: common_vendor.p({
      type: "collect"
    })
  } : {}, {
    h: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    i: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
