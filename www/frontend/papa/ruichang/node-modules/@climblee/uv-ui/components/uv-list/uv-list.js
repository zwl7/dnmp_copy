"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "uv-list",
  mixins: [common_vendor.mpMixin, common_vendor.mixin],
  "mp-weixin": {
    options: {
      multipleSlots: false
    }
  },
  props: {
    border: {
      type: Boolean,
      default: false
    },
    borderColor: {
      type: String,
      default: "#dadbde"
    },
    // 排版方向，默认row，列表里面使用其他组件  最好设置成column
    direction: {
      type: String,
      default: "row"
    },
    // 内边距
    padding: {
      type: [String, Number],
      default: "20rpx 30rpx"
    }
  },
  created() {
    this.firstChildAppend = false;
  },
  computed: {
    parentData() {
      return [this.direction, this.padding];
    }
  },
  methods: {
    loadMore(e) {
      this.$emit("scrolltolower");
    },
    scroll(e) {
      this.$emit("scroll", e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.border
  }, $props.border ? {
    b: common_vendor.s({
      "background-color": $props.borderColor
    })
  } : {}, {
    c: $props.border
  }, $props.border ? {
    d: common_vendor.s({
      "background-color": $props.borderColor
    })
  } : {}, {
    e: common_vendor.s(_ctx.$uv.addStyle(_ctx.customStyle))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-df0c8042"]]);
wx.createComponent(Component);
//# sourceMappingURL=uv-list.js.map
