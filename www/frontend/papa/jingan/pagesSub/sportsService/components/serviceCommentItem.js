"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  name: "ActivityItem",
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    onItemClick() {
      this.$emit("click", this.item);
    },
    previewImage(current) {
      common_vendor.index.previewImage({
        urls: this.item.images,
        current
      });
    },
    handleComment() {
      this.$emit("comment", this.item);
    },
    handleLike() {
      this.$emit("like", this.item);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.item.categoryName),
    b: $props.item.avatar,
    c: common_vendor.t($props.item.userName),
    d: common_vendor.t($props.item.createTime),
    e: $props.item.status
  }, $props.item.status ? {
    f: common_vendor.t($props.item.status)
  } : {}, {
    g: common_vendor.t($props.item.content),
    h: $props.item.images && $props.item.images.length
  }, $props.item.images && $props.item.images.length ? {
    i: common_vendor.f($props.item.images, (img, index, i0) => {
      return {
        a: index,
        b: img,
        c: common_vendor.o(($event) => $options.previewImage(index), index)
      };
    })
  } : {}, {
    j: $props.item.location
  }, $props.item.location ? {
    k: common_vendor.t($props.item.location)
  } : {}, {
    l: common_vendor.o((...args) => $options.handleComment && $options.handleComment(...args)),
    m: common_assets._imports_0$5,
    n: common_vendor.t($props.item.likes || 0),
    o: common_vendor.o((...args) => $options.handleLike && $options.handleLike(...args)),
    p: common_vendor.o((...args) => $options.onItemClick && $options.onItemClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fe264a76"]]);
wx.createComponent(Component);
