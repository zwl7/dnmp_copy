"use strict";
const common_vendor = require("../../../common/vendor.js");
const core_themeMixins = require("../../../core/themeMixins.js");
const core_shareMixins = require("../../../core/shareMixins.js");
const navBar = () => "../../../components/navBar.js";
const _sfc_main = {
  mixins: [core_themeMixins.themeMixins, core_shareMixins.shareMixins],
  components: {
    navBar
  },
  data() {
    return {
      navBarHeight: 0,
      menuRight: 0,
      menuWidth: 0,
      menuTop: 0,
      menuHeight: 0,
      headerStyle: {},
      main_image: this.getThemeIcon("poster_bg")
    };
  },
  onLoad(options) {
    const app = getApp();
    let { menuRight, menuTop, navBarHeight, menuHeight, menuWidth } = app.globalData;
    this.menuHeight = menuHeight;
    this.menuTop = menuTop;
    this.navBarHeight = navBarHeight;
    this.menuWidth = menuWidth;
    this.menuRight = menuRight;
    this.headerStyle = {
      height: `${navBarHeight * 2}rpx`,
      paddingLeft: `30rpx`,
      paddingRight: `${menuRight * 2}rpx`
    };
  },
  methods: {
    handleClick() {
      common_vendor.index.navigateTo({
        url: "/pagesSub/membershipService/memberApplyForm/memberApplyForm"
      });
    },
    handleBack() {
      common_vendor.index.navigateBack({
        fail(err) {
          console.log(err);
          common_vendor.index.switchTab({
            url: "/pages/tabbar/home/index"
          });
        }
      });
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["nav-color"]: "transparent",
      title: "会员招募",
      titleColor: "#323233",
      backColor: "#323233",
      ["show-back"]: "true"
    }),
    b: $data.main_image,
    c: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a6ec9dcd"]]);
wx.createPage(MiniProgramPage);
