"use strict";
const common_vendor = require("../../../common/vendor.js");
const rejectPopue = () => "./rejectPopue.js";
const _sfc_main = {
  name: "OrderItem",
  components: {
    rejectPopue
  },
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
        order_wait: {
          text: "待接单",
          background: "#ffc301"
        },
        serve_wait: {
          text: "待服务",
          background: "#ff9f5a"
        },
        no_pass: {
          text: "不通过",
          background: "#ff8e8e"
        },
        rating_wait: {
          text: "待评价",
          background: "#68baff"
        },
        completed: {
          text: "已完成",
          background: "#4bd78e"
        }
      }
    };
  },
  methods: {
    onItemClick() {
      console.log("你好");
      this.$emit("view", this.item);
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
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_paTag = common_vendor.resolveComponent("paTag");
  (_easycom_uv_icon2 + _component_paTag)();
}
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return common_vendor.e({
    a: $props.item.serveWorkStatStatus
  }, $props.item.serveWorkStatStatus ? {
    b: common_vendor.t($props.item.serveWorkStatStatusCn),
    c: (_a = $data.statusMap[$props.item.serveWorkStatStatus]) == null ? void 0 : _a.background
  } : {}, {
    d: common_vendor.t($props.item.name),
    e: common_vendor.p({
      name: "arrow-right",
      size: "18",
      color: "#b6b6b6"
    }),
    f: common_vendor.t($props.item.dictName),
    g: common_vendor.p({
      name: "map",
      size: "18",
      color: "#b6b6b6"
    }),
    h: common_vendor.t($props.item.address),
    i: common_vendor.p({
      name: "clock",
      size: "18",
      color: "#b6b6b6"
    }),
    j: common_vendor.t($props.item.serveStartDate),
    k: common_vendor.t($props.item.serveEndDate),
    l: common_vendor.t($props.item.createTime ? $props.item.createTime.slice(0, -3) : ""),
    m: $props.item.serveWorkStatStatus === "no_pass"
  }, $props.item.serveWorkStatStatus === "no_pass" ? {
    n: common_vendor.o((...args) => _ctx.showReason && _ctx.showReason(...args))
  } : {}, {
    o: $props.item.serveWorkStatStatus === "rating_wait"
  }, $props.item.serveWorkStatStatus === "rating_wait" ? {
    p: common_vendor.o((...args) => _ctx.showReason && _ctx.showReason(...args))
  } : {}, {
    q: common_vendor.o((...args) => $options.onView && $options.onView(...args)),
    r: $props.item.status === "不通过"
  }, $props.item.status === "不通过" ? {
    s: common_vendor.o((...args) => $options.onReason && $options.onReason(...args))
  } : {}, {
    t: common_vendor.o((...args) => $options.onItemClick && $options.onItemClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f0820c3d"]]);
wx.createComponent(Component);
//# sourceMappingURL=OrderItem.js.map
