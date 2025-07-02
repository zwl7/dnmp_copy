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
const apis_common = require("../../../apis/common.js");
const core_shareMixins = require("../../../core/shareMixins.js");
const core_themeMixins = require("../../../core/themeMixins.js");
const common_assets = require("../../../common/assets.js");
const navBar = () => "../../../components/navBar.js";
const UserInfo = () => "./components/UserInfo.js";
const CardItem = () => "./components/CardItem.js";
const _sfc_main = {
  mixins: [core_shareMixins.shareMixins, core_themeMixins.themeMixins],
  components: {
    navBar,
    UserInfo,
    CardItem
  },
  data() {
    return {
      navColor: "transparent",
      navBarHeight: 0,
      cardList: [
        {
          list: [
            {
              name: "我的赛事",
              img: "/static/mine/my_match.png",
              path: "/pages/matchPart/myMatchList/myMatchList"
            },
            {
              name: "我的订单",
              img: "/static/mine/my_order.png",
              path: "/pages/stadiumOrder/stadiumOrder"
            },
            {
              name: "专业认证",
              img: "/static/mine/my_auth.png",
              path: "/pages/talentApprovePart/approveList/approveList"
            }
          ]
        },
        {
          title: "我的服务",
          list: [
            {
              name: "我的团队",
              img: this.getThemeIcon("mine_my_team"),
              path: "/pages/matchPart/commonTeam/commonTeam"
            },
            {
              name: "常用报名人",
              img: this.getThemeIcon("mine_my_user"),
              path: "/pages/matchPart/commonUser/commonUser"
            },
            {
              name: "意见反馈",
              img: this.getThemeIcon("mine_my_feedback"),
              path: "/pages/feedBack/feedBack"
            },
            {
              name: "赛事检录",
              img: this.getThemeIcon("mine_my_bid"),
              path: ""
            },
            {
              name: "赛事申办",
              img: this.getThemeIcon("mine_my_bid"),
              path: "/pages/eventBidding/eventBidding?type=mine"
            },
            {
              name: "我要办赛",
              img: this.getThemeIcon("mine_my_hold"),
              path: "/pages/evenApply/evenApply"
            }
          ]
        }
      ],
      userInfo: {}
    };
  },
  onShow() {
    return __async(this, null, function* () {
      console.log("ddddd", this);
      const app = getApp();
      let { navBarHeight, userInfo } = app.globalData;
      this.navBarHeight = navBarHeight;
      this.userInfo = __spreadProps(__spreadValues({}, userInfo), {
        avatar_url: userInfo.avatar_url !== "" ? userInfo.avatar_url : this.themeIconMapGetter["defaultAvatar"],
        nick_name: userInfo.nick_name !== "" ? userInfo.nick_name : "登录与注册",
        phone: userInfo.phone.slice(0, 3) + "****" + userInfo.phone.slice(7, 11)
      });
      if (app.globalData.mineRefresh) {
        this.getUserInfo();
        app.globalData.mineRefresh = false;
      }
    });
  },
  methods: {
    getUserInfo() {
      apis_common.getWxMember({}).then((res) => {
        if (res.code === 200) {
          let app = getApp();
          let userInfo = {
            phone: res.data.phone,
            nick_name: res.data.nick_name,
            name: res.data.name,
            avatar_url: Object.prototype.toString.call(res.data.avatar_url) === "[object Array]" ? "" : res.data.avatar_url,
            is_auth: res.data.is_authenticate
          };
          this.userInfo = __spreadProps(__spreadValues({}, userInfo), {
            avatar_url: userInfo.avatar_url !== "" ? userInfo.avatar_url : this.themeIconMapGetter["defaultAvatar"],
            nick_name: userInfo.nick_name !== "" ? userInfo.nick_name : "登录与注册",
            phone: userInfo.phone.slice(0, 3) + "****" + userInfo.phone.slice(7, 11)
          });
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
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_UserInfo = common_vendor.resolveComponent("UserInfo");
  const _component_CardItem = common_vendor.resolveComponent("CardItem");
  const _component_layout_tabbar_uni = common_vendor.resolveComponent("layout-tabbar-uni");
  (_component_navBar + _component_UserInfo + _component_CardItem + _component_layout_tabbar_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.p({
      navColor: $data.navColor,
      titleColor: "#323233",
      title: "我的"
    }),
    c: $data.navBarHeight + "px",
    d: common_vendor.p({
      info: $data.userInfo
    }),
    e: common_vendor.f($data.cardList, (item, k0, i0) => {
      return {
        a: item.title,
        b: "92419246-3-" + i0 + ",92419246-0",
        c: common_vendor.p({
          title: item.title,
          list: item.list
        })
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-92419246"]]);
wx.createPage(MiniProgramPage);
