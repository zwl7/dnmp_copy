"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../utils/storageUtil.js");
const _sfc_main = {
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
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d10efb47"], ["__file", "E:/gxm/uniapp-shandong/pages/demo/demo.vue"]]);
wx.createPage(MiniProgramPage);
