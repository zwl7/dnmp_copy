"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_activity = require("../../apis/activity.js");
const utils_uqrcode = require("../../utils/uqrcode.js");
require("../../utils/http.js");
require("../../core/config.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
const _sfc_main = {
  data() {
    return {
      applicant_id: "",
      signUpInfo: {
        end_time: "有效期",
        name: "活动名称",
        address: "活动地址"
      }
    };
  },
  onLoad(options) {
    this.applicant_id = options.applicant_id;
    this.getInfo();
  },
  methods: {
    async getInfo() {
      let params = {
        applicant_id: this.applicant_id
      };
      let res = await apis_activity.getWxActivityMyInfo(params);
      if (res.code === 200) {
        res.data.start_time = res.data.start_time.replace(/\-/g, "/");
        res.data.end_time = res.data.end_time.replace(/\-/g, "/");
        this.signUpInfo = res.data;
        this.drwaQrcode(res.data.applicant_code);
      } else {
        this.$showToastNone(res.message);
      }
    },
    cancel() {
      common_vendor.index.showModal({
        content: "确认取消预约吗",
        success: async (res) => {
          if (res.confirm) {
            let res_2 = await apis_activity.cancelApplyActivity({
              applicant_id: this.applicant_id
            });
            if (res_2.code === 200) {
              common_vendor.index.showToast({
                icon: "success",
                title: "预约取消成功"
              });
              common_vendor.index.navigateBack();
            } else {
              this.$showToastNone(res_2.message);
            }
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    drwaQrcode(data) {
      const ctx = common_vendor.index.createCanvasContext("qrcode");
      const uqrcode = new utils_uqrcode.b(
        {
          text: data,
          size: 250
        },
        ctx
      );
      uqrcode.make();
      uqrcode.draw();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.signUpInfo.name),
    b: common_vendor.t($data.signUpInfo.end_time),
    c: common_vendor.t($data.signUpInfo.address),
    d: common_vendor.o(($event) => $options.cancel($data.signUpInfo.applicant_id))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aa085744"], ["__file", "E:/gxm/uniapp-shandong/pages/signUpDetail/signUpDetail.vue"]]);
wx.createPage(MiniProgramPage);
