"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "OrderItem",
  components: {},
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    showApplyBtn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      statusMap: {
        1: {
          text: "待派单",
          background: "#ffc301"
        },
        2: {
          text: "待服务",
          background: "#ff9f5a"
        },
        3: {
          text: "不通过",
          background: "#ff8e8e"
        },
        4: {
          text: "待评价",
          background: "#68baff"
        },
        5: {
          text: "已完成",
          background: "#4bd78e"
        }
      }
    };
  },
  methods: {
    onItemClick() {
      console.log("你好");
      common_vendor.index.navigateTo({
        url: `/pagesSub/sportsService/sprotOrder/detail`
      });
    },
    onApply() {
      this.$emit("apply", this.item);
    },
    onView() {
      this.$emit("view", this.item);
    },
    onReason() {
      this.$emit("reason", this.item);
    },
    // 唤起拒绝弹窗
    handleShowReject() {
      this.$refs.rejectPopue.open();
    }
  }
};
if (!Array) {
  const _component_paTag = common_vendor.resolveComponent("paTag");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  (_component_paTag + _easycom_uv_icon2)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.item.name),
    b: common_vendor.p({
      text: $props.item.dictName
    }),
    c: common_vendor.p({
      name: "map",
      size: "18",
      color: "#b6b6b6"
    }),
    d: common_vendor.t($props.item.address),
    e: common_vendor.p({
      name: "clock",
      size: "18",
      color: "#b6b6b6"
    }),
    f: common_vendor.t($props.item.serveStartDate),
    g: common_vendor.t($props.item.serveEndDate),
    h: common_vendor.t($props.item.createTime)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-19a0e0e3"]]);
wx.createComponent(Component);
//# sourceMappingURL=serviceDetailTitle.js.map
