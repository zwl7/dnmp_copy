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
const apis_sportsService_serviceOrder = require("../../../apis/sportsService/serviceOrder.js");
const serviceDetailTitle = () => "../components/serviceDetailTitle.js";
const orderDetail = () => "../components/orderDetail.js";
const _sfc_main = {
  components: {
    serviceDetailTitle,
    orderDetail
  },
  data() {
    return {
      order: {
        name: "xxxz指导",
        dictName: "科学健身指导",
        status: "已完成",
        // 可切换为: '待派', '待服务', '待评价', '已拒单', '已完成'
        address: "南门社区广场",
        serviceTime: "2025-5-1 19:00",
        applyTime: "2025-04-16 09:15",
        createTime: "2025-04-16 09:15",
        userName: "李大球",
        userPhone: "15980807932",
        personCount: 20,
        requireDetail: "南门社区为筹备广场舞大赛，需要派专门广场舞老师进行辅导培训",
        assignTime: "2025.04.16 19:11",
        orgName: "靖安县广场舞协会",
        orgContact: "李大球",
        orgPhone: "15960908090",
        commentTime: "2025.05.02 7:00",
        rejectReason: "需求不明确，目前没有匹配人员和资源，请重新描述"
      },
      status: "wait",
      // wait:待派，service:待服务，comment:待评价，reject:已拒单，finish:已完成
      formList: [],
      waitMap: {
        platformOpTime: {
          label: "派单时间",
          value: "2025/10/18 12:00:00"
        },
        organizationIdCn: {
          label: "接单组织",
          value: "靖安县广场舞协会"
        },
        creatorName: {
          label: "联系人",
          value: "芒果"
        },
        phone: {
          label: "手机号码",
          value: "17417513326"
        }
      },
      reasonMap: {
        platformOpTime: {
          label: "时间",
          value: "南门社区广场"
        },
        rejectReason: {
          label: "原因",
          value: "需求不明确，目前没有匹配人员和资源，请重新描述"
        }
      }
    };
  },
  onLoad(options) {
    const id = options.id;
    console.log({ id });
    this.handleGetInfo(id);
  },
  mounted() {
  },
  methods: {
    handleGetInfo(id) {
      return __async(this, null, function* () {
        const res = yield apis_sportsService_serviceOrder.getOrderInfo(id);
        if (res.code === 0) {
          console.log({ res });
          this.order = res.data;
          common_vendor.index.setNavigationBarTitle({ title: res.data.serveWorkStatStatusCn });
        }
      });
    },
    viewStyle() {
      common_vendor.index.navigateTo({ url: "/pagesSub/sportsService/serviceStyle/detail?id=1" });
    },
    commentOrder() {
      common_vendor.index.navigateTo({ url: "/pagesSub/sportsService/serviceComment/index?orderId=1" });
    },
    retryOrder() {
      common_vendor.index.navigateTo({ url: "/pagesSub/sportsService/sprotOrder/form?orderId=1" });
    },
    // 前往评价页面
    toEvaluePage() {
    },
    // 重新提交
    reSubmit() {
    },
    // 查看评价
    checkEvaluePage() {
    }
  }
};
if (!Array) {
  const _component_orderDetail = common_vendor.resolveComponent("orderDetail");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_orderDetail + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      order: $data.order
    }),
    b: $data.order.serveWorkStatStatus === "no_pass"
  }, $data.order.serveWorkStatStatus === "no_pass" ? {
    c: common_vendor.o((...args) => $options.reSubmit && $options.reSubmit(...args))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-43507cf2"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=detail.js.map
