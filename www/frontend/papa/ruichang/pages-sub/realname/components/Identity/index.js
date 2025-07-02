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
const common_vendor = require("../../../../common/vendor.js");
const apis_user_index = require("../../../../apis/user/index.js");
const utils_platform = require("../../../../utils/platform.js");
const _sfc_main = {
  props: {
    handler: {
      type: Function,
      default: () => () => {
      }
    }
  },
  data() {
    return {
      formItemCustomStyle: {
        background: "rgba(246, 248, 252, 1)",
        padding: "24rpx 32rpx",
        borderRadius: "12rpx",
        marginBottom: "24rpx"
      },
      formData: {
        realName: "",
        idcardNo: ""
      },
      formRules: {
        realName: {
          type: "string",
          required: true,
          message: "姓名不能为空",
          trigger: ["blur"]
        },
        idcardNo: [
          {
            type: "string",
            required: true,
            message: "身份证号不能为空",
            trigger: ["blur"]
          },
          {
            validator: (rule, value, callback) => common_vendor.index.$u.test.idCard(value),
            message: "身份证号格式错误",
            trigger: ["blur"]
          }
        ]
      }
    };
  },
  computed: {
    userInfo() {
      return this.$store.user.userInfo;
    }
  },
  created() {
    this.formData = __spreadProps(__spreadValues({}, this.formData), {
      realName: this.userInfo.realName,
      idcardNo: this.userInfo.idcardNo
    });
  },
  mounted() {
    this.$refs.uForm.setRules(this.formRules);
  },
  methods: {
    handleSubmit() {
      return __async(this, null, function* () {
        try {
          yield this.$refs.uForm.validate();
        } catch (error) {
          console.warn("error", error);
          return;
        }
        const params = __spreadProps(__spreadValues({}, this.formData), {
          name: this.formData.realName,
          id_card: this.formData.idcardNo
        });
        this.$loading(true);
        const res = yield utils_platform.isMp ? apis_user_index.platformUserAuth(params) : apis_user_index.userAuth(params);
        this.$loading(false);
        if (res.code == 200) {
          const authed = res.data;
          if (authed) {
            this.handler({
              active: 1,
              params: __spreadProps(__spreadValues({}, params), {
                phone: authed
              })
            });
          }
        } else {
          common_vendor.index.showModal({
            title: "提示",
            showCancel: false,
            confirmText: "我知道了",
            content: res.message,
            success: (e) => {
              console.log(e);
            }
          });
        }
      });
    },
    handleBind() {
      return __async(this, null, function* () {
        const params = __spreadValues({}, this.formData);
        this.$loading(true);
        const res = yield this.$api.bindUserinfo(params);
        this.$loading(false);
        if (res.success) {
          const binded = res.data;
          if (binded) {
            yield this.$toast("该用户信息已存在, 自动绑定成功");
            this.handler({
              active: 3,
              params: __spreadProps(__spreadValues({}, this.formData), {
                binded
              })
            });
            return;
          }
          this.$toast("绑定失败, 请联系客服");
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  (_easycom_uv_input2 + _easycom_uv_form_item2 + _easycom_uv_form2 + _easycom_uv_button2)();
}
const _easycom_uv_input = () => "../../../../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
const _easycom_uv_form_item = () => "../../../../node-modules/@climblee/uv-ui/components/uv-form-item/uv-form-item.js";
const _easycom_uv_form = () => "../../../../node-modules/@climblee/uv-ui/components/uv-form/uv-form.js";
const _easycom_uv_button = () => "../../../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_input + _easycom_uv_form_item + _easycom_uv_form + _easycom_uv_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.formData.realName = $event),
    b: common_vendor.p({
      border: "none",
      placeholder: "请输入姓名",
      inputAlign: "right",
      modelValue: $data.formData.realName
    }),
    c: common_vendor.p({
      prop: "realName",
      customStyle: $data.formItemCustomStyle
    }),
    d: common_vendor.o(($event) => $data.formData.idcardNo = $event),
    e: common_vendor.p({
      border: "none",
      placeholder: "请输入身份证号",
      inputAlign: "right",
      modelValue: $data.formData.idcardNo
    }),
    f: common_vendor.p({
      prop: "idcardNo",
      customStyle: $data.formItemCustomStyle
    }),
    g: common_vendor.sr("uForm", "e9e2988f-0"),
    h: common_vendor.p({
      model: $data.formData,
      ["label-width"]: 90,
      ["border-bottom"]: true,
      ["label-position"]: "left",
      errorType: "toast"
    }),
    i: common_vendor.o($options.handleSubmit),
    j: common_vendor.p({
      type: "primary",
      text: "下一步",
      shape: "circle",
      plain: true
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e9e2988f"]]);
wx.createComponent(Component);
//# sourceMappingURL=index.js.map
