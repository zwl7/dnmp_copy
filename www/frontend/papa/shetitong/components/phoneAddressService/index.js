"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "detailService",
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    toPhone() {
      let phone = this.info.contact_phone || this.info.service_tel;
      if (!phone) {
        this.$toast("暂无联系方式");
        return;
      }
      common_vendor.index.makePhoneCall({
        phoneNumber: phone,
        fail(err) {
          console.error(err);
        }
      });
    },
    toMap() {
      var _a;
      if (!this.info.lat || !this.info.lng) {
        this.$toast("暂无位置信息");
        return;
      }
      common_vendor.index.openLocation({
        latitude: Number(this.info.lat),
        //要去的纬度
        longitude: Number(this.info.lng),
        //要去的经度
        address: (_a = this.info.detail_address) != null ? _a : "",
        //要去的具体地址
        scale: 16
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.info.detail_address ? $props.info.detail_address : "暂无地址"),
    b: common_vendor.o((...args) => $options.toMap && $options.toMap(...args)),
    c: common_vendor.o((...args) => $options.toPhone && $options.toPhone(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-54813dab"]]);
wx.createComponent(Component);
//# sourceMappingURL=index.js.map
