"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const LevelIcon = () => "../LevelIcon/index.js";
const _sfc_main = {
  name: "stadiumItem",
  components: {
    LevelIcon
  },
  emits: ["reserve", "click"],
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    },
    type: {
      type: String,
      default: () => {
        return "";
      }
    },
    pageType: {
      type: String,
      default: "level"
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
      return this.info.tag_ids_str.split(",");
    },
    showImage() {
      return this.info.avatar ? this.info.avatar : "https://cdn-static.papa.com.cn/social/default-social.png";
    },
    getClass() {
      if (this.info.rank_num < 4) {
        return "rank_" + this.info.rank_num;
      } else {
        return "rank_4";
      }
    },
    showRank() {
      return this.info.rank_num < 10 && this.info.rank_num > 0 && this.pageType == "level";
    },
    showStar() {
      return this.pageType == "star";
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
      common_vendor.index.navigateTo({
        url: "/pages-sub/instructorDetail/index?instructor_id=" + this.info.instructor_id
      });
    }
  }
};
if (!Array) {
  const _component_LevelIcon = common_vendor.resolveComponent("LevelIcon");
  _component_LevelIcon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.showImage,
    b: common_vendor.t($props.info.name),
    c: common_vendor.p({
      level: $props.info.level
    }),
    d: $options.showStar
  }, $options.showStar ? {
    e: common_vendor.f(5 - $props.info.star_level, (item, k0, i0) => {
      return {
        a: item
      };
    }),
    f: common_assets._imports_0$2,
    g: common_vendor.f($props.info.star_level, (item, k0, i0) => {
      return {
        a: item
      };
    }),
    h: common_assets._imports_0$1
  } : {}, {
    i: $options.showRank
  }, $options.showRank ? {
    j: common_vendor.t($props.info.rank_num),
    k: common_vendor.n($options.getClass)
  } : {}, {
    l: common_vendor.f($options.tagList.slice(0, 5), (sport_item, sindex, i0) => {
      return {
        a: common_vendor.t(sport_item),
        b: sindex
      };
    }),
    m: $options.tagList.length > 5
  }, $options.tagList.length > 5 ? {} : {}, {
    n: common_vendor.t($props.info.total_service_num),
    o: common_vendor.t($props.info.total_service_duration),
    p: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-22a5ebd3"]]);
wx.createComponent(Component);
//# sourceMappingURL=index.js.map
