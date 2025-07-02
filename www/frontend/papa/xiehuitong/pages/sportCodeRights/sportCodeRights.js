"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
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
const sportCodeCard = () => "./components/sportCodeCard.js";
const equityInfoCard = () => "./components/equityInfoCard.js";
const _sfc_main = {
  components: {
    navBar,
    sportCodeCard,
    equityInfoCard
  },
  data() {
    return {
      marginTop: "",
      sportCodeInfo: {
        title: "出示二维码入场",
        codeUrl: "",
        refreshTime: 60
      },
      intvervalId: 0,
      equityInfoCardList: [],
      content: [
        {
          name: "适用场馆",
          value: "",
          key: "stadium_name"
        },
        {
          name: "适用时间",
          value: "",
          key: "date_str"
        },
        {
          name: "适用时段",
          value: "",
          key: "session_str"
        }
      ]
    };
  },
  onLoad() {
    const app = getApp();
    let { navBarHeight } = app.globalData;
    this.marginTop = navBarHeight;
    this.getCode();
    this.setFlashTime();
    this.getEnterCode();
  },
  onUnload() {
    clearInterval(this.intvervalId);
  },
  methods: {
    toGuide() {
      common_vendor.index.navigateTo({
        url: "/pages/enterGuide/enterGuide"
      });
    },
    getTicket() {
      common_vendor.index.switchTab({
        url: "/pages/tabbar/stadium/stadium"
      });
    },
    getEnterCode() {
      return __async(this, null, function* () {
        let res = yield apis_dateBall.getWxMemberEnterCode({
          status: 1
        });
        if (res.code == 200) {
          this.equityInfoCardList = res.data.map((item) => {
            this.content.forEach((keyItem) => {
              Object.keys(item).forEach((key) => {
                if (keyItem.key == key) {
                  keyItem.value = item[key];
                }
              });
            });
            return __spreadValues({
              content: this.content
            }, item);
          });
        }
      });
    },
    setFlashTime() {
      this.intvervalId = setInterval(() => {
        this.refreshCode();
      }, 60 * 1e3);
    },
    getCode() {
      return __async(this, null, function* () {
        let res = yield apis_dateBall.getWxMemberCode();
        if (res.code == 200) {
          this.sportCodeInfo.codeUrl = res.data.code;
        }
      });
    },
    refreshCode() {
      return __async(this, null, function* () {
        let res = yield apis_dateBall.getWxMemberRefreshCode({
          code: this.sportCodeInfo.codeUrl
        });
        if (res.code == 200) {
          this.sportCodeInfo.refreshTime = 60;
          this.sportCodeInfo.codeUrl = res.data.code;
        }
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_sportCodeCard = common_vendor.resolveComponent("sportCodeCard");
  const _component_equityInfoCard = common_vendor.resolveComponent("equityInfoCard");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_sportCodeCard + _component_equityInfoCard + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      navColor: "rgba(80, 171, 255, 1)",
      title: "入场码",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: common_vendor.o($options.refreshCode),
    c: common_vendor.o($options.getTicket),
    d: common_vendor.o($options.toGuide),
    e: common_vendor.p({
      info: $data.sportCodeInfo,
      id: "codeCard",
      type: "sportCode"
    }),
    f: common_vendor.o($options.getTicket),
    g: common_vendor.p({
      list: $data.equityInfoCardList
    }),
    h: $data.marginTop + "px"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
