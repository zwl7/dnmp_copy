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
const _sfc_main = {
  data() {
    return {
      tabs: [
        { name: "特处理", count: 5 },
        { name: "全部", count: 10 }
      ],
      currentTab: 0,
      serviceList: [],
      page: 1,
      pageSize: 10,
      loadMoreStatus: "loadmore",
      isRefreshing: false,
      // 模拟数据
      mockServices: [
        {
          id: 1,
          categoryName: "赛事活动组",
          title: "青少年篮球赛裁判员",
          status: "pending",
          statusText: "待发布",
          serviceTime: "2025-5-1 19:00",
          address: "南门社区广场",
          personLimit: 30,
          applyTime: "2025-04-16 09:15"
        },
        {
          id: 2,
          categoryName: "赛事活动组",
          title: "青少年篮球赛裁判员",
          status: "published",
          statusText: "已发布",
          serviceTime: "2025-5-1 19:00",
          address: "南门社区广场",
          personLimit: 30,
          applyTime: "2025-04-16 09:15"
        }
      ]
    };
  },
  mounted() {
    this.getServiceList();
  },
  methods: {
    // 获取服务列表
    getServiceList(isRefresh = false) {
      return __async(this, null, function* () {
        if (isRefresh) {
          this.page = 1;
          this.serviceList = [];
        }
        yield new Promise((resolve) => setTimeout(resolve, 1e3));
        const list = this.mockServices.map((item) => __spreadProps(__spreadValues({}, item), {
          id: item.id + this.page * 10
        }));
        if (isRefresh) {
          this.serviceList = list;
        } else {
          this.serviceList = [...this.serviceList, ...list];
        }
        this.loadMoreStatus = list.length < this.pageSize ? "nomore" : "loadmore";
      });
    },
    // 切换标签
    handleTabChange(index) {
      if (this.currentTab === index)
        return;
      this.currentTab = index;
      this.getServiceList(true);
    },
    // 下拉刷新
    onRefresh() {
      return __async(this, null, function* () {
        this.isRefreshing = true;
        yield this.getServiceList(true);
        this.isRefreshing = false;
      });
    },
    // 加载更多
    loadMore() {
      if (this.loadMoreStatus === "nomore")
        return;
      this.page++;
      this.getServiceList();
    },
    // 发布服务承接
    handleApply(item) {
      common_vendor.index.showModal({
        title: "提示",
        content: "确认发布该服务承接吗？",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.showToast({
              title: "发布成功",
              icon: "success"
            });
            this.getServiceList(true);
          }
        }
      });
    },
    // 查看详情
    handleView(item) {
      common_vendor.index.navigateTo({
        url: `/pagesSub/sportsService/serviceDetail/index?id=${item.id}`
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_empty2 = common_vendor.resolveComponent("uv-empty");
  const _easycom_uv_load_more2 = common_vendor.resolveComponent("uv-load-more");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_empty2 + _easycom_uv_load_more2 + _component_layout_default_uni)();
}
const _easycom_uv_empty = () => "../../../node-modules/@climblee/uv-ui/components/uv-empty/uv-empty.js";
const _easycom_uv_load_more = () => "../../../node-modules/@climblee/uv-ui/components/uv-load-more/uv-load-more.js";
if (!Math) {
  (_easycom_uv_empty + _easycom_uv_load_more)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.f($data.tabs, (tab, index, i0) => {
      return {
        a: common_vendor.t(tab.name),
        b: common_vendor.t(tab.count),
        c: index,
        d: common_vendor.n($data.currentTab === index ? "active" : ""),
        e: common_vendor.o(($event) => $options.handleTabChange(index), index)
      };
    }),
    b: common_vendor.f($data.serviceList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.categoryName),
        b: common_vendor.t(item.statusText),
        c: common_vendor.n(item.status),
        d: common_vendor.t(item.title),
        e: common_vendor.t(item.serviceTime),
        f: common_vendor.t(item.address),
        g: common_vendor.t(item.personLimit),
        h: common_vendor.t(item.applyTime),
        i: common_vendor.o(($event) => $options.handleApply(item), index),
        j: common_vendor.o(($event) => $options.handleView(item), index),
        k: index
      };
    }),
    c: $data.serviceList.length === 0
  }, $data.serviceList.length === 0 ? {
    d: common_vendor.p({
      text: "暂无数据"
    })
  } : {}, {
    e: $data.serviceList.length > 0
  }, $data.serviceList.length > 0 ? {
    f: common_vendor.p({
      status: $data.loadMoreStatus
    })
  } : {}, {
    g: common_vendor.o((...args) => $options.loadMore && $options.loadMore(...args)),
    h: common_vendor.o((...args) => $options.onRefresh && $options.onRefresh(...args)),
    i: $data.isRefreshing
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ca70726c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
