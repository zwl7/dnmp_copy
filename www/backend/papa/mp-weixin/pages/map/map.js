"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_stadium = require("../../apis/stadium.js");
const apis_common = require("../../apis/common.js");
const utils_util = require("../../utils/util.js");
require("../../utils/http.js");
require("../../core/config.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
require("../../utils/qqmap-wx-jssdk.js");
const mapIndex = () => "./components/index.js";
const showMapInfoPopup = () => "./components/showMapInfoPopup.js";
const _sfc_main = {
  components: {
    mapIndex,
    showMapInfoPopup
  },
  data() {
    return {
      latitude: 36.670424,
      longitude: 117.020745,
      minScale: 8,
      maxScale: 20,
      scale: 16,
      oldClientY: 0,
      height: 200,
      sizer: {
        street_id: "",
        gather_type_id: "",
        search_tag: "",
        community_ids: "",
        keyword: ""
      },
      form: {
        page: 1,
        size: 100
      },
      center: {
        latitude: 36.670424,
        longitude: 117.020745
      },
      drag_location: {
        latitude: 36.670424,
        longitude: 117.020745
      },
      keyword: "",
      mapList: [],
      _mapContext: null,
      intervalId: "",
      showBack: true,
      oldScale: "16",
      radium: 0,
      markersList: [],
      siteInfoList: [],
      companyAreaList: [],
      mapInfo: {}
    };
  },
  async onReady() {
    let app = getApp();
    this.showBack = app.globalData.isShandongPlatform;
    if (app.globalData.user_latitude && app.globalData.user_longitude) {
      let user_longitude = app.globalData.user_longitude;
      let user_latitude = app.globalData.user_latitude;
      this.latitude = user_latitude;
      this.longitude = user_longitude;
      this.drag_location.latitude = user_latitude;
      this.drag_location.longitude = user_longitude;
    }
    this._mapContext = common_vendor.index.createMapContext("map", this);
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
        const {
          center,
          clusterId,
          markerIds
        } = cluster;
        return {
          ...center,
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
        };
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
    await this.getMaqList(this.center.latitude, this.center.longitude);
    app.getCompanyArea().then((res) => {
      this.companyAreaList = res;
    });
  },
  onUnload() {
    clearInterval(this.intervalId);
    this.intervalId = "";
  },
  methods: {
    touchstart(e) {
      this.oldClientY = e.touches[0].clientY;
    },
    touchend(e) {
      let newClientY = e.changedTouches[0].clientY;
      let diff = newClientY - this.oldClientY;
      this.oldClientY = newClientY;
      if (diff > 100) {
        this.height = 200;
      }
      if (diff < -10) {
        this.height = 500;
      }
    },
    getMaqList(latitude, longitude) {
      if (!latitude || !longitude) {
        latitude = this.drag_location.latitude;
        longitude = this.drag_location.longitude;
      }
      return new Promise(async (resolve) => {
        const {
          street_id,
          gather_type_id,
          search_tag,
          community_ids,
          keyword,
          distance
        } = this.sizer;
        let params = {
          ...this.form,
          longitude,
          latitude,
          street_id,
          gather_type_id
        };
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
        const {
          data
        } = await apis_stadium.getWxMapList(params);
        this.mapList = data.list;
        this.renderMarker(this.mapList);
        resolve(1);
      });
    },
    renderMarker(markers) {
      if (!this._mapContext) {
        console.error("_mapContext 获取失败");
        return;
      }
      const showMarkerList = [];
      markers.forEach((item, index) => {
        let obj = {
          id: index + 1,
          // iconPath: 'https://cdn-static.papa.com.cn/shandong' + item.icon,
          iconPath: "https://cdn-static.papa.com.cn/shandong/map_icons/体育场馆.png",
          width: 25,
          height: 34,
          joinCluster: false,
          label: {
            bgColor: "#0396DE",
            content: item.name,
            textAlign: "center",
            color: "#fff",
            padding: 2
          },
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
          console.log("addMarkers", res, showMarkerList);
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
          _this.$refs["showMapInfoPopupRef"].show();
        });
      }
    },
    getMapScale() {
      if (!this._mapContext) {
        console.error("_mapContext 获取失败");
        return;
      }
      let _this = this;
      this.intervalId = setInterval(() => {
        this._mapContext.getScale({
          success: (res) => {
            if (this.oldScale != res.scale) {
              if (8 <= res.scale && res.scale < 11) {
                this.renderCircle(3);
              } else if (11 <= res.scale && res.scale < 14) {
                this.renderCircle(4);
              } else {
                _this.getMaqList(_this.drag_location.latitude, _this.drag_location.longitude);
              }
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
        let distance = utils_util.getShortDistanceBase(new_latitude, new_longitude, this.drag_location.latitude, this.drag_location.longitude);
        this.drag_location = {
          latitude: new_latitude,
          longitude: new_longitude
        };
        if (distance > 100) {
          let scale = this.oldScale;
          console.log("请求列表", scale);
          if (8 <= scale && scale < 11) {
            this.renderCircle(3);
          } else if (11 <= scale && scale < 13) {
            this.renderCircle(4);
          } else {
            this.getMaqList(new_latitude, new_longitude);
          }
        }
      }
    },
    // 回到日照
    handleBack() {
      if (!this._mapContext) {
        console.error("_mapContext 获取失败");
        return;
      }
      let _this = this;
      this._mapContext.moveToLocation({
        longitude: this.center.longitude,
        latitude: this.center.latitude,
        success(res) {
          console.log("设置中心点", res);
          _this.drag_location.latitude = _this.center.latitude;
          _this.drag_location.longitude = _this.center.longitude;
        }
      });
    },
    getSearchData(data) {
      this.sizer = data;
      this.getMaqList();
    },
    async renderCircle(level) {
      let params = {
        distance: parseInt(this.radium),
        gather_type_id: this.sizer.gather_type_id,
        latitude: this.drag_location.latitude,
        level,
        longitude: this.drag_location.longitude,
        size: 100
      };
      let list = [];
      let areaListRes = await apis_common.getMapAreaList(params);
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
          const radium = utils_util.getShortDistanceBase(lat_1, lon_1, _this.drag_location.latitude, _this.drag_location.longitude).toFixed(
            1
          );
          this.radium = radium;
        }
      });
    }
  }
};
if (!Array) {
  const _component_map_index = common_vendor.resolveComponent("map-index");
  const _component_show_map_info_popup = common_vendor.resolveComponent("show-map-info-popup");
  (_component_map_index + _component_show_map_info_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.showBack,
    b: common_vendor.o((...args) => $options.handleBack && $options.handleBack(...args)),
    c: $data.latitude,
    d: $data.longitude,
    e: $data.scale,
    f: common_vendor.o((...args) => $options.regionchange && $options.regionchange(...args)),
    g: common_vendor.o((...args) => $options.clickMarker && $options.clickMarker(...args)),
    h: common_vendor.o((...args) => $options.clickMarker && $options.clickMarker(...args)),
    i: common_vendor.o((...args) => $options.touchstart && $options.touchstart(...args)),
    j: common_vendor.o((...args) => $options.touchend && $options.touchend(...args)),
    k: common_vendor.o($options.getSearchData),
    l: common_vendor.p({
      mapList: $data.mapList
    }),
    m: $data.height + "px",
    n: common_vendor.sr("showMapInfoPopupRef", "e06b858f-1"),
    o: common_vendor.p({
      mapInfo: $data.mapInfo
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e06b858f"], ["__file", "E:/gxm/uniapp-shandong/pages/map/map.vue"]]);
wx.createPage(MiniProgramPage);
