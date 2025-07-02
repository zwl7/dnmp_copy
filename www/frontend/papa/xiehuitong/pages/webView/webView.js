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
const core_shareMixins = require("../../core/shareMixins.js");
const utils_util = require("../../utils/util.js");
const utils_stroageUtils_token = require("../../utils/stroageUtils/token.js");
const _sfc_main = {
  mixins: [core_shareMixins.shareMixins],
  data() {
    return {
      url: "",
      options: {},
      parseQuery: {},
      //通过扫码解析的参数
      isLoad: false
      //onShow触发后  再次触发onShow  防止重复触发
    };
  },
  onLoad(options) {
    return __async(this, null, function* () {
      if (options.title) {
        common_vendor.index.setNavigationBarTitle({
          title: options.title
        });
      }
      this.options = options;
      let url = decodeURIComponent(options.url);
      common_vendor.index.$log.info("原始 webview url", url);
      if (url.includes("needToken")) {
        let token = yield utils_stroageUtils_token.getToken();
        url = utils_util.appendUrlParams(url, {
          token
        });
      }
      common_vendor.index.$log.info("webview url", url);
      this.url = url;
    });
  },
  onShow(options) {
    return __async(this, null, function* () {
      console.log("----onShow授权参数----", options);
      let flag = yield getApp().judgeIsAuth();
      if (!flag) {
        return;
      }
    });
  },
  methods: {
    // 解析参数  type 1 传递code   2 用户信息
    formatQueryParams(config, type = 0) {
      let params = __spreadValues({}, this.parseQuery);
      if (type == 1) {
        params.code = this.code;
      }
      if (type == 2) {
        const userInfo = getApp().globalData.userInfo;
        params.userId = userInfo.memberId;
        params.userPhone = userInfo.phone;
      }
      let baseUrl = "";
      let baseQuery = "";
      if (config.url.includes("?")) {
        baseUrl = config.url.split("?")[0];
        baseQuery = config.url.split("?")[1].split("=");
        params[baseQuery[0]] = baseQuery[1];
      } else {
        baseUrl = config.url;
      }
      if (this.parseQuery.page) {
        baseUrl += this.parseQuery.page;
      }
      params.page && delete params.page;
      params.type && delete params.type;
      return baseUrl + "?" + utils_util.objectToQueryString(params);
    }
  }
};
if (!Array) {
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  _component_layout_default_uni();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.url
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
