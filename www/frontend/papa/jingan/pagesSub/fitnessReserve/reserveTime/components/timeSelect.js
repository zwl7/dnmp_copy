"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    selectDate(dateObj) {
      var that = this;
      if (dateObj.n <= 0) {
        common_vendor.index.showToast({
          title: "报名人数已满",
          icon: "none"
        });
        return;
      }
      this.list.forEach((item, index) => {
        if (item.t === dateObj.t) {
          item.isSelected = true;
          that.$set(that.list, index, item);
        } else {
          item.isSelected = false;
          that.$set(that.list, index, item);
        }
      });
      this.$emit("sendData", dateObj);
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.list, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.t),
        b: common_vendor.t(item.n),
        c: item.isSelected
      }, item.isSelected ? {
        d: "312f0070-0-" + i0,
        e: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: "iconfont-timer-line",
          color: "#fff"
        })
      } : {}, {
        f: common_vendor.n(item.isSelected ? "selected" : ""),
        g: index,
        h: common_vendor.o(($event) => $options.selectDate(item), index)
      });
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-312f0070"]]);
wx.createComponent(Component);
