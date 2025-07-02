"use strict";
const common_assets = require("../../../../common/assets.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "stadiumItem",
  emits: ["reserve", "click"],
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    toDistance() {
      this.info;
      let distance = "位置未知";
      return distance;
    },
    showImageUrl() {
      return this.info.images_url[0] ? this.info.images_url[0] : common_assets.defaultUrl$1;
    }
  },
  methods: {
    handleReserve() {
      this.$emit("reserve", this.info);
    },
    toDetail() {
      this.$emit("click", this.info);
    }
  }
};
if (!Array) {
  const _component_paTag = common_vendor.resolveComponent("paTag");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_component_paTag + _easycom_uni_icons2)();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.showImageUrl,
    b: common_vendor.t($props.info.name),
    c: $props.info.sport_tag_str
  }, $props.info.sport_tag_str ? common_vendor.e({
    d: common_vendor.f($props.info.sport_tag_str.slice(0, 2), (sport_item, sindex, i0) => {
      return {
        a: common_vendor.t(sport_item),
        b: sindex,
        c: "39571e83-0-" + i0
      };
    }),
    e: $props.info.sport_tag_str.length > 2
  }, $props.info.sport_tag_str.length > 2 ? {} : {}) : {}, {
    f: common_vendor.p({
      type: "iconfont-location-outline",
      ["custom-prefix"]: "iconfont",
      size: "16",
      color: "#A5ADBA"
    }),
    g: $props.info.show_distance
  }, $props.info.show_distance ? {
    h: common_vendor.t($props.info.show_distance)
  } : {}, {
    i: common_vendor.t($props.info.address || "暂无位置信息"),
    j: $props.info.service_status == 1 && $props.info.service_provider != 0 && $props.info.service_type.includes("stadium_order")
  }, $props.info.service_status == 1 && $props.info.service_provider != 0 && $props.info.service_type.includes("stadium_order") ? {
    k: common_vendor.o((...args) => $options.handleReserve && $options.handleReserve(...args))
  } : {}, {
    l: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-39571e83"]]);
wx.createComponent(Component);
