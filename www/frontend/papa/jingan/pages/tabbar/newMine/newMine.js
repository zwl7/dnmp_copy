"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
require("../../../store/app/index.js");
const store_user_index = require("../../../store/user/index.js");
const apis_sportsService_common = require("../../../apis/sportsService/common.js");
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const UserInfo = () => "./components/UserInfo.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins, mixins_themeMixins.themeMixins],
  components: { UserInfo },
  data() {
    return {
      userInfo: {
        avatar_url: "",
        nick_name: "登录与注册",
        phone: "****",
        is_auth: -1
      },
      modules: [
        {
          name: "健身服务",
          menuList: "sportServiceMenuGetter"
        },
        {
          name: "服务管理",
          menuList: "sportManageMenuGetter"
        },
        {
          name: "其他服务",
          menuList: "sportOtherMenuGetter"
        }
      ],
      userStore: null,
      role: "--"
    };
  },
  computed: {
    todoCenterData() {
      return this.userStore.userTodoCenterData;
    }
  },
  onShow() {
    return __async(this, null, function* () {
      var _a;
      const app = getApp();
      const userStore = store_user_index.useUserStore();
      this.userStore = userStore;
      let { navBarHeight, userInfo } = app.globalData;
      this.navBarHeight = navBarHeight;
      this.userInfo = __spreadProps(__spreadValues({}, userInfo), {
        avatar_url: userInfo.avatar_url !== "" ? userInfo.avatar_url : (_a = this.themeIconMapGetter) == null ? void 0 : _a["defaultAvatar"],
        nick_name: userInfo.is_auth !== -1 ? userInfo.nick_name : "登录与注册",
        phone: userInfo.phone.slice(0, 3) + "****" + userInfo.phone.slice(7, 11)
      });
      userStore.setUserInfo(this.userInfo);
      console.log("userInfo", this.userInfo);
      if (app.globalData.mineRefresh) {
        this.getUserInfo();
        app.globalData.mineRefresh = false;
      }
      userStore.getUserTodoCenterData();
    });
  },
  onLoad() {
    this.getIdentityList();
  },
  methods: {
    // 菜单权限处理
    menuRightSort(authTypes, menuAuth) {
      if (!authTypes || authTypes.length == 0)
        return false;
      if (!Array.isArray(menuAuth) || menuAuth.length == 0)
        return true;
      let flag = false;
      menuAuth.forEach((item) => {
        if (authTypes.includes(item)) {
          flag = true;
        }
      });
      return flag;
    },
    getUserInfo() {
      getWxMember({}).then((res) => {
        if (res.code === 200) {
          let app = getApp();
          const userStore = useuserStore();
          let userInfo = {
            phone: res.data.phone,
            nick_name: res.data.nick_name,
            name: res.data.name,
            avatar_url: Object.prototype.toString.call(res.data.avatar_url) === "[object Array]" ? "" : res.data.avatar_url,
            is_auth: res.data.is_authenticate
          };
          this.userInfo = __spreadProps(__spreadValues({}, userInfo), {
            // avatar_url:
            //   userInfo.avatar_url !== ''
            //     ? userInfo.avatar_url
            //     : this.themeIconMapGetter['defaultAvatar'],
            nick_name: userInfo.nick_name !== "" ? userInfo.nick_name : "登录与注册",
            phone: userInfo.phone.slice(0, 3) + "****" + userInfo.phone.slice(7, 11)
          });
          console.log({ uu: this.userInfo });
          userStore.setUserInfo(this.userInfo);
          app.globalData.isAuth = res.data.is_authenticate === -1 ? false : true;
          app.globalData.business_id = res.data.business_id;
          app.globalData.userInfo = userInfo;
          app.globalData.is_login = true;
          if (res.data.is_authenticate === -1) {
            this.toLogin();
          }
        } else {
          common_vendor.index.showToast({
            title: res.message,
            icon: "none"
          });
        }
      });
    },
    toLogin() {
      common_vendor.index.reLaunch({
        url: "/pages/login/login"
      });
    },
    handleClick(item) {
      return __async(this, null, function* () {
        if (!item.path) {
          common_vendor.index.showToast({ title: "功能建设中", icon: "none" });
          return;
        }
        console.log({ item });
        if (item.login) {
          let flag = yield getApp().judgeIsLogin();
          if (!flag) {
            return;
          }
        }
        common_vendor.index.navigateTo({ url: item.path });
      });
    },
    // 获取身份列表
    getIdentityList() {
      return __async(this, null, function* () {
        var _a;
        const res = yield apis_sportsService_common.getPersonnelAuth();
        if (res.code === 200) {
          console.log({ res });
          this.role = (_a = res.data[0]) == null ? void 0 : _a.resource_type_name;
        }
      });
    }
  }
};
if (!Array) {
  const _component_UserInfo = common_vendor.resolveComponent("UserInfo");
  const _component_layout_tabbar_uni = common_vendor.resolveComponent("layout-tabbar-uni");
  (_component_UserInfo + _component_layout_tabbar_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      info: $data.userInfo,
      role: $data.role
    }),
    b: common_vendor.f($data.modules, (item, k0, i0) => {
      var _a, _b, _c;
      return common_vendor.e({
        a: (_a = $data.userStore) == null ? void 0 : _a[item.menuList].length
      }, ((_b = $data.userStore) == null ? void 0 : _b[item.menuList].length) ? {
        b: common_vendor.t(item.name),
        c: common_vendor.f((_c = $data.userStore) == null ? void 0 : _c[item.menuList], (child, k1, i1) => {
          return common_vendor.e({
            a: child.url,
            b: $options.todoCenterData[child.key]
          }, $options.todoCenterData[child.key] ? {
            c: common_vendor.t($options.todoCenterData[child.key])
          } : {}, {
            d: common_vendor.t(child.name),
            e: common_vendor.o(($event) => $options.handleClick(child), child.name),
            f: child.name
          });
        })
      } : {}, {
        d: item.name
      });
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d6e021b3"]]);
wx.createPage(MiniProgramPage);
