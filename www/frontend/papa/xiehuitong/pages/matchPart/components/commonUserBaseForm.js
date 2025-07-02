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
require("../../../utils/stroageUtils/storageUtil.js");
require("../../../utils/thirdPartUtils/md5.js");
const utils_util = require("../../../utils/util.js");
const utils_timeUtil = require("../../../utils/timeUtil.js");
const paForm = () => "../../../components/paForm/paForm.js";
const _sfc_main = {
  components: {
    paForm
  },
  props: {
    value: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  watch: {
    value: {
      handler(val, oldval) {
        if (val && val != oldval) {
          let formCopy = JSON.parse(JSON.stringify(this.formValue));
          for (let key in formCopy) {
            val[key] && (formCopy[key] = val[key]);
          }
          this.formValue = formCopy;
        }
      },
      deep: true
    }
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
        avatar: {
          type: "string",
          required: false,
          message: "请上传头像",
          trigger: ["blur", "change"]
        },
        id_type: {
          type: "string",
          required: true,
          message: "请选择证件类型",
          trigger: ["blur", "change"]
        },
        id_number: {
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
        birthday: {
          type: "string",
          required: true,
          message: "请选择出生日期",
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
        ]
      },
      formValue: {
        avatar: "",
        name: "",
        phone: "",
        sex: "",
        id_number: "",
        id_type: "",
        id_type_str: "",
        id_number: "",
        birthday: "",
        remark: ""
      },
      formOptions: [
        {
          label: "照片",
          prop: "avatar",
          placeholder: "请选择照片",
          required: false,
          type: "uploadImage"
        },
        {
          label: "姓名",
          prop: "name",
          placeholder: "请输入姓名",
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
          label: "证件类型",
          prop: "id_type",
          strProp: "id_type_str",
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
          label: "证件号码",
          prop: "id_number",
          placeholder: "请输入证件号码",
          required: true,
          type: "input",
          confirm: (value) => {
            try {
              let birthDate = utils_util.getBirthDateObjectFromId(value);
              if (birthDate) {
                this.formValue.birthday = utils_timeUtil.formatTimeBase(birthDate, "{y}-{m}-{d}");
              }
            } catch (e) {
              console.error("confirm", e);
            }
          }
        },
        {
          label: "出生日期",
          prop: "birthday",
          placeholder: "请选择出生日期",
          required: true,
          type: "date"
        },
        {
          label: "备注",
          prop: "remark",
          placeholder: "请输入备注",
          required: false,
          type: "input"
        }
      ]
    };
  },
  created() {
  },
  methods: {
    validate() {
      return __async(this, null, function* () {
        let res = yield this.$refs["paForm"].validate();
        return res;
      });
    },
    getData() {
      let res = this.$refs["paForm"].getData();
      return res;
    }
  }
};
if (!Array) {
  const _easycom_paForm2 = common_vendor.resolveComponent("paForm");
  _easycom_paForm2();
}
const _easycom_paForm = () => "../../../components/paForm/paForm.js";
if (!Math) {
  _easycom_paForm();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("paForm", "0d949882-0"),
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
