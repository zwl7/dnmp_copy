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
const apis_common = require("../../../apis/common.js");
const common_vendor = require("../../../common/vendor.js");
const paForm = () => "../../../components/paForm/paForm.js";
const _sfc_main = {
  components: {
    paForm
  },
  props: {
    info: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      formRules: {
        type: {
          type: "string",
          required: true,
          message: "请选择申办人类型",
          trigger: ["blur", "change"]
        },
        apply_name: [
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
        contacts_name: {
          type: "string",
          required: true,
          message: "请输入联系人",
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
        ],
        county: {
          type: "string",
          required: true,
          message: "请选择所在地",
          trigger: ["blur", "change"]
        }
      },
      formValue: {
        type: "",
        type_str: "",
        name: "",
        contacts_name: "",
        contacts_phone: "",
        images: []
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
          label: "所在地",
          prop: "belong_place_id",
          strProp: "belong_place_id_str",
          placeholder: "请选择",
          required: true,
          type: "city",
          options: []
        },
        {
          label: "证件照片",
          prop: "images",
          placeholder: "请上传证件照片",
          customStyle: { alignItems: "flex-end" },
          type: "image"
        }
      ]
    };
  },
  created() {
    this.getCompanyArea();
  },
  mounted() {
    if (this.info) {
      Object.keys(this.formValue).forEach((key) => {
        if (this.info.hasOwnProperty(key) && this.info[key] !== void 0) {
          this.formValue[key] = this.info[key];
        }
      });
      this.info.images = this.info.images_url ? [this.info.images_url] : [];
    }
  },
  methods: {
    getCompanyArea() {
      return __async(this, null, function* () {
        let res = yield apis_common.getBaseTag({});
        if (res.code == 200) {
          let list = [];
          res.data.map((e) => {
            list.push({ label: e.option_name, value: e.option_value });
          });
          this.formOptions[5].options = list;
        }
      });
    },
    validate() {
      return __async(this, null, function* () {
        let res = yield this.$refs["paForm"].validate();
        return res;
      });
    },
    getData() {
      let res = this.$refs["paForm"].getData();
      let obj = {
        type: res.type,
        apply_name: res.name,
        name: res.name,
        contacts_name: res.contacts_name,
        contacts_phone: res.contacts_phone,
        province: res.belong_place_id.slice(0, 4),
        city: res.belong_place_id.slice(0, 6),
        county: res.belong_place_id,
        images: res.images.join(",")
      };
      return obj;
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
    a: common_vendor.sr("paForm", "c684c93a-0"),
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
