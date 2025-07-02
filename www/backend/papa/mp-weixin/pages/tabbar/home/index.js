"use strict";
const common_vendor = require("../../../common/vendor.js");
const pages_tabbar_home_extend = require("./extend.js");
const core_shareMixins = require("../../../core/shareMixins.js");
const utils_token = require("../../../utils/token.js");
const utils_util = require("../../../utils/util.js");
require("../../../apis/index.js");
require("../../../utils/http.js");
require("../../../core/config.js");
require("../../../utils/storageUtil.js");
require("../../../utils/qqmap-wx-jssdk.js");
const indexTopSearch = () => "../../../components/indexTopSearch.js";
const scrollOne = () => "../../../components/scrollOne.js";
const noticeBar = () => "../../../components/noticeBar.js";
const adSpace = () => "../../../components/adSpace.js";
const funBtnPanelOne = () => "../../../components/funBtnPanelOne.js";
const coupon = () => "../../../components/coupon.js";
const scrollList = () => "../../../components/scrollList.js";
const newsList = () => "../../../components/newsList.js";
const tabTitle = () => "../../../components/tabTitle.js";
const bottomOne = () => "../../../components/bottomOne.js";
const _sfc_main = {
  components: {
    scrollOne,
    noticeBar,
    adSpace,
    funBtnPanelOne,
    coupon,
    scrollList,
    newsList,
    tabTitle,
    bottomOne,
    indexTopSearch
  },
  mixins: [core_shareMixins.shareMixins],
  data() {
    return {
      swiperList: [],
      //轮播图
      noticeList: [],
      //公告
      funBtnPanelList: [],
      //金刚区功能按钮
      newsList: [],
      //新闻列表
      stadiumRecommendList: [],
      //热门场馆推荐
      city: "",
      city_id: "0"
    };
  },
  onShow() {
    let app = getApp();
    let city = app.globalData.city;
    let city_id = app.globalData.city_id;
    if (this.city_id != city_id) {
      console.log(city_id);
      console.log("----------------------城市id变化");
      this.getData();
    }
    this.city = city;
    this.city_id = city_id;
  },
  onLoad() {
    getApp().watchGlobalData("city", "index", this.watchCity.bind(this));
    this.getLocation();
  },
  methods: {
    watchCity(val) {
      this.city = val;
    },
    getData() {
      pages_tabbar_home_extend.getWxRecommendList.call(this);
      pages_tabbar_home_extend.getWxNoticeList.call(this);
      pages_tabbar_home_extend.getFfunBtnPanelList.call(this);
      pages_tabbar_home_extend.getWxNewsList.call(this);
      pages_tabbar_home_extend.getWxStadiumRecommendList.call(this);
    },
    getLocation() {
      let _this = this;
      const app = getApp();
      try {
        common_vendor.index.getLocation({
          type: "wgs84",
          success(res) {
            const latitude = res.latitude;
            const longitude = res.longitude;
            app.globalData.latitude = latitude;
            app.globalData.longitude = longitude;
            app.globalData.user_latitude = latitude;
            app.globalData.user_longitude = longitude;
            app.globalData.is_get_location = true;
            let oldCityId = app.globalData.city_id;
            let oldCity = app.globalData.city;
            let isShandongPlatform = app.globalData.isShandongPlatform;
            utils_util.reverseGeocoder(latitude, longitude).then((cres) => {
              if (isShandongPlatform && cres.province !== "山东省") {
                if (oldCityId == 0) {
                  _this.setUserInfoMethod(latitude, longitude, 0, "山东省");
                }
                _this.getData();
                return;
              }
              if (oldCityId != 0 && oldCityId != cres.city_id) {
                let message = `当前定位是${oldCity}，是否切换到${cres.city_name}`;
                common_vendor.index.showModal({
                  content: message,
                  success: function(res2) {
                    if (res2.confirm) {
                      _this.setUserInfoMethod(latitude, longitude, cres.city_id, cres.city_name);
                      _this.getData();
                    } else if (res2.cancel) {
                    }
                  }
                });
              } else {
                console.log("--------------------------------不询问");
                _this.setUserInfoMethod(latitude, longitude, cres.city_id, cres.city_name);
                if (oldCityId == 0) {
                  _this.getData();
                }
              }
            }).catch((err) => {
              _this.getData();
            });
          },
          fail(error) {
            console.log("首页wx.getFuzzyLocation失败,", error);
            if (app.globalData.latitude && app.globalData.longitude) {
              _this.getData();
            } else {
              common_vendor.index.getSetting({
                success(res) {
                  if (getApp().globalData.isShandongPlatform) {
                    _this.setUserInfoMethod(0, 0, 0, "山东省");
                  } else {
                    _this.setUserInfoMethod(0, 0, 0, "未知");
                  }
                  if ("undefined" == res.authSetting["scope.userLocation"] || res.authSetting["scope.userLocation"]) {
                    console.log("系统没有给定位权限=====================", res);
                    _this.getData();
                  } else {
                    console.log("用户拒绝了授权=====================", res);
                    _this.getData();
                  }
                }
              });
            }
          }
        });
      } catch (error) {
        console.log("定位授权", error);
        _this.getData();
      }
    },
    setUserInfoMethod(latitude, longitude, city_id, city_name) {
      utils_token.getUserInfoKey().then((res) => {
        let params = {
          lat: latitude,
          lng: longitude,
          city_id,
          city_name
        };
        utils_token.setUserInfoKey(params);
      });
      this.city = city_name;
      getApp().globalData.city_id = city_id;
      getApp().globalData.city = city_name;
    },
    clickSwiper(item) {
      console.log("点击轮播图", item);
      const {
        topic_id,
        small_type_id,
        url
      } = item;
      switch (small_type_id) {
        case 12:
          common_vendor.index.navigateTo({
            url: "/pages/activityDetail/activityDetail?activity_id=" + topic_id
          });
          break;
        case 26:
          common_vendor.index.navigateTo({
            url: "/pages/notice/notice?notice_id=" + topic_id
          });
          break;
        case 28:
          common_vendor.index.navigateTo({
            url: "/pages/newsDetail/newsDetail?news_id=" + topic_id
          });
          break;
        case 120:
          if (url) {
            this.$openUrl(url);
          }
          return;
      }
    },
    clickNoticeItem(item) {
      console.log("点击公告", item);
      common_vendor.index.navigateTo({
        url: "/pages/notice/notice?notice_id=" + item.notice_id
      });
    },
    clickNoticeIcon(item) {
      console.log("点击公告图标1", item);
      common_vendor.index.navigateTo({
        url: "/pages/noticeList/noticeList"
      });
    },
    clickFunBtn(item) {
      console.log("点击金刚区按钮", item);
      if (item.page) {
        if (item.is_tabbar) {
          common_vendor.index.switchTab({
            url: item.page
          });
        } else {
          common_vendor.index.navigateTo({
            url: item.page
          });
        }
      } else {
        this.$showToastNone("正在开发");
      }
    },
    clickActivityMap() {
      common_vendor.index.navigateTo({
        url: "/pages/map/map"
      });
    },
    clickNewsItem(item) {
      let {
        url,
        news_id
      } = item;
      if (url) {
        this.$openUrl(url);
        return;
      }
      common_vendor.index.navigateTo({
        url: "/pages/newsDetail/newsDetail?news_id=" + news_id
      });
    },
    clickNewsMore() {
      common_vendor.index.navigateTo({
        url: "/pages/newsList/newsList"
      });
    },
    clickStadiumItem(item) {
      console.log("item", item);
      let {
        stadium_id
      } = item;
      common_vendor.index.navigateTo({
        url: "/pages/stadiumDetail/stadiumDetail?stadium_id=" + stadium_id
      });
    },
    clickStadiumMore() {
      common_vendor.index.switchTab({
        url: "/pages/tabbar/stadium/index"
      });
    }
  }
};
if (!Array) {
  const _component_index_top_search = common_vendor.resolveComponent("index-top-search");
  const _component_scroll_one = common_vendor.resolveComponent("scroll-one");
  const _component_notice_bar = common_vendor.resolveComponent("notice-bar");
  const _component_coupon = common_vendor.resolveComponent("coupon");
  const _component_fun_btn_panel_one = common_vendor.resolveComponent("fun-btn-panel-one");
  const _component_scroll_list = common_vendor.resolveComponent("scroll-list");
  const _component_news_list = common_vendor.resolveComponent("news-list");
  const _component_bottom_one = common_vendor.resolveComponent("bottom-one");
  (_component_index_top_search + _component_scroll_one + _component_notice_bar + _component_coupon + _component_fun_btn_panel_one + _component_scroll_list + _component_news_list + _component_bottom_one)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      city: $data.city
    }),
    b: common_vendor.o($options.clickSwiper),
    c: common_vendor.p({
      list: $data.swiperList
    }),
    d: common_vendor.o($options.clickNoticeItem),
    e: common_vendor.o($options.clickNoticeIcon),
    f: common_vendor.p({
      list: $data.noticeList
    }),
    g: common_vendor.o($options.clickActivityMap),
    h: common_vendor.o($options.clickFunBtn),
    i: common_vendor.p({
      list: $data.funBtnPanelList
    }),
    j: common_vendor.o($options.clickStadiumItem),
    k: common_vendor.o($options.clickStadiumMore),
    l: common_vendor.p({
      title: "热门场馆",
      showMore: true,
      list: $data.stadiumRecommendList
    }),
    m: common_vendor.o($options.clickNewsItem),
    n: common_vendor.o($options.clickNewsMore),
    o: common_vendor.p({
      list: $data.newsList
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gxm/uniapp-shandong/pages/tabbar/home/index.vue"]]);
wx.createPage(MiniProgramPage);
