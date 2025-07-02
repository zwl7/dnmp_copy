"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "voteItem",
  emits: ["reserve", "toDetail"],
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
      defaultImg: "https://cdn-static.papa.com.cn/yuncheng/voteZone/vote-default.png"
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
    getBg(tag) {
      return this.$dict.getDictLabel("voteStatusColorList", tag, {
        labelKey: "color",
        valueKey: "value"
      });
    },
    dealImages(images) {
      let showImg = this.defaultImg;
      if (images) {
        showImg = images.split(",")[0];
      }
      return showImg;
    },
    handleReserve() {
      this.$emit("reserve", this.info);
    },
    toDetail() {
      this.$emit("click", this.info);
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  _easycom_uv_icon2();
}
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.info.vote_status_str),
    b: common_vendor.s($options.getBg($props.info.vote_status || "")),
    c: $options.dealImages($props.info.images),
    d: common_vendor.t($props.info.name),
    e: $props.info.vote_status == "3" ? "#909399" : "rgba(50, 50, 51, 1)",
    f: common_vendor.p({
      name: "clock",
      color: "#A5ADBA",
      size: "15"
    }),
    g: common_vendor.t($props.info.start_time),
    h: common_vendor.t($props.info.end_time),
    i: common_vendor.t($props.info.total_vote_count),
    j: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a0560872"]]);
wx.createComponent(Component);
