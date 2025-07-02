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
const common_vendor = require("../../../../common/vendor.js");
const mixins_themeMixins = require("../../../../mixins/themeMixins.js");
const _sfc_main = {
  mixins: [mixins_themeMixins.themeMixins],
  name: "UserInfo",
  components: {},
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    role: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    toSportCode() {
      common_vendor.index.navigateTo({
        url: "/pages/sportCodeRights/sportCodeRights"
      });
    },
    handleEdit() {
      return __async(this, null, function* () {
        let flag = yield getApp().judgeIsAuth();
        if (!flag) {
          return;
        }
        common_vendor.index.navigateTo({
          url: "/pagesSub/sportsService/personalDetail/personalDetail"
        });
      });
    },
    handleAuth() {
      if (this.info.is_auth == 1) {
        return;
      }
      let app = getApp();
      let phone = app.globalData.userInfo.phone;
      common_vendor.index.navigateTo({
        url: "/pages/register/register?phone=" + phone
      });
    },
    handleLogin() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    },
    routeToMydentity() {
      common_vendor.index.navigateTo({
        url: "/pagesSub/sportsService/realAuth/myIdentity"
      });
    }
  }
};
if (!Array) {
  const _component_paTag = common_vendor.resolveComponent("paTag");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  (_component_paTag + _easycom_uni_icons2 + _easycom_uv_icon2)();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uv_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.info.avatar_url,
    b: common_vendor.t($props.info.nick_name),
    c: common_vendor.o((...args) => $options.handleLogin && $options.handleLogin(...args))
  }, {}, {
    f: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-bianji",
      size: "36rpx"
    }),
    g: common_vendor.o((...args) => $options.handleEdit && $options.handleEdit(...args)),
    h: common_vendor.t($props.info.phone),
    i: !$props.role
  }, !$props.role ? {
    j: common_vendor.t($props.info.is_auth == 1 ? "已实名" : "未实名"),
    k: common_vendor.o((...args) => $options.handleAuth && $options.handleAuth(...args)),
    l: common_vendor.n($props.info.is_auth == 1 ? "user-role" : "user-role user-is-not-auth")
  } : {
    m: common_vendor.t($props.role),
    n: common_vendor.p({
      name: "arrow-right",
      size: "10",
      color: "#c5f730"
    }),
    o: common_vendor.o((...args) => $options.routeToMydentity && $options.routeToMydentity(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ee7f1d19"]]);
wx.createComponent(Component);
