"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "提交成功",
      tips: "请等待审核结果，平台工作人员会尽快联系你",
      result_success: "https://cdn-static.papa.com.cn/shandong/apply_success.png",
      result_fail: "https://cdn-static.papa.com.cn/shandong/apply_fail.png",
      status: 1,
      showImage: "",
      showApplyNote: ""
    };
  },
  onLoad(options) {
    let status = options.status;
    this.status = status;
    this.showApplyNote = getApp().globalData.showApplyNote;
    switch (this.status) {
      case "1":
        this.showImage = this.result_success;
        this.title = "提交成功";
        this.tips = "请等待审核结果，平台工作人员会尽快联系你";
        break;
      case "2":
        this.showImage = this.result_success;
        this.title = "审核通过";
        this.tips = "您的会员申请已审核通过，请联系平台工作人员获取账号";
        break;
      case "3":
        this.showImage = this.result_fail;
        this.title = "未批准";
        this.tips = "您的会员申请未被批准，请咨询平台工作人员";
        break;
      case "4":
        this.showImage = this.result_fail;
        this.title = "被驳回";
        this.tips = "您的会员申请已驳回，请按照指引操作";
        break;
    }
  },
  methods: {
    handleBack() {
      common_vendor.index.switchTab({
        url: "/pages/tabbar/newHome/newHome"
      });
    },
    handleUpdate() {
      let url = `/pagesSub/membershipService/memberApplyForm/memberApplyForm?is_update=1`;
      common_vendor.index.redirectTo({
        url
      });
    }
  }
};
if (!Array) {
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  _component_layout_default_uni();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.showImage,
    b: common_vendor.t($data.title),
    c: common_vendor.t($data.tips),
    d: common_vendor.n($data.status == 3 || $data.status == 4 ? "red" : ""),
    e: $data.status == 4
  }, $data.status == 4 ? {
    f: common_vendor.t($data.showApplyNote)
  } : {}, {
    g: common_vendor.o((...args) => $options.handleBack && $options.handleBack(...args)),
    h: $data.status == 4
  }, $data.status == 4 ? {
    i: common_vendor.o((...args) => $options.handleUpdate && $options.handleUpdate(...args))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
