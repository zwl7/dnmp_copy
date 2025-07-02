"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_token = require("../../utils/token.js");
require("../../utils/storageUtil.js");
const _sfc_main = {
  data() {
    return {
      city: "",
      city_id: "",
      lat: "",
      lng: "",
      list: []
    };
  },
  async onLoad() {
    let app = getApp();
    this.city_id = app.globalData.city_id;
    app.getCompanyArea().then((res) => {
      let list = [];
      res.map((e) => {
        list.push({
          text: e.name,
          value: e.company_area_id,
          lat: e.lat,
          lng: e.lng
        });
      });
      this.list = list;
    });
  },
  methods: {
    handleClick(item) {
      if (item.value != this.city_id) {
        this.city_id = item.value;
        this.city = item.text;
        this.lat = item.lat;
        this.lng = item.lng;
      } else {
        this.city_id = "0";
        this.city = "山东省";
        this.lat = app.globalData.user_latitude;
        this.lng = app.globalData.user_longitude;
      }
      const app = getApp();
      app.globalData.city = this.city;
      app.globalData.city_id = this.city_id;
      let globalUserSearchInfo = {
        city_id: this.city_id,
        lat: this.lat,
        lng: this.lng,
        city_name: this.city
      };
      utils_token.setUserInfoKey(globalUserSearchInfo, true);
      app.globalData.eventRefresh = true;
      app.globalData.stadiumRefresh = true;
      common_vendor.index.navigateBack();
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.text),
        b: item.value == $data.city_id
      }, item.value == $data.city_id ? {
        c: "a8e2af76-0-" + i0,
        d: common_vendor.p({
          type: "checkmarkempty",
          size: "16"
        })
      } : {}, {
        e: common_vendor.n({
          "activity": item.value == $data.city_id
        }),
        f: index,
        g: common_vendor.o(($event) => $options.handleClick(item), index)
      });
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a8e2af76"], ["__file", "E:/gxm/uniapp-shandong/pages/areaSearch/areaSearch.vue"]]);
wx.createPage(MiniProgramPage);
