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
require("../../utils/stroageUtils/storageUtil.js");
require("../../utils/thirdPartUtils/md5.js");
const apis_order = require("../../apis/order.js");
const mixins_shareMixins = require("../../mixins/shareMixins.js");
const navBar = () => "../../components/navBar/index.js";
const insuranceCardVue = () => "../../components/insurance/insuranceCard.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  components: {
    navBar,
    insuranceCardVue
  },
  data() {
    return {
      //   marginTop: "",
      id: "",
      //订单id
      info: {},
      skuList: [],
      orderMsg: {},
      orderExtra: {},
      loading: false,
      insure_info: {}
    };
  },
  onLoad(options) {
    return __async(this, null, function* () {
      this.id = options.id;
      let flag = yield getApp().judgeIsLogin();
      if (!flag) {
        return;
      }
      yield this.getDetail();
      this.getInsuranceDetail();
    });
  },
  methods: {
    returnFormatTime(value) {
      return common_vendor.index.$uv.date(value, "yyyy-mm-dd hh:MM:ss");
    },
    getDetail() {
      return __async(this, null, function* () {
        let res = yield apis_order.getOrderDetail({
          parent_order_no: this.id
        });
        if (res.code == 200) {
          this.info = res.data;
          this.skuList = res.data.list[0].item;
          this.orderMsg = res.data.list[0].order;
          this.orderExtra = res.data.list[0].extra;
        } else {
          console.error(res);
        }
      });
    },
    getInsuranceDetail() {
      return __async(this, null, function* () {
        let params = {
          parent_order_no: this.id
        };
        let res = yield apis_order.getInsuranceByOrderNo(params);
        if (res.code === 200) {
          this.insure_info = res.data;
        }
      });
    },
    cancelOrder() {
      return __async(this, null, function* () {
        if (this.loading) {
          return;
        }
        this.loading = true;
        const params = {
          parent_order_no: this.info.parent_order_no,
          stadium_id: this.info.orderStadium_id
        };
        common_vendor.index.showModal({
          title: "提示",
          confirmText: "确定",
          content: "确定取消预约",
          success: (e) => __async(this, null, function* () {
            if (e.confirm) {
              const res = yield apis_order.cancelPay(params);
              if (res.code == 200) {
                this.loading = false;
                common_vendor.index.showToast({
                  icon: "success",
                  title: "取消预约成功"
                });
                common_vendor.index.navigateBack({
                  delta: 1,
                  success() {
                    let pages = getCurrentPages();
                    let beforePage = pages[pages.length - 1];
                    beforePage.$vm.resetData();
                  }
                });
              } else {
                common_vendor.index.showToast({
                  title: res.message,
                  icon: "none"
                });
              }
            } else if (e.cancel) {
              console.log("用户点击取消");
            }
          })
        });
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_insuranceCardVue = common_vendor.resolveComponent("insuranceCardVue");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_insuranceCardVue + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      isFixed: false,
      navColor: "#fff",
      title: "订单详情",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: common_vendor.t($data.info.order_status_str),
    c: common_vendor.t($data.info.parent_order_no),
    d: common_vendor.f($data.skuList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.sku_info),
        b: index
      };
    }),
    e: common_vendor.t($data.orderExtra.stadium_name !== "" ? $data.orderExtra.stadium_name : "--"),
    f: common_vendor.t($data.orderExtra.user_info),
    g: common_vendor.t($data.orderExtra.remark !== "" ? $data.orderExtra.remark : "--"),
    h: common_vendor.t($options.returnFormatTime($data.orderMsg.c_time)),
    i: common_vendor.t(parseFloat($data.orderMsg.sale_price).toFixed(2)),
    j: $data.insure_info.is_has_insure
  }, $data.insure_info.is_has_insure ? {
    k: common_vendor.p({
      type: "see",
      insurance_requirement: $data.insure_info.insurance_requirement,
      peopleNum: $data.insure_info.buy_count
    })
  } : {}, {
    l: $data.info.order_status === 0
  }, $data.info.order_status === 0 ? {
    m: common_vendor.o((...args) => $options.cancelOrder && $options.cancelOrder(...args))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4019265a"]]);
wx.createPage(MiniProgramPage);
