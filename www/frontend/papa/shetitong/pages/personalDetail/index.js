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
const utils_reg = require("../../utils/reg.js");
const utils_tree = require("../../utils/tree.js");
const utils_index = require("../../utils/index.js");
const utils_platform = require("../../utils/platform.js");
const common_assets = require("../../common/assets.js");
const rules = {
  name: {
    type: "string",
    required: true,
    message: "请填写姓名",
    trigger: ["blur", "change"]
  },
  phone: [
    {
      required: true,
      message: "请填写手机号",
      trigger: ["blur", "change"]
    },
    {
      pattern: utils_reg.reg_tel_phone,
      message: "手机号格式不正确"
    }
  ]
};
const _sfc_main = {
  data() {
    return {
      defaultAvatar: common_assets.defaultAvatar,
      previewImage: utils_index.previewImage,
      currentPick: 1,
      rules,
      showPicker: false,
      form: {
        nick_name: "",
        avatar: "",
        sex: "",
        phone: "",
        guide: "",
        fileList: []
      },
      sex: {
        0: "未知",
        1: "男",
        2: "女"
      },
      sexOptions: [
        [
          { label: "男", id: 1 },
          { label: "女", id: 2 }
        ]
      ],
      defaultIndex: []
    };
  },
  onLoad() {
    let result = utils_tree.getPickBackFile([this.$store.user.userInfo.sex], this.sexOptions[0], 1);
    this.defaultIndex = result.defaultIndex;
    this.form = __spreadProps(__spreadValues({
      guide: this.$store.user.userInfo.is_auth_instructor == 1 ? "已认证" : "未认证",
      fileList: [
        {
          url: this.$store.user.userInfo.avatar_url
        }
      ]
    }, this.$store.user.userInfo), {
      name: this.$store.user.userInfo.nick_name
    });
    console.log(this.form);
    console.log(this.$store.user.userInfo);
  },
  methods: {
    getFileList() {
    },
    toValidate() {
      if (this.$store.user.userInfo.is_auth_instructor == 1) {
        common_vendor.index.navigateTo({
          url: "/pages-sub/realname/detail"
        });
        return;
      }
      common_vendor.index.navigateTo({
        url: "/pages-sub/realname/index"
      });
    },
    save() {
      return __async(this, null, function* () {
        try {
          yield this.$refs.formRef.validate().then(() => __async(this, null, function* () {
            let params = {
              avatar: this.form.avatar,
              nick_name: this.form.nick_name,
              sex: this.form.sex,
              phone: this.form.phone
            };
            let res = yield utils_platform.isMp ? this.$api.updateInfoPlatformMmeberInfo(params) : this.$api.updateMmeberInfo(params);
            if (res.code == 200) {
              this.$store.user.userInfo = __spreadValues(__spreadValues({}, this.$store.user.userInfo), params);
              this.$toast("保存成功", {
                type: "success",
                complete() {
                  common_vendor.index.navigateBack();
                }
              });
            } else {
              this.$toast(res.message);
            }
          })).catch((errors) => {
            console.warn("error", errors);
          });
        } catch (error) {
          console.warn("error", error);
        }
      });
    },
    handleLogout() {
      return __async(this, null, function* () {
        try {
          yield this.$dialog("确定要退出登录吗?", {
            showCancelButton: true,
            confirmButtonText: "确定",
            cancelButtonText: "取消"
          });
        } catch (error) {
          console.log(error);
          return;
        }
        yield this.$store.user.logout();
        yield this.$toast("退出登录成功", { type: "success" });
      });
    },
    replaceAvatar() {
      return __async(this, null, function* () {
        const res = yield utils_index.chooseImage();
        if (res.status) {
          this.$api.uploadPic({ filePath: res.file }).then((resp) => {
            let res2 = JSON.parse(resp.data);
            if (res2.code == 200) {
              this.form.avatar = res2.data.imgUrl;
            } else {
              this.$toast(res2.message);
            }
          });
        }
      });
    },
    changeHandler(e) {
    },
    handleShowSexPicker() {
      this.$refs["sexPicker"].open();
    },
    handlePickerConfirm(e) {
      this.showPicker = false;
      this.form.sex = e.value[0].id;
    }
  }
};
if (!Array) {
  const _easycom_uv_avatar2 = common_vendor.resolveComponent("uv-avatar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_picker2 = common_vendor.resolveComponent("uv-picker");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_avatar2 + _easycom_uv_icon2 + _easycom_uv_form_item2 + _easycom_uv_input2 + _easycom_uv_picker2 + _easycom_uv_form2 + _easycom_uv_button2 + _component_layout_default_uni)();
}
const _easycom_uv_avatar = () => "../../node-modules/@climblee/uv-ui/components/uv-avatar/uv-avatar.js";
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_form_item = () => "../../node-modules/@climblee/uv-ui/components/uv-form-item/uv-form-item.js";
const _easycom_uv_input = () => "../../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
const _easycom_uv_picker = () => "../../node-modules/@climblee/uv-ui/components/uv-picker/uv-picker.js";
const _easycom_uv_form = () => "../../node-modules/@climblee/uv-ui/components/uv-form/uv-form.js";
const _easycom_uv_button = () => "../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
if (!Math) {
  (_easycom_uv_avatar + _easycom_uv_icon + _easycom_uv_form_item + _easycom_uv_input + _easycom_uv_picker + _easycom_uv_form + _easycom_uv_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.replaceAvatar),
    b: common_vendor.p({
      src: $data.form.avatar || $data.defaultAvatar,
      size: "30"
    }),
    c: common_vendor.o($options.replaceAvatar),
    d: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    }),
    e: common_vendor.sr("item1", "3f40a9d6-2,3f40a9d6-1"),
    f: common_vendor.p({
      label: "头像",
      prop: "avatar",
      borderBottom: true
    }),
    g: common_vendor.o(($event) => $data.form.nick_name = $event),
    h: common_vendor.p({
      border: "none",
      placeholder: "请输入昵称",
      inputAlign: "right",
      modelValue: $data.form.nick_name
    }),
    i: common_vendor.sr("item1", "3f40a9d6-5,3f40a9d6-1"),
    j: common_vendor.p({
      label: "昵称",
      prop: "name",
      borderBottom: true
    }),
    k: common_vendor.o(($event) => $data.sex[$data.form.sex] = $event),
    l: common_vendor.p({
      readonly: true,
      placeholder: "请请选择性别",
      border: "none",
      inputAlign: "right",
      modelValue: $data.sex[$data.form.sex]
    }),
    m: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    }),
    n: common_vendor.o((...args) => $options.handleShowSexPicker && $options.handleShowSexPicker(...args)),
    o: common_vendor.sr("sexPicker", "3f40a9d6-10,3f40a9d6-7"),
    p: common_vendor.o($options.handlePickerConfirm),
    q: common_vendor.o(($event) => $data.showPicker = false),
    r: common_vendor.o($options.changeHandler),
    s: common_vendor.p({
      show: $data.showPicker,
      columns: $data.sexOptions,
      keyName: "label",
      defaultIndex: $data.defaultIndex
    }),
    t: common_vendor.sr("item1", "3f40a9d6-7,3f40a9d6-1"),
    v: common_vendor.p({
      label: "性别",
      prop: "sex",
      borderBottom: true
    }),
    w: common_vendor.o(($event) => $data.form.phone = $event),
    x: common_vendor.p({
      readonly: true,
      border: "none",
      inputAlign: "right",
      modelValue: $data.form.phone
    }),
    y: common_vendor.sr("item1", "3f40a9d6-11,3f40a9d6-1"),
    z: common_vendor.p({
      label: "手机号",
      prop: "phone",
      borderBottom: true
    }),
    A: common_vendor.o(($event) => $data.form.guide = $event),
    B: common_vendor.p({
      readonly: true,
      border: "none",
      inputAlign: "right",
      modelValue: $data.form.guide
    }),
    C: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    }),
    D: common_vendor.o((...args) => $options.toValidate && $options.toValidate(...args)),
    E: common_vendor.sr("item1", "3f40a9d6-13,3f40a9d6-1"),
    F: common_vendor.p({
      label: "指导员",
      prop: "guide"
    }),
    G: common_vendor.sr("formRef", "3f40a9d6-1,3f40a9d6-0"),
    H: common_vendor.p({
      labelPosition: "left",
      model: $data.form,
      rules: $data.rules,
      labelWidth: "100",
      errorType: "toast"
    }),
    I: common_vendor.o($options.handleLogout),
    J: common_vendor.p({
      type: "primary",
      plain: true,
      shape: "circle",
      size: "medium"
    }),
    K: common_vendor.o($options.save),
    L: common_vendor.p({
      type: "primary",
      shape: "circle",
      size: "medium"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3f40a9d6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
