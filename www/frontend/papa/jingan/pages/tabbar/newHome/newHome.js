"use strict";
const common_vendor = require("../../../common/vendor.js");
const config_config = require("../../../config/config.js");
const mixins_shareMixins = require("../../../mixins/shareMixins.js");
const mixins_themeMixins = require("../../../mixins/themeMixins.js");
const store_app_index = require("../../../store/app/index.js");
const store_user_index = require("../../../store/user/index.js");
const navBar = () => "../../../components/navBar/index.js";
const BannerComponent = () => "./components/BannerComponent.js";
const HomeNavGrid = () => "./components/HomeNavGrid.js";
const ServiceOrderBanner = () => "./components/ServiceOrderBanner.js";
const ServiceStyleList = () => "./components/ServiceStyleList.js";
const OrganizationSection = () => "./components/OrganizationSection.js";
const YunLessonSection = () => "./components/YunLessonSection.js";
const ServiceManage = () => "./components/serviceManage.js";
const swiperList = () => "./components/swiperList.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins, mixins_themeMixins.themeMixins],
  name: "Home",
  components: {
    BannerComponent,
    HomeNavGrid,
    ServiceOrderBanner,
    ServiceStyleList,
    OrganizationSection,
    YunLessonSection,
    ServiceManage,
    navBar,
    swiperList
  },
  data() {
    return {
      swiperList: [],
      navGridList: [],
      serviceOrderBannerImg: "",
      serviceStyleList: [],
      orgTabs: [],
      activeOrgTab: "",
      orgList: [],
      yunLessonList: [],
      navColor: "transparent",
      showNavBar: true,
      titleColor: "#323233",
      appStore: null
    };
  },
  created() {
    this.initData();
    this.appStore = store_app_index.useAppStore();
  },
  onShow() {
    const userStore = store_user_index.useUserStore();
    userStore.getUserTodoCenterData();
  },
  onPullDownRefresh() {
    var _a, _b, _c;
    (_a = this.$refs) == null ? void 0 : _a.serviceStyleListRef.queryList();
    (_b = this.$refs) == null ? void 0 : _b.yunLessonSectionRef.fetchData();
    (_c = this.$refs) == null ? void 0 : _c.organizationSectionRef.fetchTabs();
    setTimeout(() => {
      common_vendor.index.stopPullDownRefresh();
    }, 1e3);
  },
  mounted() {
    var _a;
    (_a = this.$refs.serviceStyleListRef) == null ? void 0 : _a.queryList();
  },
  onPageScroll(event) {
    let scrollTop = event.scrollTop;
    if (scrollTop > 60) {
      this.navColor = "#fff";
      this.showNavBar = true;
      this.titleColor = "#323233";
    } else {
      this.navColor = "transparent";
      this.titleColor = "#323233";
    }
  },
  computed: {
    appName() {
      return config_config.config.appName;
    }
  },
  methods: {
    initData() {
      this.swiperList = [
        { image: "/static/demo/banner1.jpg" },
        { image: "/static/demo/banner2.jpg" }
      ];
      this.navGridList = [
        { icon: "/static/demo/icon1.png", title: "健身指导" },
        { icon: "/static/demo/icon2.png", title: "体育组织" },
        { icon: "/static/demo/icon3.png", title: "体育人才" },
        { icon: "/static/demo/icon4.png", title: "健身地图" },
        { icon: "/static/demo/icon5.png", title: "活动报名" }
      ];
      this.serviceOrderBannerImg = "/static/demo/service-order-banner.png";
      this.serviceStyleList = [
        {
          id: 1,
          category: "科学健身指导",
          title: "南门社区广场舞指导",
          avatar: "/static/demo/avatar1.jpg",
          nickname: "柔力球大师",
          level: "国家级",
          time: "昨天8:00",
          content: "又是一天开心的训练，大家明天继续加油哦！期待大家的进步，我会一直陪着大家的。",
          images: ["/static/demo/ss1.jpg", "/static/demo/ss2.jpg", "/static/demo/ss3.jpg"],
          participants: [
            { avatar: "/static/newHome/avatar.png" },
            { avatar: "/static/demo/avatar3.jpg" }
          ],
          participantCount: 76,
          likeCount: 66,
          commentCount: 66
        }
      ];
      this.orgTabs = [
        { label: "协会", value: "association" },
        { label: "俱乐部", value: "club" },
        { label: "其它组织", value: "other" }
      ];
      this.activeOrgTab = "association";
      this.orgList = [
        { id: 1, image: "/static/demo/org1.jpg", title: "健身气功协会" },
        { id: 2, image: "/static/demo/org2.jpg", title: "健身气功协会" }
      ];
      this.yunLessonList = [
        {
          id: 1,
          image: "/static/demo/lesson1.jpg",
          title: "八段锦（上）",
          subTitle: "健身科普系列"
        },
        {
          id: 2,
          image: "/static/demo/lesson2.jpg",
          title: "八段锦（上）",
          subTitle: "健身科普系列"
        }
      ];
    },
    clickSwiper(item) {
    },
    clickNavGrid(item) {
    },
    clickServiceOrderBanner() {
    },
    likeServiceStyle(item) {
    },
    commentServiceStyle(item) {
    },
    moreServiceStyle() {
    },
    changeOrgTab(tab) {
      this.activeOrgTab = tab.value;
    },
    clickOrgCard(item) {
    },
    moreOrg() {
    },
    playLesson(item) {
    },
    moreYunLesson() {
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_swiperList = common_vendor.resolveComponent("swiperList");
  const _component_HomeNavGrid = common_vendor.resolveComponent("HomeNavGrid");
  const _component_ServiceOrderBanner = common_vendor.resolveComponent("ServiceOrderBanner");
  const _component_ServiceManage = common_vendor.resolveComponent("ServiceManage");
  const _component_ServiceStyleList = common_vendor.resolveComponent("ServiceStyleList");
  const _component_OrganizationSection = common_vendor.resolveComponent("OrganizationSection");
  const _component_YunLessonSection = common_vendor.resolveComponent("YunLessonSection");
  const _component_layout_tabbar_uni = common_vendor.resolveComponent("layout-tabbar-uni");
  (_component_navBar + _component_swiperList + _component_HomeNavGrid + _component_ServiceOrderBanner + _component_ServiceManage + _component_ServiceStyleList + _component_OrganizationSection + _component_YunLessonSection + _component_layout_tabbar_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.showNavBar,
    b: common_vendor.p({
      navColor: $data.navColor,
      title: $options.appName,
      titleColor: $data.titleColor
    }),
    c: common_vendor.o($options.clickNavGrid),
    d: common_vendor.p({
      list: $data.navGridList
    }),
    e: common_vendor.o($options.clickServiceOrderBanner),
    f: common_vendor.p({
      bannerImg: $data.serviceOrderBannerImg
    }),
    g: common_vendor.sr("serviceManageRef", "2ea79e84-5,2ea79e84-0"),
    h: common_vendor.sr("serviceStyleListRef", "2ea79e84-6,2ea79e84-0"),
    i: common_vendor.o($options.likeServiceStyle),
    j: common_vendor.o($options.commentServiceStyle),
    k: common_vendor.o($options.moreServiceStyle),
    l: common_vendor.p({
      list: $data.serviceStyleList
    }),
    m: common_vendor.sr("organizationSectionRef", "2ea79e84-7,2ea79e84-0"),
    n: common_vendor.o($options.changeOrgTab),
    o: common_vendor.o($options.clickOrgCard),
    p: common_vendor.o($options.moreOrg),
    q: common_vendor.p({
      tabs: $data.orgTabs,
      activeTab: $data.activeOrgTab,
      list: $data.orgList
    }),
    r: $data.appStore.isShowFitness
  }, $data.appStore.isShowFitness ? {
    s: common_vendor.sr("yunLessonSectionRef", "2ea79e84-8,2ea79e84-0"),
    t: common_vendor.o($options.playLesson),
    v: common_vendor.o($options.moreYunLesson),
    w: common_vendor.p({
      list: $data.yunLessonList
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2ea79e84"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
