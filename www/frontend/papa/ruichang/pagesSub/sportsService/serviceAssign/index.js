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
const mixins_listMixins = require("../../../mixins/listMixins.js");
const apis_sportsService_serviceAssign = require("../../../apis/sportsService/serviceAssign.js");
require("../../../store/app/index.js");
const store_user_index = require("../../../store/user/index.js");
require("../../../store/dict/index.js");
const apis_sportsService_common = require("../../../apis/sportsService/common.js");
const ServiceOrderItem = () => "./components/ServiceOrderItem.js";
const searchForm = () => "./components/searchForm.js";
const _sfc_main = {
  components: {
    ServiceOrderItem,
    searchForm
  },
  mixins: [mixins_listMixins.listMixins],
  data() {
    return {
      tabs: [
        { name: "待处理", count: 8, key: "platform_wait" },
        { name: "全部", count: 3, key: "" }
      ],
      currentTab: 0,
      orderList: [],
      page: 1,
      pageSize: 10,
      loadMoreStatus: "loadmore",
      isRefreshing: false,
      // 模拟数据
      mockOrders: [
        {
          id: 1,
          categoryName: "科学健身指导",
          title: "南门社区广场舞指导",
          location: "南门社区广场",
          serviceTime: "2025/08/26 12:00:00",
          createTime: "2025/08/26 12:00",
          status: "待派单"
        },
        {
          id: 2,
          categoryName: "科学健身指导",
          title: "南门社区广场舞指导",
          location: "南门社区广场",
          serviceTime: "2025/08/26 12:00:00",
          createTime: "2025/08/26 12:00",
          status: "待服务"
        }
      ],
      typeList: [],
      statusList: [],
      formSearch: {
        dictId: "",
        serveWorkStatStatus: "",
        serveWorkDevStatus: "platform_wait"
      }
    };
  },
  mounted() {
    this.getList();
    this.handelGetServicesDictPage();
    try {
      const data = JSON.parse(JSON.stringify(store_user_index.useUserStore().getEnumListByKey("serveWorkStatStatus"))) || [];
      console.log({ data });
      data.unshift({ label: "全部状态", value: "" });
      this.statusList = data.map((item) => ({
        name: item.label,
        value: item.value
      }));
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    // 获取订单列表
    getList(refresh = false) {
      return __async(this, null, function* () {
        let param = __spreadValues({
          page: this.page,
          size: 10
        }, this.formSearch);
        const res = yield apis_sportsService_serviceAssign.getOrderList(param);
        this.getListExtend(res, refresh);
      });
    },
    hanldeSearch(formSearch) {
      this.formSearch = Object.assign(this.formSearch, formSearch);
      this.resetData();
    },
    // 切换tab栏
    changeTabs(e) {
      console.log({ e });
      this.formSearch.serveWorkDevStatus = e.key;
      this.resetData();
    },
    // 获取服务类型
    handelGetServicesDictPage() {
      return __async(this, null, function* () {
        const res = yield apis_sportsService_common.getServicesDictPage({ dict_type_sign: "service_type" });
        if (res.code === 0) {
          this.typeList = res.data.listData || [];
          this.typeList.unshift({ name: "全部", dictId: "" });
        }
      });
    },
    // 点击列表项
    handleDetail(item) {
      common_vendor.index.navigateTo({
        url: `/pagesSub/sportsService/serviceAssign/detail?id=${item.serveWorkId}&mode=plaform`
      });
    },
    // 拒单
    handleReject(item, fn) {
      return __async(this, null, function* () {
        console.log({ item });
        const res = yield apis_sportsService_serviceAssign.platformDispatch({
          processType: "reject",
          serveWorkId: item.serveWorkId,
          rejectReason: item.rejectReason
        });
        if (res.code === 0) {
          common_vendor.index.showToast({
            title: "拒单成功",
            icon: "success"
          });
          this.resetData();
          fn();
        }
      });
    },
    // 完成服务
    handleComplete(item) {
      return __async(this, null, function* () {
        common_vendor.index.showModal({
          title: "提示",
          content: "确认完成服务吗？",
          success: (res) => {
            if (res.confirm) {
              common_vendor.index.showToast({
                title: "操作成功",
                icon: "success"
              });
              this.getOrderList(true);
            }
          }
        });
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _component_searchForm = common_vendor.resolveComponent("searchForm");
  const _component_service_order_item = common_vendor.resolveComponent("service-order-item");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_tabs2 + _component_searchForm + _component_service_order_item + _component_empty + _component_loadMore + _component_layout_default_uni)();
}
const _easycom_uv_tabs = () => "../../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
if (!Math) {
  _easycom_uv_tabs();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: "transparent",
      title: "",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: common_vendor.o($options.changeTabs),
    c: common_vendor.p({
      list: $data.tabs,
      customStyle: "width: 100%;height: 80rpx;",
      itemStyle: "width: 50%;height: 80rpx;box-sizing: border-box",
      lineColor: "#303133"
    }),
    d: common_vendor.o($options.hanldeSearch),
    e: common_vendor.p({
      statusList: $data.statusList,
      typeList: $data.typeList
    }),
    f: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: index + "orderItem",
        b: common_vendor.o($options.handleReject, index + "orderItem"),
        c: common_vendor.o($options.handleDetail, index + "orderItem"),
        d: "d376cbf0-4-" + i0 + ",d376cbf0-0",
        e: common_vendor.p({
          item
        })
      };
    }),
    g: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    h: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    i: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d376cbf0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
