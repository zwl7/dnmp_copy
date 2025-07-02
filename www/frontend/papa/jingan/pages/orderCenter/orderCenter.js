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
const app = getApp();
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
      orderStatus: 0
    };
  },
  onLoad(options) {
    if (options.business_id == "undefined") {
      options.business_id = "";
    }
    if (options.parent_order_no) {
      this.businessId = options.business_id;
      this.parent_order_no = options.parent_order_no;
      this.stadium_id = options.stadium_id;
      this.business_id = options.business_id;
      this.getOrderInfo();
    }
  },
  onShow() {
    if (!this.firstLoad && app.globalData.scene === 1038) {
      this.getOrderStatus();
    }
  },
  onHide() {
    this.firstLoad = false;
    app.globalData.scene = 0;
  },
  onUnload() {
    clearTimeout(this.count);
    this.firstLoad = true;
    app.globalData.scene = 0;
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
        this.salePrice = this.orderDataList.order.sale_price.toFixed(2);
        this.payPrice = this.orderDataList.order.pay_price.toFixed(2);
        this.timeRemain = this.orderData.overdue_time;
        this.orderTimeFormats = this.orderTimeFormat(this.orderData.list[0].order.c_time * 1e3);
        this.timeRemainFormats = this.timeRemainFormat();
        this.isZeroPay = this.orderDataList.order.pay_price;
        this.endTime = (/* @__PURE__ */ new Date()).getTime() + this.timeRemain * 1e3;
        this.countDown();
      });
    },
    orderTimeFormat(time) {
      const dateStr = new Date(time);
      const year = dateStr.getFullYear();
      const month = dateStr.getMonth() + 1 > 9 ? dateStr.getMonth() + 1 : "0" + (dateStr.getMonth() + 1);
      const day = dateStr.getDate() > 9 ? dateStr.getDate() : "0" + dateStr.getDate();
      const hours = dateStr.getHours() > 9 ? dateStr.getHours() : "0" + dateStr.getHours();
      const minutes = dateStr.getMinutes() > 9 ? dateStr.getMinutes() : "0" + dateStr.getMinutes();
      const seconds = dateStr.getSeconds() > 9 ? dateStr.getSeconds() : "0" + dateStr.getSeconds();
      return year + "-" + month + "-" + day + "  " + hours + ":" + minutes + ":" + seconds;
    },
    // 倒计时格式化
    timeRemainFormat() {
      const minutes = Math.floor(this.timeRemain / 60);
      const seconds = Math.floor(this.timeRemain - minutes * 60);
      return minutes + "分" + seconds + "秒";
    },
    /**
     * 倒计时
     */
    countDown() {
      const that = this;
      this.timer = setInterval(() => {
        if (that.timeRemain > 0) {
          that.timeRemain = (that.endTime - (/* @__PURE__ */ new Date()).getTime()) / 1e3;
          that.timeRemain--;
          this.timeRemain = this.timeRemain;
          this.timeRemainFormats = this.timeRemainFormat();
        } else {
          clearInterval(that.timer);
        }
      }, 1e3);
    },
    //普通方式支付
    wxNormalPay() {
      return __async(this, null, function* () {
        console.log(this.isZeroPay);
        if (this.timeRemain <= 0) {
          return;
        }
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
          company_id: this.orderData.company_id,
          parent_order_no: this.orderData.parent_order_no,
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
          this.$showToastNone(res.message);
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
          common_vendor.index.showToast({
            icon: "success",
            title: "报名成功"
          });
          const data2 = {
            parent_order_no: this.orderData.parent_order_no
          };
          apis_order.orderNotice(data2).then((res3) => {
            if (res3.code !== 200) {
              this.$showToastNone(res3.message);
            }
            setTimeout(() => {
              common_vendor.wx$1.reLaunch({
                url: "/pages/stadiumOrder/stadiumOrder"
              });
            }, 2e3);
            console.log(res3);
          }).catch(() => {
            this.$showToastNone("支付失败");
          });
        }).catch((res2) => {
          this.loading = false;
          console.log("catch", res2);
          this.$showToastNone("用户取消支付");
          console.log(res2);
          throw new Error("支付失败");
        });
      });
    },
    // 订单状态轮询
    getOrderStatus() {
      return __async(this, null, function* () {
        common_vendor.index.showLoading({
          title: "支付结果轮询中...",
          forbidClick: true,
          mask: true
        });
        let data = yield apis_order.orderState({ parent_order_no: this.parent_order_no });
        if (parseInt(data.data.transaction_status) === 1) {
          common_vendor.index.hideToast();
          common_vendor.wx$1.redirectTo({
            url: "/pages/paySuccess/paySuccess"
          });
        } else {
          this.count = setTimeout(() => {
            this.getOrderStatus();
          }, 2e3);
        }
      });
    },
    // 零元支付
    zeroPay() {
      return __async(this, null, function* () {
        let params = {
          parent_order_no: this.orderData.parent_order_no,
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
          return;
        }
        let data = {
          parent_order_no: this.orderData.parent_order_no
        };
        if (this.token) {
          data.authorizationToken = this.token;
        }
        apis_order.orderNotice(data).then((res2) => {
          common_vendor.index.showToast({
            icon: "success",
            title: "支付成功"
          });
          setTimeout(() => {
            common_vendor.wx$1.redirectTo({
              url: "/pages/paySuccess/paySuccess"
            });
          }, 2e3);
        });
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_icon2 + _component_layout_default_uni)();
}
const _easycom_uv_icon = () => "../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.timeRemain > 0
  }, $data.timeRemain > 0 ? {
    b: common_vendor.t($data.timeRemainFormats)
  } : {}, {
    c: common_vendor.t($data.orderData.order_status_str),
    d: common_vendor.n($data.orderStatus === 0 ? "status-orange" : $data.orderStatus === 1 ? "status-5FC266" : ""),
    e: common_vendor.t($data.orderData.parent_order_no),
    f: $data.orderDataList.item.length > 1
  }, $data.orderDataList.item.length > 1 ? {
    g: common_vendor.p({
      name: "arrow-up"
    })
  } : {}, {
    h: common_vendor.f($data.orderDataList.item, (item, index, i0) => {
      return {
        a: common_vendor.t(item.sku_info),
        b: index
      };
    }),
    i: common_vendor.o((...args) => _ctx.msgShow && _ctx.msgShow(...args)),
    j: $data.orderDataList && $data.orderDataList.extra && $data.orderDataList.extra.stadium_name !== ""
  }, $data.orderDataList && $data.orderDataList.extra && $data.orderDataList.extra.stadium_name !== "" ? {
    k: common_vendor.t($data.orderDataList.extra.stadium_name)
  } : {}, {
    l: $data.orderDataList && $data.orderDataList.extra && $data.orderDataList.extra.user_info !== ""
  }, $data.orderDataList && $data.orderDataList.extra && $data.orderDataList.extra.user_info !== "" ? {
    m: common_vendor.t($data.orderDataList.extra.user_info)
  } : {}, {
    n: common_vendor.t(_ctx.orderTimeFormats),
    o: common_vendor.t($data.salePrice),
    p: common_vendor.p({
      name: "weixin-fill",
      color: "#4FB640"
    }),
    q: common_vendor.p({
      name: "checkbox-mark"
    }),
    r: common_vendor.o(($event) => _ctx.selectPayment(_ctx.item.payment_way_code)),
    s: common_vendor.t($data.payPrice),
    t: $data.loading,
    v: $data.timeRemain <= 0,
    w: common_vendor.o((...args) => $options.wxNormalPay && $options.wxNormalPay(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-442a49b0"]]);
wx.createPage(MiniProgramPage);
