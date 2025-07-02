"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_mine = require("../../apis/mine.js");
const utils_uqrcode = require("../../utils/uqrcode.js");
require("../../utils/http.js");
require("../../core/config.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
const _sfc_main = {
  data() {
    return {
      reflashTime: 60,
      code: "",
      list: [],
      intvervalId: ""
    };
  },
  onLoad() {
    this.getList();
    this.initCode();
    this.setFlashTime();
  },
  onUnload() {
    clearInterval(this.intvervalId);
  },
  methods: {
    async getList() {
      apis_mine.geteEnterCode({
        page: 1,
        size: 100,
        status: 1
      }).then((res) => {
        res.data.map((item) => {
          item.iamge = item.voucher_type == 1 ? "/static/ticket-sale.png" : "/static/reserve.png";
        });
        this.list = this.list.concat(res.data);
      });
    },
    async initCode() {
      apis_mine.getMemberCode().then((res) => {
        this.code = res.data.code;
        this.createQrCode(res.data.code);
      });
    },
    createQrCode(data) {
      const ctx = common_vendor.index.createCanvasContext("qrcode");
      const uqrcode = new utils_uqrcode.b(
        {
          text: data,
          size: 198
        },
        ctx
      );
      uqrcode.make();
      uqrcode.draw();
    },
    setFlashTime() {
      this.intvervalId = setInterval(this.refreshCode, this.reflashTime * 1e3);
    },
    async refreshCode() {
      apis_mine.getRefreshCode({
        code: this.code
      }).then((res) => {
        this.createQrCode(res.data.code);
      });
    },
    async scan(code) {
      this.code = code;
      this.refreshCode();
    },
    navEnterCode() {
      console.log("入场码");
    },
    // 跳转场馆
    async navTourism() {
      common_vendor.index.switchTab({
        url: "/pages/tabbar/stadium/index"
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
    a: common_vendor.p({
      type: "refreshempty",
      size: "14"
    }),
    b: common_vendor.t($data.reflashTime),
    c: common_vendor.o((...args) => $options.refreshCode && $options.refreshCode(...args)),
    d: common_vendor.o((...args) => $options.navTourism && $options.navTourism(...args)),
    e: common_vendor.o((...args) => _ctx.navEnterGuide && _ctx.navEnterGuide(...args)),
    f: $data.list.length
  }, $data.list.length ? {
    g: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: item.iamge,
        c: common_vendor.t(item.stadium_name),
        d: common_vendor.t(item.session_str),
        e: common_vendor.t(item.valid_num),
        f: common_vendor.o(($event) => $options.scan(item.voucher), index),
        g: "2dafd245-1-" + i0,
        h: index,
        i: common_vendor.o((...args) => $options.navEnterCode && $options.navEnterCode(...args), index)
      };
    }),
    h: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "icon-erweima",
      size: "32"
    })
  } : {
    i: common_vendor.o((...args) => $options.navTourism && $options.navTourism(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2dafd245"], ["__file", "E:/gxm/uniapp-shandong/pages/sportCode/sportCode.vue"]]);
wx.createPage(MiniProgramPage);
