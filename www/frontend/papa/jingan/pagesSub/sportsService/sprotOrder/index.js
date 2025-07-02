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
const mixins_listMixins = require("../../../mixins/listMixins.js");
const apis_sportsService_serviceOrder = require("../../../apis/sportsService/serviceOrder.js");
require("../../../store/app/index.js");
const store_user_index = require("../../../store/user/index.js");
const OrderItem = () => "./components/OrderItem.js";
const _sfc_main = {
  mixins: [mixins_listMixins.listMixins],
  components: {
    OrderItem
  },
  data() {
    return {
      tabs: [
        { name: "全部", value: "all" },
        { name: "待评价", value: "pending" },
        { name: "待派单", value: "dispatch" },
        { name: "待服务", value: "service" }
      ],
      currentTab: 0,
      list: [],
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
          status: "1"
        },
        {
          id: 2,
          categoryName: "科学健身指导",
          title: "南门社区广场舞指导",
          location: "南门社区广场",
          serviceTime: "2025/08/26 12:00:00",
          createTime: "2025/08/26 12:00",
          status: "2"
        }
      ],
      serveWorkStatStatus: "",
      isDragging: false,
      startX: 0,
      startY: 0,
      boxX: 0,
      boxY: 0,
      windowWidth: 375,
      // 默认值，需在mounted中更新
      windowHeight: 667,
      userStore: store_user_index.useUserStore()
    };
  },
  onLoad() {
    try {
      const data = JSON.parse(JSON.stringify(store_user_index.useUserStore().getEnumListByKey("serveWorkStatStatus"))) || [];
      data.unshift({ label: "全部", value: "" });
      this.tabs = data;
    } catch (error) {
      console.error(error);
    }
  },
  onShow() {
    this.resetData();
  },
  mounted() {
    const systemInfo = common_vendor.index.getSystemInfoSync();
    console.log({ systemInfo });
    this.windowWidth = systemInfo.windowWidth;
    this.windowHeight = systemInfo.windowHeight;
    this.initPosition();
  },
  computed: {
    boxStyle() {
      return {
        left: `${this.boxX}px`,
        top: `${this.boxY}px`,
        position: "fixed"
        // transform: this.isDragging ? 'none' : 'translateY(-50%)',
      };
    }
  },
  methods: {
    // 获取订单列表
    getList(refresh = false) {
      return __async(this, null, function* () {
        let param = {
          page: this.page,
          size: 10,
          serveWorkStatStatus: this.serveWorkStatStatus
        };
        const res = yield apis_sportsService_serviceOrder.getMyOrderList(param);
        this.getListExtend(res, refresh);
      });
    },
    // 切换标签
    handleTabChange(item, index) {
      if (this.currentTab === index)
        return;
      this.currentTab = index;
      this.serveWorkStatStatus = item.value;
      this.resetData();
    },
    // 申请服务
    handleApply(item) {
      common_vendor.index.navigateTo({
        url: `/pagesSub/sportsService/sprotOrder/form?id=${item.id}`
      });
    },
    // 查看详情
    handleView(item) {
      common_vendor.index.navigateTo({
        url: `/pagesSub/sportsService/sprotOrder/detail?id=${item.serveWorkId}`
      });
    },
    // 发布服务
    handleSubmit() {
      common_vendor.index.navigateTo({
        url: "/pagesSub/sportsService/sprotOrder/form"
      });
    },
    initPosition() {
      this.boxX = this.windowWidth - 100;
      this.boxY = this.windowHeight - 360;
    },
    startDrag(e) {
      const touch = e.touches ? e.touches[0] : e;
      this.isDragging = true;
      console.log({ touch });
      this.startX = touch.clientX - this.boxX;
      this.startY = touch.clientY - this.boxY;
    },
    onDrag(e) {
      if (!this.isDragging)
        return;
      e.preventDefault();
      e.stopPropagation();
      const touch = e.touches ? e.touches[0] : e;
      let newX = touch.clientX - this.startX;
      let newY = touch.clientY - this.startY;
      const maxX = this.windowWidth - 100;
      const maxY = this.windowHeight - 100;
      this.boxX = Math.max(0, Math.min(newX, maxX));
      this.boxY = Math.max(0, Math.min(newY, maxY));
      e.preventDefault();
    },
    endDrag() {
      this.isDragging = false;
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_order_item = common_vendor.resolveComponent("order-item");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_loadMore = common_vendor.resolveComponent("loadMore");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_order_item + _component_empty + _component_loadMore + _component_layout_default_uni)();
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
    b: common_vendor.f($data.userStore.getEnumListByKey("serveWorkStatStatus", true), (tab, index, i0) => {
      return {
        a: common_vendor.t(tab.label),
        b: index,
        c: $data.currentTab === index ? 1 : "",
        d: common_vendor.o(($event) => $options.handleTabChange(tab, index), index)
      };
    }),
    c: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: index,
        b: common_vendor.o($options.handleApply, index),
        c: common_vendor.o(($event) => $options.handleView(item), index),
        d: "59ddd25e-2-" + i0 + ",59ddd25e-0",
        e: common_vendor.p({
          item,
          showApplyBtn: $data.currentTab === 0
        })
      };
    }),
    d: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    e: _ctx.showLoadMore
  }, _ctx.showLoadMore ? {
    f: common_vendor.p({
      status: _ctx.loadStatus
    })
  } : {}, {
    g: common_vendor.s($options.boxStyle),
    h: common_vendor.o((...args) => $options.handleSubmit && $options.handleSubmit(...args)),
    i: common_vendor.o((...args) => $options.startDrag && $options.startDrag(...args)),
    j: common_vendor.o((...args) => $options.onDrag && $options.onDrag(...args)),
    k: common_vendor.o((...args) => $options.endDrag && $options.endDrag(...args)),
    l: common_vendor.o((...args) => $options.startDrag && $options.startDrag(...args)),
    m: common_vendor.o((...args) => $options.onDrag && $options.onDrag(...args)),
    n: common_vendor.o((...args) => $options.endDrag && $options.endDrag(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-59ddd25e"]]);
wx.createPage(MiniProgramPage);
