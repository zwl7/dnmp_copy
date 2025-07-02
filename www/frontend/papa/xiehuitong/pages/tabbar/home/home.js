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
const core_shareMixins = require("../../../core/shareMixins.js");
const core_themeMixins = require("../../../core/themeMixins.js");
const pages_tabbar_home_extend = require("./extend.js");
const core_config = require("../../../core/config.js");
require("../../../utils/stroageUtils/storageUtil.js");
require("../../../utils/thirdPartUtils/md5.js");
const navBar = () => "../../../components/navBar.js";
const commonTitle = () => "./components/commonTitle.js";
const swiperList = () => "./components/swiperList.js";
const showStyle = () => "./components/showStyle.js";
const notice = () => "./components/notice.js";
const card = () => "./components/card.js";
const scrollX = () => "./components/scrollX.js";
const tabs = () => "../../../components/tabs/index.js";
const noticeDialog = () => "./components/noticeDialog.js";
const newsListItem = () => "../../newsList/components/newsListItem.js";
const pageLoading = () => "../../../components/pageLoading.js";
const showCard = () => "./components/showCard.js";
const feedBackPop = () => "../mine/components/feedBackPop.js";
const xCard = () => "./components/xCard.js";
const fitnessTrailItem = () => "./components/fitnessTrailItem.js";
const _sfc_main = {
  mixins: [core_shareMixins.shareMixins, core_themeMixins.themeMixins],
  components: {
    navBar,
    swiperList,
    showStyle,
    notice,
    card,
    scrollX,
    tabs,
    newsListItem,
    pageLoading,
    noticeDialog,
    showCard,
    feedBackPop,
    fitnessTrailItem,
    xCard,
    commonTitle
  },
  data() {
    return {
      feedBackInfo: {},
      topBg: {
        newUrl: "https://cdn-static.papa.com.cn/yuncheng/tabbar/home/new-bg.png",
        lessonUrl: "https://cdn-static.papa.com.cn/yuncheng/tabbar/home/lesson-bg.png",
        associationUrl: "https://cdn-static.papa.com.cn/yuncheng/tabbar/home/association-bg.png",
        trackUrl: "https://cdn-static.papa.com.cn/yuncheng/tabbar/home/track.png"
      },
      loading: true,
      showNavBar: false,
      navBarHeight: 0,
      navColor: "transparent",
      swiperList: [],
      //轮播图
      showNoticeList: [],
      noticeList: [],
      //公告列表
      organizationList: [],
      //体育组织
      organizationImageStyle: {
        width: "310rpx",
        height: "192rpx"
      },
      //体育组织图片样式
      organizationSiteType: "",
      organizationTagList: [],
      //体育组织标签列表
      informationTag: "",
      informationTagType: "",
      informationTagList: [],
      //体育资讯标签列表
      informationList: [],
      recommendAreaTypeList: []
      //推荐专区
    };
  },
  computed: {
    appName() {
      return core_config.config.appName;
    },
    customStyleA() {
      return {
        background: `linear-gradient(180deg, ${this.themePrimaryLightColorGetter} 0%, rgba(255, 255, 255, 1) 60%)`
      };
    }
  },
  onLoad() {
    const app = getApp();
    let { navBarHeight } = app.globalData;
    this.navBarHeight = navBarHeight;
    this.getData();
  },
  onPageScroll(event) {
    let scrollTop = event.scrollTop;
    if (scrollTop > 60) {
      this.navColor = this.themePrimaryColorGetter;
      this.showNavBar = true;
    } else {
      this.navColor = "transparent";
      this.showNavBar = false;
    }
  },
  onPullDownRefresh() {
    setTimeout(() => {
      common_vendor.index.stopPullDownRefresh();
    }, 100);
  },
  methods: {
    getData() {
      return __async(this, null, function* () {
        this.loading = true;
        yield pages_tabbar_home_extend.getWxNoticeList.call(this);
        yield pages_tabbar_home_extend.getWxRecommendList.call(this);
        yield pages_tabbar_home_extend.getWxNoticeList.call(this);
        this.loading = false;
        this.showNoticeList = this.noticeList;
        yield pages_tabbar_home_extend.getNewsTypeList.call(this);
        yield pages_tabbar_home_extend.getOrganizationType.call(this);
        yield pages_tabbar_home_extend.getOrganizationList.call(this);
        yield pages_tabbar_home_extend.getRecommendAreaTypeList.call(this);
        yield pages_tabbar_home_extend.getNewsRecommendList.call(this);
      });
    },
    clickSwiper(item) {
      console.log("点击轮播图", item);
      const { topic_id, small_type_id, url } = item;
      switch (small_type_id) {
        case 12:
          common_vendor.index.navigateTo({
            url: "/pages/activityDetail/activityDetail?activity_id=" + topic_id
          });
          break;
        case 26:
          common_vendor.index.navigateTo({
            url: "/pages/noticeDetail/noticeDetail?notice_id=" + topic_id
          });
          break;
        case 28:
          common_vendor.index.navigateTo({
            url: `/pages/newsDetail/newsDetail?news_id=${topic_id}&title=体育资讯`
          });
          break;
        case 120:
          if (url) {
            this.$openUrl(url);
          }
          return;
      }
    },
    clickInfoTab(item) {
      console.log("体育信息标签点击", item);
      this.informationTag = item.value;
      pages_tabbar_home_extend.getNewsRecommendList.call(this);
    },
    // 体育组织标签点击
    clickOrgTab(item) {
      this.organizationSiteType = item.value;
      pages_tabbar_home_extend.getOrganizationList.call(this);
    },
    //滚动卡片点击
    clickScrollCardItem(item) {
      common_vendor.index.navigateTo({
        url: `/pages/siteDetail/siteDetail?member_units_id=${item.member_units_id}`
      });
    },
    // async goToMyCoupon() {
    // 	let flag = await getApp().judgeIsAuth();
    // 	if (!flag) {
    // 		return;
    // 	}
    // 	let params = {
    // 		page: 1,
    // 		discount_activity_id: 1,
    // 		size: 10
    // 	};
    // 	let res = await getWxStadiumList(params);
    // 	let stadiumList = [];
    // 	if (res.code === 200) {
    // 		stadiumList = res.data.list;
    // 	}
    // 	let baseUrl = "myCouponList";
    // 	getWxMemberDateAuth({}).then(res => {
    // 		if (res.code === 200) {
    // 			let obj = {
    // 				stadium_id: stadiumList.length > 0 ? stadiumList[0].service_related_id : "11204", //不填取不了场馆值
    // 				authdata: res.data,
    // 				redireacturl: "",
    // 				specificEnv: "yuncheng"
    // 			};
    // 			let query = handleUrlQuery(obj);
    // 			let href = `${config.ppos_wx}/${baseUrl}?${query}`;
    // 			this.$openUrl(href);
    // 		}
    // 	});
    // },
    //点击更多
    clickMore() {
      return __async(this, null, function* () {
        let flag = yield getApp().judgeIsAuth();
        if (!flag) {
          return;
        }
        common_vendor.index.navigateTo({
          url: "/pages/more/more"
        });
      });
    },
    // 标签点击
    clickProject(item) {
      return __async(this, null, function* () {
        console.log(item);
        if (!item.path) {
          this.$showToastNone("正在开1发中");
          return;
        }
        if (item.auth) {
          let flag = yield getApp().judgeIsAuth();
          if (!flag) {
            return;
          }
        }
        if (item.path.indexOf("feedBackInfo") !== -1) {
          this.$refs["feedBackPop"].open();
          return;
        }
        if (item.path.indexOf("http") !== -1) {
          this.$openUrl(item.path);
          return;
        }
        if (item.path.indexOf("miniprogram") !== -1) {
          let { appUrl, appId } = item.query;
          common_vendor.index.navigateToMiniProgram({
            appId,
            path: appUrl,
            success(res) {
              console.log(res);
            },
            fail(err) {
              console.log(err);
            }
          });
          return;
        }
        if (item.path.indexOf("tabBar") !== -1 || item.isTabbar) {
          common_vendor.index.switchTab({
            url: item.path
          });
          return;
        }
        common_vendor.index.navigateTo({
          url: item.path
        });
      });
    },
    // 公告跳转
    clickNoticeItem(item) {
      if (item.url) {
        this.$openUrl(item.url);
        return;
      }
      common_vendor.index.navigateTo({
        url: "/pages/noticeDetail/noticeDetail?notice_id=" + item.notice_id
      });
    },
    //公告图片跳转
    clickNoticeIcon(item) {
      common_vendor.index.navigateTo({
        url: "/pages/notice/notice"
      });
    },
    // 体育组织点击更得
    clickOrganMore() {
      common_vendor.index.switchTab({
        url: "/pages/associationList/associationList"
      });
    },
    //体育新闻点击更多
    clickNewsMore() {
      common_vendor.index.navigateTo({
        url: "/pages/newsList/newsList?unique_code=5&title=体育资讯"
      });
    },
    clickNews(item) {
      let { url, news_id } = item;
      if (url) {
        common_vendor.index.navigateTo({
          url: "/pages/webView/webView?url=" + encodeURIComponent(url)
        });
        return;
      }
      common_vendor.index.navigateTo({
        url: `/pages/newsDetail/newsDetail?news_id=${news_id}&title=体育资讯`
      });
    }
  }
};
if (!Array) {
  const _component_pageLoading = common_vendor.resolveComponent("pageLoading");
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_swiperList = common_vendor.resolveComponent("swiperList");
  const _component_notice = common_vendor.resolveComponent("notice");
  const _component_showCard = common_vendor.resolveComponent("showCard");
  const _component_commonTitle = common_vendor.resolveComponent("commonTitle");
  const _component_xCard = common_vendor.resolveComponent("xCard");
  const _component_tabs = common_vendor.resolveComponent("tabs");
  const _component_newsListItem = common_vendor.resolveComponent("newsListItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_card = common_vendor.resolveComponent("card");
  const _component_scrollX = common_vendor.resolveComponent("scrollX");
  const _component_noticeDialog = common_vendor.resolveComponent("noticeDialog");
  const _component_layout_tabbar_uni = common_vendor.resolveComponent("layout-tabbar-uni");
  (_component_pageLoading + _component_navBar + _component_swiperList + _component_notice + _component_showCard + _component_commonTitle + _component_xCard + _component_tabs + _component_newsListItem + _component_empty + _easycom_uni_icons2 + _component_card + _component_scrollX + _component_noticeDialog + _component_layout_tabbar_uni)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.loading
  }, $data.loading ? {} : common_vendor.e({
    b: $data.showNavBar,
    c: common_vendor.p({
      navColor: $data.navColor,
      title: $options.appName
    }),
    d: common_vendor.o($options.clickSwiper),
    e: common_vendor.p({
      list: $data.swiperList
    }),
    f: common_vendor.o($options.clickNoticeItem),
    g: common_vendor.o($options.clickNoticeIcon),
    h: common_vendor.p({
      list: $data.noticeList
    }),
    i: common_vendor.o($options.clickProject),
    j: common_vendor.o($options.clickMore),
    k: common_vendor.p({
      title: "推荐专区",
      type: "2",
      showMore: false
    }),
    l: common_vendor.o($options.clickProject),
    m: common_vendor.p({
      data: $data.recommendAreaTypeList
    }),
    n: common_vendor.o($options.clickNewsMore),
    o: common_vendor.p({
      title: "最新资讯",
      type: "1",
      showMore: true
    }),
    p: common_vendor.o($options.clickInfoTab),
    q: common_vendor.p({
      list: $data.informationTagList
    }),
    r: common_vendor.f($data.informationList, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.clickNews(item), index),
        b: "6a61e80b-11-" + i0 + ",6a61e80b-9",
        c: common_vendor.p({
          type: index == 0 ? "top" : "normal",
          info: item
        }),
        d: index
      };
    }),
    s: $data.informationList.length == 0,
    t: common_vendor.p({
      marginTop: 0,
      width: 100,
      height: 100
    }),
    v: common_vendor.p({
      type: "forward",
      color: _ctx.themePrimaryColorGetter,
      size: "18"
    }),
    w: common_vendor.o((...args) => $options.clickNewsMore && $options.clickNewsMore(...args)),
    x: common_vendor.p({
      customStyle: $options.customStyleA,
      topBg: $data.topBg.newUrl
    }),
    y: common_vendor.o($options.clickOrganMore),
    z: common_vendor.p({
      title: "会员单位",
      type: "3",
      showMore: true
    }),
    A: $data.organizationList.length !== 0
  }, $data.organizationList.length !== 0 ? {
    B: common_vendor.o($options.clickOrgTab),
    C: common_vendor.p({
      list: []
    }),
    D: common_vendor.o($options.clickScrollCardItem),
    E: common_vendor.p({
      list: $data.organizationList
    }),
    F: common_vendor.p({
      title: "体育组织",
      topBg: $data.topBg.associationUrl
    })
  } : {}, {
    G: $data.organizationList.length == 0,
    H: common_vendor.p({
      marginTop: 0,
      width: 100,
      height: 100
    })
  }), {
    I: common_vendor.o($options.clickNoticeItem),
    J: common_vendor.p({
      list: $data.showNoticeList
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6a61e80b"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
