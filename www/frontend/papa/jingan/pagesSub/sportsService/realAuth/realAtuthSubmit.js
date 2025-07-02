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
require("../../../apis/sportsService/javaRequest.js");
const apis_login = require("../../../apis/login.js");
const utils_reg = require("../../../utils/reg.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const bottomButton = () => "../../../components/bottomButton.js";
const _sfc_main = {
  mixins: [mixins_themeMixins.themeMixins],
  components: {
    bottomButton
  },
  data() {
    return {
      loading: false,
      rules: {
        name: {
          type: "string",
          required: true,
          message: "请填写姓名",
          trigger: ["blur", "change"]
        },
        credentials_number: {
          type: "string",
          required: true,
          pattern: utils_reg.reg_cp,
          message: "身份证号格式不正确",
          trigger: ["blur", "change"]
        }
      },
      form: {
        name: "",
        credentials_number: "",
        platform: "no",
        phone: ""
      }
    };
  },
  onLoad(options) {
    this.setNavigationBarColor();
  },
  methods: {
    handleAdd() {
      const app = getApp();
      common_vendor.index.redirectTo({
        url: app.globalData.loginJumpPath
      });
      this.$refs.form.validate().then((res) => {
        this.submit();
      }).catch((errors) => {
      });
    },
    submit() {
      return __async(this, null, function* () {
        if (this.loading) {
          return;
        }
        this.loading = true;
        let params = JSON.parse(JSON.stringify(this.form));
        let func = apis_login.handleAuthenticate;
        func(params).then((res) => {
          if (res.code === 200) {
            common_vendor.index.showToast({
              title: "实名认证成功",
              icon: "success",
              duration: 2e3
            });
            let app = getApp();
            app.globalData.mineRefresh = true;
            app.globalData.userInfo.is_auth = 1;
            setTimeout(() => {
              if (app.globalData.loginJumpPath) {
                common_vendor.index.redirectTo({
                  url: app.globalData.loginJumpPath
                });
                app.globalData.loginJumpPath = "";
                return;
              }
              common_vendor.index.reLaunch({
                url: "/pages/tabbar/newHome/newHome"
              });
            }, 2e3);
          } else {
            common_vendor.index.showToast({
              title: res.message,
              icon: "none"
            });
          }
          this.loading = false;
        });
      });
    },
    handleJumpPath(options) {
      let app = getApp();
      let { redirectType, redirectUrl } = options;
      if (redirectType === "webview") {
        let url = encodeURIComponent(redirectUrl);
        app.globalData.loginJumpPath = "/pages/memberOauth2/authorize?redirectUrl=" + url;
      }
    }
  }
};
if (!Array) {
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_bottom_button = common_vendor.resolveComponent("bottom-button");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_input2 + _easycom_uv_form_item2 + _easycom_uv_form2 + _easycom_uv_icon2 + _component_bottom_button + _component_layout_default_uni)();
}
const _easycom_uv_input = () => "../../../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
const _easycom_uv_form_item = () => "../../../node-modules/@climblee/uv-ui/components/uv-form-item/uv-form-item.js";
const _easycom_uv_form = () => "../../../node-modules/@climblee/uv-ui/components/uv-form/uv-form.js";
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  (_easycom_uv_input + _easycom_uv_form_item + _easycom_uv_form + _easycom_uv_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.form.name = $event),
    b: common_vendor.p({
      placeholder: "请输入姓名",
      border: "none",
      ["cursor-spacing"]: "0",
      modelValue: $data.form.name
    }),
    c: common_vendor.p({
      label: "姓名",
      prop: "name",
      borderBottom: true,
      required: true
    }),
    d: common_vendor.o(($event) => $data.form.credentials_number = $event),
    e: common_vendor.p({
      placeholder: "请输入身份证号",
      border: "none",
      ["cursor-spacing"]: "0",
      modelValue: $data.form.credentials_number
    }),
    f: common_vendor.p({
      label: "身份证号",
      prop: "credentials_number",
      borderBottom: true,
      required: true
    }),
    g: common_vendor.sr("form", "f9ba233f-1,f9ba233f-0"),
    h: common_vendor.p({
      labelPosition: "left",
      model: $data.form,
      rules: $data.rules,
      labelWidth: "80"
    }),
    i: common_vendor.p({
      name: "info-circle"
    }),
    j: common_vendor.o($options.handleAdd)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f9ba233f"]]);
wx.createPage(MiniProgramPage);
