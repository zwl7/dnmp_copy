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
const apis_common = require("../../apis/common.js");
const selectAreaPopup = () => "./components/selectAreaPopup.js";
const formItem = () => "./components/formItem.js";
const _sfc_main = {
  components: {
    selectAreaPopup,
    formItem
  },
  data() {
    return {
      menuTop: 0,
      menuRight: 0,
      visible: false,
      loading: false,
      checkFlag: false,
      errorMessage: {
        name: "",
        company_name: "",
        city_id: "",
        phone: "",
        code: ""
      },
      icons: {
        name: "iconfont-user",
        company_name: "iconfont-jianzhu",
        city_id: "iconfont-location-outline",
        phone: "iconfont-phone",
        code: "iconfont-suo"
      },
      rules: {
        name: [
          {
            type: "required",
            message: "请填写称呼"
          }
        ],
        company_name: [
          {
            type: "required",
            message: "请填写公司名称"
          }
        ],
        city_id: [
          {
            type: "required",
            message: "请选择所在区域"
          }
        ],
        phone: [
          {
            type: "required",
            message: "请输入正确的手机号"
          },
          {
            type: "regexp",
            regexp: /^1(\d)([0-9]{9})/,
            message: "请输入正确的手机号"
          }
        ],
        code: [
          {
            type: "required",
            message: "请输入验证码"
          }
        ]
      },
      form: {
        name: "",
        company_name: "",
        city_id: "",
        city_str: "",
        phone: "",
        code: ""
      },
      sendCodeTitle: "发送验证码",
      isSend: false,
      timer: null,
      is_update: ""
    };
  },
  onLoad(options) {
    let app = getApp();
    this.menuTop = app.globalData.menuTop + "px";
    this.menuRight = app.globalData.menuRight + "px";
  },
  methods: {
    handleBack() {
      common_vendor.index.navigateBack({
        fail(err) {
          console.log(err);
          common_vendor.index.switchTab({
            url: "/pages/tabbar/home/index"
          });
        }
      });
    },
    checkboxChange(e) {
      if (e.detail.value == "0") {
        this.checkFlag = true;
      } else {
        this.checkFlag = false;
      }
    },
    clickArea() {
      this.visible = true;
    },
    getAreaData(e) {
      this.form.city_str = e.text;
      this.form.city_id = e.value;
    },
    sendCode() {
      return __async(this, null, function* () {
        if (this.isSend) {
          console.log("正在发送");
          return;
        }
        if (!/^1(\d)([0-9]{9})/.test(this.form.phone)) {
          common_vendor.index.showToast({
            icon: "none",
            title: "请填写正确的手机号"
          });
          return;
        }
        let res = yield apis_common.sendPhoneCode({
          phone: this.form.phone,
          scene: "StadiumApply"
        });
        if (res.code === 200) {
          this.isSend = true;
          let count = 60;
          this.sendCodeTitle = count + " S";
          this.timer = setInterval(() => {
            count -= 1;
            this.sendCodeTitle = count + " S";
            if (count == 0) {
              clearInterval(this.timer);
              this.timer = null;
              this.isSend = false;
              this.sendCodeTitle = "重新发送";
            }
          }, 1e3);
        } else {
          common_vendor.index.showToast({
            title: res.message,
            icon: "none"
          });
        }
      });
    },
    validate() {
      let flag = true;
      for (let i in this.form) {
        if (this.rules[i]) {
          let rules = this.rules[i];
          this.errorMessage[i] = "";
          for (let r = 0; r < rules.length; r++) {
            let cur = rules[r];
            if (cur.type === "required" && !this.form[i]) {
              this.errorMessage[i] = cur.message;
              flag = false;
              break;
            }
            if (cur.type === "regexp") {
              let regexp = new RegExp(cur.regexp);
              if (!regexp.test(this.form[i])) {
                this.errorMessage[i] = cur.message;
                flag = false;
                break;
              }
            }
          }
        }
      }
      return flag;
    },
    submit() {
      let flag = this.validate();
      if (!flag) {
        console.log("校验不通过");
        return;
      }
      if (!this.checkFlag) {
        common_vendor.index.showToast({
          title: "请先查看并同意相关服务协议",
          icon: "none"
        });
        return;
      }
      if (this.loading) {
        return;
      }
      this.loading = true;
      let params = JSON.parse(JSON.stringify(this.form));
      if (params.city_str) {
        delete params.city_str;
      }
      let func = apis_common.addStadiumApply;
      func(params).then((res) => {
        if (res.code === 200) {
          common_vendor.index.showToast({
            title: "提交成功",
            icon: "success",
            duration: 2e3
          });
          setTimeout(() => {
            common_vendor.index.navigateBack();
          }, 2e3);
        } else {
          common_vendor.index.showToast({
            title: res.message,
            icon: "none"
          });
        }
        this.loading = false;
      });
    },
    // 点击协议
    handleProtocol(type) {
      return __async(this, null, function* () {
        if (type == 1) {
          common_vendor.index.navigateTo({
            url: "/pagesSub/system/agreement/agreement?type=2"
          });
        }
        if (type == 2) {
          common_vendor.index.navigateTo({
            url: "/pagesSub/system/privacy/privacy?type=2"
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_formItem = common_vendor.resolveComponent("formItem");
  const _component_selectAreaPopup = common_vendor.resolveComponent("selectAreaPopup");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uni_icons2 + _component_formItem + _component_selectAreaPopup + _component_layout_default_uni)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "left",
      size: "24",
      color: "#000000"
    }),
    b: $data.menuTop,
    c: $data.menuRight,
    d: common_vendor.o((...args) => $options.handleBack && $options.handleBack(...args)),
    e: common_vendor.o(($event) => $data.form.name = $event),
    f: common_vendor.p({
      icon: $data.icons.name,
      errorMessage: $data.errorMessage.name,
      placeholder: "请输入姓名",
      value: $data.form.name
    }),
    g: common_vendor.o(($event) => $data.form.company_name = $event),
    h: common_vendor.p({
      icon: $data.icons.company_name,
      errorMessage: $data.errorMessage.company_name,
      placeholder: "请输入公司名称",
      value: $data.form.company_name
    }),
    i: common_vendor.p({
      type: "forward",
      size: "20",
      color: "#999999"
    }),
    j: common_vendor.o((...args) => $options.clickArea && $options.clickArea(...args)),
    k: common_vendor.o($options.clickArea),
    l: common_vendor.o(($event) => $data.form.city_str = $event),
    m: common_vendor.p({
      icon: $data.icons.city_id,
      errorMessage: $data.errorMessage.city_id,
      disabled: true,
      placeholder: "请选择所在区域",
      value: $data.form.city_str
    }),
    n: common_vendor.o(($event) => $data.form.phone = $event),
    o: common_vendor.p({
      icon: $data.icons.phone,
      errorMessage: $data.errorMessage.phone,
      type: "number",
      placeholder: "请输入手机号码",
      value: $data.form.phone
    }),
    p: common_vendor.t($data.sendCodeTitle),
    q: common_vendor.o((...args) => $options.sendCode && $options.sendCode(...args)),
    r: common_vendor.o(($event) => $data.form.code = $event),
    s: common_vendor.p({
      icon: $data.icons.code,
      maxlength: 6,
      errorMessage: $data.errorMessage.code,
      type: "number",
      placeholder: "请输入验证码",
      value: $data.form.code
    }),
    t: $data.checkFlag,
    v: common_vendor.o((...args) => $options.checkboxChange && $options.checkboxChange(...args)),
    w: common_vendor.o(($event) => $options.handleProtocol(1)),
    x: common_vendor.o(($event) => $options.handleProtocol(2)),
    y: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    z: common_vendor.o($options.getAreaData),
    A: common_vendor.o(($event) => $data.visible = $event),
    B: common_vendor.p({
      visible: $data.visible
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
