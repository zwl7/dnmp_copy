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
const common_vendor = require("../../common/vendor.js");
const utils_reg = require("../../utils/reg.js");
const common_assets = require("../../common/assets.js");
const store_index = require("../../store/index.js");
const utils_index = require("../../utils/index.js");
const rules = {
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
  ],
  code: [
    {
      required: true,
      message: "请填写验证码",
      trigger: ["blur", "change"]
    }
  ]
};
const _sfc_main = {
  data() {
    return {
      agreed: [],
      account: common_assets.account,
      seconds: 60,
      phoneCode: common_assets.phoneCode,
      tips: "",
      focus: false,
      loading: false,
      rules,
      form: {
        phone: "",
        code: "",
        company_id: utils_index.getEvnCompanyID()
      }
    };
  },
  computed: {
    login_avatar() {
      return this.$store.app.currentThemeIconByType["LOGIN_PAGE_AVATR"];
    }
  },
  onLoad() {
    this.getCompanyInfo();
  },
  methods: {
    getCompanyInfo() {
      return __async(this, null, function* () {
        const userStore = store_index.store.useUserStore();
        let domain = userStore.domain;
        const res = yield this.$api.getCompany({
          domain
        });
        if (res.data.code == 200) {
          if (res.data.data.company_id) {
            this.form.company_id = res.data.data.company_id;
          }
        }
      });
    },
    handleAgree() {
      common_vendor.index.navigateTo({ url: "/pages-sub/statement/index" });
    },
    handleH5Login() {
      return __async(this, null, function* () {
        this.$refs.formRef.validate().then(() => __async(this, null, function* () {
          if (!this.agreed.length) {
            try {
              yield this.$dialog("是否已阅读并同意《服务协议》?", {
                showCancelButton: true,
                confirmButtonText: "同意",
                cancelButtonText: "取消"
              });
              this.agreed.push(1);
            } catch (error) {
              console.log("error", error);
              return;
            }
          }
          this.loading = true;
          const res = yield this.$api.loginByPhone(this.form);
          if (res.code == 200) {
            yield this.$store.user.setToken(res.data.token);
            yield this.$store.user._setIsLogin(res.data.is_login);
            yield this.$toast("登录成功", { type: "success" });
            this.handleSuccess();
            this.loading = false;
          } else {
            this.$toast(res.message, { type: "warning" });
            this.loading = false;
          }
        }));
      });
    },
    handleSuccess() {
      return __async(this, null, function* () {
        const user = this.$store.user;
        try {
          yield user.getUserInfo();
          common_vendor.index.reLaunch({ url: "/pages/tabbar/home/index" });
        } catch (error) {
          this.$toast(error, { type: "warning" });
          common_vendor.index.reLaunch({ url: "/pages/tabbar/home/index" });
          console.warn("error", error);
        }
      });
    },
    handleBack() {
      common_vendor.index.reLaunch({ url: "/pages/tabbar/home/index" });
    },
    getCode() {
      return __async(this, null, function* () {
        if (!this.form.phone) {
          this.$toast("请填写手机号", { type: "warning" });
          return;
        }
        if (!utils_reg.reg_tel_phone.test(this.form.phone)) {
          this.$toast("手机号格式不正确", { type: "warning" });
          return;
        }
        this.focus = true;
        yield this.$api.getPhoneCode({ phone: this.form.phone, scene: "MemberLogin" });
        this.$refs.uCodeRef.start();
      });
    },
    codeChange(text) {
      this.tips = text;
    },
    // 获取手机号
    getphonenumber(e) {
      console.log("e", e);
      if (e && e.errMsg == "getPhoneNumber:ok") {
        let code = e.code;
        this.fnRequest({
          code,
          token: this.$store.user.token
        });
      } else {
        common_vendor.index.showToast({
          title: "获取手机号失败",
          icon: "none"
        });
        return;
      }
    },
    fnRequest(info) {
      return __async(this, null, function* () {
        let userInfo = info;
        let res = yield this.$api.wxMiniAuthLogin(userInfo);
        if (res.code !== 200) {
          this.$toast(res.message);
          return;
        }
        yield this.$store.user.setToken(res.data.token);
        yield this.$store.user._setIsLogin(true);
        yield this.handleSuccess();
      });
    },
    handleClickAgree() {
      return __async(this, null, function* () {
        if (!this.agreed.length) {
          try {
            yield this.$dialog("是否已阅读并同意《服务协议》?", {
              showCancelButton: true,
              confirmButtonText: "同意",
              cancelButtonText: "取消"
            });
            this.agreed.push(1);
          } catch (error) {
            console.log("error", error);
            return;
          }
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_button2 = common_vendor.resolveComponent("uv-button");
  const _easycom_uv_checkbox2 = common_vendor.resolveComponent("uv-checkbox");
  const _easycom_uv_checkbox_group2 = common_vendor.resolveComponent("uv-checkbox-group");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_button2 + _easycom_uv_checkbox2 + _easycom_uv_checkbox_group2 + _component_layout_default_uni)();
}
const _easycom_uv_button = () => "../../node-modules/@climblee/uv-ui/components/uv-button/uv-button.js";
const _easycom_uv_checkbox = () => "../../node-modules/@climblee/uv-ui/components/uv-checkbox/uv-checkbox.js";
const _easycom_uv_checkbox_group = () => "../../node-modules/@climblee/uv-ui/components/uv-checkbox-group/uv-checkbox-group.js";
if (!Math) {
  (_easycom_uv_button + _easycom_uv_checkbox + _easycom_uv_checkbox_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.login_avatar,
    b: $data.agreed.length > 0
  }, $data.agreed.length > 0 ? {
    c: common_vendor.o($options.getphonenumber),
    d: common_vendor.p({
      type: "primary",
      shape: "circle",
      ripple: true,
      ["open-type"]: "getPhoneNumber|agreePrivacyAuthorization"
    })
  } : {}, {
    e: $data.agreed.length == 0
  }, $data.agreed.length == 0 ? {
    f: common_vendor.o($options.handleClickAgree),
    g: common_vendor.p({
      type: "primary",
      shape: "circle",
      ripple: true
    })
  } : {}, {
    h: common_vendor.o((...args) => $options.handleBack && $options.handleBack(...args)),
    i: common_vendor.p({
      iconSize: 15,
      name: 1,
      shape: "circle"
    }),
    j: common_vendor.o(($event) => $data.agreed = $event),
    k: common_vendor.p({
      modelValue: $data.agreed
    }),
    l: common_vendor.o((...args) => $options.handleAgree && $options.handleAgree(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-45258083"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
