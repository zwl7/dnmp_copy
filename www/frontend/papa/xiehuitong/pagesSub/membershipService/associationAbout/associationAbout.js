"use strict";
const common_vendor = require("../../../common/vendor.js");
const apis_membership = require("../../../apis/membership.js");
const utils_util = require("../../../utils/util.js");
const common_assets = require("../../../common/assets.js");
const core_themeMixins = require("../../../core/themeMixins.js");
const _sfc_main = {
  mixins: [core_themeMixins.themeMixins],
  data() {
    return {
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
        street_id: ""
      },
      phoneFill: common_assets.phoneFill
    };
  },
  onLoad() {
    let app = getApp();
    this.menuTop = app.globalData.menuTop + "px";
    this.menuRight = app.globalData.menuRight + "px";
    console.log(this.menuRight, this.menuTop);
    common_vendor.index.setNavigationBarTitle({
      title: "工作组介绍"
    });
    this.getInfo();
  },
  methods: {
    getInfo() {
      apis_membership.getInstitutionList({
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
      let { latitude, longitude, addr } = this.info;
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
  const _component_skeleton = common_vendor.resolveComponent("skeleton");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_skeleton + _easycom_uni_icons2 + _component_layout_default_uni)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$data.load_finish
  }, !$data.load_finish ? {
    b: common_vendor.p({
      type: "detail"
    })
  } : {
    c: common_vendor.t($data.info.name),
    d: common_vendor.f($data.info.cover_img, (image, index, i0) => {
      return {
        a: image,
        b: index
      };
    }),
    e: common_vendor.t($data.info.province),
    f: common_vendor.t($data.info.city),
    g: common_vendor.t($data.info.district),
    h: common_vendor.t($data.info.street_id),
    i: common_vendor.t($data.info.addr),
    j: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-locationfill",
      size: "20",
      color: _ctx.themePrimaryColorGetter
    }),
    k: common_vendor.o((...args) => $options.openMap && $options.openMap(...args)),
    l: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-dianhua",
      color: _ctx.themePrimaryColorGetter,
      size: "20"
    }),
    m: common_vendor.o((...args) => $options.callPhone && $options.callPhone(...args)),
    n: $data.info.text
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-16d7febe"]]);
wx.createPage(MiniProgramPage);
