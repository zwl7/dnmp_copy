"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_index = require("../../apis/index.js");
const utils_util = require("../../utils/util.js");
require("../../utils/http.js");
require("../../core/config.js");
require("../../utils/token.js");
require("../../utils/storageUtil.js");
require("../../utils/qqmap-wx-jssdk.js");
const _sfc_main = {
  data() {
    return {
      menuTop: 0,
      menuRight: 0,
      load_finish: false,
      images_url: ["https://img.yzcdn.cn/vant/cat.jpeg"],
      info: {
        addr: "",
        city: "",
        contact_person: "",
        contact_way: "",
        cover_img: "",
        district: "",
        institution_id: "",
        latitude: "",
        logo_img: "",
        longitude: "",
        name: "",
        province: "",
        remark: "",
        short_name: "",
        street_id: ""
      }
    };
  },
  onLoad() {
    let app = getApp();
    this.menuTop = app.globalData.menuTop + "px";
    this.menuRight = app.globalData.menuRight + "px";
    console.log(this.menuRight, this.menuTop);
    this.getInfo();
  },
  methods: {
    handleBack() {
      common_vendor.index.navigateBack({
        fail(err) {
          console.log(err);
          common_vendor.index.switchTab({
            url: "/pages/tabbar/home/index"
          });
        }
      });
    },
    getInfo() {
      apis_index.getInstitutionlist({
        page: 1,
        size: 10
      }).then((res) => {
        if (res.code == 200) {
          if (res.data.list.length == 1) {
            let data = res.data.list[0];
            let info = {
              addr: data.addr,
              city: data.city_str,
              contact_person: data.contact_person,
              contact_way: data.contact_way,
              cover_img: data.cover_img,
              district: data.district_str,
              institution_id: data.institution_id,
              latitude: data.latitude,
              logo_img: data.logo_img,
              longitude: data.longitude,
              name: data.name,
              province: data.province_str,
              remark: data.remark,
              short_name: data.short_name,
              street_id: data.street_id_str,
              text: utils_util.replaceImg(data.text)
            };
            this.info = info;
          }
        } else {
          this.$showToastNone(res.message);
        }
        this.load_finish = true;
      });
    },
    openMap() {
      let {
        latitude,
        longitude,
        addr
      } = this.info;
      if (!latitude || !longitude) {
        this.$showToastNone("暂无位置信息");
        return;
      }
      common_vendor.index.openLocation({
        latitude: +latitude,
        longitude: +longitude,
        name: addr,
        address: "",
        scale: 16,
        infoUrl: ""
      });
    },
    callPhone() {
      if (!this.info.contact_way) {
        this.$showToastNone("暂无电话");
        return;
      }
      common_vendor.index.makePhoneCall({
        phoneNumber: this.info.contact_way,
        fail(err) {
          console.error(err);
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_skeleton = common_vendor.resolveComponent("skeleton");
  (_easycom_uni_icons2 + _component_skeleton)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      type: "left",
      size: "24",
      color: "#fff"
    }),
    b: $data.menuTop,
    c: $data.menuRight,
    d: common_vendor.o((...args) => $options.handleBack && $options.handleBack(...args)),
    e: !$data.load_finish
  }, !$data.load_finish ? {
    f: common_vendor.p({
      type: "detail"
    })
  } : {
    g: common_vendor.t($data.info.name),
    h: common_vendor.t($data.info.remark),
    i: common_vendor.f($data.info.cover_img, (image, index, i0) => {
      return {
        a: image,
        b: index
      };
    }),
    j: common_vendor.t($data.info.province),
    k: common_vendor.t($data.info.city),
    l: common_vendor.t($data.info.district),
    m: common_vendor.t($data.info.street_id),
    n: common_vendor.t($data.info.addr),
    o: common_vendor.p({
      type: "location-filled",
      size: "18",
      color: "#2a8eff"
    }),
    p: common_vendor.o((...args) => $options.openMap && $options.openMap(...args)),
    q: common_vendor.p({
      type: "phone-filled",
      size: "18",
      color: "#fe7800"
    }),
    r: common_vendor.o((...args) => $options.callPhone && $options.callPhone(...args)),
    s: $data.info.text
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-10cbadf1"], ["__file", "E:/gxm/uniapp-shandong/pages/associationAbout/associationAbout.vue"]]);
wx.createPage(MiniProgramPage);
