"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_user_index = require("../../../store/user/index.js");
const core_config = require("../../../core/config.js");
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const NavBar = () => "../../../components/navBar/index.js";
const SwiperList = () => "./components/SwiperList.js";
const NoticeBar = () => "./components/NoticeBar.js";
const KingKongArea = () => "./components/KingKongArea.js";
const ServiceCard = () => "./components/ServiceCard.js";
const InstructorRegion = () => "./components/InstructorRegion.js";
const ServiceStyle = () => "./components/ServiceStyle.js";
const Stadium = () => "./components/Stadium.js";
const InstructorPeople = () => "./components/InstructorPeople.js";
const SportsOrg = () => "./components/SportsOrg.js";
const InstructorSite = () => "./components/InstructorSite.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  components: {
    NavBar,
    SwiperList,
    NoticeBar,
    KingKongArea,
    ServiceCard,
    InstructorRegion,
    ServiceStyle,
    Stadium,
    InstructorPeople,
    SportsOrg,
    InstructorSite
  },
  data() {
    return {
      navColor: "transparent",
      showNavBar: false,
      navBarHeight: 0,
      scrollTop: 0
    };
  },
  computed: {
    appName() {
      return core_config.config.appName;
    },
    isAuthInstructor() {
      return store_user_index.useUserStore().isAuthInstructor;
    }
  },
  onLoad(options) {
    let { navBarHeight } = this.$store.app.menuInfo;
    this.navBarHeight = navBarHeight;
  },
  onPageScroll(event) {
    let scrollTop = event.scrollTop;
    if (scrollTop > 60) {
      this.navColor = "#fff";
      this.showNavBar = true;
    } else {
      this.navColor = "transparent";
      this.showNavBar = false;
    }
    this.scrollTop = scrollTop;
  },
  methods: {
    clickTo(url) {
      common_vendor.index.navigateTo({
        url
      });
    }
  }
};
if (!Array) {
  const _component_NavBar = common_vendor.resolveComponent("NavBar");
  const _component_SwiperList = common_vendor.resolveComponent("SwiperList");
  const _component_NoticeBar = common_vendor.resolveComponent("NoticeBar");
  const _component_KingKongArea = common_vendor.resolveComponent("KingKongArea");
  const _component_ServiceCard = common_vendor.resolveComponent("ServiceCard");
  const _component_InstructorRegion = common_vendor.resolveComponent("InstructorRegion");
  const _component_ServiceStyle = common_vendor.resolveComponent("ServiceStyle");
  const _component_Stadium = common_vendor.resolveComponent("Stadium");
  const _component_InstructorPeople = common_vendor.resolveComponent("InstructorPeople");
  const _component_SportsOrg = common_vendor.resolveComponent("SportsOrg");
  const _component_InstructorSite = common_vendor.resolveComponent("InstructorSite");
  const _component_paBackToTop = common_vendor.resolveComponent("paBackToTop");
  const _component_layout_tabbar_uni = common_vendor.resolveComponent("layout-tabbar-uni");
  (_component_NavBar + _component_SwiperList + _component_NoticeBar + _component_KingKongArea + _component_ServiceCard + _component_InstructorRegion + _component_ServiceStyle + _component_Stadium + _component_InstructorPeople + _component_SportsOrg + _component_InstructorSite + _component_paBackToTop + _component_layout_tabbar_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      navColor: $data.navColor,
      titleColor: "#323232",
      title: $options.appName
    }),
    b: common_vendor.p({
      ["scroll-top"]: $data.scrollTop
    }),
    c: $data.navBarHeight + 10 + "px"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9cbf8dbe"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
