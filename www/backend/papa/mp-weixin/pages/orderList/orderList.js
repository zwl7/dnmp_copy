"use strict";
const common_vendor = require("../../common/vendor.js");
const core_listMixins = require("../../core/listMixins.js");
const apis_mine = require("../../apis/mine.js");
require("../../utils/http.js");
require("../../core/config.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
const mytabs = () => "../../components/tabs/mytabs.js";
const _sfc_main = {
  mixins: [core_listMixins.listMixins],
  components: {
    mytabs
  },
  data() {
    return {
      current: "0",
      order_status: "-1",
      tab_list: [
        {
          name: "全部订单",
          value: "all"
        },
        {
          name: "未支付",
          value: "0"
        },
        {
          name: "已支付",
          value: "1"
        },
        {
          name: "退款/取消",
          value: "6"
        }
      ]
    };
  },
  onLoad(options) {
    this.getList();
  },
  onReachBottom() {
    this.loadMore();
  },
  onPullDownRefresh() {
    this.page = 1;
    this.list = [];
    this.$nextTick(() => {
      this.getList(true);
    });
  },
  methods: {
    changeTab(index) {
      console.log("当前选中的项：" + index);
      this.current = index;
      let order_status = this.tab_list[index].value;
      if (order_status == " all") {
        order_status = -1;
      }
      this.order_status = order_status;
      this.resetData();
    },
    async getList(refresh) {
      const param = {
        page: this.page,
        size: 10,
        order_status: this.order_status,
        sort: -1
      };
      this.loading = true;
      let res = await apis_mine.getOrderList(param);
      let _this = this;
      if (res.code === 200) {
        this.list = this.list.concat(res.data.list);
        this.count = res.data.count;
        this.loading = false;
        if (res.data.list.length === 0) {
          this.finished = true;
        }
        if (!this.finished) {
          this.$isFullScreen().then((fres) => {
            let {
              windowHeight,
              scrollHeight
            } = fres;
            if (windowHeight + 70 >= scrollHeight) {
              _this.loadMore();
            }
          });
        }
        if (refresh) {
          common_vendor.index.stopPullDownRefresh();
        }
      } else {
        this.$showToastNone(res.message);
      }
    },
    linkToDetail(parent_order_no) {
      common_vendor.index.navigateTo({
        url: "/pages/orderDetail/orderDetail?parent_order_no=" + parent_order_no
      });
    },
    goToSportCode() {
      common_vendor.index.navigateTo({
        url: "/pages/sportCode/sportCode"
      });
    }
  }
};
if (!Array) {
  const _component_mytabs = common_vendor.resolveComponent("mytabs");
  const _component_skeleton = common_vendor.resolveComponent("skeleton");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_component_mytabs + _component_skeleton + _component_empty + _easycom_uni_load_more2)();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.changeTab),
    b: common_vendor.p({
      list: $data.tab_list,
      current: $data.current
    }),
    c: common_vendor.f(_ctx.list, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.cate_type_name),
        b: item.order_status === 0
      }, item.order_status === 0 ? {} : item.order_status === 1 ? {} : item.order_status === 2 ? {} : item.order_status === 3 ? {} : item.order_status === 5 ? {} : {}, {
        c: item.order_status === 1,
        d: item.order_status === 2,
        e: item.order_status === 3,
        f: item.order_status === 5,
        g: common_vendor.f(item.order_info, (inItem, inIndex, i1) => {
          return {
            a: common_vendor.t(inItem.sku_info),
            b: inIndex
          };
        }),
        h: common_vendor.t(item.c_time),
        i: common_vendor.t(item.pay_price),
        j: item.order_status === 1 && !item.pay_code_status
      }, item.order_status === 1 && !item.pay_code_status ? {
        k: common_vendor.o((...args) => $options.goToSportCode && $options.goToSportCode(...args), index)
      } : {}, {
        l: index,
        m: common_vendor.o(($event) => $options.linkToDetail(item.parent_order_no), index)
      });
    }),
    d: _ctx.showSkeleton
  }, _ctx.showSkeleton ? {} : {}, {
    e: _ctx.showEmpty
  }, _ctx.showEmpty ? {} : {}, {
    f: common_vendor.p({
      status: _ctx.loadStatus
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1d51308d"], ["__file", "E:/gxm/uniapp-shandong/pages/orderList/orderList.vue"]]);
wx.createPage(MiniProgramPage);
