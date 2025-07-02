"use strict";
const common_vendor = require("../../../../common/vendor.js");
const rankIcon = () => "../../../../components/LevelIcon/rank.js";
const _sfc_main = {
  name: "associationItem",
  emits: ["reserve", "toDetail"],
  components: {
    rankIcon
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      defaultImg: "https://apitest.wesais.cn/images/20240221/84dfeedf99e52da3f3f98a6cc7c76fcc.png"
    };
  },
  computed: {
    toDistance() {
      this.info;
      let distance = "位置未知";
      return distance;
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
  const _component_rankIcon = common_vendor.resolveComponent("rankIcon");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_component_rankIcon + _easycom_uni_icons2)();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.info.show_image ? $props.info.show_image : $data.defaultImg,
    b: $props.info.rank && $props.info.rank < 11
  }, $props.info.rank && $props.info.rank < 11 ? {
    c: common_vendor.p({
      rank: $props.info.rank
    })
  } : {}, {
    d: common_vendor.t($props.info.name),
    e: common_vendor.t($props.info.service_num),
    f: common_vendor.t($props.info.activity_duration),
    g: common_vendor.p({
      type: "iconfont-location-outline",
      ["custom-prefix"]: "iconfont",
      size: "16",
      color: "#A5ADBA"
    }),
    h: $props.info.show_distance
  }, $props.info.show_distance ? {
    i: common_vendor.t($props.info.show_distance)
  } : {}, {
    j: common_vendor.t($props.info.address),
    k: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f5b0dd7f"]]);
wx.createComponent(Component);
//# sourceMappingURL=associationItem.js.map
