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
const common_vendor = require("../../common/vendor.js");
const apis_jxBidEvent = require("../../apis/jxBidEvent.js");
const utils_reg = require("../../utils/reg.js");
const paForm = () => "../../components/paForm/paForm.js";
const bottomButton = () => "../../components/bottomButton.js";
const _sfc_main = {
  components: {
    paForm,
    bottomButton
  },
  data() {
    return {
      navColor: "transparent",
      navTitle: "",
      event_plan_id: "",
      loading: false,
      formRules: {
        type: {
          required: true,
          message: "请选择申办人类型",
          trigger: ["blur", "change"]
        },
        name: [
          {
            type: "string",
            required: true,
            message: "请填写申办人姓名",
            trigger: ["blur", "change"]
          },
          {
            min: 2,
            max: 8,
            message: "长度在2-8个字符之间"
          }
        ],
        credentials_type: {
          required: true,
          message: "请选择证件类型",
          trigger: ["blur", "change"]
        },
        credentials_number: {
          pattern: utils_reg.reg_cp,
          message: "身份证号格式不正确",
          trigger: ["blur", "change"]
        },
        contacts_name: {
          type: "string",
          required: true,
          message: "请输入联系人姓名",
          trigger: ["blur", "change"]
        },
        contacts_phone: [
          {
            type: "string",
            required: true,
            message: "请输入联系方式",
            trigger: ["blur", "change"]
          },
          {
            pattern: /(^((\+86)|(86))?(1[2-9])\d{9}$)|(^(0\d{2,3})-?(\d{7,8})$)/,
            transform(value) {
              return String(value);
            },
            message: "请输入正确的手机号"
          }
        ]
      },
      formValue: {
        type: "",
        name: "",
        credentials_type: "",
        credentials_type_str: "",
        credentials_number: "",
        contacts_name: "",
        contacts_phone: "",
        des: ""
      },
      formOptions: [
        {
          label: "申办人类型",
          prop: "type",
          strProp: "type_str",
          placeholder: "请选择",
          required: true,
          type: "picker",
          options: [
            [
              {
                value: 1,
                label: "个人 "
              },
              {
                value: 2,
                label: "企业"
              },
              {
                value: 3,
                label: "事业单位"
              }
            ]
          ]
        },
        {
          label: "申办人姓名",
          prop: "name",
          placeholder: "请输入申办人姓名",
          required: true,
          type: "input"
        },
        {
          label: "证件类型",
          prop: "credentials_type",
          strProp: "credentials_type_str",
          placeholder: "请选择",
          required: true,
          type: "picker",
          options: [
            [
              {
                value: 1,
                label: "身份证"
              },
              {
                value: 2,
                label: "护照"
              },
              {
                value: 3,
                label: "港澳通行证"
              },
              {
                value: 4,
                label: "军官证"
              },
              {
                value: 5,
                label: "学生证"
              }
            ]
          ]
        },
        {
          label: "证件号码",
          prop: "credentials_number",
          placeholder: "请输入证件号码",
          required: true,
          type: "input"
        },
        {
          label: "联系人姓名",
          prop: "contacts_name",
          placeholder: "请输入联系人姓名",
          required: true,
          type: "input"
        },
        {
          label: "联系电话",
          prop: "contacts_phone",
          placeholder: "请输入联系电话",
          required: true,
          type: "input"
        },
        {
          label: "备注",
          prop: "des",
          placeholder: "请输入备注",
          type: "textarea"
        }
      ]
    };
  },
  onLoad(options) {
    return __async(this, null, function* () {
      if (options.event_plan_id) {
        this.event_plan_id = options.event_plan_id;
      }
    });
  },
  methods: {
    handleSubmit() {
      return __async(this, null, function* () {
        let eventFormRef = this.$refs["eventFormRef"];
        let valid = yield eventFormRef.validate();
        if (!valid) {
          return;
        }
        let params = __spreadValues({
          event_plan_id: this.event_plan_id
        }, eventFormRef.getData());
        let res = yield apis_jxBidEvent.addApplyWxEventPlan(params);
        if (res.code != 200) {
          this.$showToastNone(res.message);
          return;
        } else {
          setTimeout(() => {
            common_vendor.index.redirectTo({
              url: `/pages/applyEventResult/applyEventResult?event_plan_id=` + this.event_plan_id
            });
          }, 300);
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_paForm2 = common_vendor.resolveComponent("paForm");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_paForm2 + _component_bottomButton + _component_layout_default_uni)();
}
const _easycom_paForm = () => "../../components/paForm/paForm.js";
if (!Math) {
  _easycom_paForm();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("eventFormRef", "df47ebb3-1,df47ebb3-0"),
    b: common_vendor.p({
      formItemLabelWidth: 110,
      value: $data.formValue,
      optionList: $data.formOptions,
      rules: $data.formRules
    }),
    c: common_vendor.o($options.handleSubmit),
    d: common_vendor.p({
      loading: $data.loading,
      loadingText: "提交中"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-df47ebb3"]]);
wx.createPage(MiniProgramPage);
