"use strict";
const common_assets = require("../../../common/assets.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "stadiumItem",
  emits: ["reserve", "click"],
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    },
    pageType: {
      type: String,
      default: () => {
        return "level";
      }
    },
    type: {
      type: String,
      default: () => {
        return "";
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
    tagList() {
      return this.info.tag_ids_arr ? this.info.tag_ids_arr.map((e) => e.tag_id_str) : [];
    },
    showImage() {
      return this.info.avatar_str ? this.info.avatar_str : common_assets.defaultAvatar;
    },
    showStar() {
      return this.pageType == "star" && this.info.star_level > 0;
    }
  },
  methods: {
    getIcon(type, value) {
      return this.$dict.getDictLabel("promoteLevelList", value, {
        labelKey: type
      });
    },
    handleReserve() {
      this.$emit("reserve", this.info);
    },
    toDetail() {
      this.$emit("click", this.info);
      this.$emit("toDetail", this.info);
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_paTag = common_vendor.resolveComponent("paTag");
  (_easycom_uv_icon2 + _component_paTag)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.showImage,
    b: common_vendor.t($props.info.name),
    c: common_vendor.p({
      name: $options.getIcon("url", $props.info.level),
      color: "#faac0e",
      size: "18"
    }),
    d: common_vendor.t($props.info.level_str),
    e: common_vendor.s($options.getIcon("color", $props.info.level)),
    f: $options.showStar
  }, $options.showStar ? {
    g: common_vendor.f($props.info.star_level, (item, k0, i0) => {
      return {
        a: item
      };
    }),
    h: common_assets._imports_0$1
  } : {}, {
    i: common_vendor.f($options.tagList, (sport_item, sindex, i0) => {
      return {
        a: common_vendor.t(sport_item),
        b: sindex,
        c: "59910ce7-1-" + i0
      };
    }),
    j: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-59910ce7"]]);
wx.createComponent(Component);
//# sourceMappingURL=instructorDetailHeader.js.map
