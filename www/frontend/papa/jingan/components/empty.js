"use strict";
var __defProp = Object.defineProperty;
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
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "empty",
  props: {
    width: {
      type: [Number, String],
      default: 160
    },
    height: {
      type: [Number, String],
      default: 160
    },
    icon: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    type: {
      type: String
    },
    marginTop: {
      type: [Number, String],
      default: 90
    }
  },
  computed: {
    emptyData() {
      return this.getEmptyData(this.type);
    }
  },
  data() {
    return {};
  },
  methods: {
    getEmptyData(type) {
      let obj = {
        error: {
          icon: "错误",
          text: ""
        },
        building: {
          icon: "建设中",
          text: "正在建设中"
        },
        rank: {
          icon: "暂无榜单",
          text: "暂无榜单"
        },
        apply: {
          icon: "暂无报名",
          text: "暂无报名"
        },
        stadium: {
          icon: "暂无场馆",
          text: "暂无场馆"
        },
        order: {
          icon: "暂无订单",
          text: "暂无订单"
        },
        data: {
          icon: "暂无内容",
          text: "暂无内容"
        },
        people: {
          icon: "暂无人员",
          text: "暂无人员"
        },
        collect: {
          icon: "暂无收藏",
          text: "暂无收藏"
        },
        search: {
          icon: "暂无搜索内容",
          text: "暂无搜索内容"
        },
        network: {
          icon: "暂无网络",
          text: "暂无网络"
        },
        message: {
          icon: "暂无消息",
          text: "暂无消息"
        },
        coupon: {
          icon: "暂无优惠券",
          text: "暂无优惠券"
        },
        subscribe: {
          icon: "暂无预约",
          text: "暂无预约"
        },
        info: {
          icon: "暂无资料",
          text: "暂无资料"
        },
        sportCode: {
          icon: "暂无内容",
          text: "暂无权益"
        },
        applyPeople: {
          icon: "apply-people-empty",
          text: "暂无报名人员"
        }
      };
      let item = obj[type] ? obj[type] : obj["data"];
      let iconUrl = `https://cdn-static.papa.com.cn/yuncheng/empty/${item.icon}.png`;
      let icon = this.icon ? this.icon : iconUrl;
      let text = this.text ? this.text : item.text;
      return {
        icon,
        text
      };
    }
  }
};
if (!Array) {
  const _easycom_uv_empty2 = common_vendor.resolveComponent("uv-empty");
  _easycom_uv_empty2();
}
const _easycom_uv_empty = () => "../node-modules/@climblee/uv-ui/components/uv-empty/uv-empty.js";
if (!Math) {
  _easycom_uv_empty();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p(__spreadValues({
      width: $props.width,
      height: $props.height,
      text: $options.emptyData.text,
      icon: $options.emptyData.icon
    }, _ctx.$attrs)),
    b: $props.marginTop + "px"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
