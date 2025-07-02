"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_city = require("../../utils/city.js");
const utils_buttonClick = require("../../utils/buttonClick.js");
const utils_qqmapWxJssdk = require("../../utils/qqmap-wx-jssdk.js");
const core_config = require("../../core/config.js");
const utils_token = require("../../utils/token.js");
const pages_areaSearchNew_handleCityData = require("./handleCityData.js");
require("../../utils/storageUtil.js");
const app = getApp();
var qqmapsdk;
const _sfc_main = {
  data() {
    return {
      //城市下拉
      cityName: "正在定位",
      cityData: {},
      hotCityData: [],
      _py: ["hot", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
      tipHidden: true,
      showPy: "★",
      letterCitiesHeight: [],
      statusBarHeight: common_vendor.index.getSystemInfoSync().statusBarHeight,
      scrollIntoViewLetterLock: "",
      scrollIntoViewLetter: "",
      // 搜索参数
      inputValue: "",
      searchResponse: [],
      page: "index",
      scrollTopId: ""
    };
  },
  async onLoad() {
    let app2 = getApp();
    let res = await app2.getCompanyArea();
    let cityData = pages_areaSearchNew_handleCityData.handleCityData(res);
    qqmapsdk = new utils_qqmapWxJssdk.QQMapWX({
      key: core_config.config.qqmapKey
    });
    this.cityData = cityData.all;
    this.cityName = app2.globalData.city;
    this.handleCalculateHeight();
  },
  methods: {
    // 计算每一项的高度
    handleCalculateHeight() {
      var that = this;
      common_vendor.index.createSelectorQuery().in(this).selectAll(".city-box").boundingClientRect((e) => {
        that.letterCitiesHeight = e;
      }).exec();
    },
    handleListenerScroll(e) {
      let scrollTop = e.detail.scrollTop;
      let letterCitiesHeight = this.letterCitiesHeight;
      let statusBarHeight = this.statusBarHeight;
      try {
        for (let i = 0; i < letterCitiesHeight.length; i++) {
          const item = letterCitiesHeight[i];
          if (scrollTop >= item.top - (statusBarHeight + 50) && scrollTop <= item.bottom) {
            if (this.scrollIntoViewLetterLock) {
              this.scrollIntoViewLetter = this.scrollIntoViewLetterLock;
              setTimeout(() => {
                this.scrollIntoViewLetterLock = "";
              }, 300);
              break;
            } else {
              this.scrollIntoViewLetter = item;
              break;
            }
          }
        }
      } catch (t) {
        console.log(t);
      }
    },
    //选择城市
    selectCity(item) {
      var dataset = item;
      console.log(dataset);
      let city_id = String(dataset.id).slice(0, 4);
      app.globalData.city = dataset.fullname;
      app.globalData.latitude = dataset.lat;
      app.globalData.longitude = dataset.lng;
      app.globalData.city_id = city_id;
      app.globalData.is_change_city = true;
      let addressInfo = {
        lat: dataset.lat,
        lng: dataset.lng,
        city_name: dataset.fullname,
        city_id,
        date: (/* @__PURE__ */ new Date()).getTime(),
        is_user_select: true
      };
      utils_token.setUserInfoKey(addressInfo, true);
      app.globalData.eventRefresh = true;
      app.globalData.stadiumRefresh = true;
      setTimeout(() => {
        common_vendor.index.navigateBack({
          delta: 1
        });
      }, 10);
    },
    //触发全部开始选择
    tStart() {
      this.tipHidden = false;
    },
    //滑动选择城市
    tMove(e) {
      var y = e.touches[0].clientY, offsettop = e.currentTarget.offsetTop;
      if (y > offsettop) {
        var num = parseInt((y - offsettop) / 12);
        if (num > this._py.length - 1) {
          num = this._py.length - 1;
        }
        this.showPy = this._py[num];
      }
    },
    //触发结束选择
    tEnd() {
      this.tipHidden = true;
      this.scrollTopId = this.showPy;
    },
    //获取文字信息
    getPy(e) {
      this.tipHidden = false;
      this.showPy = e;
      this.scrollIntoViewLetterLock = e;
    },
    setPy(e) {
      this.tipHidden = true;
      this.scrollTopId = this.showPy;
      this.scrollIntoViewLetter = this.showPy;
    },
    // 搜索框input  focus事件
    handleInput(e) {
      let value = e;
      if (!value) {
        this.searchResponse = [];
        return;
      }
      utils_buttonClick.debounce(this.getSearchList, 300)(value);
    },
    // 根据关键字筛选出匹配的城市列表
    getSearchList(arg) {
      let keyword = arg.length > 0 ? arg[0] : "";
      if (!keyword) {
        return;
      }
      let cityData = utils_city.city.all;
      let list = [];
      for (const k in cityData) {
        let item_list = cityData[k];
        item_list.map((e) => {
          if (e.fullname.indexOf(keyword) != -1 || e.fullname.indexOf(keyword.name) != -1) {
            list.push(e);
          }
        });
      }
      this.searchResponse = list;
      return list;
    },
    getLocation() {
      let _this = this;
      const app2 = getApp();
      try {
        common_vendor.index.getLocation({
          type: "wgs84",
          success(res) {
            const latitude = res.latitude;
            const longitude = res.longitude;
            app2.globalData.latitude = latitude;
            app2.globalData.longitude = longitude;
            _this.getLocal(latitude, longitude);
          },
          fail(error) {
            console.log("首页wx.getFuzzyLocation失败,", error);
            if (app2.globalData.latitude && app2.globalData.longitude) {
              _this.getLocal(app2.globalData.latitude, app2.globalData.longitude);
            } else {
              common_vendor.index.getSetting({
                success(res) {
                  if ("undefined" == res.authSetting["scope.userLocation"] || res.authSetting["scope.userLocation"]) {
                    console.log("系统没有给定位权限=====================", res);
                    _this.getDefaultLocation();
                  } else {
                    console.log("用户拒绝了授权=====================", res);
                    _this.getDefaultLocation();
                  }
                }
              });
            }
          }
        });
      } catch (error) {
        console.log("定位授权", error);
      }
    },
    getDefaultLocation() {
    },
    getLocal(latitude, longitude) {
      let _this = this;
      if (qqmapsdk) {
        qqmapsdk.reverseGeocoder({
          location: {
            latitude,
            longitude
          },
          success(res) {
            let app2 = getApp();
            let city = res.result.ad_info.city;
            let city_code = res.result.ad_info.city_code;
            city_code = String(city_code).slice(3, 7);
            app2.globalData.city = city;
            app2.globalData.city_id = city_code;
            let addressInfo = {
              lat: latitude,
              lng: longitude,
              city,
              city_id: city_code,
              date: (/* @__PURE__ */ new Date()).getTime(),
              is_user_select: false
            };
            utils_token.setUserInfoKey(addressInfo, true);
            _this.cityName = city;
            setTimeout(() => {
              common_vendor.index.navigateBack({
                delta: 1
              });
            }, 500);
          },
          fail(error) {
            console.error(error);
          }
        });
      }
    },
    resetLocation: utils_buttonClick.debounce(function() {
      getApp();
      this.cityName = "正在定位";
      this.getLocation();
    }, 500)
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _component_van_icon = common_vendor.resolveComponent("van-icon");
  (_easycom_uni_search_bar2 + _component_van_icon)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.handleInput),
    b: common_vendor.o(($event) => $data.inputValue = $event),
    c: common_vendor.p({
      placeholder: "请输入城市名",
      modelValue: $data.inputValue
    }),
    d: $data.inputValue
  }, $data.inputValue ? {
    e: common_vendor.f($data.searchResponse, (item, index, i0) => {
      return {
        a: common_vendor.t(item.fullname),
        b: index,
        c: common_vendor.o(($event) => $options.selectCity(item), index)
      };
    })
  } : {}, {
    f: !$data.inputValue
  }, !$data.inputValue ? {
    g: common_vendor.p({
      name: "aim",
      size: "32rpx",
      color: "#999999"
    }),
    h: common_vendor.o((...args) => $options.resetLocation && $options.resetLocation(...args)),
    i: common_vendor.p({
      name: "guide-o",
      color: "#FF7200",
      size: "28rpx"
    }),
    j: common_vendor.t($data.cityName)
  } : {}, {
    k: !$data.inputValue
  }, !$data.inputValue ? {
    l: common_vendor.f($data.cityData, (group, idx, i0) => {
      return {
        a: common_vendor.t(idx),
        b: idx + "_1",
        c: common_vendor.f(group, (item, key, i1) => {
          return {
            a: common_vendor.t(item.fullname),
            b: key,
            c: common_vendor.o(($event) => $options.selectCity(item), key)
          };
        }),
        d: idx,
        e: idx
      };
    })
  } : {}, {
    m: $data.scrollTopId,
    n: common_vendor.o((...args) => $options.handleListenerScroll && $options.handleListenerScroll(...args)),
    o: !$data.inputValue
  }, !$data.inputValue ? {
    p: common_vendor.f($data._py, (item, key, i0) => {
      return {
        a: common_vendor.t(item == "hot" ? "★" : item),
        b: key,
        c: common_vendor.o(($event) => $options.getPy(item), key),
        d: common_vendor.o(($event) => $options.setPy(item), key),
        e: common_vendor.n($data.scrollIntoViewLetter === item ? "city-py-active" : "")
      };
    }),
    q: common_vendor.o((...args) => $options.tStart && $options.tStart(...args)),
    r: common_vendor.o((...args) => $options.tEnd && $options.tEnd(...args)),
    s: common_vendor.o((...args) => $options.tMove && $options.tMove(...args))
  } : {}, {
    t: !$data.tipHidden
  }, !$data.tipHidden ? {
    v: common_vendor.t($data.showPy == "hot" ? "★" : $data.showPy)
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7cd879dd"], ["__file", "E:/gxm/uniapp-shandong/pages/areaSearchNew/areaSearchNew.vue"]]);
wx.createPage(MiniProgramPage);
