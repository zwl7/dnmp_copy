"use strict";
const common_assets = require("../../../common/assets.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "newsListItem",
  props: {
    type: {
      type: String,
      default: "normal"
      //normal top recommend
    },
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
  mounted() {
  },
  methods: {
    dealImag(info) {
      let returnImg = "";
      if (info.show_image) {
        returnImg = info.show_image;
      } else if (info.video_banner) {
        returnImg = info.video_banner;
      } else {
        returnImg = common_assets.default_img;
      }
      return returnImg;
    },
    handleClick(event) {
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.type === "top"
  }, $props.type === "top" ? {
    b: $options.dealImag($props.info),
    c: common_vendor.t($props.info.name)
  } : {}, {
    d: $props.type === "recommend"
  }, $props.type === "recommend" ? {
    e: $options.dealImag($props.info),
    f: common_vendor.t($props.info.name),
    g: common_vendor.t($props.info.show_time),
    h: common_vendor.t($props.info.visit_count)
  } : {}, {
    i: $props.type == "normal"
  }, $props.type == "normal" ? common_vendor.e({
    j: common_vendor.t($props.info.name),
    k: common_vendor.o((...args) => _ctx.toDetail && _ctx.toDetail(...args)),
    l: common_vendor.t($props.info.show_time),
    m: $props.info.visit_count
  }, $props.info.visit_count ? {
    n: common_vendor.t($props.info.visit_count)
  } : {}, {
    o: $options.dealImag($props.info)
  }) : {}, {
    p: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ea7b642e"]]);
wx.createComponent(Component);
