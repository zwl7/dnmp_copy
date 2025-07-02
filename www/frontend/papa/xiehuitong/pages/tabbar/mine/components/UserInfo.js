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
const core_themeMixins = require("../../../../core/themeMixins.js");
const _sfc_main = {
  mixins: [core_themeMixins.themeMixins],
  name: "UserInfo",
  props: {
    info: {
      type: Object,
      default: () => ({})
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
          url: "/pages/personalDetail/personalDetail"
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
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.info.avatar_url,
    b: common_vendor.t($props.info.nick_name),
    c: common_vendor.t($props.info.is_auth == 1 ? "已实名" : "未实名"),
    d: common_vendor.o((...args) => $options.handleAuth && $options.handleAuth(...args)),
    e: common_vendor.t($props.info.phone),
    f: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-bianji",
      size: "50rpx",
      color: _ctx.themePrimaryColorGetter
    }),
    g: common_vendor.o((...args) => $options.handleEdit && $options.handleEdit(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2d1ea733"]]);
wx.createComponent(Component);
