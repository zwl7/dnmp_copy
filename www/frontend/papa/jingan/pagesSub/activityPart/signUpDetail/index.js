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
const apis_activity = require("../../../apis/activity.js");
const _sfc_main = {
  name: "activitySignUpDetail",
  data() {
    return {
      signUpInfo: {},
      applicant_id: "",
      // 报名id
      applicant_code: ""
    };
  },
  onLoad(options) {
    return __async(this, null, function* () {
      this.applicant_id = options.applicant_id;
      this.getSignUpInfo();
    });
  },
  methods: {
    getSignUpInfo() {
      return __async(this, null, function* () {
        const res = yield apis_activity.getWxActivityItem({ applicant_id: this.applicant_id });
        if (res.code !== 200) {
          this.$showToastNone(res.message);
          return;
        }
        this.signUpInfo = res.data;
        this.applicant_code = res.data.applicant_code;
        console.log(this.signUpInfo);
      });
    },
    cancelSignUp() {
      return __async(this, null, function* () {
        common_vendor.index.showModal({
          title: "提示",
          content: "确定取消报名吗？",
          success: (res) => __async(this, null, function* () {
            if (res.confirm) {
              const res2 = yield apis_activity.cancelWxActivityApply({ applicant_id: this.applicant_id });
              if (res2.code !== 200) {
                this.$showToastNone(res2.message);
                return;
              } else {
                common_vendor.index.showToast({
                  title: "取消报名成功",
                  icon: "success"
                });
                common_vendor.index.navigateBack();
              }
            }
          })
        });
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_qrcode2 = common_vendor.resolveComponent("uv-qrcode");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_qrcode2 + _component_layout_default_uni)();
}
const _easycom_uv_qrcode = () => "../../../node-modules/@climblee/uv-ui/components/uv-qrcode/uv-qrcode.js";
if (!Math) {
  _easycom_uv_qrcode();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("qrcode", "65c942c6-1,65c942c6-0"),
    b: common_vendor.p({
      size: "400rpx",
      value: $data.applicant_code
    }),
    c: common_vendor.t($data.signUpInfo.name),
    d: common_vendor.t($data.signUpInfo.end_time),
    e: common_vendor.t($data.signUpInfo.address),
    f: common_vendor.o((...args) => $options.cancelSignUp && $options.cancelSignUp(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-65c942c6"]]);
wx.createPage(MiniProgramPage);
