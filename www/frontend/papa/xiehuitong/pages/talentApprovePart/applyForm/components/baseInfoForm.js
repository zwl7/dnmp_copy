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
const apis_common = require("../../../../apis/common.js");
const utils_cloneDeep = require("../../../../utils/cloneDeep.js");
const common_vendor = require("../../../../common/vendor.js");
const paForm = () => "../../../../components/paForm/paForm.js";
const _sfc_main = {
  components: {
    paForm
  },
  data() {
    return {
      formRules: {
        name: [
          {
            type: "string",
            required: true,
            message: "请填写姓名",
            trigger: ["blur", "change"]
          },
          {
            min: 2,
            max: 8,
            message: "长度在2-8个字符之间"
          }
        ],
        identity_type: {
          type: "string",
          required: true,
          message: "请选择证件类型",
          trigger: ["blur", "change"]
        },
        identity: {
          type: "string",
          required: true,
          message: "请输入证件信息",
          trigger: ["blur", "change"]
        },
        sex: {
          type: "string",
          required: true,
          message: "请选择",
          trigger: ["blur", "change"]
        },
        phone: [
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
        ],
        sport_tag: {
          type: "array",
          required: true,
          message: "请选择擅长项目",
          trigger: ["blur", "change"]
        },
        belong_place_id: {
          type: "string",
          required: true,
          message: "请选择注册区域",
          trigger: ["blur", "change"]
        },
        cover_image: {
          type: "array",
          required: true,
          message: "请上传个人照片",
          trigger: ["blur", "change"]
        }
      },
      formValue: {
        name: "",
        identity_type: "",
        identity_type_str: "",
        identity: "",
        sex: "",
        phone: "",
        cover_image: [],
        sport_tag: null,
        sport_tag_str: null,
        level: null,
        level_str: null,
        belong_place_id: null,
        belong_place_id_str: "",
        remark: ""
      },
      formOptions: [
        {
          label: "姓名",
          prop: "name",
          placeholder: "请输入姓名",
          required: true,
          type: "input"
        },
        {
          label: "证件类型",
          prop: "identity_type",
          strProp: "identity_type_str",
          placeholder: "请选择证件类型",
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
              }
            ]
          ]
        },
        {
          label: "证件信息",
          prop: "identity",
          placeholder: "请输入证件信息",
          required: true,
          type: "input"
        },
        {
          label: "性别",
          prop: "sex",
          placeholder: "请选择",
          required: true,
          type: "radio",
          options: [
            { label: "男", value: "1" },
            { label: "女", value: "2" }
          ]
        },
        {
          label: "联系方式",
          prop: "phone",
          placeholder: "请输入联系方式",
          required: true,
          type: "input"
        },
        {
          label: "注册所在区域",
          prop: "belong_place_id",
          strProp: "belong_place_id_str",
          placeholder: "请选择",
          required: true,
          type: "city",
          options: []
        },
        {
          label: "擅长项目",
          prop: "sport_tag",
          strProp: "sport_tag_str",
          placeholder: "请选择擅长项目",
          required: true,
          type: "multiple",
          options: [],
          confirm: this.sportTagConfirm
        },
        {
          label: "个人照片",
          prop: "cover_image",
          placeholder: "请上传个人照片",
          required: true,
          // labelPosition: "top",
          type: "image"
        },
        {
          label: "简介",
          prop: "remark",
          placeholder: "请输入简介",
          labelPosition: "top",
          borderBottom: false,
          type: "textarea"
        }
      ],
      sportLevelKey: "sport_tag_level"
    };
  },
  created() {
    this.getSportTag();
  },
  methods: {
    getSportTag() {
      return __async(this, null, function* () {
        let res = yield apis_common.getBaseTag({});
        if (res.code == 200) {
          let list = [];
          res.data.map((e) => {
            list.push({ label: e.option_name, value: e.option_value });
          });
          this.formOptions[6].options = list;
        }
      });
    },
    // 擅长项目选择
    sportTagConfirm(data) {
      try {
        let { selected } = data;
        console.log("------selected------", selected);
        let addValidateList = {};
        let addOptions = [];
        let addForm = {};
        let formOptions = utils_cloneDeep.deepClone(this.formOptions);
        let formRules = utils_cloneDeep.deepClone(this.formRules);
        let formValue = utils_cloneDeep.deepClone(this.formValue);
        Object.keys(formRules).forEach((key) => {
          if (key.includes(this.sportLevelKey)) {
            delete formRules[key];
            delete formValue[key];
            let index = formOptions.findIndex((item) => item.prop === key);
            formOptions.splice(index, 1);
          }
        });
        selected.map((item) => {
          let key = `${this.sportLevelKey}${item.value}`;
          addValidateList[key] = this.getSportTagLevelValidate(item.label);
          addOptions.push(this.getSportTagLeveOptions(item.label, key));
          addForm[key] = null;
          addForm[`${key}_str`] = null;
        });
        formOptions.splice(7, 0, ...addOptions);
        formRules = __spreadValues(__spreadValues({}, formRules), addValidateList);
        formValue = __spreadValues(__spreadValues({}, formValue), addForm);
        this.formOptions = formOptions;
        this.formRules = formRules;
        this.formValue = formValue;
        console.log("------formOptions------", formOptions);
        console.log("------formRules------", formRules);
        console.log("------formValue------", formValue);
      } catch (error) {
        console.error("------sportTagConfirm------", error);
      }
    },
    // 获取等级校验
    getSportTagLevelValidate(label) {
      return {
        type: "string",
        required: true,
        message: `请选择${label}等级`,
        trigger: ["blur", "change"]
      };
    },
    // 获取擅长项目校验
    getSportTagLeveOptions(label, key) {
      return {
        label: `${label}等级`,
        prop: key,
        strProp: `${key}_str`,
        placeholder: "请选择等级信息",
        required: true,
        type: "picker",
        options: [
          [
            {
              value: -1,
              label: "国际级"
            },
            {
              value: 0,
              label: "国家级"
            },
            {
              value: 1,
              label: "一级"
            },
            {
              value: 2,
              label: "二级"
            },
            {
              value: 3,
              label: "三级"
            }
          ]
        ]
      };
    },
    // 等级选择
    sportLevelConfirm(e) {
      let { selected } = e;
      console.log("------selected------", selected);
    },
    validate() {
      return __async(this, null, function* () {
        let res = yield this.$refs["paForm"].validate();
        return res;
      });
    },
    getData() {
      let res = this.$refs["paForm"].getData();
      let level_info_json = [];
      Object.keys(res).forEach((key) => {
        if (key.startsWith("sport_tag_level") && !key.endsWith("_str")) {
          const id = key.replace("sport_tag_level", "");
          level_info_json.push({
            sport_tag_id: id,
            level: res[key]
          });
        }
      });
      let miniLevel = level_info_json.length > 0 ? level_info_json[0].level : null;
      level_info_json.forEach((item) => {
        if (item.level < miniLevel) {
          miniLevel = item.level;
        }
      });
      let sport_tag = res.sport_tag ? res.sport_tag : [];
      let cover_image = res.cover_image ? res.cover_image : [];
      let obj = {
        name: res.name,
        belong_place_id: res.belong_place_id,
        identity: res.identity,
        identity_type: res.identity_type,
        level: miniLevel,
        phone: res.phone,
        remark: res.remark,
        sex: res.sex,
        sport_tag: sport_tag.join(","),
        cover_image: cover_image.join(","),
        level_info_json: JSON.stringify(level_info_json)
      };
      return obj;
    }
  }
};
if (!Array) {
  const _easycom_paForm2 = common_vendor.resolveComponent("paForm");
  _easycom_paForm2();
}
const _easycom_paForm = () => "../../../../components/paForm/paForm.js";
if (!Math) {
  _easycom_paForm();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("paForm", "464f22d4-0"),
    b: common_vendor.p({
      formItemLabelWidth: 90,
      value: $data.formValue,
      optionList: $data.formOptions,
      rules: $data.formRules
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
