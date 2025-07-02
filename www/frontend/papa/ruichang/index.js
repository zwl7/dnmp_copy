"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
const common_vendor = require("./common/vendor.js");
const apis_instructorSite_index = require("./apis/instructorSite/index.js");
const utils_mapUtils = require("./utils/mapUtils.js");
const common_assets = require("./common/assets.js");
const utils_index = require("./utils/index.js");
const mixins_shareMixins = require("./mixins/shareMixins.js");
const mapTouchTitleVue = () => "./pages/instructorSite/components/mapTouchTitle.js";
const instructorSiteItem = () => "./components/InstructorSiteItem/index.js";
const mapTouch = () => "./components/mapTouch.js";
const showMapInfoPopup = () => "./pages/instructorSite/components/showMapInfoPopup.js";
const navBar = () => "./components/navBar/index.js";
const scrollTabX = () => "./pages/instructorSite/components/scrollTabX.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  components: {
    showMapInfoPopup,
    mapTouch,
    mapTouchTitleVue,
    instructorSiteItem,
    navBar,
    scrollTabX
  },
  data() {
    return {
      navColor: "transparent",
      currentGatherTypeId: 2,
      mapAll: common_assets.mapAll,
      tabList: [
        {
          name: "指导员站点",
          img: "https://api.wesais.com/images/924/20250520/5494d965b2aa055d1aa2a986845800cd.png",
          gather_type_id: ""
        },
        {
          name: "体育场馆",
          img: "https://api.wesais.com/images/924/20250520/2b58e3ea71e86d1003b37e849792a49a.png"
        },
        {
          name: "体育组织",
          img: "https://api.wesais.com/images/924/20250520/0fca8914a4cca54947a313410d6bf9ba.png"
        }
      ],
      longitude: 115.681239,
      // 经度
      latitude: 29.67599,
      // 纬度
      minScale: 8,
      maxScale: 20,
      scale: 16,
      oldClientY: 0,
      height: 200,
      overlooking: false,
      //是否开启俯视
      skew: 0,
      sizer: {
        street_id: "",
        gather_type: "",
        search_tag: "",
        community_ids: "",
        keyword: ""
      },
      form: {
        page: 1,
        size: 999
      },
      center: {
        longitude: 115.681239,
        // 经度
        latitude: 29.67599
        // 纬度
      },
      drag_location: {
        longitude: 115.681239,
        // 经度
        latitude: 29.67599
        // 纬度
      },
      keyword: "",
      mapList: [],
      siteTotal: 0,
      mapTouchTitle: "站点",
      _mapContext: null,
      intervalId: "",
      showBack: false,
      isNotHuBei: false,
      oldScale: "16",
      radium: 0,
      markersList: [],
      siteInfoList: [],
      mapInfo: {},
      showMapFlag: false
    };
  },
  created(options) {
    return __async(this, null, function* () {
      yield this.setCenterLocation();
      this.showMapFlag = true;
      const app = getApp();
      let _this = this;
      this._mapContext = common_vendor.index.createMapContext("map", this);
      this._mapContext.getCenterLocation({
        success: function(res) {
          console.log("获取当前经纬度地址", res);
          if (res.latitude == 0 || res.longitude == 0) {
            _this.latitude = _this.center.latitude;
            _this.longitude = _this.center.longitude;
            setTimeout(() => {
              _this.setMapCener(_this.latitude, _this.longitude);
            }, 300);
          }
        }
      });
      this._mapContext = common_vendor.index.createMapContext("map", this);
      console.log("user_latitude", app.globalData.user_latitude);
      if (app.globalData.user_latitude && app.globalData.user_longitude) {
        let user_longitude = app.globalData.user_longitude;
        let user_latitude = app.globalData.user_latitude;
        this.drag_location.latitude = user_latitude;
        this.drag_location.longitude = user_longitude;
      }
      this._mapContext.initMarkerCluster({
        enableDefaultStyle: false,
        zoomOnClick: true,
        gridSize: 60,
        complete(res) {
        }
      });
      this._mapContext.on("markerClusterCreate", (res) => {
        const clusters = res.clusters;
        const markers = clusters.map((cluster) => {
          const { center, clusterId, markerIds } = cluster;
          return __spreadProps(__spreadValues({}, center), {
            width: 0,
            height: 0,
            clusterId,
            // 必须
            label: {
              content: markerIds.length + "",
              fontSize: 20,
              width: 60,
              height: 60,
              bgColor: "#e05830",
              color: "#fff",
              borderRadius: 30,
              textAlign: "center",
              anchorX: 0,
              anchorY: -30
            }
          });
        });
        this._mapContext.addMarkers({
          markers,
          clear: false,
          complete(res2) {
            console.log("addMarkers", res2);
          }
        });
      });
      this.getMapScale();
      yield this.getMaqList(this.center.latitude, this.center.longitude);
    });
  },
  destroyed() {
    common_vendor.index.removeStorageSync("currentGatherType");
  },
  methods: {
    setCenterLocation() {
      return new Promise((resolve) => {
        let { lat, lng } = utils_index.getMapLocation();
        console.log("lat", lat, lng);
        {
          this.latitude = lat;
          this.longitude = lng;
          this.center = {
            latitude: lat,
            longitude: lng
          };
          this.drag_location = {
            latitude: lat,
            longitude: lng
          };
        }
        setTimeout(() => {
          resolve(true);
        }, 20);
      });
    },
    // 获取列表数据
    getMaqList(latitude, longitude) {
      if (!latitude || !longitude) {
        latitude = this.drag_location.latitude;
        longitude = this.drag_location.longitude;
      }
      return new Promise((resolve) => __async(this, null, function* () {
        let params = __spreadProps(__spreadValues({}, this.form), {
          longitude,
          latitude,
          page: 1,
          size: 999
        });
        let fun = apis_instructorSite_index.getInstructorSiteList;
        this.$nextTick(() => {
          this.siteTotal = 0;
          this.mapList = [];
          this.renderMarker(this.mapList);
        });
        const res = yield fun(params);
        if (res.code !== 200) {
          this.$toast(res.message);
        }
        const data = res.data.listData ? res.data.listData : res.data.list;
        data.map((e) => {
          e.icon = common_assets.mapAll;
        });
        this.$nextTick(() => {
          this.siteTotal = res.data.total ? res.data.total : res.data.count;
          this.mapList = data;
          this.renderMarker(this.mapList);
        });
        resolve(1);
      }));
    },
    renderMarker(markers) {
      if (!this._mapContext) {
        console.error("_mapContext 获取失败");
        return;
      }
      if (markers.length === 0)
        ;
      const showMarkerList = [];
      markers.length;
      markers.forEach((item, index) => {
        let obj = {
          id: index + 1,
          iconPath: item.icon,
          width: 33,
          height: 40,
          joinCluster: false,
          latitude: parseFloat(item.lat),
          longitude: parseFloat(item.lng),
          level: 1,
          instructor_site_id: item.instructor_site_id
        };
        showMarkerList.push(obj);
      });
      let _this = this;
      console.log("showMarkerList", showMarkerList);
      this._mapContext.addMarkers({
        markers: showMarkerList,
        clear: true,
        complete(res) {
          _this.markersList = showMarkerList;
          _this.siteInfoList = markers;
        },
        fail(error) {
          console.log("error", error);
        },
        success(res) {
          console.log("res", res);
        }
      });
    },
    clickMarker(e) {
      let markerId = e.markerId;
      let item = this.markersList[markerId - 1];
      let _this = this;
      if (item.level === 3) {
        this._mapContext.moveToLocation({
          longitude: item.longitude,
          latitude: item.latitude,
          success(res) {
            _this.scale = 12;
            _this.drag_location.latitude = _this.center.latitude;
            _this.drag_location.longitude = _this.center.longitude;
          }
        });
      }
      if (item.level === 4) {
        this._mapContext.moveToLocation({
          longitude: item.longitude,
          latitude: item.latitude,
          success(res) {
            _this.scale = 14;
            _this.drag_location.latitude = _this.center.latitude;
            _this.drag_location.longitude = _this.center.longitude;
          }
        });
      }
      if (item.level === 1) {
        let siteInfo = this.siteInfoList[markerId - 1];
        siteInfo.showImage = siteInfo.img;
        _this.mapInfo = siteInfo;
        console.log("🚀 ~ clickMarker ~ siteInfo:", siteInfo);
        _this.$nextTick(() => {
          _this.$refs["showMapInfoPopupRef"].open();
        });
      }
    },
    getMapScale() {
      if (!this._mapContext) {
        console.error("_mapContext 获取失败");
        return;
      }
      this.intervalId = setInterval(() => {
        this._mapContext.getScale({
          success: (res) => {
            if (this.oldScale != res.scale) {
              this.oldScale = res.scale;
            }
          }
        });
      }, 1e3);
    },
    regionchange(res) {
      if (res.type === "end") {
        let new_latitude = res.target.centerLocation.latitude;
        let new_longitude = res.target.centerLocation.longitude;
        let distance = utils_mapUtils.getShortDistanceBase(
          new_latitude,
          new_longitude,
          this.drag_location.latitude,
          this.drag_location.longitude
        );
        this.drag_location = {
          latitude: new_latitude,
          longitude: new_longitude
        };
        if (distance > 100) {
          this.oldScale;
          this.getMaqList(new_latitude, new_longitude);
        }
      }
    },
    // 点击右边  1 图层切换  2 当前定位  3 列表
    handleRight(type) {
      if (type == 1) {
        this.overlooking = !this.overlooking;
        this.skew = this.overlooking ? 90 : 0;
      }
      if (type == 2) {
        let app = getApp();
        if (app.globalData.is_get_location && app.globalData.user_latitude && app.globalData.user_longitude) {
          let user_longitude = app.globalData.user_longitude;
          let user_latitude = app.globalData.user_latitude;
          this.latitude = user_latitude;
          this.longitude = user_longitude;
          this.setMapCener(user_latitude, user_longitude);
          if (this.isNotHuBei) {
            this.showBack = true;
          }
          console.log("showBack", this.showBack);
        } else {
          app.getLocation();
        }
      }
      if (type == 3) {
        common_vendor.index.navigateTo({ url: "/pages-sub/instructorSite/index" });
      }
    },
    setMapCener(latitude, longitude) {
      if (!this._mapContext) {
        console.error("_mapContext 获取失败");
        return;
      }
      let _this = this;
      this._mapContext.moveToLocation({
        longitude,
        latitude,
        success(res) {
          console.log("设置中心点", res);
          _this.drag_location.latitude = latitude;
          _this.drag_location.longitude = longitude;
        },
        fail(err) {
          console.log("设置中心点err", err);
        }
      });
    },
    // 回到湖北
    handleBack() {
      this.setMapCener(this.center.latitude, this.center.longitude);
      if (this.showBack) {
        this.showBack = false;
      }
    },
    getSearchData(data) {
      this.getMaqList();
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_scrollTabX = common_vendor.resolveComponent("scrollTabX");
  const _component_show_map_info_popup = common_vendor.resolveComponent("show-map-info-popup");
  const _component_mapTouchTitleVue = common_vendor.resolveComponent("mapTouchTitleVue");
  const _component_instructorSiteItem = common_vendor.resolveComponent("instructorSiteItem");
  const _component_empty = common_vendor.resolveComponent("empty");
  const _component_mapTouch = common_vendor.resolveComponent("mapTouch");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_scrollTabX + _component_show_map_info_popup + _component_mapTouchTitleVue + _component_instructorSiteItem + _component_empty + _component_mapTouch + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      navColor: $data.navColor,
      isFixed: false,
      titleColor: "#323233",
      title: "健身地图",
      showBack: true,
      searchTitle: ""
    }),
    b: common_vendor.o(_ctx.changeTab),
    c: common_vendor.p({
      list: $data.tabList
    }),
    d: $data.showMapFlag
  }, $data.showMapFlag ? {
    e: common_assets._imports_0,
    f: common_vendor.o(($event) => $options.handleRight(1)),
    g: common_assets._imports_2,
    h: common_vendor.o(($event) => $options.handleRight(3)),
    i: $data.latitude,
    j: $data.longitude,
    k: $data.scale,
    l: $data.overlooking,
    m: $data.skew,
    n: common_vendor.o((...args) => $options.clickMarker && $options.clickMarker(...args)),
    o: common_vendor.o((...args) => $options.clickMarker && $options.clickMarker(...args))
  } : {}, {
    p: common_vendor.sr("showMapInfoPopupRef", "23435a07-3,23435a07-0"),
    q: common_vendor.p({
      mapInfo: $data.mapInfo
    }),
    r: common_vendor.p({
      title: $data.mapTouchTitle,
      total: $data.siteTotal
    }),
    s: common_vendor.f($data.mapList, (item, index, i0) => {
      return {
        a: "23435a07-6-" + i0 + ",23435a07-4",
        b: common_vendor.p({
          info: item,
          ["show-join"]: false,
          ["page-show-quit"]: false
        }),
        c: index
      };
    }),
    t: $data.mapList.length == 0
  }, $data.mapList.length == 0 ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-23435a07"]]);
exports.MiniProgramPage = MiniProgramPage;
//# sourceMappingURL=index.js.map
