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
require("../../utils/stroageUtils/storageUtil.js");
require("../../utils/thirdPartUtils/md5.js");
const apis_order = require("../../apis/order.js");
const mixins_shareMixins = require("../../mixins/shareMixins.js");
const mixins_themeMixins = require("../../mixins/themeMixins.js");
const navBar = () => "../../components/navBar/index.js";
const orderItem = () => "./components/orderItem.js";
const _sfc_main = {
  mixins: [mixins_listMixins.listMixins, mixins_shareMixins.shareMixins, mixins_themeMixins.themeMixins],
  components: {
    navBar,
    orderItem
    // stadiumOrderItem,
  },
  data() {
    return {
      top: "",
      tabList: [
        {
          name: "全部订单",
          id: "-1"
        },
        {
          name: "未支付",
          id: "0"
        },
        {
          name: "已支付",
          id: "1"
        },
        {
          name: "退款/取消",
          id: "6"
        }
      ],
      pickTab: "-1"
    };
  },
  onLoad() {
    return __async(this, null, function* () {
      this.setNavigationBarColor();
      const app = getApp();
      let { navBarHeight } = app.globalData;
      this.top = navBarHeight;
      this.getList();
    });
  },
  onPageScroll(event) {
  },
  methods: {
    toDetail(item) {
      if (item.order_status === 0) {
        let url = `/pages/orderCenter/orderCenter?parent_order_no=${item.parent_order_no}&business_id=${item.business_id}&stadium_id=${item.stadium_id}`;
        common_vendor.index.navigateTo({
          url
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/stadiumOrderDetail/stadiumOrderDetail?id=" + item.parent_order_no
        });
      }
    },
    pickTabItem(e) {
      this.pickTab = e.id;
      this.resetData();
    },
    getList(refresh) {
      return __async(this, null, function* () {
        const param = {
          page: this.page,
          size: 10,
          order_status: Number(this.pickTab),
          sort: -1
        };
        this.loading = true;
        let res = yield apis_order.getOrderList(param);
        this.getListExtend(res, refresh);
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _easycom_uv_sticky2 = common_vendor.resolveComponent("uv-sticky");
  const _component_orderItem = common_vendor.resolveComponent("orderItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_tabs2 + _easycom_uv_sticky2 + _component_orderItem + _component_empty + _component_loadMore + _component_layout_default_uni)();
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
      title: "我的订单",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: common_vendor.o($options.pickTabItem),
    c: common_vendor.p({
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
      }
    }),
    d: $data.top + "px",
    e: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.toDetail(item), index),
        b: "6ecbfced-4-" + i0 + ",6ecbfced-0",
        c: common_vendor.p({
          info: item
        }),
        d: index
      };
    }),
    f: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    g: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    h: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
