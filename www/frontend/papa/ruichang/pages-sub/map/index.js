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
const common_vendor = require("../../common/vendor.js");
const apis_stadium = require("../../apis/stadium.js");
const apis_common = require("../../apis/common.js");
const utils_mapUtils = require("../../utils/mapUtils.js");
const common_assets = require("../../common/assets.js");
const mixins_shareMixins = require("../../mixins/shareMixins.js");
const navBar = () => "../../components/navBar/index.js";
const showMapInfoPopup = () => "./components/showMapInfoPopup.js";
const scrollTabX = () => "./components/scrollTabX.js";
const _sfc_main = {
  mixins: [mixins_shareMixins.shareMixins],
  components: {
    navBar,
    showMapInfoPopup,
    scrollTabX
  },
  data() {
    return {
      navColor: "transparent",
      menuHeight: 50,
      tabList: [
        {
          name: "全部类型",
          img: common_assets.mapAll$1,
          gather_type_id: ""
        },
        {
          name: "体育俱乐部",
          img: common_assets.mapClub
        }
        // {
        // 	name: '体育总会',
        // 	img: mapOrgan
        // },
        // {
        // 	name: '体育场馆',
        // 	img: mapStadium
        // }
      ],
      longitude: 115.362586,
      // 经度
      latitude: 28.861319,
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
        gather_type_id: "",
        search_tag: "",
        community_ids: "",
        keyword: ""
      },
      form: {
        page: 1,
        size: 999
      },
      center: {
        longitude: 115.362586,
        // 经度
        latitude: 28.861319
        // 纬度
      },
      drag_location: {
        longitude: 115.362586,
        // 经度
        latitude: 28.861319
        // 纬度
      },
      keyword: "",
      mapList: [],
      _mapContext: null,
      intervalId: "",
      showBack: false,
      isNotYunChen: false,
      oldScale: "16",
      radium: 0,
      markersList: [],
      siteInfoList: [],
      companyAreaList: [],
      mapInfo: {}
    };
  },
  onReady() {
    return __async(this, null, function* () {
      this._mapContext = common_vendor.index.createMapContext("map", this);
      let app = getApp();
      this.getWxMapTypeListData();
      let _this = this;
      if (app.globalData.user_latitude && app.globalData.user_longitude) {
        let user_longitude = app.globalData.user_longitude;
        let user_latitude = app.globalData.user_latitude;
        this.drag_location.latitude = user_latitude;
        this.drag_location.longitude = user_longitude;
        utils_mapUtils.reverseGeocoder(user_latitude, user_longitude).then((res) => {
          if (res.city_name.indexOf("静安") == -1) {
            this.isNotYunChen = true;
            this._mapContext.getCenterLocation({
              success: function(res2) {
                console.log("获取当前经纬度地址", res2);
                if (res2.latitude == 0 || res2.longitude == 0) {
                  _this.latitude = 28.861319;
                  _this.longitude = 115.362586;
                }
                setTimeout(() => {
                  _this.setMapCener(_this.latitude, _this.longitude);
                }, 300);
              }
            });
          } else {
            this.latitude = user_latitude;
            this.longitude = user_longitude;
          }
        });
      }
      this._mapContext.initMarkerCluster({
        enableDefaultStyle: false,
        zoomOnClick: true,
        gridSize: 60,
        complete(res) {
          console.log("initMarkerCluster", res);
        }
      });
      this._mapContext.on("markerClusterCreate", (res) => {
        console.log("markerClusterCreate", res);
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
      this.getRegion();
      yield this.getMaqList(this.center.latitude, this.center.longitude);
    });
  },
  onLoad() {
    const app = getApp();
    let { menuHeight } = app.globalData;
    this.menuHeight = menuHeight;
    let _this = this;
    this._mapContext = common_vendor.index.createMapContext("map", this);
    this._mapContext.getCenterLocation({
      success: function(res) {
        console.log("获取当前经纬度地址", res);
        if (res.latitude == 0 || res.longitude == 0) {
          _this.latitude = 28.861319;
          _this.longitude = 115.362586;
          setTimeout(() => {
            _this.setMapCener(_this.latitude, _this.longitude);
          }, 300);
        }
      }
    });
  },
  methods: {
    getMaqList(latitude, longitude) {
      if (!latitude || !longitude) {
        latitude = this.drag_location.latitude;
        longitude = this.drag_location.longitude;
      }
      return new Promise((resolve) => __async(this, null, function* () {
        const { street_id, gather_type_id, search_tag, community_ids, keyword, distance } = this.sizer;
        let params = __spreadProps(__spreadValues({}, this.form), {
          longitude,
          latitude,
          street_id,
          gather_type_id
        });
        if (distance && distance != "0") {
          params.distance = distance;
        }
        if (street_id && street_id != "0") {
          params.street_id = street_id;
        }
        if (search_tag) {
          params.search_tag = search_tag;
        }
        if (keyword) {
          params.keyword = keyword;
        }
        if (gather_type_id) {
          params.gather_type_id = gather_type_id;
        }
        const { data } = yield apis_stadium.getWxMapList(params);
        this.mapList = data.list;
        this.renderMarker(this.mapList);
        resolve(1);
      }));
    },
    renderMarker(markers) {
      if (!this._mapContext) {
        console.error("_mapContext 获取失败");
        return;
      }
      const showMarkerList = [];
      markers.length;
      markers.forEach((item, index) => {
        let obj = {
          id: index + 1,
          // iconPath: 'https://cdn-static.papa.com.cn/shandong' + item.icon,
          iconPath: item.icon,
          width: 33,
          height: 40,
          joinCluster: false,
          // label: {
          // 	bgColor: '#0396DE',
          // 	content: item.name,
          // 	textAlign: 'center',
          // 	color: '#fff',
          // 	padding: 2
          // },
          latitude: item.latitude,
          longitude: item.longitude,
          level: 1
        };
        showMarkerList.push(obj);
      });
      let _this = this;
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
      console.log("level", item.level, item);
      let _this = this;
      if (item.level === 3) {
        this._mapContext.moveToLocation({
          longitude: item.longitude,
          latitude: item.latitude,
          success(res) {
            console.log("res", res);
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
        console.log(siteInfo);
        siteInfo.showImage = siteInfo.images;
        _this.mapInfo = siteInfo;
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
          let scale = this.oldScale;
          console.log("请求列表", scale);
          this.getMaqList(new_latitude, new_longitude);
        }
      }
    },
    // 点击右边  1  图层切换   2  当前定位
    handleRight(type) {
      console.log(type);
      if (type == 1) {
        this.overlooking = !this.overlooking;
        this.skew = this.overlooking ? 90 : 0;
      }
      if (type == 2) {
        let app = getApp();
        console.log(
          app.globalData.is_get_location,
          app.globalData.user_latitude,
          app.globalData.user_longitude
        );
        if (app.globalData.is_get_location && app.globalData.user_latitude && app.globalData.user_longitude) {
          let user_longitude = app.globalData.user_longitude;
          let user_latitude = app.globalData.user_latitude;
          this.latitude = user_latitude;
          this.longitude = user_longitude;
          this.setMapCener(user_latitude, user_longitude);
          if (this.isNotYunChen) {
            this.showBack = true;
          }
        } else {
          app.getLocation();
        }
      }
      if (type == 3) {
        common_vendor.index.showToast({
          title: "敬请期待",
          icon: "none"
        });
        console.log("列表", this.tabList);
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
    // 回到静安
    handleBack() {
      this.setMapCener(this.center.latitude, this.center.longitude);
      if (this.showBack) {
        this.showBack = false;
      }
    },
    getSearchData(data) {
      this.getMaqList();
    },
    renderCircle(level) {
      return __async(this, null, function* () {
        let params = {
          distance: parseInt(this.radium),
          gather_type_id: this.sizer.gather_type_id,
          latitude: this.drag_location.latitude,
          level,
          longitude: this.drag_location.longitude,
          size: 100
        };
        let list = [];
        let areaListRes = yield apis_common.getMapAreaList(params);
        if (areaListRes.code === 200) {
          areaListRes.data.list.map((e) => {
            list.push(e);
          });
        }
        let showMarkerList = [];
        list.forEach((item, index) => {
          if (item.count_num) {
            let obj = {
              id: index + 1,
              latitude: Number(item.lat),
              longitude: Number(item.lng),
              width: 0,
              height: 0,
              label: {
                content: `${item.name}
${item.count_num}个
体育资源点`,
                fontSize: 12,
                width: 80,
                height: 80,
                bgColor: "#e05830",
                color: "#fff",
                borderRadius: 40,
                textAlign: "center",
                anchorX: 0,
                anchorY: -30
              },
              level
            };
            showMarkerList.push(obj);
          }
        });
        let _this = this;
        this._mapContext.addMarkers({
          markers: showMarkerList,
          clear: true,
          complete(res) {
            console.log("addMarkers11111", res);
            _this.markersList = showMarkerList;
          },
          fail(error) {
            console.log("error1111", error);
          },
          success(res) {
            console.log("res1111", res);
          }
        });
      });
    },
    // 获取可视范围内的距离
    getRegion() {
      if (!this._mapContext) {
        console.error("_mapContext 获取失败");
        return;
      }
      let _this = this;
      this._mapContext.getRegion({
        success(res) {
          let lat_1 = res.northeast.latitude;
          let lon_1 = res.northeast.longitude;
          const radium = utils_mapUtils.getShortDistanceBase(
            lat_1,
            lon_1,
            _this.drag_location.latitude,
            _this.drag_location.longitude
          ).toFixed(1);
          this.radium = radium;
        }
      });
    },
    // 获取类型分类
    getWxMapTypeListData() {
      return __async(this, null, function* () {
        let res = yield apis_stadium.getWxMapTypeList({ page: 1, size: 999 });
        console.log("获取类型分类", res);
        if (res.code == 200) {
          let list = [];
          let objMap = {
            体育场馆: common_assets.mapStadium,
            体育组织: common_assets.mapOrgan,
            体质监测点: common_assets.mapClub,
            静安旅游: common_assets.mapTour,
            经营场所: common_assets.mapBus
          };
          res.data.map((e) => {
            let img = objMap[e.name] ? objMap[e.name] : common_assets.mapClub;
            list.push({
              name: e.name,
              img,
              gather_type_id: e.gather_type_id
            });
          });
          this.tabList = this.tabList.concat(...list);
        }
      });
    },
    changeTab(e) {
      console.log(e);
      this.sizer.gather_type_id = e.gather_type_id;
      this.getSearchData();
    }
  }
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_scrollTabX = common_vendor.resolveComponent("scrollTabX");
  const _component_show_map_info_popup = common_vendor.resolveComponent("show-map-info-popup");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_scrollTabX + _component_show_map_info_popup + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      navColor: $data.navColor,
      isFixed: false,
      titleColor: "#323233",
      title: "健身地图",
      showBack: true,
      searchTitle: ""
    }),
    b: common_vendor.o($options.changeTab),
    c: common_vendor.p({
      list: $data.tabList
    }),
    d: $data.showBack,
    e: common_vendor.o((...args) => $options.handleBack && $options.handleBack(...args)),
    f: common_assets._imports_0,
    g: common_vendor.o(($event) => $options.handleRight(1)),
    h: common_assets._imports_1,
    i: common_vendor.o(($event) => $options.handleRight(2)),
    j: common_assets._imports_2,
    k: common_vendor.o(($event) => $options.handleRight(3)),
    l: $data.latitude,
    m: $data.longitude,
    n: $data.scale,
    o: $data.overlooking,
    p: $data.skew,
    q: common_vendor.o((...args) => $options.regionchange && $options.regionchange(...args)),
    r: common_vendor.o((...args) => $options.clickMarker && $options.clickMarker(...args)),
    s: common_vendor.o((...args) => $options.clickMarker && $options.clickMarker(...args)),
    t: common_vendor.sr("showMapInfoPopupRef", "5adcfe1f-3,5adcfe1f-0"),
    v: common_vendor.p({
      mapInfo: $data.mapInfo
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5adcfe1f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
