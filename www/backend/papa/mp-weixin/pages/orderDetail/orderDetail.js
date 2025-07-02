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
      load_finish: false,
      cfg_value: false,
      // 是否支持微信端场地退订
      parent_order_no: "",
      orderData: {},
      orderItem: [],
      orderMsg: {
        trade_cate_id: 0,
        list: [],
        c_time: 0
      },
      orderExtra: {},
      // 订单的额外信息
      isShowMsg: true,
      // 是否显示更多的订单信息
      skuList: []
    };
  },
  onLoad(option) {
    this.parent_order_no = option.parent_order_no;
    this.getOrderDetail();
  },
  computed: {
    tradeCateIdStr() {
      let str = "";
      switch (this.orderMsg.trade_cate_id) {
        case 11:
          str = "会员";
          break;
        case 12:
          str = "门票";
          break;
        case 13:
          str = "场地";
          break;
        case 14:
          str = "商品";
          break;
        case 15:
          str = "通用";
          break;
      }
      return str;
    },
    orderTimeFormat() {
      const dateStr = new Date(this.orderMsg.c_time * 1e3);
      const year = dateStr.getFullYear();
      const month = dateStr.getMonth() + 1 > 9 ? dateStr.getMonth() + 1 : "0" + (dateStr.getMonth() + 1);
      const day = dateStr.getDate() > 9 ? dateStr.getDate() : "0" + dateStr.getDate();
      const hours = dateStr.getHours() > 9 ? dateStr.getHours() : "0" + dateStr.getHours();
      const minutes = dateStr.getMinutes() > 9 ? dateStr.getMinutes() : "0" + dateStr.getMinutes();
      const seconds = dateStr.getSeconds() > 9 ? dateStr.getSeconds() : "0" + dateStr.getSeconds();
      return year + "-" + month + "-" + day + "  " + hours + ":" + minutes + ":" + seconds;
    }
  },
  methods: {
    getOrderDetail() {
      apis_mine.getOrder({
        parent_order_no: this.parent_order_no
      }).then((res) => {
        this.orderData = res.data;
        this.orderItem = res.data.list[0].item;
        this.orderMsg = res.data.list[0].order;
        this.orderExtra = res.data.list[0].extra;
        this.load_finish = true;
        this.msgShow();
      });
    },
    msgShow() {
      this.isShowMsg = !this.isShowMsg;
      if (this.isShowMsg) {
        this.skuList = this.orderItem;
      } else {
        this.skuList = [];
        this.skuList.push(this.orderItem[0]);
      }
    },
    async cancelOrder() {
      const params = {
        parent_order_no: this.parent_order_no
      };
      common_vendor.index.showModal({
        title: "取消当前订单?",
        success: async (e) => {
          console.log(e);
          if (e.confirm) {
            const res = await apis_mine.cancelOrder(params);
            if (res.code == 200) {
              common_vendor.index.showToast({
                icon: "success",
                title: "取消订单成功！"
              });
              setTimeout(() => {
                common_vendor.index.navigateBack();
              }, 1e3);
            } else {
              this.$showToastNone(res.message);
            }
          }
          if (e.cancel) {
            console.log("取消");
          }
        }
      });
    },
    linkToPay() {
      common_vendor.index.redirectTo({
        url: "/pages/orderCenter/orderCenter?parent_order_no=" + this.parent_order_no
      });
    }
  }
};
if (!Array) {
  const _component_skeleton = common_vendor.resolveComponent("skeleton");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_component_skeleton + _easycom_uni_icons2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.load_finish
  }, !$data.load_finish ? {
    b: common_vendor.p({
      type: "detail"
    })
  } : common_vendor.e({
    c: common_vendor.t($options.tradeCateIdStr),
    d: $data.orderMsg.order_status === 0
  }, $data.orderMsg.order_status === 0 ? {} : $data.orderMsg.order_status === 1 ? {} : $data.orderMsg.order_status === 2 ? {} : $data.orderMsg.order_status === 3 ? {} : $data.orderMsg.order_status === 5 ? {
    i: common_vendor.t($data.orderMsg.order_status_str)
  } : {}, {
    e: $data.orderMsg.order_status === 1,
    f: $data.orderMsg.order_status === 2,
    g: $data.orderMsg.order_status === 3,
    h: $data.orderMsg.order_status === 5,
    j: common_vendor.t($data.orderData.parent_order_no),
    k: $data.orderItem.length > 1,
    l: common_vendor.p({
      type: $data.isShowMsg ? "top" : "bottom",
      size: "18"
    }),
    m: common_vendor.f($data.skuList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.sku_info),
        b: index
      };
    }),
    n: common_vendor.o((...args) => $options.msgShow && $options.msgShow(...args)),
    o: common_vendor.t($data.orderExtra.stadium_name !== "" ? $data.orderExtra.stadium_name : "--"),
    p: common_vendor.t($data.orderExtra.user_info),
    q: common_vendor.t($data.orderExtra.remark !== "" ? $data.orderExtra.remark : "--"),
    r: common_vendor.t($options.orderTimeFormat),
    s: common_vendor.t($data.orderExtra.payment_way_str !== "" ? $data.orderExtra.payment_way_str : "--"),
    t: common_vendor.t(parseFloat($data.orderMsg.sale_price).toFixed(2)),
    v: common_vendor.t(parseFloat($data.orderMsg.pay_price).toFixed(2)),
    w: common_vendor.o((...args) => $options.cancelOrder && $options.cancelOrder(...args)),
    x: $data.orderData.offline !== 2
  }, $data.orderData.offline !== 2 ? {
    y: common_vendor.o((...args) => $options.linkToPay && $options.linkToPay(...args))
  } : {}));
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1353b6cf"], ["__file", "E:/gxm/uniapp-shandong/pages/orderDetail/orderDetail.vue"]]);
wx.createPage(MiniProgramPage);
