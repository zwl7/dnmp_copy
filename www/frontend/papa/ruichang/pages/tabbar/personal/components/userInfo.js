"use strict";
const common_vendor = require("../../../../common/vendor.js");
const utils_index = require("../../../../utils/index.js");
const common_assets = require("../../../../common/assets.js");
const LevelIcon = () => "../../../../components/LevelIcon/index.js";
const _sfc_main = {
  name: "userInfo",
  components: {
    LevelIcon
  },
  props: {
    role: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      edit: common_assets.edit,
      previewImage: utils_index.previewImage
    };
  },
  computed: {
    isLogin() {
      return !!this.$store.user.token;
    },
    userInfo() {
      return this.$store.user.userInfo;
    },
    showAvatar() {
      return this.userInfo.avatar_url || common_assets.defaultAvatar;
    },
    themeType() {
      return this.$store.app.themeType;
    },
    showLevel() {
      return this.userInfo.is_auth_instructor && this.themeType == "SkyBlue";
    }
  },
  methods: {
    toEdit() {
      common_vendor.index.navigateTo({
        url: "/pages/personalDetail/index"
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
    routeToMydentity() {
      common_vendor.index.navigateTo({
        url: "/pagesSub/sportsService/realAuth/myIdentity"
      });
    }
  }
};
if (!Array) {
  const _easycom_uv_avatar2 = common_vendor.resolveComponent("uv-avatar");
  const _component_LevelIcon = common_vendor.resolveComponent("LevelIcon");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_paTag = common_vendor.resolveComponent("paTag");
  (_easycom_uv_avatar2 + _component_LevelIcon + _easycom_uv_icon2 + _component_paTag)();
}
const _easycom_uv_avatar = () => "../../../../node-modules/@climblee/uv-ui/components/uv-avatar/uv-avatar.js";
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  (_easycom_uv_avatar + _easycom_uv_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o(($event) => $data.previewImage($options.userInfo.avatar_url)),
    b: common_vendor.p({
      src: $options.showAvatar,
      size: "80",
      mode: "aspectFill"
    }),
    c: $options.isLogin
  }, $options.isLogin ? common_vendor.e({
    d: common_vendor.t($options.userInfo.nick_name),
    e: $options.showLevel
  }, $options.showLevel ? {
    f: common_vendor.p({
      level: $options.userInfo.level
    })
  } : {}, {
    g: common_vendor.t($options.userInfo.phone),
    h: $props.role
  }, $props.role ? {
    i: common_vendor.t($props.role),
    j: common_vendor.p({
      name: "arrow-right",
      size: "10",
      color: "#ffffff"
    }),
    k: common_vendor.o((...args) => $options.routeToMydentity && $options.routeToMydentity(...args))
  } : {}, {
    l: common_vendor.f($options.userInfo.tag_ids_arr, (item, index, i0) => {
      return {
        a: common_vendor.t(item.tag_id_str),
        b: "17908de4-3-" + i0,
        c: index
      };
    })
  }) : {}, {
    m: common_vendor.o($options.toEdit),
    n: common_vendor.p({
      name: $data.edit,
      color: "#faac0e",
      size: "30"
    }),
    o: common_vendor.o((...args) => $options.handleLogin && $options.handleLogin(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-17908de4"]]);
wx.createComponent(Component);
//# sourceMappingURL=userInfo.js.map
