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
const common_vendor = require("../../common/vendor.js");
const apis_jxBidEvent = require("../../apis/jxBidEvent.js");
const apis_common = require("../../apis/common.js");
const core_themeMixins = require("../../core/themeMixins.js");
const core_shareMixins = require("../../core/shareMixins.js");
const navBar = () => "../../components/navBar.js";
const paForm = () => "../../components/paForm/paForm.js";
const ApplicantForm = () => "./components/ApplicantForm.js";
const bottomButton = () => "../../components/bottomButton.js";
const ApplyBidEventDialog = () => "./components/ApplyBidEventDialog.js";
const _sfc_main = {
  mixins: [core_themeMixins.themeMixins, core_shareMixins.shareMixins],
  components: {
    navBar,
    paForm,
    ApplicantForm,
    bottomButton,
    ApplyBidEventDialog
  },
  data() {
    return {
      navColor: "transparent",
      navTitle: "",
      loading: false,
      isDetail: false,
      event_plan_id: "",
      event_plan_apply_id: "",
      formValue: {
        name: "",
        address: "",
        sport_tag: null,
        sport_tag_str: "",
        year: "",
        num: "",
        start_time: "",
        end_time: "",
        des: ""
      },
      formOptions: [
        {
          label: "赛事名称",
          prop: "name",
          placeholder: "请输入赛事名称",
          required: true,
          type: "input"
        },
        {
          label: "赛事地址",
          prop: "address",
          placeholder: "请输入赛事地址",
          type: "input"
        },
        {
          label: "选择项目",
          prop: "sport_tag",
          strProp: "sport_tag_str",
          placeholder: "请选择项目",
          required: true,
          type: "picker",
          options: []
        },
        {
          label: "举办年份",
          prop: "year",
          placeholder: "请选择举办年份",
          required: true,
          type: "year",
          minYear: this.now
        },
        {
          label: "预计参赛人数",
          prop: "num",
          placeholder: "请输入参赛人数",
          required: true,
          type: "input"
        },
        {
          label: "预计举办开始时间",
          prop: "start_time",
          placeholder: "请选择举办开始时间",
          required: true,
          type: "date",
          minDate: (/* @__PURE__ */ new Date()).getTime()
        },
        {
          label: "预计举办结束时间",
          prop: "end_time",
          placeholder: "请选择举办结束时间",
          required: true,
          type: "date",
          minDate: (/* @__PURE__ */ new Date()).getTime()
        },
        {
          label: "赛事说明",
          prop: "des",
          placeholder: "请输入赛事说明",
          required: true,
          type: "textarea"
        },
        {
          label: "备注",
          prop: "remark",
          placeholder: "请输入备注",
          type: "textarea"
        }
      ],
      formRules: {
        name: {
          type: "string",
          required: true,
          message: "请填写赛事名称",
          trigger: ["blur", "change"]
        },
        sport_tag: {
          type: "string",
          required: true,
          message: "请选择项目",
          trigger: ["blur", "change"]
        },
        year: {
          type: "string",
          required: true,
          message: "请选择举办年份",
          trigger: ["blur", "change"]
        },
        num: {
          type: "string",
          required: true,
          message: "请输入参赛人数",
          trigger: ["blur", "change"]
        },
        start_time: {
          type: "string",
          required: true,
          message: "请选择开始时间",
          trigger: ["blur", "change"]
        },
        end_time: {
          type: "string",
          required: true,
          message: "预计举办结束时间",
          trigger: ["blur", "change"]
        },
        des: {
          type: "string",
          required: true,
          message: "请输入赛事说明",
          trigger: ["blur", "change"]
        }
      },
      applyInfo: {}
    };
  },
  onLoad(options) {
    return __async(this, null, function* () {
      this.getSportTag();
      if (options.event_plan_id && options.event_plan_apply_id) {
        this.event_plan_id = options.event_plan_id;
        this.event_plan_apply_id = options.event_plan_apply_id;
        yield this.getDetail();
        yield this.getApplyDetail();
        this.isDetail = true;
      }
      setTimeout(() => {
        this.$refs.applyFormDialog && this.$refs.applyFormDialog.open();
      }, 500);
    });
  },
  methods: {
    // 获取运动项目
    getSportTag() {
      return __async(this, null, function* () {
        let res2 = yield apis_common.getBaseTag({});
        let list = [
          {
            label: "全部项目",
            value: ""
          }
        ];
        res2.data.map((e) => {
          list.push({
            label: e.option_name,
            value: e.option_value
          });
        });
        this.formOptions[2].options = [list];
      });
    },
    getDetail() {
      return __async(this, null, function* () {
        const res2 = yield apis_jxBidEvent.getWxEventPlanInfo({
          event_plan_id: this.event_plan_id
        });
        if (res2.code == 200) {
          Object.keys(this.formValue).forEach((key) => {
            if (res2.data.hasOwnProperty(key) && res2.data[key] !== void 0) {
              this.formValue[key] = res2.data[key];
            }
          });
        } else {
          this.$toast(res2.message, { type: "warning" });
        }
      });
    },
    getApplyDetail() {
      return __async(this, null, function* () {
        const res2 = yield apis_jxBidEvent.getWxEventApplyInfo({
          event_plan_apply_id: this.event_plan_apply_id
        });
        if (res2.code == 200) {
          this.applyInfo = res2.data;
        } else {
          this.$toast(res2.message, { type: "warning" });
        }
      });
    },
    handleSubmit() {
      return __async(this, null, function* () {
        let eventInfoRef = this.$refs["eventInfoRef"];
        let applicantFormRef = this.$refs["applicantFormRef"];
        let valid = yield eventInfoRef.validate();
        let valid2 = yield applicantFormRef.validate();
        if (!valid && !valid2) {
          return;
        }
        let params = __spreadValues({}, eventInfoRef.getData());
        this.loading = true;
        return apis_jxBidEvent.addWxEventPlan(params).then((planRes) => {
          if (planRes.code === 200) {
            let params2 = __spreadProps(__spreadValues({}, applicantFormRef.getData()), {
              event_plan_id: planRes.data.event_plan_id
            });
            return apis_jxBidEvent.addApplyWxEventPlan(params2);
          }
        }).then((applyRes) => {
          if (applyRes.code === 200) {
            this.loading = false;
            setTimeout(() => {
              common_vendor.index.navigateTo({
                url: `/pages/applyEventResult/applyEventResult?event_plan_id=${this.event_plan_id}&event_plan_apply_id=${this.event_plan_apply_id}}`
              });
            }, 300);
          }
        }).catch((e) => {
          this.$showToastNone(res.message);
          console.log(e);
          this.loading = false;
        });
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_paForm2 = common_vendor.resolveComponent("paForm");
  const _component_ApplicantForm = common_vendor.resolveComponent("ApplicantForm");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  const _component_ApplyBidEventDialog = common_vendor.resolveComponent("ApplyBidEventDialog");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_paForm2 + _component_ApplicantForm + _component_bottomButton + _easycom_uv_safe_bottom2 + _component_ApplyBidEventDialog + _component_layout_default_uni)();
}
const _easycom_paForm = () => "../../components/paForm/paForm.js";
const _easycom_uv_safe_bottom = () => "../../node-modules/@climblee/uv-ui/components/uv-safe-bottom/uv-safe-bottom.js";
if (!Math) {
  (_easycom_paForm + _easycom_uv_safe_bottom)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: $data.navColor,
      title: $data.navTitle,
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: _ctx.getThemeIcon("bid_bg"),
    c: common_vendor.sr("eventInfoRef", "9741b3cb-2,9741b3cb-0"),
    d: common_vendor.p({
      formItemLabelWidth: 110,
      value: $data.formValue,
      optionList: $data.formOptions,
      rules: $data.formRules,
      baseModel: $data.formValue
    }),
    e: common_vendor.sr("applicantFormRef", "9741b3cb-3,9741b3cb-0"),
    f: common_vendor.p({
      info: $data.applyInfo
    }),
    g: !$data.isDetail
  }, !$data.isDetail ? {
    h: common_vendor.o($options.handleSubmit),
    i: common_vendor.p({
      loading: $data.loading,
      loadingText: "提交中"
    })
  } : {}, {
    j: common_vendor.sr("applyFormDialog", "9741b3cb-6,9741b3cb-0")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9741b3cb"]]);
wx.createPage(MiniProgramPage);
