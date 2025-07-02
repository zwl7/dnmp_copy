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
        { name: "待处理", count: 8, key: "org_wait" },
        { name: "全部", count: 3, key: "" }
      ],
      currentTab: 0,
      orderList: [],
      page: 1,
      pageSize: 10,
      loadMoreStatus: "loadmore",
      isRefreshing: false,
      typeList: [],
      statusList: [],
      formSearch: {
        dictId: "",
        serveWorkStatStatus: "",
        serveWorkDevStatus: "org_wait"
      },
      currentOrgan: {
        resource_id: "",
        name: ""
      },
      organActions: []
    };
  },
  onShow() {
    return __async(this, null, function* () {
      this.resetData();
    });
  },
  mounted() {
    return __async(this, null, function* () {
      this.handelGetServicesDictPage();
      const data = store_user_index.useUserStore().getEnumListByKey("serveWorkStatStatus") || [];
      console.log({ data });
      data.unshift({ label: "全部", value: "" });
      this.statusList = data.map((item) => ({
        name: item.label,
        value: item.value
      }));
    });
  },
  methods: {
    // 获取订单列表
    getList(refresh = false) {
      return __async(this, null, function* () {
        if (!this.currentOrgan.resource_id) {
          yield this.getIdentityList();
        }
        let param = __spreadProps(__spreadValues({
          page: this.page,
          size: 10
        }, this.formSearch), {
          organizationId: this.currentOrgan.resource_id
        });
        const res = yield apis_sportsService_serviceAssign.getOrgDispatchList(param);
        this.getListExtend(res, refresh);
      });
    },
    onOrganSelect(organ) {
      console.log({ organ });
      this.currentOrgan = organ;
      this.resetData();
    },
    // 打开组织
    checkOrganList() {
      this.$refs.organListRef.open();
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
        url: `/pagesSub/sportsService/serviceAssign/detail?id=${item.serveWorkId}&mode=org&orgId=${this.currentOrgan.resource_id}`
      });
    },
    // 获取组织列表
    getIdentityList() {
      return __async(this, null, function* () {
        const res = yield apis_sportsService_common.getPersonnelAuth();
        if (res.code === 200) {
          console.log({ res });
          const actions = res.data.filter((item) => item.resource_type == "1").map((item) => ({
            name: item.resource_name,
            resource_id: item.resource_id
          }));
          console.log({ actions });
          this.organActions = actions;
          this.currentOrgan = actions[0];
          return "ok";
        }
      });
    },
    // 接单
    handleAccept(item) {
      return __async(this, null, function* () {
        console.log({ item });
        common_vendor.index.navigateTo({
          url: `/pagesSub/sportsService/serviceAssign/detail?id=${item.serveWorkId}`
        });
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
              this.getOrgDispatchList(true);
            }
          }
        });
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _component_searchForm = common_vendor.resolveComponent("searchForm");
  const _component_service_order_item = common_vendor.resolveComponent("service-order-item");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _easycom_uv_action_sheet2 = common_vendor.resolveComponent("uv-action-sheet");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_icon2 + _easycom_uv_tabs2 + _component_searchForm + _component_service_order_item + _component_empty + _component_loadMore + _easycom_uv_action_sheet2 + _component_layout_default_uni)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_tabs = () => "../../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
const _easycom_uv_action_sheet = () => "../../../node-modules/@climblee/uv-ui/components/uv-action-sheet/uv-action-sheet.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_tabs + _easycom_uv_action_sheet)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: "transparent",
      title: "组织派单",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: common_vendor.t($data.currentOrgan.name),
    c: common_vendor.p({
      name: "arrow-right",
      size: "16",
      color: ""
    }),
    d: common_vendor.o((...args) => $options.checkOrganList && $options.checkOrganList(...args)),
    e: common_vendor.o($options.changeTabs),
    f: common_vendor.p({
      list: $data.tabs,
      customStyle: "width: 100%;height: 80rpx;",
      itemStyle: "width: 50%;height: 80rpx;box-sizing: border-box",
      lineColor: "#303133"
    }),
    g: common_vendor.o($options.hanldeSearch),
    h: common_vendor.p({
      statusList: $data.statusList,
      typeList: $data.typeList
    }),
    i: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: index + "orderItem",
        b: common_vendor.o($options.handleAccept, index + "orderItem"),
        c: common_vendor.o($options.handleReject, index + "orderItem"),
        d: common_vendor.o($options.handleDetail, index + "orderItem"),
        e: "3c49f847-5-" + i0 + ",3c49f847-0",
        f: common_vendor.p({
          item
        })
      };
    }),
    j: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    k: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    l: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {}, {
    m: common_vendor.sr("organListRef", "3c49f847-8,3c49f847-0"),
    n: common_vendor.o($options.onOrganSelect),
    o: common_vendor.p({
      actions: $data.organActions,
      title: $data.organActions.length > 0 ? "请选择组织" : "暂无组织",
      round: true
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3c49f847"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=organList.js.map
