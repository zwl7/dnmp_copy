"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_util = require("../../../utils/util.js");
const apis_stadium = require("../../../apis/stadium.js");
require("../../../core/config.js");
require("../../../utils/qqmap-wx-jssdk.js");
require("../../../utils/http.js");
require("../../../utils/token.js");
require("../../../utils/storageUtil.js");
const _sfc_main = {
  name: "showMapInfoPopup",
  props: {
    mapInfo: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      feedback: 1
    };
  },
  methods: {
    popupChange(e, index) {
    },
    show() {
      this.$refs["popup"].open("bottom");
    },
    closePopup() {
      this.$refs["popup"].close();
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
    toDetail() {
      const {
        field_id,
        site_id,
        stadium_id,
        health_id
      } = this.mapInfo;
      let name = "";
      let id = "";
      let idName = "";
      if (stadium_id) {
        name = "/pages/stadiumDetail/stadiumDetail";
        idName = "stadium_id";
        id = stadium_id;
      }
      if (site_id) {
        name = "/pages/associationDetail/associationDetail";
        idName = "site_id";
        id = site_id;
      }
      if (field_id) {
        this.$showToastNone("未开发field_id");
        return;
      }
      if (health_id) {
        this.$showToastNone("未开发health_id");
        return;
      }
      common_vendor.index.navigateTo({
        url: `${name}?${idName}=${id}`
      });
    },
    inputDialogToggle() {
      this.$refs.inputDialog.open();
    },
    openMap() {
      if (!+this.mapInfo.longitude || !+this.mapInfo.latitude) {
        this.$showToastNone("暂无位置信息");
        return;
      }
      let _this = this;
      common_vendor.index.openLocation({
        latitude: Number(this.mapInfo.latitude),
        // 纬度，浮点数，范围为90 ~ -90
        longitude: Number(this.mapInfo.longitude),
        // 经度，浮点数，范围为180 ~ -180。
        name: this.mapInfo.name,
        // 位置名
        address: this.mapInfo.address,
        // 地址详情说明
        success: function() {
          console.log("success");
        },
        fail(err) {
          _this.$showToastNone("地图打开失败");
        }
      });
    },
    radioChange(evt) {
      let value = evt.detail.value;
      this.feedback = value;
    },
    cancelDialog() {
      this.$refs.inputDialog.close();
    },
    confirmDialog() {
      const {
        des,
        latitude,
        longitude,
        id
      } = this.mapInfo;
      const type_id = this.mapInfo.type_id ? this.mapInfo.type_id : 0;
      const topic_id = this.mapInfo.id ? this.mapInfo.id : 0;
      const params = {
        field_name: this.mapInfo.name,
        des,
        latitude,
        longitude,
        topic_id,
        type: this.feedback,
        type_id
      };
      apis_stadium.mapFeedback(params).then(() => {
        common_vendor.index.showToast({
          icon: "success",
          title: "反馈成功"
        });
        this.cancelDialog();
      }).catch(() => {
        common_vendor.index.showToast({
          icon: "success",
          title: "反馈失败"
        });
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.closePopup),
    b: common_vendor.p({
      type: "closeempty",
      size: "16"
    }),
    c: $props.mapInfo.showImage,
    d: common_vendor.t($props.mapInfo.name),
    e: common_vendor.t($props.mapInfo.address),
    f: common_vendor.t($options.toDistance($props.mapInfo)),
    g: $props.mapInfo.des,
    h: common_vendor.p({
      type: "compose",
      size: "18"
    }),
    i: common_vendor.o((...args) => $options.inputDialogToggle && $options.inputDialogToggle(...args)),
    j: common_vendor.p({
      type: "paperplane",
      size: "18"
    }),
    k: common_vendor.o((...args) => $options.openMap && $options.openMap(...args)),
    l: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args)),
    m: common_vendor.sr("popup", "a95601bf-0"),
    n: common_vendor.o((e) => {
      $options.popupChange(e, 0);
    }),
    o: common_vendor.p({
      type: "bottom",
      ["background-color"]: "#fff"
    }),
    p: $data.feedback == 1,
    q: $data.feedback == 2,
    r: $data.feedback == 3,
    s: $data.feedback == 4,
    t: common_vendor.o((...args) => $options.radioChange && $options.radioChange(...args)),
    v: common_vendor.o((...args) => $options.cancelDialog && $options.cancelDialog(...args)),
    w: common_vendor.o((...args) => $options.confirmDialog && $options.confirmDialog(...args)),
    x: common_vendor.sr("inputDialog", "a95601bf-4"),
    y: common_vendor.p({
      type: "dialog"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a95601bf"], ["__file", "E:/gxm/uniapp-shandong/pages/map/components/showMapInfoPopup.vue"]]);
wx.createComponent(Component);
