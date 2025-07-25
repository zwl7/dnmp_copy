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
const navBar = () => "../../../components/navBar/index.js";
const UserInfoCard = () => "./components/userInfo.js";
const Levelcard = () => "./components/levelCard.js";
const FuncCard = () => "./components/funcCard.js";
const DataCard = () => "./components/dataCard.js";
const _sfc_main = {
  components: {
    UserInfoCard,
    Levelcard,
    navBar,
    FuncCard,
    DataCard
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
    }
  },
  onLoad() {
    this.getMyVoluntaryData();
    this.config = this.themeType == 1 ? pages_tabbar_personal_pageSet_rcConfig.config : pages_tabbar_personal_pageSet_wzConfig.config;
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
    }
  }
};
if (!Array) {
  const _component_UserInfoCard = common_vendor.resolveComponent("UserInfoCard");
  const _component_Levelcard = common_vendor.resolveComponent("Levelcard");
  const _component_DataCard = common_vendor.resolveComponent("DataCard");
  const _component_FuncCard = common_vendor.resolveComponent("FuncCard");
  const _component_layout_tabbar_uni = common_vendor.resolveComponent("layout-tabbar-uni");
  (_component_UserInfoCard + _component_Levelcard + _component_DataCard + _component_FuncCard + _component_layout_tabbar_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      userInfo: $options.userInfo
    }),
    b: $data.themeType == 2
  }, $data.themeType == 2 ? {
    c: common_vendor.p({
      ["user-info"]: $options.userInfo
    })
  } : {}, {
    d: common_vendor.p({
      dataConfig: $data.config.dataCard,
      themeType: $data.themeType,
      list: $data.dataReviewList
    }),
    e: common_vendor.p({
      dataConfig: $data.config.funcCard
    }),
    f: common_vendor.n($data.themeType == 2 ? "border-box" : "")
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-be176c92"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
