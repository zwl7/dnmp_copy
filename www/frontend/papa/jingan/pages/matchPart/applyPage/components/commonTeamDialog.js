"use strict";
const common_vendor = require("../../../../common/vendor.js");
const bottomButton = () => "../../../../components/bottomButton.js";
const roundButton = () => "../../components/roundButton.js";
const _sfc_main = {
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    },
    projectInfo: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: {
    bottomButton,
    roundButton
  },
  computed: {},
  data() {
    return {
      teamList: ["南昌中学男子排球队", "南昌中学女子排球队"]
    };
  },
  methods: {
    open() {
      this.$refs["popup"].open();
    },
    close() {
      this.$refs["popup "].close();
    },
    // 格式化项目数据
    formatProjectData(data) {
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_roundButton = common_vendor.resolveComponent("roundButton");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _easycom_uv_safe_bottom2 = common_vendor.resolveComponent("uv-safe-bottom");
  const _easycom_uv_popup2 = common_vendor.resolveComponent("uv-popup");
  (_easycom_uv_icon2 + _component_roundButton + _component_bottomButton + _easycom_uv_safe_bottom2 + _easycom_uv_popup2)();
}
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
const _easycom_uv_safe_bottom = () => "../../../../node-modules/@climblee/uv-ui/components/uv-safe-bottom/uv-safe-bottom.js";
const _easycom_uv_popup = () => "../../../../node-modules/@climblee/uv-ui/components/uv-popup/uv-popup.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_safe_bottom + _easycom_uv_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "close"
    }),
    b: common_vendor.o((...args) => $options.close && $options.close(...args)),
    c: common_vendor.f($data.teamList, (item, index, i0) => {
      return {
        a: "21683594-2-" + i0 + ",21683594-0",
        b: common_vendor.p({
          title: item,
          isSelect: index == 1
        }),
        c: index
      };
    }),
    d: common_vendor.p({
      name: "setting",
      color: "#323233",
      size: "16"
    }),
    e: common_vendor.p({
      borderType: "dashed"
    }),
    f: common_vendor.p({
      name: "plus",
      color: "#646566",
      size: "16"
    }),
    g: common_vendor.p({
      borderType: "dashed"
    }),
    h: common_vendor.p({
      disabled: false
    }),
    i: common_vendor.sr("popup", "21683594-0"),
    j: common_vendor.o(_ctx.change),
    k: common_vendor.p({
      mode: "bottom",
      round: "16",
      ["custom-style"]: "height: 80vh;"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-21683594"]]);
wx.createComponent(Component);
