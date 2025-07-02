"use strict";
const common_vendor = require("../../../common/vendor.js");
const apis_mine = require("../../../apis/mine.js");
require("../../../utils/http.js");
require("../../../core/config.js");
require("../../../utils/token.js");
require("../../../utils/storageUtil.js");
const _sfc_main = {
  data() {
    return {
      default_img: "https://cdn-static.papa.com.cn/ppcs_mp/avatar.png",
      mine_service_list: [
        {
          index: 1,
          title: "我的卡包",
          img: "/static/mine/我的卡包.png",
          path_name: ""
        },
        {
          index: 2,
          title: "我的优惠券",
          img: "/static/mine/我的优惠券.png",
          path_name: ""
        },
        {
          index: 3,
          title: "我的报名",
          img: "/static/mine/我的报名.png",
          path_name: "/pages/myRegistration/myRegistration"
        },
        {
          index: 4,
          title: "会员卡",
          img: "/static/mine/会员卡.png",
          path_name: ""
        },
        {
          index: 5,
          title: "场馆入驻",
          img: "/static/mine/场馆入驻.png",
          path_name: ""
        },
        {
          index: 6,
          title: "交流互动",
          img: "/static/mine/交流互动.png",
          path_name: "/pages/myFeedback/myFeedback"
        },
        {
          index: 7,
          title: "我的收藏",
          img: "/static/mine/我的收藏.png",
          path_name: "/pages/myCollections/myCollections"
        }
      ],
      avatar_url: "",
      nick_name: "",
      is_auth: "",
      phone: ""
    };
  },
  computed: {},
  onShow() {
    const app = getApp();
    let {
      userInfo
    } = app.globalData;
    this.avatar_url = userInfo.avatar_url !== "" ? userInfo.avatar_url : this.default_img;
    this.nick_name = userInfo.nick_name !== "" ? userInfo.nick_name : "登录与注册";
    this.is_auth = userInfo.is_auth;
    this.phone = userInfo.phone.slice(0, 3) + "****" + userInfo.phone.slice(7, 11);
    if (userInfo.is_auth == -1) {
      this.toLogin();
    }
    if (app.globalData.mineRefresh) {
      this.getUserInfo();
      app.globalData.mineRefresh = false;
    }
  },
  methods: {
    clickServeItem(item) {
      let {
        path_name,
        index
      } = item;
      if (path_name) {
        common_vendor.index.navigateTo({
          url: path_name
        });
      } else {
        this.$showToastNone("正在建设中");
      }
    },
    async onTopNav(path_name) {
      let flag = await getApp().judgeIsAuth();
      if (!flag) {
        return;
      }
      let nav_map = {
        orderList: "/pages/orderList/orderList",
        sportCode: "/pages/sportCode/sportCode"
      };
      common_vendor.index.navigateTo({
        url: nav_map[path_name]
      });
    },
    handleAuth() {
      this.$showToastNone("实名认证");
      let app = getApp();
      let phone = app.globalData.phone;
      common_vendor.index.navigateTo({
        url: "/pages/register/register?phone=" + phone
      });
    },
    setting() {
      common_vendor.index.navigateTo({
        url: "/pages/mineSetting/mineSetting"
      });
    },
    getUserInfo() {
      apis_mine.getWxMember({}).then((res) => {
        if (res.code === 200) {
          let app = getApp();
          let userInfo = {
            phone: res.data.phone,
            nick_name: res.data.nick_name,
            name: res.data.name,
            avatar_url: res.data.avatar_url,
            is_auth: res.data.is_authenticate
          };
          this.avatar_url !== "" ? userInfo.avatar_url : this.default_img;
          this.nick_name = userInfo.nick_name !== "" ? userInfo.nick_name : "登录与注册";
          this.is_auth = userInfo.is_auth;
          this.phone = userInfo.phone.slice(0, 3) + "****" + userInfo.phone.slice(7, 11);
          app.globalData.isAuth = res.data.is_authenticate === -1 ? false : true;
          app.globalData.business_id = res.data.business_id;
          app.globalData.userInfo = userInfo;
          app.globalData.is_login = true;
          if (res.data.is_authenticate === -1) {
            this.toLogin();
          }
        } else {
          common_vendor.wx$1.showToast({
            title: res.message,
            icon: "error"
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
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.avatar_url,
    b: common_vendor.t($data.nick_name),
    c: common_vendor.o($options.setting),
    d: common_vendor.p({
      type: "gear",
      size: "26",
      color: "#fff"
    }),
    e: $data.is_auth != 1
  }, $data.is_auth != 1 ? {
    f: common_vendor.o((...args) => $options.handleAuth && $options.handleAuth(...args))
  } : {
    g: common_vendor.t($data.phone)
  }, {
    h: $data.is_auth != 1
  }, $data.is_auth != 1 ? {
    i: common_vendor.p({
      type: "forward",
      size: "16",
      color: "#fff"
    })
  } : {}, {
    j: common_vendor.o(($event) => $options.onTopNav("orderList")),
    k: common_vendor.o(($event) => $options.onTopNav("sportCode")),
    l: common_vendor.f($data.mine_service_list, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.title),
        c: item.index,
        d: common_vendor.o(($event) => $options.clickServeItem(item), item.index)
      };
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gxm/uniapp-shandong/pages/tabbar/mine/index.vue"]]);
wx.createPage(MiniProgramPage);
