"use strict";
const utils_enum_useOption = require("../../../../utils/enum/useOption.js");
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
    },
    type: {
      type: String,
      default: () => {
        return "";
      }
    }
  },
  data() {
    return {
      tagList: [],
      showLevelTag: []
    };
  },
  computed: {
    toDistance() {
      this.info;
      let distance = "位置未知";
      return distance;
    },
    showImage() {
      return this.info.show_image || this.info.cover_image_url;
    }
  },
  watch: {
    info: {
      handler(val) {
        if (val) {
          let res = this.formatLevelTag(val.level_info_json_array);
          this.showLevelTag = res.showLevelTag;
          this.tagList = res.tagList;
        }
      },
      deep: true,
      immediate: true
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
    },
    formatLevelTag(level_info_json_array) {
      let list = [];
      let tagList = [];
      try {
        let levelSet = /* @__PURE__ */ new Set();
        level_info_json_array.sort((a, b) => {
          return a.level - b.level;
        });
        level_info_json_array.forEach((item) => {
          levelSet.add(item.level);
          tagList.push(item.sport_tag_id_str);
        });
        this.tagList = tagList;
        let options = utils_enum_useOption.useOptions();
        levelSet.forEach((item) => {
          let level_str = options.promoteLevelList.find((citem) => citem.value == item);
          if (level_str) {
            list.push({
              level: item,
              level_str: level_str.label
            });
          }
        });
      } catch (error) {
        console.error("------showLevelTag------", error);
      }
      console.log("------showLevelTag------", list);
      return {
        showLevelTag: list,
        tagList
      };
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_pa_tag = common_vendor.resolveComponent("pa-tag");
  (_easycom_uv_icon2 + _component_pa_tag)();
}
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.showImage,
    b: common_vendor.f($data.showLevelTag, (item, index, i0) => {
      return {
        a: "3398d194-0-" + i0,
        b: common_vendor.p({
          name: $options.getIcon("url", item.level),
          color: "#faac0e",
          size: "18"
        }),
        c: common_vendor.t(item.level_str),
        d: index,
        e: common_vendor.s($options.getIcon("color", item.level))
      };
    }),
    c: common_vendor.t($props.info.name),
    d: common_vendor.f($data.tagList.slice(0, 5), (tag, sindex, i0) => {
      return {
        a: common_vendor.t(tag),
        b: sindex,
        c: "3398d194-1-" + i0
      };
    }),
    e: $data.tagList.length > 5
  }, $data.tagList.length > 5 ? {} : {}, {
    f: $props.type == "search"
  }, $props.type == "search" ? common_vendor.e({
    g: $props.type == "search"
  }, $props.type == "search" ? {
    h: common_vendor.t($props.info.type_str)
  } : {}) : {}, {
    i: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3398d194"]]);
wx.createComponent(Component);
