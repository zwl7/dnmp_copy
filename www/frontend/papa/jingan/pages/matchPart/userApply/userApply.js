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
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const apis_match = require("../../../apis/match.js");
const apis_insureModule = require("../../../apis/insureModule.js");
const components_paForm_formatData = require("../../../components/paForm/formatData.js");
const utils_timeUtil = require("../../../utils/timeUtil.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const navBar = () => "../../../components/navBar/index.js";
const bottomButton = () => "../../../components/bottomButton.js";
const ceilLine = () => "../components/ceilLine.js";
const roundButton = () => "../components/roundButton.js";
const commonUserSelectDialog = () => "../components/commonUserSelectDialog.js";
const insuranceCardVue = () => "../../../components/insurance/insuranceCard.js";
const paForm = () => "../../../components/paForm/paForm.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins, mixins_themeMixins.themeMixins],
  components: {
    navBar,
    ceilLine,
    bottomButton,
    roundButton,
    paForm,
    commonUserSelectDialog,
    insuranceCardVue
  },
  data() {
    return {
      navColor: "transparent",
      headerTitleCustomStyle: {},
      apply_quantity: "",
      project_id: "",
      group_id: "",
      small_project_id: "",
      contest_id: "",
      apply_type: "",
      //1 个人赛  2 团体赛
      free: "",
      selectUserInfo: {},
      formRules: {},
      formValue: {},
      formOptions: [],
      payment_way: "",
      submitButtonLoading: false,
      apply_id: "",
      //报名id
      manage_id: "",
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
      product_insure_appid: ""
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
      return this.formOptions.length !== 0;
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
  onUnload() {
    if (this.insutance_timer) {
      clearTimeout(this.insutance_timer);
    }
  },
  methods: {
    // 购买保险
    buyInsurance() {
      if (!this.insurance_current_member) {
        this.$showToastNone("请先选择报名人员");
        return;
      }
      if (this.is_buy_insurance) {
        this.$showToastNone("当前用户已购买保险");
        return;
      }
      const miniProgramInsureParams = {
        business_type: 5,
        resource_id: this.contest_id,
        small_resource_id: `1_${this.insurance_current_member}`,
        insure_voucher: `${this.project_id}_${this.group_id}_${this.small_project_id}`,
        insure_module_product_id: this.insurance_product_id,
        note: this.insurance_current_member
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
        if (this.is_buy_insurance) {
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
          small_resource_id: `1_${this.insurance_current_member}`,
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
      this.$refs["commonUserSelectDialogRef"].open();
    },
    getCommonUsrData(data) {
      console.log(data);
      data.sex = Number(data.sex);
      data.id_type = Number(data.id_type);
      this.selectUserInfo = data;
      this.insurance_current_member = data.member_apply_personnel_id;
      this.is_buy_insurance = false;
      this.insurance_buy_num = 0;
      this.getInsuranceStatus();
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
        if (res.data && res.data.define) {
          let formatBackDataClass = new components_paForm_formatData.FormatBackDataClass(res.data.define);
          this.formValue = formatBackDataClass.getDefaultData();
          this.formOptions = formatBackDataClass.getDataList();
          this.formRules = formatBackDataClass.getRules();
        }
      });
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
    getUserData() {
      let paFormRef = this.$refs["paForm"];
      if (!paFormRef) {
        return __spreadValues({}, this.selectUserInfo);
      }
      let customData = this.$refs["paForm"].getCustomData();
      let applyData = [];
      for (let key in customData) {
        let value = Array.isArray(customData[key]) ? customData[key].join(",") : customData[key];
        let obj2 = {
          field_id: Number(key),
          value: String(value)
        };
        applyData.push(obj2);
      }
      let obj = Object.assign({ info: applyData }, this.selectUserInfo);
      return obj;
    },
    // 判断是否购买保险
    validateInsurance() {
      if (this.insurance_switch != 1) {
        return true;
      }
      if (this.insurance_requirement == 2 && !this.is_buy_insurance) {
        common_vendor.index.showModal({
          title: "温馨提示",
          content: "该赛事需要购买保障，请先完成投保后确认，如已支付等待更新后提交",
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
        let paFormRef = this.$refs["paForm"];
        if (Object.keys(this.selectUserInfo).length == 0) {
          this.$showToastNone("请先选择报名人");
          return false;
        }
        if (paFormRef) {
          let valid = yield paFormRef.validate();
          if (!valid) {
            return false;
          }
        }
        console.log(this.payment_way, this.free);
        if (!this.payment_way && this.free) {
          this.$showToastNone("请联系管理员配置支付方式", 3e3);
          return false;
        }
        return true;
      });
    },
    handleUserApply() {
      return __async(this, null, function* () {
        let data = this.getUserData();
        console.log([data]);
        const form = {
          contest_id: this.contest_id,
          project_id: this.small_project_id,
          apply_from: 2,
          name: data.name,
          type: this.apply_type,
          apply_info: JSON.stringify([data]),
          apply_person_id: this.insurance_current_member,
          team_info: ""
        };
        try {
          let res = yield apis_match.addEventsApply(form);
          let flag = this.judgeHavePayOrder(res);
          if (flag) {
            return false;
          }
          if (res.code !== 200) {
            this.$showToastNone(res.message);
            common_vendor.index.showToast({
              icon: "none",
              title: res.message,
              duration: 2e3
            });
            return false;
          }
          this.apply_id = res.data.apply_info.apply_id;
          return true;
        } catch (e) {
          console.log("e", e);
        }
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
              this.$showToastNone(orderRes.message);
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
            this.$showToastNone(res.message);
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
        this.submitButtonLoading = false;
        common_vendor.index.hideLoading();
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_ceilLine = common_vendor.resolveComponent("ceilLine");
  const _easycom_paForm2 = common_vendor.resolveComponent("paForm");
  const _component_insuranceCardVue = common_vendor.resolveComponent("insuranceCardVue");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _component_commonUserSelectDialog = common_vendor.resolveComponent("commonUserSelectDialog");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_ceilLine + _easycom_paForm2 + _component_insuranceCardVue + _component_bottomButton + _component_commonUserSelectDialog + _component_layout_default_uni)();
}
const _easycom_paForm = () => "../../../components/paForm/paForm.js";
if (!Math) {
  _easycom_paForm();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: $data.navColor,
      title: "赛事详情",
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
      title: "选择报名人",
      value: $data.selectUserInfo.name
    }),
    e: $options.showMoreApplyForm
  }, $options.showMoreApplyForm ? {} : {}, {
    f: $options.showMoreApplyForm
  }, $options.showMoreApplyForm ? {
    g: common_vendor.sr("paForm", "8f84faad-3,8f84faad-0"),
    h: common_vendor.p({
      value: $data.formValue,
      optionList: $data.formOptions,
      rules: $data.formRules
    })
  } : {}, {
    i: $options.showInsuranceVue
  }, $options.showInsuranceVue ? {
    j: common_vendor.o($options.buyInsurance),
    k: common_vendor.p({
      insurance_product_id: $data.insurance_product_id,
      insurance_requirement: $data.insurance_requirement,
      insurance_switch: $data.insurance_switch,
      peopleNum: $data.insurance_buy_num,
      needBuy: $data.insurance_need_buy
    })
  } : {}, {
    l: common_vendor.o($options.handleConfirmSubmit),
    m: common_vendor.p({
      disabled: false,
      loading: $data.submitButtonLoading
    }),
    n: common_vendor.sr("commonUserSelectDialogRef", "8f84faad-6,8f84faad-0"),
    o: common_vendor.o($options.getCommonUsrData),
    p: common_vendor.p({
      showOperaiton: true
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8f84faad"]]);
wx.createPage(MiniProgramPage);
