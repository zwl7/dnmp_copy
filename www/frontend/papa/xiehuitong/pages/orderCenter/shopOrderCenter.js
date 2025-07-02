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
const apis_order = require("../../apis/order.js");
getApp();
const _sfc_main = {
  data() {
    return {
      parent_order_no: "",
      token: "",
      //场馆端token
      stadium_id: "",
      business_id: "",
      payIcon: "/images/icon-select.png",
      paySelectIcon: "/images/icon-selected.png",
      payLogo: "/images/guangdaBank.png",
      orderData: {},
      orderDataList: {
        item: []
      },
      salePrice: 0,
      payPrice: 0,
      timeRemain: 0,
      timer: "",
      timeRemainFormats: 0,
      loading: false,
      firstLoad: false,
      count: 0,
      isZeroPay: 0,
      orderStatus: 0,
      successH5Url: "",
      //支付成功后跳转的H5页面
      failH5Url: ""
      //支付失败后跳转的H5页面
    };
  },
  onLoad(options) {
    return __async(this, null, function* () {
      if (options.business_id == "undefined") {
        options.business_id = "";
      }
      common_vendor.index.showLoading({
        title: "正在支付",
        mask: true
      });
      common_vendor.index.$log.info("支付页面参数加载", options);
      if (options.success_url) {
        this.successH5Url = decodeURIComponent(options.success_url);
      }
      if (options.fail_url) {
        this.failH5Url = decodeURIComponent(options.fail_url);
      }
      console.log("----successH5Url----", this.successH5Url);
      console.log("----failH5Url----", this.failH5Url);
      if (options.parent_order_no) {
        this.businessId = options.business_id;
        this.parent_order_no = options.parent_order_no;
        this.stadium_id = options.stadium_id;
        this.business_id = options.business_id;
        yield this.getOrderInfo();
        this.wxNormalPay();
      }
    });
  },
  onUnload() {
  },
  methods: {
    // 获取订单详情
    getOrderInfo() {
      return __async(this, null, function* () {
        let data = yield apis_order.getOrderDetail({
          parent_order_no: this.parent_order_no
        });
        this.orderData = data.data;
        this.orderDataList = this.orderData.list[0];
        this.isZeroPay = this.orderDataList.order.pay_price;
      });
    },
    //普通方式支付
    wxNormalPay() {
      return __async(this, null, function* () {
        console.log(this.isZeroPay);
        if (this.loading) {
          return;
        }
        this.loading = true;
        if (this.isZeroPay <= 0) {
          this.zeroPay();
          return;
        }
        getApp();
        let params = {
          company_id: this.company_id,
          parent_order_no: this.parent_order_no,
          payment_way: 60,
          extend_field: JSON.stringify({
            trade_pay_type: "wxPay.mini",
            type: "platform"
          })
        };
        if (this.token) {
          params.authorizationToken = this.token;
        }
        let res = yield apis_order.platformOrderPay(params);
        console.log(res);
        if (res.code != 200) {
          common_vendor.index.hideLoading();
          this.payFail();
          this.loading = false;
          return;
        }
        const data = res.data;
        const payParams = {
          timeStamp: data.timestamp.toString(),
          nonceStr: data.nonce_str,
          package: `prepay_id=${data.prepay_id}`,
          paySign: data.pay_sign,
          signType: data.sign_type
        };
        common_vendor.wx$1.requestPayment(payParams).then((res2) => {
          console.log(res2, "res");
          const data2 = {
            parent_order_no: this.parent_order_no
          };
          this.paySuccess();
          apis_order.orderNotice(data2).then((res3) => {
            if (res3.code !== 200) {
              this.$showToastNone(res3.message);
            }
            console.log(res3);
          }).catch(() => {
            this.$showToastNone("支付失败");
            this.payFail();
          });
        }).catch((res2) => {
          this.loading = false;
          console.log("catch", res2);
          this.$showToastNone("用户取消支付");
          console.log(res2);
          this.payFail();
          throw new Error("支付失败");
        });
      });
    },
    // 零元支付
    zeroPay() {
      return __async(this, null, function* () {
        let params = {
          parent_order_no: this.parent_order_no,
          payment_way: 60,
          extend_field: JSON.stringify({
            trade_pay_type: "wxPay.mini"
          })
        };
        if (this.businessId) {
          params.business_id = this.businessId;
        }
        let res = yield apis_order.platformOrderPay(params);
        if (res.code != 200) {
          this.$showToastNone(res.message);
          this.loading = false;
          setTimeout(() => {
            this.payFail();
          }, 1e3);
          return;
        }
        let data = {
          parent_order_no: this.parent_order_no
        };
        if (this.token) {
          data.authorizationToken = this.token;
        }
        apis_order.orderNotice(data).then((res2) => {
          this.paySuccess();
        });
      });
    },
    paySuccess() {
      common_vendor.index.showToast({
        icon: "success",
        title: "支付成功"
      });
      if (this.successH5Url) {
        setTimeout(() => {
          common_vendor.index.redirectTo({
            url: "/pages/webView/webView?url=" + encodeURIComponent(this.successH5Url)
          });
        }, 1e3);
      }
    },
    payFail() {
      common_vendor.index.showToast({
        icon: "error",
        title: "支付失败"
      });
      if (this.failH5Url) {
        setTimeout(() => {
          common_vendor.index.redirectTo({
            url: "/pages/webView/webView?url=" + encodeURIComponent(this.failH5Url)
          });
        }, 1e3);
      }
    }
  }
};
if (!Array) {
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  _component_layout_default_uni();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
