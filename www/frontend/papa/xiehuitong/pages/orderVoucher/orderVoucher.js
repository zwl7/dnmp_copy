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
const apis_dateBall = require("../../apis/dateBall.js");
const navBar = () => "../../components/navBar.js";
const sportCodeCard = () => "../sportCodeRights/components/sportCodeCard.js";
const orderCodeCard = () => "./components/orderCodeCard.js";
const bottomButton = () => "../../components/bottomButton.js";
const _sfc_main = {
  components: {
    navBar,
    sportCodeCard,
    orderCodeCard,
    bottomButton
  },
  data() {
    return {
      cancelButtonStyle: {
        background: "transparent",
        "border-radius": "100rpx",
        border: "1px solid #ffffff",
        "font-size": "32rpx",
        "font-weight": 500,
        color: "#ffffff",
        "min-width": "670rpx",
        height: "100rpx"
      },
      type: "orderVoucher",
      marginTop: "",
      sportCodeInfo: {
        title: "出示二维码入场",
        codeUrl: "https://img.js.design/assets/img/6205f76b91b12423c10c7cef.png",
        list: [
          {
            name: "活动名称",
            value: "",
            key: "name"
          },
          {
            name: "有效日期至",
            value: "",
            key: "end_time"
          },
          {
            name: "活动地址",
            value: "",
            key: "address"
          },
          {
            name: "报名信息",
            value: "",
            key: "user_name"
          }
        ]
      },
      codeCardHeight: 0
    };
  },
  onLoad(options) {
    const app = getApp();
    let { navBarHeight } = app.globalData;
    this.marginTop = navBarHeight;
    if (options.applicant_id) {
      this.applicant_id = options.applicant_id;
      this.getDetail(this.applicant_id);
    }
  },
  methods: {
    cancelOrder() {
      return __async(this, null, function* () {
        common_vendor.index.showModal({
          title: "提示",
          content: "确认取消报名吗",
          showCancel: true,
          success: (confirmRes) => __async(this, null, function* () {
            if (confirmRes.confirm) {
              let res = yield apis_dateBall.getWxActivityCancelApply({
                applicant_id: this.applicant_id
              });
              if (res.code == 200) {
                common_vendor.index.showToast({
                  icon: "success",
                  title: "取消成功"
                });
                setTimeout(() => {
                  common_vendor.index.navigateBack();
                }, 2e3);
              } else {
                common_vendor.index.showToast({
                  icon: "none",
                  title: res.message
                });
              }
            } else if (confirmRes.cancel) {
              console.log("用户点击取消");
            }
          })
        });
      });
    },
    getDetail(applicant_id) {
      return __async(this, null, function* () {
        let res = yield apis_dateBall.getWxActivityItem({ applicant_id });
        if (res.code == 200) {
          let data = res.data;
          this.sportCodeInfo.codeUrl = data.applicant_code;
          let list = this.sportCodeInfo.list;
          list.forEach((item, index) => {
            Object.keys(data).forEach((key) => {
              if (list[index].key == key) {
                list[index].value = data[key];
              }
              if (list[index].key == "user_name" && key == "apply_info") {
                let userList = data[key];
                let applyInfo = [];
                userList.forEach((userArray) => {
                  applyInfo.push(
                    userArray.map((userItem) => {
                      return userItem.value_name ? userItem.value_name : userItem.value;
                    }).join("/")
                  );
                });
                list[index].value = applyInfo.toString();
              }
            });
          });
          this.sportCodeInfo.list = list;
        } else {
          common_vendor.index.showToast({
            icon: "none",
            title: res.message
          });
        }
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_orderCodeCard = common_vendor.resolveComponent("orderCodeCard");
  const _component_sportCodeCard = common_vendor.resolveComponent("sportCodeCard");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_orderCodeCard + _component_sportCodeCard + _component_bottomButton + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      navColor: "rgba(80, 171, 255, 1)",
      title: "活动报名详情",
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
    d: common_vendor.o($options.cancelOrder),
    e: common_vendor.p({
      customStyle: $data.cancelButtonStyle
    }),
    f: $data.marginTop + "px"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
