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
const common_vendor = require("../../../common/vendor.js");
const pages_tabbar_personal_pageSet_wzConfig = require("./pageSet/wzConfig.js");
const pages_tabbar_personal_pageSet_rcConfig = require("./pageSet/rcConfig.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const apis_sportsService_common = require("../../../apis/sportsService/common.js");
const store_user_index = require("../../../store/user/index.js");
const navBar = () => "../../../components/navBar/index.js";
const UserInfoCard = () => "./components/userInfo.js";
const Levelcard = () => "./components/levelCard.js";
const FuncCard = () => "./components/funcCard.js";
const DataCard = () => "./components/dataCard.js";
const IsAuthInstructor = () => "./components/isAuthInstructor.js";
const _sfc_main = {
  mixins: [mixins_themeMixins.themeMixins],
  components: {
    UserInfoCard,
    Levelcard,
    navBar,
    FuncCard,
    DataCard,
    IsAuthInstructor
  },
  data() {
    return {
      themeType: this.$store.app.themeType,
      //  1 瑞昌  2 万载
      dataReviewList: [
        {
          number: 0,
          title: "志愿服务"
        },
        {
          number: 0,
          title: "服务时长"
        },
        {
          number: 0,
          title: "服务人次"
        }
      ],
      role: "",
      config: {
        dataCard: {},
        funcCard: {}
      }
    };
  },
  computed: {
    isLogin() {
      return !!this.$store.user.token;
    },
    userInfo() {
      return this.$store.user.userInfo;
    },
    pageBg() {
      return this.themeIconMapGetter["MY_PAGE_BG"];
    },
    isAuthInstructor() {
      return this.$store.user.isAuthInstructor;
    }
  },
  onLoad() {
    this.getMyVoluntaryData();
    this.getIdentityList();
    let config = this.themeType == "SkyBlue" ? pages_tabbar_personal_pageSet_rcConfig.config : pages_tabbar_personal_pageSet_wzConfig.config;
    for (let key in config) {
      if (config[key].menuConfig && config[key].menuConfig.list) {
        config[key].menuConfig.list = config[key].menuConfig.list.filter((item) => {
          return this.$store.user.checkMenuAuth(item.auth, item.isShowMenu);
        });
      }
    }
    console.log(config);
    this.config = config;
  },
  onShow() {
    const userStore = store_user_index.useUserStore();
    userStore.getUserTodoCenterData();
  },
  methods: {
    getIcon(type, value) {
      return this.$dict.getDictLabel("promoteLevelList", value, { labelKey: type });
    },
    getMyVoluntaryData() {
      return __async(this, null, function* () {
        let params = {
          member_id: this.$store.user.userInfo.member_id
        };
        let res = yield this.$api.getMyVoluntaryActivityData(params);
        if (res.code == 200) {
          this.dataReviewList[0].number = res.data.voluntary_activity_num;
          this.dataReviewList[1].number = res.data.activity_duration;
          this.dataReviewList[2].number = res.data.join_num;
        } else {
          this.$toast(res.message);
        }
      });
    },
    toEdit() {
      common_vendor.index.navigateTo({
        url: "/pages/personalDetail/index"
      });
    },
    handleClick(item) {
      if (item.path == "auth") {
        if (this.$store.user.userInfo.is_auth_instructor == 1) {
          common_vendor.index.navigateTo({
            url: "/pages-sub/realname/detail"
          });
        } else {
          common_vendor.index.navigateTo({
            url: "/pages-sub/realname/index"
          });
        }
        return;
      }
      if (item.path) {
        common_vendor.index.navigateTo({
          url: item.path
        });
        return;
      }
    },
    handleInfo(item) {
      common_vendor.index.navigateTo({
        url: item.path
      });
    },
    handleLogin() {
      if (this.isLogin) {
        return;
      }
      common_vendor.index.navigateTo({
        url: "/pages/login/index"
      });
    },
    handleLogout() {
      return __async(this, null, function* () {
        try {
          yield this.$dialog("确定要退出登录吗?", {
            showCancelButton: true,
            confirmButtonText: "确定",
            cancelButtonText: "取消"
          });
        } catch (error) {
          console.log(error);
          return;
        }
        yield this.$store.user.logout();
        yield this.$toast("退出登录成功", { type: "success" });
      });
    },
    // 获取身份列表
    getIdentityList() {
      return __async(this, null, function* () {
        var _a;
        const res = yield apis_sportsService_common.getPersonnelAuth();
        if (res.code === 200) {
          this.role = (_a = res.data[0]) == null ? void 0 : _a.resource_type_name;
        }
      });
    }
  }
};
if (!Array) {
  const _component_UserInfoCard = common_vendor.resolveComponent("UserInfoCard");
  const _component_IsAuthInstructor = common_vendor.resolveComponent("IsAuthInstructor");
  const _component_DataCard = common_vendor.resolveComponent("DataCard");
  const _component_FuncCard = common_vendor.resolveComponent("FuncCard");
  const _component_Levelcard = common_vendor.resolveComponent("Levelcard");
  const _component_layout_tabbar_uni = common_vendor.resolveComponent("layout-tabbar-uni");
  (_component_UserInfoCard + _component_IsAuthInstructor + _component_DataCard + _component_FuncCard + _component_Levelcard + _component_layout_tabbar_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      userInfo: $options.userInfo,
      role: $data.role
    }),
    b: $data.themeType == "SkyBlue"
  }, $data.themeType == "SkyBlue" ? common_vendor.e({
    c: !$options.isAuthInstructor
  }, !$options.isAuthInstructor ? {} : {
    d: common_vendor.p({
      dataConfig: $data.config.dataCard,
      themeType: $data.themeType,
      list: $data.dataReviewList
    }),
    e: common_vendor.p({
      dataConfig: $data.config.socialGuide,
      title: "社体指导员专区"
    })
  }, {
    f: common_vendor.p({
      dataConfig: $data.config.serviceManage,
      title: "服务管理"
    }),
    g: common_vendor.p({
      dataConfig: $data.config.myService,
      title: "我的服务"
    }),
    h: common_vendor.p({
      dataConfig: $data.config.otherService,
      title: "其他服务"
    })
  }) : {}, {
    i: $data.themeType == "EcologicalGreen"
  }, $data.themeType == "EcologicalGreen" ? {
    j: common_vendor.p({
      ["user-info"]: $options.userInfo
    }),
    k: common_vendor.p({
      dataConfig: $data.config.dataCard,
      themeType: $data.themeType,
      list: $data.dataReviewList
    }),
    l: common_vendor.p({
      dataConfig: $data.config.funcCard
    })
  } : {}, {
    m: `url(${$options.pageBg})`
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-be176c92"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
