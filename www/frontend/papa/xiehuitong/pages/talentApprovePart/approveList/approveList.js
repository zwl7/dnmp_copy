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
const core_listMixins = require("../../../core/listMixins.js");
const core_shareMixins = require("../../../core/shareMixins.js");
const core_themeMixins = require("../../../core/themeMixins.js");
const approveItem = () => "./components/approveItem.js";
const _sfc_main = {
  mixins: [core_listMixins.listMixins, core_shareMixins.shareMixins, core_themeMixins.themeMixins],
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
      currentPickId: "-1",
      reason: ""
      // 审核不通过原因
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
        this.getListExtend(res, refresh);
      });
    },
    /**
     * 查看原因
     */
    toViewReason(item) {
      common_vendor.index.showModal({
        title: "原因",
        content: String(item.review_des || "暂未填写"),
        success: () => {
          console.log("");
        }
      });
    },
    /**
     * 再次申办
     */
    toApplyAgain(item) {
      console.log(item);
      common_vendor.index.navigateTo({
        url: `/pages/talentApprovePart/applyFormEdit/applyForm?sport_talent_id=${item.sport_talent_id}&type_id=${item.type_id}`
      });
    },
    /**
     * 关闭原因弹窗
     */
    closeReasonPopup() {
      this.$refs.reasonPopup.close();
    }
  }
};
if (!Array) {
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _easycom_uv_sticky2 = common_vendor.resolveComponent("uv-sticky");
  const _component_approveItem = common_vendor.resolveComponent("approveItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_tabs2 + _easycom_uv_sticky2 + _component_approveItem + _component_empty + _component_loadMore + _easycom_uv_icon2 + _easycom_uv_popup2 + _component_layout_default_uni)();
}
const _easycom_uv_tabs = () => "../../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
const _easycom_uv_sticky = () => "../../../node-modules/@climblee/uv-ui/components/uv-sticky/uv-sticky.js";
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_popup = () => "../../../node-modules/@climblee/uv-ui/components/uv-popup/uv-popup.js";
if (!Math) {
  (_easycom_uv_tabs + _easycom_uv_sticky + _easycom_uv_icon + _easycom_uv_popup)();
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
        a: common_vendor.o($options.dateBallItem, index),
        b: common_vendor.o($options.toViewReason, index),
        c: common_vendor.o($options.toApplyAgain, index),
        d: "4023bc82-3-" + i0 + ",4023bc82-0",
        e: common_vendor.p({
          info: item,
          index
        }),
        f: index
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
  } : {}, {
    h: common_vendor.p({
      name: "close"
    }),
    i: common_vendor.o((...args) => $options.closeReasonPopup && $options.closeReasonPopup(...args)),
    j: common_vendor.sr("reasonPopup", "4023bc82-6,4023bc82-0"),
    k: common_vendor.p({
      round: "32rpx",
      mode: "center",
      customStyle: {
        margin: "0 32rpx"
      }
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4023bc82"]]);
wx.createPage(MiniProgramPage);
