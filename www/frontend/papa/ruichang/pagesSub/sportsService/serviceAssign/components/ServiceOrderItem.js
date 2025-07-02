"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const common_vendor = require("../../../../common/vendor.js");
const rejectPopue = () => "./rejectPopue.js";
const bottomButton = () => "../../../../components/bottomButton.js";
const _sfc_main = {
  name: "ServiceOrderItem",
  components: {
    rejectPopue,
    bottomButton
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    showApplyBtn: {
      type: Boolean,
      default: false
    },
    showStyleBtn: {
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
    handelAccept() {
      this.$emit("accept", this.item);
    },
    onView() {
      this.$emit("detail", this.item);
    },
    // 唤起拒绝弹窗
    handleShowReject() {
      this.$refs.rejectPopue.open();
    },
    handleConfirm(value) {
      this.$emit(
        "reject",
        __spreadProps(__spreadValues({}, this.item), {
          rejectReason: value
        }),
        () => {
          this.$refs.rejectPopue.close();
        }
      );
    }
  }
};
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_paTag = common_vendor.resolveComponent("paTag");
  const _component_rejectPopue = common_vendor.resolveComponent("rejectPopue");
  (_easycom_uv_icon2 + _component_paTag + _component_rejectPopue)();
}
const _easycom_uv_icon = () => "../../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.item.serveWorkStatStatus
  }, $props.item.serveWorkStatStatus ? {
    b: common_vendor.t($props.item.serveWorkStatStatusCn),
    c: $data.statusMap[$props.item.serveWorkStatStatus].background
  } : {}, {
    d: common_vendor.t($props.item.name),
    e: common_vendor.p({
      name: "arrow-right",
      size: "14"
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
    l: !$props.showStyleBtn
  }, !$props.showStyleBtn ? {
    m: common_vendor.t($props.item.createTime ? $props.item.createTime.slice(0, -3) : "")
  } : {}, {
    n: common_vendor.o((...args) => $options.onView && $options.onView(...args)),
    o: $props.showStyleBtn
  }, $props.showStyleBtn ? {
    p: common_vendor.o(($event) => _ctx.$emit("publishStyle", $props.item))
  } : {}, {
    q: $props.item.serveWorkStatStatus === "no_pass"
  }, $props.item.serveWorkStatStatus === "no_pass" ? {
    r: common_vendor.o((...args) => $options.handleShowReject && $options.handleShowReject(...args))
  } : {}, {
    s: common_vendor.o((...args) => $options.onView && $options.onView(...args)),
    t: common_vendor.sr("rejectPopue", "4dd6385e-4"),
    v: common_vendor.o($options.handleConfirm),
    w: common_vendor.p({
      editable: !$props.item.serveWorkStatStatus === "no_pass",
      reason: $props.item.rejectReason
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4dd6385e"]]);
wx.createComponent(Component);
//# sourceMappingURL=ServiceOrderItem.js.map
