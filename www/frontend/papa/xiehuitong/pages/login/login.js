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
const apis_login = require("../../apis/login.js");
const apis_common = require("../../apis/common.js");
const utils_stroageUtils_token = require("../../utils/stroageUtils/token.js");
const core_config = require("../../core/config.js");
const common_assets = require("../../common/assets.js");
const navBar = () => "../../components/navBar.js";
const _sfc_main = {
  components: {
    navBar
  },
  data() {
    return {
      navColor: "transparent",
      topBgImage: "https://cdn-static.papa.com.cn/jxpq/mine-bg.jpg",
      isAuth: false,
      checked: false,
      companyInfo: {
        name: "啪啪运动"
      },
      serviceData: {
        title: "保密隐私协议",
        content: ""
      },
      secretData: {
        title: "服务协议",
        content: ""
      },
      userInfo: {
        nick_name: "",
        avatar: "",
        sex: "",
        address: "",
        code: "",
        token: ""
      },
      popup_title: "",
      popup_content: "",
      config: core_config.config,
      logoImg: "https://cdn-static.papa.com.cn/jxpq/logo-xht.png",
      logoImgPkq: "https://cdn-static.papa.com.cn/jxpq/pkq.jpg"
      //河南匹克球logo
    };
  },
  onLoad() {
    return __async(this, null, function* () {
    });
  },
  onShow() {
    return __async(this, null, function* () {
    });
  },
  methods: {
    fnRequest(info) {
      return __async(this, null, function* () {
        let userInfo = info;
        let app = getApp();
        let resp = yield app.handleLogin();
        userInfo.token = resp.data.token;
        let res = yield apis_login.miniAuthLogin(userInfo);
        app.globalData.userInfo.phone = res.data.phone;
        utils_stroageUtils_token.setToken(res.data.token, true).then((c) => {
        });
        app.globalData.userInfo.avatar_url = res.data.avatar_url;
        app.globalData.userInfo.name = res.data.name;
        app.globalData.userInfo.nick_name = res.data.nick_name ? res.data.nick_name : res.data.phone.slice(0, 3) + "****" + res.data.phone.slice(7, 11);
        app.globalData.userInfo.is_auth = res.data.is_authenticate;
        app.globalData.userInfo.account_id = res.data.account_id;
        app.globalData.isAuth = res.data.is_authenticate === -1 ? false : true;
        this.loading = false;
        let loginJumpPath = app.globalData.loginJumpPath;
        if (loginJumpPath) {
          if (loginJumpPath.includes("/tabbar/")) {
            common_vendor.index.reLaunch({
              url: app.globalData.loginJumpPath
            });
          } else {
            common_vendor.index.redirectTo({
              url: app.globalData.loginJumpPath
            });
          }
          app.globalData.loginJumpPath = "";
          return;
        }
        common_vendor.index.reLaunch({
          url: "/pages/tabbar/home/home"
        });
      });
    },
    getphonenumber(e) {
      console.log(e);
      if (e.detail && e.detail.errMsg == "getPhoneNumber:ok") {
        let code = e.detail.code;
        this.fnRequest({
          code,
          token: getApp().globalData.token
        });
      } else {
        common_vendor.index.showToast({
          title: "获取手机号失败",
          icon: "none"
        });
        return;
      }
    },
    handleClickAgree() {
      if (!this.checked) {
        common_vendor.index.showToast({
          title: "请先阅读用户协议与隐私条款",
          icon: "none"
        });
      }
    },
    judgeisAuth() {
      return new Promise((resolve) => {
        let app = getApp();
        if (app.globalData.is_login) {
          resolve(app.globalData.userInfo.is_auth);
        } else {
          let time = setInterval(() => {
            console.log(12);
            if (app.globalData.is_login) {
              resolve(app.globalData.userInfo.is_auth);
              clearInterval(time);
            }
          }, 50);
        }
      });
    },
    checkboxChange(e) {
      return __async(this, null, function* () {
        if (e.detail.value.length > 0) {
          this.checked = true;
        } else {
          this.checked = false;
        }
      });
    },
    toAgreement(type) {
      console.log(type);
      if (type == 1) {
        common_vendor.index.navigateTo({
          url: "/pages/agreement/agreement"
        });
      }
      if (type == 2) {
        common_vendor.index.navigateTo({
          url: "/pages/privacy/privacy"
        });
      }
    },
    getProposal(business_id) {
      let app = getApp();
      let params_1 = {
        business_id,
        code: "wx_reg_secret_agreement"
      };
      apis_login.getInstructionByCode(params_1).then((res) => {
        if (res.code == 200) {
          this.secretData = res.data;
          app.globalData.agreeement = res.data.content;
        }
      });
      let params_2 = {
        business_id,
        code: "wx_reg_service_agreement"
      };
      apis_login.getInstructionByCode(params_2).then((res) => {
        if (res.code == 200) {
          this.serviceData = res.data;
          app.globalData.privacy = res.data.content;
        }
      });
    },
    getCompanyInfo(company_id) {
      return __async(this, null, function* () {
        let res = yield apis_common.getCompany({
          company_id
        });
        if (res.code === 200) {
          const { company_short_name, company_wx_logo_url } = res.data;
          const obj = {
            name: company_short_name,
            logUrl: company_wx_logo_url
          };
          this.companyInfo = obj;
        }
      });
    },
    toWalk() {
      common_vendor.index.reLaunch({
        url: "/pages/tabbar/home/home"
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: $data.navColor,
      showBack: true,
      backColor: "#323233"
    }),
    b: common_assets._imports_0,
    c: $data.config.appName === "江西省排球协会" ? $data.logoImg : $data.logoImgPkq,
    d: common_vendor.t($data.config.appName),
    e: $data.checked
  }, $data.checked ? {
    f: common_vendor.o((...args) => $options.getphonenumber && $options.getphonenumber(...args))
  } : {}, {
    g: !$data.checked
  }, !$data.checked ? {
    h: common_vendor.o((...args) => $options.handleClickAgree && $options.handleClickAgree(...args))
  } : {}, {
    i: common_vendor.o((...args) => $options.toWalk && $options.toWalk(...args)),
    j: $data.checked,
    k: common_vendor.o((...args) => $options.checkboxChange && $options.checkboxChange(...args)),
    l: common_vendor.o(($event) => $options.toAgreement(1)),
    m: common_vendor.o(($event) => $options.toAgreement(2))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
