"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "goodsNav",
  emits: ["click", "buttonClick"],
  props: {
    options: {
      type: Array,
      default() {
        return [{
          icon: "shop",
          text: "店铺",
          color: ""
        }, {
          icon: "cart",
          text: "购物车",
          color: ""
        }];
      }
    },
    buttonGroup: {
      type: Array,
      default() {
        return [
          {
            text: "加入购物车",
            backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
            color: "#fff"
          },
          {
            text: "立即购买",
            backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
            color: "#fff"
          }
        ];
      }
    },
    fill: {
      type: Boolean,
      default: false
    },
    stat: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(index, item) {
      this.$emit("click", {
        index,
        content: item
      });
    },
    buttonClick(index, item) {
      if (common_vendor.index.report && this.stat) {
        common_vendor.index.report(item.text, item.text);
      }
      this.$emit("buttonClick", {
        index,
        content: item
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.options, (item, index, i0) => {
      return common_vendor.e({
        a: "939ad800-0-" + i0,
        b: common_vendor.p({
          type: item.icon,
          size: "20",
          color: item.color
        }),
        c: common_vendor.t(item.text),
        d: item.info
      }, item.info ? {
        e: common_vendor.t(item.info),
        f: item.info > 9 ? 1 : "",
        g: item.infoBackgroundColor ? item.infoBackgroundColor : "#ff0000",
        h: item.infoColor ? item.infoColor : "#fff"
      } : {}, {
        i: item.is_share
      }, item.is_share ? {} : {}, {
        j: index,
        k: common_vendor.o(($event) => $options.onClick(index, item), index)
      });
    }),
    b: common_vendor.f($props.buttonGroup, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: item.color,
        c: index,
        d: item.backgroundColor,
        e: item.color,
        f: common_vendor.o(($event) => $options.buttonClick(index, item), index)
      };
    }),
    c: $props.fill ? 1 : ""
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gxm/uniapp-shandong/components/goodNav/goodNav.vue"]]);
wx.createComponent(Component);
