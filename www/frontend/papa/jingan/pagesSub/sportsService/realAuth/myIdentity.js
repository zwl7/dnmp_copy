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
const apis_sportsService_common = require("../../../apis/sportsService/common.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const bottomButton = () => "../../../components/bottomButton.js";
const _sfc_main = {
  mixins: [mixins_themeMixins.themeMixins],
  name: "realAuth",
  components: {
    bottomButton
  },
  data() {
    return {
      isAuth: false,
      roleList: []
    };
  },
  onLoad() {
    this.setNavigationBarColor();
  },
  onShow() {
    const app = getApp();
    let { navBarHeight, menuTop, userInfo } = app.globalData;
    console.log({ userInfo });
    this.isAuth = userInfo.is_auth;
    if (this.isAuth) {
      this.getIdentityList();
    }
  },
  methods: {
    handleGotoRealAuth() {
      common_vendor.index.navigateTo({
        url: "./realAtuthSubmit"
      });
    },
    getIdentityList() {
      return __async(this, null, function* () {
        const res = yield apis_sportsService_common.getPersonnelAuth();
        if (res.code === 200) {
          console.log({ res });
          this.roleList = res.data;
        }
      });
    }
  }
};
if (!Array) {
  const _component_bottom_button = common_vendor.resolveComponent("bottom-button");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_bottom_button + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isAuth
  }, $data.isAuth ? {
    b: common_vendor.f($data.roleList, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.resource_type_name),
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.phone),
        d: item.sport_talent_type
      }, item.sport_talent_type ? {
        e: common_vendor.t(item.sport_talent_type)
      } : {}, {
        f: item.site
      }, item.site ? {
        g: common_vendor.t(item.site || "-")
      } : {}, {
        h: item.organization || item.resource_name
      }, item.organization || item.resource_name ? {
        i: common_vendor.t(item.organization || item.resource_name)
      } : {}, {
        j: index + "identity"
      });
    })
  } : {
    c: common_vendor.o($options.handleGotoRealAuth)
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d06ad73d"]]);
wx.createPage(MiniProgramPage);
