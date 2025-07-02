"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_mine = require("../../apis/mine.js");
require("../../utils/http.js");
require("../../core/config.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
const _sfc_main = {
  data() {
    return {
      parent_order_no: "",
      token: "",
      stadium_id: "",
      business_id: "",
      orderData: {},
      orderDataList: {
        item: [],
        extra: {},
        order: {}
      },
      salePrice: 0,
      payPrice: 0,
      orderTimeFormat: 0,
      timeRemain: 0,
      timer: "",
      timeRemainFormats: 0,
      loading: false,
      firstLoad: false,
      count: 0,
      isZeroPay: 0,
      orderStatus: ""
    };
  },
  onLoad(options) {
    this.firstLoad = true;
    this.count = 0;
    if (options.parent_order_no) {
      this.businessId = options.business_id;
      this.parent_order_no = options.parent_order_no;
      this.stadium_id = options.stadium_id;
      this.business_id = options.business_id;
      this.getOrderInfo();
    }
  },
  onShow() {
    if (!this.firstLoad) {
      this.getOrderStatus();
    }
  },
  onHide() {
    this.firstLoad = false;
  },
  onUnload() {
    clearTimeout(this.count);
    this.firstLoad = true;
  },
  methods: {
    // 获取订单详情
    async getOrderInfo() {
      const {
        data
      } = await apis_mine.getOrder({
        parent_order_no: this.parent_order_no
      });
      console.log(data);
      this.orderData = data;
      this.orderDataList = this.orderData.list[0];
      this.salePrice = this.orderDataList.order.sale_price;
      this.payPrice = this.orderDataList.order.pay_price;
      this.timeRemain = this.orderData.overdue_time;
      this.orderTimeFormats = this.orderTimeFormatMethod(this.orderData.list[0].order.c_time * 1e3);
      this.timeRemainFormats = this.timeRemainFormat();
      this.isZeroPay = this.orderDataList.order.pay_price;
      this.endTime = (/* @__PURE__ */ new Date()).getTime() + this.timeRemain * 1e3;
      this.countDown();
    },
    orderTimeFormatMethod(time) {
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
    countDown() {
      const that = this;
      this.timer = setInterval(() => {
        if (that.timeRemain > 0) {
          that.timeRemain = (that.endTime - (/* @__PURE__ */ new Date()).getTime()) / 1e3;
          that.timeRemain--;
          this.timeRemainFormats = this.timeRemainFormat();
        } else {
          clearInterval(that.timer);
        }
      }, 1e3);
    },
    //普通方式支付
    async wxNormalPay() {
      this.loading = true;
      if (this.isZeroPay <= 0) {
        this.zeroPay();
        return;
      }
      let params = {
        parent_order_no: this.orderData.parent_order_no,
        payment_way: 60,
        business_id: this.businessId,
        "extend_field": JSON.stringify({
          "trade_pay_type": "wxPay.mini"
        })
      };
      const res = await apis_mine.orderPay(params);
      if (res.code !== 200) {
        this.$showToastNone(res.message);
      }
      const data = res.data;
      const payParams = {
        timeStamp: data.timestamp.toString(),
        nonceStr: data.nonce_str,
        package: `prepay_id=${data.prepay_id}`,
        paySign: data.pay_sign,
        signType: data.sign_type
      };
      common_vendor.index.requestPayment(payParams).then((res2) => {
        const data2 = {
          parent_order_no: this.data.orderData.parent_order_no
        };
        apis_mine.orderNotice(data2).then((res3) => {
          common_vendor.index.redirectTo({
            url: "/pages//orderList/orderList"
          });
        }).catch((err) => {
          this.$showToastNone(res2.message);
        });
      }).catch((res2) => {
        Toast("用户取消支付");
        this.$showToastNone("用户取消支付");
        this.loading = false;
        throw new Error("支付失败");
      });
    },
    // 订单状态轮询
    async getOrderStatus() {
      common_vendor.index.showLoading({
        duration: 0,
        mask: true,
        forbidClick: true,
        title: "支付结果轮询中..."
      });
      const {
        data
      } = await apis_mine.orderState({
        parent_order_no: this.parent_order_no
      });
      if (parseInt(data.data.transaction_status) === 1) {
        common_vendor.index.hideLoading();
        common_vendor.index.redirectTo({
          url: "/pages//orderList/orderList"
        });
      } else {
        this.count = setTimeout(() => {
          this.getOrderStatus();
        }, 3e3);
      }
    },
    // 零元支付
    async zeroPay() {
      console.log("零元支付", this.orderData.parent_order_no, "this.orderData.parent_order_no");
      let params = {
        parent_order_no: this.orderData.parent_order_no,
        payment_way: 60,
        business_id: this.businessId,
        "extend_field": JSON.stringify({
          "trade_pay_type": "wxPay.mini"
        })
      };
      await apis_mine.orderPay(params);
      const data = {
        parent_order_no: this.orderData.parent_order_no
      };
      apis_mine.orderNotice(data).then((res) => {
        common_vendor.index.showToast({
          icon: "success",
          title: "支付成功"
        });
        setTimeout(() => {
          common_vendor.index.redirectTo({
            url: "/pages//orderList/orderList"
          });
        }, 2e3);
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
      type: "top",
      size: "18"
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
    n: common_vendor.t($data.orderTimeFormat),
    o: common_vendor.t($data.salePrice),
    p: common_vendor.p({
      type: "wallet",
      size: "18",
      color: "#4FB640"
    }),
    q: common_vendor.p({
      type: "circle-filled",
      size: "18",
      color: "#4FB640"
    }),
    r: common_vendor.o(($event) => _ctx.selectPayment(_ctx.item.payment_way_code)),
    s: common_vendor.t($data.payPrice),
    t: common_vendor.o((...args) => $options.wxNormalPay && $options.wxNormalPay(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d7dbba88"], ["__file", "E:/gxm/uniapp-shandong/pages/orderCenter/orderCenter.vue"]]);
wx.createPage(MiniProgramPage);
