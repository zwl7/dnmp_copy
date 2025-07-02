"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_util = require("../../../utils/util.js");
require("../../../core/config.js");
require("../../../utils/qqmap-wx-jssdk.js");
const selectSearch = () => "./selectSearch.js";
const _sfc_main = {
  name: "mapIndex",
  props: {
    mapList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: {
    selectSearch
  },
  data() {
    return {};
  },
  methods: {
    getSearchData(data) {
      this.$emit("get-data", data);
    },
    toDistance(item) {
      const app = getApp();
      const latitude = Number(item.latitude);
      const longitude = Number(item.longitude);
      const user_latitude = app.globalData.latitude;
      const user_longitude = app.globalData.longitude;
      if (!user_latitude || !user_longitude) {
        return "距离未知";
      }
      const distance = utils_util.getShortDistance(
        Number(user_latitude),
        Number(user_longitude),
        latitude,
        longitude
      );
      return distance + "KM";
    },
    toDetail(item, index) {
      const {
        field_id,
        site_id,
        stadium_id,
        health_id
      } = item;
      let id = "";
      if (stadium_id) {
        id = stadium_id;
        common_vendor.index.navigateTo({
          url: "/pages/stadiumDetail/stadiumDetail?stadium_id=" + id
        });
        return;
      }
      if (site_id) {
        id = site_id;
        common_vendor.index.navigateTo({
          url: "/pages/associationDetail/associationDetail?site_id=" + id
        });
        return;
      }
      if (field_id) {
        id = field_id;
        this.$showToastNone("跳转场地，待开发");
      }
      if (health_id) {
        id = health_id;
        this.$showToastNone("跳转场地，待开发");
      }
    }
  }
};
if (!Array) {
  const _component_select_search = common_vendor.resolveComponent("select-search");
  const _component_empty = common_vendor.resolveComponent("empty");
  (_component_select_search + _component_empty)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.getSearchData),
    b: $props.mapList.length === 0
  }, $props.mapList.length === 0 ? {
    c: common_vendor.p({
      paddingTop: "60rpx"
    })
  } : {}, {
    d: common_vendor.f($props.mapList, (item, index, i0) => {
      return {
        a: item.images_url[0],
        b: common_vendor.t(item.name),
        c: common_vendor.t($options.toDistance(item)),
        d: common_vendor.t(item.address),
        e: index,
        f: common_vendor.o(($event) => $options.toDetail(item, index), index)
      };
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f1dafa65"], ["__file", "E:/gxm/uniapp-shandong/pages/map/components/index.vue"]]);
wx.createComponent(Component);
