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
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const apis_match = require("../../../apis/match.js");
const apis_insureModule = require("../../../apis/insureModule.js");
const utils_timeUtil = require("../../../utils/timeUtil.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const navBar = () => "../../../components/navBar/index.js";
const bottomButton = () => "../../../components/bottomButton.js";
const ceilLine = () => "../components/ceilLine.js";
const roundButton = () => "../components/roundButton.js";
const insuranceCardVue = () => "../../../components/insurance/insuranceCard.js";
const commonTeamSelectDialog = () => "../components/commonTeamSelectDialog.js";
const ExtendForm = () => "./components/ExtendForm.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins, mixins_themeMixins.themeMixins],
  components: {
    navBar,
    ceilLine,
    bottomButton,
    roundButton,
    commonTeamSelectDialog,
    insuranceCardVue,
    ExtendForm
  },
  data() {
    return {
      navColor: "transparent",
      headerTitleCustomStyle: {},
      apply_quantity: "",
      group_id: "",
      small_project_id: "",
      contest_id: "",
      apply_type: "",
      //1 个人赛  2 团体赛
      free: "",
      selectUserInfo: {},
      applyInfoData: {},
      //自定义表单信息
      needCoachAndLeader: {
        needCoach: false,
        needLeader: false
      },
      //是否需要教练、领队等信息
      payment_way: "",
      submitButtonLoading: false,
      apply_id: "",
      //报名id
      manage_id: "",
      teamInfo: {},
      //团队信息
      userApplyInfo: {},
      //成员信息
      insurance_product_id: "",
      //投保保险产品id
      insurance_requirement: "",
      //投保要求  1=自愿投保,2=强制投保
      insurance_switch: "",
      //活动保险 0关闭 ，1开启
      insurance_current_member: "",
      //保险人员member_id
      insurance_buy_num: 0,
      //保险购买人员
      insurance_need_buy: 1,
      //保险需要购买人数
      date_start: "",
      date_end: "",
      is_buy_insurance: false,
      //是否购买保险
      insutance_timer: null,
      product_insure_url: "",
      product_insure_appid: "",
      team_personal_ids: ""
    };
  },
  computed: {
    headerCustomStyle() {
      return {
        background: `${this.themeConfigGetter["--hubei-card-bg2"]}`,
        borderRadius: "16rpx"
      };
    },
    orderPayHandleInfo() {
      return this.manage_id ? JSON.stringify({
        manage_id: this.manage_id,
        unit_type: 3,
        platform_id: 2
      }) : "";
    },
    showMoreApplyForm() {
      return false;
    },
    //显示保险组件
    showInsuranceVue() {
      return this.insurance_switch == "1";
    }
  },
  onLoad(options) {
    console.log(options);
    this.apply_quantity = options.apply_quantity;
    this.project_id = options.project_id;
    this.contest_id = options.contest_id;
    this.group_id = options.group_id;
    this.small_project_id = options.small_project_id;
    this.apply_type = options.apply_type;
    this.free = options.free == "true" ? true : false;
    this.manage_id = options.manage_id;
    this.insurance_product_id = options.insurance_product_id;
    this.insurance_requirement = options.insurance_requirement;
    this.insurance_switch = options.insurance_switch;
    this.date_start = options.date_start;
    this.date_end = options.date_end;
    console.log(utils_timeUtil.calculateInsurance(options.date_start, options.date_end));
    this.getCustomApplyInfo();
    this.getSystemPayWay();
    if (options.insurance_product_id) {
      this.getWxInsureDetail(options.insurance_product_id);
    }
  },
  methods: {
    // 购买保险
    buyInsurance() {
      if (!this.insurance_current_member) {
        this.$showToastNone("请先选择报名团队");
        return;
      }
      if (this.insurance_buy_num === this.insurance_need_buy) {
        this.$showToastNone("团队成员已购买保险");
        return;
      }
      const miniProgramInsureParams = {
        business_type: 5,
        resource_id: this.contest_id,
        small_resource_id: `2_${this.insurance_current_member}`,
        insure_voucher: `${this.project_id}_${this.group_id}_${this.small_project_id}`,
        insure_module_product_id: this.insurance_product_id,
        note: this.team_personal_ids
      };
      let app = getApp();
      app.globalData.miniProgramInsureParams = miniProgramInsureParams;
      let _this = this;
      let { insuranceStartDate, insuranceDays } = utils_timeUtil.calculateInsurance(
        this.date_start,
        this.date_end
      );
      const h5Url = `${this.product_insure_url}&startDate=${insuranceStartDate}&guaranteePeriod=${insuranceDays}`;
      common_vendor.index.navigateToMiniProgram({
        appId: this.product_insure_appid,
        path: "/subPackages/webView/index?url=" + encodeURIComponent(h5Url),
        success() {
          _this.loopQueryInsure();
        }
      });
    },
    // 轮询查询是否已投保
    loopQueryInsure() {
      this.insutance_timer = setTimeout(() => {
        if (this.insurance_buy_num === this.insurance_need_buy) {
          this.insutance_timer && clearTimeout(this.insutance_timer);
        } else {
          this.getInsuranceStatus();
          this.loopQueryInsure();
        }
      }, 1e3);
    },
    // 判断是否已经购买保险
    getInsuranceStatus() {
      return __async(this, null, function* () {
        let params = {
          business_type: 5,
          resource_id: this.contest_id,
          small_resource_id: `2_${this.insurance_current_member}`,
          //个人报名=1_报名人id (member_apply_personnel_id)，团队报名=2_团队id_团队成员人数。
          insure_voucher: `${this.project_id}_${this.group_id}_${this.small_project_id}`,
          insure_module_product_id: this.insurance_product_id
        };
        let res = yield apis_insureModule.getBuyInsureStatus(params);
        if (res.code == 200) {
          if (res.data.isBuy) {
            this.insurance_buy_num = res.data.buyCount;
            this.is_buy_insurance = res.data.isBuy;
          }
        }
      });
    },
    //获取保险产品详情
    getWxInsureDetail(val) {
      return __async(this, null, function* () {
        let params = { insure_module_product_id: val };
        let res = yield apis_insureModule.getWxInsureModuleProduct(params);
        if (res.code != 200) {
          return;
        }
        this.product_insure_url = res.data.product_insure_url;
        this.product_insure_appid = res.data.product_insure_appid;
      });
    },
    handleSelectTeam() {
      this.$refs["commonTeamSelectDialogRef"].open();
    },
    getCommonUsrData(data) {
      return __async(this, null, function* () {
        console.log("data", data);
        this.validateCoachAndLeader(data);
        data.sex = Number(data.sex);
        data.id_type = Number(data.id_type);
        this.selectUserInfo = data;
        this.insurance_current_member = data.member_apply_team_id;
        this.is_buy_insurance = false;
        this.insurance_buy_num = 0;
        yield this.getTeamBaseInfo(data.member_apply_team_id);
        this.getInsuranceStatus();
      });
    },
    getTeamBaseInfo(id) {
      return __async(this, null, function* () {
        var _a;
        let res = yield apis_match.getMemberApplyTeam({ member_apply_team_id: id });
        if (res.code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        common_vendor.index.$emit("teamApplySelect", res.data);
        let leader = (_a = res.data.leader) != null ? _a : {};
        let userList = [...res.data.coachs, ...res.data.personnels];
        this.insurance_need_buy = res.data.personnels.length;
        let team_personal_ids = res.data.personnels.map((e) => e.member_apply_personnel_id).join("_");
        this.team_personal_ids = team_personal_ids;
        let teamInfo = {
          name: leader.name,
          phone: leader.phone,
          teamName: res.data.name
        };
        userList.map((e) => this.forMateUserInfo(e));
        if (userList.length == 0) {
          this.$showToastNone("该团队暂无团队成员");
          this.selectUserInfo = {};
          return;
        }
        this.teamInfo = teamInfo;
      });
    },
    forMateUserInfo(userInfo) {
      var _a;
      let id_type_map = {
        1: "身份证",
        2: "护照",
        3: "港澳通行证"
      };
      userInfo.sex = Number(userInfo.sex);
      userInfo.id_type = Number(userInfo.id_type);
      userInfo.id_type_str = (_a = id_type_map[userInfo.id_type]) != null ? _a : "";
      return userInfo;
    },
    // 获取自定义表单信息
    getCustomApplyInfo() {
      return __async(this, null, function* () {
        const params = {
          contest_id: this.contest_id,
          project_id: this.small_project_id
        };
        let res = yield apis_match.getApplyFromInfo(params);
        if (res.code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        this.applyInfoData = res.data;
        this.needCoachAndLeader = this.isNeedCoachAndLeader(res.data);
      });
    },
    // 判断团队是否需要教练、领队等信息
    isNeedCoachAndLeader(data) {
      let needCoach = false;
      let needLeader = false;
      try {
        needCoach = data.coach.base.length > 0 || data.coach.define.length > 0;
        needLeader = data.leader.base.length > 0 || data.leader.define.length > 0;
      } catch (error) {
      }
      return {
        needCoach,
        needLeader
      };
    },
    // 验证教练和领队信息
    validateCoachAndLeader(data) {
      let { coach_ids, leader_id } = data;
      if (!coach_ids && this.needCoachAndLeader.needCoach || !leader_id && this.needCoachAndLeader.needLeader) {
        this.$showToastNone("请先为团队添加教练和领队");
        return false;
      }
      if (!coach_ids && this.needCoachAndLeader.needCoach) {
        this.$showToastNone("请先为团队添加教练");
        return false;
      }
      if (!leader_id && this.needCoachAndLeader.needLeader) {
        this.$showToastNone("请先为团队添加领队");
        return false;
      }
      return true;
    },
    // 获取支付方式
    getSystemPayWay() {
      return __async(this, null, function* () {
        const res = yield apis_match.getPayWay({ is_show: 1 });
        if (res.code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        let data = res.data;
        const paymentWayList = data.filter((i) => i.payment_way_id != 20);
        if (paymentWayList.length) {
          this.payment_way = paymentWayList[0].payment_way_id;
        }
      });
    },
    // 判断是否购买保险
    validateInsurance() {
      if (this.insurance_switch != 1) {
        return true;
      }
      if (this.insurance_requirement == 2 && this.insurance_buy_num != this.insurance_need_buy) {
        common_vendor.index.showModal({
          title: "温馨提示",
          content: "该赛事需要购买保障，请确认团队所有成员完成投保后提交报名，如已支付等待更新后提交",
          confirmText: "我知道了",
          showCancel: false,
          success() {
          }
        });
        return false;
      }
      return true;
    },
    validateUserData() {
      return __async(this, null, function* () {
        let extendFormRef = this.$refs["extendFormRef"];
        if (Object.keys(this.selectUserInfo).length == 0) {
          this.$showToastNone("请先选择团队");
          return false;
        }
        let valid = yield extendFormRef.validateAllForm();
        if (!valid) {
          return false;
        }
        this.userApplyInfo = extendFormRef.getRefFormData();
        if (!this.payment_way && this.free) {
          this.$showToastNone("请联系管理员配置支付方式", 3e3);
          return false;
        }
        return true;
      });
    },
    //报名时根据code 判断是否有袋支付订单
    judgeHavePayOrder(res) {
      if (res.code === 4001009999) {
        common_vendor.index.showModal({
          title: "提示",
          content: "该用户当前有待支付订单，如需报名请前往支付",
          confirmText: "确认",
          cancelText: "取消",
          success(data) {
            if (data.confirm) {
              common_vendor.index.redirectTo({
                url: `/pages/orderCenter/orderCenter?parent_order_no=${res.data.parent_order_no}&business_id=${res.data.business_id}&stadium_id=${res.data.stadium_id}`
              });
            } else {
              common_vendor.index.hideLoading();
            }
          }
        });
        return true;
      }
      return false;
    },
    handleUserApply() {
      return __async(this, null, function* () {
        const form = {
          contest_id: this.contest_id,
          project_id: this.small_project_id,
          apply_from: 2,
          name: this.selectUserInfo.name,
          type: this.apply_type,
          apply_info: JSON.stringify(this.userApplyInfo),
          team_info: JSON.stringify(this.teamInfo),
          apply_person_id: this.insurance_current_member
        };
        console.log(form);
        let res = yield apis_match.addEventsApply(form);
        let flag = this.judgeHavePayOrder(res);
        if (flag) {
          return false;
        }
        if (res.code !== 200) {
          common_vendor.index.showToast({
            icon: "none",
            title: res.message,
            duration: 2e3
          });
          return false;
        }
        this.apply_id = res.data.apply_info.apply_id;
        return true;
      });
    },
    // 创建零元支付订单
    createZeroPayOrder() {
      return __async(this, null, function* () {
        const param = {
          sys_id: 16,
          sku_slice: this.apply_id + ":1",
          business_type: 1601,
          order_from: 2,
          handle_info: this.orderPayHandleInfo,
          sales_id: 0
        };
        try {
          const res = yield apis_match.createOrder(param);
          if (res.code !== 200) {
            this.submitButtonLoading = false;
            this.$nextTick(() => {
              this.$showToastNone(res.message, 3e3);
            });
            return;
          }
          let app = getApp();
          let extend_field = {
            type: "platform",
            trade_pay_type: "wxPay.mini",
            msg_type: "wx.unifiedOrder",
            platform_member_id: app.globalData.userInfo.account_id,
            platform_company_id: app.globalData.company_id
          };
          const orderForm = {
            price: 0,
            payment_way: this.payment_way,
            parent_order_no: res.data.parent_order_no,
            extend_field: JSON.stringify(extend_field)
          };
          let orderRes = yield apis_match.shopOrderPay(orderForm);
          if (orderRes.code !== 200) {
            this.$nextTick(() => {
              this.submitButtonLoading = false;
              this.$showToastNone(orderRes.message, 3e3);
            });
            return;
          }
          if (orderRes.data.transaction_status === "1") {
            common_vendor.index.showToast({
              icon: "success",
              title: "报名成功"
            });
            common_vendor.index.redirectTo({
              url: "/pages/matchPart/applyResult/applyResult"
            });
          }
        } finally {
          this.applyLoading = false;
        }
      });
    },
    // 创建需要支付订单
    createPayOrder() {
      return __async(this, null, function* () {
        var _a, _b;
        const param = {
          sys_id: 16,
          sku_slice: this.apply_id + ":1",
          business_type: 1601,
          order_from: 2,
          handle_info: this.orderPayHandleInfo,
          sales_id: 0
        };
        const res = yield apis_match.createOrder(param);
        if (res.code !== 200) {
          this.submitButtonLoading = false;
          this.$nextTick(() => {
            this.$showToastNone(res.message, 3e3);
          });
          return;
        }
        let data = ((_b = (_a = res.data) == null ? void 0 : _a.list) == null ? void 0 : _b.order) || {};
        let url = `/pages/orderCenter/orderCenter?parent_order_no=${data.parent_order_no}&business_id=${data.business_id}&stadium_id=${data.stadium_id}`;
        common_vendor.index.redirectTo({
          url
        });
      });
    },
    handleConfirmSubmit() {
      return __async(this, null, function* () {
        let validFlag = false;
        let addFlag = false;
        let validateInsurance = this.validateInsurance();
        if (!validateInsurance)
          return;
        validFlag = yield this.validateUserData();
        if (!validFlag)
          return;
        common_vendor.index.showLoading({
          title: "正在报名中"
        });
        this.submitButtonLoading = true;
        addFlag = yield this.handleUserApply();
        if (!addFlag) {
          this.submitButtonLoading = false;
          return;
        }
        if (this.free) {
          yield this.createZeroPayOrder();
        }
        if (!this.free) {
          yield this.createPayOrder();
        }
        common_vendor.index.hideLoading();
        this.submitButtonLoading = false;
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_ceilLine = common_vendor.resolveComponent("ceilLine");
  const _component_extend_form = common_vendor.resolveComponent("extend-form");
  const _component_insuranceCardVue = common_vendor.resolveComponent("insuranceCardVue");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _component_commonTeamSelectDialog = common_vendor.resolveComponent("commonTeamSelectDialog");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_ceilLine + _component_extend_form + _component_insuranceCardVue + _component_bottomButton + _component_commonTeamSelectDialog + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: $data.navColor,
      title: "赛事报名",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: _ctx.getThemeIcon("match_apply_bg"),
    c: common_vendor.o($options.handleSelectTeam),
    d: common_vendor.p({
      ["is-group"]: true,
      customStyle: $options.headerCustomStyle,
      titleStyle: $data.headerTitleCustomStyle,
      title: "选择团队",
      value: $data.selectUserInfo.name
    }),
    e: $options.showMoreApplyForm
  }, $options.showMoreApplyForm ? {} : {}, {
    f: common_vendor.sr("extendFormRef", "0af80659-3,0af80659-0"),
    g: common_vendor.p({
      applyInfoData: $data.applyInfoData
    }),
    h: $options.showInsuranceVue
  }, $options.showInsuranceVue ? {
    i: common_vendor.o($options.buyInsurance),
    j: common_vendor.p({
      insurance_product_id: $data.insurance_product_id,
      insurance_requirement: $data.insurance_requirement,
      insurance_switch: $data.insurance_switch,
      peopleNum: $data.insurance_buy_num,
      needBuy: $data.insurance_need_buy
    })
  } : {}, {
    k: common_vendor.o($options.handleConfirmSubmit),
    l: common_vendor.p({
      disabled: false,
      loading: $data.submitButtonLoading
    }),
    m: common_vendor.sr("commonTeamSelectDialogRef", "0af80659-6,0af80659-0"),
    n: common_vendor.o($options.getCommonUsrData)
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0af80659"]]);
wx.createPage(MiniProgramPage);
