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
const apis_match = require("../../../apis/match.js");
const core_listMixins = require("../../../core/listMixins.js");
const core_shareMixins = require("../../../core/shareMixins.js");
const core_themeMixins = require("../../../core/themeMixins.js");
const navBar = () => "../../../components/navBar.js";
const MyMatchListItem = () => "./components/MyMatchListItem.js";
const _sfc_main = {
  mixins: [core_listMixins.listMixins, core_shareMixins.shareMixins, core_themeMixins.themeMixins],
  components: {
    navBar,
    MyMatchListItem
  },
  data() {
    return {
      navColor: "#fff",
      bgColor: "#323233",
      navBarHeight: 0,
      tabList: [
        {
          name: "全部",
          id: "0"
        },
        {
          name: "已通过",
          id: "1"
        },
        {
          name: "未通过",
          id: "2"
        },
        {
          name: "待审核",
          id: "3"
        }
      ],
      currentPickId: "0"
    };
  },
  onLoad() {
    return __async(this, null, function* () {
      this.setNavigationBarColor();
      const app = getApp();
      let { navBarHeight } = app.globalData;
      this.navBarHeight = navBarHeight;
      this.getList();
    });
  },
  onPageScroll(event) {
  },
  methods: {
    changSecondTab(e) {
      this.currentPickId = e.id;
      this.resetData();
    },
    getList(refresh) {
      return __async(this, null, function* () {
        let param = {
          page: this.page,
          size: 10
        };
        if (this.currentPickId != 0) {
          param.audit_status = this.currentPickId;
        } else {
          param.audit_status && delete param.audit_status;
        }
        this.loading = true;
        let res = {};
        param = Object.assign(param);
        res = yield apis_match.getApplyList(param);
        this.getListExtend(res, refresh);
      });
    },
    handleDataCallBack(list) {
      list.map((e) => {
        e.name = e.contest_name;
        e.tagList = [e.type_str];
      });
      return list;
    },
    toDateBallDetail(info) {
      let { contest_id, apply_id } = info;
      let url = `/pages/matchPart/myMatchDetail/myMatchDetail?contest_id=${contest_id}&apply_id=${apply_id}`;
      common_vendor.index.navigateTo({
        url
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _easycom_uv_sticky2 = common_vendor.resolveComponent("uv-sticky");
  const _component_MyMatchListItem = common_vendor.resolveComponent("MyMatchListItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_tabs2 + _easycom_uv_sticky2 + _component_MyMatchListItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
const _easycom_uv_tabs = () => "../../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
const _easycom_uv_sticky = () => "../../../node-modules/@climblee/uv-ui/components/uv-sticky/uv-sticky.js";
if (!Math) {
  (_easycom_uv_tabs + _easycom_uv_sticky)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.changSecondTab),
    b: common_vendor.p({
      list: $data.tabList,
      scrollable: false,
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
        padding: "0 32rpx",
        height: "88rpx"
      }
    }),
    c: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.toDateBallDetail(item), index),
        b: "6fd48dd1-3-" + i0 + ",6fd48dd1-0",
        c: common_vendor.p({
          info: item,
          showButton: false,
          showApplyTime: false,
          showApplyStatusTag: false
        }),
        d: index
      };
    }),
    d: _ctx.showEmpty
  }, _ctx.showEmpty ? {
    e: common_vendor.p({
      marginTop: 45
    })
  } : {}, {
    f: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    g: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6fd48dd1"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
