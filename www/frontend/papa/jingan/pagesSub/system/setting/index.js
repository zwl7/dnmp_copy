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
const common_vendor = require("../../../common/vendor.js");
const apis_common = require("../../../apis/common.js");
const cellItem = () => "./components/cellItem.js";
const bottomButton = () => "../../../components/bottomButton.js";
const _sfc_main = {
  components: {
    cellItem,
    bottomButton
  },
  data() {
    return {
      list: [
        {
          label: "个人信息",
          type: "personal",
          path: "/pages/personalDetail/personalDetail"
        },
        {
          label: "服务协议",
          type: "privacy",
          path: "/pagesSub/system/agreement/agreement"
        },
        {
          label: "保密隐私协议",
          type: "privacy",
          path: "/pagesSub/system/privacy/privacy"
        }
      ]
    };
  },
  onLoad() {
  },
  onShow() {
  },
  methods: {
    handleClick(item) {
      if (item.path) {
        common_vendor.index.navigateTo({
          url: item.path
        });
      } else {
        common_vendor.index.showToast({ title: "功能建设中", icon: "none" });
      }
    },
    handleLogout() {
      return __async(this, null, function* () {
        common_vendor.index.showModal({
          title: "",
          content: "确定要退出登录吗?",
          showCancel: true,
          success: (t) => __async(this, null, function* () {
            if (t.confirm) {
              let res = yield apis_common.wxMemberLogout({ type: "mini_app" });
              if (res.code == 200) {
                let app = getApp();
                common_vendor.index.showToast({
                  title: "退出成功",
                  icon: "success",
                  duration: 1500
                });
                let defaultUserInfo = {
                  userInfo: {
                    phone: "",
                    nick_name: "",
                    name: "",
                    avatar_url: "",
                    is_auth: -1
                  },
                  is_get_loginInfo: false,
                  is_login: false,
                  token: "",
                  isAuth: false
                };
                app.globalData = __spreadValues(__spreadValues({}, app.globalData), defaultUserInfo);
                yield app.handleLogin();
                common_vendor.index.reLaunch({
                  url: "/pages/tabbar/newHome/newHome"
                });
              }
            }
          })
        });
      });
    }
  }
};
if (!Array) {
  const _component_cellItem = common_vendor.resolveComponent("cellItem");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_cellItem + _component_bottomButton + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, k0, i0) => {
      return {
        a: item.type,
        b: common_vendor.o(($event) => $options.handleClick(item), item.type),
        c: "911493a2-1-" + i0 + ",911493a2-0",
        d: common_vendor.p({
          label: item.label,
          link: true,
          border: true
        })
      };
    }),
    b: common_vendor.o($options.handleLogout)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
