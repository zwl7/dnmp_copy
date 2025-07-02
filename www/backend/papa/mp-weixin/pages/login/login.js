"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_login = require("../../apis/login.js");
const apis_common = require("../../apis/common.js");
const core_config = require("../../core/config.js");
require("../../utils/http.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
const _sfc_main = {
  data() {
    return {
      logoImage: "/static/logo.jpg",
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
      popup_content: ""
    };
  },
  async onLoad() {
    let company_id = core_config.config.company_id;
    this.getCompanyInfo(company_id);
    let app = getApp();
    let business_id = app.globalData.business_id;
    if (!business_id) {
      let res = await app.handleLogin();
      business_id = res.data.business_id;
    }
    this.getProposal(business_id);
  },
  async onShow() {
  },
  methods: {
    getphonenumber(e) {
      if (e.detail && e.detail.errMsg == "getPhoneNumber:ok") {
        let code = e.detail.code;
        let url = "/pages/loginInfo/loginInfo";
        url = url.concat("?need_auth=", 1).concat("&code=", code);
        console.log(url);
        common_vendor.index.redirectTo({
          url
        });
      } else {
        this.showToast("获取手机号失败");
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
    async checkboxChange(e) {
      if (e.detail.value.length > 0) {
        this.checked = true;
      } else {
        this.checked = false;
      }
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
    async getCompanyInfo(company_id) {
      let res = await apis_common.getCompany({
        company_id
      });
      if (res.code === 200) {
        const {
          company_short_name,
          company_wx_logo_url
        } = res.data;
        const obj = {
          name: company_short_name,
          logUrl: company_wx_logo_url
        };
        this.companyInfo = obj;
      }
    },
    toWalk() {
      common_vendor.index.navigateTo({
        url: "/pages/tabbar/home/index"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.checked
  }, $data.checked ? {
    b: common_vendor.p({
      type: "weixin",
      size: "16",
      color: "#fff"
    }),
    c: common_vendor.o((...args) => $options.getphonenumber && $options.getphonenumber(...args))
  } : {}, {
    d: !$data.checked
  }, !$data.checked ? {
    e: common_vendor.p({
      type: "weixin",
      size: "16",
      color: "#fff"
    }),
    f: common_vendor.o((...args) => $options.handleClickAgree && $options.handleClickAgree(...args))
  } : {}, {
    g: common_vendor.o((...args) => $options.toWalk && $options.toWalk(...args)),
    h: $data.checked,
    i: common_vendor.o((...args) => $options.checkboxChange && $options.checkboxChange(...args)),
    j: common_vendor.o(($event) => $options.toAgreement(1)),
    k: common_vendor.o(($event) => $options.toAgreement(2))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gxm/uniapp-shandong/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
