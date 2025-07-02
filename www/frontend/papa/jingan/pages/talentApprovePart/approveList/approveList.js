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
const apis_sportTalent = require("../../../apis/sportTalent.js");
const mixins_listMixins = require("../../../mixins/listMixins.js");
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const approveItem = () => "./components/approveItem.js";
const _sfc_main = {
  mixins: [mixins_listMixins.listMixins, mixins_shareMixins.shareMixins, mixins_themeMixins.themeMixins],
  components: {
    approveItem
  },
  data() {
    return {
      navColor: "#fff",
      bgColor: "#323233",
      navBarHeight: 0,
      tabList: [
        {
          name: "全部",
          id: "-1"
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
      currentPickId: "-1"
    };
  },
  onLoad() {
    return __async(this, null, function* () {
      const app = getApp();
      let { navBarHeight } = app.globalData;
      this.navBarHeight = navBarHeight;
      this.getList();
    });
  },
  methods: {
    dateBallItem(item) {
      console.log(item);
      common_vendor.index.navigateTo({
        url: `/pages/talentApprovePart/applyFormDetail/applyFormDetail?sport_talent_id=${item.sport_talent_id}&sport_talent_type_id=${item.type_id}`
      });
    },
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
        if (this.currentPickId != -1) {
          param.status = this.currentPickId;
        }
        this.loading = true;
        let res = yield apis_sportTalent.getMySportTalentList(param);
        res.data.list.map((e) => {
          e.status = 1;
        });
        this.getListExtend(res, refresh);
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _easycom_uv_sticky2 = common_vendor.resolveComponent("uv-sticky");
  const _component_approveItem = common_vendor.resolveComponent("approveItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_tabs2 + _easycom_uv_sticky2 + _component_approveItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
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
    c: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o($options.dateBallItem, index),
        b: "4023bc82-3-" + i0 + ",4023bc82-0",
        c: common_vendor.p({
          info: item
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4023bc82"]]);
wx.createPage(MiniProgramPage);
