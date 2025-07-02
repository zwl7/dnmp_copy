"use strict";
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
const common_vendor = require("../../../common/vendor.js");
const apis_stadium = require("../../../apis/stadium.js");
const mapItem = () => "./mapItem.js";
const _sfc_main = {
  components: {
    mapItem
  },
  props: {
    mapInfo: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  computed: {
    showInfo() {
      cosnole.log(this.mapInfo);
      return this.mapInfo || {};
    }
  },
  data() {
    return {
      feedback: 1
    };
  },
  methods: {
    change(e) {
      console.log("弹窗状态改变：", e);
    },
    open() {
      this.$refs.popup.open("bottom");
    },
    close() {
      this.$refs.popup.close();
    },
    showFeedBack() {
      this.$refs.inputDialog.open();
    },
    radioChange(evt) {
      let value = evt.detail.value;
      this.feedback = value;
    },
    cancelDialog() {
      this.$refs.inputDialog.close();
    },
    confirmDialog() {
      common_vendor.index.$uv.throttle(() => __async(this, null, function* () {
        const { des, latitude, longitude, id } = this.mapInfo;
        const type_id = this.mapInfo.type_id ? this.mapInfo.type_id : 0;
        const topic_id = this.mapInfo.id ? this.mapInfo.id : 0;
        const params = {
          field_name: this.mapInfo.name,
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
      }), 1e3);
    },
    handleClick() {
      const { field_id, site_id, stadium_id, health_id, sport_tourism_id, business_place_id } = this.mapInfo;
      let name = "";
      let id = "";
      let idName = "";
      if (stadium_id) {
        name = "/pages/stadiumDetail/stadiumDetail";
        idName = "stadium_id";
        id = stadium_id;
      }
      if (site_id) {
        name = "/pages/siteDetail/siteDetail";
        idName = "site_id";
        id = site_id;
      }
      if (field_id) {
        this.$showToastNone("未开发field_id");
        return;
      }
      if (health_id) {
        name = "/pages/fitnessReserveTime/fitnessReserveTime";
        idName = "health_id";
        id = health_id;
      }
      if (sport_tourism_id) {
        name = "/pages/tourDetail/tourDetail";
        idName = "sport_tourism_id";
        id = sport_tourism_id;
      }
      if (business_place_id) {
        name = "/pages/businessSiteDetail/businessSiteDetail";
        idName = "business_place_id";
        id = business_place_id;
      }
      common_vendor.index.navigateTo({
        url: `${name}?${idName}=${id}`
      });
    },
    openMap() {
      this.$toLocation(this.mapInfo);
    }
  }
};
if (!Array) {
  const _component_mapItem = common_vendor.resolveComponent("mapItem");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
  (_component_mapItem + _easycom_uni_icons2 + _easycom_uv_popup2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uv_popup = () => "../../../node-modules/@climblee/uv-ui/components/uv-popup/uv-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uv_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.close && $options.close(...args)),
    b: common_vendor.o($options.handleClick),
    c: common_vendor.p({
      info: $props.mapInfo
    }),
    d: common_vendor.p({
      ["custom-prefix"]: "iconfont",
      type: "iconfont-fankui",
      size: "20",
      color: "#303133"
    }),
    e: common_vendor.o((...args) => $options.showFeedBack && $options.showFeedBack(...args)),
    f: common_vendor.o((...args) => $options.openMap && $options.openMap(...args)),
    g: common_vendor.sr("popup", "42e7f597-0"),
    h: common_vendor.o($options.change),
    i: common_vendor.p({
      round: "16"
    }),
    j: $data.feedback == 1,
    k: $data.feedback == 2,
    l: $data.feedback == 3,
    m: $data.feedback == 4,
    n: common_vendor.o((...args) => $options.radioChange && $options.radioChange(...args)),
    o: common_vendor.o((...args) => $options.cancelDialog && $options.cancelDialog(...args)),
    p: common_vendor.o((...args) => $options.confirmDialog && $options.confirmDialog(...args)),
    q: common_vendor.sr("inputDialog", "42e7f597-3"),
    r: common_vendor.p({
      type: "dialog",
      round: "16"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-42e7f597"]]);
wx.createComponent(Component);
//# sourceMappingURL=showMapInfoPopup.js.map
