"use strict";
const common_vendor = require("../../../common/vendor.js");
const navBar = () => "../../../components/navBar.js";
const sportCodeCard = () => "../../../pages/sportCodeRights/components/sportCodeCard.js";
const orderCodeCard = () => "../../../pages/orderVoucher/components/orderCodeCard.js";
const applyVoucherCard = () => "./components/applyVoucherCard.js";
const _sfc_main = {
  components: {
    navBar,
    sportCodeCard,
    orderCodeCard,
    applyVoucherCard
  },
  data() {
    return {
      type: "orderVoucher",
      marginTop: "",
      sportCodeInfo: {
        title: "出示二维码入场",
        codeUrl: "https://img.js.design/assets/img/6205f76b91b12423c10c7cef.png",
        list: [
          {
            name: "活动名称",
            value: "运城篮球比赛"
          },
          {
            name: "有效日期至",
            value: "12月30日  18:00-20:00"
          },
          {
            name: "活动地址",
            value: "运城市"
          },
          {
            name: "预约人",
            value: "计朗伯"
          }
        ],
        applyList: [
          {
            name: "姓名",
            value: "计朗伯"
          },
          {
            name: "身份证号",
            value: "490331198706022825"
          },
          {
            name: "性别",
            value: "女"
          },
          {
            name: "所属机构",
            value: "运城体育馆"
          }
        ]
      }
    };
  },
  onShow() {
    const app = getApp();
    let { navBarHeight } = app.globalData;
    this.marginTop = navBarHeight;
  },
  methods: {}
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_orderCodeCard = common_vendor.resolveComponent("orderCodeCard");
  const _component_sportCodeCard = common_vendor.resolveComponent("sportCodeCard");
  const _component_applyVoucherCard = common_vendor.resolveComponent("applyVoucherCard");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_orderCodeCard + _component_sportCodeCard + _component_applyVoucherCard + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      navColor: "rgba(80, 171, 255, 1)",
      title: "预约详情",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: common_vendor.p({
      list: $data.sportCodeInfo.list
    }),
    c: common_vendor.p({
      info: $data.sportCodeInfo,
      type: $data.type
    }),
    d: common_vendor.p({
      list: $data.sportCodeInfo.applyList
    }),
    e: $data.marginTop + "px"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5f80ab7e"]]);
wx.createPage(MiniProgramPage);
