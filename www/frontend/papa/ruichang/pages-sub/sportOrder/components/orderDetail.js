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
require("../../../apis/sportsService/javaRequest.js");
const apis_sportsService_serviceStyle = require("../../../apis/sportsService/serviceStyle.js");
const store_app_index = require("../../../store/app/index.js");
const serviceDetailTitle = () => "./serviceDetailTitle.js";
const _sfc_main = {
  components: {
    serviceDetailTitle
    // VisitorViewCommentPopup,
  },
  props: {
    order: {
      type: Object,
      default: () => {
      }
    },
    isShowBase: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
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
        organizationMemberIdName: {
          label: "联系人",
          value: "芒果"
        },
        orgPhone: {
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
      },
      // 组织待接单
      orgWaitMap: {
        platformOpTime: {
          label: "派单时间",
          value: "2025/10/18 12:00:00"
        },
        organizationIdCn: {
          label: "接单组织",
          value: "靖安县广场舞协会"
        }
      },
      evaluteMode: "view",
      appStore: null
    };
  },
  computed: {
    // 判断是否点单人
    isOrderMan() {
      console.log({ userInfo: this.appStore.userInfo, order: this.order });
      return this.appStore.userInfo.account_id === this.order.creatorId;
    }
  },
  onLoad(options) {
  },
  mounted() {
    this.appStore = store_app_index.useAppStore();
  },
  watch: {
    order: {
      handler(val) {
        this.formatFormList(val.serveWorkDevStatus);
      }
    }
  },
  methods: {
    // 根据状态组装表单展示
    formatFormList(serveWorkDevStatus) {
      this.status = serveWorkDevStatus;
      this.formList = [];
      switch (serveWorkDevStatus) {
        case "serve_wait":
          Object.keys(this.waitMap).forEach((key) => {
            const item = this.waitMap[key];
            item.value = this.order[key];
            this.formList.push(item);
          });
          break;
        case "org_wait":
          Object.keys(this.orgWaitMap).forEach((key) => {
            const item = this.orgWaitMap[key];
            item.value = this.order[key];
            this.formList.push(item);
          });
          break;
        case "no_pass":
          Object.keys(this.reasonMap).forEach((key) => {
            const item = this.reasonMap[key];
            item.value = this.order[key];
            this.formList.push(item);
          });
          break;
        case "completed":
          Object.keys(this.waitMap).forEach((key) => {
            const item = this.waitMap[key];
            item.value = this.order[key];
            this.formList.push(item);
          });
          this.formList.push({
            label: "服务时间",
            value: `${this.order.serveStartDate}至${this.order.serveEndDate}`
          });
          break;
      }
    },
    // 评价函数
    handleCommentSubmit(value) {
      return __async(this, null, function* () {
        const res = yield apis_sportsService_serviceStyle.addAppraise({
          serveWorkId: this.order.serveWorkId,
          rating: value
        });
        if (res.code === 0) {
          common_vendor.index.showToast({
            title: "评价成功",
            icon: "success"
          });
          this.$refs.visitorViewCommentPopup.close();
          this.$emit("reload");
        }
      });
    },
    // 前往目标风采详情页面
    routeToStyleDetail() {
      common_vendor.index.navigateTo({
        url: `/pagesSub/sportsService/serviceStyle/detail?id=${this.order.serveMienId}`
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
    // 打开我的评价
    handleViewMyComment() {
      console.log("打开我的评价", this.$refs.visitorViewCommentPopup);
      this.evaluteMode = "edit";
      this.$refs.visitorViewCommentPopup.open();
    },
    // 前往评价页面
    toEvaluePage() {
    },
    // 重新提交
    reSubmit() {
    },
    // 查看评价
    checkEvalue() {
      this.evaluteMode = "view";
      this.$refs.visitorViewCommentPopup.open();
    }
  }
};
if (!Array) {
  const _component_serviceDetailTitle = common_vendor.resolveComponent("serviceDetailTitle");
  _component_serviceDetailTitle();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: ["rating_wait", "completed"].includes($data.status)
  }, ["rating_wait", "completed"].includes($data.status) ? common_vendor.e({
    b: $data.status === "rating_wait"
  }, $data.status === "rating_wait" ? common_vendor.e({
    c: common_vendor.t($props.order.serveStartDate),
    d: common_vendor.t($props.order.serveEndDate),
    e: $options.isOrderMan
  }, $options.isOrderMan ? {
    f: common_vendor.o((...args) => $options.routeToStyleDetail && $options.routeToStyleDetail(...args))
  } : {}) : {}, {
    g: $data.status === "completed"
  }, $data.status === "completed" ? {
    h: common_vendor.t($props.order.ratingTime),
    i: common_vendor.o((...args) => $options.routeToStyleDetail && $options.routeToStyleDetail(...args))
  } : {}) : {}, {
    j: $data.formList.length
  }, $data.formList.length ? {
    k: common_vendor.f($data.formList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.label),
        b: common_vendor.t(item.value),
        c: index + "formItem"
      };
    })
  } : {}, {
    l: common_vendor.p({
      item: $props.order
    }),
    m: $props.isShowBase
  }, $props.isShowBase ? {
    n: common_vendor.t($props.order.creatorName),
    o: common_vendor.t($props.order.createPhone),
    p: common_vendor.t($props.order.peopleNum),
    q: common_vendor.t($props.order.demandDescription)
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8b994352"]]);
wx.createComponent(Component);
//# sourceMappingURL=orderDetail.js.map
