"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
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
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
const utils_buttonClick = require("../../utils/buttonClick.js");
const phoneAddressService = () => "../../components/phoneAddressService/index.js";
const bottomButton = () => "../../components/bottomButton.js";
const navBar = () => "../../components/navBar/index.js";
const SiteInstructors = () => "./components/SiteInstructors.js";
const SiteActivities = () => "./components/SiteActivities.js";
const _sfc_main = {
  components: {
    bottomButton,
    navBar,
    phoneAddressService,
    SiteInstructors,
    SiteActivities
  },
  data() {
    return {
      navColor: "transparent",
      primaryColor: "#C0C4CC",
      instructor_site_id: "",
      info: {
        tag_ids_arr: []
      },
      form: {},
      showMore: false,
      avatarInfo: {},
      timeData: {},
      recommendList: [],
      isCollect: 0,
      // 0 未收藏 1 已收藏
      shareTimelineObj: {
        title: ""
      },
      tab_list: [
        { name: "详细介绍", id: "1" },
        { name: "站点指导员", id: "2" },
        { name: "站点活动", id: "3" }
      ],
      project: [],
      traffic: "",
      currentTab: 0
    };
  },
  computed: {},
  onShow() {
  },
  onLoad(options) {
    return __async(this, null, function* () {
      const app = getApp();
      console.log("app", app);
      if (options.instructor_site_id) {
        let form = {
          instructor_site_id: options.instructor_site_id
        };
        this.instructor_site_id = options.instructor_site_id;
        this.form = __spreadValues({}, form);
        yield this.getDetail();
        this.share = {
          title: this.info.name,
          path: "/pages-sub/instructorSite/detail?instructor_site_id=" + options.instructor_site_id,
          withShareTicket: true
        };
      }
    });
  },
  onShareTimeline() {
    return {
      title: this.shareTimelineObj.title
    };
  },
  onReachBottom() {
    console.log("触底了");
    if (this.currentTab == 2) {
      this.$refs.siteActivitiesRef.loadMore();
    }
  },
  onPageScroll: utils_buttonClick.throttle(function(e) {
    let scrollTop = e[0].scrollTop;
    if (scrollTop > 60) {
      this.navColor = "#fff";
    } else {
      this.navColor = "transparent";
    }
  }, 100),
  methods: {
    changeTab(e) {
      this.currentTab = e.index;
    },
    onChange(e) {
      this.timeData = e;
    },
    getDetail() {
      return __async(this, null, function* () {
        let res = yield this.$api.getInstructorSiteDetail({
          instructor_site_id: this.instructor_site_id
        });
        let { data, code } = res;
        if (code == 200) {
          data.des = utils_index.formatRichText(data.des, "暂无内容");
          this.isCollect = data.is_love ? true : false;
          this.shareTimelineObj.title = data.name;
          if (data.images_array.length == 0) {
            data.images_array = ["https://cdn-static.papa.com.cn/social/site-default.png"];
          }
          this.info = data;
        }
      });
    },
    handleCollect: utils_buttonClick.debounce(function() {
      return __async(this, null, function* () {
        try {
          let flag = yield getApp().judgeIsAuth();
          if (!flag) {
            return;
          }
          const res = yield this.$api.instructorSiteBehavior({
            instructor_site_id: this.instructor_site_id,
            cancel: this.isCollect ? 2 : 1
          });
          if (res.code === 200) {
            this.isCollect = !this.isCollect;
            common_vendor.index.showToast({
              title: this.isCollect ? "收藏成功" : "已取消收藏",
              icon: "none"
            });
          }
        } catch (error) {
          console.error("收藏操作失败:", error);
        }
      });
    }, 500)
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_phoneAddressService = common_vendor.resolveComponent("phoneAddressService");
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _component_site_instructors = common_vendor.resolveComponent("site-instructors");
  const _component_site_activities = common_vendor.resolveComponent("site-activities");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_phoneAddressService + _easycom_uv_tabs2 + _component_site_instructors + _component_site_activities + _component_layout_default_uni)();
}
const _easycom_uv_tabs = () => "../../node-modules/@climblee/uv-ui/components/uv-tabs/uv-tabs.js";
if (!Math) {
  _easycom_uv_tabs();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: $data.navColor,
      title: "站点详情",
      titleColor: "#323233",
      backColor: "#323233",
      showBack: true
    }),
    b: common_vendor.f($data.info.images_array, (item, index, i0) => {
      return {
        a: item,
        b: index
      };
    }),
    c: common_vendor.t($data.info.name),
    d: $data.isCollect ? "/static/images/star-fill.png" : "/static/images/star.png",
    e: common_vendor.o((...args) => $options.handleCollect && $options.handleCollect(...args)),
    f: $data.info.tag_ids_arr.length
  }, $data.info.tag_ids_arr.length ? {
    g: common_vendor.f($data.info.tag_ids_arr, (sport_item, sindex, i0) => {
      return {
        a: common_vendor.t(sport_item.tag_id_str),
        b: sindex
      };
    })
  } : {}, {
    h: $data.info.typeStr
  }, $data.info.typeStr ? {
    i: common_vendor.f($data.info.typeStr, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    })
  } : {}, {
    j: common_vendor.t($data.info.no),
    k: common_vendor.t($data.info.service_time),
    l: common_vendor.t($data.info.charge_person),
    m: common_vendor.p({
      info: $data.info
    }),
    n: common_vendor.o($options.changeTab),
    o: common_vendor.p({
      customStyle: {
        backgroundColor: "#fff"
      },
      list: $data.tab_list,
      scrollable: true,
      lineColor: "#0078D0",
      lineWidth: "40",
      activeStyle: {
        color: "rgba(50, 50, 51, 1)",
        fontWeight: "610"
      },
      inactiveStyle: {
        color: "rgba(150, 151, 153, 1)",
        fontWeight: "400"
      },
      current: $data.currentTab
    }),
    p: $data.currentTab === 0
  }, $data.currentTab === 0 ? {
    q: $data.info.des
  } : {}, {
    r: $data.currentTab === 1
  }, $data.currentTab === 1 ? {
    s: common_vendor.p({
      siteId: $data.instructor_site_id
    })
  } : {}, {
    t: $data.currentTab === 2
  }, $data.currentTab === 2 ? {
    v: common_vendor.sr("siteActivitiesRef", "9b65a7d3-5,9b65a7d3-0"),
    w: common_vendor.p({
      siteId: $data.instructor_site_id
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9b65a7d3"]]);
_sfc_main.__runtimeHooks = 7;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=detail.js.map
