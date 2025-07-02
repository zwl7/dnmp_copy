"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    statusList: {
      type: Array,
      default: () => []
    },
    typeList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      statusText: "全部状态",
      typeText: "全部类型"
    };
  },
  methods: {
    openStatusPicker() {
      this.$refs.statusSheet.open();
    },
    openTypePicker() {
      this.$refs.typeSheet.open();
    },
    search(e, type) {
      console.log({ e, type });
      if (type == "status") {
        this.statusText = e.name;
        this.$emit("search", { serveWorkDevStatus: e.value });
      } else if (type == "type") {
        this.typeText = e.name;
        this.$emit("search", { dictId: e.dictId });
      }
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_action_sheet2 = common_vendor.resolveComponent("uv-action-sheet");
  (_easycom_uv_icon2 + _easycom_uv_action_sheet2)();
}
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_action_sheet = () => "../../../../node-modules/@climblee/uv-ui/components/uv-action-sheet/uv-action-sheet.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_action_sheet)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.statusText || "全部状态"),
    b: common_vendor.p({
      name: "arrow-down-fill",
      size: "6",
      height: "4",
      color: "#303133"
    }),
    c: common_vendor.o((...args) => $options.openStatusPicker && $options.openStatusPicker(...args)),
    d: common_vendor.t($data.typeText || "全部类型"),
    e: common_vendor.p({
      name: "arrow-down-fill",
      size: "6",
      height: "4",
      color: "#303133"
    }),
    f: common_vendor.o((...args) => $options.openTypePicker && $options.openTypePicker(...args)),
    g: common_vendor.sr("statusSheet", "3c5750bb-2"),
    h: common_vendor.o((e) => {
      $options.search(e, "status");
    }),
    i: common_vendor.p({
      round: true,
      actions: $props.statusList,
      name: "label",
      title: "请选择状态"
    }),
    j: common_vendor.sr("typeSheet", "3c5750bb-3"),
    k: common_vendor.o((e) => {
      $options.search(e, "type");
    }),
    l: common_vendor.p({
      round: true,
      actions: $props.typeList,
      title: "请选择类型"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3c5750bb"]]);
wx.createComponent(Component);
