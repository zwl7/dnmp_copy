"use strict";
const common_vendor = require("../../../common/vendor.js");
const ceilLine = () => "./ceilLine.js";
const _sfc_main = {
  components: {
    ceilLine
  },
  props: {
    userList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    isEdit: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  methods: {
    getIsBorder(index) {
      return index != this.userList.length - 1;
    },
    handleEdit(item, index) {
      this.$emit("edit", { data: item, index });
    },
    handleDelete(item, index) {
      this.$emit("delete", { data: item, index });
    },
    handleToDetail(item) {
      this.$emit("detail", { data: item });
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_ceilLine = common_vendor.resolveComponent("ceilLine");
  (_easycom_uv_icon2 + _component_ceilLine)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.userList, (item, index, i0) => {
      return common_vendor.e($props.isEdit ? {
        a: common_vendor.o(($event) => $options.handleEdit(item), index),
        b: "8e772293-1-" + i0 + "," + ("8e772293-0-" + i0),
        c: common_vendor.p({
          name: "edit-pen",
          size: "40rpx",
          color: "#909399"
        }),
        d: common_vendor.o(($event) => $options.handleDelete(item), index),
        e: "8e772293-2-" + i0 + "," + ("8e772293-0-" + i0),
        f: common_vendor.p({
          name: "trash",
          size: "40rpx",
          color: "#909399"
        })
      } : {
        g: "8e772293-3-" + i0 + "," + ("8e772293-0-" + i0),
        h: common_vendor.p({
          name: "arrow-right",
          size: "32rpx",
          color: "#909399"
        }),
        i: common_vendor.o(($event) => $options.handleToDetail(item), index)
      }, {
        j: index,
        k: "8e772293-0-" + i0,
        l: common_vendor.p({
          title: item.name,
          isGroup: true,
          border: $options.getIsBorder(index),
          ["is-link"]: false
        })
      });
    }),
    b: $props.isEdit
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8e772293"]]);
wx.createComponent(Component);
