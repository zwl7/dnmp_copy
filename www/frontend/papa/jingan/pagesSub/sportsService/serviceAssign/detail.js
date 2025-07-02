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
const apis_sportsService_serviceOrder = require("../../../apis/sportsService/serviceOrder.js");
const apis_sportsService_common = require("../../../apis/sportsService/common.js");
const apis_sportsService_serviceAssign = require("../../../apis/sportsService/serviceAssign.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const utils_timeUtil = require("../../../utils/timeUtil.js");
const serviceDetailTitle = () => "../components/serviceDetailTitle.js";
const orderDetail = () => "../components/orderDetail.js";
const rejectPopue = () => "./components/rejectPopue.js";
const _sfc_main = {
  mixins: [mixins_themeMixins.themeMixins],
  components: {
    serviceDetailTitle,
    orderDetail,
    rejectPopue
  },
  data() {
    return {
      order: {},
      status: "wait",
      // wait:待派，service:待服务，comment:待评价，reject:已拒单，finish:已完成
      formList: [
        {
          label: "派单时间",
          value: "2025/10/18 12:00:00"
        },
        {
          label: "接单组织",
          value: "靖安县广场舞协会"
        },
        {
          label: "服务时间",
          value: "2025/10/18 12:00:00"
        },
        {
          label: "时间",
          value: "南门社区广场"
        },
        {
          label: "原因",
          value: "需求不明确，目前没有匹配人员和资源，请重新描述"
        },
        {
          label: "联系人",
          value: "芒果"
        },
        {
          label: "手机号码",
          value: "17417513326"
        }
      ],
      staffList: [],
      isAccept: false,
      // 是否接单状态
      unitList: [],
      organStaffList: [],
      selectedList: [],
      mode: "plaform",
      // org/plaform // 分组织和平台
      orgId: "",
      // 组织id
      serviceId: "",
      // 服务id
      submited: false,
      showStyle: ""
    };
  },
  computed: {
    showOprBtn() {
      var _a, _b, _c;
      if (this.isAccept)
        return false;
      if (this.mode === "org") {
        return ((_a = this.order) == null ? void 0 : _a.serveWorkDevStatus) === "org_wait";
      } else {
        return ((_b = this.order) == null ? void 0 : _b.serveWorkDevStatus) === "platform_wait" || ((_c = this.order) == null ? void 0 : _c.serveWorkDevStatus) === "org_wait";
      }
    }
  },
  onLoad(options) {
    this.setNavigationBarColor();
    const { id, mode, orgId, showStyle } = options;
    console.log({ id, mode });
    this.mode = mode;
    this.orgId = orgId;
    this.serviceId = id;
    this.showStyle = showStyle;
  },
  onShow() {
    this.handleGetInfo();
    this.submited = false;
  },
  mounted() {
    this.getAssginUnit();
  },
  methods: {
    // 获取详情
    handleGetInfo() {
      return __async(this, null, function* () {
        const res = yield apis_sportsService_serviceOrder.getOrderInfo(this.serviceId);
        if (res.code === 0) {
          console.log({ res });
          this.order = res.data;
          common_vendor.index.setNavigationBarTitle({ title: res.data.serveWorkStatStatusCn });
        } else {
          common_vendor.index.showToast({ title: res.msg, icon: "none" });
        }
      });
    },
    // 前往服务风采发布页面
    handlePublishStyle(item) {
      const servicTimeGap = utils_timeUtil.timeDifference(new Date(item.serveStartDate).getTime(), new Date(item.serveEndDate).getTime());
      console.log({ servicTimeGap, item });
      common_vendor.index.navigateTo({
        url: `/pagesSub/sportsService/serviceStyle/form?id=${item.serveWorkId}&timeGap=${servicTimeGap.toFixed(1)}&peopleNum=${item.peopleNum}`
      });
    },
    // 切换接单模式
    changeAcceptStauts() {
      this.isAccept = !this.isAccept;
      if (!this.isAccept) {
        this.selectedList = [];
      }
    },
    // 勾选人员\组织
    changeSelect(e) {
      console.log({ e, mode: this.mode });
      if (this.mode == "plaform") {
        const index = this.unitList.findIndex((item) => item.id === e.id);
        if (e.checked) {
          this.unitList[index].checked = false;
          this.selectedList = [];
        } else {
          this.unitList.forEach((item) => {
            item.checked = false;
          });
          this.unitList[index].checked = true;
          this.selectedList = [e];
        }
      } else {
        const index = this.unitList.findIndex((item) => item.id === e.id);
        if (e.checked) {
          this.unitList[index].checked = false;
          this.selectedList = this.selectedList.filter((item) => item.id !== e.id);
        } else {
          this.unitList[index].checked = true;
          this.selectedList.push(e);
        }
      }
    },
    // 接单
    handleAccept(item) {
      return __async(this, null, function* () {
        console.log({ item, mode: this.mode });
        if (this.selectedList.length === 0) {
          common_vendor.index.showToast({
            title: `请选择${this.mode == "org" ? "组织" : "人员"}`,
            icon: "none"
          });
          return;
        }
        if (this.submited)
          return;
        this.submited = true;
        if (this.mode == "org") {
          yield this.handleOrgAccept(item);
        } else {
          yield this.handlePlatformAccept(item);
        }
        common_vendor.index.showToast({
          title: "接单成功",
          icon: "success"
        });
        this.handleGetInfo();
        this.isAccept = false;
      });
    },
    // 组织接单
    handleOrgAccept(item) {
      return __async(this, null, function* () {
        const res = yield apis_sportsService_serviceAssign.orgDispatch({
          processType: "platform",
          serveWorkId: this.order.serveWorkId,
          sportTalentIds: this.selectedList.map((item2) => item2.id).join(",")
        });
        if (res.code === 0) {
          return "ok";
        }
      });
    },
    // 平台接单
    handlePlatformAccept(item) {
      return __async(this, null, function* () {
        const res = yield apis_sportsService_serviceAssign.platformDispatch({
          processType: "platform",
          serveWorkId: this.order.serveWorkId,
          organizationId: this.selectedList[0].id
        });
        if (res.code === 0) {
          return "ok";
        }
      });
    },
    // 拒单
    handleReject(value) {
      return __async(this, null, function* () {
        console.log({ value });
        if (this.mode == "org") {
          yield this.handleOrgReject(value);
        } else {
          yield this.handlePlatformReject(value);
        }
        common_vendor.index.showToast({
          title: "拒单成功",
          icon: "success"
        });
        this.$refs.rejectPopue.close();
        this.handleGetInfo();
      });
    },
    // 平台拒单
    handlePlatformReject(value) {
      return __async(this, null, function* () {
        const res = yield apis_sportsService_serviceAssign.platformDispatch({
          processType: "reject",
          serveWorkId: this.order.serveWorkId,
          rejectReason: value
        });
        if (res.code === 0) {
          return "ok";
        }
      });
    },
    // 组织拒单
    handleOrgReject(value) {
      return __async(this, null, function* () {
        const res = yield apis_sportsService_serviceAssign.orgDispatch({
          processType: "reject",
          serveWorkId: this.order.serveWorkId,
          rejectReason: value
        });
        if (res.code === 0) {
          return "ok";
        }
      });
    },
    // 搜索组织
    searchUnit(name) {
      this.getAssginUnit(name);
    },
    // 获取组织列表
    getAssginUnit(name) {
      return __async(this, null, function* () {
        if (this.mode == "org") {
          this.handleGetOrganStaffList(this.orgId, name);
        } else {
          this.handleGetOrganList(name);
        }
      });
    },
    // 获取组织列表
    handleGetOrganList(keyword = "") {
      return __async(this, null, function* () {
        const res = yield apis_sportsService_common.getPlatformOrderPage({
          page: 1,
          size: 999,
          type_id: "8",
          keyword
        });
        if (res.code === 0) {
          console.log({ res });
          this.unitList = res.data.listData.map((item) => __spreadProps(__spreadValues({}, item), {
            checked: false
          }));
        }
      });
    },
    // 获取组织人员列表
    handleGetOrganStaffList(organization_id, keyword = "") {
      return __async(this, null, function* () {
        const res = yield apis_sportsService_common.getOrgOrderPage({
          page: 1,
          size: 999,
          organization_id,
          keyword
        });
        if (res.code === 0) {
          console.log({ people: res });
          this.unitList = res.data.listData.map((item) => __spreadProps(__spreadValues({}, item), {
            // 若只有一个则默认选中
            checked: false
          }));
          if (this.unitList.length === 1) {
            this.changeSelect(this.unitList[0]);
          }
        }
      });
    },
    // 拒绝订单
    refuseOrder() {
      this.$refs.rejectPopue.open();
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
      common_vendor.index.navigateTo({
        url: `/pagesSub/sportsService/serviceStyle/detail?id=${this.order.serveMienId}`
      });
    },
    // 重新提交
    reSubmit() {
    },
    // 发布风采
    publishStyle() {
    },
    // 接单
    acceptOrder() {
    },
    // 查看评价
    checkEvaluePage() {
    }
  }
};
if (!Array) {
  const _component_orderDetail = common_vendor.resolveComponent("orderDetail");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_rejectPopue = common_vendor.resolveComponent("rejectPopue");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_orderDetail + _easycom_uv_icon2 + _component_rejectPopue + _component_layout_default_uni)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.handleGetInfo),
    b: common_vendor.p({
      order: $data.order,
      isShowBase: !$data.isAccept
    }),
    c: $data.isAccept
  }, $data.isAccept ? {
    d: `搜索${this.mode === "plaform" ? "组织" : "人才"}`,
    e: _ctx.unitKeyword,
    f: common_vendor.o(($event) => _ctx.unitKeyword = $event.detail.value),
    g: common_vendor.o(($event) => $options.searchUnit(_ctx.unitKeyword)),
    h: common_vendor.f($data.unitList, (item, k0, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.name)
      }, this.mode !== "plaform" ? {
        b: common_vendor.t(item.phone)
      } : {}, {
        c: item.checked
      }, item.checked ? {
        d: "ec032890-2-" + i0 + ",ec032890-0",
        e: common_vendor.p({
          name: "checkbox-mark",
          size: "16"
        })
      } : {}, {
        f: item.id,
        g: common_vendor.o(($event) => $options.changeSelect(item), item.id)
      });
    }),
    i: this.mode !== "plaform"
  } : {}, {
    j: $options.showOprBtn
  }, $options.showOprBtn ? {
    k: common_vendor.o((...args) => $options.refuseOrder && $options.refuseOrder(...args)),
    l: common_vendor.o((...args) => $options.changeAcceptStauts && $options.changeAcceptStauts(...args))
  } : {}, {
    m: $data.order.serveWorkDevStatus === "serve_wait" && $data.showStyle
  }, $data.order.serveWorkDevStatus === "serve_wait" && $data.showStyle ? {
    n: common_vendor.o(($event) => $options.handlePublishStyle($data.order))
  } : {}, {
    o: $data.isAccept
  }, $data.isAccept ? {
    p: common_vendor.o((...args) => $options.changeAcceptStauts && $options.changeAcceptStauts(...args)),
    q: common_vendor.o((...args) => $options.handleAccept && $options.handleAccept(...args))
  } : {}, {
    r: common_vendor.sr("rejectPopue", "ec032890-3,ec032890-0"),
    s: common_vendor.o($options.handleReject),
    t: common_vendor.p({
      editable: true,
      reason: $data.order.rejectReason
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ec032890"]]);
wx.createPage(MiniProgramPage);
