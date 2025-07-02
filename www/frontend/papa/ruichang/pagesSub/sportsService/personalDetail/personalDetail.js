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
const common_vendor = require("../../../common/vendor.js");
const pagesSub_sportsService_personalDetail_index = require("./index.js");
const common_assets = require("../../../common/assets.js");
const utils_index = require("../../../utils/index.js");
const apis_common = require("../../../apis/common.js");
const navBar = () => "../../../components/navBar/index.js";
const _sfc_main = {
  components: {
    navBar
  },
  data() {
    return {
      default_img: common_assets.default_img,
      marginTop: "",
      rules: pagesSub_sportsService_personalDetail_index.rules,
      form: {
        name: "",
        avatar: "",
        phone: "",
        guide: "",
        fileList: []
      },
      userInfo: {}
    };
  },
  onShow() {
    const app = getApp();
    let { navBarHeight, menuTop, userInfo } = app.globalData;
    this.marginTop = navBarHeight + menuTop;
    this.userInfo = userInfo;
    this.form = __spreadProps(__spreadValues({}, userInfo), {
      avatar: userInfo.avatar_url,
      guide: userInfo.is_auth == 1 ? "已认证" : "未认证",
      fileList: [
        {
          url: userInfo.avatar_url
        }
      ]
    });
  },
  methods: {
    toMyIdentity() {
      common_vendor.index.navigateTo({
        url: "/pagesSub/sportsService/realAuth/myIdentity"
      });
    },
    toValidate() {
      if (this.userInfo.is_auth == 1) {
        return;
      }
      let app = getApp();
      let phone = app.globalData.userInfo.phone;
      common_vendor.index.navigateTo({
        url: "/pages/register/register?phone=" + phone
      });
    },
    save() {
      return __async(this, null, function* () {
        try {
          yield this.$refs.formRef.validate().then(() => __async(this, null, function* () {
            let params = {
              avatar: this.form.avatar,
              nick_name: this.form.nick_name
            };
            let app = getApp();
            let res = yield apis_common.wxMemberUpdate(params);
            if (res.code == 200) {
              app.globalData.userInfo.avatar_url = this.form.avatar;
              app.globalData.userInfo.nick_name = this.form.nick_name;
              common_vendor.index.showToast({
                title: "保存成功",
                icon: "success"
              });
              setTimeout(() => {
                common_vendor.index.reLaunch({
                  url: "/pages/tabbar/newMine/newMine"
                });
              }, 1e3);
            } else {
              common_vendor.index.showToast({
                title: res.message,
                icon: "none"
              });
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
        common_vendor.index.showModal({
          title: "",
          content: "确定要退出登录吗?",
          showCancel: true,
          success: (t) => __async(this, null, function* () {
            if (t.confirm) {
              let res = yield apis_common.wxMemberLogout({ type: "mini_app" });
              if (res.code == 200) {
                let app = getApp();
                common_vendor.index.showToast({
                  title: "退出成功",
                  icon: "success",
                  duration: 1500
                });
                let defaultUserInfo = {
                  userInfo: {
                    phone: "",
                    nick_name: "",
                    name: "",
                    avatar_url: "",
                    is_auth: -1
                  },
                  is_get_loginInfo: false,
                  is_login: false,
                  token: "",
                  isAuth: false
                };
                app.globalData = __spreadValues(__spreadValues({}, app.globalData), defaultUserInfo);
                yield app.handleLogin();
                common_vendor.index.reLaunch({
                  url: "/pages/tabbar/newHome/newHome"
                });
              }
            }
          })
        });
      });
    },
    replaceAvatar() {
      return __async(this, null, function* () {
        const res = yield utils_index.chooseImage();
        if (res.status) {
          apis_common.uploadPic({ filePath: res.file }).then((resp) => {
            let res2 = JSON.parse(resp.data);
            if (res2.code == 200) {
              this.form.avatar = res2.data.imgUrl;
            } else {
              this.$toast(res2.message);
            }
          });
        }
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_form_item2 = common_vendor.resolveComponent("uv-form-item");
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_form2 = common_vendor.resolveComponent("uv-form");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _easycom_uv_icon2 + _easycom_uv_form_item2 + _easycom_uv_input2 + _easycom_uv_form2 + _component_layout_default_uni)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_form_item = () => "../../../node-modules/@climblee/uv-ui/components/uv-form-item/uv-form-item.js";
const _easycom_uv_input = () => "../../../node-modules/@climblee/uv-ui/components/uv-input/uv-input.js";
const _easycom_uv_form = () => "../../../node-modules/@climblee/uv-ui/components/uv-form/uv-form.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_form_item + _easycom_uv_input + _easycom_uv_form)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: "#fff",
      title: "个人资料",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: $data.form.avatar ? $data.form.avatar : $data.default_img,
    c: common_vendor.o((...args) => $options.replaceAvatar && $options.replaceAvatar(...args)),
    d: common_vendor.o($options.replaceAvatar),
    e: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    }),
    f: common_vendor.sr("item1", "fe2d2466-3,fe2d2466-2"),
    g: common_vendor.p({
      label: "头像",
      prop: "avatar",
      borderBottom: true
    }),
    h: common_vendor.o(($event) => $data.form.nick_name = $event),
    i: common_vendor.p({
      border: "none",
      placeholder: "请输入昵称",
      modelValue: $data.form.nick_name
    }),
    j: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    }),
    k: common_vendor.sr("item1", "fe2d2466-5,fe2d2466-2"),
    l: common_vendor.p({
      label: "昵称",
      prop: "nick_name",
      borderBottom: true
    }),
    m: common_vendor.t($data.form.phone),
    n: common_vendor.sr("item1", "fe2d2466-8,fe2d2466-2"),
    o: common_vendor.p({
      label: "手机号",
      prop: "phone",
      borderBottom: true
    }),
    p: common_vendor.t($data.form.guide),
    q: $data.form.guide == "去认证"
  }, $data.form.guide == "去认证" ? {
    r: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    })
  } : {}, {
    s: common_vendor.o((...args) => $options.toValidate && $options.toValidate(...args)),
    t: common_vendor.sr("item1", "fe2d2466-9,fe2d2466-2"),
    v: common_vendor.p({
      label: "实名认证",
      prop: "guide",
      borderBottom: true
    }),
    w: common_vendor.p({
      name: "arrow-right",
      color: "#969799"
    }),
    x: common_vendor.sr("item1", "fe2d2466-11,fe2d2466-2"),
    y: common_vendor.o($options.toMyIdentity),
    z: common_vendor.p({
      label: "我的身份",
      prop: "nick_name",
      borderBottom: true
    }),
    A: common_vendor.sr("formRef", "fe2d2466-2,fe2d2466-0"),
    B: common_vendor.p({
      labelPosition: "left",
      model: $data.form,
      rules: $data.rules,
      labelWidth: "100",
      errorType: "toast"
    }),
    C: common_vendor.o((...args) => $options.handleLogout && $options.handleLogout(...args)),
    D: common_vendor.o((...args) => $options.save && $options.save(...args)),
    E: $data.marginTop + "rpx"
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fe2d2466"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=personalDetail.js.map
