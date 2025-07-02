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
const utils_buttonClick = require("../../../utils/buttonClick.js");
const instructorSiteItem = () => "../../../components/InstructorSiteItem/index.js";
const _sfc_main = {
  components: {
    instructorSiteItem
  },
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
      isCollect: false
    };
  },
  computed: {
    showInfo() {
      return this.mapInfo || {};
    }
  },
  methods: {
    change(e) {
    },
    open() {
      this.checkIfFavorited();
      this.$refs.popup.open("bottom");
    },
    openMap() {
      if (!this.mapInfo.lat || !this.mapInfo.lng) {
        common_vendor.index.showToast({
          title: "站点暂未设置坐标",
          icon: "none"
        });
      }
      common_vendor.index.openLocation({
        latitude: this.mapInfo.lat ? Number(this.mapInfo.lat) : 0,
        longitude: this.mapInfo.lng ? Number(this.mapInfo.lng) : 0,
        name: this.mapInfo.address,
        address: this.mapInfo.address
      });
    },
    handleCollect: utils_buttonClick.debounce(function() {
      return __async(this, null, function* () {
        try {
          let flag = yield getApp().judgeIsAuth();
          if (!flag) {
            return;
          }
          const res = yield this.$api.instructorSiteBehavior({
            instructor_site_id: this.mapInfo.instructor_site_id,
            cancel: this.isCollect ? 2 : 1
          });
          if (res.code === 200) {
            this.isCollect = !this.isCollect;
            common_vendor.index.showToast({
              title: this.isCollect ? "收藏成功" : "已取消收藏",
              icon: "none"
            });
          }
        } catch (error) {
          console.error("收藏操作失败:", error);
        }
      });
    }, 500),
    checkIfFavorited() {
      return __async(this, null, function* () {
        let res = yield this.$api.getInstructorSiteDetail({
          instructor_site_id: this.mapInfo.instructor_site_id
        });
        if (res.code == 200) {
          this.isCollect = res.data.is_love == 1;
        }
      });
    }
  }
};
if (!Array) {
  const _component_instructorSiteItem = common_vendor.resolveComponent("instructorSiteItem");
  const _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
  (_component_instructorSiteItem + _easycom_uv_popup2)();
}
const _easycom_uv_popup = () => "../../../node-modules/@climblee/uv-ui/components/uv-popup/uv-popup.js";
if (!Math) {
  _easycom_uv_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => _ctx.close && _ctx.close(...args)),
    b: common_vendor.p({
      info: $props.mapInfo,
      ["page-show-quit"]: false,
      ["show-join"]: false
    }),
    c: $data.isCollect ? "/static/images/star-fill.png" : "/static/images/star.png",
    d: common_vendor.o((...args) => $options.handleCollect && $options.handleCollect(...args)),
    e: common_vendor.t($data.isCollect ? "已收藏" : "收藏"),
    f: common_vendor.o((...args) => $options.openMap && $options.openMap(...args)),
    g: common_vendor.sr("popup", "18905f88-0"),
    h: common_vendor.o($options.change),
    i: common_vendor.p({
      round: "16"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-18905f88"]]);
wx.createComponent(Component);
//# sourceMappingURL=showMapInfoPopup.js.map
