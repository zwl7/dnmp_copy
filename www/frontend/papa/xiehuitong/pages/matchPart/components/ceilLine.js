"use strict";
const core_themeMixins = require("../../../core/themeMixins.js");
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  mixins: [core_themeMixins.themeMixins],
  props: {
    customStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    titleStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    valueStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    title: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    isLink: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: false
    },
    isGroup: {
      type: Boolean,
      default: false
    },
    index: {
      type: String,
      default: ""
    },
    linkColor: {
      type: String,
      default: ""
    }
  },
  computed: {
    outCustomStyle() {
      let heightObj = {
        height: this.isGroup ? "104rpx" : "84rpx"
      };
      let styObj = Object.assign({}, this.customStyle, heightObj);
      return styObj;
    },
    showIndex() {
      return Boolean(this.index);
    },
    linkColorGetter() {
      return this.linkColor || this.themePrimaryColorGetter;
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit("customClick");
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  _easycom_uv_icon2();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.showIndex
  }, $options.showIndex ? {
    b: common_vendor.t($props.index)
  } : {}, {
    c: common_vendor.t($props.title),
    d: common_vendor.s($props.titleStyle),
    e: common_vendor.t($props.value),
    f: $props.isLink
  }, $props.isLink ? {
    g: common_vendor.p({
      name: "arrow-right",
      color: $props.linkColor
    })
  } : {}, {
    h: common_vendor.s($props.valueStyle),
    i: common_vendor.n({
      borderBottom: $props.border
    }),
    j: common_vendor.s($options.outCustomStyle),
    k: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4e07a5c5"]]);
wx.createComponent(Component);
